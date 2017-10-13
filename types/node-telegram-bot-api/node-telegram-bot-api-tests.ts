import TelegramBot = require('node-telegram-bot-api');

const MyTelegramBot = new TelegramBot('token');

MyTelegramBot.startPolling({restart: true});
MyTelegramBot.stopPolling();
MyTelegramBot.isPolling();
MyTelegramBot.openWebHook();
MyTelegramBot.closeWebHook();
MyTelegramBot.hasOpenWebHook();
MyTelegramBot.getMe();
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
MyTelegramBot.sendAudio(1234, 'audio/path', { caption: 'Foo' });
MyTelegramBot.sendDocument(1234, 'doc/path', { caption: 'Foo' }, { fileOption: true });
MyTelegramBot.sendSticker(1234, 'sticker/path', { reply_to_message_id: 5678 });
MyTelegramBot.sendVideo(1234, 'video/path', { caption: 'Foo' });
MyTelegramBot.sendVideoNote(1234, 'video/path', { disable_notification: true });
MyTelegramBot.sendVoice(1234, 'voice/path', { caption: 'Foo' });
MyTelegramBot.sendChatAction(1234, 'ACTION!');
MyTelegramBot.kickChatMember(1234, 'myUserID');
MyTelegramBot.unbanChatMember(1234, 'myUserID');
MyTelegramBot.restrictChatMember(1234, 'myUserID', { can_add_web_page_previews: true });
MyTelegramBot.promoteChatMember(1234, 'myUserID', { can_change_info: true });
MyTelegramBot.exportChatInviteLink(1234);
MyTelegramBot.setChatPhoto(1234, 'My/File/ID');
MyTelegramBot.deleteChatPhoto(1234);
MyTelegramBot.setChatTitle(1234, 'Chat Title');
MyTelegramBot.setChatDescription(1234, 'Chat Description');
MyTelegramBot.pinChatMessage(1234, 'Pinned Message');
MyTelegramBot.unpinChatMessage(1234);
MyTelegramBot.answerCallbackQuery({ callback_query_id: '432832' });
MyTelegramBot.editMessageText('test-text', { disable_web_page_preview: true });
MyTelegramBot.editMessageCaption('My Witty Caption', { message_id: 1245 });
MyTelegramBot.editMessageReplyMarkup({ inline_keyboard: [[{
    text: 'Foo'
}]] }, { message_id: 1244 });
MyTelegramBot.getUserProfilePhotos('myUserID', { limit: 10 });
MyTelegramBot.sendLocation(1234, 100, 200, { reply_to_message_id: 1234 });
MyTelegramBot.sendVenue(1234, 100, 200, 'Venue Title', '123 Fake St.', { reply_to_message_id: 1234 });
MyTelegramBot.sendContact(1234, '345-555-0192', 'John', { last_name: 'Smith' });
MyTelegramBot.getFile('My/File/ID');
MyTelegramBot.getFileLink('My/File/ID');
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
