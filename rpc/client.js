const amqp = require("amqplib");
const { generateRandomString } = require("../utils/helper");

const client = async () => {
  try {
    const queue = "rpc_queue";
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    const correlationIds = Array.from({ length: 10 }).map((_) =>
      generateRandomString()
    );
    await channel.prefetch(1);
    const q = await channel.assertQueue("", { exclusive: true });
    let resPromise = correlationIds.map(async (correlationId, i) => {
      channel.sendToQueue(queue, Buffer.from((i + 2).toString()), {
        correlationId,
        replyTo: q.queue,
      });
      channel.consume(
        q.queue,
        (msg) => {
          console.log(`Client Received : ${msg.content.toString()}`);
          for (let i = 0; i < 9999999999; i++) {}
          console.log(`Done`);
          channel.ack(msg);
        },
        { noAck: false }
      );
    });

    Promise.all(resPromise);
  } catch (error) {
    console.log(error);
  }
};

client();
