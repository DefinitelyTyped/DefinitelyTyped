import TelegramBot = require('node-telegram-bot-api');

const MyTelegramBot = new TelegramBot('token', { webHook: { host: 'myhost' } });

MyTelegramBot.startPolling({ restart: true });
MyTelegramBot.stopPolling();
MyTelegramBot.isPolling();
MyTelegramBot.openWebHook();
MyTelegramBot.closeWebHook();
MyTelegramBot.hasOpenWebHook();
MyTelegramBot.getMe();
MyTelegramBot.getMe().then((value: TelegramBot.User) => value.username);
MyTelegramBot.logOut();
MyTelegramBot.close();
MyTelegramBot.setWebHook('http://typescriptlang.org');
MyTelegramBot.setWebHook('http://typescriptlang.org', { max_connections: 100 });
MyTelegramBot.setWebHook(
    'http://typescriptlang.org',
    { max_connections: 100 },
    { filename: 'filename', contentType: 'application/octet-stream' },
);
MyTelegramBot.deleteWebHook();
MyTelegramBot.getWebHookInfo();
MyTelegramBot.getUpdates({ timeout: 10 });
MyTelegramBot.processUpdate({ update_id: 1 });
MyTelegramBot.sendMessage(1234, 'test-text', { disable_web_page_preview: true, allow_sending_without_reply: true });
const res: TelegramBot.InlineQueryResultArticle = {
    id: '1',
    type: 'article',
    title: 'Foo',
    input_message_content: {
        message_text: 'Bar',
    },
};
MyTelegramBot.answerInlineQuery('queryId', [res, res, res], { is_personal: true });
MyTelegramBot.forwardMessage(1234, 5678, 'memberID', { disable_notification: true });
MyTelegramBot.copyMessage(1234, 5678, 'msgId', { disable_notification: true, allow_sending_without_reply: false });
MyTelegramBot.sendPhoto(1234, 'photo/path');
MyTelegramBot.sendPhoto(1234, 'photo/path', { caption: 'Foo' });
MyTelegramBot.sendPhoto(
    1234,
    'photo/path',
    { caption: 'Foo', parse_mode: 'HTML' },
    { filename: 'filename', contentType: 'application/octet-stream' },
);
// @ts-expect-error
MyTelegramBot.sendPhoto(1234, 'photo/path', { filename: 'filename', contentType: 'application/octet-stream' });
MyTelegramBot.sendAudio(1234, 'audio/path');
MyTelegramBot.sendAudio(1234, 'audio/path', { caption: 'Foo' });
MyTelegramBot.sendAudio(
    1234,
    'audio/path',
    { caption: 'Foo', parse_mode: 'Markdown' },
    { filename: 'filename', contentType: 'application/octet-stream' },
);
// @ts-expect-error
MyTelegramBot.sendAudio(1234, 'audio/path', { filename: 'filename', contentType: 'application/octet-stream' });
MyTelegramBot.sendDocument(1234, 'doc/path');
MyTelegramBot.sendDocument(1234, 'doc/path', { caption: 'Foo' });
MyTelegramBot.sendDocument(
    1234,
    'doc/path',
    { caption: 'Foo', parse_mode: 'HTML' },
    { filename: 'filename', contentType: 'application/octet-stream' },
);
// @ts-expect-error
MyTelegramBot.sendDocument(1234, 'doc/path', { filename: 'filename', contentType: 'application/octet-stream' });
MyTelegramBot.sendPoll(1234, 'question', ['answer1', 'answer2'], { type: 'regular' });
MyTelegramBot.sendSticker(1234, 'sticker/path');
MyTelegramBot.sendSticker(1234, 'sticker/path', { reply_to_message_id: 5678 });
MyTelegramBot.sendSticker(
    1234,
    'sticker/path',
    { reply_to_message_id: 5678 },
    { filename: 'filename', contentType: 'application/octet-stream' },
);
// @ts-expect-error
MyTelegramBot.sendSticker(1234, 'sticker/path', { filename: 'filename', contentType: 'application/octet-stream' });
MyTelegramBot.sendVideo(1234, 'video/path');
MyTelegramBot.sendVideo(1234, 'video/path', { caption: 'Foo' });
MyTelegramBot.sendVideo(
    1234,
    'video/path',
    { caption: 'Foo', parse_mode: 'MarkdownV2' },
    { filename: 'filename', contentType: 'application/octet-stream' },
);
// @ts-expect-error
MyTelegramBot.sendVideo(1234, 'video/path', { filename: 'filename', contentType: 'application/octet-stream' });
MyTelegramBot.sendVideoNote(1234, 'video/path');
MyTelegramBot.sendVideoNote(1234, 'video/path', { disable_notification: true });
MyTelegramBot.sendVideoNote(
    1234,
    'video/path',
    { disable_notification: true },
    { filename: 'filename', contentType: 'application/octet-stream' },
);
// @ts-expect-error
MyTelegramBot.sendVideoNote(1234, 'video/path', { filename: 'filename', contentType: 'application/octet-stream' });
MyTelegramBot.sendVoice(1234, 'voice/path');
MyTelegramBot.sendVoice(1234, 'voice/path', { caption: 'Foo' });
MyTelegramBot.sendVoice(
    1234,
    'voice/path',
    { caption: 'Foo', parse_mode: 'HTML' },
    { filename: 'filename', contentType: 'application/octet-stream' },
);
// @ts-expect-error
MyTelegramBot.sendVoice(1234, 'voice/path', { filename: 'filename', contentType: 'application/octet-stream' });
MyTelegramBot.sendAnimation(1234, 'animation/path', { caption: 'Foo', duration: 100, width: 200, height: 300 });
MyTelegramBot.sendChatAction(1234, 'typing');
MyTelegramBot.kickChatMember(1234, 'myUserID');
MyTelegramBot.banChatMember(1234, 'myUserID');
MyTelegramBot.unbanChatMember(1234, 'myUserID');
MyTelegramBot.restrictChatMember(1234, 'myUserID', { can_add_web_page_previews: true, can_send_polls: false });
MyTelegramBot.promoteChatMember(1234, 'myUserID', { can_change_info: true });
MyTelegramBot.exportChatInviteLink(1234);
MyTelegramBot.createChatInviteLink(1234, 'Foo', 1234, 1234, true);
MyTelegramBot.editChatInviteLink(1234, '', '', 1234, 1234, true);
MyTelegramBot.revokeChatInviteLink(1234, '');
MyTelegramBot.approveChatJoinRequest(1234, 'myUserID');
MyTelegramBot.approveChatJoinRequest(1234, 'myUserID', {});
MyTelegramBot.declineChatJoinRequest(1234, 'myUserID');
MyTelegramBot.declineChatJoinRequest(1234, 'myUserID', {});
MyTelegramBot.setChatPhoto(1234, 'My/File/ID', {}, { filename: 'filename', contentType: 'application/octet-stream' });
MyTelegramBot.deleteChatPhoto(1234);
MyTelegramBot.setChatTitle(1234, 'Chat Title');
MyTelegramBot.setChatDescription(1234, 'Chat Description');
MyTelegramBot.pinChatMessage(1234, 12);
MyTelegramBot.unpinChatMessage(1234, 12);
MyTelegramBot.unpinAllChatMessages(1234);
MyTelegramBot.answerCallbackQuery('432832');
MyTelegramBot.answerCallbackQuery({ callback_query_id: '432832' });
MyTelegramBot.editMessageText('test-text', { disable_web_page_preview: true });
MyTelegramBot.editMessageCaption('My Witty Caption', { message_id: 1245, caption_entities: [{ type: 'custom_emoji', offset: 0, length: 2, custom_emoji_id: 'test_emoji' }] });
MyTelegramBot.editMessageMedia(
    {
        media: 'photo/path',
        type: 'photo',
        caption: 'this is a test',
        parse_mode: 'HTML',
    },
    {
        chat_id: 1234,
        message_id: 9187231,
    },
);
MyTelegramBot.editMessageReplyMarkup(
    {
        inline_keyboard: [
            [
                {
                    text: 'Foo',
                },
            ],
        ],
    },
    { message_id: 1244 },
);
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
MyTelegramBot.onText(/regex/, (msg, match) => {});
MyTelegramBot.removeTextListener(/regex/);
MyTelegramBot.clearTextListeners();
MyTelegramBot.onReplyToMessage(1234, 'mymessageID', msg => {});
MyTelegramBot.removeReplyListener(5466);
MyTelegramBot.clearReplyListeners();
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
MyTelegramBot.sendInvoice(
    1234,
    'Invoice Title',
    'Invoice Description',
    'Invoice Payload',
    'Providertoken',
    'Startparameter',
    'Currency',
    [
        {
            label: '$',
            amount: 1200,
        },
    ],
    { is_flexible: true },
);
MyTelegramBot.answerShippingQuery('shippingQueryId', true, {
    shipping_options: [
        {
            id: '1',
            title: 'Foo',
            prices: [
                {
                    label: '$',
                    amount: 100,
                },
            ],
        },
    ],
});
MyTelegramBot.answerPreCheckoutQuery('preCheckoutQueryId', true, { error_message: 'Bar' });
MyTelegramBot.addListener('message', (message: TelegramBot.Message, { type }) => {});
MyTelegramBot.addListener('callback_query', (query: TelegramBot.CallbackQuery) => {});
MyTelegramBot.addListener('inline_query', (query: TelegramBot.InlineQuery) => {});
MyTelegramBot.addListener('poll_answer', (answer: TelegramBot.PollAnswer) => {});
MyTelegramBot.addListener('chat_member', (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.addListener('my_chat_member', (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.addListener('chosen_inline_result', (result: TelegramBot.ChosenInlineResult) => {});
MyTelegramBot.addListener('channel_post', (message: TelegramBot.Message) => {});
MyTelegramBot.addListener('shipping_query', (query: TelegramBot.ShippingQuery) => {});
MyTelegramBot.addListener('pre_checkout_query', (query: TelegramBot.PreCheckoutQuery) => {});
MyTelegramBot.addListener('polling_error', (error: Error) => {});
MyTelegramBot.on('message', (message: TelegramBot.Message, { type }) => {});
MyTelegramBot.on('callback_query', (query: TelegramBot.CallbackQuery) => {});
MyTelegramBot.on('inline_query', (query: TelegramBot.InlineQuery) => {});
MyTelegramBot.on('poll_answer', (answer: TelegramBot.PollAnswer) => {});
MyTelegramBot.on('chat_member', (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.on('my_chat_member', (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.on('chosen_inline_result', (result: TelegramBot.ChosenInlineResult) => {});
MyTelegramBot.on('channel_post', (message: TelegramBot.Message) => {});
MyTelegramBot.on('shipping_query', (query: TelegramBot.ShippingQuery) => {});
MyTelegramBot.on('pre_checkout_query', (query: TelegramBot.PreCheckoutQuery) => {});
MyTelegramBot.on('polling_error', (error: Error) => {});
MyTelegramBot.on('chat_join_request', (query: TelegramBot.ChatJoinRequest) => {});
MyTelegramBot.once('message', (message: TelegramBot.Message, { type }) => {});
MyTelegramBot.once('callback_query', (query: TelegramBot.CallbackQuery) => {});
MyTelegramBot.once('inline_query', (query: TelegramBot.InlineQuery) => {});
MyTelegramBot.once('poll_answer', (answer: TelegramBot.PollAnswer) => {});
MyTelegramBot.once('chat_member', (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.once('my_chat_member', (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.once('chosen_inline_result', (result: TelegramBot.ChosenInlineResult) => {});
MyTelegramBot.once('channel_post', (message: TelegramBot.Message) => {});
MyTelegramBot.once('shipping_query', (query: TelegramBot.ShippingQuery) => {});
MyTelegramBot.once('pre_checkout_query', (query: TelegramBot.PreCheckoutQuery) => {});
MyTelegramBot.once('polling_error', (error: Error) => {});
MyTelegramBot.prependListener('message', (message: TelegramBot.Message, { type }) => {});
MyTelegramBot.prependListener('callback_query', (query: TelegramBot.CallbackQuery) => {});
MyTelegramBot.prependListener('inline_query', (query: TelegramBot.InlineQuery) => {});
MyTelegramBot.prependListener('poll_answer', (answer: TelegramBot.PollAnswer) => {});
MyTelegramBot.prependListener('chat_member', (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.prependListener('my_chat_member', (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.prependListener('chosen_inline_result', (result: TelegramBot.ChosenInlineResult) => {});
MyTelegramBot.prependListener('channel_post', (message: TelegramBot.Message) => {});
MyTelegramBot.prependListener('shipping_query', (query: TelegramBot.ShippingQuery) => {});
MyTelegramBot.prependListener('pre_checkout_query', (query: TelegramBot.PreCheckoutQuery) => {});
MyTelegramBot.prependListener('polling_error', (error: Error) => {});
MyTelegramBot.prependOnceListener('message', (message: TelegramBot.Message, { type }) => {});
MyTelegramBot.prependOnceListener('callback_query', (query: TelegramBot.CallbackQuery) => {});
MyTelegramBot.prependOnceListener('inline_query', (query: TelegramBot.InlineQuery) => {});
MyTelegramBot.prependOnceListener('poll_answer', (answer: TelegramBot.PollAnswer) => {});
MyTelegramBot.prependOnceListener('chat_member', (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.prependOnceListener('my_chat_member', (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.prependOnceListener('chosen_inline_result', (result: TelegramBot.ChosenInlineResult) => {});
MyTelegramBot.prependOnceListener('channel_post', (message: TelegramBot.Message) => {});
MyTelegramBot.prependOnceListener('shipping_query', (query: TelegramBot.ShippingQuery) => {});
MyTelegramBot.prependOnceListener('pre_checkout_query', (query: TelegramBot.PreCheckoutQuery) => {});
MyTelegramBot.prependOnceListener('polling_error', (error: Error) => {});
MyTelegramBot.removeListener('message', (message: TelegramBot.Message, { type }) => {});
MyTelegramBot.removeListener('callback_query', (query: TelegramBot.CallbackQuery) => {});
MyTelegramBot.removeListener('inline_query', (query: TelegramBot.InlineQuery) => {});
MyTelegramBot.removeListener('poll_answer', (answer: TelegramBot.PollAnswer) => {});
MyTelegramBot.removeListener('chat_member', (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.removeListener('my_chat_member', (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.removeListener('chosen_inline_result', (result: TelegramBot.ChosenInlineResult) => {});
MyTelegramBot.removeListener('channel_post', (message: TelegramBot.Message) => {});
MyTelegramBot.removeListener('shipping_query', (query: TelegramBot.ShippingQuery) => {});
MyTelegramBot.removeListener('pre_checkout_query', (query: TelegramBot.PreCheckoutQuery) => {});
MyTelegramBot.removeListener('polling_error', (error: Error) => {});
MyTelegramBot.off('message', (message: TelegramBot.Message, { type }) => {});
MyTelegramBot.off('callback_query', (query: TelegramBot.CallbackQuery) => {});
MyTelegramBot.off('inline_query', (query: TelegramBot.InlineQuery) => {});
MyTelegramBot.off('poll_answer', (answer: TelegramBot.PollAnswer) => {});
MyTelegramBot.off('chat_member', (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.off('my_chat_member', (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.off('chosen_inline_result', (result: TelegramBot.ChosenInlineResult) => {});
MyTelegramBot.off('channel_post', (message: TelegramBot.Message) => {});
MyTelegramBot.off('shipping_query', (query: TelegramBot.ShippingQuery) => {});
MyTelegramBot.off('pre_checkout_query', (query: TelegramBot.PreCheckoutQuery) => {});
MyTelegramBot.off('polling_error', (error: Error) => {});
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
MyTelegramBot.setMyCommands([{ command: 'command', description: 'description' }], { language_code: 'ru' });
MyTelegramBot.setMyCommands([{ command: 'command', description: 'description' }], {
    language_code: 'ru',
    scope: { type: 'default' },
});
MyTelegramBot.setMyCommands([{ command: 'command', description: 'description' }], {
    language_code: 'ru',
    // @ts-expect-error
    scope: { type: 'default', chat_id: 1234 },
});
MyTelegramBot.banChatSenderChat(1234, 1234);
MyTelegramBot.unbanChatSenderChat(1234, 1234);
MyTelegramBot.setChatMenuButton({
    chat_id: 1234,
    menu_button: { type: 'web_app', text: 'WebApp Menu', web_app: { url: 'https://github.com' } },
});
MyTelegramBot.setChatMenuButton({
    chat_id: 1234,
    menu_button: { type: 'default' },
});
MyTelegramBot.setChatMenuButton({
    chat_id: 1234,
    menu_button: { type: 'commands' },
});
MyTelegramBot.setChatMenuButton({});
// @ts-expect-error
MyTelegramBot.setChatMenuButton({ menu_button: { type: 'mainer' } });

MyTelegramBot.getChatMenuButton({ chat_id: 1234 });
MyTelegramBot.getChatMenuButton({});
MyTelegramBot.setMyDefaultAdministratorRights({});
MyTelegramBot.setMyDefaultAdministratorRights({ for_channels: true });
MyTelegramBot.setMyDefaultAdministratorRights({
    rights: {
        is_anonymous: true,
        can_manage_chat: true,
        can_delete_messages: false,
        can_manage_video_chats: true,
        can_restrict_members: true,
        can_promote_members: false,
        can_change_info: true,
        can_invite_users: false,
        can_post_messages: false,
        can_pin_messages: true,
    },
});
MyTelegramBot.getMyDefaultAdministratorRights({});
MyTelegramBot.answerWebAppQuery('query_id', res);
MyTelegramBot.getStickerSet('custom-set-name');
MyTelegramBot.getCustomEmojiStickers(['123', '986']);
MyTelegramBot.uploadStickerFile('user_id', 'my_png_sticker_file');
MyTelegramBot.createNewStickerSet('user_id', 'short_name', 'my sticker set name', 'my_png_sticker_file', 'hello');
MyTelegramBot.addStickerToSet('user_id', 'custom_sticker', 'sticker_path', 'emoji', 'png_sticker');
MyTelegramBot.setStickerPositionInSet('sticker_on_position_one', 2);
MyTelegramBot.deleteStickerFromSet('sticker_on_position_one');
MyTelegramBot.setStickerSetThumb('user_id', 'my_set_thumb', 'thumb_file');
