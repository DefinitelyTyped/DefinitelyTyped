// Type definitions for ari-client 2.2
// Project: https://github.com/asterisk/node-ari-client
// Definitions by: Dioris Moreno <https://github.com/dioris-moreno>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 *  Create an instance of Client using the provided connection options and call
 *  the provided callback once the API has been attached to the Client.
 *
 *  @param baseUrl - The URL to the ARI instance.
 *  @param user - The username for the ARI instance.
 *  @param pass - The password for the ARI instance.
 *  @param [callback] - The callback to be called upon connection.
 */
export function connect(
    baseUrl: string,
    user: string,
    pass: string,
    callback?: (err: Error, client: Client) => void,
): Promise<Client>;

/* This interface is kept for compatibility */
export interface TextMessageVariable {
    key: string;
    value: string;
}

export interface Client extends Resource {
    /**
     *  Creates the WebSocket connection, subscribing to the given apps.
     *
     *  @param apps - Name or array of names of the applications to be started.
     *  @param [subscribeAll] - Subscribe to all Asterisk events (true/false).
     */
    start(apps: string | string[], subscribeAll?: boolean): Promise<void>;

    /**
     *  Creates the WebSocket connection, subscribing to the given apps.
     *
     *  @param apps - Name or array of names of the applications to be started.
     *  @param subscribeAll - Subscribe to all Asterisk events (true/false).
     *  @param callback - The callback to be called after applications have started.
     */
    start(apps: string | string[], subscribeAll: boolean, callback: (err: Error, ...args: any[]) => void): void;

    /**
     *  Creates the WebSocket connection, subscribing to the given apps.
     *
     *  @param apps - Name or array of names of the applications to be started.
     *  @param callback - The callback to be called after applications have started.
     */
    start(apps: string | string[], callback: (err: Error, ...args: any[]) => void): void;

    /**
     *  Closes the WebSocket connection.
     */
    stop(): void;

    /**
     *  Pings the WebSocket.
     */
    ping(): void;

    /**
     *  Available Applications resources.
     */
    applications: Applications;

    /**
     *  Available Asterisk resource.
     */
    asterisk: Asterisk;

    /**
     *  Available Channels resources.
     */
    channels: Channels;

    /**
     *  Available Bridges resources.
     */
    bridges: Bridges;

    /**
     *  Available DeviceStates resources.
     */
    deviceStates: DeviceStates;

    /**
     *  Available Endpoints resources.
     */
    endpoints: Endpoints;

    /**
     *  Available Recordings resources.
     */
    recordings: Recordings;

    /**
     *  Available Mailboxes resources.
     */
    mailboxes: Mailboxes;

    /**
     *  Available Playbacks resources.
     */
    playbacks: Playbacks;

    /**
     *  Available Sounds resources.
     */
    sounds: Sounds;

    /**
     *  Available Events resources.
     */
    events: Events;

    /**
     *  Creates a new Application instance.
     */
    Application(id?: string, objValues?: IndexableObject): Application;

    /**
     *  Creates a new Asterisk instance.
     */
    Asterisk(id?: string, objValues?: IndexableObject): Asterisk;

    /**
     *  Creates a new Channel instance.
     */
    Channel(id?: string, objValues?: IndexableObject): Channel;

    /**
     *  Creates a new Bridge instance.
     */
    Bridge(id?: string, objValues?: IndexableObject): Bridge;

    /**
     *  Creates a new DeviceState instance.
     */
    DeviceState(id?: string, objValues?: IndexableObject): DeviceState;

    /**
     *  Creates a new Endpoint instance.
     */
    Endpoint(id?: string, objValues?: IndexableObject): Endpoint;

    /**
     *  Creates a new LiveRecording instance.
     */
    LiveRecording(id?: string, objValues?: IndexableObject): LiveRecording;

    /**
     *  Creates a new Mailbox instance.
     */
    Mailbox(id?: string, objValues?: IndexableObject): Mailbox;

    /**
     *  Creates a new Playback instance.
     */
    Playback(id?: string, objValues?: IndexableObject): Playback;

    /**
     *  Creates a new Sound instance.
     */
    Sound(id?: string, objValues?: IndexableObject): Sound;

    /**
     *  Creates a new StoredRecording instance.
     */
    StoredRecording(id?: string, objValues?: IndexableObject): StoredRecording;
}

export interface Containers {
    [key: string]: any;
}
export interface IndexableObject {
    [key: string]: any;
}
/* Event Types */
export type WebSocketConnectedEventType = 'WebSocketConnected';
export type WebSocketReconnectingEventType = 'WebSocketReconnecting';
export type WebSocketMaxRetriesEventType = 'WebSocketMaxRetries';
export type PongEventType = 'pong';
export type APILoadErrorEventType = 'APILoadError';
export type EventsEventType = 'Events';
export type MessageEventType = 'Message';
export type MissingParamsEventType = 'MissingParams';
export type EventEventType = 'Event';
export type ContactInfoEventType = 'ContactInfo';
export type PeerEventType = 'Peer';
export type DeviceStateChangedEventType = 'DeviceStateChanged';
export type PlaybackStartedEventType = 'PlaybackStarted';
export type PlaybackContinuingEventType = 'PlaybackContinuing';
export type PlaybackFinishedEventType = 'PlaybackFinished';
export type RecordingStartedEventType = 'RecordingStarted';
export type RecordingFinishedEventType = 'RecordingFinished';
export type RecordingFailedEventType = 'RecordingFailed';
export type ApplicationMoveFailedEventType = 'ApplicationMoveFailed';
export type ApplicationReplacedEventType = 'ApplicationReplaced';
export type BridgeCreatedEventType = 'BridgeCreated';
export type BridgeDestroyedEventType = 'BridgeDestroyed';
export type BridgeMergedEventType = 'BridgeMerged';
export type BridgeVideoSourceChangedEventType = 'BridgeVideoSourceChanged';
export type BridgeBlindTransferEventType = 'BridgeBlindTransfer';
export type BridgeAttendedTransferEventType = 'BridgeAttendedTransfer';
export type ChannelCreatedEventType = 'ChannelCreated';
export type ChannelDestroyedEventType = 'ChannelDestroyed';
export type ChannelEnteredBridgeEventType = 'ChannelEnteredBridge';
export type ChannelLeftBridgeEventType = 'ChannelLeftBridge';
export type ChannelStateChangeEventType = 'ChannelStateChange';
export type ChannelDtmfReceivedEventType = 'ChannelDtmfReceived';
export type ChannelDialplanEventType = 'ChannelDialplan';
export type ChannelCallerIdEventType = 'ChannelCallerId';
export type ChannelUsereventEventType = 'ChannelUserevent';
export type ChannelHangupRequestEventType = 'ChannelHangupRequest';
export type ChannelVarsetEventType = 'ChannelVarset';
export type ChannelHoldEventType = 'ChannelHold';
export type ChannelUnholdEventType = 'ChannelUnhold';
export type ChannelTalkingStartedEventType = 'ChannelTalkingStarted';
export type ChannelTalkingFinishedEventType = 'ChannelTalkingFinished';
export type ContactStatusChangeEventType = 'ContactStatusChange';
export type PeerStatusChangeEventType = 'PeerStatusChange';
export type EndpointStateChangeEventType = 'EndpointStateChange';
export type DialEventType = 'Dial';
export type StasisEndEventType = 'StasisEnd';
export type StasisStartEventType = 'StasisStart';
export type TextMessageReceivedEventType = 'TextMessageReceived';
export type ChannelConnectedLineEventType = 'ChannelConnectedLine';
export type AnyEventType =
    | WebSocketConnectedEventType
    | WebSocketReconnectingEventType
    | WebSocketMaxRetriesEventType
    | PongEventType
    | APILoadErrorEventType
    | EventsEventType
    | MessageEventType
    | MissingParamsEventType
    | EventEventType
    | ContactInfoEventType
    | PeerEventType
    | DeviceStateChangedEventType
    | PlaybackStartedEventType
    | PlaybackContinuingEventType
    | PlaybackFinishedEventType
    | RecordingStartedEventType
    | RecordingFinishedEventType
    | RecordingFailedEventType
    | ApplicationMoveFailedEventType
    | ApplicationReplacedEventType
    | BridgeCreatedEventType
    | BridgeDestroyedEventType
    | BridgeMergedEventType
    | BridgeVideoSourceChangedEventType
    | BridgeBlindTransferEventType
    | BridgeAttendedTransferEventType
    | ChannelCreatedEventType
    | ChannelDestroyedEventType
    | ChannelEnteredBridgeEventType
    | ChannelLeftBridgeEventType
    | ChannelStateChangeEventType
    | ChannelDtmfReceivedEventType
    | ChannelDialplanEventType
    | ChannelCallerIdEventType
    | ChannelUsereventEventType
    | ChannelHangupRequestEventType
    | ChannelVarsetEventType
    | ChannelHoldEventType
    | ChannelUnholdEventType
    | ChannelTalkingStartedEventType
    | ChannelTalkingFinishedEventType
    | ContactStatusChangeEventType
    | PeerStatusChangeEventType
    | EndpointStateChangeEventType
    | DialEventType
    | StasisEndEventType
    | StasisStartEventType
    | TextMessageReceivedEventType
    | ChannelConnectedLineEventType;
/* Event Classes */
export interface Events {
    /**
     * WebSocket connection for events.
     *
     * @param params.app - Applications to subscribe to.
     * @param [params.subscribeAll] - Subscribe to all Asterisk events. If provided, the applications listed will be subscribed to all events, effectively disabling the application specific
     * subscriptions. Default is false.
     */
    eventWebsocket(
        params: { app: string | string[]; subscribeAll?: boolean | undefined },
        callback: (err: Error, message: Message) => void,
    ): void;

    /**
     * WebSocket connection for events.
     *
     * @param params.app - Applications to subscribe to.
     * @param [params.subscribeAll] - Subscribe to all Asterisk events. If provided, the applications listed will be subscribed to all events, effectively disabling the application specific
     * subscriptions. Default is false.
     */
    eventWebsocket(params: { app: string | string[]; subscribeAll?: boolean | undefined }): Promise<Message>;

    /**
     * Generate a user event.
     *
     * @param params.eventName - Event name.
     * @param params.application - The name of the application that will receive this event.
     * @param [params.source] - URI for event source (channel:{channelId}, bridge:{bridgeId}, endpoint:{tech}/{resource}, deviceState:{deviceName}.
     * @param [params.variables] - The "variables" key in the body object holds custom key/value pairs to add to the user event. Ex. { "variables": { "key": "value" } }.
     */
    userEvent(
        params: { eventName: string; application: string; source?: string | string[] | undefined; variables?: Containers | undefined },
        callback: (err: Error) => void,
    ): void;

    /**
     * Generate a user event.
     *
     * @param params.eventName - Event name.
     * @param params.application - The name of the application that will receive this event.
     * @param [params.source] - URI for event source (channel:{channelId}, bridge:{bridgeId}, endpoint:{tech}/{resource}, deviceState:{deviceName}.
     * @param [params.variables] - The "variables" key in the body object holds custom key/value pairs to add to the user event. Ex. { "variables": { "key": "value" } }.
     */
    userEvent(params: {
        eventName: string;
        application: string;
        source?: string | string[] | undefined;
        variables?: Containers | undefined;
    }): Promise<void>;
}
export interface Message {
    /**
     * Indicates the type of this message.
     */
    type: string;

    /**
     * The unique ID for the Asterisk instance that raised this event.
     */
    asterisk_id?: string | undefined;
}
export interface MissingParams extends Message {
    /**
     * A list of the missing parameters.
     */
    params: string | string[];
}
export interface Event extends Message {
    /**
     * Name of the application receiving the event.
     */
    application: string;

    /**
     * Time at which this event was created.
     */
    timestamp: Date;
}
export interface ContactInfo {
    /**
     * The location of the contact.
     */
    uri: string;

    /**
     * The current status of the contact.
     */
    contact_status: string;

    /**
     * The Address of Record this contact belongs to.
     */
    aor: string;

    /**
     * Current round trip time, in microseconds, for the contact.
     */
    roundtrip_usec?: string | undefined;
}
export interface Peer {
    /**
     * The current state of the peer. Note that the values of the status are dependent on the underlying peer technology.
     */
    peer_status: string;

    /**
     * An optional reason associated with the change in peer_status.
     */
    cause?: string | undefined;

    /**
     * The IP address of the peer.
     */
    address?: string | undefined;

    /**
     * The port of the peer.
     */
    port?: string | undefined;

    /**
     * The last known time the peer was contacted.
     */
    time?: string | undefined;
}
export interface DeviceStateChanged extends Event {
    /**
     * Device state object.
     */
    device_state: DeviceState;
}
export interface PlaybackStarted extends Event {
    /**
     * Playback control object.
     */
    playback: Playback;
}
export interface PlaybackContinuing extends Event {
    /**
     * Playback control object.
     */
    playback: Playback;
}
export interface PlaybackFinished extends Event {
    /**
     * Playback control object.
     */
    playback: Playback;
}
export interface RecordingStarted extends Event {
    /**
     * Recording control object.
     */
    recording: LiveRecording;
}
export interface RecordingFinished extends Event {
    /**
     * Recording control object.
     */
    recording: LiveRecording;
}
export interface RecordingFailed extends Event {
    /**
     * Recording control object.
     */
    recording: LiveRecording;
}
export interface ApplicationMoveFailed extends Event {
    /**
     * Channel.
     */
    channel: Channel;

    /**
     * Destination.
     */
    destination: string;

    /**
     * Arguments to the application.
     */
    args: string | string[];
}
export interface BridgeCreated extends Event {
    /**
     * Bridge.
     */
    bridge: Bridge;
}
export interface BridgeDestroyed extends Event {
    /**
     * Bridge.
     */
    bridge: Bridge;
}
export interface BridgeMerged extends Event {
    /**
     * Bridge.
     */
    bridge: Bridge;

    /**
     * Bridge_from.
     */
    bridge_from: Bridge;
}
export interface BridgeVideoSourceChanged extends Event {
    /**
     * Bridge.
     */
    bridge: Bridge;

    /**
     * Old_video_source_id.
     */
    old_video_source_id?: string | undefined;
}
export interface BridgeBlindTransfer extends Event {
    /**
     * The channel performing the blind transfer.
     */
    channel: Channel;

    /**
     * The channel that is replacing transferer when the transferee(s) can not be transferred directly.
     */
    replace_channel?: Channel | undefined;

    /**
     * The channel that is being transferred.
     */
    transferee?: Channel | undefined;

    /**
     * The extension transferred to.
     */
    exten: string;

    /**
     * The context transferred to.
     */
    context: string;

    /**
     * The result of the transfer attempt.
     */
    result: string;

    /**
     * Whether the transfer was externally initiated or not.
     */
    is_external: boolean;

    /**
     * The bridge being transferred.
     */
    bridge: Bridge;
}
export interface BridgeAttendedTransfer extends Event {
    /**
     * First leg of the transferer.
     */
    transferer_first_leg: Channel;

    /**
     * Second leg of the transferer.
     */
    transferer_second_leg: Channel;

    /**
     * The channel that is replacing transferer_first_leg in the swap.
     */
    replace_channel?: Channel | undefined;

    /**
     * The channel that is being transferred.
     */
    transferee?: Channel | undefined;

    /**
     * The channel that is being transferred to.
     */
    transfer_target?: Channel | undefined;

    /**
     * The result of the transfer attempt.
     */
    result: string;

    /**
     * Whether the transfer was externally initiated or not.
     */
    is_external: boolean;

    /**
     * Bridge the transferer first leg is in.
     */
    transferer_first_leg_bridge: Bridge;

    /**
     * Bridge the transferer second leg is in.
     */
    transferer_second_leg_bridge: Bridge;

    /**
     * How the transfer was accomplished.
     */
    destination_type: string;

    /**
     * Bridge that survived the merge result.
     */
    destination_bridge: string;

    /**
     * Application that has been transferred into.
     */
    destination_application: string;

    /**
     * First leg of a link transfer result.
     */
    destination_link_first_leg: Channel;

    /**
     * Second leg of a link transfer result.
     */
    destination_link_second_leg: Channel;

    /**
     * Transferer channel that survived the threeway result.
     */
    destination_threeway_channel: Channel;

    /**
     * Bridge that survived the threeway result.
     */
    destination_threeway_bridge: Bridge;
}
export interface ChannelCreated extends Event {
    /**
     * Channel.
     */
    channel: Channel;
}
export interface ChannelDestroyed extends Event {
    /**
     * Integer representation of the cause of the hangup.
     */
    cause: number;

    /**
     * Text representation of the cause of the hangup.
     */
    cause_txt: string;

    /**
     * Channel.
     */
    channel: Channel;
}
export interface ChannelEnteredBridge extends Event {
    /**
     * Bridge.
     */
    bridge: Bridge;

    /**
     * Channel.
     */
    channel: Channel;
}
export interface ChannelLeftBridge extends Event {
    /**
     * Bridge.
     */
    bridge: Bridge;

    /**
     * Channel.
     */
    channel: Channel;
}
export interface ChannelStateChange extends Event {
    /**
     * Channel.
     */
    channel: Channel;
}
export interface ChannelDtmfReceived extends Event {
    /**
     * DTMF digit received (0-9, A-E, # or *).
     */
    digit: string;

    /**
     * Number of milliseconds DTMF was received.
     */
    duration_ms: number;

    /**
     * The channel on which DTMF was received.
     */
    channel: Channel;
}
export interface ChannelDialplan extends Event {
    /**
     * The channel that changed dialplan location.
     */
    channel: Channel;

    /**
     * The application about to be executed.
     */
    dialplan_app: string;

    /**
     * The data to be passed to the application.
     */
    dialplan_app_data: string;
}
export interface ChannelCallerId extends Event {
    /**
     * The integer representation of the Caller Presentation value.
     */
    caller_presentation: number;

    /**
     * The text representation of the Caller Presentation value.
     */
    caller_presentation_txt: string;

    /**
     * The channel that changed Caller ID.
     */
    channel: Channel;
}
export interface ChannelUserevent extends Event {
    /**
     * The name of the user event.
     */
    eventname: string;

    /**
     * A channel that is signaled with the user event.
     */
    channel?: Channel | undefined;

    /**
     * A bridge that is signaled with the user event.
     */
    bridge?: Bridge | undefined;

    /**
     * A endpoint that is signaled with the user event.
     */
    endpoint?: Endpoint | undefined;

    /**
     * Custom Userevent data.
     */
    userevent: IndexableObject;
}
export interface ChannelHangupRequest extends Event {
    /**
     * Integer representation of the cause of the hangup.
     */
    cause: number;

    /**
     * Whether the hangup request was a soft hangup request.
     */
    soft: boolean;

    /**
     * The channel on which the hangup was requested.
     */
    channel: Channel;
}
export interface ChannelVarset extends Event {
    /**
     * The variable that changed.
     */
    variable: string;

    /**
     * The new value of the variable.
     */
    value: string;

    /**
     * The channel on which the variable was set. If missing, the variable is a global variable.
     */
    channel?: Channel | undefined;
}
export interface ChannelHold extends Event {
    /**
     * The channel that initiated the hold event.
     */
    channel: Channel;

    /**
     * The music on hold class that the initiator requested.
     */
    musicclass?: string | undefined;
}
export interface ChannelUnhold extends Event {
    /**
     * The channel that initiated the unhold event.
     */
    channel: Channel;
}
export interface ChannelTalkingStarted extends Event {
    /**
     * The channel on which talking started.
     */
    channel: Channel;
}
export interface ChannelTalkingFinished extends Event {
    /**
     * The channel on which talking completed.
     */
    channel: Channel;

    /**
     * The length of time, in milliseconds, that talking was detected on the channel.
     */
    duration: number;
}
export interface ContactStatusChange extends Event {
    /**
     * Endpoint.
     */
    endpoint: Endpoint;

    /**
     * Contact_info.
     */
    contact_info: ContactInfo;
}
export interface PeerStatusChange extends Event {
    /**
     * Endpoint.
     */
    endpoint: Endpoint;

    /**
     * Peer.
     */
    peer: Peer;
}
export interface EndpointStateChange extends Event {
    /**
     * Endpoint.
     */
    endpoint: Endpoint;
}
export interface Dial extends Event {
    /**
     * The calling channel.
     */
    caller?: Channel | undefined;

    /**
     * The dialed channel.
     */
    peer: Channel;

    /**
     * Forwarding target requested by the original dialed channel.
     */
    forward?: string | undefined;

    /**
     * Channel that the caller has been forwarded to.
     */
    forwarded?: Channel | undefined;

    /**
     * The dial string for calling the peer channel.
     */
    dialstring?: string | undefined;

    /**
     * Current status of the dialing attempt to the peer.
     */
    dialstatus: string;
}
export interface StasisEnd extends Event {
    /**
     * Channel.
     */
    channel: Channel;
}
export interface StasisStart extends Event {
    /**
     * Arguments to the application.
     */
    args: string | string[];

    /**
     * Channel.
     */
    channel: Channel;

    /**
     * Replace_channel.
     */
    replace_channel?: Channel | undefined;
}
export interface TextMessageReceived extends Event {
    /**
     * Message.
     */
    message: TextMessage;

    /**
     * Endpoint.
     */
    endpoint?: Endpoint | undefined;
}
export interface ChannelConnectedLine extends Event {
    /**
     * The channel whose connected line has changed.
     */
    channel: Channel;
}
export interface Resource {
    /**
     * The ARI client instance.
     */
    _client: Client;

    /**
     * Error emitted when WebSocket reconnection attempts exceeded MaxRetries.
     */
    // tslint:disable-next-line:unified-signatures
    on(type: WebSocketMaxRetriesEventType, listener: (err: Error) => void): void;

    /**
     * Error emitted when the WebSocket is reconnecting.
     */
    // tslint:disable-next-line:unified-signatures
    on(type: WebSocketReconnectingEventType, listener: (err: Error) => void): void;

    /**
     * Event emitted when the WebSocket is connected.
     */
    // tslint:disable-next-line:unified-signatures
    on(type: WebSocketConnectedEventType, listener: () => void): void;

    /**
     * Event emitted when a WebSocket pong is received.
     */
    // tslint:disable-next-line:unified-signatures
    on(type: PongEventType, listener: () => void): void;

    /**
     * Error event sent when connection to API fails.
     */
    // tslint:disable-next-line:unified-signatures
    on(type: APILoadErrorEventType, listener: (err: Error) => void): void;

    /**
     * Base type for errors and events.
     */
    on(event: MessageEventType, callback: (event: Message, instances: Message) => void): void;

    /**
     * Error event sent when required params are missing.
     */
    on(event: MissingParamsEventType, callback: (event: MissingParams, instances: MissingParams) => void): void;

    /**
     * Base type for asynchronous events from Asterisk.
     */
    on(event: EventEventType, callback: (event: Event, instances: Event) => void): void;

    /**
     * Detailed information about a contact on an endpoint.
     */
    on(event: ContactInfoEventType, callback: (event: ContactInfo, instances: ContactInfo) => void): void;

    /**
     * Detailed information about a remote peer that communicates with Asterisk.
     */
    on(event: PeerEventType, callback: (event: Peer, instances: Peer) => void): void;

    /**
     * Notification that a device state has changed.
     */
    on(
        event: DeviceStateChangedEventType,
        callback: (event: DeviceStateChanged, devicestate: DeviceState) => void,
    ): void;

    /**
     * Event showing the start of a media playback operation.
     */
    on(event: PlaybackStartedEventType, callback: (event: PlaybackStarted, playback: Playback) => void): void;

