// Type definitions for smooch 5.3
// Project: https://github.com/zendesk/sunshine-conversations-web
// Definitions by: Jordan Sorensen <https://github.com/jpsorensen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./global.d.ts" />

declare namespace Smooch {
    /**
     * Initializes the Smooch widget in the web page using the specified options. It returns a promise that will resolve when the Web Messenger is ready. Note that except on and off, all methods needs
     * to be called after a successful init.
     */
    function init(options: InitOptions): Promise<void>;
    /**
     * Opens the conversation widget (noop when embedded)
     */
    function open(): void;
    /**
     * Closes the conversation widget (noop when embedded)
     */
    function close(): void;
    /**
     * Tells if the widget is currently opened or closed.
     */
    function isOpened(): boolean;
    /**
     * Logs a user in the Web Messenger, retrieving the conversations the user already had on other browser sessions and/or devices. Note that you don't need to call this after init if you already
     * passed the external id and jwt as arguments in the call to init, in which case it's done internally as part of the initialization sequence. This returns a Promise that resolves when the Web
     * Messenger is ready again.
     */
    function login(externalId: string, jwt: string): Promise<void>;
    /**
     * Logs out the current user and reinitialize the widget with an anonymous user. This returns a promise that resolves when the Web Messenger is ready again.
     */
    function logout(): Promise<void>;
    /**
     * Destroys the Web Messenger and makes it disappear. The Web Messenger has to be reinitialized with init to be working again because it also clears up the integration id from the Web Messenger.
     * It will also unbind all listeners you might have with Smooch.on.
     */
    function destroy(): Promise<void>;
    /**
     * Sends a message to the targeted conversation on the user's behalf.
     */
    function sendMessage(message: SimpleMessage | string, conversationId: string): void;
    /**
     * Sends an event indicating that the user has started typing.
     * Typing updates are automatically throttled, so you may call this method as often as necessary. The typing stop event will automatically fire 10 seconds after the most recent call to this
     * method.
     * If conversationId is not provided, the currently loaded conversation will be used.
     */
    function startTyping(conversationId?: string): void;
    /**
     * Sends an event indicating that the user has stopped typing.
     * If conversationId is not provided, the currently loaded conversation will be used.
     */
    function stopTyping(conversationId?: string): void;
    /**
     * Trigger a postback action to the targeted conversation on the user's behalf.
     * The actionId is the id property of the targeted action.
     * If you have the id of the targetted postback action, you can pass it directly to triggerPostback.
     * Otherwise, you can get the id of an action by using Smooch.getConversationById()
     */
    function triggerPostback(actionId: string, conversationId: string): void;
    /**
     * Updates the current user's information. If no user has been created yet, the Web Messenger will store the information and apply it to the user model when it is created.
     */
    function updateUser(user: Partial<User>): Promise<Status>;
    /**
     * Returns the current user.
     */
    function getUser(): User;
    /**
     * Returns a Promise<object> whose payload is a conversation if it exists. If conversationId is not given, the current loaded conversation will be returned.
     *
     *     Smooch.getConversationById('62565b5c2b4039adff80b7fd').then((conversation) => {
     *       console.log(conversation);
     *     });
     *
     * or
     *
     *     Smooch.getConversationById().then((currentConversation) => {
     *       console.log(currentConversation);
     *     });
     */
    function getConversationById(conversationId?: string): Promise<Conversation>;
    /**
     * Returns a list of conversations for the current user that were fetched during app initialization as well as the paginated results.
     *
     * Note: The messages property in each conversation may only have the most recent message in the conversation. The full message list will be available either when the conversation was loaded to
     * the view or Smooch.getConversationById gets called.
     * In the event that the client reconnects due to a network issue, the list may only contain the 10 most recent conversations for the user. All the additional conversations that were fetched as
     * a result of pagination will be discarded.
     */
    function getConversations(): Conversation[];
    /**
     * Returns the conversation being viewed by the user if it exists or null if the current user is in the conversations list view.
     */
    function getDisplayedConversation(): Conversation | null;
    /**
     * Fetches and returns the next 10 most active conversations of the current user. This call also appends the conversations to the conversation list view.
     */
    function getMoreConversations(): Promise<Conversation[]>;
    /**
     * Returns a boolean indicating whether the user has more conversations that can be fetched for the conversation list view.
     */
    function hasMoreConversations(): boolean;
    /**
     * Loads a conversation into the current session
     */
    function loadConversation(conversationId: string): Promise<Status>;
    /**
     * Updates the targeted conversation.
     *
     * The fields of Conversation are optional and could be set to null in the case integrators want to unset the value of the fields.
     *
     *     Smooch.updateConversation('<conversation-id>', {
     *       displayName: 'display name',
     *       iconUrl: 'https://www.example.png',
     *       description: 'description',
     *       metadata: {
     *         any: 'info',
     *       },
     *       }).then((updatedConversation) => {
     *         // Your code after receiving the current user's updated conversation
     *       });
     */
    function updateConversation(
        conversationId: string,
        options: Partial<Nullable<Conversation>>,
    ): Promise<Conversation>;
    /**
     * Creates a conversation on behalf of current user. If the user does not exist, it first creates the user and then a conversation associated with it.
     *
     * All the options are optional.
     *
     * To create more than one conversation using this method, or to allow your user to create more conversations via the conversation list's New Conversation button, you must:
     * - have the Multi-Conversations feature enabled on your account
     * - update your Web Messenger integration and set canUserCreateMoreConversations to true
     *
     * Note that this API does not allow creating sdkGroup conversations. This type of conversation must be created by using the public API.
     *
     *     Smooch.createConversation({
     *       displayName: "Friday's Order",
     *       iconUrl: 'https://www.zen-tacos.com/tacos.png',
     *       description: 'Order #13377430',
     *       metadata: {
     *         isFirstTimeCustomer: true,
     *       },
     *       messages: [
     *         {
     *           text: 'Hi there! I have a question about my order.',
     *           type: 'text',
     *         },
     *       ],
     *       }).then((conversation) => {
     *         // Your code after receiving the current user's new conversation
     *       });
     */
    function createConversation(options: Partial<Conversation>): Promise<Conversation>;
    /**
     * Marks all unread messages as read.
     *
     * If conversationId is not provided, the currently loaded conversation will have its messages marked as read.
     *
     *     Smooch.markAllAsRead();
     *
     * or
     *
     *     Smooch.markAllAsRead('<conversation-id>');
     */
    function markAllAsRead(conversationId?: string): Promise<Status>;
    /**
     * Displays a prompt to the user suggesting the linking of the current chat instance with other 3rd-party apps.
     */
    function showNotificationChannelPrompt(): void;
    /**
     * Prefills the user's chat input with a predefined message.
     */
    function setPredefinedMessage(message: string): void;
    /**
     * Sets a delegate on the conversation. Smooch must be initialized before calling this method.
     */
    function setDelegate(delegate: Delegate): void;

