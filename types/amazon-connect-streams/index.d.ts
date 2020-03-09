// Type definitions for Amazon Connect Streams API 1.4
// Project: https://github.com/aws/amazon-connect-streams
// Definitions by: Andy Hopper <https://github.com/andyhopp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4
declare namespace connect {
    /**
     *
     * A callback to receive agent details
     *
     * @param agent An Agent object containing information about the currently
     * signed-in agent.
     */
    type AgentCallback = (agent: Agent) => void;

    /**
     *
     * A callback to receive agent details
     *
     * @param agent An Agent object containing information about the currently
     * signed-in agent.
     */
    type MuteCallback = (muteState: MuteState) => void;

    /**
     * Register a callback to receive agent details
     *
     * @param callback A callback that will receive an {Agent} instance
     *                 when agent information becomes available.
     */
    function agent(callback: AgentCallback): void;

    /**
     *
     * A callback to receive contact details
     *
     * @param agent A Contact object containing information about the current contact.
     */
    type ContactCallback = (contact: Contact) => void;

    /**
     * Register a callback to receive contact details
     *
     * @param callback A callback that will receive a Contact instance
     *                 when contact information is updated.
     */
    function contact(callback: ContactCallback): void;

    /**
     * Binds the given instance object as the context for
     * the method provided.
     *
     * @param scope The instance object to be set as the scope
     *              of the function.
     * @param method The method to be encapsulated.
     *
     * All other arguments, if any, are bound to the method
     * invocation inside the closure.
     *
     * @return A closure encapsulating the invocation of the
     *    method provided in context of the given instance.
     */
    function hitch(scope: object, method: () => any): void;

    interface Core {
        initCCP(containerDiv: HTMLElement, options: InitCCPOptions): void;
    }
    let core: Core;

    interface SoftPhoneOptions {
        /*
        * Whether to disable the ringtone.
        */
        disableRingtone?: boolean;
        /*
        * Whether to display the softphone in a frame.
        */
        allowFramedSoftphone?: boolean;
        /*
        * A URL for a custom ringtone.
        */
        ringtoneUrl?: string;
     }

    interface InitCCPOptions {
        /*
        * The URL for the Connect CCP.
        */
        ccpUrl: string;
        /*
        * Whether to display the login view.
        */
        loginPopup?: boolean;
        /*
        * Options specifying softphone configuration.
        */
        softphone?: SoftPhoneOptions;
     }

     enum AgentStateType {
        INIT = 'init',
        ROUTABLE = 'routable',
        NOT_ROUTABLE = 'not_routable',
        OFFLINE = 'offline'
    }

    enum AgentAvailStates {
        INIT = "Init",
        BUSY = "Busy",
        AFTER_CALL_WORK = "AfterCallWork",
        CALLING_CUSTOMER = "CallingCustomer",
        DIALING = "Dialing",
        JOINING = "Joining",
        PENDING_AVAILABLE = "PendingAvailable",
        PENDING_BUSY = "PendingBusy"
    }

    enum AgentErrorStates {
        ERROR = 'Error',
        AGENT_HUNG_UP = 'AgentHungUp',
        BAD_ADDRESS_AGENT = 'BadAddressAgent',
        BAD_ADDRESS_CUSTOMER = 'BadAddressCustomer',
        DEFAULT = 'Default',
        FAILED_CONNECT_AGENT = 'FailedConnectAgent',
        FAILED_CONNECT_CUSTOMER = 'FailedConnectCustomer',
        LINE_ENGAGED_AGENT = 'LineEngagedAgent',
        LINE_ENGAGED_CUSTOMER = 'LineEngagedCustomer',
        MISSED_CALL_AGENT = 'MissedCallAgent',
        MISSED_CALL_CUSTOMER = 'MissedCallCustomer',
        MULTIPLE_CCP_WINDOWS = 'MultipleCcpWindows',
        REALTIME_COMMUNICATION_ERROR = 'RealtimeCommunicationError'
    }