    /**
     * Event showing the continuation of a media playback operation from one media URI to the next in the list.
     */
    on(event: PlaybackContinuingEventType, callback: (event: PlaybackContinuing, playback: Playback) => void): void;

    /**
     * Event showing the completion of a media playback operation.
     */
    on(event: PlaybackFinishedEventType, callback: (event: PlaybackFinished, playback: Playback) => void): void;

    /**
     * Event showing the start of a recording operation.
     */
    on(
        event: RecordingStartedEventType,
        callback: (event: RecordingStarted, liverecording: LiveRecording) => void,
    ): void;

    /**
     * Event showing the completion of a recording operation.
     */
    on(
        event: RecordingFinishedEventType,
        callback: (event: RecordingFinished, liverecording: LiveRecording) => void,
    ): void;

    /**
     * Event showing failure of a recording operation.
     */
    on(event: RecordingFailedEventType, callback: (event: RecordingFailed, liverecording: LiveRecording) => void): void;

    /**
     * Notification that trying to move a channel to another Stasis application failed.
     */
    on(event: ApplicationMoveFailedEventType, callback: (event: ApplicationMoveFailed, channel: Channel) => void): void;

    /**
     * Notification that another WebSocket has taken over for an application. An application may only be subscribed to by a single WebSocket at a time. If multiple WebSockets attempt to subscribe
     * to the same application, the newer WebSocket wins, and the older one receives this event.
     */
    on(event: ApplicationReplacedEventType, callback: (event: Event) => void): void;

    /**
     * Notification that a bridge has been created.
     */
    on(event: BridgeCreatedEventType, callback: (event: BridgeCreated, bridge: Bridge) => void): void;

    /**
     * Notification that a bridge has been destroyed.
     */
    on(event: BridgeDestroyedEventType, callback: (event: BridgeDestroyed, bridge: Bridge) => void): void;

    /**
     * Notification that one bridge has merged into another.
     */
    on(event: BridgeMergedEventType, callback: (event: BridgeMerged, bridge: Bridge) => void): void;

    /**
     * Notification that the source of video in a bridge has changed.
     */
    on(
        event: BridgeVideoSourceChangedEventType,
        callback: (event: BridgeVideoSourceChanged, bridge: Bridge) => void,
    ): void;

    /**
     * Notification that a blind transfer has occurred.
     */
    on(
        event: BridgeBlindTransferEventType,
        callback: (event: BridgeBlindTransfer, instances: BridgeBlindTransfer) => void,
    ): void;

    /**
     * Notification that an attended transfer has occurred.
     */
    on(
        event: BridgeAttendedTransferEventType,
        callback: (event: BridgeAttendedTransfer, instances: BridgeAttendedTransfer) => void,
    ): void;

    /**
     * Notification that a channel has been created.
     */
    on(event: ChannelCreatedEventType, callback: (event: ChannelCreated, channel: Channel) => void): void;

    /**
     * Notification that a channel has been destroyed.
     */
    on(event: ChannelDestroyedEventType, callback: (event: ChannelDestroyed, channel: Channel) => void): void;

    /**
     * Notification that a channel has entered a bridge.
     */
    on(
        event: ChannelEnteredBridgeEventType,
        callback: (event: ChannelEnteredBridge, instances: ChannelEnteredBridge) => void,
    ): void;

    /**
     * Notification that a channel has left a bridge.
     */
    on(
        event: ChannelLeftBridgeEventType,
        callback: (event: ChannelLeftBridge, instances: ChannelLeftBridge) => void,
    ): void;

    /**
     * Notification of a channels state change.
     */
    on(event: ChannelStateChangeEventType, callback: (event: ChannelStateChange, channel: Channel) => void): void;

    /**
     * DTMF received on a channel. This event is sent when the DTMF ends. There is no notification about the start of DTMF.
     */
    on(event: ChannelDtmfReceivedEventType, callback: (event: ChannelDtmfReceived, channel: Channel) => void): void;

    /**
     * Channel changed location in the dialplan.
     */
    on(event: ChannelDialplanEventType, callback: (event: ChannelDialplan, channel: Channel) => void): void;

    /**
     * Channel changed Caller ID.
     */
    on(event: ChannelCallerIdEventType, callback: (event: ChannelCallerId, channel: Channel) => void): void;

    /**
     * User-generated event with additional user-defined fields in the object.
     */
    on(
        event: ChannelUsereventEventType,
        callback: (event: ChannelUserevent, instances: ChannelUserevent) => void,
    ): void;

    /**
     * A hangup was requested on the channel.
     */
    on(event: ChannelHangupRequestEventType, callback: (event: ChannelHangupRequest, channel: Channel) => void): void;

    /**
     * Channel variable changed.
     */
    on(event: ChannelVarsetEventType, callback: (event: ChannelVarset, channel: Channel) => void): void;

    /**
     * A channel initiated a media hold.
     */
    on(event: ChannelHoldEventType, callback: (event: ChannelHold, channel: Channel) => void): void;

    /**
     * A channel initiated a media unhold.
     */
    on(event: ChannelUnholdEventType, callback: (event: ChannelUnhold, channel: Channel) => void): void;

    /**
     * Talking was detected on the channel.
     */
    on(event: ChannelTalkingStartedEventType, callback: (event: ChannelTalkingStarted, channel: Channel) => void): void;

    /**
     * Talking is no longer detected on the channel.
     */
    on(
        event: ChannelTalkingFinishedEventType,
        callback: (event: ChannelTalkingFinished, channel: Channel) => void,
    ): void;

    /**
     * The state of a contact on an endpoint has changed.
     */
    on(event: ContactStatusChangeEventType, callback: (event: ContactStatusChange, endpoint: Endpoint) => void): void;

    /**
     * The state of a peer associated with an endpoint has changed.
     */
    on(event: PeerStatusChangeEventType, callback: (event: PeerStatusChange, endpoint: Endpoint) => void): void;

    /**
     * Endpoint state changed.
     */
    on(event: EndpointStateChangeEventType, callback: (event: EndpointStateChange, endpoint: Endpoint) => void): void;

    /**
     * Dialing state has changed.
     */
    on(event: DialEventType, callback: (event: Dial, channel: Channel) => void): void;

    /**
     * Notification that a channel has left a Stasis application.
     */
    on(event: StasisEndEventType, callback: (event: StasisEnd, channel: Channel) => void): void;

    /**
     * Notification that a channel has entered a Stasis application.
     */
    on(event: StasisStartEventType, callback: (event: StasisStart, channel: Channel) => void): void;

    /**
     * A text message was received from an endpoint.
     */
    on(event: TextMessageReceivedEventType, callback: (event: TextMessageReceived, endpoint: Endpoint) => void): void;

    /**
     * Channel changed Connected Line.
     */
    on(event: ChannelConnectedLineEventType, callback: (event: ChannelConnectedLine, channel: Channel) => void): void;

    /**
     * Error emitted when WebSocket reconnection attempts exceeded MaxRetries.
     */
    // tslint:disable-next-line:unified-signatures
    once(type: WebSocketMaxRetriesEventType, listener: (err: Error) => void): void;

    /**
     * Error emitted when the WebSocket is reconnecting.
     */
    // tslint:disable-next-line:unified-signatures
    once(type: WebSocketReconnectingEventType, listener: (err: Error) => void): void;

    /**
     * Event emitted when the WebSocket is connected.
     */
    // tslint:disable-next-line:unified-signatures
    once(type: WebSocketConnectedEventType, listener: () => void): void;

    /**
     * Event emitted when a WebSocket pong is received.
     */
    // tslint:disable-next-line:unified-signatures
    once(type: PongEventType, listener: () => void): void;

    /**
     * Error event sent when connection to API fails.
     */
    // tslint:disable-next-line:unified-signatures
    once(type: APILoadErrorEventType, listener: (err: Error) => void): void;

    /**
     * Base type for errors and events.
     */
    once(event: MessageEventType, callback: (event: Message, instances: Message) => void): void;

    /**
     * Error event sent when required params are missing.
     */
    once(event: MissingParamsEventType, callback: (event: MissingParams, instances: MissingParams) => void): void;

    /**
     * Base type for asynchronous events from Asterisk.
     */
    once(event: EventEventType, callback: (event: Event, instances: Event) => void): void;

    /**
     * Detailed information about a contact on an endpoint.
     */
    once(event: ContactInfoEventType, callback: (event: ContactInfo, instances: ContactInfo) => void): void;

    /**
     * Detailed information about a remote peer that communicates with Asterisk.
     */
    once(event: PeerEventType, callback: (event: Peer, instances: Peer) => void): void;

    /**
     * Notification that a device state has changed.
     */
    once(
        event: DeviceStateChangedEventType,
        callback: (event: DeviceStateChanged, devicestate: DeviceState) => void,
    ): void;

    /**
     * Event showing the start of a media playback operation.
     */
    once(event: PlaybackStartedEventType, callback: (event: PlaybackStarted, playback: Playback) => void): void;

    /**
     * Event showing the continuation of a media playback operation from one media URI to the next in the list.
     */
    once(event: PlaybackContinuingEventType, callback: (event: PlaybackContinuing, playback: Playback) => void): void;

    /**
     * Event showing the completion of a media playback operation.
     */
    once(event: PlaybackFinishedEventType, callback: (event: PlaybackFinished, playback: Playback) => void): void;

    /**
     * Event showing the start of a recording operation.
     */
    once(
        event: RecordingStartedEventType,
        callback: (event: RecordingStarted, liverecording: LiveRecording) => void,
    ): void;

    /**
     * Event showing the completion of a recording operation.
     */
    once(
        event: RecordingFinishedEventType,
        callback: (event: RecordingFinished, liverecording: LiveRecording) => void,
    ): void;

    /**
     * Event showing failure of a recording operation.
     */
    once(
        event: RecordingFailedEventType,
        callback: (event: RecordingFailed, liverecording: LiveRecording) => void,
    ): void;

    /**
     * Notification that trying to move a channel to another Stasis application failed.
     */
    once(
        event: ApplicationMoveFailedEventType,
        callback: (event: ApplicationMoveFailed, channel: Channel) => void,
    ): void;

    /**
     * Notification that another WebSocket has taken over for an application. An application may only be subscribed to by a single WebSocket at a time. If multiple WebSockets attempt to subscribe
     * to the same application, the newer WebSocket wins, and the older one receives this event.
     */
    once(event: ApplicationReplacedEventType, callback: (event: Event) => void): void;

    /**
     * Notification that a bridge has been created.
     */
    once(event: BridgeCreatedEventType, callback: (event: BridgeCreated, bridge: Bridge) => void): void;

    /**
     * Notification that a bridge has been destroyed.
     */
    once(event: BridgeDestroyedEventType, callback: (event: BridgeDestroyed, bridge: Bridge) => void): void;

    /**
     * Notification that one bridge has merged into another.
     */
    once(event: BridgeMergedEventType, callback: (event: BridgeMerged, bridge: Bridge) => void): void;

    /**
     * Notification that the source of video in a bridge has changed.
     */
    once(
        event: BridgeVideoSourceChangedEventType,
        callback: (event: BridgeVideoSourceChanged, bridge: Bridge) => void,
    ): void;

    /**
     * Notification that a blind transfer has occurred.
     */
    once(
        event: BridgeBlindTransferEventType,
        callback: (event: BridgeBlindTransfer, instances: BridgeBlindTransfer) => void,
    ): void;

    /**
     * Notification that an attended transfer has occurred.
     */
    once(
        event: BridgeAttendedTransferEventType,
        callback: (event: BridgeAttendedTransfer, instances: BridgeAttendedTransfer) => void,
    ): void;

    /**
     * Notification that a channel has been created.
     */
    once(event: ChannelCreatedEventType, callback: (event: ChannelCreated, channel: Channel) => void): void;

    /**
     * Notification that a channel has been destroyed.
     */
    once(event: ChannelDestroyedEventType, callback: (event: ChannelDestroyed, channel: Channel) => void): void;

    /**
     * Notification that a channel has entered a bridge.
     */
    once(
        event: ChannelEnteredBridgeEventType,
        callback: (event: ChannelEnteredBridge, instances: ChannelEnteredBridge) => void,
    ): void;

    /**
     * Notification that a channel has left a bridge.
     */
    once(
        event: ChannelLeftBridgeEventType,
        callback: (event: ChannelLeftBridge, instances: ChannelLeftBridge) => void,
    ): void;

    /**
     * Notification of a channels state change.
     */
    once(event: ChannelStateChangeEventType, callback: (event: ChannelStateChange, channel: Channel) => void): void;

    /**
     * DTMF received on a channel. This event is sent when the DTMF ends. There is no notification about the start of DTMF.
     */
    once(event: ChannelDtmfReceivedEventType, callback: (event: ChannelDtmfReceived, channel: Channel) => void): void;

    /**
     * Channel changed location in the dialplan.
     */
    once(event: ChannelDialplanEventType, callback: (event: ChannelDialplan, channel: Channel) => void): void;

    /**
     * Channel changed Caller ID.
     */
    once(event: ChannelCallerIdEventType, callback: (event: ChannelCallerId, channel: Channel) => void): void;

    /**
     * User-generated event with additional user-defined fields in the object.
     */
    once(
        event: ChannelUsereventEventType,
        callback: (event: ChannelUserevent, instances: ChannelUserevent) => void,
    ): void;

    /**
     * A hangup was requested on the channel.
     */
    once(event: ChannelHangupRequestEventType, callback: (event: ChannelHangupRequest, channel: Channel) => void): void;

    /**
     * Channel variable changed.
     */
    once(event: ChannelVarsetEventType, callback: (event: ChannelVarset, channel: Channel) => void): void;

    /**
     * A channel initiated a media hold.
     */
    once(event: ChannelHoldEventType, callback: (event: ChannelHold, channel: Channel) => void): void;

    /**
     * A channel initiated a media unhold.
     */
    once(event: ChannelUnholdEventType, callback: (event: ChannelUnhold, channel: Channel) => void): void;

    /**
     * Talking was detected on the channel.
     */
    once(
        event: ChannelTalkingStartedEventType,
        callback: (event: ChannelTalkingStarted, channel: Channel) => void,
    ): void;

    /**
     * Talking is no longer detected on the channel.
     */
    once(
        event: ChannelTalkingFinishedEventType,
        callback: (event: ChannelTalkingFinished, channel: Channel) => void,
    ): void;

    /**
     * The state of a contact on an endpoint has changed.
     */
    once(event: ContactStatusChangeEventType, callback: (event: ContactStatusChange, endpoint: Endpoint) => void): void;

    /**
     * The state of a peer associated with an endpoint has changed.
     */
    once(event: PeerStatusChangeEventType, callback: (event: PeerStatusChange, endpoint: Endpoint) => void): void;

    /**
     * Endpoint state changed.
     */
    once(event: EndpointStateChangeEventType, callback: (event: EndpointStateChange, endpoint: Endpoint) => void): void;

    /**
     * Dialing state has changed.
     */
    once(event: DialEventType, callback: (event: Dial, channel: Channel) => void): void;

    /**
     * Notification that a channel has left a Stasis application.
     */
    once(event: StasisEndEventType, callback: (event: StasisEnd, channel: Channel) => void): void;

    /**
     * Notification that a channel has entered a Stasis application.
     */
    once(event: StasisStartEventType, callback: (event: StasisStart, channel: Channel) => void): void;

    /**
     * A text message was received from an endpoint.
     */
    once(event: TextMessageReceivedEventType, callback: (event: TextMessageReceived, endpoint: Endpoint) => void): void;

    /**
     * Channel changed Connected Line.
     */
    once(event: ChannelConnectedLineEventType, callback: (event: ChannelConnectedLine, channel: Channel) => void): void;

    /**
     * Error emitted when WebSocket reconnection attempts exceeded MaxRetries.
     */
    // tslint:disable-next-line:unified-signatures
    addListener(type: WebSocketMaxRetriesEventType, listener: (err: Error) => void): void;

    /**
     * Error emitted when the WebSocket is reconnecting.
     */
    // tslint:disable-next-line:unified-signatures
    addListener(type: WebSocketReconnectingEventType, listener: (err: Error) => void): void;

    /**
     * Event emitted when the WebSocket is connected.
     */
    // tslint:disable-next-line:unified-signatures
    addListener(type: WebSocketConnectedEventType, listener: () => void): void;

    /**
     * Event emitted when a WebSocket pong is received.
     */
    // tslint:disable-next-line:unified-signatures
    addListener(type: PongEventType, listener: () => void): void;

    /**
     * Error event sent when connection to API fails.
     */
    // tslint:disable-next-line:unified-signatures
    addListener(type: APILoadErrorEventType, listener: (err: Error) => void): void;

    /**
     * Base type for errors and events.
     */
    addListener(event: MessageEventType, callback: (event: Message, instances: Message) => void): void;

    /**
     * Error event sent when required params are missing.
     */
    addListener(
        event: MissingParamsEventType,
        callback: (event: MissingParams, instances: MissingParams) => void,
    ): void;

    /**
     * Base type for asynchronous events from Asterisk.
     */
    addListener(event: EventEventType, callback: (event: Event, instances: Event) => void): void;

    /**
     * Detailed information about a contact on an endpoint.
     */
    addListener(event: ContactInfoEventType, callback: (event: ContactInfo, instances: ContactInfo) => void): void;

    /**
     * Detailed information about a remote peer that communicates with Asterisk.
     */
    addListener(event: PeerEventType, callback: (event: Peer, instances: Peer) => void): void;

    /**
     * Notification that a device state has changed.
     */
    addListener(
        event: DeviceStateChangedEventType,
        callback: (event: DeviceStateChanged, devicestate: DeviceState) => void,
    ): void;

    /**
     * Event showing the start of a media playback operation.
     */
    addListener(event: PlaybackStartedEventType, callback: (event: PlaybackStarted, playback: Playback) => void): void;

    /**
     * Event showing the continuation of a media playback operation from one media URI to the next in the list.
     */
    addListener(
        event: PlaybackContinuingEventType,
        callback: (event: PlaybackContinuing, playback: Playback) => void,
    ): void;

    /**
     * Event showing the completion of a media playback operation.
     */
    addListener(
        event: PlaybackFinishedEventType,
        callback: (event: PlaybackFinished, playback: Playback) => void,
    ): void;

    /**
     * Event showing the start of a recording operation.
     */
    addListener(
        event: RecordingStartedEventType,
        callback: (event: RecordingStarted, liverecording: LiveRecording) => void,
    ): void;

    /**
     * Event showing the completion of a recording operation.
     */
    addListener(
        event: RecordingFinishedEventType,
        callback: (event: RecordingFinished, liverecording: LiveRecording) => void,
    ): void;

    /**
     * Event showing failure of a recording operation.
     */
    addListener(
        event: RecordingFailedEventType,
        callback: (event: RecordingFailed, liverecording: LiveRecording) => void,
    ): void;

    /**
     * Notification that trying to move a channel to another Stasis application failed.
     */
    addListener(
        event: ApplicationMoveFailedEventType,
        callback: (event: ApplicationMoveFailed, channel: Channel) => void,
    ): void;

    /**
     * Notification that another WebSocket has taken over for an application. An application may only be subscribed to by a single WebSocket at a time. If multiple WebSockets attempt to subscribe
     * to the same application, the newer WebSocket wins, and the older one receives this event.
     */
    addListener(event: ApplicationReplacedEventType, callback: (event: Event) => void): void;

    /**
     * Notification that a bridge has been created.
     */
    addListener(event: BridgeCreatedEventType, callback: (event: BridgeCreated, bridge: Bridge) => void): void;

    /**
     * Notification that a bridge has been destroyed.
     */
    addListener(event: BridgeDestroyedEventType, callback: (event: BridgeDestroyed, bridge: Bridge) => void): void;

    /**
     * Notification that one bridge has merged into another.
     */
    addListener(event: BridgeMergedEventType, callback: (event: BridgeMerged, bridge: Bridge) => void): void;

    /**
     * Notification that the source of video in a bridge has changed.
     */
    addListener(
        event: BridgeVideoSourceChangedEventType,
        callback: (event: BridgeVideoSourceChanged, bridge: Bridge) => void,
    ): void;

    /**
     * Notification that a blind transfer has occurred.
     */
    addListener(
        event: BridgeBlindTransferEventType,
        callback: (event: BridgeBlindTransfer, instances: BridgeBlindTransfer) => void,
    ): void;

    /**
     * Notification that an attended transfer has occurred.
     */
    addListener(
        event: BridgeAttendedTransferEventType,
        callback: (event: BridgeAttendedTransfer, instances: BridgeAttendedTransfer) => void,
    ): void;

    /**
     * Notification that a channel has been created.
     */
    addListener(event: ChannelCreatedEventType, callback: (event: ChannelCreated, channel: Channel) => void): void;

    /**
     * Notification that a channel has been destroyed.
     */
    addListener(event: ChannelDestroyedEventType, callback: (event: ChannelDestroyed, channel: Channel) => void): void;

    /**
     * Notification that a channel has entered a bridge.
     */
    addListener(
        event: ChannelEnteredBridgeEventType,
        callback: (event: ChannelEnteredBridge, instances: ChannelEnteredBridge) => void,
    ): void;

    /**
     * Notification that a channel has left a bridge.
     */
    addListener(
        event: ChannelLeftBridgeEventType,
        callback: (event: ChannelLeftBridge, instances: ChannelLeftBridge) => void,
    ): void;

    /**
     * Notification of a channels state change.
     */
    addListener(
        event: ChannelStateChangeEventType,
        callback: (event: ChannelStateChange, channel: Channel) => void,
    ): void;

    /**
     * DTMF received on a channel. This event is sent when the DTMF ends. There is no notification about the start of DTMF.
     */
    addListener(
        event: ChannelDtmfReceivedEventType,
        callback: (event: ChannelDtmfReceived, channel: Channel) => void,
    ): void;

    /**
     * Channel changed location in the dialplan.
     */
    addListener(event: ChannelDialplanEventType, callback: (event: ChannelDialplan, channel: Channel) => void): void;

    /**
     * Channel changed Caller ID.
     */
    addListener(event: ChannelCallerIdEventType, callback: (event: ChannelCallerId, channel: Channel) => void): void;

    /**
     * User-generated event with additional user-defined fields in the object.
     */
    addListener(
        event: ChannelUsereventEventType,
        callback: (event: ChannelUserevent, instances: ChannelUserevent) => void,
    ): void;

    /**
     * A hangup was requested on the channel.
     */
    addListener(
        event: ChannelHangupRequestEventType,
        callback: (event: ChannelHangupRequest, channel: Channel) => void,
    ): void;

    /**
     * Channel variable changed.
     */
    addListener(event: ChannelVarsetEventType, callback: (event: ChannelVarset, channel: Channel) => void): void;

    /**
     * A channel initiated a media hold.
     */
    addListener(event: ChannelHoldEventType, callback: (event: ChannelHold, channel: Channel) => void): void;

    /**
     * A channel initiated a media unhold.
     */
    addListener(event: ChannelUnholdEventType, callback: (event: ChannelUnhold, channel: Channel) => void): void;

    /**
     * Talking was detected on the channel.
     */
    addListener(
        event: ChannelTalkingStartedEventType,
        callback: (event: ChannelTalkingStarted, channel: Channel) => void,
    ): void;

    /**
     * Talking is no longer detected on the channel.
     */
    addListener(
        event: ChannelTalkingFinishedEventType,
        callback: (event: ChannelTalkingFinished, channel: Channel) => void,
    ): void;

    /**
     * The state of a contact on an endpoint has changed.
     */
    addListener(
        event: ContactStatusChangeEventType,
        callback: (event: ContactStatusChange, endpoint: Endpoint) => void,
    ): void;

