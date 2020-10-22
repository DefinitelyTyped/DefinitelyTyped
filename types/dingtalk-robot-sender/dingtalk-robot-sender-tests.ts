import ChatBot = require('dingtalk-robot-sender');

const bot = new ChatBot({
  baseUrl: 'https://oapi.dingtalk.com/robot/send',
  accessToken: 'some token',
});

bot.send({
  msgtype: 'text',
  text: {
    content: '123',
  },
});

bot.text('123');
