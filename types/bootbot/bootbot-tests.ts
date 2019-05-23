import BootBot = require("bootbot");


const bot = new BootBot({
    accessToken: '0123456789',
    verifyToken: '0123456789',
    appSecret: '0123456789'
})

bot.on('message', (payload, chat) => chat.say(payload.message.text))

bot.start()

setTimeout(() => process.kill(0), 100)