    /**
     * The state of a peer associated with an endpoint has changed.
     */
    addListener(
        event: PeerStatusChangeEventType,
        callback: (event: PeerStatusChange, endpoint: Endpoint) => void,
    ): void;

    /**
     * Endpoint state changed.
     */
    addListener(
        event: EndpointStateChangeEventType,
        callback: (event: EndpointStateChange, endpoint: Endpoint) => void,
    ): void;

    /**
     * Dialing state has changed.
     */
    addListener(event: DialEventType, callback: (event: Dial, channel: Channel) => void): void;

    /**
     * Notification that a channel has left a Stasis application.
     */
    addListener(event: StasisEndEventType, callback: (event: StasisEnd, channel: Channel) => void): void;

    /**
     * Notification that a channel has entered a Stasis application.
     */
    addListener(event: StasisStartEventType, callback: (event: StasisStart, channel: Channel) => void): void;

    /**
     * A text message was received from an endpoint.
     */
    addListener(
        event: TextMessageReceivedEventType,
        callback: (event: TextMessageReceived, endpoint: Endpoint) => void,
    ): void;

    /**
     * Channel changed Connected Line.
     */
    addListener(
        event: ChannelConnectedLineEventType,
        callback: (event: ChannelConnectedLine, channel: Channel) => void,
    ): void;

    /**
     *  Removes the event listener for the specified event type.
     *  @param event - The event type.
     *  @param handler - The event listener function.
     */
    removeListener(event: AnyEventType, handler: (...args: any[]) => void): void;

    /**
     *  Removes all listeners, or those of the specified event type.
     *  @param [event] - The event type.
     */
    removeAllListeners(event?: AnyEventType): void;
}
export interface Applications {
    /**
     * List all applications.
     */
    list(callback: (err: Error, applications: Application[]) => void): void;

    /**
     * List all applications.
     */
    list(): Promise<Application[]>;

    /**
     * Get details of an application.
     *
     * @param params.applicationName - Applications name.
     */
    get(params: { applicationName: string }, callback: (err: Error, application: Application) => void): void;

    /**
     * Get details of an application.
     *
     * @param params.applicationName - Applications name.
     */
    get(params: { applicationName: string }): Promise<Application>;

    /**
     * Subscribe an application to a event source.
     * Returns the state of the application after the subscriptions have changed.
     *
     * @param params.applicationName - Applications name.
     * @param params.eventSource - URI for event source (channel:{channelId}, bridge:{bridgeId}, endpoint:{tech}[/{resource}], deviceState:{deviceName}.
     */
    subscribe(
        params: { applicationName: string; eventSource: string | string[] },
        callback: (err: Error, application: Application) => void,
    ): void;

    /**
     * Subscribe an application to a event source.
     * Returns the state of the application after the subscriptions have changed.
     *
     * @param params.applicationName - Applications name.
     * @param params.eventSource - URI for event source (channel:{channelId}, bridge:{bridgeId}, endpoint:{tech}[/{resource}], deviceState:{deviceName}.
     */
    subscribe(params: { applicationName: string; eventSource: string | string[] }): Promise<Application>;

    /**
     * Unsubscribe an application from an event source.
     * Returns the state of the application after the subscriptions have changed.
     *
     * @param params.applicationName - Applications name.
     * @param params.eventSource - URI for event source (channel:{channelId}, bridge:{bridgeId}, endpoint:{tech}[/{resource}], deviceState:{deviceName}.
     */
    unsubscribe(
        params: { applicationName: string; eventSource: string | string[] },
        callback: (err: Error, application: Application) => void,
    ): void;

    /**
     * Unsubscribe an application from an event source.
     * Returns the state of the application after the subscriptions have changed.
     *
     * @param params.applicationName - Applications name.
     * @param params.eventSource - URI for event source (channel:{channelId}, bridge:{bridgeId}, endpoint:{tech}[/{resource}], deviceState:{deviceName}.
     */
    unsubscribe(params: { applicationName: string; eventSource: string | string[] }): Promise<Application>;

    /**
     * Filter application events types.
     * Allowed and/or disallowed event type filtering can be done. The body (parameter) should specify a JSON key/value object that describes the type of event filtering needed. One, or
     * both of the following keys can be designated: "allowed" - Specifies an allowed list of event types "disallowed" - Specifies a disallowed list of event types Further, each of those
     * keys value should be a JSON array that holds zero, or more JSON key/value objects. Each of these objects must contain the following key with an associated value: "type" - The
     * type name of the event to filter The value must be the string name (case sensitive) of the event type that needs filtering. For example: { "allowed": [ { "type": "StasisStart" },
     * { "type": "StasisEnd" } ] } As this specifies only an allowed list, then only those two event type messages are sent to the application. No other event messages are sent. The following
     * rules apply: * If the body is empty, both the allowed and disallowed filters are set empty. * If both list types are given then both are set to their respective values (note,
     * specifying an empty array for a given type sets that type to empty). * If only one list type is given then only that type is set. The other type is not updated. * An empty "allowed"
     * list means all events are allowed. * An empty "disallowed" list means no events are disallowed. * Disallowed events take precedence over allowed events if the event type
     * is specified in both lists.
     *
     * @param params.applicationName - Applications name.
     * @param [params.filter] - Specify which event types to allow/disallow.
     */
    filter(
        params: { applicationName: string; filter?: IndexableObject | undefined },
        callback: (err: Error, application: Application) => void,
    ): void;

    /**
     * Filter application events types.
     * Allowed and/or disallowed event type filtering can be done. The body (parameter) should specify a JSON key/value object that describes the type of event filtering needed. One, or
     * both of the following keys can be designated: "allowed" - Specifies an allowed list of event types "disallowed" - Specifies a disallowed list of event types Further, each of those
     * keys value should be a JSON array that holds zero, or more JSON key/value objects. Each of these objects must contain the following key with an associated value: "type" - The
     * type name of the event to filter The value must be the string name (case sensitive) of the event type that needs filtering. For example: { "allowed": [ { "type": "StasisStart" },
     * { "type": "StasisEnd" } ] } As this specifies only an allowed list, then only those two event type messages are sent to the application. No other event messages are sent. The following
     * rules apply: * If the body is empty, both the allowed and disallowed filters are set empty. * If both list types are given then both are set to their respective values (note,
     * specifying an empty array for a given type sets that type to empty). * If only one list type is given then only that type is set. The other type is not updated. * An empty "allowed"
     * list means all events are allowed. * An empty "disallowed" list means no events are disallowed. * Disallowed events take precedence over allowed events if the event type
     * is specified in both lists.
     *
     * @param params.applicationName - Applications name.
     * @param [params.filter] - Specify which event types to allow/disallow.
     */
    filter(params: { applicationName: string; filter?: IndexableObject | undefined }): Promise<Application>;
}
export interface Application extends Resource {
    /**
     * Name of this application.
     */
    name: string;

    /**
     * Ids for channels subscribed to.
     */
    channel_ids: string | string[];

    /**
     * Ids for bridges subscribed to.
     */
    bridge_ids: string | string[];

    /**
     * {tech}/{resource} for endpoints subscribed to.
     */
    endpoint_ids: string | string[];

    /**
     * Names of the devices subscribed to.
     */
    device_names: string | string[];

    /**
     * Event types sent to the application.
     */
    events_allowed: IndexableObject | IndexableObject[];

    /**
     * Event types not sent to the application.
     */
    events_disallowed: IndexableObject | IndexableObject[];

    /**
     * List all applications.
     */
    list(callback: (err: Error, applications: Application[]) => void): void;

    /**
     * List all applications.
     */
    list(): Promise<Application[]>;

    /**
     * Get details of an application.
     */
    get(callback: (err: Error, application: Application) => void): void;

    /**
     * Get details of an application.
     */
    get(): Promise<Application>;

    /**
     * Subscribe an application to a event source.
     * Returns the state of the application after the subscriptions have changed.
     *
     * @param params.eventSource - URI for event source (channel:{channelId}, bridge:{bridgeId}, endpoint:{tech}[/{resource}], deviceState:{deviceName}.
     */
    subscribe(
        params: { eventSource: string | string[] },
        callback: (err: Error, application: Application) => void,
    ): void;

    /**
     * Subscribe an application to a event source.
     * Returns the state of the application after the subscriptions have changed.
     *
     * @param params.eventSource - URI for event source (channel:{channelId}, bridge:{bridgeId}, endpoint:{tech}[/{resource}], deviceState:{deviceName}.
     */
    subscribe(params: { eventSource: string | string[] }): Promise<Application>;

    /**
     * Unsubscribe an application from an event source.
     * Returns the state of the application after the subscriptions have changed.
     *
     * @param params.eventSource - URI for event source (channel:{channelId}, bridge:{bridgeId}, endpoint:{tech}[/{resource}], deviceState:{deviceName}.
     */
    unsubscribe(
        params: { eventSource: string | string[] },
        callback: (err: Error, application: Application) => void,
    ): void;

    /**
     * Unsubscribe an application from an event source.
     * Returns the state of the application after the subscriptions have changed.
     *
     * @param params.eventSource - URI for event source (channel:{channelId}, bridge:{bridgeId}, endpoint:{tech}[/{resource}], deviceState:{deviceName}.
     */
    unsubscribe(params: { eventSource: string | string[] }): Promise<Application>;

    /**
     * Filter application events types.
     * Allowed and/or disallowed event type filtering can be done. The body (parameter) should specify a JSON key/value object that describes the type of event filtering needed. One, or
     * both of the following keys can be designated: "allowed" - Specifies an allowed list of event types "disallowed" - Specifies a disallowed list of event types Further, each of those
     * keys value should be a JSON array that holds zero, or more JSON key/value objects. Each of these objects must contain the following key with an associated value: "type" - The
     * type name of the event to filter The value must be the string name (case sensitive) of the event type that needs filtering. For example: { "allowed": [ { "type": "StasisStart" },
     * { "type": "StasisEnd" } ] } As this specifies only an allowed list, then only those two event type messages are sent to the application. No other event messages are sent. The following
     * rules apply: * If the body is empty, both the allowed and disallowed filters are set empty. * If both list types are given then both are set to their respective values (note,
     * specifying an empty array for a given type sets that type to empty). * If only one list type is given then only that type is set. The other type is not updated. * An empty "allowed"
     * list means all events are allowed. * An empty "disallowed" list means no events are disallowed. * Disallowed events take precedence over allowed events if the event type
     * is specified in both lists.
     *
     * @param [params.filter] - Specify which event types to allow/disallow.
     */
    filter(params: { filter?: IndexableObject | undefined }, callback: (err: Error, application: Application) => void): void;

    /**
     * Filter application events types.
     * Allowed and/or disallowed event type filtering can be done. The body (parameter) should specify a JSON key/value object that describes the type of event filtering needed. One, or
     * both of the following keys can be designated: "allowed" - Specifies an allowed list of event types "disallowed" - Specifies a disallowed list of event types Further, each of those
     * keys value should be a JSON array that holds zero, or more JSON key/value objects. Each of these objects must contain the following key with an associated value: "type" - The
     * type name of the event to filter The value must be the string name (case sensitive) of the event type that needs filtering. For example: { "allowed": [ { "type": "StasisStart" },
     * { "type": "StasisEnd" } ] } As this specifies only an allowed list, then only those two event type messages are sent to the application. No other event messages are sent. The following
     * rules apply: * If the body is empty, both the allowed and disallowed filters are set empty. * If both list types are given then both are set to their respective values (note,
     * specifying an empty array for a given type sets that type to empty). * If only one list type is given then only that type is set. The other type is not updated. * An empty "allowed"
     * list means all events are allowed. * An empty "disallowed" list means no events are disallowed. * Disallowed events take precedence over allowed events if the event type
     * is specified in both lists.
     */
    filter(callback: (err: Error, application: Application) => void): void;

    /**
     * Filter application events types.
     * Allowed and/or disallowed event type filtering can be done. The body (parameter) should specify a JSON key/value object that describes the type of event filtering needed. One, or
     * both of the following keys can be designated: "allowed" - Specifies an allowed list of event types "disallowed" - Specifies a disallowed list of event types Further, each of those
     * keys value should be a JSON array that holds zero, or more JSON key/value objects. Each of these objects must contain the following key with an associated value: "type" - The
     * type name of the event to filter The value must be the string name (case sensitive) of the event type that needs filtering. For example: { "allowed": [ { "type": "StasisStart" },
     * { "type": "StasisEnd" } ] } As this specifies only an allowed list, then only those two event type messages are sent to the application. No other event messages are sent. The following
     * rules apply: * If the body is empty, both the allowed and disallowed filters are set empty. * If both list types are given then both are set to their respective values (note,
     * specifying an empty array for a given type sets that type to empty). * If only one list type is given then only that type is set. The other type is not updated. * An empty "allowed"
     * list means all events are allowed. * An empty "disallowed" list means no events are disallowed. * Disallowed events take precedence over allowed events if the event type
     * is specified in both lists.
     *
     * @param [params.filter] - Specify which event types to allow/disallow.
     */
    filter(params?: { filter?: IndexableObject | undefined }): Promise<Application>;
}
export interface Asterisk {
    /**
     * Retrieve a dynamic configuration object.
     *
     * @param params.configClass - The configuration class containing dynamic configuration objects.
     * @param params.objectType - The type of configuration object to retrieve.
     * @param params.id - The unique identifier of the object to retrieve.
     */
    getObject(
        params: { configClass: string; objectType: string; id: string },
        callback: (err: Error, configtuples: ConfigTuple[]) => void,
    ): void;

    /**
     * Retrieve a dynamic configuration object.
     *
     * @param params.configClass - The configuration class containing dynamic configuration objects.
     * @param params.objectType - The type of configuration object to retrieve.
     * @param params.id - The unique identifier of the object to retrieve.
     */
    getObject(params: { configClass: string; objectType: string; id: string }): Promise<ConfigTuple[]>;

    /**
     * Create or update a dynamic configuration object.
     *
     * @param params.configClass - The configuration class containing dynamic configuration objects.
     * @param params.objectType - The type of configuration object to create or update.
     * @param params.id - The unique identifier of the object to create or update.
     * @param [params.fields] - The body object should have a value that is a list of ConfigTuples, which provide the fields to update. Ex. [ { "attribute": "directmedia", "value": "false" } ].
     */
    updateObject(
        params: { configClass: string; objectType: string; id: string; fields?: Containers | undefined },
        callback: (err: Error, configtuples: ConfigTuple[]) => void,
    ): void;

    /**
     * Create or update a dynamic configuration object.
     *
     * @param params.configClass - The configuration class containing dynamic configuration objects.
     * @param params.objectType - The type of configuration object to create or update.
     * @param params.id - The unique identifier of the object to create or update.
     * @param [params.fields] - The body object should have a value that is a list of ConfigTuples, which provide the fields to update. Ex. [ { "attribute": "directmedia", "value": "false" } ].
     */
    updateObject(params: {
        configClass: string;
        objectType: string;
        id: string;
        fields?: Containers | undefined;
    }): Promise<ConfigTuple[]>;

    /**
     * Delete a dynamic configuration object.
     *
     * @param params.configClass - The configuration class containing dynamic configuration objects.
     * @param params.objectType - The type of configuration object to delete.
     * @param params.id - The unique identifier of the object to delete.
     */
    deleteObject(params: { configClass: string; objectType: string; id: string }, callback: (err: Error) => void): void;

    /**
     * Delete a dynamic configuration object.
     *
     * @param params.configClass - The configuration class containing dynamic configuration objects.
     * @param params.objectType - The type of configuration object to delete.
     * @param params.id - The unique identifier of the object to delete.
     */
    deleteObject(params: { configClass: string; objectType: string; id: string }): Promise<void>;

    /**
     * Gets Asterisk system information.
     *
     * @param [params.only] - Filter information returned.
     */
    getInfo(params: { only?: string | string[] | undefined }, callback: (err: Error, asteriskinfo: AsteriskInfo) => void): void;

    /**
     * Gets Asterisk system information.
     */
    getInfo(callback: (err: Error, asteriskinfo: AsteriskInfo) => void): void;

    /**
     * Gets Asterisk system information.
     *
     * @param [params.only] - Filter information returned.
     */
    getInfo(params?: { only?: string | string[] | undefined }): Promise<AsteriskInfo>;

    /**
     * Response pong message.
     */
    ping(callback: (err: Error, asteriskping: AsteriskPing) => void): void;

    /**
     * Response pong message.
     */
    ping(): Promise<AsteriskPing>;

    /**
     * List Asterisk modules.
     */
    listModules(callback: (err: Error, modules: Module[]) => void): void;

    /**
     * List Asterisk modules.
     */
    listModules(): Promise<Module[]>;

    /**
     * Get Asterisk module information.
     *
     * @param params.moduleName - Modules name.
     */
    getModule(params: { moduleName: string }, callback: (err: Error, module: Module) => void): void;

    /**
     * Get Asterisk module information.
     *
     * @param params.moduleName - Modules name.
     */
    getModule(params: { moduleName: string }): Promise<Module>;

    /**
     * Load an Asterisk module.
     *
     * @param params.moduleName - Modules name.
     */
    loadModule(params: { moduleName: string }, callback: (err: Error) => void): void;

    /**
     * Load an Asterisk module.
     *
     * @param params.moduleName - Modules name.
     */
    loadModule(params: { moduleName: string }): Promise<void>;

    /**
     * Unload an Asterisk module.
     *
     * @param params.moduleName - Modules name.
     */
    unloadModule(params: { moduleName: string }, callback: (err: Error) => void): void;

    /**
     * Unload an Asterisk module.
     *
     * @param params.moduleName - Modules name.
     */
    unloadModule(params: { moduleName: string }): Promise<void>;

    /**
     * Reload an Asterisk module.
     *
     * @param params.moduleName - Modules name.
     */
    reloadModule(params: { moduleName: string }, callback: (err: Error) => void): void;

    /**
     * Reload an Asterisk module.
     *
     * @param params.moduleName - Modules name.
     */
    reloadModule(params: { moduleName: string }): Promise<void>;

    /**
     * Gets Asterisk log channel information.
     */
    listLogChannels(callback: (err: Error, logchannels: LogChannel[]) => void): void;

    /**
     * Gets Asterisk log channel information.
     */
    listLogChannels(): Promise<LogChannel[]>;

    /**
     * Adds a log channel.
     *
     * @param params.logChannelName - The log channel to add.
     * @param params.configuration - levels of the log channel.
     */
    addLog(params: { logChannelName: string; configuration: string }, callback: (err: Error) => void): void;

    /**
     * Adds a log channel.
     *
     * @param params.logChannelName - The log channel to add.
     * @param params.configuration - levels of the log channel.
     */
    addLog(params: { logChannelName: string; configuration: string }): Promise<void>;

    /**
     * Deletes a log channel.
     *
     * @param params.logChannelName - Log channels name.
     */
    deleteLog(params: { logChannelName: string }, callback: (err: Error) => void): void;

    /**
     * Deletes a log channel.
     *
     * @param params.logChannelName - Log channels name.
     */
    deleteLog(params: { logChannelName: string }): Promise<void>;

    /**
     * Rotates a log channel.
     *
     * @param params.logChannelName - Log channels name.
     */
    rotateLog(params: { logChannelName: string }, callback: (err: Error) => void): void;

    /**
     * Rotates a log channel.
     *
     * @param params.logChannelName - Log channels name.
     */
    rotateLog(params: { logChannelName: string }): Promise<void>;

    /**
     * Get the value of a global variable.
     *
     * @param params.variable - The variable to get.
     */
    getGlobalVar(params: { variable: string }, callback: (err: Error, variable: Variable) => void): void;

    /**
     * Get the value of a global variable.
     *
     * @param params.variable - The variable to get.
     */
    getGlobalVar(params: { variable: string }): Promise<Variable>;

    /**
     * Set the value of a global variable.
     *
     * @param params.variable - The variable to set.
     * @param [params.value] - The value to set the variable to.
     */
    setGlobalVar(params: { variable: string; value?: string | undefined }, callback: (err: Error) => void): void;

    /**
     * Set the value of a global variable.
     *
     * @param params.variable - The variable to set.
     * @param [params.value] - The value to set the variable to.
     */
    setGlobalVar(params: { variable: string; value?: string | undefined }): Promise<void>;
}
export interface BuildInfo {
    /**
     * OS Asterisk was built on.
     */
    os: string;

    /**
     * Kernel version Asterisk was built on.
     */
    kernel: string;

    /**
     * Compile time options, or empty string if default.
     */
    options: string;

    /**
     * Machine architecture (x86_64, i686, ppc, etc.).
     */
    machine: string;

    /**
     * Date and time when Asterisk was built.
     */
    date: string;

    /**
     * Username that build Asterisk.
     */
    user: string;
}
export interface SystemInfo {
    /**
     * Asterisk version.
     */
    version: string;

    /**
     * Entity_id.
     */
    entity_id: string;
}
export interface SetId {
    /**
     * Effective user id.
     */
    user: string;

    /**
     * Effective group id.
     */
    group: string;
}
export interface ConfigInfo {
    /**
     * Asterisk system name.
     */
    name: string;

    /**
     * Default language for media playback.
     */
    default_language: string;

    /**
     * Maximum number of simultaneous channels.
     */
    max_channels?: number | undefined;

    /**
     * Maximum number of open file handles (files, sockets).
     */
    max_open_files?: number | undefined;

    /**
     * Maximum load avg on system.
     */
    max_load?: number | undefined;

    /**
     * Effective user/group id for running Asterisk.
     */
    setid: SetId;
}
export interface StatusInfo {
    /**
     * Time when Asterisk was started.
     */
    startup_time: Date;

    /**
     * Time when Asterisk was last reloaded.
     */
    last_reload_time: Date;
}
export interface AsteriskInfo {
    /**
     * Info about how Asterisk was built.
     */
    build?: BuildInfo | undefined;

    /**
     * Info about the system running Asterisk.
     */
    system?: SystemInfo | undefined;

    /**
     * Info about Asterisk configuration.
     */
    config?: ConfigInfo | undefined;

    /**
     * Info about Asterisk status.
     */
    status?: StatusInfo | undefined;
}
export interface AsteriskPing {
    /**
     * Asterisk id info.
     */
    asterisk_id: string;

    /**
     * Always string value is pong.
     */
    ping: string;

    /**
     * The timestamp string of request received time.
     */
    timestamp: string;
}
export interface Module {
    /**
     * The name of this module.
     */
    name: string;

    /**
     * The description of this module.
     */
    description: string;

    /**
     * The number of times this module is being used.
     */
    use_count: number;

    /**
     * The running status of this module.
     */
    status: string;

    /**
     * The support state of this module.
     */
    support_level: string;
}
export interface LogChannel {
    /**
     * The log channel path.
     */
    channel: string;

    /**
     * Types of logs for the log channel.
     */
    type: string;

    /**
     * Whether or not a log type is enabled.
     */
    status: string;

    /**
     * The various log levels.
     */
    configuration: string;
}
export interface Variable {
    /**
     * The value of the variable requested.
     */
    value: string;
}
export interface ConfigTuple {
    /**
     * A configuration object attribute.
     */
    attribute: string;

    /**
     * The value for the attribute.
     */
    value: string;
}
export interface Bridges {
    /**
     * List all active bridges in Asterisk.
     */
    list(callback: (err: Error, bridges: Bridge[]) => void): void;

    /**
     * List all active bridges in Asterisk.
     */
    list(): Promise<Bridge[]>;