    enum EndpointType {
        PHONE_NUMBER = 'phone_number',
        AGENT = 'agent',
        QUEUE = 'queue'
    }

    enum ConnectionType {
        AGENT = 'agent',
        INBOUND = 'inbound',
        OUTBOUND = 'outbound',
        MONITORING = 'monitoring'
    }

    enum ConnectionStateType {
        INIT = 'init',
        CONNECTING = 'connecting',
        CONNECTED = 'connected',
        HOLD = 'hold',
        DISCONNECTED = 'disconnected'
    }

    interface CONNECTION_ACTIVE_STATES {
        [key: string]: number;
    }

    enum ContactStateType {
        INIT = 'init',
        INCOMING = 'incoming',
        PENDING = 'pending',
        CONNECTING = 'connecting',
        CONNECTED = 'connected',
        MISSED = 'missed',
        ERROR = 'error',
        ENDED = 'ended'
    }

    enum CONTACT_ACTIVE_STATES {
        INCOMING = 'incoming',
        CONNECTING = 'connecting',
        CONNECTED = 'connected'
    }

    enum ContactType {
        VOICE = 'voice',
        QUEUE_CALLBACK = 'queue_callback'
    }

    enum SoftphoneCallType {
        AUDIO_VIDEO = 'audio_video',
        VIDEO_ONLY = 'video_only',
        AUDIO_ONLY = 'audio_only',
        NONE = 'none'
    }

    enum SoftphoneErrorTypes {
        UNSUPPORTED_BROWSER = 'unsupported_browser',
        MICROPHONE_NOT_SHARED = 'microphone_not_shared',
        SIGNALLING_HANDSHAKE_FAILURE = 'signalling_handshake_failure',
        SIGNALLING_CONNECTION_FAILURE = 'signalling_connection_failure',
        ICE_COLLECTION_TIMEOUT = 'ice_collection_timeout',
        USER_BUSY_ERROR = 'user_busy_error',
        WEBRTC_ERROR = 'webrtc_error',
        REALTIME_COMMUNICATION_ERROR = 'realtime_communication_error',
        OTHER = 'other'
    }

    enum CTIExceptions {
        ACCESS_DENIED_EXCEPTION = 'AccessDeniedException',
        INVALID_STATE_EXCEPTION = 'InvalidStateException',
        BAD_ENDPOINT_EXCEPTION = 'BadEndpointException',
        INVALID_AGENT_ARNEXCEPTION = 'InvalidAgentARNException',
        INVALID_CONFIGURATION_EXCEPTION = 'InvalidConfigurationException',
        INVALID_CONTACT_TYPE_EXCEPTION = 'InvalidContactTypeException',
        PAGINATION_EXCEPTION = 'PaginationException',
        REFRESH_TOKEN_EXPIRED_EXCEPTION = 'RefreshTokenExpiredException',
        SEND_DATA_FAILED_EXCEPTION = 'SendDataFailedException',
        UNAUTHORIZED_EXCEPTION = 'UnauthorizedException'
    }

    /*
    * A callback to receive notifications of success or failure.
    */
    type SuccessFailCallback = () => void;

    interface SuccessFailOptions {
        /*
        * A {SuccessFailCallback} to receive a notification of success.
        */
        success?: SuccessFailCallback;
        /*
        * A {SuccessFailCallback} to receive a notification of failure.
        */
       failure?: SuccessFailCallback;
    }
    interface ConnectOptions extends SuccessFailOptions {
        /*
        * A string containing a Connect Queue ARN.
        */
       queueARN?: string;
    }

    interface MuteState {
        muted: boolean;
    }

