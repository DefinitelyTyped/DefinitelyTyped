import Smooch = require('smooch');

// Events
Smooch.on('ready', () => { });
Smooch.on('destroy', () => { });
Smooch.on('participant:added', (participant: ConversationParticipant, data: ConversationData) => { });
Smooch.on('participant:removed', (participant: ConversationParticipant, data: ConversationData) => { });
Smooch.on('conversation:added', (participants: ConversationParticipant[], data: ConversationData) => { });
Smooch.on('conversation:read', (payload: ConversationReadEventPayload, data: ConversationData) => { });
Smooch.on('conversation:removed', (data: ConversationData) => { });
Smooch.on('message:received', (message: Message, data: ConversationData) => { });
Smooch.on('message:sent', (message: Message, data: ConversationData) => { });
Smooch.on('message', (message: Message, data: ConversationData) => { });
Smooch.on('unreadCount', (unreadCount: number, data: ConversationData) => { });
Smooch.on('widget:opened', () => { });
Smooch.on('widget:closed', () => { });
Smooch.on('log:debug', (e: DebugLog) => { });
Smooch.on('connected', (data: ConversationData) => { });
Smooch.on('disconnected', (data: ConversationData) => { });
Smooch.on('reconnecting', (data: ConversationData) => { });
Smooch.on('typing:start', (data: ConversationData) => { });
Smooch.on('typing:stop', (data: ConversationData) => { });

// InitOptions must always have integrationId
// @ts-expect-error
Smooch.init({});
// integrationId must be a string
// @ts-expect-error
Smooch.init({ integrationId: 42 });

Smooch.init({ integrationId: '' });
Smooch.open();
Smooch.close();
Smooch.destroy();
// $ExpectType boolean
Smooch.isOpened();

Smooch.login('externalId', 'jwt');
Smooch.logout();

// All fields of updateConversation's options should be optional
Smooch.updateConversation('conversation-id', {});
// All fields of updateConversation's options should be nullable
Smooch.updateConversation('conversation-id', { lastUpdatedAt: null, iconUrl: null });
// We should still not be able to provide the wrong type for one of updateConversation's options
// @ts-expect-error
Smooch.updateConversation('conversation-id', { lastUpdatedAt: 'may', iconUrl: 42 });

// updateUser should allow custom data to be submitted via the metadata property
Smooch.updateUser({ metadata: { myCustomProperty: 21 } });
// updateUser should also allow custom data to be submitted via the properties property
Smooch.updateUser({ properties: { myCustomProperty: 21 } });
// But updateUser should NOT allow custom data to be added outside of the metadata property
// @ts-expect-error
Smooch.updateUser({ anIncorrectProperty: 21 });

const conversation = Smooch.getConversations().pop();
if (conversation) {
    // Metadata is an object and can hold anything
    conversation.metadata.hello === 'world';
    conversation.metadata.foobar === 12345;

    conversation.metadata === undefined;
    conversation.metadata === null;

    // @ts-expect-error
    conversation.metadata === "can't be a string";
    // @ts-expect-error
    conversation.metadata === 12345;
}

const user = Smooch.getUser();
// Metadata is an object and can hold anything
user.metadata.hello === 'world';
user.metadata.foobar === 12345;

user.metadata === undefined;
user.metadata === null;

// @ts-expect-error
user.metadata === "can't be a string";
// @ts-expect-error
user.metadata === 12345;

const message = conversation?.messages.pop();
if (message) {
    message.type === 'text';
    message.type === 'carousel';
    message.type === 'file';
    message.type === 'form';
    message.type === 'formResponse';
    message.type === 'image';
    message.type === 'list';
    message.type === 'location';
    message.type === 'template';
}