    /**
     * Create a new bridge.
     * This bridge persists until it has been shut down, or Asterisk has been shut down.
     *
     * @param [params.type] - Comma separated list of bridge type attributes (mixing, holding, dtmf_events, proxy_media, video_sfu).
     * @param [params.bridgeId] - Unique ID to give to the bridge being created.
     * @param [params.name] - Name to give to the bridge being created.
     */
    create(
        params: { type?: string | undefined; bridgeId?: string | undefined; name?: string | undefined },
        callback: (err: Error, bridge: Bridge) => void,
    ): void;

    /**
     * Create a new bridge.
     * This bridge persists until it has been shut down, or Asterisk has been shut down.
     */
    create(callback: (err: Error, bridge: Bridge) => void): void;

    /**
     * Create a new bridge.
     * This bridge persists until it has been shut down, or Asterisk has been shut down.
     *
     * @param [params.type] - Comma separated list of bridge type attributes (mixing, holding, dtmf_events, proxy_media, video_sfu).
     * @param [params.bridgeId] - Unique ID to give to the bridge being created.
     * @param [params.name] - Name to give to the bridge being created.
     */
    create(params?: { type?: string | undefined; bridgeId?: string | undefined; name?: string | undefined }): Promise<Bridge>;

    /**
     * Create a new bridge or updates an existing one.
     * This bridge persists until it has been shut down, or Asterisk has been shut down.
     *
     * @param [params.type] - Comma separated list of bridge type attributes (mixing, holding, dtmf_events, proxy_media, video_sfu) to set.
     * @param params.bridgeId - Unique ID to give to the bridge being created.
     * @param [params.name] - Set the name of the bridge.
     */
    createWithId(
        params: { type?: string | undefined; bridgeId: string; name?: string | undefined },
        callback: (err: Error, bridge: Bridge) => void,
    ): void;

    /**
     * Create a new bridge or updates an existing one.
     * This bridge persists until it has been shut down, or Asterisk has been shut down.
     *
     * @param [params.type] - Comma separated list of bridge type attributes (mixing, holding, dtmf_events, proxy_media, video_sfu) to set.
     * @param params.bridgeId - Unique ID to give to the bridge being created.
     * @param [params.name] - Set the name of the bridge.
     */
    createWithId(params: { type?: string | undefined; bridgeId: string; name?: string | undefined }): Promise<Bridge>;

    /**
     * Get bridge details.
     *
     * @param params.bridgeId - Bridges id.
     */
    get(params: { bridgeId: string }, callback: (err: Error, bridge: Bridge) => void): void;

    /**
     * Get bridge details.
     *
     * @param params.bridgeId - Bridges id.
     */
    get(params: { bridgeId: string }): Promise<Bridge>;

    /**
     * Shut down a bridge.
     * If any channels are in this bridge, they will be removed and resume whatever they were doing beforehand.
     *
     * @param params.bridgeId - Bridges id.
     */
    destroy(params: { bridgeId: string }, callback: (err: Error) => void): void;

    /**
     * Shut down a bridge.
     * If any channels are in this bridge, they will be removed and resume whatever they were doing beforehand.
     *
     * @param params.bridgeId - Bridges id.
     */
    destroy(params: { bridgeId: string }): Promise<void>;

    /**
     * Add a channel to a bridge.
     *
     * @param params.bridgeId - Bridges id.
     * @param params.channel - Ids of channels to add to bridge.
     * @param [params.role] - Channels role in the bridge.
     * @param [params.absorbDTMF] - Absorb DTMF coming from this channel, preventing it to pass through to the bridge.
     * @param [params.mute] - Mute audio from this channel, preventing it to pass through to the bridge.
     */
    addChannel(
        params: { bridgeId: string; channel: string | string[]; role?: string | undefined; absorbDTMF?: boolean | undefined; mute?: boolean | undefined },
        callback: (err: Error) => void,
    ): void;

    /**
     * Add a channel to a bridge.
     *
     * @param params.bridgeId - Bridges id.
     * @param params.channel - Ids of channels to add to bridge.
     * @param [params.role] - Channels role in the bridge.
     * @param [params.absorbDTMF] - Absorb DTMF coming from this channel, preventing it to pass through to the bridge.
     * @param [params.mute] - Mute audio from this channel, preventing it to pass through to the bridge.
     */
    addChannel(params: {
        bridgeId: string;
        channel: string | string[];
        role?: string | undefined;
        absorbDTMF?: boolean | undefined;
        mute?: boolean | undefined;
    }): Promise<void>;

    /**
     * Remove a channel from a bridge.
     *
     * @param params.bridgeId - Bridges id.
     * @param params.channel - Ids of channels to remove from bridge.
     */
    removeChannel(params: { bridgeId: string; channel: string | string[] }, callback: (err: Error) => void): void;

    /**
     * Remove a channel from a bridge.
     *
     * @param params.bridgeId - Bridges id.
     * @param params.channel - Ids of channels to remove from bridge.
     */
    removeChannel(params: { bridgeId: string; channel: string | string[] }): Promise<void>;

    /**
     * Set a channel as the video source in a multi-party mixing bridge. This operation has no effect on bridges with two or fewer participants.
     *
     * @param params.bridgeId - Bridges id.
     * @param params.channelId - Channels id.
     */
    setVideoSource(params: { bridgeId: string; channelId: string }, callback: (err: Error) => void): void;

    /**
     * Set a channel as the video source in a multi-party mixing bridge. This operation has no effect on bridges with two or fewer participants.
     *
     * @param params.bridgeId - Bridges id.
     * @param params.channelId - Channels id.
     */
    setVideoSource(params: { bridgeId: string; channelId: string }): Promise<void>;

    /**
     * Removes any explicit video source in a multi-party mixing bridge. This operation has no effect on bridges with two or fewer participants. When no explicit video source is set, talk
     * detection will be used to determine the active video stream.
     *
     * @param params.bridgeId - Bridges id.
     */
    clearVideoSource(params: { bridgeId: string }, callback: (err: Error) => void): void;

    /**
     * Removes any explicit video source in a multi-party mixing bridge. This operation has no effect on bridges with two or fewer participants. When no explicit video source is set, talk
     * detection will be used to determine the active video stream.
     *
     * @param params.bridgeId - Bridges id.
     */
    clearVideoSource(params: { bridgeId: string }): Promise<void>;

    /**
     * Play music on hold to a bridge or change the MOH class that is playing.
     *
     * @param params.bridgeId - Bridges id.
     * @param [params.mohClass] - Channels id.
     */
    startMoh(params: { bridgeId: string; mohClass?: string | undefined }, callback: (err: Error) => void): void;

    /**
     * Play music on hold to a bridge or change the MOH class that is playing.
     *
     * @param params.bridgeId - Bridges id.
     * @param [params.mohClass] - Channels id.
     */
    startMoh(params: { bridgeId: string; mohClass?: string | undefined }): Promise<void>;

    /**
     * Stop playing music on hold to a bridge.
     * This will only stop music on hold being played via POST bridges/{bridgeId}/moh.
     *
     * @param params.bridgeId - Bridges id.
     */
    stopMoh(params: { bridgeId: string }, callback: (err: Error) => void): void;

    /**
     * Stop playing music on hold to a bridge.
     * This will only stop music on hold being played via POST bridges/{bridgeId}/moh.
     *
     * @param params.bridgeId - Bridges id.
     */
    stopMoh(params: { bridgeId: string }): Promise<void>;

    /**
     * Start playback of media on a bridge.
     * The media URI may be any of a number of URIs. Currently sound:, recording:, number:, digits:, characters:, and tone: URIs are supported. This operation creates a playback resource
     * that can be used to control the playback of media (pause, rewind, fast forward, etc.).
     *
     * @param params.bridgeId - Bridges id.
     * @param params.media - Media URIs to play.
     * @param [params.lang] - For sounds, selects language for sound.
     * @param [params.offsetms] - Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
     * @param [params.skipms] - Number of milliseconds to skip for forward/reverse operations.
     * @param [params.playbackId] - Playback Id.
     */
    play(
        params: {
            bridgeId: string;
            media: string | string[];
            lang?: string | undefined;
            offsetms?: number | undefined;
            skipms?: number | undefined;
            playbackId?: string | undefined;
        },
        callback: (err: Error, playback: Playback) => void,
    ): void;

    /**
     * Start playback of media on a bridge.
     * The media URI may be any of a number of URIs. Currently sound:, recording:, number:, digits:, characters:, and tone: URIs are supported. This operation creates a playback resource
     * that can be used to control the playback of media (pause, rewind, fast forward, etc.).
     *
     * @param params.bridgeId - Bridges id.
     * @param params.media - Media URIs to play.
     * @param [params.lang] - For sounds, selects language for sound.
     * @param [params.offsetms] - Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
     * @param [params.skipms] - Number of milliseconds to skip for forward/reverse operations.
     * @param [params.playbackId] - Playback Id.
     */
    play(params: {
        bridgeId: string;
        media: string | string[];
        lang?: string | undefined;
        offsetms?: number | undefined;
        skipms?: number | undefined;
        playbackId?: string | undefined;
    }): Promise<Playback>;

    /**
     * Start playback of media on a bridge.
     * The media URI may be any of a number of URIs. Currently sound:, recording:, number:, digits:, characters:, and tone: URIs are supported. This operation creates a playback resource
     * that can be used to control the playback of media (pause, rewind, fast forward, etc.).
     *
     * @param params.bridgeId - Bridges id.
     * @param params.playbackId - Playback ID.
     * @param params.media - Media URIs to play.
     * @param [params.lang] - For sounds, selects language for sound.
     * @param [params.offsetms] - Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
     * @param [params.skipms] - Number of milliseconds to skip for forward/reverse operations.
     */
    playWithId(
        params: {
            bridgeId: string;
            playbackId: string;
            media: string | string[];
            lang?: string | undefined;
            offsetms?: number | undefined;
            skipms?: number | undefined;
        },
        callback: (err: Error, playback: Playback) => void,
    ): void;

    /**
     * Start playback of media on a bridge.
     * The media URI may be any of a number of URIs. Currently sound:, recording:, number:, digits:, characters:, and tone: URIs are supported. This operation creates a playback resource
     * that can be used to control the playback of media (pause, rewind, fast forward, etc.).
     *
     * @param params.bridgeId - Bridges id.
     * @param params.playbackId - Playback ID.
     * @param params.media - Media URIs to play.
     * @param [params.lang] - For sounds, selects language for sound.
     * @param [params.offsetms] - Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
     * @param [params.skipms] - Number of milliseconds to skip for forward/reverse operations.
     */
    playWithId(params: {
        bridgeId: string;
        playbackId: string;
        media: string | string[];
        lang?: string | undefined;
        offsetms?: number | undefined;
        skipms?: number | undefined;
    }): Promise<Playback>;

    /**
     * Start a recording.
     * This records the mixed audio from all channels participating in this bridge.
     *
     * @param params.bridgeId - Bridges id.
     * @param params.name - Recordings filename.
     * @param params.format - Format to encode audio in.
     * @param [params.maxDurationSeconds] - Maximum duration of the recording, in seconds. 0 for no limit.
     * @param [params.maxSilenceSeconds] - Maximum duration of silence, in seconds. 0 for no limit.
     * @param [params.ifExists] - Action to take if a recording with the same name already exists.
     * @param [params.beep] - Play beep when recording begins.
     * @param [params.terminateOn] - DTMF input to terminate recording.
     */
    record(
        params: {
            bridgeId: string;
            name: string;
            format: string;
            maxDurationSeconds?: number | undefined;
            maxSilenceSeconds?: number | undefined;
            ifExists?: string | undefined;
            beep?: boolean | undefined;
            terminateOn?: string | undefined;
        },
        callback: (err: Error, liverecording: LiveRecording) => void,
    ): void;

    /**
     * Start a recording.
     * This records the mixed audio from all channels participating in this bridge.
     *
     * @param params.bridgeId - Bridges id.
     * @param params.name - Recordings filename.
     * @param params.format - Format to encode audio in.
     * @param [params.maxDurationSeconds] - Maximum duration of the recording, in seconds. 0 for no limit.
     * @param [params.maxSilenceSeconds] - Maximum duration of silence, in seconds. 0 for no limit.
     * @param [params.ifExists] - Action to take if a recording with the same name already exists.
     * @param [params.beep] - Play beep when recording begins.
     * @param [params.terminateOn] - DTMF input to terminate recording.
     */
    record(params: {
        bridgeId: string;
        name: string;
        format: string;
        maxDurationSeconds?: number | undefined;
        maxSilenceSeconds?: number | undefined;
        ifExists?: string | undefined;
        beep?: boolean | undefined;
        terminateOn?: string | undefined;
    }): Promise<LiveRecording>;
}
export interface Bridge extends Resource {
    /**
     * Unique identifier for this bridge.
     */
    id: string;

    /**
     * Name of the current bridging technology.
     */
    technology: string;

    /**
     * Type of bridge technology.
     */
    bridge_type: string;

    /**
     * Bridging class.
     */
    bridge_class: string;

    /**
     * Entity that created the bridge.
     */
    creator: string;

    /**
     * Name the creator gave the bridge.
     */
    name: string;

    /**
     * Ids of channels participating in this bridge.
     */
    channels: string | string[];

    /**
     * The video mode the bridge is using. One of none, talker, or single.
     */
    video_mode?: string | undefined;

    /**
     * The ID of the channel that is the source of video in this bridge, if one exists.
     */
    video_source_id?: string | undefined;

    /**
     * Timestamp when bridge was created.
     */
    creationtime: Date;

    /**
     * List all active bridges in Asterisk.
     */
    list(callback: (err: Error, bridges: Bridge[]) => void): void;

    /**
     * List all active bridges in Asterisk.
     */
    list(): Promise<Bridge[]>;

    /**
     * Create a new bridge.
     * This bridge persists until it has been shut down, or Asterisk has been shut down.
     *
     * @param [params.type] - Comma separated list of bridge type attributes (mixing, holding, dtmf_events, proxy_media, video_sfu).
     * @param [params.name] - Name to give to the bridge being created.
     */
    create(params: { type?: string | undefined; name?: string | undefined }, callback: (err: Error, bridge: Bridge) => void): void;

    /**
     * Create a new bridge.
     * This bridge persists until it has been shut down, or Asterisk has been shut down.
     */
    create(callback: (err: Error, bridge: Bridge) => void): void;

    /**
     * Create a new bridge.
     * This bridge persists until it has been shut down, or Asterisk has been shut down.
     *
     * @param [params.type] - Comma separated list of bridge type attributes (mixing, holding, dtmf_events, proxy_media, video_sfu).
     * @param [params.name] - Name to give to the bridge being created.
     */
    create(params?: { type?: string | undefined; name?: string | undefined }): Promise<Bridge>;

    /**
     * Create a new bridge or updates an existing one.
     * This bridge persists until it has been shut down, or Asterisk has been shut down.
     *
     * @param [params.type] - Comma separated list of bridge type attributes (mixing, holding, dtmf_events, proxy_media, video_sfu) to set.
     * @param [params.name] - Set the name of the bridge.
     */
    createWithId(params: { type?: string | undefined; name?: string | undefined }, callback: (err: Error, bridge: Bridge) => void): void;

    /**
     * Create a new bridge or updates an existing one.
     * This bridge persists until it has been shut down, or Asterisk has been shut down.
     */
    createWithId(callback: (err: Error, bridge: Bridge) => void): void;

    /**
     * Create a new bridge or updates an existing one.
     * This bridge persists until it has been shut down, or Asterisk has been shut down.
     *
     * @param [params.type] - Comma separated list of bridge type attributes (mixing, holding, dtmf_events, proxy_media, video_sfu) to set.
     * @param [params.name] - Set the name of the bridge.
     */
    createWithId(params?: { type?: string | undefined; name?: string | undefined }): Promise<Bridge>;

    /**
     * Get bridge details.
     */
    get(callback: (err: Error, bridge: Bridge) => void): void;

    /**
     * Get bridge details.
     */
    get(): Promise<Bridge>;

    /**
     * Shut down a bridge.
     * If any channels are in this bridge, they will be removed and resume whatever they were doing beforehand.
     */
    destroy(callback: (err: Error) => void): void;

    /**
     * Shut down a bridge.
     * If any channels are in this bridge, they will be removed and resume whatever they were doing beforehand.
     */
    destroy(): Promise<void>;

    /**
     * Add a channel to a bridge.
     *
     * @param params.channel - Ids of channels to add to bridge.
     * @param [params.role] - Channels role in the bridge.
     * @param [params.absorbDTMF] - Absorb DTMF coming from this channel, preventing it to pass through to the bridge.
     * @param [params.mute] - Mute audio from this channel, preventing it to pass through to the bridge.
     */
    addChannel(
        params: { channel: string | string[]; role?: string | undefined; absorbDTMF?: boolean | undefined; mute?: boolean | undefined },
        callback: (err: Error) => void,
    ): void;

    /**
     * Add a channel to a bridge.
     *
     * @param params.channel - Ids of channels to add to bridge.
     * @param [params.role] - Channels role in the bridge.
     * @param [params.absorbDTMF] - Absorb DTMF coming from this channel, preventing it to pass through to the bridge.
     * @param [params.mute] - Mute audio from this channel, preventing it to pass through to the bridge.
     */
    addChannel(params: {
        channel: string | string[];
        role?: string | undefined;
        absorbDTMF?: boolean | undefined;
        mute?: boolean | undefined;
    }): Promise<void>;

    /**
     * Remove a channel from a bridge.
     *
     * @param params.channel - Ids of channels to remove from bridge.
     */
    removeChannel(params: { channel: string | string[] }, callback: (err: Error) => void): void;

    /**
     * Remove a channel from a bridge.
     *
     * @param params.channel - Ids of channels to remove from bridge.
     */
    removeChannel(params: { channel: string | string[] }): Promise<void>;

    /**
     * Set a channel as the video source in a multi-party mixing bridge. This operation has no effect on bridges with two or fewer participants.
     *
     * @param params.channelId - Channels id.
     */
    setVideoSource(params: { channelId: string }, callback: (err: Error) => void): void;

    /**
     * Set a channel as the video source in a multi-party mixing bridge. This operation has no effect on bridges with two or fewer participants.
     *
     * @param params.channelId - Channels id.
     */
    setVideoSource(params: { channelId: string }): Promise<void>;

    /**
     * Removes any explicit video source in a multi-party mixing bridge. This operation has no effect on bridges with two or fewer participants. When no explicit video source is set, talk
     * detection will be used to determine the active video stream.
     */
    clearVideoSource(callback: (err: Error) => void): void;

    /**
     * Removes any explicit video source in a multi-party mixing bridge. This operation has no effect on bridges with two or fewer participants. When no explicit video source is set, talk
     * detection will be used to determine the active video stream.
     */
    clearVideoSource(): Promise<void>;

    /**
     * Play music on hold to a bridge or change the MOH class that is playing.
     *
     * @param [params.mohClass] - Channels id.
     */
    startMoh(params: { mohClass?: string | undefined }, callback: (err: Error) => void): void;

    /**
     * Play music on hold to a bridge or change the MOH class that is playing.
     */
    startMoh(callback: (err: Error) => void): void;

    /**
     * Play music on hold to a bridge or change the MOH class that is playing.
     *
     * @param [params.mohClass] - Channels id.
     */
    startMoh(params?: { mohClass?: string | undefined }): Promise<void>;

    /**
     * Stop playing music on hold to a bridge.
     * This will only stop music on hold being played via POST bridges/{bridgeId}/moh.
     */
    stopMoh(callback: (err: Error) => void): void;

    /**
     * Stop playing music on hold to a bridge.
     * This will only stop music on hold being played via POST bridges/{bridgeId}/moh.
     */
    stopMoh(): Promise<void>;

    /**
     * Start playback of media on a bridge.
     * The media URI may be any of a number of URIs. Currently sound:, recording:, number:, digits:, characters:, and tone: URIs are supported. This operation creates a playback resource
     * that can be used to control the playback of media (pause, rewind, fast forward, etc.).
     *
     * @param params.media - Media URIs to play.
     * @param [params.lang] - For sounds, selects language for sound.
     * @param [params.offsetms] - Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
     * @param [params.skipms] - Number of milliseconds to skip for forward/reverse operations.
     * @param [params.playbackId] - Playback Id.
     */
    play(
        params: { media: string | string[]; lang?: string | undefined; offsetms?: number | undefined; skipms?: number | undefined; playbackId?: string | undefined },
        callback: (err: Error, playback: Playback) => void,
    ): void;

    /**
     * Start playback of media on a bridge.
     * The media URI may be any of a number of URIs. Currently sound:, recording:, number:, digits:, characters:, and tone: URIs are supported. This operation creates a playback resource
     * that can be used to control the playback of media (pause, rewind, fast forward, etc.).
     *
     * @param params.media - Media URIs to play.
     * @param [params.lang] - For sounds, selects language for sound.
     * @param [params.offsetms] - Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
     * @param [params.skipms] - Number of milliseconds to skip for forward/reverse operations.
     * @param [params.playbackId] - Playback Id.
     */
    play(params: {
        media: string | string[];
        lang?: string | undefined;
        offsetms?: number | undefined;
        skipms?: number | undefined;
        playbackId?: string | undefined;
    }): Promise<Playback>;

    /**
     * Start playback of media on a bridge.
     * The media URI may be any of a number of URIs. Currently sound:, recording:, number:, digits:, characters:, and tone: URIs are supported. This operation creates a playback resource
     * that can be used to control the playback of media (pause, rewind, fast forward, etc.).
     *
     * @param params.playbackId - Playback ID.
     * @param params.media - Media URIs to play.
     * @param [params.lang] - For sounds, selects language for sound.
     * @param [params.offsetms] - Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
     * @param [params.skipms] - Number of milliseconds to skip for forward/reverse operations.
     */
    playWithId(
        params: { playbackId: string; media: string | string[]; lang?: string | undefined; offsetms?: number | undefined; skipms?: number | undefined },
        callback: (err: Error, playback: Playback) => void,
    ): void;

    /**
     * Start playback of media on a bridge.
     * The media URI may be any of a number of URIs. Currently sound:, recording:, number:, digits:, characters:, and tone: URIs are supported. This operation creates a playback resource
     * that can be used to control the playback of media (pause, rewind, fast forward, etc.).
     *
     * @param params.playbackId - Playback ID.
     * @param params.media - Media URIs to play.
     * @param [params.lang] - For sounds, selects language for sound.
     * @param [params.offsetms] - Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
     * @param [params.skipms] - Number of milliseconds to skip for forward/reverse operations.
     */
    playWithId(params: {
        playbackId: string;
        media: string | string[];
        lang?: string | undefined;
        offsetms?: number | undefined;
        skipms?: number | undefined;
    }): Promise<Playback>;

    /**
     * Start a recording.
     * This records the mixed audio from all channels participating in this bridge.
     *
     * @param params.name - Recordings filename.
     * @param params.format - Format to encode audio in.
     * @param [params.maxDurationSeconds] - Maximum duration of the recording, in seconds. 0 for no limit.
     * @param [params.maxSilenceSeconds] - Maximum duration of silence, in seconds. 0 for no limit.
     * @param [params.ifExists] - Action to take if a recording with the same name already exists.
     * @param [params.beep] - Play beep when recording begins.
     * @param [params.terminateOn] - DTMF input to terminate recording.
     */
    record(
        params: {
            name: string;
            format: string;
            maxDurationSeconds?: number | undefined;
            maxSilenceSeconds?: number | undefined;
            ifExists?: string | undefined;
            beep?: boolean | undefined;
            terminateOn?: string | undefined;
        },
        recording: LiveRecording,
        callback: (err: Error, liverecording: LiveRecording) => void,
    ): void;

