const messenger = require("./messenger");
const logger = require("./logger");

const setUpRabbit = async () => {
  await messenger
    .connect({
      rejectUnauthorized: false,
    })
    .then(() => {
      logger.info("Connected to rabbitmq");
    });

  await messenger.createQueue({
    queueName: process.env.QUEUE_NAME,
    allowDeadLettering: true,
    isEphemeral: false,
    amqpOptions: {},
  });

  await messenger.createExchange({
    exchangeName: process.env.EXCHANGE_NAME,
    exchangeType: "topic",
  });

  await messenger
    .bindQueue({
      exchangeName: process.env.EXCHANGE_NAME,
      queueName: process.env.QUEUE_NAME,
      routingPattern: ["userCreated"],
    })
    .then(() => {
      logger.info("import queues asserted", {
        queueNames: [process.env.QUEUE_NAME],
      });
    });
};

module.exports = setUpRabbit;
