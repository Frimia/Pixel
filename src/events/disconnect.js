const client = require('../structures/Client.js');
const Logger = require('../utility/Logger.js');

client.on('disconnect', () => Logger.log('Pixel has disconnected.'));