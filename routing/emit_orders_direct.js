const amqp = require("amqplib");
const { orders, orderStatus } = require("./orders.data");
const publisher = async () => {
  try {
    const exchange = "orders";
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    await channel.assertExchange(exchange, "direct", { durable: false });
    const q = await channel.assertQueue("", { exclusive: true });
    for (let orderItem of orders) {
      await channel.bindQueue(q.queue, exchange, orderStatus[orderItem.status]);
      channel.publish(
        exchange,
        orderStatus[orderItem.status],
        Buffer.from(JSON.stringify(orderItem)),
        { priority: orderItem.status }
      );
    }
    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 5000);
  } catch (error) {
    throw new Error(error.message, error.status);
  }
};

publisher();
