import * as TeleBot from "telebot";

let bot = new TeleBot('token');
bot = new TeleBot({
    token: 'TELEGRAM_BOT_TOKEN',
    polling: {
        interval: 1000,
        timeout: 0,
        limit: 100,
        retryTimeout: 5000,
        proxy: 'http://...'
    },
    webhook: {
        key: 'key.pem',
        cert: 'cert.pem',
        url: 'https//...',
        host: '0.0.0.0',
        port: 443,
        maxConnections: 40
    },
    allowedUpdates: [],
    usePlugins: ['askUser'],
    pluginFolder: '../plugins/',
    pluginConfig: {}
});

bot.on('text', (msg) => msg.reply.text(msg.text));

bot.start();

bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));

bot.on('sticker', (msg) => {
    return msg.reply.sticker('http://i.imgur.com/VRYdhuD.png', {asReply: true});
});

bot.on(/(show\s)?kitty*/, (msg) => {
    return msg.reply.photo('http://thecatapi.com/api/images/get');
});

bot.on(/^\/say (.+)$/, (msg, props) => {
    const text = props.match[1];
    return bot.sendMessage(msg.from.id, text, {replyToMessage: msg.message_id});
});

bot.on('edit', (msg) => {
    return msg.reply.text('I saw it! You edited message!', {asReply: true});
});

bot.on('/hello', (msg) => {
    return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
});

bot.on(['/start', 'audio', 'sticker'], msg => {
    return bot.sendMessage(msg.from.id, 'Bam!');
});

bot.mod('text', (data) => {
    const msg = data.message;
    msg.text = `📢 ${ msg.text }`;
    return data;
});

bot.modRun('text', {});

bot.plug({
    id: 'id',
    defaultConfig: {},
    plugin: () => {
    }
});

bot.keyboard([[]], {});

bot.button('this', 'test');

bot.inlineKeyboard([[]]);

bot.inlineQueryKeyboard([[]]);

bot.inlineButton('string', {});

bot.answerList('string', {}).results();

// Telegram API
bot.getMe();

bot.answerQuery();

bot.sendMessage(33,
    'text',
    {
        parseMode: 'HTML',
        webPreview: false
    }
);

bot.forwardMessage('33', 22, 11);

bot.deleteMessage('33', 22);

bot.sendPhoto('chat_id', 'buffer');

bot.sendAudio('chat_id', 'http://', {title: 'myPhoto'});

bot.sendDocument('chat_id', 'buffer');

bot.sendSticker(33, 'path');

bot.sendVideo('chat_id', 'buffer', {
        duration: 33,
        width: 111,
        height: 123,
        serverDownload: true
    }
);

bot.sendVideoNote('chat_id', 'buffer');

bot.sendVoice('chat_id', 'buffer',
    {
        replyToMessage: 33,
        replyMarkup: 'HTML',
        notification: false
    }
);

bot.sendLocation(33, [44, 33]);

bot.sendVenue(33, [11, 44], 'title', 'address');

bot.sendContact(33, '3123213', 'firstName', 'lastName');

bot.sendAction(33, 'action');

bot.sendGame(33, 'game_short_name', {
        replyToMessage: 33,
        notification: false
    }
);

bot.setGameScore(3, 3123123, {force: true});

bot.getGameHighScores(12312);

bot.getUserProfilePhotos(1231, {
        offset: -11,
        limit: 999
    }
);

bot.getFile('file_id');

bot.sendInvoice(
    123,
    {
        title: 'e',
        description: 'd',
        payload: 'c',
        providerToken: 'b',
        startParameter: 'a',
        currency: 'EUR',
        prices: [1, 2],
        photo: {
            url: 'http',
            width: 33,
            height: 3
        },
        need: {
            name: true
        },
        isFlexible: true,
        notification: false,
        replyToMessage: 33
    }
);

bot.getChat(1);

bot.leaveChat(2);

bot.getChatAdministrators(3);

bot.getChatMembersCount('33');

bot.getChatMember('33', 33);

bot.kickChatMember('33', 33);

bot.unbanChatMember(33, 99);

bot.editMessageText({
    inlineMsgId: 9999
}, 'text');

bot.editMessageCaption({
    inlineMsgId: 9999
}, 'caption');

bot.editMessageReplyMarkup({
        chatId: 33,
        messageId: 2
    }, {}
);

bot.answerCallbackQuery('callback_query_id');

bot.answerShippingQuery('shipping_query_id', false);

bot.answerPreCheckoutQuery('pre_checkout_query_id', true, {errorMessage: 'string'});

bot.setWebhook('string', {}, ['1', '2'], 33);

bot.getWebhookInfo();

bot.deleteWebhook();