    interface Agent {
        /**
         * Subscribe a method to be called whenever Contact information is about to be updated.
         *
         * @param callback A callback to receive updated Agent information.
         */
        onContactPending(callback: AgentCallback): void;
        /**
         * Subscribe a method to be called whenever new agent data is available.
         *
         * @param callback A callback to receive updated Agent information.
         */
        onRefresh(callback: AgentCallback): void;
        /**
         * Subscribe a method to be called when the agent becomes routable, meaning that they can be routed incoming contacts.
         *
         * @param callback A callback to receive updated Agent information.
         */
        onRoutable(callback: AgentCallback): void;
        /**
         * Subscribe a method to be called when the agent becomes not-routable, meaning that they are online but cannot be routed incoming contacts.
         *
         * @param callback A callback to receive updated Agent information.
         */
        onNotRoutable(callback: AgentCallback): void;
        /**
         * Subscribe a method to be called when the agent goes offline.
         *
         * @param callback A callback to receive updated Agent information.
         */
        onOffline(callback: AgentCallback): void;
        /**
         * Subscribe a method to be called when the agent is put into an error state.
         *
         * @param callback A callback to receive updated Agent information.
         */
        onError(callback: AgentCallback): void;
        /**
         * Subscribe a method to be called when the agent enters the "After Call Work" (ACW) state.
         *
         * @param callback A callback to receive updated Agent information.
         */
        onAfterCallWork(callback: AgentCallback): void;
        /**
         * Subscribe a method to be called when the agent updates the mute status,
         * meaning that agents mute/unmute APIs are called and the local media stream
         * is succesfully updated with the new status.
         *
         * @param callback A callback to receive updates on agent mute state
         */
        onMuteToggle(callback: MuteCallback): void;

        /**
         * Get the agent's current AgentState object indicating their availability state type.
         */
        getState(): AgentState;
        /**
         * Get the duration of the agent's state in milliseconds relative to local time.
         */
        getStateDuration(): number;
        // /**
        //  * For internal purposes only.
        //  */
        // getPermissions(): string[];
        /**
         * Gets a list of Contact API objects for each of the agent's current contacts.
         */
        getContacts(contactTypeFilter: string): Contact[];
        /**
         * Gets the full AgentConfiguration object for the agent.
         */
        getConfiguration(): AgentConfiguration;
        /**
         * Gets the list of selectable AgentState API objects.
         */
        getAgentStates(): AgentState[];
        /**
         * Gets the agent's routing profile.
         */
        getRoutingProfile(): AgentRoutingProfile;
        /**
         * Gets the agent's user friendly display name from the AgentConfiguration object for the agent.
         */
        getName(): string;
        /**
         * Gets the agent's phone number from the AgentConfiguration object for the agent.
         */
        getExtension(): string;
        /**
         * Determine if softphone is enabled for the agent.
         */
        isSoftphoneEnabled(): boolean;
        /**
         * Updates the agent's configuration with the given AgentConfiguration object.
         *
         * @param configuration The desired configuration
         * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
         */
        setConfiguration(configuration: AgentConfiguration, successFailOptions: SuccessFailOptions): void;
        /**
         * Set the agent's current availability state.
         *
         * @param state The new agent state.
         * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
         */
        setState(state: AgentState, successFailOptions: SuccessFailOptions): void;
        /**
         * Creates an outbound contact to the given endpoint.
         *
         * @param endpoint An object describing the endpoint to which to connect.
         * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
         */
        connect(endpoint: Endpoint, successFailOptions: ConnectOptions): void;
        /**
         * Create a snapshot version of the current Agent state and save it for future use, such as adding to a log file or posting elsewhere.
         */
        toSnapshot(): Agent;

        /*
         * Sets the agent local media to mute mode.
         */
        mute(): void;

        /*
         * Sets the agent localmedia to unmute mode.
         */
        unmute(): void;
    }

    /**
     * An object containing the current Agent state
     */
    interface AgentState {
        /**
         * The name of the agent's current availability state.
         */
        name: string;

        /**
         * The agent's current availability state type, as per the AgentStateType enumeration.
         */
        type: AgentStateType;

