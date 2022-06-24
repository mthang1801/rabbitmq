const amqp = require("amqplib");

(async function server() {
  try {
    const queue = "rpc_queue";
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    await channel.assertQueue(queue, { exclusive: true });
    channel.consume(
      queue,
      (msg) => {
        const receivedNumber = +msg.content.toString();
        console.log(`Server Received Number : ${receivedNumber}`);
        const sendData = `MVT-${Math.floor(
          Math.random() * 100000
        )}-${receivedNumber}`;
        console.log(`Server reply : ${sendData}`);
        channel.sendToQueue(msg.properties.replyTo, Buffer.from(sendData), {
          correlationId: msg.properties.correlationId,
        });
        channel.ack(msg);
      },
      { noAck: false }
    );
    setTimeout(() => {
      console.log("Server off");
      connection.close();
      process.exit(0);
    }, 5000);
  } catch (error) {
    console.log(error);
  }
})();
