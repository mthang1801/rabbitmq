const amqp = require("amqplib");
const { orderStatus } = require("./data");
const consumer = async () => {
  try {
    const topicOrderNewStatus = `*.${orderStatus}.*`;
    const topicOrdersByOrderType = "online.#";
    const topicOrdersByCash = "*.New.Cash";
    let topics = [
      topicOrderNewStatus,
      topicOrdersByOrderType,
      topicOrdersByCash,
    ];
    const exchange = "orders";
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    await channel.prefetch(1);
    await channel.assertExchange(exchange, "topic", { durable: false });
    const q = await channel.assertQueue("", { exclusive: true });
    let _topics = topics.map(async (key, i) => {
      await channel.bindQueue(q.queue, exchange, key);
      channel.consume(
        q.queue,
        (msg) => {
          console.log(key);
          let order = JSON.parse(msg.content.toString());
          console.log(order);
          for (let i = 0; i < 999999999; i++) {}
          console.log(`Consumed order ${order.id}`);
          channel.ack(msg);
        },
        { noAck: false }
      );

      return key;
    });

    Promise.all([..._topics]);
  } catch (error) {
    throw new Error(error.message);
  }
};

consumer();
