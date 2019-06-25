declare const InterApplicationBus: any;
/**
 * Instance created to enable use of a channel as a provider.  Allows for communication with the {@link Channel#ChannelClient ChannelClients} by invoking an action on
 * a single client via {@link Channel#ChannelProvider#dispatch dispatch} or all clients via {@link Channel#ChannelProvider#publish publish}
 * and to listen for communication from clients by registering an action via {@link Channel#ChannelProvider#register register}.
 *
 * ##### Constructor
 *
 * Returned by {@link Channel.create Channel.create}.
 *
 * ##### Synchronous Methods
 *  * {@link Channel#ChannelProvider#destroy destroy()}
 *  * {@link Channel#ChannelProvider#publish publish(action, payload)}
 *  * {@link Channel#ChannelProvider#register register(action, listener)}
 *  * {@link Channel#ChannelProvider#remove remove(action)}
 *
 * ##### Asynchronous Methods
 *  * {@link Channel#ChannelProvider#dispatch dispatch(to, action, payload)}
 *
 * ##### Middleware
 * Middleware functions receive the following arguments: (action, payload, senderId).
 * The return value of the middleware function will be passed on as the payload from beforeAction, to the action listener, to afterAction
 * unless it is undefined, in which case the most recently defined payload is used.  Middleware can be used for side effects.
 *  * {@link Channel#ChannelProvider#setDefaultAction setDefaultAction(middleware)}
 *  * {@link Channel#ChannelProvider#onError onError(middleware)}
 *  * {@link Channel#ChannelProvider#beforeAction beforeAction(middleware)}
 *  * {@link Channel#ChannelProvider#afterAction afterAction(middleware)}
 *
 * @memberof! Channel#
 * @hideconstructor
 */
declare class ChannelProvider {
    constructor();
    /**
    *
    * Destroy the channel.
    * @returns {Promise<void>}
    */
    destroy(): void;
    /**
     *
     * Dispatch an action to a specified client. Returns a promise for the result of executing that action on the client side.
     * @param {Identity} to - Identity of the target client.
     * @param {string} action - Name of the action to be invoked by the client.
     * @param {*} payload - Payload to be sent along with the action.
     * @returns {Promise<any>}
     * @tutorial Channel.tutorial
     */
    dispatch(): void;
    /**
    *
    * Register an action to be called
    * @param {string} action - Name of the action to be registered for channel clients to later invoke.
    * @param {Action} listener - Function representing the action to be taken on a client dispatch.
    * @returns {boolean} - Boolean representing the successful registration of the action.
    * @tutorial Channel.tutorial
    */
    register(): void;
    /**
     *
     * Publish an action and payload to every connected client.
     * Synchronously returns an array of promises for each action (see dispatch).
     * @param {string} action
     * @param {*} payload
     * @tutorial Channel.tutorial
     */
    publish(): void;
    /**
     *
     * Register a listener that is called on every new client connection.
     * It is passed the identity of the connecting client and a payload if it was provided to {@link Channel.connect}.
     * If you wish to reject the connection, throw an error.  Be sure to synchronously provide an onConnection upon receipt of the channelProvider
     * to ensure all potential client connections are caught by the listener.
     * @param {Channel#ChannelProvider~ConnectionListener} listener
     * @tutorial Channel.tutorial
     */
    onConnection(): void;
    /**
     *
     * Register a listener that is called on every new client disconnection.
     * It is passed the disconnection event of the disconnecting client.
     * @param {InterApplicationBus.Channel~ConnectionEvent} listener
     * @tutorial Channel.tutorial
     */
    onDisconnection(): void;
    /**
     *
     * Register middleware that fires before the action.
     * @param {Channel#ChannelProvider~Middleware} middleware - Function to be executed before invoking the action.
     * @tutorial Channel.middleware
     */
    beforeAction(): void;
    /**
     *
     * Register an error handler. This is called before responding on any error.
     * @param {function} middleware - Function to be executed in case of an error.
     * @tutorial Channel.middleware
     */
    onError(): void;
    /**
     *
     * Register middleware that fires after the action.  This is passed the return value of the action.
     * @param {Channel#ChannelProvider~Middleware} middleware - Function to be executed after invoking the action.
     * @tutorial Channel.middleware
     */
    afterAction(): void;
    /**
     *
     * Remove an action by action name.
     * @param {string} action - Name of the action to be removed.
     * @tutorial Channel.tutorial
     */
    remove(): void;
    /**
     *
     * Sets a default action. This is used any time an action that has not been registered is invoked.
     * Default behavior if not set is to throw an error.
     * @param {Channel#ChannelProvider~Middleware} middleware - Function to be executed when a client invokes an action name that has not been registered.
     * @tutorial Channel.middleware
     */
    setDefaultAction(): void;
}
/**
 * Instance created to enable use of a channel as a client.  Allows for communication with the
 * {@link Channel#ChannelProvider ChannelProvider} by invoking an action on the
 * provider via {@link Channel#ChannelClient#dispatch dispatch} and to listen for communication
 * from the provider by registering an action via {@link Channel#ChannelClient#register register}.
 *
 * ##### Constructor
 * Returned by {@link Channel.connect Channel.connect}.
 *
 * ##### Synchronous Methods
 *  * {@link Channel#ChannelClient#disconnect disconnect()}
 *  * {@link Channel#ChannelClient#register register(action, listener)}
 *  * {@link Channel#ChannelClient#remove remove(action)}
 *
 * ##### Asynchronous Methods
 *  * {@link Channel#ChannelClient#dispatch dispatch(action, payload)}
 *
 * ##### Middleware
 * Middleware functions receive the following arguments: (action, payload, senderId).
 * The return value of the middleware function will be passed on as the payload from beforeAction, to the action listener, to afterAction
 * unless it is undefined, in which case the original payload is used.  Middleware can be used for side effects.
 *  * {@link Channel#ChannelClient#setDefaultAction setDefaultAction(middleware)}
 *  * {@link Channel#ChannelClient#onError onError(middleware)}
 *  * {@link Channel#ChannelClient#beforeAction beforeAction(middleware)}
 *  * {@link Channel#ChannelClient#afterAction afterAction(middleware)}
 *
 * @hideconstructor
 * @memberof! Channel#
 */