    // tslint:disable:unified-signatures
    /**
     * This event triggers when init completes successfully... Be sure to bind before calling init!
     */
    function on(event: 'ready', callback: () => void): void;
    /**
     * This event triggers when the widget is destroyed.
     */
    function on(event: 'destroy', callback: () => void): void;
    /**
     * This event triggers when a participant is added to a conversation
     */
    function on(event: 'participant:added', callback: (participant: ConversationParticipant, data: ConversationData) => void): void;
    /**
     * This event triggers when a participant is removed from a conversation
     */
    function on(event: 'participant:removed', callback: (participant: ConversationParticipant, data: ConversationData) => void): void;
    /**
     * This event triggers when a conversation is added
     */
    function on(event: 'conversation:added', callback: (participants: ConversationParticipant[], data: ConversationData) => void): void;
    /**
     * This event triggers when a participant in a sdkGroup chat reads a message
     */
    function on(event: 'conversation:read', callback: (payload: ConversationReadEventPayload, data: ConversationData) => void): void;
    /**
     * This event triggers when a conversation is removed
     */
    function on(event: 'conversation:removed', callback: (data: ConversationData) => void): void;
    /**
     * This event triggers when the user receives a message
     */
    function on(event: 'message:received', callback: (message: Message, data: ConversationData) => void): void;
    /**
     * This event triggers when the user sends a message
     */
    function on(event: 'message:sent', callback: (message: Message, data: ConversationData) => void): void;
    /**
     * This event triggers when a message was added to the conversation
     */
    function on(event: 'message', callback: (message: Message, data: ConversationData) => void): void;
    /**
     * This event triggers when the number of unread messages changes
     */
    function on(event: 'unreadCount', callback: (unreadCount: number, data: ConversationData) => void): void;
    /**
     * This event triggers when the widget is opened
     */
    function on(event: 'widget:opened', callback: () => void): void;
    /**
     * This event triggers when the widget is closed
     */
    function on(event: 'widget:closed', callback: () => void): void;
    /**
     * This event triggers when the codes emits debug information
     */
    function on(event: 'log:debug', callback: (e: DebugLog) => void): void;
    /**
     * This event triggers when an active connection has been established for the first time,
     * or when the connection has been re-established after a `disconnected` or `reconnecting` event.
     */
    function on(event: 'connected', callback: (data: ConversationData) => void): void;
    /**
     * This event triggers when an active connection is lost
     * While disconnected, the client will not be able to receive messages or load a conversation
     */
    function on(event: 'disconnected', callback: (data: ConversationData) => void): void;
    /**
     * This event triggers when an active connection is lost and there is an attempt to reconnect
     * While reconnecting, the client will not be able to receive messages or load a conversation
     */
    function on(event: 'reconnecting', callback: (data: ConversationData) => void): void;
    /**
     * This event triggers when the business starts typing. The associated conversation is passed in the argument.
     */
    function on(event: 'typing:start', callback: (data: ConversationData & {avatarUrl: string, name: string}) => void): void;
    /**
     * This event triggers when the business stops typing. The associated conversation is passed in the argument.
     */
    function on(event: 'typing:stop', callback: (data: ConversationData) => void): void;
    // tslint:enable:unified-signatures
}

type Nullable<T> = { [P in keyof T]: T[P] | null };

declare const smooch: typeof Smooch;

export as namespace Smooch;
export = smooch;
