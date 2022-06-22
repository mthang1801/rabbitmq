const amqp = require("amqplib");
const { data } = require("./data");
(async function publisher() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
})();