    /**
     * Start a recording.
     * This records the mixed audio from all channels participating in this bridge.
     *
     * @param params.name - Recordings filename.
     * @param params.format - Format to encode audio in.
     * @param [params.maxDurationSeconds] - Maximum duration of the recording, in seconds. 0 for no limit.
     * @param [params.maxSilenceSeconds] - Maximum duration of silence, in seconds. 0 for no limit.
     * @param [params.ifExists] - Action to take if a recording with the same name already exists.
     * @param [params.beep] - Play beep when recording begins.
     * @param [params.terminateOn] - DTMF input to terminate recording.
     */
    record(
        params: {
            name: string;
            format: string;
            maxDurationSeconds?: number | undefined;
            maxSilenceSeconds?: number | undefined;
            ifExists?: string | undefined;
            beep?: boolean | undefined;
            terminateOn?: string | undefined;
        },
        recording: LiveRecording,
    ): Promise<LiveRecording>;
}
export interface Channels {
    /**
     * List all active channels in Asterisk.
     */
    list(callback: (err: Error, channels: Channel[]) => void): void;

    /**
     * List all active channels in Asterisk.
     */
    list(): Promise<Channel[]>;

    /**
     * Create a new channel (originate).
     * The new channel is created immediately and a snapshot of it returned. If a Stasis application is provided it will be automatically subscribed to the originated channel for further
     * events and updates.
     *
     * @param params.endpoint - Endpoint to call.
     * @param [params.extension] - The extension to dial after the endpoint answers. Mutually exclusive with app.
     * @param [params.context] - The context to dial after the endpoint answers. If omitted, uses default. Mutually exclusive with app.
     * @param [params.priority] - The priority to dial after the endpoint answers. If omitted, uses 1. Mutually exclusive with app.
     * @param [params.label] - The label to dial after the endpoint answers. Will supersede priority if provided. Mutually exclusive with app.
     * @param [params.app] - The application that is subscribed to the originated channel. When the channel is answered, it will be passed to this Stasis application. Mutually exclusive
     * with context, extension, priority, and label.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application provided by app. Mutually exclusive with context, extension, priority, and label.
     * @param [params.callerId] - CallerID to use when dialing the endpoint or extension.
     * @param [params.timeout] - Timeout (in seconds) before giving up dialing, or -1 for no timeout.
     * @param [params.variables] - The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted
     * as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }.
     * @param [params.channelId] - The unique id to assign the channel on creation.
     * @param [params.otherChannelId] - The unique id to assign the second channel when using local channels.
     * @param [params.originator] - The unique id of the channel which is originating this one.
     * @param [params.formats] - The format name capability list to use if originator is not specified. Ex. "ulaw,slin16". Format names can be found with "core show codecs".
     */
    originate(
        params: {
            endpoint: string;
            extension?: string | undefined;
            context?: string | undefined;
            priority?: number | undefined;
            label?: string | undefined;
            app?: string | undefined;
            appArgs?: string | undefined;
            callerId?: string | undefined;
            timeout?: number | undefined;
            variables?: Containers | undefined;
            channelId?: string | undefined;
            otherChannelId?: string | undefined;
            originator?: string | undefined;
            formats?: string | undefined;
        },
        callback: (err: Error, channel: Channel) => void,
    ): void;

    /**
     * Create a new channel (originate).
     * The new channel is created immediately and a snapshot of it returned. If a Stasis application is provided it will be automatically subscribed to the originated channel for further
     * events and updates.
     *
     * @param params.endpoint - Endpoint to call.
     * @param [params.extension] - The extension to dial after the endpoint answers. Mutually exclusive with app.
     * @param [params.context] - The context to dial after the endpoint answers. If omitted, uses default. Mutually exclusive with app.
     * @param [params.priority] - The priority to dial after the endpoint answers. If omitted, uses 1. Mutually exclusive with app.
     * @param [params.label] - The label to dial after the endpoint answers. Will supersede priority if provided. Mutually exclusive with app.
     * @param [params.app] - The application that is subscribed to the originated channel. When the channel is answered, it will be passed to this Stasis application. Mutually exclusive
     * with context, extension, priority, and label.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application provided by app. Mutually exclusive with context, extension, priority, and label.
     * @param [params.callerId] - CallerID to use when dialing the endpoint or extension.
     * @param [params.timeout] - Timeout (in seconds) before giving up dialing, or -1 for no timeout.
     * @param [params.variables] - The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted
     * as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }.
     * @param [params.channelId] - The unique id to assign the channel on creation.
     * @param [params.otherChannelId] - The unique id to assign the second channel when using local channels.
     * @param [params.originator] - The unique id of the channel which is originating this one.
     * @param [params.formats] - The format name capability list to use if originator is not specified. Ex. "ulaw,slin16". Format names can be found with "core show codecs".
     */
    originate(params: {
        endpoint: string;
        extension?: string | undefined;
        context?: string | undefined;
        priority?: number | undefined;
        label?: string | undefined;
        app?: string | undefined;
        appArgs?: string | undefined;
        callerId?: string | undefined;
        timeout?: number | undefined;
        variables?: Containers | undefined;
        channelId?: string | undefined;
        otherChannelId?: string | undefined;
        originator?: string | undefined;
        formats?: string | undefined;
    }): Promise<Channel>;

    /**
     * Create channel.
     *
     * @param params.endpoint - Endpoint for channel communication.
     * @param params.app - Stasis Application to place channel into.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application provided by app. Mutually exclusive with context, extension, priority, and label.
     * @param [params.channelId] - The unique id to assign the channel on creation.
     * @param [params.otherChannelId] - The unique id to assign the second channel when using local channels.
     * @param [params.originator] - Unique ID of the calling channel.
     * @param [params.formats] - The format name capability list to use if originator is not specified. Ex. "ulaw,slin16". Format names can be found with "core show codecs".
     */
    create(
        params: {
            endpoint: string;
            app: string;
            appArgs?: string | undefined;
            channelId?: string | undefined;
            otherChannelId?: string | undefined;
            originator?: string | undefined;
            formats?: string | undefined;
        },
        callback: (err: Error, channel: Channel) => void,
    ): void;

    /**
     * Create channel.
     *
     * @param params.endpoint - Endpoint for channel communication.
     * @param params.app - Stasis Application to place channel into.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application provided by app. Mutually exclusive with context, extension, priority, and label.
     * @param [params.channelId] - The unique id to assign the channel on creation.
     * @param [params.otherChannelId] - The unique id to assign the second channel when using local channels.
     * @param [params.originator] - Unique ID of the calling channel.
     * @param [params.formats] - The format name capability list to use if originator is not specified. Ex. "ulaw,slin16". Format names can be found with "core show codecs".
     */
    create(params: {
        endpoint: string;
        app: string;
        appArgs?: string | undefined;
        channelId?: string | undefined;
        otherChannelId?: string | undefined;
        originator?: string | undefined;
        formats?: string | undefined;
    }): Promise<Channel>;

    /**
     * Channel details.
     *
     * @param params.channelId - Channels id.
     */
    get(params: { channelId: string }, callback: (err: Error, channel: Channel) => void): void;

    /**
     * Channel details.
     *
     * @param params.channelId - Channels id.
     */
    get(params: { channelId: string }): Promise<Channel>;

    /**
     * Create a new channel (originate with id).
     * The new channel is created immediately and a snapshot of it returned. If a Stasis application is provided it will be automatically subscribed to the originated channel for further
     * events and updates.
     *
     * @param params.channelId - The unique id to assign the channel on creation.
     * @param params.endpoint - Endpoint to call.
     * @param [params.extension] - The extension to dial after the endpoint answers. Mutually exclusive with app.
     * @param [params.context] - The context to dial after the endpoint answers. If omitted, uses default. Mutually exclusive with app.
     * @param [params.priority] - The priority to dial after the endpoint answers. If omitted, uses 1. Mutually exclusive with app.
     * @param [params.label] - The label to dial after the endpoint answers. Will supersede priority if provided. Mutually exclusive with app.
     * @param [params.app] - The application that is subscribed to the originated channel. When the channel is answered, it will be passed to this Stasis application. Mutually exclusive
     * with context, extension, priority, and label.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application provided by app. Mutually exclusive with context, extension, priority, and label.
     * @param [params.callerId] - CallerID to use when dialing the endpoint or extension.
     * @param [params.timeout] - Timeout (in seconds) before giving up dialing, or -1 for no timeout.
     * @param [params.variables] - The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted
     * as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }.
     * @param [params.otherChannelId] - The unique id to assign the second channel when using local channels.
     * @param [params.originator] - The unique id of the channel which is originating this one.
     * @param [params.formats] - The format name capability list to use if originator is not specified. Ex. "ulaw,slin16". Format names can be found with "core show codecs".
     */
    originateWithId(
        params: {
            channelId: string;
            endpoint: string;
            extension?: string | undefined;
            context?: string | undefined;
            priority?: number | undefined;
            label?: string | undefined;
            app?: string | undefined;
            appArgs?: string | undefined;
            callerId?: string | undefined;
            timeout?: number | undefined;
            variables?: Containers | undefined;
            otherChannelId?: string | undefined;
            originator?: string | undefined;
            formats?: string | undefined;
        },
        callback: (err: Error, channel: Channel) => void,
    ): void;

    /**
     * Create a new channel (originate with id).
     * The new channel is created immediately and a snapshot of it returned. If a Stasis application is provided it will be automatically subscribed to the originated channel for further
     * events and updates.
     *
     * @param params.channelId - The unique id to assign the channel on creation.
     * @param params.endpoint - Endpoint to call.
     * @param [params.extension] - The extension to dial after the endpoint answers. Mutually exclusive with app.
     * @param [params.context] - The context to dial after the endpoint answers. If omitted, uses default. Mutually exclusive with app.
     * @param [params.priority] - The priority to dial after the endpoint answers. If omitted, uses 1. Mutually exclusive with app.
     * @param [params.label] - The label to dial after the endpoint answers. Will supersede priority if provided. Mutually exclusive with app.
     * @param [params.app] - The application that is subscribed to the originated channel. When the channel is answered, it will be passed to this Stasis application. Mutually exclusive
     * with context, extension, priority, and label.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application provided by app. Mutually exclusive with context, extension, priority, and label.
     * @param [params.callerId] - CallerID to use when dialing the endpoint or extension.
     * @param [params.timeout] - Timeout (in seconds) before giving up dialing, or -1 for no timeout.
     * @param [params.variables] - The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted
     * as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }.
     * @param [params.otherChannelId] - The unique id to assign the second channel when using local channels.
     * @param [params.originator] - The unique id of the channel which is originating this one.
     * @param [params.formats] - The format name capability list to use if originator is not specified. Ex. "ulaw,slin16". Format names can be found with "core show codecs".
     */
    originateWithId(params: {
        channelId: string;
        endpoint: string;
        extension?: string | undefined;
        context?: string | undefined;
        priority?: number | undefined;
        label?: string | undefined;
        app?: string | undefined;
        appArgs?: string | undefined;
        callerId?: string | undefined;
        timeout?: number | undefined;
        variables?: Containers | undefined;
        otherChannelId?: string | undefined;
        originator?: string | undefined;
        formats?: string | undefined;
    }): Promise<Channel>;

    /**
     * Delete (i.e. hangup) a channel.
     *
     * @param params.channelId - Channels id.
     * @param [params.reason] - Reason for hanging up the channel.
     */
    hangup(params: { channelId: string; reason?: string | undefined }, callback: (err: Error) => void): void;

    /**
     * Delete (i.e. hangup) a channel.
     *
     * @param params.channelId - Channels id.
     * @param [params.reason] - Reason for hanging up the channel.
     */
    hangup(params: { channelId: string; reason?: string | undefined }): Promise<void>;

    /**
     * Exit application; continue execution in the dialplan.
     *
     * @param params.channelId - Channels id.
     * @param [params.context] - The context to continue to.
     * @param [params.extension] - The extension to continue to.
     * @param [params.priority] - The priority to continue to.
     * @param [params.label] - The label to continue to - will supersede priority if both are provided.
     */
    continueInDialplan(
        params: { channelId: string; context?: string | undefined; extension?: string | undefined; priority?: number | undefined; label?: string | undefined },
        callback: (err: Error) => void,
    ): void;

    /**
     * Exit application; continue execution in the dialplan.
     *
     * @param params.channelId - Channels id.
     * @param [params.context] - The context to continue to.
     * @param [params.extension] - The extension to continue to.
     * @param [params.priority] - The priority to continue to.
     * @param [params.label] - The label to continue to - will supersede priority if both are provided.
     */
    continueInDialplan(params: {
        channelId: string;
        context?: string | undefined;
        extension?: string | undefined;
        priority?: number | undefined;
        label?: string | undefined;
    }): Promise<void>;

    /**
     * Move the channel from one Stasis application to another.
     *
     * @param params.channelId - Channels id.
     * @param params.app - The channel will be passed to this Stasis application.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application provided by app.
     */
    move(params: { channelId: string; app: string; appArgs?: string | undefined }, callback: (err: Error) => void): void;

    /**
     * Move the channel from one Stasis application to another.
     *
     * @param params.channelId - Channels id.
     * @param params.app - The channel will be passed to this Stasis application.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application provided by app.
     */
    move(params: { channelId: string; app: string; appArgs?: string | undefined }): Promise<void>;

    /**
     * Redirect the channel to a different location.
     *
     * @param params.channelId - Channels id.
     * @param params.endpoint - The endpoint to redirect the channel to.
     */
    redirect(params: { channelId: string; endpoint: string }, callback: (err: Error) => void): void;

    /**
     * Redirect the channel to a different location.
     *
     * @param params.channelId - Channels id.
     * @param params.endpoint - The endpoint to redirect the channel to.
     */
    redirect(params: { channelId: string; endpoint: string }): Promise<void>;

    /**
     * Answer a channel.
     *
     * @param params.channelId - Channels id.
     */
    answer(params: { channelId: string }, callback: (err: Error) => void): void;

    /**
     * Answer a channel.
     *
     * @param params.channelId - Channels id.
     */
    answer(params: { channelId: string }): Promise<void>;

    /**
     * Indicate ringing to a channel.
     *
     * @param params.channelId - Channels id.
     */
    ring(params: { channelId: string }, callback: (err: Error) => void): void;

    /**
     * Indicate ringing to a channel.
     *
     * @param params.channelId - Channels id.
     */
    ring(params: { channelId: string }): Promise<void>;

    /**
     * Stop ringing indication on a channel if locally generated.
     *
     * @param params.channelId - Channels id.
     */
    ringStop(params: { channelId: string }, callback: (err: Error) => void): void;

    /**
     * Stop ringing indication on a channel if locally generated.
     *
     * @param params.channelId - Channels id.
     */
    ringStop(params: { channelId: string }): Promise<void>;

    /**
     * Send provided DTMF to a given channel.
     *
     * @param params.channelId - Channels id.
     * @param [params.dtmf] - DTMF To send.
     * @param [params.before] - Amount of time to wait before DTMF digits (specified in milliseconds) start.
     * @param [params.between] - Amount of time in between DTMF digits (specified in milliseconds).
     * @param [params.duration] - Length of each DTMF digit (specified in milliseconds).
     * @param [params.after] - Amount of time to wait after DTMF digits (specified in milliseconds) end.
     */
    sendDTMF(
        params: {
            channelId: string;
            dtmf?: string | undefined;
            before?: number | undefined;
            between?: number | undefined;
            duration?: number | undefined;
            after?: number | undefined;
        },
        callback: (err: Error) => void,
    ): void;

    /**
     * Send provided DTMF to a given channel.
     *
     * @param params.channelId - Channels id.
     * @param [params.dtmf] - DTMF To send.
     * @param [params.before] - Amount of time to wait before DTMF digits (specified in milliseconds) start.
     * @param [params.between] - Amount of time in between DTMF digits (specified in milliseconds).
     * @param [params.duration] - Length of each DTMF digit (specified in milliseconds).
     * @param [params.after] - Amount of time to wait after DTMF digits (specified in milliseconds) end.
     */
    sendDTMF(params: {
        channelId: string;
        dtmf?: string | undefined;
        before?: number | undefined;
        between?: number | undefined;
        duration?: number | undefined;
        after?: number | undefined;
    }): Promise<void>;

    /**
     * Mute a channel.
     *
     * @param params.channelId - Channels id.
     * @param [params.direction] - Direction in which to mute audio.
     */
    mute(params: { channelId: string; direction?: string | undefined }, callback: (err: Error) => void): void;

    /**
     * Mute a channel.
     *
     * @param params.channelId - Channels id.
     * @param [params.direction] - Direction in which to mute audio.
     */
    mute(params: { channelId: string; direction?: string | undefined }): Promise<void>;

    /**
     * Unmute a channel.
     *
     * @param params.channelId - Channels id.
     * @param [params.direction] - Direction in which to unmute audio.
     */
    unmute(params: { channelId: string; direction?: string | undefined }, callback: (err: Error) => void): void;

    /**
     * Unmute a channel.
     *
     * @param params.channelId - Channels id.
     * @param [params.direction] - Direction in which to unmute audio.
     */
    unmute(params: { channelId: string; direction?: string | undefined }): Promise<void>;

    /**
     * Hold a channel.
     *
     * @param params.channelId - Channels id.
     */
    hold(params: { channelId: string }, callback: (err: Error) => void): void;

    /**
     * Hold a channel.
     *
     * @param params.channelId - Channels id.
     */
    hold(params: { channelId: string }): Promise<void>;

    /**
     * Remove a channel from hold.
     *
     * @param params.channelId - Channels id.
     */
    unhold(params: { channelId: string }, callback: (err: Error) => void): void;

    /**
     * Remove a channel from hold.
     *
     * @param params.channelId - Channels id.
     */
    unhold(params: { channelId: string }): Promise<void>;

    /**
     * Play music on hold to a channel.
     * Using media operations such as /play on a channel playing MOH in this manner will suspend MOH without resuming automatically. If continuing music on hold is desired, the stasis application
     * must reinitiate music on hold.
     *
     * @param params.channelId - Channels id.
     * @param [params.mohClass] - Music on hold class to use.
     */
    startMoh(params: { channelId: string; mohClass?: string | undefined }, callback: (err: Error) => void): void;

    /**
     * Play music on hold to a channel.
     * Using media operations such as /play on a channel playing MOH in this manner will suspend MOH without resuming automatically. If continuing music on hold is desired, the stasis application
     * must reinitiate music on hold.
     *
     * @param params.channelId - Channels id.
     * @param [params.mohClass] - Music on hold class to use.
     */
    startMoh(params: { channelId: string; mohClass?: string | undefined }): Promise<void>;

    /**
     * Stop playing music on hold to a channel.
     *
     * @param params.channelId - Channels id.
     */
    stopMoh(params: { channelId: string }, callback: (err: Error) => void): void;

    /**
     * Stop playing music on hold to a channel.
     *
     * @param params.channelId - Channels id.
     */
    stopMoh(params: { channelId: string }): Promise<void>;

    /**
     * Play silence to a channel.
     * Using media operations such as /play on a channel playing silence in this manner will suspend silence without resuming automatically.
     *
     * @param params.channelId - Channels id.
     */
    startSilence(params: { channelId: string }, callback: (err: Error) => void): void;

    /**
     * Play silence to a channel.
     * Using media operations such as /play on a channel playing silence in this manner will suspend silence without resuming automatically.
     *
     * @param params.channelId - Channels id.
     */
    startSilence(params: { channelId: string }): Promise<void>;

    /**
     * Stop playing silence to a channel.
     *
     * @param params.channelId - Channels id.
     */
    stopSilence(params: { channelId: string }, callback: (err: Error) => void): void;

    /**
     * Stop playing silence to a channel.
     *
     * @param params.channelId - Channels id.
     */
    stopSilence(params: { channelId: string }): Promise<void>;

    /**
     * Start playback of media.
     * The media URI may be any of a number of URIs. Currently sound:, recording:, number:, digits:, characters:, and tone: URIs are supported. This operation creates a playback resource
     * that can be used to control the playback of media (pause, rewind, fast forward, etc.).
     *
     * @param params.channelId - Channels id.
     * @param params.media - Media URIs to play.
     * @param [params.lang] - For sounds, selects language for sound.
     * @param [params.offsetms] - Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
     * @param [params.skipms] - Number of milliseconds to skip for forward/reverse operations.
     * @param [params.playbackId] - Playback ID.
     */
    play(
        params: {
            channelId: string;
            media: string | string[];
            lang?: string | undefined;
            offsetms?: number | undefined;
            skipms?: number | undefined;
            playbackId?: string | undefined;
        },
        callback: (err: Error, playback: Playback) => void,
    ): void;

    /**
     * Start playback of media.
     * The media URI may be any of a number of URIs. Currently sound:, recording:, number:, digits:, characters:, and tone: URIs are supported. This operation creates a playback resource
     * that can be used to control the playback of media (pause, rewind, fast forward, etc.).
     *
     * @param params.channelId - Channels id.
     * @param params.media - Media URIs to play.
     * @param [params.lang] - For sounds, selects language for sound.
     * @param [params.offsetms] - Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
     * @param [params.skipms] - Number of milliseconds to skip for forward/reverse operations.
     * @param [params.playbackId] - Playback ID.
     */
    play(params: {
        channelId: string;
        media: string | string[];
        lang?: string | undefined;
        offsetms?: number | undefined;
        skipms?: number | undefined;
        playbackId?: string | undefined;
    }): Promise<Playback>;

    /**
     * Start playback of media and specify the playbackId.
     * The media URI may be any of a number of URIs. Currently sound:, recording:, number:, digits:, characters:, and tone: URIs are supported. This operation creates a playback resource
     * that can be used to control the playback of media (pause, rewind, fast forward, etc.).
     *
     * @param params.channelId - Channels id.
     * @param params.playbackId - Playback ID.
     * @param params.media - Media URIs to play.
     * @param [params.lang] - For sounds, selects language for sound.
     * @param [params.offsetms] - Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
     * @param [params.skipms] - Number of milliseconds to skip for forward/reverse operations.
     */
    playWithId(
        params: {
            channelId: string;
            playbackId: string;
            media: string | string[];
            lang?: string | undefined;
            offsetms?: number | undefined;
            skipms?: number | undefined;
        },
        callback: (err: Error, playback: Playback) => void,
    ): void;

    /**
     * Start playback of media and specify the playbackId.
     * The media URI may be any of a number of URIs. Currently sound:, recording:, number:, digits:, characters:, and tone: URIs are supported. This operation creates a playback resource
     * that can be used to control the playback of media (pause, rewind, fast forward, etc.).
     *
     * @param params.channelId - Channels id.
     * @param params.playbackId - Playback ID.
     * @param params.media - Media URIs to play.
     * @param [params.lang] - For sounds, selects language for sound.
     * @param [params.offsetms] - Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
     * @param [params.skipms] - Number of milliseconds to skip for forward/reverse operations.
     */
    playWithId(params: {
        channelId: string;
        playbackId: string;
        media: string | string[];
        lang?: string | undefined;
        offsetms?: number | undefined;
        skipms?: number | undefined;
    }): Promise<Playback>;

