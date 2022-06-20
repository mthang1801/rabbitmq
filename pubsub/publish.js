const amqp = require("amqplib");
const { products } = require("./product.data");
const { customers } = require("./customer.data");

const publishConnect = async () => {
  const connection = await amqp.connect("amqp://localhost:5672");
  const channel = await connection.createChannel();
  const customerExchange = "customer";

  await channel.assertExchange(customerExchange, "fanout", { durable: false });
  customers.forEach((customer) => {
    channel.publish(
      customerExchange,
      "",
      Buffer.from(JSON.stringify(customer))
    );
  });

  const productExchange = "product";

  await channel.assertExchange(productExchange, "fanout", { durable: false });
  products.forEach((data, i) => {
    channel.publish(
      productExchange,
      "",
      Buffer.from(JSON.stringify({ id: i + 1, ...data }))
    );
    console.log(`pushlished ${JSON.stringify(data)}`);
  });

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 5000);
};

publishConnect();