        /**
         * A relative local state duration. To get the actual duration of the state relative
         * to the current time, use agent.getStateDuration().
         */
        duration?: number;

        /**
         * Indicates whether the agent is currently muted.
         */
        muted?: boolean;
    }

    interface AgentConfiguration {
        /**
         * The agent's user friendly display name.
         */
        name: string;

        /**
         * Indicates whether the agent's phone calls should route to the agent's browser-based softphone or the telephone number configured as the agent's extension.
         */
        softphoneEnabled: boolean;

        /**
         * Indicates the phone number that should be dialed to connect the agent to their inbound or outbound calls when softphone is not enabled.
         */
        extension: string;

        /**
         * Describes the agent's current routing profile and list of queues therein. See agent.getRoutingProfile() for more info.
         */
        routingProfile: AgentRoutingProfile;

        /**
         * The username for the agent as entered in their Amazon Connect user account.
         */
        username: string;
    }

    interface AgentRoutingProfile {
        /**
         * The name of the routing profile.
         */
        name: string;

        /**
         * The queues contained in the routing profile.
         */
        queues: string;

        /**
         * The default queue which should be associated with outbound contacts.
         */
        defaultOutboundQueue: string;
    }

    interface AttributeDictionary {
        [key: string]: string;
    }

    interface Contact {
        /**
         * Subscribe a method to be invoked whenever the contact is updated.
         */
        onRefresh(callback: ContactCallback): void;
        /**
         * Subscribe a method to be invoked when the contact is incoming.
         */
        onIncoming(callback: ContactCallback): void;
        /**
         * Subscribe a method to be invoked whenever the contact is accepted.
         */
        onAccepted(callback: ContactCallback): void;
        /**
         * Subscribe a method to be invoked whenever the contact is ended or destroyed.
         */
        onEnded(callback: ContactCallback): void;
        /**
         * Subscribe a method to be invoked when the contact is connected.
         */
        onConnected(callback: ContactCallback): void;

        /**
         * Get the unique contactId of this contact.
         */
        getContactId(): string;
        /**
         * Get the original contact id from which this contact was transferred,
         * or none if this is not an internal Connect transfer.
         */
        getOriginalContactId(): string;
        /**
         * Get the type of the contact. This indicates what type of media is
         * carried over the connections of the contact.
         */
        getType(): string;
        /**
         * Get a ContactState object representing the state of the contact.
         */
        getStatus(): ContactState;
        /**
         * Get the duration of the contact state in milliseconds relative to local time.
         */
        getStatusDuration(): number;
        /**
         * Get the queue associated with the contact.
         */
        getQueue(): Queue;
        /**
         * Get a list containing Connection API objects for each connection in the contact.
         */
        getConnections(): Connection[];
        /**
         * Get the initial connection of the contact.
         */
        getInitialConnection(): Connection;
        /**
         * Get the inital connection of the contact, or null if the initial connection
         * is no longer active.
         */
        getActiveInitialConnection(): Connection;
        /**
         * Get a list of all of the third-party connections, i.e. the list of all
         * connections except for the initial connection, or an empty list if there
         * are no third-party connections.
         */
        getThirdPartyConnections(): Connection;
        /**
         * In Voice contacts, there can only be one active third-party connection.
         * This method returns the single active third-party connection, or null if
         * there are no currently active third-party connections.
         */
        getSingleActiveThirdPartyConnection(): Connection;
        /**
         * Gets the agent connection. This is the connection that represents the agent's
         * participation in the contact.
         */
        getAgentConnection(): Connection;
        /**
         * Get a map from attribute name to value for each attribute associated with the contact.
         */
        getAttributes(): { [key: string]: string };
        /*
         * Determine whether this contact is a softphone call.
         */
        isSoftphoneCall(): boolean;
        /**
         * Determine whether this is an inbound or outbound contact.
         */
        isInbound(): boolean;
        /**
         * Determine whether the contact is in a connected state.
         */
        isConnected(): boolean;
        /**
         * Accept an incoming contact.
         *
         * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
         */
        accept(successFailOptions: SuccessFailOptions): void;
        /**
         * Close the contact and all of its associated connections.
         *
         * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
         */
        destroy(successFailOptions: SuccessFailOptions): void;
        /**
         * Provide diagnostic information for the contact in the case
         * something exceptional happens on the front end.
         *
         * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
         */
        notifyIssue(successFailOptions: SuccessFailOptions): void;
        /**
         * Add a new outbound third-party connection to this contact and connect
         * it to the specified endpoint.
         *
         * @param endpoint The endpoint to add.
         * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
         */
        addConnection(endpoint: Endpoint, successFailOptions: SuccessFailOptions): void;
        /**
         * Rotate through the connected and on hold connections of the contact.
         * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
         */
        toggleActiveConnections(successFailOptions: SuccessFailOptions): void;
        /**
         * Conference together the active connections of the conversation.
         *
         * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
         */
        conferenceConnections(successFailOptions: SuccessFailOptions): void;
    }