    /**
     * Start a recording.
     * Record audio from a channel. Note that this will not capture audio sent to the channel. The bridge itself has a record feature if thats what you want.
     *
     * @param params.channelId - Channels id.
     * @param params.name - Recordings filename.
     * @param params.format - Format to encode audio in.
     * @param [params.maxDurationSeconds] - Maximum duration of the recording, in seconds. 0 for no limit.
     * @param [params.maxSilenceSeconds] - Maximum duration of silence, in seconds. 0 for no limit.
     * @param [params.ifExists] - Action to take if a recording with the same name already exists.
     * @param [params.beep] - Play beep when recording begins.
     * @param [params.terminateOn] - DTMF input to terminate recording.
     */
    record(
        params: {
            channelId: string;
            name: string;
            format: string;
            maxDurationSeconds?: number | undefined;
            maxSilenceSeconds?: number | undefined;
            ifExists?: string | undefined;
            beep?: boolean | undefined;
            terminateOn?: string | undefined;
        },
        callback: (err: Error, liverecording: LiveRecording) => void,
    ): void;

    /**
     * Start a recording.
     * Record audio from a channel. Note that this will not capture audio sent to the channel. The bridge itself has a record feature if thats what you want.
     *
     * @param params.channelId - Channels id.
     * @param params.name - Recordings filename.
     * @param params.format - Format to encode audio in.
     * @param [params.maxDurationSeconds] - Maximum duration of the recording, in seconds. 0 for no limit.
     * @param [params.maxSilenceSeconds] - Maximum duration of silence, in seconds. 0 for no limit.
     * @param [params.ifExists] - Action to take if a recording with the same name already exists.
     * @param [params.beep] - Play beep when recording begins.
     * @param [params.terminateOn] - DTMF input to terminate recording.
     */
    record(params: {
        channelId: string;
        name: string;
        format: string;
        maxDurationSeconds?: number | undefined;
        maxSilenceSeconds?: number | undefined;
        ifExists?: string | undefined;
        beep?: boolean | undefined;
        terminateOn?: string | undefined;
    }): Promise<LiveRecording>;

    /**
     * Get the value of a channel variable or function.
     *
     * @param params.channelId - Channels id.
     * @param params.variable - The channel variable or function to get.
     */
    getChannelVar(
        params: { channelId: string; variable: string },
        callback: (err: Error, variable: Variable) => void,
    ): void;

    /**
     * Get the value of a channel variable or function.
     *
     * @param params.channelId - Channels id.
     * @param params.variable - The channel variable or function to get.
     */
    getChannelVar(params: { channelId: string; variable: string }): Promise<Variable>;

    /**
     * Set the value of a channel variable or function.
     *
     * @param params.channelId - Channels id.
     * @param params.variable - The channel variable or function to set.
     * @param [params.value] - The value to set the variable to.
     */
    setChannelVar(
        params: { channelId: string; variable: string; value?: string | undefined },
        callback: (err: Error) => void,
    ): void;

    /**
     * Set the value of a channel variable or function.
     *
     * @param params.channelId - Channels id.
     * @param params.variable - The channel variable or function to set.
     * @param [params.value] - The value to set the variable to.
     */
    setChannelVar(params: { channelId: string; variable: string; value?: string | undefined }): Promise<void>;

    /**
     * Start snooping.
     * Snoop (spy/whisper) on a specific channel.
     *
     * @param params.channelId - Channels id.
     * @param [params.spy] - Direction of audio to spy on.
     * @param [params.whisper] - Direction of audio to whisper into.
     * @param params.app - Application the snooping channel is placed into.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application.
     * @param [params.snoopId] - Unique ID to assign to snooping channel.
     */
    snoopChannel(
        params: { channelId: string; spy?: string | undefined; whisper?: string | undefined; app: string; appArgs?: string | undefined; snoopId?: string | undefined },
        callback: (err: Error, channel: Channel) => void,
    ): void;

    /**
     * Start snooping.
     * Snoop (spy/whisper) on a specific channel.
     *
     * @param params.channelId - Channels id.
     * @param [params.spy] - Direction of audio to spy on.
     * @param [params.whisper] - Direction of audio to whisper into.
     * @param params.app - Application the snooping channel is placed into.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application.
     * @param [params.snoopId] - Unique ID to assign to snooping channel.
     */
    snoopChannel(params: {
        channelId: string;
        spy?: string | undefined;
        whisper?: string | undefined;
        app: string;
        appArgs?: string | undefined;
        snoopId?: string | undefined;
    }): Promise<Channel>;

    /**
     * Start snooping.
     * Snoop (spy/whisper) on a specific channel.
     *
     * @param params.channelId - Channels id.
     * @param params.snoopId - Unique ID to assign to snooping channel.
     * @param [params.spy] - Direction of audio to spy on.
     * @param [params.whisper] - Direction of audio to whisper into.
     * @param params.app - Application the snooping channel is placed into.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application.
     */
    snoopChannelWithId(
        params: { channelId: string; snoopId: string; spy?: string | undefined; whisper?: string | undefined; app: string; appArgs?: string | undefined },
        callback: (err: Error, channel: Channel) => void,
    ): void;

    /**
     * Start snooping.
     * Snoop (spy/whisper) on a specific channel.
     *
     * @param params.channelId - Channels id.
     * @param params.snoopId - Unique ID to assign to snooping channel.
     * @param [params.spy] - Direction of audio to spy on.
     * @param [params.whisper] - Direction of audio to whisper into.
     * @param params.app - Application the snooping channel is placed into.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application.
     */
    snoopChannelWithId(params: {
        channelId: string;
        snoopId: string;
        spy?: string | undefined;
        whisper?: string | undefined;
        app: string;
        appArgs?: string | undefined;
    }): Promise<Channel>;

    /**
     * Dial a created channel.
     *
     * @param params.channelId - Channels id.
     * @param [params.caller] - Channel ID of caller.
     * @param [params.timeout] - Dial timeout.
     */
    dial(params: { channelId: string; caller?: string | undefined; timeout?: number | undefined }, callback: (err: Error) => void): void;

    /**
     * Dial a created channel.
     *
     * @param params.channelId - Channels id.
     * @param [params.caller] - Channel ID of caller.
     * @param [params.timeout] - Dial timeout.
     */
    dial(params: { channelId: string; caller?: string | undefined; timeout?: number | undefined }): Promise<void>;

    /**
     * RTP stats on a channel.
     *
     * @param params.channelId - Channels id.
     */
    rtpstatistics(params: { channelId: string }, callback: (err: Error, rtpstat: RTPstat) => void): void;

    /**
     * RTP stats on a channel.
     *
     * @param params.channelId - Channels id.
     */
    rtpstatistics(params: { channelId: string }): Promise<RTPstat>;

    /**
     * Start an External Media session.
     * Create a channel to an External Media source/sink.
     *
     * @param [params.channelId] - The unique id to assign the channel on creation.
     * @param params.app - Stasis Application to place channel into.
     * @param [params.variables] - The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted
     * as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }.
     * @param params.external_host - Hostname/ip:port of external host.
     * @param [params.encapsulation] - Payload encapsulation protocol.
     * @param [params.transport] - Transport protocol.
     * @param [params.connection_type] - Connection type (client/server).
     * @param params.format - Format to encode audio in.
     * @param [params.direction] - External media direction.
     */
    externalMedia(
        params: {
            channelId?: string | undefined;
            app: string;
            variables?: Containers | undefined;
            external_host: string;
            encapsulation?: string | undefined;
            transport?: string | undefined;
            connection_type?: string | undefined;
            format: string;
            direction?: string | undefined;
        },
        callback: (err: Error, channel: Channel) => void,
    ): void;

    /**
     * Start an External Media session.
     * Create a channel to an External Media source/sink.
     *
     * @param [params.channelId] - The unique id to assign the channel on creation.
     * @param params.app - Stasis Application to place channel into.
     * @param [params.variables] - The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted
     * as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }.
     * @param params.external_host - Hostname/ip:port of external host.
     * @param [params.encapsulation] - Payload encapsulation protocol.
     * @param [params.transport] - Transport protocol.
     * @param [params.connection_type] - Connection type (client/server).
     * @param params.format - Format to encode audio in.
     * @param [params.direction] - External media direction.
     */
    externalMedia(params: {
        channelId?: string | undefined;
        app: string;
        variables?: Containers | undefined;
        external_host: string;
        encapsulation?: string | undefined;
        transport?: string | undefined;
        connection_type?: string | undefined;
        format: string;
        direction?: string | undefined;
    }): Promise<Channel>;
}
export interface DialplanCEP {
    /**
     * Context in the dialplan.
     */
    context: string;

    /**
     * Extension in the dialplan.
     */
    exten: string;

    /**
     * Priority in the dialplan.
     */
    priority: number;

    /**
     * Name of current dialplan application.
     */
    app_name: string;

    /**
     * Parameter of current dialplan application.
     */
    app_data: string;
}
export interface CallerID {
    /**
     * Name.
     */
    name: string;

    /**
     * Number.
     */
    number: string;
}
export interface RTPstat {
    /**
     * Number of packets transmitted.
     */
    txcount: number;

    /**
     * Number of packets received.
     */
    rxcount: number;

    /**
     * Jitter on transmitted packets.
     */
    txjitter?: number | undefined;

    /**
     * Jitter on received packets.
     */
    rxjitter?: number | undefined;

    /**
     * Maximum jitter on remote side.
     */
    remote_maxjitter?: number | undefined;

    /**
     * Minimum jitter on remote side.
     */
    remote_minjitter?: number | undefined;

    /**
     * Average jitter on remote side.
     */
    remote_normdevjitter?: number | undefined;

    /**
     * Standard deviation jitter on remote side.
     */
    remote_stdevjitter?: number | undefined;

    /**
     * Maximum jitter on local side.
     */
    local_maxjitter?: number | undefined;

    /**
     * Minimum jitter on local side.
     */
    local_minjitter?: number | undefined;

    /**
     * Average jitter on local side.
     */
    local_normdevjitter?: number | undefined;

    /**
     * Standard deviation jitter on local side.
     */
    local_stdevjitter?: number | undefined;

    /**
     * Number of transmitted packets lost.
     */
    txploss: number;

    /**
     * Number of received packets lost.
     */
    rxploss: number;

    /**
     * Maximum number of packets lost on remote side.
     */
    remote_maxrxploss?: number | undefined;

    /**
     * Minimum number of packets lost on remote side.
     */
    remote_minrxploss?: number | undefined;

    /**
     * Average number of packets lost on remote side.
     */
    remote_normdevrxploss?: number | undefined;

    /**
     * Standard deviation packets lost on remote side.
     */
    remote_stdevrxploss?: number | undefined;

    /**
     * Maximum number of packets lost on local side.
     */
    local_maxrxploss?: number | undefined;

    /**
     * Minimum number of packets lost on local side.
     */
    local_minrxploss?: number | undefined;

    /**
     * Average number of packets lost on local side.
     */
    local_normdevrxploss?: number | undefined;

    /**
     * Standard deviation packets lost on local side.
     */
    local_stdevrxploss?: number | undefined;

    /**
     * Total round trip time.
     */
    rtt?: number | undefined;

    /**
     * Maximum round trip time.
     */
    maxrtt?: number | undefined;

    /**
     * Minimum round trip time.
     */
    minrtt?: number | undefined;

    /**
     * Average round trip time.
     */
    normdevrtt?: number | undefined;

    /**
     * Standard deviation round trip time.
     */
    stdevrtt?: number | undefined;

    /**
     * Our SSRC.
     */
    local_ssrc: number;

    /**
     * Their SSRC.
     */
    remote_ssrc: number;

    /**
     * Number of octets transmitted.
     */
    txoctetcount: number;

    /**
     * Number of octets received.
     */
    rxoctetcount: number;

    /**
     * The Asterisk channels unique ID that owns this instance.
     */
    channel_uniqueid: string;
}
export interface Channel extends Resource {
    /**
     * Unique identifier of the channel. This is the same as the Uniqueid field in AMI.
     */
    id: string;

    /**
     * Name of the channel (i.e. SIP/foo-0000a7e3).
     */
    name: string;

    /**
     * State.
     */
    state: string;

    /**
     * Caller.
     */
    caller: CallerID;

    /**
     * Connected.
     */
    connected: CallerID;

    /**
     * Accountcode.
     */
    accountcode: string;

    /**
     * Current location in the dialplan.
     */
    dialplan: DialplanCEP;

    /**
     * Timestamp when channel was created.
     */
    creationtime: Date;

    /**
     * The default spoken language.
     */
    language: string;

    /**
     * Channel variables.
     */
    channelvars?: IndexableObject | undefined;

    /**
     * List all active channels in Asterisk.
     */
    list(callback: (err: Error, channels: Channel[]) => void): void;

    /**
     * List all active channels in Asterisk.
     */
    list(): Promise<Channel[]>;

    /**
     * Create a new channel (originate).
     * The new channel is created immediately and a snapshot of it returned. If a Stasis application is provided it will be automatically subscribed to the originated channel for further
     * events and updates.
     *
     * @param params.endpoint - Endpoint to call.
     * @param [params.extension] - The extension to dial after the endpoint answers. Mutually exclusive with app.
     * @param [params.context] - The context to dial after the endpoint answers. If omitted, uses default. Mutually exclusive with app.
     * @param [params.priority] - The priority to dial after the endpoint answers. If omitted, uses 1. Mutually exclusive with app.
     * @param [params.label] - The label to dial after the endpoint answers. Will supersede priority if provided. Mutually exclusive with app.
     * @param [params.app] - The application that is subscribed to the originated channel. When the channel is answered, it will be passed to this Stasis application. Mutually exclusive
     * with context, extension, priority, and label.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application provided by app. Mutually exclusive with context, extension, priority, and label.
     * @param [params.callerId] - CallerID to use when dialing the endpoint or extension.
     * @param [params.timeout] - Timeout (in seconds) before giving up dialing, or -1 for no timeout.
     * @param [params.variables] - The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted
     * as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }.
     * @param [params.otherChannelId] - The unique id to assign the second channel when using local channels.
     * @param [params.originator] - The unique id of the channel which is originating this one.
     * @param [params.formats] - The format name capability list to use if originator is not specified. Ex. "ulaw,slin16". Format names can be found with "core show codecs".
     */
    originate(
        params: {
            endpoint: string;
            extension?: string | undefined;
            context?: string | undefined;
            priority?: number | undefined;
            label?: string | undefined;
            app?: string | undefined;
            appArgs?: string | undefined;
            callerId?: string | undefined;
            timeout?: number | undefined;
            variables?: Containers | undefined;
            otherChannelId?: string | undefined;
            originator?: string | undefined;
            formats?: string | undefined;
        },
        callback: (err: Error, channel: Channel) => void,
    ): void;

    /**
     * Create a new channel (originate).
     * The new channel is created immediately and a snapshot of it returned. If a Stasis application is provided it will be automatically subscribed to the originated channel for further
     * events and updates.
     *
     * @param params.endpoint - Endpoint to call.
     * @param [params.extension] - The extension to dial after the endpoint answers. Mutually exclusive with app.
     * @param [params.context] - The context to dial after the endpoint answers. If omitted, uses default. Mutually exclusive with app.
     * @param [params.priority] - The priority to dial after the endpoint answers. If omitted, uses 1. Mutually exclusive with app.
     * @param [params.label] - The label to dial after the endpoint answers. Will supersede priority if provided. Mutually exclusive with app.
     * @param [params.app] - The application that is subscribed to the originated channel. When the channel is answered, it will be passed to this Stasis application. Mutually exclusive
     * with context, extension, priority, and label.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application provided by app. Mutually exclusive with context, extension, priority, and label.
     * @param [params.callerId] - CallerID to use when dialing the endpoint or extension.
     * @param [params.timeout] - Timeout (in seconds) before giving up dialing, or -1 for no timeout.
     * @param [params.variables] - The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted
     * as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }.
     * @param [params.otherChannelId] - The unique id to assign the second channel when using local channels.
     * @param [params.originator] - The unique id of the channel which is originating this one.
     * @param [params.formats] - The format name capability list to use if originator is not specified. Ex. "ulaw,slin16". Format names can be found with "core show codecs".
     */
    originate(params: {
        endpoint: string;
        extension?: string | undefined;
        context?: string | undefined;
        priority?: number | undefined;
        label?: string | undefined;
        app?: string | undefined;
        appArgs?: string | undefined;
        callerId?: string | undefined;
        timeout?: number | undefined;
        variables?: Containers | undefined;
        otherChannelId?: string | undefined;
        originator?: string | undefined;
        formats?: string | undefined;
    }): Promise<Channel>;

    /**
     * Create channel.
     *
     * @param params.endpoint - Endpoint for channel communication.
     * @param params.app - Stasis Application to place channel into.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application provided by app. Mutually exclusive with context, extension, priority, and label.
     * @param [params.otherChannelId] - The unique id to assign the second channel when using local channels.
     * @param [params.originator] - Unique ID of the calling channel.
     * @param [params.formats] - The format name capability list to use if originator is not specified. Ex. "ulaw,slin16". Format names can be found with "core show codecs".
     */
    create(
        params: {
            endpoint: string;
            app: string;
            appArgs?: string | undefined;
            otherChannelId?: string | undefined;
            originator?: string | undefined;
            formats?: string | undefined;
        },
        callback: (err: Error, channel: Channel) => void,
    ): void;

    /**
     * Create channel.
     *
     * @param params.endpoint - Endpoint for channel communication.
     * @param params.app - Stasis Application to place channel into.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application provided by app. Mutually exclusive with context, extension, priority, and label.
     * @param [params.otherChannelId] - The unique id to assign the second channel when using local channels.
     * @param [params.originator] - Unique ID of the calling channel.
     * @param [params.formats] - The format name capability list to use if originator is not specified. Ex. "ulaw,slin16". Format names can be found with "core show codecs".
     */
    create(params: {
        endpoint: string;
        app: string;
        appArgs?: string | undefined;
        otherChannelId?: string | undefined;
        originator?: string | undefined;
        formats?: string | undefined;
    }): Promise<Channel>;

    /**
     * Channel details.
     */
    get(callback: (err: Error, channel: Channel) => void): void;

    /**
     * Channel details.
     */
    get(): Promise<Channel>;

    /**
     * Create a new channel (originate with id).
     * The new channel is created immediately and a snapshot of it returned. If a Stasis application is provided it will be automatically subscribed to the originated channel for further
     * events and updates.
     *
     * @param params.endpoint - Endpoint to call.
     * @param [params.extension] - The extension to dial after the endpoint answers. Mutually exclusive with app.
     * @param [params.context] - The context to dial after the endpoint answers. If omitted, uses default. Mutually exclusive with app.
     * @param [params.priority] - The priority to dial after the endpoint answers. If omitted, uses 1. Mutually exclusive with app.
     * @param [params.label] - The label to dial after the endpoint answers. Will supersede priority if provided. Mutually exclusive with app.
     * @param [params.app] - The application that is subscribed to the originated channel. When the channel is answered, it will be passed to this Stasis application. Mutually exclusive
     * with context, extension, priority, and label.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application provided by app. Mutually exclusive with context, extension, priority, and label.
     * @param [params.callerId] - CallerID to use when dialing the endpoint or extension.
     * @param [params.timeout] - Timeout (in seconds) before giving up dialing, or -1 for no timeout.
     * @param [params.variables] - The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted
     * as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }.
     * @param [params.otherChannelId] - The unique id to assign the second channel when using local channels.
     * @param [params.originator] - The unique id of the channel which is originating this one.
     * @param [params.formats] - The format name capability list to use if originator is not specified. Ex. "ulaw,slin16". Format names can be found with "core show codecs".
     */
    originateWithId(
        params: {
            endpoint: string;
            extension?: string | undefined;
            context?: string | undefined;
            priority?: number | undefined;
            label?: string | undefined;
            app?: string | undefined;
            appArgs?: string | undefined;
            callerId?: string | undefined;
            timeout?: number | undefined;
            variables?: Containers | undefined;
            otherChannelId?: string | undefined;
            originator?: string | undefined;
            formats?: string | undefined;
        },
        callback: (err: Error, channel: Channel) => void,
    ): void;

    /**
     * Create a new channel (originate with id).
     * The new channel is created immediately and a snapshot of it returned. If a Stasis application is provided it will be automatically subscribed to the originated channel for further
     * events and updates.
     *
     * @param params.endpoint - Endpoint to call.
     * @param [params.extension] - The extension to dial after the endpoint answers. Mutually exclusive with app.
     * @param [params.context] - The context to dial after the endpoint answers. If omitted, uses default. Mutually exclusive with app.
     * @param [params.priority] - The priority to dial after the endpoint answers. If omitted, uses 1. Mutually exclusive with app.
     * @param [params.label] - The label to dial after the endpoint answers. Will supersede priority if provided. Mutually exclusive with app.
     * @param [params.app] - The application that is subscribed to the originated channel. When the channel is answered, it will be passed to this Stasis application. Mutually exclusive
     * with context, extension, priority, and label.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application provided by app. Mutually exclusive with context, extension, priority, and label.
     * @param [params.callerId] - CallerID to use when dialing the endpoint or extension.
     * @param [params.timeout] - Timeout (in seconds) before giving up dialing, or -1 for no timeout.
     * @param [params.variables] - The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted
     * as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }.
     * @param [params.otherChannelId] - The unique id to assign the second channel when using local channels.
     * @param [params.originator] - The unique id of the channel which is originating this one.
     * @param [params.formats] - The format name capability list to use if originator is not specified. Ex. "ulaw,slin16". Format names can be found with "core show codecs".
     */
    originateWithId(params: {
        endpoint: string;
        extension?: string | undefined;
        context?: string | undefined;
        priority?: number | undefined;
        label?: string | undefined;
        app?: string | undefined;
        appArgs?: string | undefined;
        callerId?: string | undefined;
        timeout?: number | undefined;
        variables?: Containers | undefined;
        otherChannelId?: string | undefined;
        originator?: string | undefined;
        formats?: string | undefined;
    }): Promise<Channel>;

    /**
     * Delete (i.e. hangup) a channel.
     *
     * @param [params.reason] - Reason for hanging up the channel.
     */
    hangup(params: { reason?: string | undefined }, callback: (err: Error) => void): void;

    /**
     * Delete (i.e. hangup) a channel.
     */
    hangup(callback: (err: Error) => void): void;

    /**
     * Delete (i.e. hangup) a channel.
     *
     * @param [params.reason] - Reason for hanging up the channel.
     */
    hangup(params?: { reason?: string | undefined }): Promise<void>;

    /**
     * Exit application; continue execution in the dialplan.
     *
     * @param [params.context] - The context to continue to.
     * @param [params.extension] - The extension to continue to.
     * @param [params.priority] - The priority to continue to.
     * @param [params.label] - The label to continue to - will supersede priority if both are provided.
     */
    continueInDialplan(
        params: { context?: string | undefined; extension?: string | undefined; priority?: number | undefined; label?: string | undefined },
        callback: (err: Error) => void,
    ): void;

    /**
     * Exit application; continue execution in the dialplan.
     */
    continueInDialplan(callback: (err: Error) => void): void;

    /**
     * Exit application; continue execution in the dialplan.
     *
     * @param [params.context] - The context to continue to.
     * @param [params.extension] - The extension to continue to.
     * @param [params.priority] - The priority to continue to.
     * @param [params.label] - The label to continue to - will supersede priority if both are provided.
     */
    continueInDialplan(params?: {
        context?: string | undefined;
        extension?: string | undefined;
        priority?: number | undefined;
        label?: string | undefined;
    }): Promise<void>;

    /**
     * Move the channel from one Stasis application to another.
     *
     * @param params.app - The channel will be passed to this Stasis application.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application provided by app.
     */
    move(params: { app: string; appArgs?: string | undefined }, callback: (err: Error) => void): void;

