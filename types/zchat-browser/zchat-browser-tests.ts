import * as zChat from 'zchat-browser';

const fakeCallback = (err: Error) => 0;
const fakeFile = new File(['foo'], 'foo.txt', {
    type: 'text/plain',
});

zChat.init({ account_key: 'fake_account_key' });
zChat.getAccountStatus();
zChat.getConnectionStatus();
zChat.getVisitorInfo();
zChat.setVisitorInfo({ display_name: 'fake_name' }, fakeCallback);
zChat.setVisitorInfo(
    {
        display_name: 'fake_name',
        email: 'fake_email',
        phone: 'fake_phone',
    },
    fakeCallback,
);
zChat.sendVisitorPath({ title: 'fake_title', url: 'fake_url' }, fakeCallback);
zChat.getQueuePosition();
zChat.getAllDepartments();
zChat.getDepartment(1);
zChat.getVisitorDefaultDepartment();
zChat.setVisitorDefaultDepartment(1, fakeCallback);
zChat.clearVisitorDefaultDepartment(fakeCallback);
zChat.sendChatMsg('fake_message', fakeCallback);
zChat.sendFile(
    fakeFile,
    (err: zChat.SendFileError, data: { mime_type: string; name: string; size: number; url: string }) => 0,
);
zChat.sendOfflineMsg({ name: 'fake_name', email: 'fake_email', message: 'fake_message' }, fakeCallback);
zChat.addTags(['tag1', 'tag2']);
zChat.removeTags(['tag1', 'tag2']);
zChat.sendTyping(true);
zChat.getChatInfo();
zChat.sendChatRating('good', fakeCallback);
zChat.sendChatComment('fake_comment', fakeCallback);
zChat.isChatting();
zChat.getChatLog();
zChat.getServingAgentsInfo();
zChat.getOperatingHours();
zChat.sendEmailTranscript('fake_email', fakeCallback);
zChat.fetchChatHistory((err: Error, data: { count: number; has_more: boolean }) => 0);
zChat.markAsRead();
zChat.reconnect();
zChat.endChat();
zChat.endChat({ clear_dept_id_on_chat_ended: true });
zChat.logout();

'fake_email'.match(zChat.EMAIL_REGEX);

const accountStatusHandler = (event_data: zChat.AccountsStatusEventData) => 0;
zChat.on('account_status', accountStatusHandler);
zChat.un('account_status', accountStatusHandler);

const connectionUpdateHandler = (event_data: zChat.ConnectionUpdateEventData) => 0;
zChat.on('connection_update', connectionUpdateHandler);
zChat.un('connection_update', connectionUpdateHandler);

const departmentUpdateHandler = (event_data: zChat.Department) => 0;
zChat.on('department_update', departmentUpdateHandler);
zChat.un('department_update', departmentUpdateHandler);

const visitorUpdateHandler = (event_data: zChat.VisitorInfo) => 0;
zChat.on('visitor_update', visitorUpdateHandler);
zChat.un('visitor_update', visitorUpdateHandler);

const agentUpdateHandler = (event_data: zChat.AgentInfo) => 0;
zChat.on('agent_update', agentUpdateHandler);
zChat.un('agent_update', agentUpdateHandler);

const chatHandler = (event_data: zChat.ChatEventData) => 0;
zChat.on('chat', chatHandler);
zChat.un('chat', chatHandler);

const historyHandler = (event_data: zChat.HistoryEventData) => 0;
zChat.on('history', historyHandler);
zChat.un('history', historyHandler);

const errorHandler = (event_data: zChat.ErrorEventData) => 0;
zChat.on('error', errorHandler);
zChat.un('error', errorHandler);
