import TelegramBot = require('node-telegram-bot-api');

const MyTelegramBot = new TelegramBot('token', { webHook: { host: 'myhost'}});

MyTelegramBot.startPolling({restart: true});
MyTelegramBot.stopPolling();
MyTelegramBot.isPolling();
MyTelegramBot.openWebHook();
MyTelegramBot.closeWebHook();
MyTelegramBot.hasOpenWebHook();
MyTelegramBot.getMe();
MyTelegramBot.getMe().then((value: TelegramBot.User) => {
    const username = value.username;
});
MyTelegramBot.setWebHook('http://typescriptlang.org', {max_connections: 100});
MyTelegramBot.deleteWebHook();
MyTelegramBot.getWebHookInfo();
MyTelegramBot.getUpdates({ timeout: 10 });
MyTelegramBot.processUpdate({ update_id: 1 });
MyTelegramBot.sendMessage(1234, 'test-text', {disable_web_page_preview: true});
const res: TelegramBot.InlineQueryResultArticle = {
    id: '1',
    type: 'article',
    title: 'Foo',
    input_message_content: {
        message_text: 'Bar'
    }
};
MyTelegramBot.answerInlineQuery('queryId', [res, res, res], { is_personal: true });
MyTelegramBot.forwardMessage(1234, 5678, 'memberID', { disable_notification: true });
MyTelegramBot.sendPhoto(1234, 'photo/path', { caption: 'Foo' });
MyTelegramBot.sendPhoto(1234, 'photo/path', { caption: 'Foo', parse_mode: 'HTML' });
MyTelegramBot.sendAudio(1234, 'audio/path', { caption: 'Foo' });
MyTelegramBot.sendAudio(1234, 'audio/path', { caption: 'Foo', parse_mode: 'Markdown' });
MyTelegramBot.sendDocument(1234, 'doc/path', { caption: 'Foo' }, { fileOption: true });
MyTelegramBot.sendDocument(1234, 'doc/path', { caption: 'Foo', parse_mode: 'HTML' }, { fileOption: true });
MyTelegramBot.sendPoll(1234, 'question', ['answer1', 'answer2'], { type: 'regular' });
MyTelegramBot.sendSticker(1234, 'sticker/path', { reply_to_message_id: 5678 });
MyTelegramBot.sendVideo(1234, 'video/path', { caption: 'Foo' });
MyTelegramBot.sendVideo(1234, 'video/path', { caption: 'Foo', parse_mode: 'MarkdownV2' });
MyTelegramBot.sendVideoNote(1234, 'video/path', { disable_notification: true });
MyTelegramBot.sendVoice(1234, 'voice/path', { caption: 'Foo' });
MyTelegramBot.sendVoice(1234, 'voice/path', { caption: 'Foo', parse_mode: 'HTML' });
MyTelegramBot.sendAnimation(1234, 'animation/path', { caption: 'Foo', duration: 100, width: 200, height: 300 });
MyTelegramBot.sendChatAction(1234, 'typing');
MyTelegramBot.kickChatMember(1234, 'myUserID');
MyTelegramBot.unbanChatMember(1234, 'myUserID');
MyTelegramBot.restrictChatMember(1234, 'myUserID', { can_add_web_page_previews: true, can_send_polls: false  });
MyTelegramBot.promoteChatMember(1234, 'myUserID', { can_change_info: true });
MyTelegramBot.exportChatInviteLink(1234);
MyTelegramBot.setChatPhoto(1234, 'My/File/ID');
MyTelegramBot.deleteChatPhoto(1234);
MyTelegramBot.setChatTitle(1234, 'Chat Title');
MyTelegramBot.setChatDescription(1234, 'Chat Description');
MyTelegramBot.pinChatMessage(1234, 'Pinned Message');
MyTelegramBot.unpinChatMessage(1234);
MyTelegramBot.answerCallbackQuery('432832');
MyTelegramBot.answerCallbackQuery({ callback_query_id: '432832' });
MyTelegramBot.editMessageText('test-text', { disable_web_page_preview: true });
MyTelegramBot.editMessageCaption('My Witty Caption', { message_id: 1245 });
MyTelegramBot.editMessageReplyMarkup({ inline_keyboard: [[{
    text: 'Foo'
}]] }, { message_id: 1244 });
MyTelegramBot.getUserProfilePhotos('myUserID', { limit: 10 });
MyTelegramBot.sendLocation(1234, 100, 200, { reply_to_message_id: 1234 });
MyTelegramBot.editMessageLiveLocation(100, 200, { message_id: 1245 });
MyTelegramBot.stopMessageLiveLocation({ message_id: 1245 });
MyTelegramBot.sendVenue(1234, 100, 200, 'Venue Title', '123 Fake St.', { reply_to_message_id: 1234 });
MyTelegramBot.sendContact(1234, '345-555-0192', 'John', { last_name: 'Smith', vcard: 'vcard_data' });
MyTelegramBot.getFile('My/File/ID');
MyTelegramBot.getFileLink('My/File/ID');
MyTelegramBot.getFileStream('My/File/ID');
MyTelegramBot.downloadFile('My/File/ID', 'mydownloaddir/');
MyTelegramBot.onText(/regex/, (msg, match) => { });
MyTelegramBot.removeTextListener(/regex/);
MyTelegramBot.onReplyToMessage(1234, 'mymessageID', (msg) => { });
MyTelegramBot.removeReplyListener(5466);
MyTelegramBot.getChat(1234);
MyTelegramBot.getChatAdministrators(1234);
MyTelegramBot.getChatMembersCount(1234);
MyTelegramBot.getChatMember(1234, 'myUserID');
MyTelegramBot.leaveChat(1234);
MyTelegramBot.setChatStickerSet(1234, 'sticker');
MyTelegramBot.deleteChatStickerSet(1234);
MyTelegramBot.sendGame(1234, 'MygameName', { reply_to_message_id: 1234 });
MyTelegramBot.setGameScore('myUserID', 99, { message_id: 1234 });
MyTelegramBot.getGameHighScores('myUserID', { message_id: 1234 });
MyTelegramBot.deleteMessage(1234, 'mymessageID');
MyTelegramBot.sendInvoice(1234, 'Invoice Title', 'Invoice Description', 'Invoice Payload', 'Providertoken', 'Startparameter', 'Currency', [{
    label: '$',
    amount: 1200
}], { is_flexible: true });
MyTelegramBot.answerShippingQuery('shippingQueryId', true, { shipping_options: [{
    id: '1',
    title: 'Foo',
    prices: [{
        label: '$',
        amount: 100
    }]
}] });
MyTelegramBot.answerPreCheckoutQuery('preCheckoutQueryId', true, { error_message: 'Bar' });
MyTelegramBot.addListener('message', (message: TelegramBot.Message, { type }) => { });
MyTelegramBot.addListener('callback_query', (query: TelegramBot.CallbackQuery) => { });
MyTelegramBot.addListener('inline_query', (query: TelegramBot.InlineQuery) => { });
MyTelegramBot.addListener('poll_answer', (answer: TelegramBot.PollAnswer) => { });
MyTelegramBot.addListener('chosen_inline_result', (result: TelegramBot.ChosenInlineResult) => { });
MyTelegramBot.addListener('channel_post', (message: TelegramBot.Message) => { });
MyTelegramBot.addListener('shipping_query', (query: TelegramBot.ShippingQuery) => { });
MyTelegramBot.addListener('pre_checkout_query', (query: TelegramBot.PreCheckoutQuery) => { });
MyTelegramBot.addListener('polling_error', (error: Error) => { });
MyTelegramBot.on('message', (message: TelegramBot.Message, { type }) => { });
MyTelegramBot.on('callback_query', (query: TelegramBot.CallbackQuery) => { });
MyTelegramBot.on('inline_query', (query: TelegramBot.InlineQuery) => { });
MyTelegramBot.on('poll_answer', (answer: TelegramBot.PollAnswer) => { });
MyTelegramBot.on('chosen_inline_result', (result: TelegramBot.ChosenInlineResult) => { });
MyTelegramBot.on('channel_post', (message: TelegramBot.Message) => { });
MyTelegramBot.on('shipping_query', (query: TelegramBot.ShippingQuery) => { });
MyTelegramBot.on('pre_checkout_query', (query: TelegramBot.PreCheckoutQuery) => { });
MyTelegramBot.on('polling_error', (error: Error) => { });
MyTelegramBot.once('message', (message: TelegramBot.Message, { type }) => { });
MyTelegramBot.once('callback_query', (query: TelegramBot.CallbackQuery) => { });
MyTelegramBot.once('inline_query', (query: TelegramBot.InlineQuery) => { });
MyTelegramBot.once('poll_answer', (answer: TelegramBot.PollAnswer) => { });
MyTelegramBot.once('chosen_inline_result', (result: TelegramBot.ChosenInlineResult) => { });
MyTelegramBot.once('channel_post', (message: TelegramBot.Message) => { });
MyTelegramBot.once('shipping_query', (query: TelegramBot.ShippingQuery) => { });
MyTelegramBot.once('pre_checkout_query', (query: TelegramBot.PreCheckoutQuery) => { });
MyTelegramBot.once('polling_error', (error: Error) => { });
MyTelegramBot.prependListener('message', (message: TelegramBot.Message, { type }) => { });
MyTelegramBot.prependListener('callback_query', (query: TelegramBot.CallbackQuery) => { });
MyTelegramBot.prependListener('inline_query', (query: TelegramBot.InlineQuery) => { });
MyTelegramBot.prependListener('poll_answer', (answer: TelegramBot.PollAnswer) => { });
MyTelegramBot.prependListener('chosen_inline_result', (result: TelegramBot.ChosenInlineResult) => { });
MyTelegramBot.prependListener('channel_post', (message: TelegramBot.Message) => { });
MyTelegramBot.prependListener('shipping_query', (query: TelegramBot.ShippingQuery) => { });
MyTelegramBot.prependListener('pre_checkout_query', (query: TelegramBot.PreCheckoutQuery) => { });
MyTelegramBot.prependListener('polling_error', (error: Error) => { });
MyTelegramBot.prependOnceListener('message', (message: TelegramBot.Message, { type }) => { });
MyTelegramBot.prependOnceListener('callback_query', (query: TelegramBot.CallbackQuery) => { });
MyTelegramBot.prependOnceListener('inline_query', (query: TelegramBot.InlineQuery) => { });
MyTelegramBot.prependOnceListener('poll_answer', (answer: TelegramBot.PollAnswer) => { });
MyTelegramBot.prependOnceListener('chosen_inline_result', (result: TelegramBot.ChosenInlineResult) => { });
MyTelegramBot.prependOnceListener('channel_post', (message: TelegramBot.Message) => { });
MyTelegramBot.prependOnceListener('shipping_query', (query: TelegramBot.ShippingQuery) => { });
MyTelegramBot.prependOnceListener('pre_checkout_query', (query: TelegramBot.PreCheckoutQuery) => { });
MyTelegramBot.prependOnceListener('polling_error', (error: Error) => { });
MyTelegramBot.removeListener('message', (message: TelegramBot.Message, { type }) => { });
MyTelegramBot.removeListener('callback_query', (query: TelegramBot.CallbackQuery) => { });
MyTelegramBot.removeListener('inline_query', (query: TelegramBot.InlineQuery) => { });
MyTelegramBot.removeListener('poll_answer', (answer: TelegramBot.PollAnswer) => { });
MyTelegramBot.removeListener('chosen_inline_result', (result: TelegramBot.ChosenInlineResult) => { });
MyTelegramBot.removeListener('channel_post', (message: TelegramBot.Message) => { });
MyTelegramBot.removeListener('shipping_query', (query: TelegramBot.ShippingQuery) => { });
MyTelegramBot.removeListener('pre_checkout_query', (query: TelegramBot.PreCheckoutQuery) => { });
MyTelegramBot.removeListener('polling_error', (error: Error) => { });
MyTelegramBot.off('message', (message: TelegramBot.Message, { type }) => { });
MyTelegramBot.off('callback_query', (query: TelegramBot.CallbackQuery) => { });
MyTelegramBot.off('inline_query', (query: TelegramBot.InlineQuery) => { });
MyTelegramBot.off('poll_answer', (answer: TelegramBot.PollAnswer) => { });
MyTelegramBot.off('chosen_inline_result', (result: TelegramBot.ChosenInlineResult) => { });
MyTelegramBot.off('channel_post', (message: TelegramBot.Message) => { });
MyTelegramBot.off('shipping_query', (query: TelegramBot.ShippingQuery) => { });
MyTelegramBot.off('pre_checkout_query', (query: TelegramBot.PreCheckoutQuery) => { });
MyTelegramBot.off('polling_error', (error: Error) => { });
MyTelegramBot.removeAllListeners('message');
MyTelegramBot.removeAllListeners();
MyTelegramBot.listeners('message');
MyTelegramBot.rawListeners('message');
MyTelegramBot.listenerCount('message');
MyTelegramBot.setChatPermissions(1234, {});
MyTelegramBot.sendDice(1234, { disable_notification: true });
MyTelegramBot.setChatAdministratorCustomTitle(1234, 'user_id', 'some_custom_title');
MyTelegramBot.getMyCommands();
MyTelegramBot.setMyCommands([{ command: 'command', description: 'description' }]);