    /**
     * Move the channel from one Stasis application to another.
     *
     * @param params.app - The channel will be passed to this Stasis application.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application provided by app.
     */
    move(params: { app: string; appArgs?: string | undefined }): Promise<void>;

    /**
     * Redirect the channel to a different location.
     *
     * @param params.endpoint - The endpoint to redirect the channel to.
     */
    redirect(params: { endpoint: string }, callback: (err: Error) => void): void;

    /**
     * Redirect the channel to a different location.
     *
     * @param params.endpoint - The endpoint to redirect the channel to.
     */
    redirect(params: { endpoint: string }): Promise<void>;

    /**
     * Answer a channel.
     */
    answer(callback: (err: Error) => void): void;

    /**
     * Answer a channel.
     */
    answer(): Promise<void>;

    /**
     * Indicate ringing to a channel.
     */
    ring(callback: (err: Error) => void): void;

    /**
     * Indicate ringing to a channel.
     */
    ring(): Promise<void>;

    /**
     * Stop ringing indication on a channel if locally generated.
     */
    ringStop(callback: (err: Error) => void): void;

    /**
     * Stop ringing indication on a channel if locally generated.
     */
    ringStop(): Promise<void>;

    /**
     * Send provided DTMF to a given channel.
     *
     * @param [params.dtmf] - DTMF To send.
     * @param [params.before] - Amount of time to wait before DTMF digits (specified in milliseconds) start.
     * @param [params.between] - Amount of time in between DTMF digits (specified in milliseconds).
     * @param [params.duration] - Length of each DTMF digit (specified in milliseconds).
     * @param [params.after] - Amount of time to wait after DTMF digits (specified in milliseconds) end.
     */
    sendDTMF(
        params: { dtmf?: string | undefined; before?: number | undefined; between?: number | undefined; duration?: number | undefined; after?: number | undefined },
        callback: (err: Error) => void,
    ): void;

    /**
     * Send provided DTMF to a given channel.
     */
    sendDTMF(callback: (err: Error) => void): void;

    /**
     * Send provided DTMF to a given channel.
     *
     * @param [params.dtmf] - DTMF To send.
     * @param [params.before] - Amount of time to wait before DTMF digits (specified in milliseconds) start.
     * @param [params.between] - Amount of time in between DTMF digits (specified in milliseconds).
     * @param [params.duration] - Length of each DTMF digit (specified in milliseconds).
     * @param [params.after] - Amount of time to wait after DTMF digits (specified in milliseconds) end.
     */
    sendDTMF(params?: {
        dtmf?: string | undefined;
        before?: number | undefined;
        between?: number | undefined;
        duration?: number | undefined;
        after?: number | undefined;
    }): Promise<void>;

    /**
     * Mute a channel.
     *
     * @param [params.direction] - Direction in which to mute audio.
     */
    mute(params: { direction?: string | undefined }, callback: (err: Error) => void): void;

    /**
     * Mute a channel.
     */
    mute(callback: (err: Error) => void): void;

    /**
     * Mute a channel.
     *
     * @param [params.direction] - Direction in which to mute audio.
     */
    mute(params?: { direction?: string | undefined }): Promise<void>;

    /**
     * Unmute a channel.
     *
     * @param [params.direction] - Direction in which to unmute audio.
     */
    unmute(params: { direction?: string | undefined }, callback: (err: Error) => void): void;

    /**
     * Unmute a channel.
     */
    unmute(callback: (err: Error) => void): void;

    /**
     * Unmute a channel.
     *
     * @param [params.direction] - Direction in which to unmute audio.
     */
    unmute(params?: { direction?: string | undefined }): Promise<void>;

    /**
     * Hold a channel.
     */
    hold(callback: (err: Error) => void): void;

    /**
     * Hold a channel.
     */
    hold(): Promise<void>;

    /**
     * Remove a channel from hold.
     */
    unhold(callback: (err: Error) => void): void;

    /**
     * Remove a channel from hold.
     */
    unhold(): Promise<void>;

    /**
     * Play music on hold to a channel.
     * Using media operations such as /play on a channel playing MOH in this manner will suspend MOH without resuming automatically. If continuing music on hold is desired, the stasis application
     * must reinitiate music on hold.
     *
     * @param [params.mohClass] - Music on hold class to use.
     */
    startMoh(params: { mohClass?: string | undefined }, callback: (err: Error) => void): void;

    /**
     * Play music on hold to a channel.
     * Using media operations such as /play on a channel playing MOH in this manner will suspend MOH without resuming automatically. If continuing music on hold is desired, the stasis application
     * must reinitiate music on hold.
     */
    startMoh(callback: (err: Error) => void): void;

    /**
     * Play music on hold to a channel.
     * Using media operations such as /play on a channel playing MOH in this manner will suspend MOH without resuming automatically. If continuing music on hold is desired, the stasis application
     * must reinitiate music on hold.
     *
     * @param [params.mohClass] - Music on hold class to use.
     */
    startMoh(params?: { mohClass?: string | undefined }): Promise<void>;

    /**
     * Stop playing music on hold to a channel.
     */
    stopMoh(callback: (err: Error) => void): void;

    /**
     * Stop playing music on hold to a channel.
     */
    stopMoh(): Promise<void>;

    /**
     * Play silence to a channel.
     * Using media operations such as /play on a channel playing silence in this manner will suspend silence without resuming automatically.
     */
    startSilence(callback: (err: Error) => void): void;

    /**
     * Play silence to a channel.
     * Using media operations such as /play on a channel playing silence in this manner will suspend silence without resuming automatically.
     */
    startSilence(): Promise<void>;

    /**
     * Stop playing silence to a channel.
     */
    stopSilence(callback: (err: Error) => void): void;

    /**
     * Stop playing silence to a channel.
     */
    stopSilence(): Promise<void>;

    /**
     * Start playback of media.
     * The media URI may be any of a number of URIs. Currently sound:, recording:, number:, digits:, characters:, and tone: URIs are supported. This operation creates a playback resource
     * that can be used to control the playback of media (pause, rewind, fast forward, etc.).
     *
     * @param params.media - Media URIs to play.
     * @param [params.lang] - For sounds, selects language for sound.
     * @param [params.offsetms] - Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
     * @param [params.skipms] - Number of milliseconds to skip for forward/reverse operations.
     * @param [params.playbackId] - Playback ID.
     */
    play(
        params: { media: string | string[]; lang?: string | undefined; offsetms?: number | undefined; skipms?: number | undefined; playbackId?: string | undefined },
        playback: Playback,
        callback: (err: Error, playback: Playback) => void,
    ): void;

    /**
     * Start playback of media.
     * The media URI may be any of a number of URIs. Currently sound:, recording:, number:, digits:, characters:, and tone: URIs are supported. This operation creates a playback resource
     * that can be used to control the playback of media (pause, rewind, fast forward, etc.).
     *
     * @param params.media - Media URIs to play.
     * @param [params.lang] - For sounds, selects language for sound.
     * @param [params.offsetms] - Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
     * @param [params.skipms] - Number of milliseconds to skip for forward/reverse operations.
     * @param [params.playbackId] - Playback ID.
     */
    play(
        params: { media: string | string[]; lang?: string | undefined; offsetms?: number | undefined; skipms?: number | undefined; playbackId?: string | undefined },
        playback: Playback,
    ): Promise<Playback>;

    /**
     * Start playback of media and specify the playbackId.
     * The media URI may be any of a number of URIs. Currently sound:, recording:, number:, digits:, characters:, and tone: URIs are supported. This operation creates a playback resource
     * that can be used to control the playback of media (pause, rewind, fast forward, etc.).
     *
     * @param params.playbackId - Playback ID.
     * @param params.media - Media URIs to play.
     * @param [params.lang] - For sounds, selects language for sound.
     * @param [params.offsetms] - Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
     * @param [params.skipms] - Number of milliseconds to skip for forward/reverse operations.
     */
    playWithId(
        params: { playbackId: string; media: string | string[]; lang?: string | undefined; offsetms?: number | undefined; skipms?: number | undefined },
        callback: (err: Error, playback: Playback) => void,
    ): void;

    /**
     * Start playback of media and specify the playbackId.
     * The media URI may be any of a number of URIs. Currently sound:, recording:, number:, digits:, characters:, and tone: URIs are supported. This operation creates a playback resource
     * that can be used to control the playback of media (pause, rewind, fast forward, etc.).
     *
     * @param params.playbackId - Playback ID.
     * @param params.media - Media URIs to play.
     * @param [params.lang] - For sounds, selects language for sound.
     * @param [params.offsetms] - Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
     * @param [params.skipms] - Number of milliseconds to skip for forward/reverse operations.
     */
    playWithId(params: {
        playbackId: string;
        media: string | string[];
        lang?: string | undefined;
        offsetms?: number | undefined;
        skipms?: number | undefined;
    }): Promise<Playback>;

    /**
     * Start a recording.
     * Record audio from a channel. Note that this will not capture audio sent to the channel. The bridge itself has a record feature if thats what you want.
     *
     * @param params.name - Recordings filename.
     * @param params.format - Format to encode audio in.
     * @param [params.maxDurationSeconds] - Maximum duration of the recording, in seconds. 0 for no limit.
     * @param [params.maxSilenceSeconds] - Maximum duration of silence, in seconds. 0 for no limit.
     * @param [params.ifExists] - Action to take if a recording with the same name already exists.
     * @param [params.beep] - Play beep when recording begins.
     * @param [params.terminateOn] - DTMF input to terminate recording.
     */
    record(
        params: {
            name: string;
            format: string;
            maxDurationSeconds?: number | undefined;
            maxSilenceSeconds?: number | undefined;
            ifExists?: string | undefined;
            beep?: boolean | undefined;
            terminateOn?: string | undefined;
        },
        recording: LiveRecording,
        callback: (err: Error, liverecording: LiveRecording) => void,
    ): void;

    /**
     * Start a recording.
     * Record audio from a channel. Note that this will not capture audio sent to the channel. The bridge itself has a record feature if thats what you want.
     *
     * @param params.name - Recordings filename.
     * @param params.format - Format to encode audio in.
     * @param [params.maxDurationSeconds] - Maximum duration of the recording, in seconds. 0 for no limit.
     * @param [params.maxSilenceSeconds] - Maximum duration of silence, in seconds. 0 for no limit.
     * @param [params.ifExists] - Action to take if a recording with the same name already exists.
     * @param [params.beep] - Play beep when recording begins.
     * @param [params.terminateOn] - DTMF input to terminate recording.
     */
    record(
        params: {
            name: string;
            format: string;
            maxDurationSeconds?: number | undefined;
            maxSilenceSeconds?: number | undefined;
            ifExists?: string | undefined;
            beep?: boolean | undefined;
            terminateOn?: string | undefined;
        },
        recording: LiveRecording,
    ): Promise<LiveRecording>;

    /**
     * Get the value of a channel variable or function.
     *
     * @param params.variable - The channel variable or function to get.
     */
    getChannelVar(params: { variable: string }, callback: (err: Error, variable: Variable) => void): void;

    /**
     * Get the value of a channel variable or function.
     *
     * @param params.variable - The channel variable or function to get.
     */
    getChannelVar(params: { variable: string }): Promise<Variable>;

    /**
     * Set the value of a channel variable or function.
     *
     * @param params.variable - The channel variable or function to set.
     * @param [params.value] - The value to set the variable to.
     */
    setChannelVar(params: { variable: string; value?: string | undefined }, callback: (err: Error) => void): void;

    /**
     * Set the value of a channel variable or function.
     *
     * @param params.variable - The channel variable or function to set.
     * @param [params.value] - The value to set the variable to.
     */
    setChannelVar(params: { variable: string; value?: string | undefined }): Promise<void>;

    /**
     * Start snooping.
     * Snoop (spy/whisper) on a specific channel.
     *
     * @param [params.spy] - Direction of audio to spy on.
     * @param [params.whisper] - Direction of audio to whisper into.
     * @param params.app - Application the snooping channel is placed into.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application.
     * @param [params.snoopId] - Unique ID to assign to snooping channel.
     */
    snoopChannel(
        params: { spy?: string | undefined; whisper?: string | undefined; app: string; appArgs?: string | undefined; snoopId?: string | undefined },
        snoopChannel: Channel,
        callback: (err: Error, channel: Channel) => void,
    ): void;

    /**
     * Start snooping.
     * Snoop (spy/whisper) on a specific channel.
     *
     * @param [params.spy] - Direction of audio to spy on.
     * @param [params.whisper] - Direction of audio to whisper into.
     * @param params.app - Application the snooping channel is placed into.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application.
     * @param [params.snoopId] - Unique ID to assign to snooping channel.
     */
    snoopChannel(
        params: { spy?: string | undefined; whisper?: string | undefined; app: string; appArgs?: string | undefined; snoopId?: string | undefined },
        snoopChannel: Channel,
    ): Promise<Channel>;

    /**
     * Start snooping.
     * Snoop (spy/whisper) on a specific channel.
     *
     * @param params.snoopId - Unique ID to assign to snooping channel.
     * @param [params.spy] - Direction of audio to spy on.
     * @param [params.whisper] - Direction of audio to whisper into.
     * @param params.app - Application the snooping channel is placed into.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application.
     */
    snoopChannelWithId(
        params: { snoopId: string; spy?: string | undefined; whisper?: string | undefined; app: string; appArgs?: string | undefined },
        callback: (err: Error, channel: Channel) => void,
    ): void;

    /**
     * Start snooping.
     * Snoop (spy/whisper) on a specific channel.
     *
     * @param params.snoopId - Unique ID to assign to snooping channel.
     * @param [params.spy] - Direction of audio to spy on.
     * @param [params.whisper] - Direction of audio to whisper into.
     * @param params.app - Application the snooping channel is placed into.
     * @param [params.appArgs] - The application arguments to pass to the Stasis application.
     */
    snoopChannelWithId(params: {
        snoopId: string;
        spy?: string | undefined;
        whisper?: string | undefined;
        app: string;
        appArgs?: string | undefined;
    }): Promise<Channel>;

    /**
     * Dial a created channel.
     *
     * @param [params.caller] - Channel ID of caller.
     * @param [params.timeout] - Dial timeout.
     */
    dial(params: { caller?: string | undefined; timeout?: number | undefined }, callback: (err: Error) => void): void;

    /**
     * Dial a created channel.
     */
    dial(callback: (err: Error) => void): void;

    /**
     * Dial a created channel.
     *
     * @param [params.caller] - Channel ID of caller.
     * @param [params.timeout] - Dial timeout.
     */
    dial(params?: { caller?: string | undefined; timeout?: number | undefined }): Promise<void>;

    /**
     * RTP stats on a channel.
     */
    rtpstatistics(callback: (err: Error, rtpstat: RTPstat) => void): void;

    /**
     * RTP stats on a channel.
     */
    rtpstatistics(): Promise<RTPstat>;

    /**
     * Start an External Media session.
     * Create a channel to an External Media source/sink.
     *
     * @param params.app - Stasis Application to place channel into.
     * @param [params.variables] - The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted
     * as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }.
     * @param params.external_host - Hostname/ip:port of external host.
     * @param [params.encapsulation] - Payload encapsulation protocol.
     * @param [params.transport] - Transport protocol.
     * @param [params.connection_type] - Connection type (client/server).
     * @param params.format - Format to encode audio in.
     * @param [params.direction] - External media direction.
     */
    externalMedia(
        params: {
            app: string;
            variables?: Containers | undefined;
            external_host: string;
            encapsulation?: string | undefined;
            transport?: string | undefined;
            connection_type?: string | undefined;
            format: string;
            direction?: string | undefined;
        },
        callback: (err: Error, channel: Channel) => void,
    ): void;

    /**
     * Start an External Media session.
     * Create a channel to an External Media source/sink.
     *
     * @param params.app - Stasis Application to place channel into.
     * @param [params.variables] - The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted
     * as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }.
     * @param params.external_host - Hostname/ip:port of external host.
     * @param [params.encapsulation] - Payload encapsulation protocol.
     * @param [params.transport] - Transport protocol.
     * @param [params.connection_type] - Connection type (client/server).
     * @param params.format - Format to encode audio in.
     * @param [params.direction] - External media direction.
     */
    externalMedia(params: {
        app: string;
        variables?: Containers | undefined;
        external_host: string;
        encapsulation?: string | undefined;
        transport?: string | undefined;
        connection_type?: string | undefined;
        format: string;
        direction?: string | undefined;
    }): Promise<Channel>;
}
export interface DeviceStates {
    /**
     * List all ARI controlled device states.
     */
    list(callback: (err: Error, devicestates: DeviceState[]) => void): void;

    /**
     * List all ARI controlled device states.
     */
    list(): Promise<DeviceState[]>;

    /**
     * Retrieve the current state of a device.
     *
     * @param params.deviceName - Name of the device.
     */
    get(params: { deviceName: string }, callback: (err: Error, devicestate: DeviceState) => void): void;

    /**
     * Retrieve the current state of a device.
     *
     * @param params.deviceName - Name of the device.
     */
    get(params: { deviceName: string }): Promise<DeviceState>;

    /**
     * Change the state of a device controlled by ARI. (Note - implicitly creates the device state).
     *
     * @param params.deviceName - Name of the device.
     * @param params.deviceState - Device state value.
     */
    update(params: { deviceName: string; deviceState: string }, callback: (err: Error) => void): void;

    /**
     * Change the state of a device controlled by ARI. (Note - implicitly creates the device state).
     *
     * @param params.deviceName - Name of the device.
     * @param params.deviceState - Device state value.
     */
    update(params: { deviceName: string; deviceState: string }): Promise<void>;

    /**
     * Destroy a device-state controlled by ARI.
     *
     * @param params.deviceName - Name of the device.
     */
    delete(params: { deviceName: string }, callback: (err: Error) => void): void;

    /**
     * Destroy a device-state controlled by ARI.
     *
     * @param params.deviceName - Name of the device.
     */
    delete(params: { deviceName: string }): Promise<void>;
}
export interface DeviceState extends Resource {
    /**
     * Name of the device.
     */
    name: string;

    /**
     * Devices state.
     */
    state: string;

    /**
     * List all ARI controlled device states.
     */
    list(callback: (err: Error, devicestates: DeviceState[]) => void): void;

    /**
     * List all ARI controlled device states.
     */
    list(): Promise<DeviceState[]>;

    /**
     * Retrieve the current state of a device.
     */
    get(callback: (err: Error, devicestate: DeviceState) => void): void;

    /**
     * Retrieve the current state of a device.
     */
    get(): Promise<DeviceState>;

    /**
     * Change the state of a device controlled by ARI. (Note - implicitly creates the device state).
     *
     * @param params.deviceState - Device state value.
     */
    update(params: { deviceState: string }, callback: (err: Error) => void): void;

    /**
     * Change the state of a device controlled by ARI. (Note - implicitly creates the device state).
     *
     * @param params.deviceState - Device state value.
     */
    update(params: { deviceState: string }): Promise<void>;

    /**
     * Destroy a device-state controlled by ARI.
     */
    delete(callback: (err: Error) => void): void;

    /**
     * Destroy a device-state controlled by ARI.
     */
    delete(): Promise<void>;
}
export interface Endpoints {
    /**
     * List all endpoints.
     */
    list(callback: (err: Error, endpoints: Endpoint[]) => void): void;

    /**
     * List all endpoints.
     */
    list(): Promise<Endpoint[]>;

    /**
     * Send a message to some technology URI or endpoint.
     *
     * @param params.to - The endpoint resource or technology specific URI to send the message to. Valid resources are sip, pjsip, and xmpp.
     * @param params.from - The endpoint resource or technology specific identity to send this message from. Valid resources are sip, pjsip, and xmpp.
     * @param [params.body] - The body of the message.
     * @param [params.variables] - The "variables" key in the body object holds technology specific key/value pairs to append to the message. These can be interpreted and used by the various
     * resource types; for example, pjsip and sip resource types will add the key/value pairs as SIP headers.
     */
    sendMessage(
        params: { to: string; from: string; body?: string | undefined; variables?: Containers | undefined },
        callback: (err: Error) => void,
    ): void;

    /**
     * Send a message to some technology URI or endpoint.
     *
     * @param params.to - The endpoint resource or technology specific URI to send the message to. Valid resources are sip, pjsip, and xmpp.
     * @param params.from - The endpoint resource or technology specific identity to send this message from. Valid resources are sip, pjsip, and xmpp.
     * @param [params.body] - The body of the message.
     * @param [params.variables] - The "variables" key in the body object holds technology specific key/value pairs to append to the message. These can be interpreted and used by the various
     * resource types; for example, pjsip and sip resource types will add the key/value pairs as SIP headers.
     */
    sendMessage(params: { to: string; from: string; body?: string | undefined; variables?: Containers | undefined }): Promise<void>;

    /**
     * List available endoints for a given endpoint technology.
     *
     * @param [params.tech] - Technology of the endpoints (sip,iax2,...).
     */
    listByTech(params: { tech: string }, callback: (err: Error, endpoints: Endpoint[]) => void): void;

    /**
     * List available endoints for a given endpoint technology.
     */
    listByTech(callback: (err: Error, endpoints: Endpoint[]) => void): void;

    /**
     * List available endoints for a given endpoint technology.
     *
     * @param [params.tech] - Technology of the endpoints (sip,iax2,...).
     */
    listByTech(params?: { tech: string }): Promise<Endpoint[]>;

    /**
     * Details for an endpoint.
     *
     * @param [params.tech] - Technology of the endpoint.
     * @param [params.resource] - ID of the endpoint.
     */
    get(params: { tech: string; resource: string }, callback: (err: Error, endpoint: Endpoint) => void): void;

    /**
     * Details for an endpoint.
     */
    get(callback: (err: Error, endpoint: Endpoint) => void): void;

    /**
     * Details for an endpoint.
     *
     * @param [params.tech] - Technology of the endpoint.
     * @param [params.resource] - ID of the endpoint.
     */
    get(params?: { tech: string; resource: string }): Promise<Endpoint>;

    /**
     * Send a message to some endpoint in a technology.
     *
     * @param [params.tech] - Technology of the endpoint.
     * @param [params.resource] - ID of the endpoint.
     * @param params.from - The endpoint resource or technology specific identity to send this message from. Valid resources are sip, pjsip, and xmpp.
     * @param [params.body] - The body of the message.
     * @param [params.variables] - The "variables" key in the body object holds technology specific key/value pairs to append to the message. These can be interpreted and used by the various
     * resource types; for example, pjsip and sip resource types will add the key/value pairs as SIP headers.
     */
    sendMessageToEndpoint(
        params: { tech: string; resource: string; from: string; body?: string | undefined; variables?: Containers | undefined },
        callback: (err: Error) => void,
    ): void;

    /**
     * Send a message to some endpoint in a technology.
     *
     * @param [params.tech] - Technology of the endpoint.
     * @param [params.resource] - ID of the endpoint.
     * @param params.from - The endpoint resource or technology specific identity to send this message from. Valid resources are sip, pjsip, and xmpp.
     * @param [params.body] - The body of the message.
     * @param [params.variables] - The "variables" key in the body object holds technology specific key/value pairs to append to the message. These can be interpreted and used by the various
     * resource types; for example, pjsip and sip resource types will add the key/value pairs as SIP headers.
     */
    sendMessageToEndpoint(params: {
        tech: string;
        resource: string;
        from: string;
        body?: string | undefined;
        variables?: Containers | undefined;
    }): Promise<void>;
}
export interface Endpoint extends Resource {
    /**
     * Technology of the endpoint.
     */
    technology: string;

    /**
     * Identifier of the endpoint, specific to the given technology.
     */
    resource: string;

    /**
     * Endpoints state.
     */
    state?: string | undefined;

