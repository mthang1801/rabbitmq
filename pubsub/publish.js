const amqp = require("amqplib");
const productsData = require("./product.data");

const publishConnect = async () => {
  const connection = await amqp.connect("amqp://localhost:5672");
  const channel = await connection.createChannel();
  // const customerExchange = "customer";
  // let customerData = [
  //   {
  //     name: "Mai Van Thang",
  //     phone: "0123456789",
  //     email: "mthang1801@gmail.com",
  //   },
  // ];

  // await channel.assertExchange(customerExchange, "fanout", { durable: false });
  // channel.publish(
  //   customerExchange,
  //   "",
  //   Buffer.from(JSON.stringify(customerData))
  // );

  const productExchange = "product";

  await channel.assertExchange(productExchange, "fanout", { durable: false });
  productsData.forEach((data, i) => {
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
