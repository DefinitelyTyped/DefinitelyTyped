// Type definitions for ari-client 2.2
// Project: https://github.com/asterisk/node-ari-client
// Definitions by: Dioris Moreno <https://github.com/dioris-moreno>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function connect(
    baseUrl: string,
    user: string,
    pass: string,
    callback?: (err: Error, client: Client) => void,
): Promise<Client>;

export interface Client extends Resource {
    /* Start and Stop Method Overloads */
    start(apps: string | string[], subscribeAll: boolean, callback?: (err: Error, ...args: any[]) => void): void;
    start(apps: string | string[], callback?: (err: Error, ...args: any[]) => void): void;
    stop(): void;
    /* Properties */
    applications: Applications;
    asterisk: Asterisk;
    channels: Channels;
    bridges: Bridges;
    deviceStates: DeviceStates;
    endpoints: Endpoints;
    recordings: Recordings;
    mailboxes: Mailboxes;
    playbacks: Playbacks;
    sounds: Sounds;
    events: Events;
    /* Create Methods */
    Application(id?: string, objValues?: object): Application;
    Asterisk(id?: string, objValues?: object): Asterisk;
    Channel(id?: string, objValues?: object): Channel;
    Bridge(id?: string, objValues?: object): Bridge;
    DeviceState(id?: string, objValues?: object): DeviceState;
    Endpoint(id?: string, objValues?: object): Endpoint;
    LiveRecording(id?: string, objValues?: object): LiveRecording;
    Mailbox(id?: string, objValues?: object): Mailbox;
    Playback(id?: string, objValues?: object): Playback;
    Sound(id?: string, objValues?: object): Sound;
    StoredRecording(id?: string, objValues?: object): StoredRecording;
}