    /**
     * Ids of channels associated with this endpoint.
     */
    channel_ids: string | string[];

    /**
     * List all endpoints.
     */
    list(callback: (err: Error, endpoints: Endpoint[]) => void): void;

    /**
     * List all endpoints.
     */
    list(): Promise<Endpoint[]>;

    /**
     * Send a message to some technology URI or endpoint.
     *
     * @param params.to - The endpoint resource or technology specific URI to send the message to. Valid resources are sip, pjsip, and xmpp.
     * @param params.from - The endpoint resource or technology specific identity to send this message from. Valid resources are sip, pjsip, and xmpp.
     * @param [params.body] - The body of the message.
     * @param [params.variables] - The "variables" key in the body object holds technology specific key/value pairs to append to the message. These can be interpreted and used by the various
     * resource types; for example, pjsip and sip resource types will add the key/value pairs as SIP headers.
     */
    sendMessage(
        params: { to: string; from: string; body?: string | undefined; variables?: Containers | undefined },
        callback: (err: Error) => void,
    ): void;

    /**
     * Send a message to some technology URI or endpoint.
     *
     * @param params.to - The endpoint resource or technology specific URI to send the message to. Valid resources are sip, pjsip, and xmpp.
     * @param params.from - The endpoint resource or technology specific identity to send this message from. Valid resources are sip, pjsip, and xmpp.
     * @param [params.body] - The body of the message.
     * @param [params.variables] - The "variables" key in the body object holds technology specific key/value pairs to append to the message. These can be interpreted and used by the various
     * resource types; for example, pjsip and sip resource types will add the key/value pairs as SIP headers.
     */
    sendMessage(params: { to: string; from: string; body?: string | undefined; variables?: Containers | undefined }): Promise<void>;

    /**
     * List available endoints for a given endpoint technology.
     */
    listByTech(callback: (err: Error, endpoints: Endpoint[]) => void): void;

    /**
     * List available endoints for a given endpoint technology.
     */
    listByTech(): Promise<Endpoint[]>;

    /**
     * Details for an endpoint.
     */
    get(callback: (err: Error, endpoint: Endpoint) => void): void;

    /**
     * Details for an endpoint.
     */
    get(): Promise<Endpoint>;

    /**
     * Send a message to some endpoint in a technology.
     *
     * @param params.from - The endpoint resource or technology specific identity to send this message from. Valid resources are sip, pjsip, and xmpp.
     * @param [params.body] - The body of the message.
     * @param [params.variables] - The "variables" key in the body object holds technology specific key/value pairs to append to the message. These can be interpreted and used by the various
     * resource types; for example, pjsip and sip resource types will add the key/value pairs as SIP headers.
     */
    sendMessageToEndpoint(
        params: { from: string; body?: string | undefined; variables?: Containers | undefined },
        callback: (err: Error) => void,
    ): void;

    /**
     * Send a message to some endpoint in a technology.
     *
     * @param params.from - The endpoint resource or technology specific identity to send this message from. Valid resources are sip, pjsip, and xmpp.
     * @param [params.body] - The body of the message.
     * @param [params.variables] - The "variables" key in the body object holds technology specific key/value pairs to append to the message. These can be interpreted and used by the various
     * resource types; for example, pjsip and sip resource types will add the key/value pairs as SIP headers.
     */
    sendMessageToEndpoint(params: { from: string; body?: string | undefined; variables?: Containers | undefined }): Promise<void>;
}
export interface TextMessage {
    /**
     * A technology specific URI specifying the source of the message. For sip and pjsip technologies, any SIP URI can be specified. For xmpp, the URI must correspond to the client connection
     * being used to send the message.
     */
    from: string;

    /**
     * A technology specific URI specifying the destination of the message. Valid technologies include sip, pjsip, and xmp. The destination of a message should be an endpoint.
     */
    to: string;

    /**
     * The text of the message.
     */
    body: string;

    /**
     * Technology specific key/value pairs (JSON object) associated with the message.
     */
    variables?: IndexableObject | undefined;
}
export interface Mailboxes {
    /**
     * List all mailboxes.
     */
    list(callback: (err: Error, mailboxs: Mailbox[]) => void): void;

    /**
     * List all mailboxes.
     */
    list(): Promise<Mailbox[]>;

    /**
     * Retrieve the current state of a mailbox.
     *
     * @param params.mailboxName - Name of the mailbox.
     */
    get(params: { mailboxName: string }, callback: (err: Error, mailbox: Mailbox) => void): void;

    /**
     * Retrieve the current state of a mailbox.
     *
     * @param params.mailboxName - Name of the mailbox.
     */
    get(params: { mailboxName: string }): Promise<Mailbox>;

    /**
     * Change the state of a mailbox. (Note - implicitly creates the mailbox).
     *
     * @param params.mailboxName - Name of the mailbox.
     * @param params.oldMessages - Count of old messages in the mailbox.
     * @param params.newMessages - Count of new messages in the mailbox.
     */
    update(
        params: { mailboxName: string; oldMessages: number; newMessages: number },
        callback: (err: Error) => void,
    ): void;

    /**
     * Change the state of a mailbox. (Note - implicitly creates the mailbox).
     *
     * @param params.mailboxName - Name of the mailbox.
     * @param params.oldMessages - Count of old messages in the mailbox.
     * @param params.newMessages - Count of new messages in the mailbox.
     */
    update(params: { mailboxName: string; oldMessages: number; newMessages: number }): Promise<void>;

    /**
     * Destroy a mailbox.
     *
     * @param params.mailboxName - Name of the mailbox.
     */
    delete(params: { mailboxName: string }, callback: (err: Error) => void): void;

    /**
     * Destroy a mailbox.
     *
     * @param params.mailboxName - Name of the mailbox.
     */
    delete(params: { mailboxName: string }): Promise<void>;
}
export interface Mailbox extends Resource {
    /**
     * Name of the mailbox.
     */
    name: string;

    /**
     * Count of old messages in the mailbox.
     */
    old_messages: number;

    /**
     * Count of new messages in the mailbox.
     */
    new_messages: number;

    /**
     * List all mailboxes.
     */
    list(callback: (err: Error, mailboxs: Mailbox[]) => void): void;

    /**
     * List all mailboxes.
     */
    list(): Promise<Mailbox[]>;

    /**
     * Retrieve the current state of a mailbox.
     */
    get(callback: (err: Error, mailbox: Mailbox) => void): void;

    /**
     * Retrieve the current state of a mailbox.
     */
    get(): Promise<Mailbox>;

    /**
     * Change the state of a mailbox. (Note - implicitly creates the mailbox).
     *
     * @param params.oldMessages - Count of old messages in the mailbox.
     * @param params.newMessages - Count of new messages in the mailbox.
     */
    update(params: { oldMessages: number; newMessages: number }, callback: (err: Error) => void): void;

    /**
     * Change the state of a mailbox. (Note - implicitly creates the mailbox).
     *
     * @param params.oldMessages - Count of old messages in the mailbox.
     * @param params.newMessages - Count of new messages in the mailbox.
     */
    update(params: { oldMessages: number; newMessages: number }): Promise<void>;

    /**
     * Destroy a mailbox.
     */
    delete(callback: (err: Error) => void): void;

    /**
     * Destroy a mailbox.
     */
    delete(): Promise<void>;
}
export interface Playbacks {
    /**
     * Get a playbacks details.
     *
     * @param params.playbackId - Playbacks id.
     */
    get(params: { playbackId: string }, callback: (err: Error, playback: Playback) => void): void;

    /**
     * Get a playbacks details.
     *
     * @param params.playbackId - Playbacks id.
     */
    get(params: { playbackId: string }): Promise<Playback>;

    /**
     * Stop a playback.
     *
     * @param params.playbackId - Playbacks id.
     */
    stop(params: { playbackId: string }, callback: (err: Error) => void): void;

    /**
     * Stop a playback.
     *
     * @param params.playbackId - Playbacks id.
     */
    stop(params: { playbackId: string }): Promise<void>;

    /**
     * Control a playback.
     *
     * @param params.playbackId - Playbacks id.
     * @param params.operation - Operation to perform on the playback.
     */
    control(params: { playbackId: string; operation: string }, callback: (err: Error) => void): void;

    /**
     * Control a playback.
     *
     * @param params.playbackId - Playbacks id.
     * @param params.operation - Operation to perform on the playback.
     */
    control(params: { playbackId: string; operation: string }): Promise<void>;
}
export interface Playback extends Resource {
    /**
     * ID for this playback operation.
     */
    id: string;

    /**
     * The URI for the media currently being played back.
     */
    media_uri: string;

    /**
     * If a list of URIs is being played, the next media URI to be played back.
     */
    next_media_uri?: string | undefined;

    /**
     * URI for the channel or bridge to play the media on.
     */
    target_uri: string;

    /**
     * For media types that support multiple languages, the language requested for playback.
     */
    language: string;

    /**
     * Current state of the playback operation.
     */
    state: string;

    /**
     * Get a playbacks details.
     */
    get(callback: (err: Error, playback: Playback) => void): void;

    /**
     * Get a playbacks details.
     */
    get(): Promise<Playback>;

    /**
     * Stop a playback.
     */
    stop(callback: (err: Error) => void): void;

    /**
     * Stop a playback.
     */
    stop(): Promise<void>;

    /**
     * Control a playback.
     *
     * @param params.operation - Operation to perform on the playback.
     */
    control(params: { operation: string }, callback: (err: Error) => void): void;

    /**
     * Control a playback.
     *
     * @param params.operation - Operation to perform on the playback.
     */
    control(params: { operation: string }): Promise<void>;
}
export interface Recordings {
    /**
     * List recordings that are complete.
     */
    listStored(callback: (err: Error, storedrecordings: StoredRecording[]) => void): void;

    /**
     * List recordings that are complete.
     */
    listStored(): Promise<StoredRecording[]>;

    /**
     * Get a stored recordings details.
     *
     * @param params.recordingName - The name of the recording.
     */
    getStored(
        params: { recordingName: string },
        callback: (err: Error, storedrecording: StoredRecording) => void,
    ): void;

    /**
     * Get a stored recordings details.
     *
     * @param params.recordingName - The name of the recording.
     */
    getStored(params: { recordingName: string }): Promise<StoredRecording>;

    /**
     * Delete a stored recording.
     *
     * @param params.recordingName - The name of the recording.
     */
    deleteStored(params: { recordingName: string }, callback: (err: Error) => void): void;

    /**
     * Delete a stored recording.
     *
     * @param params.recordingName - The name of the recording.
     */
    deleteStored(params: { recordingName: string }): Promise<void>;

    /**
     * Get the file associated with the stored recording.
     *
     * @param params.recordingName - The name of the recording.
     */
    getStoredFile(params: { recordingName: string }, callback: (err: Error, binary: Buffer) => void): void;

    /**
     * Get the file associated with the stored recording.
     *
     * @param params.recordingName - The name of the recording.
     */
    getStoredFile(params: { recordingName: string }): Promise<Buffer>;

    /**
     * Copy a stored recording.
     *
     * @param params.recordingName - The name of the recording to copy.
     * @param params.destinationRecordingName - The destination name of the recording.
     */
    copyStored(
        params: { recordingName: string; destinationRecordingName: string },
        callback: (err: Error, storedrecording: StoredRecording) => void,
    ): void;

    /**
     * Copy a stored recording.
     *
     * @param params.recordingName - The name of the recording to copy.
     * @param params.destinationRecordingName - The destination name of the recording.
     */
    copyStored(params: { recordingName: string; destinationRecordingName: string }): Promise<StoredRecording>;

    /**
     * List live recordings.
     *
     * @param params.recordingName - The name of the recording.
     */
    getLive(params: { recordingName: string }, callback: (err: Error, liverecording: LiveRecording) => void): void;

    /**
     * List live recordings.
     *
     * @param params.recordingName - The name of the recording.
     */
    getLive(params: { recordingName: string }): Promise<LiveRecording>;

    /**
     * Stop a live recording and discard it.
     *
     * @param params.recordingName - The name of the recording.
     */
    cancel(params: { recordingName: string }, callback: (err: Error) => void): void;

    /**
     * Stop a live recording and discard it.
     *
     * @param params.recordingName - The name of the recording.
     */
    cancel(params: { recordingName: string }): Promise<void>;

    /**
     * Stop a live recording and store it.
     *
     * @param params.recordingName - The name of the recording.
     */
    stop(params: { recordingName: string }, callback: (err: Error) => void): void;

    /**
     * Stop a live recording and store it.
     *
     * @param params.recordingName - The name of the recording.
     */
    stop(params: { recordingName: string }): Promise<void>;

    /**
     * Pause a live recording.
     * Pausing a recording suspends silence detection, which will be restarted when the recording is unpaused. Paused time is not included in the accounting for maxDurationSeconds.
     *
     * @param params.recordingName - The name of the recording.
     */
    pause(params: { recordingName: string }, callback: (err: Error) => void): void;

    /**
     * Pause a live recording.
     * Pausing a recording suspends silence detection, which will be restarted when the recording is unpaused. Paused time is not included in the accounting for maxDurationSeconds.
     *
     * @param params.recordingName - The name of the recording.
     */
    pause(params: { recordingName: string }): Promise<void>;

    /**
     * Unpause a live recording.
     *
     * @param params.recordingName - The name of the recording.
     */
    unpause(params: { recordingName: string }, callback: (err: Error) => void): void;

    /**
     * Unpause a live recording.
     *
     * @param params.recordingName - The name of the recording.
     */
    unpause(params: { recordingName: string }): Promise<void>;

    /**
     * Mute a live recording.
     * Muting a recording suspends silence detection, which will be restarted when the recording is unmuted.
     *
     * @param params.recordingName - The name of the recording.
     */
    mute(params: { recordingName: string }, callback: (err: Error) => void): void;

    /**
     * Mute a live recording.
     * Muting a recording suspends silence detection, which will be restarted when the recording is unmuted.
     *
     * @param params.recordingName - The name of the recording.
     */
    mute(params: { recordingName: string }): Promise<void>;

    /**
     * Unmute a live recording.
     *
     * @param params.recordingName - The name of the recording.
     */
    unmute(params: { recordingName: string }, callback: (err: Error) => void): void;

    /**
     * Unmute a live recording.
     *
     * @param params.recordingName - The name of the recording.
     */
    unmute(params: { recordingName: string }): Promise<void>;
}
export interface StoredRecording extends Resource {
    /**
     * Name.
     */
    name: string;

    /**
     * Format.
     */
    format: string;

    /**
     * List recordings that are complete.
     */
    listStored(callback: (err: Error, storedrecordings: StoredRecording[]) => void): void;

    /**
     * List recordings that are complete.
     */
    listStored(): Promise<StoredRecording[]>;

    /**
     * Get a stored recordings details.
     */
    getStored(callback: (err: Error, storedrecording: StoredRecording) => void): void;

    /**
     * Get a stored recordings details.
     */
    getStored(): Promise<StoredRecording>;

    /**
     * Delete a stored recording.
     */
    deleteStored(callback: (err: Error) => void): void;

    /**
     * Delete a stored recording.
     */
    deleteStored(): Promise<void>;

    /**
     * Get the file associated with the stored recording.
     */
    getStoredFile(callback: (err: Error, binary: Buffer) => void): void;

    /**
     * Get the file associated with the stored recording.
     */
    getStoredFile(): Promise<Buffer>;

    /**
     * Copy a stored recording.
     *
     * @param params.destinationRecordingName - The destination name of the recording.
     */
    copyStored(
        params: { destinationRecordingName: string },
        callback: (err: Error, storedrecording: StoredRecording) => void,
    ): void;

    /**
     * Copy a stored recording.
     *
     * @param params.destinationRecordingName - The destination name of the recording.
     */
    copyStored(params: { destinationRecordingName: string }): Promise<StoredRecording>;

    /**
     * List live recordings.
     */
    getLive(callback: (err: Error, liverecording: LiveRecording) => void): void;

    /**
     * List live recordings.
     */
    getLive(): Promise<LiveRecording>;

    /**
     * Stop a live recording and discard it.
     */
    cancel(callback: (err: Error) => void): void;

    /**
     * Stop a live recording and discard it.
     */
    cancel(): Promise<void>;

    /**
     * Stop a live recording and store it.
     */
    stop(callback: (err: Error) => void): void;

    /**
     * Stop a live recording and store it.
     */
    stop(): Promise<void>;

    /**
     * Pause a live recording.
     * Pausing a recording suspends silence detection, which will be restarted when the recording is unpaused. Paused time is not included in the accounting for maxDurationSeconds.
     */
    pause(callback: (err: Error) => void): void;

    /**
     * Pause a live recording.
     * Pausing a recording suspends silence detection, which will be restarted when the recording is unpaused. Paused time is not included in the accounting for maxDurationSeconds.
     */
    pause(): Promise<void>;

    /**
     * Unpause a live recording.
     */
    unpause(callback: (err: Error) => void): void;

    /**
     * Unpause a live recording.
     */
    unpause(): Promise<void>;

    /**
     * Mute a live recording.
     * Muting a recording suspends silence detection, which will be restarted when the recording is unmuted.
     */
    mute(callback: (err: Error) => void): void;

    /**
     * Mute a live recording.
     * Muting a recording suspends silence detection, which will be restarted when the recording is unmuted.
     */
    mute(): Promise<void>;

    /**
     * Unmute a live recording.
     */
    unmute(callback: (err: Error) => void): void;

    /**
     * Unmute a live recording.
     */
    unmute(): Promise<void>;
}
export interface LiveRecording extends Resource {
    /**
     * Base name for the recording.
     */
    name: string;

    /**
     * Recording format (wav, gsm, etc.).
     */
    format: string;

    /**
     * URI for the channel or bridge being recorded.
     */
    target_uri: string;

    /**
     * State.
     */
    state: string;

    /**
     * Duration in seconds of the recording.
     */
    duration?: number | undefined;

    /**
     * Duration of talking, in seconds, detected in the recording. This is only available if the recording was initiated with a non-zero maxSilenceSeconds.
     */
    talking_duration?: number | undefined;

    /**
     * Duration of silence, in seconds, detected in the recording. This is only available if the recording was initiated with a non-zero maxSilenceSeconds.
     */
    silence_duration?: number | undefined;

    /**
     * Cause for recording failure if failed.
     */
    cause?: string | undefined;

    /**
     * List recordings that are complete.
     */
    listStored(callback: (err: Error, storedrecordings: StoredRecording[]) => void): void;

    /**
     * List recordings that are complete.
     */
    listStored(): Promise<StoredRecording[]>;

    /**
     * Get a stored recordings details.
     */
    getStored(callback: (err: Error, storedrecording: StoredRecording) => void): void;

    /**
     * Get a stored recordings details.
     */
    getStored(): Promise<StoredRecording>;

    /**
     * Delete a stored recording.
     */
    deleteStored(callback: (err: Error) => void): void;

    /**
     * Delete a stored recording.
     */
    deleteStored(): Promise<void>;

    /**
     * Get the file associated with the stored recording.
     */
    getStoredFile(callback: (err: Error, binary: Buffer) => void): void;

    /**
     * Get the file associated with the stored recording.
     */
    getStoredFile(): Promise<Buffer>;

    /**
     * Copy a stored recording.
     *
     * @param params.destinationRecordingName - The destination name of the recording.
     */
    copyStored(
        params: { destinationRecordingName: string },
        callback: (err: Error, storedrecording: StoredRecording) => void,
    ): void;

    /**
     * Copy a stored recording.
     *
     * @param params.destinationRecordingName - The destination name of the recording.
     */
    copyStored(params: { destinationRecordingName: string }): Promise<StoredRecording>;

    /**
     * List live recordings.
     */
    getLive(callback: (err: Error, liverecording: LiveRecording) => void): void;

    /**
     * List live recordings.
     */
    getLive(): Promise<LiveRecording>;

    /**
     * Stop a live recording and discard it.
     */
    cancel(callback: (err: Error) => void): void;

    /**
     * Stop a live recording and discard it.
     */
    cancel(): Promise<void>;

    /**
     * Stop a live recording and store it.
     */
    stop(callback: (err: Error) => void): void;

    /**
     * Stop a live recording and store it.
     */
    stop(): Promise<void>;

    /**
     * Pause a live recording.
     * Pausing a recording suspends silence detection, which will be restarted when the recording is unpaused. Paused time is not included in the accounting for maxDurationSeconds.
     */
    pause(callback: (err: Error) => void): void;

    /**
     * Pause a live recording.
     * Pausing a recording suspends silence detection, which will be restarted when the recording is unpaused. Paused time is not included in the accounting for maxDurationSeconds.
     */
    pause(): Promise<void>;

    /**
     * Unpause a live recording.
     */
    unpause(callback: (err: Error) => void): void;

    /**
     * Unpause a live recording.
     */
    unpause(): Promise<void>;

    /**
     * Mute a live recording.
     * Muting a recording suspends silence detection, which will be restarted when the recording is unmuted.
     */
    mute(callback: (err: Error) => void): void;

    /**
     * Mute a live recording.
     * Muting a recording suspends silence detection, which will be restarted when the recording is unmuted.
     */
    mute(): Promise<void>;

    /**
     * Unmute a live recording.
     */
    unmute(callback: (err: Error) => void): void;

    /**
     * Unmute a live recording.
     */
    unmute(): Promise<void>;
}
export interface Sounds {
    /**
     * List all sounds.
     *
     * @param [params.lang] - Lookup sound for a specific language.
     * @param [params.format] - Lookup sound in a specific format.
     */
    list(params: { lang?: string | undefined; format?: string | undefined }, callback: (err: Error, sounds: Sound[]) => void): void;

    /**
     * List all sounds.
     */
    list(callback: (err: Error, sounds: Sound[]) => void): void;

    /**
     * List all sounds.
     *
     * @param [params.lang] - Lookup sound for a specific language.
     * @param [params.format] - Lookup sound in a specific format.
     */
    list(params?: { lang?: string | undefined; format?: string | undefined }): Promise<Sound[]>;

    /**
     * Get a sounds details.
     *
     * @param params.soundId - Sounds id.
     */
    get(params: { soundId: string }, callback: (err: Error, sound: Sound) => void): void;

    /**
     * Get a sounds details.
     *
     * @param params.soundId - Sounds id.
     */
    get(params: { soundId: string }): Promise<Sound>;
}
export interface FormatLangPair {
    /**
     * Language.
     */
    language: string;

    /**
     * Format.
     */
    format: string;
}
export interface Sound extends Resource {
    /**
     * Sounds identifier.
     */
    id: string;

    /**
     * Text description of the sound, usually the words spoken.
     */
    text?: string | undefined;

    /**
     * The formats and languages in which this sound is available.
     */
    formats: FormatLangPair | FormatLangPair[];

    /**
     * List all sounds.
     *
     * @param [params.lang] - Lookup sound for a specific language.
     * @param [params.format] - Lookup sound in a specific format.
     */
    list(params: { lang?: string | undefined; format?: string | undefined }, callback: (err: Error, sounds: Sound[]) => void): void;

    /**
     * List all sounds.
     */
    list(callback: (err: Error, sounds: Sound[]) => void): void;

    /**
     * List all sounds.
     *
     * @param [params.lang] - Lookup sound for a specific language.
     * @param [params.format] - Lookup sound in a specific format.
     */
    list(params?: { lang?: string | undefined; format?: string | undefined }): Promise<Sound[]>;

    /**
     * Get a sounds details.
     */
    get(callback: (err: Error, sound: Sound) => void): void;

    /**
     * Get a sounds details.
     */
    get(): Promise<Sound>;
}
