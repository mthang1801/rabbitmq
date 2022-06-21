const amqp = require("amqplib");
const { orderStatus } = require("./orders.data");

const orderConsumer = async () => {
  try {
    const exchange = "orders";
    console.log("order Consumer");
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    channel.prefetch(1);
    await channel.assertExchange(exchange, "direct", { durable: false });
    const q = await channel.assertQueue("", { exclusive: true });
    for (let status of Object.values(orderStatus)) {
      await channel.bindQueue(q.queue, exchange, status);
    }

    channel.consume(
      q.queue,
      (msg) => {
        console.log(msg.content.toString());
        console.log(msg.fields.routingKey);
        console.log(msg.properties.priority);
        for (let i = 0; i < 1999999999; i++) {}
        console.log("Done");
        channel.ack(msg);
      },
      { noAck: false, priority: 1 }
    );
  } catch (error) {
    throw new Error(error.message, error.status);
  }
};

orderConsumer();