    interface ContactState {
        /**
         * The contact state type, as per the ContactStateType enumeration.
         */
        type: string;

        /**
         * A relative local state duration. To get the actual duration of the state
         * relative to the current time, use contact.getStateDuration().
         */
        duration: number;
    }

    interface Queue {
        /**
         * The queueARN of the queue.
         */
        queueARN: string;

        /**
         * The name of the queue.
         */
        name: string;
    }

    class Endpoint {
        endpointARN: string;
        endpointId: string;
        type: EndpointType;
        name: string;
        phoneNumber: string;
        agentLogin: string;
        queue: string;
        static byPhoneNumber(phoneNumber: string): Endpoint;
    }

    interface SendDigitOptions extends SuccessFailOptions {
        /*
        * A string containing digits to send.
        */
       digits: string;
    }

    interface Connection {
        /**
         * Gets the unique contactId of the contact to which this connection belongs.
         */
        getContactId(): string;
        /**
         * Gets the unique connectionId for this connection.
         */
        getConnectionId(): string;
        /**
         * Gets the endpoint to which this connection is connected.
         */
        getEndpoint(): Endpoint;
        /**
         * Gets the ConnectionState object for this connection.
         */
        getState(): ConnectionState;
        /**
         * Get the duration of the connection state, in milliseconds, relative to local time.
         */
        getStateDuration(): number;
        /**
         * Get the type of connection.
         */
        getType(): "inbound" | "outbound" | "monitoring";
        /**
         * Determine if the connection is the contact's initial connection.
         */
        isInitialConnection(): boolean;
        /**
         * Determine if the contact is active.
         */
        isActive(): boolean;
        /**
         * Determine if the connection is connected, meaning that the agent is live in a
         * conversation through this connection.
         */
        isConnected(): boolean;
        /**
         * Determine whether the connection is in the process of connecting.
         */
        isConnecting(): boolean;
        /**
         * Determine whether the connection is on hold.
         */
        isOnHold(): boolean;
        /**
         * Ends the connection.
         * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
         */
        destroy(successFailOptions: SuccessFailOptions): void;
        /**
         * Send a digit or string of digits through this connection.
         * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
         */
        sendDigits(options: SendDigitOptions): void;

        /**
         * Put this connection on hold.
         * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
         */
        hold(successFailOptions: SuccessFailOptions): void;

        /**
         * Resume this connection if it was on hold.
         * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
         */
        resume(successFailOptions: SuccessFailOptions): void;
    }

    interface ConnectionState {
        /**
         * The connection state type, as per the ConnectionStateType enumeration.
         */
        type: string;

        /**
         * A relative local state duration. To get the actual duration of the state
         * relative to the current time, use connection.getStateDuration().
         */
        duration: number;
    }
}
