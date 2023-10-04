const { AMQPManager } = require("@ownhealthil/messenger");
const options = {
  //   connectionString: 'amqp://address.of.amqp.host', // AMQP host. Default - localhost
};
const messenger = new AMQPManager(options);

module.exports = messenger;
