const amqp = require("amqplib");
const { ordersData, orderType, orderPayType } = require("./data");
const { orderStatus } = require("./data");
const publisher = async () => {
  try {
    // * * * {order Type, order Status, pay Type}
    const topicOrderNewStatus = `*.${orderStatus}.*`;
    const topicOrdersByOrderType = "online.#";
    const topicOrdersByCash = "*.New.Cash";
    const exchange = "orders";
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();

    let _ordersData = ordersData.map(async (orderItem) => {
      if (orderType[orderItem.order_status] == "New") {
        await channel.assertExchange(exchange, "topic", {
          durable: false,
        });
        await channel.assertQueue("", { exclusive: true });

        channel.publish(
          exchange,
          topicOrderNewStatus,
          Buffer.from(JSON.stringify(orderItem))
        );
      }

      if (orderType[orderItem.order_type] == "online") {
        await channel.assertExchange(exchange, "topic", { durable: false });
        await channel.assertQueue("", { exclusive: true });
        channel.publish(
          exchange,
          topicOrdersByOrderType,
          Buffer.from(JSON.stringify(orderItem))
        );
      }

      if (orderPayType[orderItem.order_pay_type] == "Cash") {
        await channel.assertExchange(exchange, "topic", { durable: false });
        await channel.assertQueue("", { exclusive: true });
        channel.publish(
          exchange,
          topicOrdersByCash,
          Buffer.from(JSON.stringify(orderItem))
        );
      }
      return orderItem;
    });

    await Promise.all(_ordersData);

    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 5000);
  } catch (error) {
    throw new Error(error.message);
  }
};

publisher();
