const amqp = require("amqplib");
const { orders } = require("./orders.data");
const publisher = async () => {
  try {
    const exchange = "orders";
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    await channel.assertExchange(exchange, "direct", { durable: false });
    await channel.assertQueue("", { exclusive: true });

    orders.map((orderItem) => {
      channel.publish(
        exchange,
        orderItem.status.toString(),
        Buffer.from(JSON.stringify(orderItem))
      );
      return orderItem;
    });

    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 5000);
  } catch (error) {
    throw new Error(error.message);
  }
};

publisher();
