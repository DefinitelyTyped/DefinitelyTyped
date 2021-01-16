import dbd = require('dbd.js');

const bot = new dbd.Bot({
	token: 'xxxxxxx-xxxxxx-xxx-xxxxxxxxx',
	prefix: '!'
});

bot.command({
	name: 'ping',
	code: '$ping ms'
});