declare class ChannelClient {
    constructor();
    /**
    *
    * Disconnect from the channel.
    * @returns {Promise<void>}
    */
    disconnect(): void;
    /**
     *
     * Dispatch the given to the channel provider.  Returns a promise that resolves with the response from the provider for that action.
     * @param {string} action - Name of the action to be invoked by the channel provider.
     * @param {*} payload - Payload to be sent along with the action.
     * @tutorial Channel.tutorial
     * @returns {Promise<any>}
     */
    dispatch(): void;
    /**
    *
    * Register an action to be called by the provider of the channel.
    * @param {string} action - Name of the action to be registered for the channel provider to later invoke.
    * @param {Action} listener - Function representing the action to be taken on a provider dispatch.
    * @tutorial Channel.tutorial
    */
    register(): void;
    /**
     *
     * Register middleware that fires before the action.
     * @param {Channel#ChannelClient~Middleware} middleware - Function to be executed before invoking the action.
     * @tutorial Channel.middleware
     */
    beforeAction(): void;
    /**
     *
     * Register a listener that is called on channel disconnection.
     * It is passed the disconnection event of the disconnecting channel.
     * @param {InterApplicationBus.Channel~ConnectionEvent} listener
     * @tutorial Channel.tutorial
     */
    onDisconnection(): void;
    /**
     * Register an error handler. This is called before responding on any error.
     * @param {function} middleware - Function to be executed in case of an error.
     * @tutorial Channel.middleware
     */
    onError(): void;
    /**
     *
     * Register middleware that fires after the action.  This is passed the return value of the action.
     * @param {Channel#ChannelClient~Middleware} middleware - Function to be executed after invoking the action.
     * @tutorial Channel.middleware
     */
    afterAction(): void;
    /**
     *
     * Remove an action by action name.
     * @param {string} action - Name of the action to be removed.
     * @tutorial Channel.tutorial
     */
    remove(): void;
    /**
     *
     * Sets a default action. This is used any time an action that has not been registered is invoked.
     * Default behavior if not set is to throw an error.
     * @param {Channel#ChannelClient~Middleware} middleware - Function to be executed when a client invokes an action name that has not been registered.
     * @tutorial Channel.middleware
     */
    setDefaultAction(): void;
}
/**
 * Channel action callback signature
 * @callback Channel#ChannelProvider~Action
 * @param {*} payload - Payload sent along with the message.
 * @param {Identity} identity - Identity of the sender.
*/
/**
 * Channel action callback signature
 * @callback Channel#ChannelClient~Action
 * @param {*} payload - Payload sent along with the message.
 * @param {Identity} identity - Identity of the sender.
*/
/**
 * Middleware function signature
 * @callback Channel#ChannelProvider~Middleware
 * @param {string} action - Action to be invoked.
 * @param {*} payload - Payload sent along with the message (or error for error middleware).
 * @param {Identity} identity - Identity of the sender.
*/
/**
 * Middleware function signature
 * @callback Channel#ChannelClient~Middleware
 * @param {string} action - Action to be invoked.
 * @param {*} payload - Payload sent along with the message.
 * @param {Identity} identity - Identity of the sender.
*/
/**
 * Callback for the channel onConnection or onDisconnection. If it errors connection will be rejected.
 * @callback Channel#ChannelProvider~ConnectionListener
 * @param {Identity} identity - Identity of the client attempting to connect to the channel.
 * @param {*} payload - Payload sent with connection request.
*/
/**
 * Callback for onChannelConnect or onChannelDisconnect.
 * @typedef {object} InterApplicationBus.Channel~ConnectionEvent
 * @property {string} channelId - Identifier of the channel.
 * @property {string} uuid - Channel provider uuid.
 * @property {string} [name] - Channel provider name.
 * @property {string} channelName - Name of the channel.
 */
/**
 * Options provided on a client connection to a channel.
 * @typedef {object} InterApplicationBus.Channel~ConnectOptions
 * @property {*} [payload] - Payload to pass to ChannelProvider onConnection action.
 * @property {boolean} [wait=true] - If true will wait for ChannelProvider to connect. If false will fail if ChannelProvider is not found.
 *
 */
