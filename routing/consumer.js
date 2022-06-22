const amqp = require("amqplib");

const consumer = async () => {
  try {
    const exchange = "orders";
    const consumerStatus = "1";
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    await channel.prefetch(1);
    await channel.assertExchange(exchange, "direct", { durable: false });
    const q = await channel.assertQueue("", { exclusive: true });
    await channel.bindQueue(q.queue, exchange, consumerStatus);
    channel.consume(
      q.queue,
      (msg) => {
        console.log(msg.content.toString());
        for (let i = 0; i < 999999999; i++) {}
        console.log("Done");

        channel.ack(msg);
      },
      { noAck: false }
    );
  } catch (error) {
    throw new Error(error.message);
  }
};

consumer();
