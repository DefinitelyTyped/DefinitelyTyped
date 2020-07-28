import * as zChat from 'zchat-browser';

const fakeCallback = (err: Error) => 0;
const fakeFile = new File(['foo'], 'foo.txt', {
    type: 'text/plain',
});

zChat.addTags(['tag1', 'tag2']);
zChat.clearVisitorDefaultDepartment(fakeCallback);
zChat.getAccountStatus();
zChat.getAllDepartments();
zChat.getChatInfo();
zChat.getChatLog();
zChat.getConnectionStatus();
zChat.getDepartment(1);
zChat.getQueuePosition();
zChat.getVisitorDefaultDepartment();
zChat.getVisitorInfo();
zChat.init({ account_key: 'fake_account_key' });
zChat.isChatting();
zChat.removeTags(['tag1', 'tag2']);
zChat.sendChatComment('fake_comment', fakeCallback);
zChat.sendChatMsg('fake_message', fakeCallback);
zChat.sendChatRating('good', fakeCallback);
zChat.sendFile(
    fakeFile,
    (err: zChat.SendFileErrorMessage, data: { mime_type: string; name: string; size: number; url: string }) => 0
);
zChat.sendOfflineMsg({ name: 'fake_name', email: 'fake_email', message: 'fake_message' }, fakeCallback);
zChat.sendTyping(true);
zChat.sendVisitorPath({ title: 'fake_title', url: 'fake_url' }, fakeCallback);
zChat.setVisitorDefaultDepartment(1, fakeCallback);
zChat.setVisitorInfo({
    display_name: 'fake_name',
    email: 'fake_email',
    phone: 'fake_phone',
});
const fakeHandler = (event_data?: zChat.EventData) => 0;
zChat.on('account_status', fakeHandler);
zChat.un('account_status', fakeHandler);