export interface Containers {
    [key: string]: any;
}
/* Event Types */
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
    /* Methods */
    eventWebsocket(
        params: { app: string | string[]; subscribeAll?: boolean },
        callback: (err: Error, message: Message) => void,
    ): void;
    eventWebsocket(params: { app: string | string[]; subscribeAll?: boolean }): Promise<Message>;
    userEvent(
        params: { eventName: string; application: string; source?: string | string[]; variables?: Containers },
        callback: (err: Error) => void,
    ): void;
    userEvent(params: {
        eventName: string;
        application: string;
        source?: string | string[];
        variables?: Containers;
    }): Promise<void>;
}
export interface Message {
    /* Properties */
    type: string;
    asterisk_id?: string;
}
export interface MissingParams extends Message {
    /* Properties */
    params: string | string[];
}
export interface Event extends Message {
    /* Properties */
    application: string;
    timestamp: Date;
}
export interface ContactInfo {
    /* Properties */
    uri: string;
    contact_status: string;
    aor: string;
    roundtrip_usec?: string;
}
export interface Peer {
    /* Properties */
    peer_status: string;
    cause?: string;
    address?: string;
    port?: string;
    time?: string;
}
export interface DeviceStateChanged extends Event {
    /* Properties */
    device_state: DeviceState;
}
export interface PlaybackStarted extends Event {
    /* Properties */
    playback: Playback;
}
export interface PlaybackContinuing extends Event {
    /* Properties */
    playback: Playback;
}
export interface PlaybackFinished extends Event {
    /* Properties */
    playback: Playback;
}
export interface RecordingStarted extends Event {
    /* Properties */
    recording: LiveRecording;
}
export interface RecordingFinished extends Event {
    /* Properties */
    recording: LiveRecording;
}
export interface RecordingFailed extends Event {
    /* Properties */
    recording: LiveRecording;
}
export interface ApplicationMoveFailed extends Event {
    /* Properties */
    channel: Channel;
    destination: string;
    args: string | string[];
}
export interface BridgeCreated extends Event {
    /* Properties */
    bridge: Bridge;
}
export interface BridgeDestroyed extends Event {
    /* Properties */
    bridge: Bridge;
}
export interface BridgeMerged extends Event {
    /* Properties */
    bridge: Bridge;
    bridge_from: Bridge;
}
export interface BridgeVideoSourceChanged extends Event {
    /* Properties */
    bridge: Bridge;
    old_video_source_id?: string;
}
export interface BridgeBlindTransfer extends Event {
    /* Properties */
    channel: Channel;
    replace_channel?: Channel;
    transferee?: Channel;
    exten: string;
    context: string;
    result: string;
    is_external: boolean;
    bridge: Bridge;
}
export interface BridgeAttendedTransfer extends Event {
    /* Properties */
    transferer_first_leg: Channel;
    transferer_second_leg: Channel;
    replace_channel?: Channel;
    transferee?: Channel;
    transfer_target?: Channel;
    result: string;
    is_external: boolean;
    transferer_first_leg_bridge: Bridge;
    transferer_second_leg_bridge: Bridge;
    destination_type: string;
    destination_bridge: string;
    destination_application: string;
    destination_link_first_leg: Channel;
    destination_link_second_leg: Channel;
    destination_threeway_channel: Channel;
    destination_threeway_bridge: Bridge;
}
export interface ChannelCreated extends Event {
    /* Properties */
    channel: Channel;
}
export interface ChannelDestroyed extends Event {
    /* Properties */
    cause: number;
    cause_txt: string;
    channel: Channel;
}
export interface ChannelEnteredBridge extends Event {
    /* Properties */
    bridge: Bridge;
    channel: Channel;
}
export interface ChannelLeftBridge extends Event {
    /* Properties */
    bridge: Bridge;
    channel: Channel;
}
export interface ChannelStateChange extends Event {
    /* Properties */
    channel: Channel;
}
export interface ChannelDtmfReceived extends Event {
    /* Properties */
    digit: string;
    duration_ms: number;
    channel: Channel;
}
export interface ChannelDialplan extends Event {
    /* Properties */
    channel: Channel;
    dialplan_app: string;
    dialplan_app_data: string;
}
export interface ChannelCallerId extends Event {
    /* Properties */
    caller_presentation: number;
    caller_presentation_txt: string;
    channel: Channel;
}
export interface ChannelUserevent extends Event {
    /* Properties */
    eventname: string;
    channel?: Channel;
    bridge?: Bridge;
    endpoint?: Endpoint;
    userevent: object;
}
export interface ChannelHangupRequest extends Event {
    /* Properties */
    cause: number;
    soft: boolean;
    channel: Channel;
}
export interface ChannelVarset extends Event {
    /* Properties */
    variable: string;
    value: string;
    channel?: Channel;
}
export interface ChannelHold extends Event {
    /* Properties */
    channel: Channel;
    musicclass?: string;
}
export interface ChannelUnhold extends Event {
    /* Properties */
    channel: Channel;
}
export interface ChannelTalkingStarted extends Event {
    /* Properties */
    channel: Channel;
}
export interface ChannelTalkingFinished extends Event {
    /* Properties */
    channel: Channel;
    duration: number;
}
export interface ContactStatusChange extends Event {
    /* Properties */
    endpoint: Endpoint;
    contact_info: ContactInfo;
}
export interface PeerStatusChange extends Event {
    /* Properties */
    endpoint: Endpoint;
    peer: Peer;
}
export interface EndpointStateChange extends Event {
    /* Properties */
    endpoint: Endpoint;
}
export interface Dial extends Event {
    /* Properties */
    caller?: Channel;
    peer: Channel;
    forward?: string;
    forwarded?: Channel;
    dialstring?: string;
    dialstatus: string;
}
export interface StasisEnd extends Event {
    /* Properties */
    channel: Channel;
}
export interface StasisStart extends Event {
    /* Properties */
    args: string | string[];
    channel: Channel;
    replace_channel?: Channel;
}
export interface TextMessageReceived extends Event {
    /* Properties */
    message: TextMessage;
    endpoint?: Endpoint;
}
export interface ChannelConnectedLine extends Event {
    /* Properties */
    channel: Channel;
}
export interface Resource {
    on(event: MessageEventType, callback: (event: Message, instances: Message) => void): void;
    on(event: MissingParamsEventType, callback: (event: MissingParams, instances: MissingParams) => void): void;
    on(event: EventEventType, callback: (event: Event, instances: Event) => void): void;
    on(event: ContactInfoEventType, callback: (event: ContactInfo, instances: ContactInfo) => void): void;
    on(event: PeerEventType, callback: (event: Peer, instances: Peer) => void): void;
    on(
        event: DeviceStateChangedEventType,
        callback: (event: DeviceStateChanged, devicestate: DeviceState) => void,
    ): void;
    on(event: PlaybackStartedEventType, callback: (event: PlaybackStarted, playback: Playback) => void): void;
    on(event: PlaybackContinuingEventType, callback: (event: PlaybackContinuing, playback: Playback) => void): void;
    on(event: PlaybackFinishedEventType, callback: (event: PlaybackFinished, playback: Playback) => void): void;
    on(
        event: RecordingStartedEventType,
        callback: (event: RecordingStarted, liverecording: LiveRecording) => void,
    ): void;
    on(
        event: RecordingFinishedEventType,
        callback: (event: RecordingFinished, liverecording: LiveRecording) => void,
    ): void;
    on(event: RecordingFailedEventType, callback: (event: RecordingFailed, liverecording: LiveRecording) => void): void;
    on(event: ApplicationMoveFailedEventType, callback: (event: ApplicationMoveFailed, channel: Channel) => void): void;
    on(event: ApplicationReplacedEventType, callback: (event: Event) => void): void;
    on(event: BridgeCreatedEventType, callback: (event: BridgeCreated, bridge: Bridge) => void): void;
    on(event: BridgeDestroyedEventType, callback: (event: BridgeDestroyed, bridge: Bridge) => void): void;
    on(event: BridgeMergedEventType, callback: (event: BridgeMerged, bridge: Bridge) => void): void;
    on(
        event: BridgeVideoSourceChangedEventType,
        callback: (event: BridgeVideoSourceChanged, bridge: Bridge) => void,
    ): void;
    on(
        event: BridgeBlindTransferEventType,
        callback: (event: BridgeBlindTransfer, instances: BridgeBlindTransfer) => void,
    ): void;
    on(
        event: BridgeAttendedTransferEventType,
        callback: (event: BridgeAttendedTransfer, instances: BridgeAttendedTransfer) => void,
    ): void;
    on(event: ChannelCreatedEventType, callback: (event: ChannelCreated, channel: Channel) => void): void;
    on(event: ChannelDestroyedEventType, callback: (event: ChannelDestroyed, channel: Channel) => void): void;
    on(
        event: ChannelEnteredBridgeEventType,
        callback: (event: ChannelEnteredBridge, instances: ChannelEnteredBridge) => void,
    ): void;
    on(
        event: ChannelLeftBridgeEventType,
        callback: (event: ChannelLeftBridge, instances: ChannelLeftBridge) => void,
    ): void;
    on(event: ChannelStateChangeEventType, callback: (event: ChannelStateChange, channel: Channel) => void): void;
    on(event: ChannelDtmfReceivedEventType, callback: (event: ChannelDtmfReceived, channel: Channel) => void): void;
    on(event: ChannelDialplanEventType, callback: (event: ChannelDialplan, channel: Channel) => void): void;
    on(event: ChannelCallerIdEventType, callback: (event: ChannelCallerId, channel: Channel) => void): void;
    on(
        event: ChannelUsereventEventType,
        callback: (event: ChannelUserevent, instances: ChannelUserevent) => void,
    ): void;
    on(event: ChannelHangupRequestEventType, callback: (event: ChannelHangupRequest, channel: Channel) => void): void;
    on(event: ChannelVarsetEventType, callback: (event: ChannelVarset, channel: Channel) => void): void;
    on(event: ChannelHoldEventType, callback: (event: ChannelHold, channel: Channel) => void): void;
    on(event: ChannelUnholdEventType, callback: (event: ChannelUnhold, channel: Channel) => void): void;
    on(event: ChannelTalkingStartedEventType, callback: (event: ChannelTalkingStarted, channel: Channel) => void): void;
    on(
        event: ChannelTalkingFinishedEventType,
        callback: (event: ChannelTalkingFinished, channel: Channel) => void,
    ): void;
    on(event: ContactStatusChangeEventType, callback: (event: ContactStatusChange, endpoint: Endpoint) => void): void;
    on(event: PeerStatusChangeEventType, callback: (event: PeerStatusChange, endpoint: Endpoint) => void): void;
    on(event: EndpointStateChangeEventType, callback: (event: EndpointStateChange, endpoint: Endpoint) => void): void;
    on(event: DialEventType, callback: (event: Dial, channel: Channel) => void): void;
    on(event: StasisEndEventType, callback: (event: StasisEnd, channel: Channel) => void): void;
    on(event: StasisStartEventType, callback: (event: StasisStart, channel: Channel) => void): void;
    on(event: TextMessageReceivedEventType, callback: (event: TextMessageReceived, endpoint: Endpoint) => void): void;
    on(event: ChannelConnectedLineEventType, callback: (event: ChannelConnectedLine, channel: Channel) => void): void;
    once(event: MessageEventType, callback: (event: Message, instances: Message) => void): void;
    once(event: MissingParamsEventType, callback: (event: MissingParams, instances: MissingParams) => void): void;
    once(event: EventEventType, callback: (event: Event, instances: Event) => void): void;
    once(event: ContactInfoEventType, callback: (event: ContactInfo, instances: ContactInfo) => void): void;
    once(event: PeerEventType, callback: (event: Peer, instances: Peer) => void): void;
    once(
        event: DeviceStateChangedEventType,
        callback: (event: DeviceStateChanged, devicestate: DeviceState) => void,
    ): void;
    once(event: PlaybackStartedEventType, callback: (event: PlaybackStarted, playback: Playback) => void): void;
    once(event: PlaybackContinuingEventType, callback: (event: PlaybackContinuing, playback: Playback) => void): void;
    once(event: PlaybackFinishedEventType, callback: (event: PlaybackFinished, playback: Playback) => void): void;
    once(
        event: RecordingStartedEventType,
        callback: (event: RecordingStarted, liverecording: LiveRecording) => void,
    ): void;
    once(
        event: RecordingFinishedEventType,
        callback: (event: RecordingFinished, liverecording: LiveRecording) => void,
    ): void;
    once(
        event: RecordingFailedEventType,
        callback: (event: RecordingFailed, liverecording: LiveRecording) => void,
    ): void;
    once(
        event: ApplicationMoveFailedEventType,
        callback: (event: ApplicationMoveFailed, channel: Channel) => void,
    ): void;
    once(event: ApplicationReplacedEventType, callback: (event: Event) => void): void;
    once(event: BridgeCreatedEventType, callback: (event: BridgeCreated, bridge: Bridge) => void): void;
    once(event: BridgeDestroyedEventType, callback: (event: BridgeDestroyed, bridge: Bridge) => void): void;
    once(event: BridgeMergedEventType, callback: (event: BridgeMerged, bridge: Bridge) => void): void;
    once(
        event: BridgeVideoSourceChangedEventType,
        callback: (event: BridgeVideoSourceChanged, bridge: Bridge) => void,
    ): void;
    once(
        event: BridgeBlindTransferEventType,
        callback: (event: BridgeBlindTransfer, instances: BridgeBlindTransfer) => void,
    ): void;
    once(
        event: BridgeAttendedTransferEventType,
        callback: (event: BridgeAttendedTransfer, instances: BridgeAttendedTransfer) => void,
    ): void;
    once(event: ChannelCreatedEventType, callback: (event: ChannelCreated, channel: Channel) => void): void;
    once(event: ChannelDestroyedEventType, callback: (event: ChannelDestroyed, channel: Channel) => void): void;
    once(
        event: ChannelEnteredBridgeEventType,
        callback: (event: ChannelEnteredBridge, instances: ChannelEnteredBridge) => void,
    ): void;
    once(
        event: ChannelLeftBridgeEventType,
        callback: (event: ChannelLeftBridge, instances: ChannelLeftBridge) => void,
    ): void;
    once(event: ChannelStateChangeEventType, callback: (event: ChannelStateChange, channel: Channel) => void): void;
    once(event: ChannelDtmfReceivedEventType, callback: (event: ChannelDtmfReceived, channel: Channel) => void): void;
    once(event: ChannelDialplanEventType, callback: (event: ChannelDialplan, channel: Channel) => void): void;
    once(event: ChannelCallerIdEventType, callback: (event: ChannelCallerId, channel: Channel) => void): void;
    once(
        event: ChannelUsereventEventType,
        callback: (event: ChannelUserevent, instances: ChannelUserevent) => void,
    ): void;
    once(event: ChannelHangupRequestEventType, callback: (event: ChannelHangupRequest, channel: Channel) => void): void;
    once(event: ChannelVarsetEventType, callback: (event: ChannelVarset, channel: Channel) => void): void;
    once(event: ChannelHoldEventType, callback: (event: ChannelHold, channel: Channel) => void): void;
    once(event: ChannelUnholdEventType, callback: (event: ChannelUnhold, channel: Channel) => void): void;
    once(
        event: ChannelTalkingStartedEventType,
        callback: (event: ChannelTalkingStarted, channel: Channel) => void,
    ): void;
    once(
        event: ChannelTalkingFinishedEventType,
        callback: (event: ChannelTalkingFinished, channel: Channel) => void,
    ): void;
    once(event: ContactStatusChangeEventType, callback: (event: ContactStatusChange, endpoint: Endpoint) => void): void;
    once(event: PeerStatusChangeEventType, callback: (event: PeerStatusChange, endpoint: Endpoint) => void): void;
    once(event: EndpointStateChangeEventType, callback: (event: EndpointStateChange, endpoint: Endpoint) => void): void;
    once(event: DialEventType, callback: (event: Dial, channel: Channel) => void): void;
    once(event: StasisEndEventType, callback: (event: StasisEnd, channel: Channel) => void): void;
    once(event: StasisStartEventType, callback: (event: StasisStart, channel: Channel) => void): void;
    once(event: TextMessageReceivedEventType, callback: (event: TextMessageReceived, endpoint: Endpoint) => void): void;
    once(event: ChannelConnectedLineEventType, callback: (event: ChannelConnectedLine, channel: Channel) => void): void;
    addListener(event: MessageEventType, callback: (event: Message, instances: Message) => void): void;
    addListener(
        event: MissingParamsEventType,
        callback: (event: MissingParams, instances: MissingParams) => void,
    ): void;
    addListener(event: EventEventType, callback: (event: Event, instances: Event) => void): void;
    addListener(event: ContactInfoEventType, callback: (event: ContactInfo, instances: ContactInfo) => void): void;
    addListener(event: PeerEventType, callback: (event: Peer, instances: Peer) => void): void;
    addListener(
        event: DeviceStateChangedEventType,
        callback: (event: DeviceStateChanged, devicestate: DeviceState) => void,
    ): void;
    addListener(event: PlaybackStartedEventType, callback: (event: PlaybackStarted, playback: Playback) => void): void;
    addListener(
        event: PlaybackContinuingEventType,
        callback: (event: PlaybackContinuing, playback: Playback) => void,
    ): void;
    addListener(
        event: PlaybackFinishedEventType,
        callback: (event: PlaybackFinished, playback: Playback) => void,
    ): void;
    addListener(
        event: RecordingStartedEventType,
        callback: (event: RecordingStarted, liverecording: LiveRecording) => void,
    ): void;
    addListener(
        event: RecordingFinishedEventType,
        callback: (event: RecordingFinished, liverecording: LiveRecording) => void,
    ): void;
    addListener(
        event: RecordingFailedEventType,
        callback: (event: RecordingFailed, liverecording: LiveRecording) => void,
    ): void;
    addListener(
        event: ApplicationMoveFailedEventType,
        callback: (event: ApplicationMoveFailed, channel: Channel) => void,
    ): void;
    addListener(event: ApplicationReplacedEventType, callback: (event: Event) => void): void;
    addListener(event: BridgeCreatedEventType, callback: (event: BridgeCreated, bridge: Bridge) => void): void;
    addListener(event: BridgeDestroyedEventType, callback: (event: BridgeDestroyed, bridge: Bridge) => void): void;
    addListener(event: BridgeMergedEventType, callback: (event: BridgeMerged, bridge: Bridge) => void): void;
    addListener(
        event: BridgeVideoSourceChangedEventType,
        callback: (event: BridgeVideoSourceChanged, bridge: Bridge) => void,
    ): void;
    addListener(
        event: BridgeBlindTransferEventType,
        callback: (event: BridgeBlindTransfer, instances: BridgeBlindTransfer) => void,
    ): void;
    addListener(
        event: BridgeAttendedTransferEventType,
        callback: (event: BridgeAttendedTransfer, instances: BridgeAttendedTransfer) => void,
    ): void;
    addListener(event: ChannelCreatedEventType, callback: (event: ChannelCreated, channel: Channel) => void): void;
    addListener(event: ChannelDestroyedEventType, callback: (event: ChannelDestroyed, channel: Channel) => void): void;
    addListener(
        event: ChannelEnteredBridgeEventType,
        callback: (event: ChannelEnteredBridge, instances: ChannelEnteredBridge) => void,
    ): void;
    addListener(
        event: ChannelLeftBridgeEventType,
        callback: (event: ChannelLeftBridge, instances: ChannelLeftBridge) => void,
    ): void;
    addListener(
        event: ChannelStateChangeEventType,
        callback: (event: ChannelStateChange, channel: Channel) => void,
    ): void;
    addListener(
        event: ChannelDtmfReceivedEventType,
        callback: (event: ChannelDtmfReceived, channel: Channel) => void,
    ): void;
    addListener(event: ChannelDialplanEventType, callback: (event: ChannelDialplan, channel: Channel) => void): void;
    addListener(event: ChannelCallerIdEventType, callback: (event: ChannelCallerId, channel: Channel) => void): void;
    addListener(
        event: ChannelUsereventEventType,
        callback: (event: ChannelUserevent, instances: ChannelUserevent) => void,
    ): void;
    addListener(
        event: ChannelHangupRequestEventType,
        callback: (event: ChannelHangupRequest, channel: Channel) => void,
    ): void;
    addListener(event: ChannelVarsetEventType, callback: (event: ChannelVarset, channel: Channel) => void): void;
    addListener(event: ChannelHoldEventType, callback: (event: ChannelHold, channel: Channel) => void): void;
    addListener(event: ChannelUnholdEventType, callback: (event: ChannelUnhold, channel: Channel) => void): void;
    addListener(
        event: ChannelTalkingStartedEventType,
        callback: (event: ChannelTalkingStarted, channel: Channel) => void,
    ): void;
    addListener(
        event: ChannelTalkingFinishedEventType,
        callback: (event: ChannelTalkingFinished, channel: Channel) => void,
    ): void;
    addListener(
        event: ContactStatusChangeEventType,
        callback: (event: ContactStatusChange, endpoint: Endpoint) => void,
    ): void;
    addListener(
        event: PeerStatusChangeEventType,
        callback: (event: PeerStatusChange, endpoint: Endpoint) => void,
    ): void;
    addListener(
        event: EndpointStateChangeEventType,
        callback: (event: EndpointStateChange, endpoint: Endpoint) => void,
    ): void;
    addListener(event: DialEventType, callback: (event: Dial, channel: Channel) => void): void;
    addListener(event: StasisEndEventType, callback: (event: StasisEnd, channel: Channel) => void): void;
    addListener(event: StasisStartEventType, callback: (event: StasisStart, channel: Channel) => void): void;
    addListener(
        event: TextMessageReceivedEventType,
        callback: (event: TextMessageReceived, endpoint: Endpoint) => void,
    ): void;
    addListener(
        event: ChannelConnectedLineEventType,
        callback: (event: ChannelConnectedLine, channel: Channel) => void,
    ): void;
    removeListener(event: AnyEventType, handler: (...args: any[]) => void): void;
    removeAllListeners(event?: AnyEventType): void;
}
export interface Applications {
    /* Methods */
    list(callback: (err: Error, applications: Application[]) => void): void;
    list(): Promise<Application[]>;
    get(params: { applicationName: string }, callback: (err: Error, application: Application) => void): void;
    get(params: { applicationName: string }): Promise<Application>;
    subscribe(
        params: { applicationName: string; eventSource: string | string[] },
        callback: (err: Error, application: Application) => void,
    ): void;
    subscribe(params: { applicationName: string; eventSource: string | string[] }): Promise<Application>;
    unsubscribe(
        params: { applicationName: string; eventSource: string | string[] },
        callback: (err: Error, application: Application) => void,
    ): void;
    unsubscribe(params: { applicationName: string; eventSource: string | string[] }): Promise<Application>;
    filter(
        params: { applicationName: string; filter?: object },
        callback: (err: Error, application: Application) => void,
    ): void;
    filter(params: { applicationName: string; filter?: object }): Promise<Application>;
}
export interface Application extends Resource {
    /* Properties */
    name: string;
    channel_ids: string | string[];
    bridge_ids: string | string[];
    endpoint_ids: string | string[];
    device_names: string | string[];
    events_allowed: object | object[];
    events_disallowed: object | object[];
    /* Methods */
    list(callback: (err: Error, applications: Application[]) => void): void;
    list(): Promise<Application[]>;
    get(callback: (err: Error, application: Application) => void): void;
    get(): Promise<Application>;
    subscribe(
        params: { eventSource: string | string[] },
        callback: (err: Error, application: Application) => void,
    ): void;
    subscribe(params: { eventSource: string | string[] }): Promise<Application>;
    unsubscribe(
        params: { eventSource: string | string[] },
        callback: (err: Error, application: Application) => void,
    ): void;
    unsubscribe(params: { eventSource: string | string[] }): Promise<Application>;
    filter(params: { filter?: object }, callback: (err: Error, application: Application) => void): void;
    filter(callback: (err: Error, application: Application) => void): void;
    filter(params?: { filter?: object }): Promise<Application>;
}
export interface Asterisk {
    /* Methods */
    getObject(
        params: { configClass: string; objectType: string; id: string },
        callback: (err: Error, configtuples: ConfigTuple[]) => void,
    ): void;
    getObject(params: { configClass: string; objectType: string; id: string }): Promise<ConfigTuple[]>;
    updateObject(
        params: { configClass: string; objectType: string; id: string; fields?: Containers },
        callback: (err: Error, configtuples: ConfigTuple[]) => void,
    ): void;
    updateObject(params: {
        configClass: string;
        objectType: string;
        id: string;
        fields?: Containers;
    }): Promise<ConfigTuple[]>;
    deleteObject(params: { configClass: string; objectType: string; id: string }, callback: (err: Error) => void): void;
    deleteObject(params: { configClass: string; objectType: string; id: string }): Promise<void>;
    getInfo(params: { only?: string | string[] }, callback: (err: Error, asteriskinfo: AsteriskInfo) => void): void;
    getInfo(callback: (err: Error, asteriskinfo: AsteriskInfo) => void): void;
    getInfo(params?: { only?: string | string[] }): Promise<AsteriskInfo>;
    ping(callback: (err: Error, asteriskping: AsteriskPing) => void): void;
    ping(): Promise<AsteriskPing>;
    listModules(callback: (err: Error, modules: Module[]) => void): void;
    listModules(): Promise<Module[]>;
    getModule(params: { moduleName: string }, callback: (err: Error, module: Module) => void): void;
    getModule(params: { moduleName: string }): Promise<Module>;
    loadModule(params: { moduleName: string }, callback: (err: Error) => void): void;
    loadModule(params: { moduleName: string }): Promise<void>;
    unloadModule(params: { moduleName: string }, callback: (err: Error) => void): void;
    unloadModule(params: { moduleName: string }): Promise<void>;
    reloadModule(params: { moduleName: string }, callback: (err: Error) => void): void;
    reloadModule(params: { moduleName: string }): Promise<void>;
    listLogChannels(callback: (err: Error, logchannels: LogChannel[]) => void): void;
    listLogChannels(): Promise<LogChannel[]>;
    addLog(params: { logChannelName: string; configuration: string }, callback: (err: Error) => void): void;
    addLog(params: { logChannelName: string; configuration: string }): Promise<void>;
    deleteLog(params: { logChannelName: string }, callback: (err: Error) => void): void;
    deleteLog(params: { logChannelName: string }): Promise<void>;
    rotateLog(params: { logChannelName: string }, callback: (err: Error) => void): void;
    rotateLog(params: { logChannelName: string }): Promise<void>;
    getGlobalVar(params: { variable: string }, callback: (err: Error, variable: Variable) => void): void;
    getGlobalVar(params: { variable: string }): Promise<Variable>;
    setGlobalVar(params: { variable: string; value?: string }, callback: (err: Error) => void): void;
    setGlobalVar(params: { variable: string; value?: string }): Promise<void>;
}
export interface BuildInfo {
    /* Properties */
    os: string;
    kernel: string;
    options: string;
    machine: string;
    date: string;
    user: string;
}
export interface SystemInfo {
    /* Properties */
    version: string;
    entity_id: string;
}
export interface SetId {
    /* Properties */
    user: string;
    group: string;
}
export interface ConfigInfo {
    /* Properties */
    name: string;
    default_language: string;
    max_channels?: number;
    max_open_files?: number;
    max_load?: number;
    setid: SetId;
}
export interface StatusInfo {
    /* Properties */
    startup_time: Date;
    last_reload_time: Date;
}
export interface AsteriskInfo {
    /* Properties */
    build?: BuildInfo;
    system?: SystemInfo;
    config?: ConfigInfo;
    status?: StatusInfo;
}
export interface AsteriskPing {
    /* Properties */
    asterisk_id: string;
    ping: string;
    timestamp: string;
}
export interface Module {
    /* Properties */
    name: string;
    description: string;
    use_count: number;
    status: string;
    support_level: string;
}
export interface LogChannel {
    /* Properties */
    channel: string;
    type: string;
    status: string;
    configuration: string;
}
export interface Variable {
    /* Properties */
    value: string;
}
export interface ConfigTuple {
    /* Properties */
    attribute: string;
    value: string;
}
export interface Bridges {
    /* Methods */
    list(callback: (err: Error, bridges: Bridge[]) => void): void;
    list(): Promise<Bridge[]>;
    create(
        params: { type?: string; bridgeId?: string; name?: string },
        callback: (err: Error, bridge: Bridge) => void,
    ): void;
    create(callback: (err: Error, bridge: Bridge) => void): void;
    create(params?: { type?: string; bridgeId?: string; name?: string }): Promise<Bridge>;
    createWithId(
        params: { type?: string; bridgeId: string; name?: string },
        callback: (err: Error, bridge: Bridge) => void,
    ): void;
    createWithId(params: { type?: string; bridgeId: string; name?: string }): Promise<Bridge>;
    get(params: { bridgeId: string }, callback: (err: Error, bridge: Bridge) => void): void;
    get(params: { bridgeId: string }): Promise<Bridge>;
    destroy(params: { bridgeId: string }, callback: (err: Error) => void): void;
    destroy(params: { bridgeId: string }): Promise<void>;
    addChannel(
        params: { bridgeId: string; channel: string | string[]; role?: string; absorbDTMF?: boolean; mute?: boolean },
        callback: (err: Error) => void,
    ): void;
    addChannel(params: {
        bridgeId: string;
        channel: string | string[];
        role?: string;
        absorbDTMF?: boolean;
        mute?: boolean;
    }): Promise<void>;
    removeChannel(params: { bridgeId: string; channel: string | string[] }, callback: (err: Error) => void): void;
    removeChannel(params: { bridgeId: string; channel: string | string[] }): Promise<void>;
    setVideoSource(params: { bridgeId: string; channelId: string }, callback: (err: Error) => void): void;
    setVideoSource(params: { bridgeId: string; channelId: string }): Promise<void>;
    clearVideoSource(params: { bridgeId: string }, callback: (err: Error) => void): void;
    clearVideoSource(params: { bridgeId: string }): Promise<void>;
    startMoh(params: { bridgeId: string; mohClass?: string }, callback: (err: Error) => void): void;
    startMoh(params: { bridgeId: string; mohClass?: string }): Promise<void>;
    stopMoh(params: { bridgeId: string }, callback: (err: Error) => void): void;
    stopMoh(params: { bridgeId: string }): Promise<void>;
    play(
        params: {
            bridgeId: string;
            media: string | string[];
            lang?: string;
            offsetms?: number;
            skipms?: number;
            playbackId?: string;
        },
        callback: (err: Error, playback: Playback) => void,
    ): void;
    play(params: {
        bridgeId: string;
        media: string | string[];
        lang?: string;
        offsetms?: number;
        skipms?: number;
        playbackId?: string;
    }): Promise<Playback>;
    playWithId(
        params: {
            bridgeId: string;
            playbackId: string;
            media: string | string[];
            lang?: string;
            offsetms?: number;
            skipms?: number;
        },
        callback: (err: Error, playback: Playback) => void,
    ): void;
    playWithId(params: {
        bridgeId: string;
        playbackId: string;
        media: string | string[];
        lang?: string;
        offsetms?: number;
        skipms?: number;
    }): Promise<Playback>;
    record(
        params: {
            bridgeId: string;
            name: string;
            format: string;
            maxDurationSeconds?: number;
            maxSilenceSeconds?: number;
            ifExists?: string;
            beep?: boolean;
            terminateOn?: string;
        },
        callback: (err: Error, liverecording: LiveRecording) => void,
    ): void;
    record(params: {
        bridgeId: string;
        name: string;
        format: string;
        maxDurationSeconds?: number;
        maxSilenceSeconds?: number;
        ifExists?: string;
        beep?: boolean;
        terminateOn?: string;
    }): Promise<LiveRecording>;
}
export interface Bridge extends Resource {
    /* Properties */
    id: string;
    technology: string;
    bridge_type: string;
    bridge_class: string;
    creator: string;
    name: string;
    channels: string | string[];
    video_mode?: string;
    video_source_id?: string;
    creationtime: Date;
    /* Methods */
    list(callback: (err: Error, bridges: Bridge[]) => void): void;
    list(): Promise<Bridge[]>;
    create(params: { type?: string; name?: string }, callback: (err: Error, bridge: Bridge) => void): void;
    create(callback: (err: Error, bridge: Bridge) => void): void;
    create(params?: { type?: string; name?: string }): Promise<Bridge>;
    createWithId(params: { type?: string; name?: string }, callback: (err: Error, bridge: Bridge) => void): void;
    createWithId(callback: (err: Error, bridge: Bridge) => void): void;
    createWithId(params?: { type?: string; name?: string }): Promise<Bridge>;
    get(callback: (err: Error, bridge: Bridge) => void): void;
    get(): Promise<Bridge>;
    destroy(callback: (err: Error) => void): void;
    destroy(): Promise<void>;
    addChannel(
        params: { channel: string | string[]; role?: string; absorbDTMF?: boolean; mute?: boolean },
        callback: (err: Error) => void,
    ): void;
    addChannel(params: {
        channel: string | string[];
        role?: string;
        absorbDTMF?: boolean;
        mute?: boolean;
    }): Promise<void>;
    removeChannel(params: { channel: string | string[] }, callback: (err: Error) => void): void;
    removeChannel(params: { channel: string | string[] }): Promise<void>;
    setVideoSource(params: { channelId: string }, callback: (err: Error) => void): void;
    setVideoSource(params: { channelId: string }): Promise<void>;
    clearVideoSource(callback: (err: Error) => void): void;
    clearVideoSource(): Promise<void>;
    startMoh(params: { mohClass?: string }, callback: (err: Error) => void): void;
    startMoh(callback: (err: Error) => void): void;
    startMoh(params?: { mohClass?: string }): Promise<void>;
    stopMoh(callback: (err: Error) => void): void;
    stopMoh(): Promise<void>;
    play(
        params: { media: string | string[]; lang?: string; offsetms?: number; skipms?: number; playbackId?: string },
        callback: (err: Error, playback: Playback) => void,
    ): void;
    play(params: {
        media: string | string[];
        lang?: string;
        offsetms?: number;
        skipms?: number;
        playbackId?: string;
    }): Promise<Playback>;
    playWithId(
        params: { playbackId: string; media: string | string[]; lang?: string; offsetms?: number; skipms?: number },
        callback: (err: Error, playback: Playback) => void,
    ): void;
    playWithId(params: {
        playbackId: string;
        media: string | string[];
        lang?: string;
        offsetms?: number;
        skipms?: number;
    }): Promise<Playback>;
    record(
        params: {
            name: string;
            format: string;
            maxDurationSeconds?: number;
            maxSilenceSeconds?: number;
            ifExists?: string;
            beep?: boolean;
            terminateOn?: string;
        },
        recording: LiveRecording,
        callback: (err: Error, liverecording: LiveRecording) => void,
    ): void;
    record(
        params: {
            name: string;
            format: string;
            maxDurationSeconds?: number;
            maxSilenceSeconds?: number;
            ifExists?: string;
            beep?: boolean;
            terminateOn?: string;
        },
        recording: LiveRecording,
    ): Promise<LiveRecording>;
}
export interface Channels {
    /* Methods */
    list(callback: (err: Error, channels: Channel[]) => void): void;
    list(): Promise<Channel[]>;
    originate(
        params: {
            endpoint: string;
            extension?: string;
            context?: string;
            priority?: number;
            label?: string;
            app?: string;
            appArgs?: string;
            callerId?: string;
            timeout?: number;
            variables?: Containers;
            channelId?: string;
            otherChannelId?: string;
            originator?: string;
            formats?: string;
        },
        callback: (err: Error, channel: Channel) => void,
    ): void;
    originate(params: {
        endpoint: string;
        extension?: string;
        context?: string;
        priority?: number;
        label?: string;
        app?: string;
        appArgs?: string;
        callerId?: string;
        timeout?: number;
        variables?: Containers;
        channelId?: string;
        otherChannelId?: string;
        originator?: string;
        formats?: string;
    }): Promise<Channel>;
    create(
        params: {
            endpoint: string;
            app: string;
            appArgs?: string;
            channelId?: string;
            otherChannelId?: string;
            originator?: string;
            formats?: string;
        },
        callback: (err: Error, channel: Channel) => void,
    ): void;
    create(params: {
        endpoint: string;
        app: string;
        appArgs?: string;
        channelId?: string;
        otherChannelId?: string;
        originator?: string;
        formats?: string;
    }): Promise<Channel>;
    get(params: { channelId: string }, callback: (err: Error, channel: Channel) => void): void;
    get(params: { channelId: string }): Promise<Channel>;
    originateWithId(
        params: {
            channelId: string;
            endpoint: string;
            extension?: string;
            context?: string;
            priority?: number;
            label?: string;
            app?: string;
            appArgs?: string;
            callerId?: string;
            timeout?: number;
            variables?: Containers;
            otherChannelId?: string;
            originator?: string;
            formats?: string;
        },
        callback: (err: Error, channel: Channel) => void,
    ): void;
    originateWithId(params: {
        channelId: string;
        endpoint: string;
        extension?: string;
        context?: string;
        priority?: number;
        label?: string;
        app?: string;
        appArgs?: string;
        callerId?: string;
        timeout?: number;
        variables?: Containers;
        otherChannelId?: string;
        originator?: string;
        formats?: string;
    }): Promise<Channel>;
    hangup(params: { channelId: string; reason?: string }, callback: (err: Error) => void): void;
    hangup(params: { channelId: string; reason?: string }): Promise<void>;
    continueInDialplan(
        params: { channelId: string; context?: string; extension?: string; priority?: number; label?: string },
        callback: (err: Error) => void,
    ): void;
    continueInDialplan(params: {
        channelId: string;
        context?: string;
        extension?: string;
        priority?: number;
        label?: string;
    }): Promise<void>;
    move(params: { channelId: string; app: string; appArgs?: string }, callback: (err: Error) => void): void;
    move(params: { channelId: string; app: string; appArgs?: string }): Promise<void>;
    redirect(params: { channelId: string; endpoint: string }, callback: (err: Error) => void): void;
    redirect(params: { channelId: string; endpoint: string }): Promise<void>;
    answer(params: { channelId: string }, callback: (err: Error) => void): void;
    answer(params: { channelId: string }): Promise<void>;
    ring(params: { channelId: string }, callback: (err: Error) => void): void;
    ring(params: { channelId: string }): Promise<void>;
    ringStop(params: { channelId: string }, callback: (err: Error) => void): void;
    ringStop(params: { channelId: string }): Promise<void>;
    sendDTMF(
        params: {
            channelId: string;
            dtmf?: string;
            before?: number;
            between?: number;
            duration?: number;
            after?: number;
        },
        callback: (err: Error) => void,
    ): void;
    sendDTMF(params: {
        channelId: string;
        dtmf?: string;
        before?: number;
        between?: number;
        duration?: number;
        after?: number;
    }): Promise<void>;
    mute(params: { channelId: string; direction?: string }, callback: (err: Error) => void): void;
    mute(params: { channelId: string; direction?: string }): Promise<void>;
    unmute(params: { channelId: string; direction?: string }, callback: (err: Error) => void): void;
    unmute(params: { channelId: string; direction?: string }): Promise<void>;
    hold(params: { channelId: string }, callback: (err: Error) => void): void;
    hold(params: { channelId: string }): Promise<void>;
    unhold(params: { channelId: string }, callback: (err: Error) => void): void;
    unhold(params: { channelId: string }): Promise<void>;
    startMoh(params: { channelId: string; mohClass?: string }, callback: (err: Error) => void): void;
    startMoh(params: { channelId: string; mohClass?: string }): Promise<void>;
    stopMoh(params: { channelId: string }, callback: (err: Error) => void): void;
    stopMoh(params: { channelId: string }): Promise<void>;
    startSilence(params: { channelId: string }, callback: (err: Error) => void): void;
    startSilence(params: { channelId: string }): Promise<void>;
    stopSilence(params: { channelId: string }, callback: (err: Error) => void): void;
    stopSilence(params: { channelId: string }): Promise<void>;
    play(
        params: {
            channelId: string;
            media: string | string[];
            lang?: string;
            offsetms?: number;
            skipms?: number;
            playbackId?: string;
        },
        callback: (err: Error, playback: Playback) => void,
    ): void;
    play(params: {
        channelId: string;
        media: string | string[];
        lang?: string;
        offsetms?: number;
        skipms?: number;
        playbackId?: string;
    }): Promise<Playback>;
    playWithId(
        params: {
            channelId: string;
            playbackId: string;
            media: string | string[];
            lang?: string;
            offsetms?: number;
            skipms?: number;
        },
        callback: (err: Error, playback: Playback) => void,
    ): void;
    playWithId(params: {
        channelId: string;
        playbackId: string;
        media: string | string[];
        lang?: string;
        offsetms?: number;
        skipms?: number;
    }): Promise<Playback>;
    record(
        params: {
            channelId: string;
            name: string;
            format: string;
            maxDurationSeconds?: number;
            maxSilenceSeconds?: number;
            ifExists?: string;
            beep?: boolean;
            terminateOn?: string;
        },
        callback: (err: Error, liverecording: LiveRecording) => void,
    ): void;
    record(params: {
        channelId: string;
        name: string;
        format: string;
        maxDurationSeconds?: number;
        maxSilenceSeconds?: number;
        ifExists?: string;
        beep?: boolean;
        terminateOn?: string;
    }): Promise<LiveRecording>;
    getChannelVar(
        params: { channelId: string; variable: string },
        callback: (err: Error, variable: Variable) => void,
    ): void;
    getChannelVar(params: { channelId: string; variable: string }): Promise<Variable>;
    setChannelVar(
        params: { channelId: string; variable: string; value?: string },
        callback: (err: Error) => void,
    ): void;
    setChannelVar(params: { channelId: string; variable: string; value?: string }): Promise<void>;
    snoopChannel(
        params: { channelId: string; spy?: string; whisper?: string; app: string; appArgs?: string; snoopId?: string },
        callback: (err: Error, channel: Channel) => void,
    ): void;
    snoopChannel(params: {
        channelId: string;
        spy?: string;
        whisper?: string;
        app: string;
        appArgs?: string;
        snoopId?: string;
    }): Promise<Channel>;
    snoopChannelWithId(
        params: { channelId: string; snoopId: string; spy?: string; whisper?: string; app: string; appArgs?: string },
        callback: (err: Error, channel: Channel) => void,
    ): void;
    snoopChannelWithId(params: {
        channelId: string;
        snoopId: string;
        spy?: string;
        whisper?: string;
        app: string;
        appArgs?: string;
    }): Promise<Channel>;
    dial(params: { channelId: string; caller?: string; timeout?: number }, callback: (err: Error) => void): void;
    dial(params: { channelId: string; caller?: string; timeout?: number }): Promise<void>;
    rtpstatistics(params: { channelId: string }, callback: (err: Error, rtpstat: RTPstat) => void): void;
    rtpstatistics(params: { channelId: string }): Promise<RTPstat>;
}
export interface DialplanCEP {
    /* Properties */
    context: string;
    exten: string;
    priority: number;
    app_name: string;
    app_data: string;
}
export interface CallerID {
    /* Properties */
    name: string;
    number: string;
}
export interface RTPstat {
    /* Properties */
    txcount: number;
    rxcount: number;
    txjitter?: number;
    rxjitter?: number;
    remote_maxjitter?: number;
    remote_minjitter?: number;
    remote_normdevjitter?: number;
    remote_stdevjitter?: number;
    local_maxjitter?: number;
    local_minjitter?: number;
    local_normdevjitter?: number;
    local_stdevjitter?: number;
    txploss: number;
    rxploss: number;
    remote_maxrxploss?: number;
    remote_minrxploss?: number;
    remote_normdevrxploss?: number;
    remote_stdevrxploss?: number;
    local_maxrxploss?: number;
    local_minrxploss?: number;
    local_normdevrxploss?: number;
    local_stdevrxploss?: number;
    rtt?: number;
    maxrtt?: number;
    minrtt?: number;
    normdevrtt?: number;
    stdevrtt?: number;
    local_ssrc: number;
    remote_ssrc: number;
    txoctetcount: number;
    rxoctetcount: number;
    channel_uniqueid: string;
}
export interface Channel extends Resource {
    /* Properties */
    id: string;
    name: string;
    state: string;
    caller: CallerID;
    connected: CallerID;
    accountcode: string;
    dialplan: DialplanCEP;
    creationtime: Date;
    language: string;
    channelvars?: object;
    /* Methods */
    list(callback: (err: Error, channels: Channel[]) => void): void;
    list(): Promise<Channel[]>;
    originate(
        params: {
            endpoint: string;
            extension?: string;
            context?: string;
            priority?: number;
            label?: string;
            app?: string;
            appArgs?: string;
            callerId?: string;
            timeout?: number;
            variables?: Containers;
            otherChannelId?: string;
            originator?: string;
            formats?: string;
        },
        callback: (err: Error, channel: Channel) => void,
    ): void;
    originate(params: {
        endpoint: string;
        extension?: string;
        context?: string;
        priority?: number;
        label?: string;
        app?: string;
        appArgs?: string;
        callerId?: string;
        timeout?: number;
        variables?: Containers;
        otherChannelId?: string;
        originator?: string;
        formats?: string;
    }): Promise<Channel>;
    create(
        params: {
            endpoint: string;
            app: string;
            appArgs?: string;
            otherChannelId?: string;
            originator?: string;
            formats?: string;
        },
        callback: (err: Error, channel: Channel) => void,
    ): void;
    create(params: {
        endpoint: string;
        app: string;
        appArgs?: string;
        otherChannelId?: string;
        originator?: string;
        formats?: string;
    }): Promise<Channel>;
    get(callback: (err: Error, channel: Channel) => void): void;
    get(): Promise<Channel>;
    originateWithId(
        params: {
            endpoint: string;
            extension?: string;
            context?: string;
            priority?: number;
            label?: string;
            app?: string;
            appArgs?: string;
            callerId?: string;
            timeout?: number;
            variables?: Containers;
            otherChannelId?: string;
            originator?: string;
            formats?: string;
        },
        callback: (err: Error, channel: Channel) => void,
    ): void;
    originateWithId(params: {
        endpoint: string;
        extension?: string;
        context?: string;
        priority?: number;
        label?: string;
        app?: string;
        appArgs?: string;
        callerId?: string;
        timeout?: number;
        variables?: Containers;
        otherChannelId?: string;
        originator?: string;
        formats?: string;
    }): Promise<Channel>;
    hangup(params: { reason?: string }, callback: (err: Error) => void): void;
    hangup(callback: (err: Error) => void): void;
    hangup(params?: { reason?: string }): Promise<void>;
    continueInDialplan(
        params: { context?: string; extension?: string; priority?: number; label?: string },
        callback: (err: Error) => void,
    ): void;
    continueInDialplan(callback: (err: Error) => void): void;
    continueInDialplan(params?: {
        context?: string;
        extension?: string;
        priority?: number;
        label?: string;
    }): Promise<void>;
    move(params: { app: string; appArgs?: string }, callback: (err: Error) => void): void;
    move(params: { app: string; appArgs?: string }): Promise<void>;
    redirect(params: { endpoint: string }, callback: (err: Error) => void): void;
    redirect(params: { endpoint: string }): Promise<void>;
    answer(callback: (err: Error) => void): void;
    answer(): Promise<void>;
    ring(callback: (err: Error) => void): void;
    ring(): Promise<void>;
    ringStop(callback: (err: Error) => void): void;
    ringStop(): Promise<void>;
    sendDTMF(
        params: { dtmf?: string; before?: number; between?: number; duration?: number; after?: number },
        callback: (err: Error) => void,
    ): void;
    sendDTMF(callback: (err: Error) => void): void;
    sendDTMF(params?: {
        dtmf?: string;
        before?: number;
        between?: number;
        duration?: number;
        after?: number;
    }): Promise<void>;
    mute(params: { direction?: string }, callback: (err: Error) => void): void;
    mute(callback: (err: Error) => void): void;
    mute(params?: { direction?: string }): Promise<void>;
    unmute(params: { direction?: string }, callback: (err: Error) => void): void;
    unmute(callback: (err: Error) => void): void;
    unmute(params?: { direction?: string }): Promise<void>;
    hold(callback: (err: Error) => void): void;
    hold(): Promise<void>;
    unhold(callback: (err: Error) => void): void;
    unhold(): Promise<void>;
    startMoh(params: { mohClass?: string }, callback: (err: Error) => void): void;
    startMoh(callback: (err: Error) => void): void;
    startMoh(params?: { mohClass?: string }): Promise<void>;
    stopMoh(callback: (err: Error) => void): void;
    stopMoh(): Promise<void>;
    startSilence(callback: (err: Error) => void): void;
    startSilence(): Promise<void>;
    stopSilence(callback: (err: Error) => void): void;
    stopSilence(): Promise<void>;
    play(
        params: { media: string | string[]; lang?: string; offsetms?: number; skipms?: number; playbackId?: string },
        playback: Playback,
        callback: (err: Error, playback: Playback) => void,
    ): void;
    play(
        params: { media: string | string[]; lang?: string; offsetms?: number; skipms?: number; playbackId?: string },
        playback: Playback,
    ): Promise<Playback>;
    playWithId(
        params: { playbackId: string; media: string | string[]; lang?: string; offsetms?: number; skipms?: number },
        callback: (err: Error, playback: Playback) => void,
    ): void;
    playWithId(params: {
        playbackId: string;
        media: string | string[];
        lang?: string;
        offsetms?: number;
        skipms?: number;
    }): Promise<Playback>;
    record(
        params: {
            name: string;
            format: string;
            maxDurationSeconds?: number;
            maxSilenceSeconds?: number;
            ifExists?: string;
            beep?: boolean;
            terminateOn?: string;
        },
        recording: LiveRecording,
        callback: (err: Error, liverecording: LiveRecording) => void,
    ): void;
    record(
        params: {
            name: string;
            format: string;
            maxDurationSeconds?: number;
            maxSilenceSeconds?: number;
            ifExists?: string;
            beep?: boolean;
            terminateOn?: string;
        },
        recording: LiveRecording,
    ): Promise<LiveRecording>;
    getChannelVar(params: { variable: string }, callback: (err: Error, variable: Variable) => void): void;
    getChannelVar(params: { variable: string }): Promise<Variable>;
    setChannelVar(params: { variable: string; value?: string }, callback: (err: Error) => void): void;
    setChannelVar(params: { variable: string; value?: string }): Promise<void>;
    snoopChannel(
        params: { spy?: string; whisper?: string; app: string; appArgs?: string; snoopId?: string },
        snoopChannel: Channel,
        callback: (err: Error, channel: Channel) => void,
    ): void;
    snoopChannel(
        params: { spy?: string; whisper?: string; app: string; appArgs?: string; snoopId?: string },
        snoopChannel: Channel,
    ): Promise<Channel>;
    snoopChannelWithId(
        params: { snoopId: string; spy?: string; whisper?: string; app: string; appArgs?: string },
        callback: (err: Error, channel: Channel) => void,
    ): void;
    snoopChannelWithId(params: {
        snoopId: string;
        spy?: string;
        whisper?: string;
        app: string;
        appArgs?: string;
    }): Promise<Channel>;
    dial(params: { caller?: string; timeout?: number }, callback: (err: Error) => void): void;
    dial(callback: (err: Error) => void): void;
    dial(params?: { caller?: string; timeout?: number }): Promise<void>;
    rtpstatistics(callback: (err: Error, rtpstat: RTPstat) => void): void;
    rtpstatistics(): Promise<RTPstat>;
}
export interface DeviceStates {
    /* Methods */
    list(callback: (err: Error, devicestates: DeviceState[]) => void): void;
    list(): Promise<DeviceState[]>;
    get(params: { deviceName: string }, callback: (err: Error, devicestate: DeviceState) => void): void;
    get(params: { deviceName: string }): Promise<DeviceState>;
    update(params: { deviceName: string; deviceState: string }, callback: (err: Error) => void): void;
    update(params: { deviceName: string; deviceState: string }): Promise<void>;
    delete(params: { deviceName: string }, callback: (err: Error) => void): void;
    delete(params: { deviceName: string }): Promise<void>;
}
export interface DeviceState extends Resource {
    /* Properties */
    name: string;
    state: string;
    /* Methods */
    list(callback: (err: Error, devicestates: DeviceState[]) => void): void;
    list(): Promise<DeviceState[]>;
    get(callback: (err: Error, devicestate: DeviceState) => void): void;
    get(): Promise<DeviceState>;
    update(params: { deviceState: string }, callback: (err: Error) => void): void;
    update(params: { deviceState: string }): Promise<void>;
    delete(callback: (err: Error) => void): void;
    delete(): Promise<void>;
}
export interface Endpoints {
    /* Methods */
    list(callback: (err: Error, endpoints: Endpoint[]) => void): void;
    list(): Promise<Endpoint[]>;
    sendMessage(
        params: { to: string; from: string; body?: string; variables?: Containers },
        callback: (err: Error) => void,
    ): void;
    sendMessage(params: { to: string; from: string; body?: string; variables?: Containers }): Promise<void>;
    listByTech(params: { tech: string }, callback: (err: Error, endpoints: Endpoint[]) => void): void;
    listByTech(callback: (err: Error, endpoints: Endpoint[]) => void): void;
    listByTech(params?: { tech: string }): Promise<Endpoint[]>;
    get(params: { tech: string; resource: string }, callback: (err: Error, endpoint: Endpoint) => void): void;
    get(callback: (err: Error, endpoint: Endpoint) => void): void;
    get(params?: { tech: string; resource: string }): Promise<Endpoint>;
    sendMessageToEndpoint(
        params: { tech: string; resource: string; from: string; body?: string; variables?: Containers },
        callback: (err: Error) => void,
    ): void;
    sendMessageToEndpoint(params: {
        tech: string;
        resource: string;
        from: string;
        body?: string;
        variables?: Containers;
    }): Promise<void>;
}
export interface Endpoint extends Resource {
    /* Properties */
    technology: string;
    resource: string;
    state?: string;
    channel_ids: string | string[];
    /* Methods */
    list(callback: (err: Error, endpoints: Endpoint[]) => void): void;
    list(): Promise<Endpoint[]>;
    sendMessage(
        params: { to: string; from: string; body?: string; variables?: Containers },
        callback: (err: Error) => void,
    ): void;
    sendMessage(params: { to: string; from: string; body?: string; variables?: Containers }): Promise<void>;
    listByTech(callback: (err: Error, endpoints: Endpoint[]) => void): void;
    listByTech(): Promise<Endpoint[]>;
    get(callback: (err: Error, endpoint: Endpoint) => void): void;
    get(): Promise<Endpoint>;
    sendMessageToEndpoint(
        params: { from: string; body?: string; variables?: Containers },
        callback: (err: Error) => void,
    ): void;
    sendMessageToEndpoint(params: { from: string; body?: string; variables?: Containers }): Promise<void>;
}
export interface TextMessageVariable {
    /* Properties */
    key: string;
    value: string;
}
export interface TextMessage {
    /* Properties */
    from: string;
    to: string;
    body: string;
    variables?: TextMessageVariable | TextMessageVariable[];
}
export interface Mailboxes {
    /* Methods */
    list(callback: (err: Error, mailboxs: Mailbox[]) => void): void;
    list(): Promise<Mailbox[]>;
    get(params: { mailboxName: string }, callback: (err: Error, mailbox: Mailbox) => void): void;
    get(params: { mailboxName: string }): Promise<Mailbox>;
    update(
        params: { mailboxName: string; oldMessages: number; newMessages: number },
        callback: (err: Error) => void,
    ): void;
    update(params: { mailboxName: string; oldMessages: number; newMessages: number }): Promise<void>;
    delete(params: { mailboxName: string }, callback: (err: Error) => void): void;
    delete(params: { mailboxName: string }): Promise<void>;
}
export interface Mailbox extends Resource {
    /* Properties */
    name: string;
    old_messages: number;
    new_messages: number;
    /* Methods */
    list(callback: (err: Error, mailboxs: Mailbox[]) => void): void;
    list(): Promise<Mailbox[]>;
    get(callback: (err: Error, mailbox: Mailbox) => void): void;
    get(): Promise<Mailbox>;
    update(params: { oldMessages: number; newMessages: number }, callback: (err: Error) => void): void;
    update(params: { oldMessages: number; newMessages: number }): Promise<void>;
    delete(callback: (err: Error) => void): void;
    delete(): Promise<void>;
}
export interface Playbacks {
    /* Methods */
    get(params: { playbackId: string }, callback: (err: Error, playback: Playback) => void): void;
    get(params: { playbackId: string }): Promise<Playback>;
    stop(params: { playbackId: string }, callback: (err: Error) => void): void;
    stop(params: { playbackId: string }): Promise<void>;
    control(params: { playbackId: string; operation: string }, callback: (err: Error) => void): void;
    control(params: { playbackId: string; operation: string }): Promise<void>;
}
export interface Playback extends Resource {
    /* Properties */
    id: string;
    media_uri: string;
    next_media_uri?: string;
    target_uri: string;
    language: string;
    state: string;
    /* Methods */
    get(callback: (err: Error, playback: Playback) => void): void;
    get(): Promise<Playback>;
    stop(callback: (err: Error) => void): void;
    stop(): Promise<void>;
    control(params: { operation: string }, callback: (err: Error) => void): void;
    control(params: { operation: string }): Promise<void>;
}
export interface Recordings {
    /* Methods */
    listStored(callback: (err: Error, storedrecordings: StoredRecording[]) => void): void;
    listStored(): Promise<StoredRecording[]>;
    getStored(
        params: { recordingName: string },
        callback: (err: Error, storedrecording: StoredRecording) => void,
    ): void;
    getStored(params: { recordingName: string }): Promise<StoredRecording>;
    deleteStored(params: { recordingName: string }, callback: (err: Error) => void): void;
    deleteStored(params: { recordingName: string }): Promise<void>;
    getStoredFile(params: { recordingName: string }, callback: (err: Error, binary: Buffer) => void): void;
    getStoredFile(params: { recordingName: string }): Promise<Buffer>;
    copyStored(
        params: { recordingName: string; destinationRecordingName: string },
        callback: (err: Error, storedrecording: StoredRecording) => void,
    ): void;
    copyStored(params: { recordingName: string; destinationRecordingName: string }): Promise<StoredRecording>;
    getLive(params: { recordingName: string }, callback: (err: Error, liverecording: LiveRecording) => void): void;
    getLive(params: { recordingName: string }): Promise<LiveRecording>;
    cancel(params: { recordingName: string }, callback: (err: Error) => void): void;
    cancel(params: { recordingName: string }): Promise<void>;
    stop(params: { recordingName: string }, callback: (err: Error) => void): void;
    stop(params: { recordingName: string }): Promise<void>;
    pause(params: { recordingName: string }, callback: (err: Error) => void): void;
    pause(params: { recordingName: string }): Promise<void>;
    unpause(params: { recordingName: string }, callback: (err: Error) => void): void;
    unpause(params: { recordingName: string }): Promise<void>;
    mute(params: { recordingName: string }, callback: (err: Error) => void): void;
    mute(params: { recordingName: string }): Promise<void>;
    unmute(params: { recordingName: string }, callback: (err: Error) => void): void;
    unmute(params: { recordingName: string }): Promise<void>;
}
export interface StoredRecording extends Resource {
    /* Properties */
    name: string;
    format: string;
    /* Methods */
    listStored(callback: (err: Error, storedrecordings: StoredRecording[]) => void): void;
    listStored(): Promise<StoredRecording[]>;
    getStored(callback: (err: Error, storedrecording: StoredRecording) => void): void;
    getStored(): Promise<StoredRecording>;
    deleteStored(callback: (err: Error) => void): void;
    deleteStored(): Promise<void>;
    getStoredFile(callback: (err: Error, binary: Buffer) => void): void;
    getStoredFile(): Promise<Buffer>;
    copyStored(
        params: { destinationRecordingName: string },
        callback: (err: Error, storedrecording: StoredRecording) => void,
    ): void;
    copyStored(params: { destinationRecordingName: string }): Promise<StoredRecording>;
    getLive(callback: (err: Error, liverecording: LiveRecording) => void): void;
    getLive(): Promise<LiveRecording>;
    cancel(callback: (err: Error) => void): void;
    cancel(): Promise<void>;
    stop(callback: (err: Error) => void): void;
    stop(): Promise<void>;
    pause(callback: (err: Error) => void): void;
    pause(): Promise<void>;
    unpause(callback: (err: Error) => void): void;
    unpause(): Promise<void>;
    mute(callback: (err: Error) => void): void;
    mute(): Promise<void>;
    unmute(callback: (err: Error) => void): void;
    unmute(): Promise<void>;
}
export interface LiveRecording extends Resource {
    /* Properties */
    name: string;
    format: string;
    target_uri: string;
    state: string;
    duration?: number;
    talking_duration?: number;
    silence_duration?: number;
    cause?: string;
    /* Methods */
    listStored(callback: (err: Error, storedrecordings: StoredRecording[]) => void): void;
    listStored(): Promise<StoredRecording[]>;
    getStored(callback: (err: Error, storedrecording: StoredRecording) => void): void;
    getStored(): Promise<StoredRecording>;
    deleteStored(callback: (err: Error) => void): void;
    deleteStored(): Promise<void>;
    getStoredFile(callback: (err: Error, binary: Buffer) => void): void;
    getStoredFile(): Promise<Buffer>;
    copyStored(
        params: { destinationRecordingName: string },
        callback: (err: Error, storedrecording: StoredRecording) => void,
    ): void;
    copyStored(params: { destinationRecordingName: string }): Promise<StoredRecording>;
    getLive(callback: (err: Error, liverecording: LiveRecording) => void): void;
    getLive(): Promise<LiveRecording>;
    cancel(callback: (err: Error) => void): void;
    cancel(): Promise<void>;
    stop(callback: (err: Error) => void): void;
    stop(): Promise<void>;
    pause(callback: (err: Error) => void): void;
    pause(): Promise<void>;
    unpause(callback: (err: Error) => void): void;
    unpause(): Promise<void>;
    mute(callback: (err: Error) => void): void;
    mute(): Promise<void>;
    unmute(callback: (err: Error) => void): void;
    unmute(): Promise<void>;
}
export interface Sounds {
    /* Methods */
    list(params: { lang?: string; format?: string }, callback: (err: Error, sounds: Sound[]) => void): void;
    list(callback: (err: Error, sounds: Sound[]) => void): void;
    list(params?: { lang?: string; format?: string }): Promise<Sound[]>;
    get(params: { soundId: string }, callback: (err: Error, sound: Sound) => void): void;
    get(params: { soundId: string }): Promise<Sound>;
}
export interface FormatLangPair {
    /* Properties */
    language: string;
    format: string;
}
export interface Sound extends Resource {
    /* Properties */
    id: string;
    text?: string;
    formats: FormatLangPair | FormatLangPair[];
    /* Methods */
    list(params: { lang?: string; format?: string }, callback: (err: Error, sounds: Sound[]) => void): void;
    list(callback: (err: Error, sounds: Sound[]) => void): void;
    list(params?: { lang?: string; format?: string }): Promise<Sound[]>;
    get(callback: (err: Error, sound: Sound) => void): void;
    get(): Promise<Sound>;
}
