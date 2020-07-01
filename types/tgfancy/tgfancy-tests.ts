import tgfancy = require('tgfancy');

const MyTgFancyBot = new tgfancy('token', {
    tgfancy: {
        chatIdResolution: true,
        emojification: true,
        kickWithoutBan: true,
        ratelimiting: {
            maxRetries: 132,
            timeout: 40000
        },
        webSocket: {
            url: 'ws://example.ws',
            autoOpen: true
        }
    }
});

MyTgFancyBot.resolveChatId('chat id');
MyTgFancyBot.openWebSocket();
MyTgFancyBot.closeWebSocket();
MyTgFancyBot.hasOpenWebSocket();
MyTgFancyBot.kickChatMember('chat id', 'user id');
MyTgFancyBot.kickChatMember(13128219, 3181422, true);
