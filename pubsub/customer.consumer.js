const amqp = require("amqplib");

const customerConsumer = async () => {
  try {
    console.log("Customer Consumer");
    const customerExchange = "customer";
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    channel.prefetch(1);
    await channel.assertExchange(customerExchange, "fanout", {
      durable: false,
    });
    const q = await channel.assertQueue("", { exclusive: true });
    await channel.bindQueue(q.queue, customerExchange, "");
    channel.consume(
      q.queue,
      (msg) => {
        console.log(msg.content.toString());
        for (let i = 0; i < 9999999999; i++) {}
        console.log("Done");
        channel.ack(msg);
      },
      { noAck: false }
    );
  } catch (error) {
    throw new Error(error.message, error.status);
  }
};

customerConsumer();
