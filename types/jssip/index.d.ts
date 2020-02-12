// Type definitions for jsSIP 3.3
// Project: https://github.com/versatica/JsSIP, https://jssip.net
// Definitions by: Sebastian Mauer <https://github.com/mauimauer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export as namespace JsSIP;

export const name: string;
export const version: string;
export function debug(namespace: string): any;

export namespace NameAddrHeader {
    function parse(nameAddrHeader: string): JsSIP.NameAddrHeader;
}

export class NameAddrHeader {
    display_name: string;
    uri: JsSIP.URI;
    constructor(uri: JsSIP.URI, display_name?: string, parameters?: { [s: string]: string; });
    clearParams(): void;
    clone(): JsSIP.NameAddrHeader;
    deleteParam(parameter: string): any;
    getParam(key: string): string | undefined;
    hasParam(key: string): boolean;
    setParam(key: string, value: string): void;
    toString(): string;
}

export interface UserAgentConfiguration {
    uri: string;
    authorization_user?: string;
    connection_recovery_max_interval?: number;
    connection_recovery_min_interval?: number;
    contact_uri?: string;
    display_name?: string;
    instance_id?: string;
    no_answer_timeout?: number;
    session_timers?: boolean;
    session_timers_refresh_method?: string;
    password?: string;
    realm?: string;
    ha1?: string;
    sockets: JsSIP.Socket | JsSIP.Socket[];
    register?: boolean;
    register_expires?: number;
    registrar_server?: string;
    use_reloaded_route?: boolean;
    user_agent?: string;
}

export interface Socket {
    via_transport: string;
    url: string;
    sip_uri: string;
    connect(): void;
    disconnect(): void;
    send(data: string): void;
    onconnect: () => void;
    ondisconnect: (error: boolean, code?: number, reason?: string) => void;
    ondata: (data: string) => void;
}

export class WebSocketInterface implements JsSIP.Socket {
    via_transport: string;
    url: string;
    sip_uri: string;
    constructor(url: string);
    connect(): void;
    disconnect(): void;
    isConnected(): any;
    isConnecting(): any;
    send(message: string): any;
    onconnect(): void;
    ondisconnect(error: boolean, code?: number, reason?: string): void;
    ondata(data: string): void;
}

export interface UserAgentUnregisterOptions {
    all?: boolean;
}

export interface UserAgentCallOptions {
    mediaConstraints?: MediaStreamConstraints;
    mediaStream?: MediaStream;
    pcConfig?: RTCConfiguration;
    rtcConstraints?: any;
    rtcAnswerConstraints?: RTCAnswerOptions;
    rtcOfferConstraints?: RTCOfferOptions;
    eventHandlers?: { [s: string]: (data: any) => void; };
    extraHeaders?: string[];
    anonymous?: boolean;
    sessionTimersExpires?: number;
}

export interface UserAgentSendMessageOptions {
    contentType?: string;
    eventHandlers?: { [s: string]: (data: any) => void; };
    extraHeaders?: string[];
}

export interface UserAgentConnectingEvent {
    socket: JsSIP.Socket;
    attempts: number;
}

export interface UserAgentConnectedEvent {
    socket: JsSIP.Socket;
}

export interface UserAgentDisconnectedEvent {
    socket: JsSIP.Socket;
    error: boolean;
    code: number;
    reason: string;
}

export interface UserAgentRegisteredEvent {
    response: JsSIP.IncomingResponse;
}

export interface UserAgentUnregisteredEvent {
    response: JsSIP.IncomingResponse;
    cause?: string;
}

export interface UserAgentRegistrationFailedEvent {
    response: JsSIP.IncomingResponse;
    cause?: string;
}

export interface UserAgentNewRtcSessionEvent {
    originator: string;
    session: JsSIP.RTCSession;
    request: JsSIP.IncomingRequest|JsSIP.OutgoingRequest;
}

export interface UserAgentNewMessageEvent {
    originator: string;
    message: JsSIP.Message;
    request: JsSIP.IncomingRequest|JsSIP.OutgoingRequest;
}

export interface UserAgentSipEvent {
    event: { event: string, params: any };
    request: JsSIP.IncomingRequest;
}

export interface MessageSendOptions {
    contentType?: string;
    eventHandlers?: { [s: string]: (data: any) => void; };
    extraHeaders?: string[];
}

export interface MessageAcceptOptions {
    extraHeaders?: string[];
    body?: string;
}

export interface MessageRejectOptions {
    extraHeaders?: string[];
    status_code?: number[];
    reason_phrase: string;
    body?: string;
}

export interface MessageSucceededEvent {
    originator: string;
    response?: JsSIP.IncomingResponse;
}

export interface MessageFailedEvent {
    originator: string;
    response?: JsSIP.IncomingResponse;
    cause?: string;
}

export class Message {
    direction: string;
    local_identrity: JsSIP.NameAddrHeader;
    remote_identrity: JsSIP.NameAddrHeader;
    send(target: string, body: string, options?: MessageSendOptions): void;
    accept(options?: MessageAcceptOptions): void;
    reject(options?: MessageRejectOptions): void;
    on(eventName: "succeeded", handler: EventHandler<MessageSucceededEvent>): void;
    on(eventName: "failed", handler: EventHandler<MessageFailedEvent>): void;
}

export class UA {
    constructor(configuration: JsSIP.UserAgentConfiguration);
    call(target: string|JsSIP.URI, options?: UserAgentCallOptions): any;
    get(parameter: string): string|undefined;
    isConnected(): boolean;
    isRegistered(): boolean;
    register(): void;
    registrator(): JsSIP.Registrator;
    sendMessage(target: string|JsSIP.URI, body: string, options?: UserAgentSendMessageOptions): any;
    set(parameter: string, value: string): any;
    start(): void;
    stop(): void;
    terminateSessions(options: SessionTerminateOptions): void;
    unregister(options?: UserAgentUnregisterOptions): void;
    on(eventName: "connecting", handler: EventHandler<UserAgentConnectingEvent>): void;
    on(eventName: "connected", handler: EventHandler<UserAgentConnectedEvent>): void;
    on(eventName: "disconnected", handler: EventHandler<UserAgentDisconnectedEvent>): void;
    on(eventName: "registered", handler: EventHandler<UserAgentRegisteredEvent>): void;
    on(eventName: "unregistered", handler: EventHandler<UserAgentUnregisteredEvent>): void;
    on(eventName: "registrationFailed", handler: EventHandler<UserAgentRegistrationFailedEvent>): void;
    on(eventName: "registrationExpiring", handler: () => void): void;
    on(eventName: "newRTCSession", handler: EventHandler<UserAgentNewRtcSessionEvent>): void;
    on(eventName: "newMessage", handler: EventHandler<UserAgentNewMessageEvent>): void;
    on(eventName: "sipEvent", handler: EventHandler<UserAgentSipEvent>): void;
}

export type EventHandler<T> = (e: T) => void;

export interface SessionConnectingEvent {
    request: JsSIP.IncomingRequest|JsSIP.OutgoingRequest;
}

export interface SessionSendingEvent {
    request: JsSIP.OutgoingRequest;
}

export interface SessionProgressEvent {
    originator: string;
    response?: JsSIP.IncomingResponse;
}

export interface SessionAcceptedEvent {
    originator: string;
    response?: JsSIP.IncomingResponse;
}

export interface SessionConfirmedEvent {
    originator: string;
    response?: JsSIP.IncomingResponse;
}

export interface SessionEndedEvent {
    originator: string;
    message?: JsSIP.IncomingResponse|JsSIP.IncomingResponse;
    cause: string;
}

export interface SessionFailedEvent {
    originator: string;
    message?: JsSIP.IncomingResponse|JsSIP.IncomingResponse;
    cause: string;
}

export interface SessionNewDtmfEvent {
    originator: string;
    dtmf: JsSIP.RTCSession.DTMF;
    request: JsSIP.IncomingRequest|JsSIP.OutgoingRequest;
}

export interface SessionNewInfoEvent {
    originator: string;
    info: JsSIP.RTCSession.Info;
    request: JsSIP.IncomingRequest|JsSIP.OutgoingRequest;
}

export interface SessionHoldEvent {
    originator: string;
}

export interface SessionUnholdEvent {
    originator: string;
}

export interface SessionMuteEvent {
    audio: boolean;
    video: boolean;
}

export interface SessionUnmuteEvent {
    audio: boolean;
    video: boolean;
}

export interface SessionReinviteEvent {
    request: JsSIP.IncomingRequest;
    callback: () => void;
    reject: (options: SessionRejectOptions) => void;
}

export interface SessionUpdateEvent {
    request: JsSIP.IncomingRequest;
    callback: () => void;
    reject: (options: SessionRejectOptions) => void;
}

export interface SessionReferEvent {
    request: JsSIP.IncomingRequest;
    accept: () => void;
    reject: () => void;
}

export interface SessionReplaceEvent {
    request: JsSIP.IncomingRequest;
    accept: () => void;
    reject: () => void;
}

export interface SessionSdpEvent {
    originator: string;
    type: string;
    sdp: string;
}

export interface SessionIceCandidateEvent {
    candidate: RTCIceCandidate;
    ready: () => void;
}

export type SessionUserMediaFailedEvent = DOMError;
export type SessionCreateOfferFailedEvent = DOMError;
export type SessionCreateAnswerFailedEvent = DOMError;
export type SessionSetLocalDescriptionFailedEvent = DOMError;
export type SessionSetRemoteDescriptionFailedEvent = DOMError;

export interface SessionRejectOptions {
    extraHeaders: string[];
    status_code: number;
    reason_phrase: string;
}

export interface IncomingMessage {
    method: string;
    from: JsSIP.NameAddrHeader;
    to: JsSIP.NameAddrHeader;
    body?: string;
    countHeader(name: string): number;
    getHeader(name: string): string;
    getHeaders(name: string): string[];
    hasHeader(name: string): boolean;
    parseHeader(name: string, idx?: number): undefined;
    toString(): string;
}

export interface IncomingResponse extends IncomingMessage {
    status_code: number;
    reason_phrase: string;
}

export interface IncomingRequest extends IncomingMessage {
    ruri: JsSIP.URI;
}

export interface OutgoingRequest {
    method: string;
    ruri: JsSIP.URI;
    cseq: number;
    call_id: string;
    from: JsSIP.NameAddrHeader;
    to: JsSIP.NameAddrHeader;
    body?: string;
    setHeader(name: string, value: string): void;
    getHeader(name: string): string;
    getHeaders(name: string): string[];
    hasHeader(name: string): boolean;
    toString(): string;
}

export namespace RTCSession {
    class DTMF {
        tone: string;
        duration: number;
    }
    class Info {
        contentType: string;
        body: string;
    }
}

export interface SessionAnswerOptions {
    extraHeaders?: string[];
    mediaConstraints?: MediaStreamConstraints;
    mediaStream?: MediaStream;
    pcConfig?: RTCConfiguration;
    rtcConstraints?: any;
    rtcAnswerConstraints?: RTCAnswerOptions;
    rtcOfferConstraints?: RTCOfferOptions;
    sessionTimersExpires?: number;
}

export interface SessionTerminateOptions {
    extraHeaders?: string[];
    status_code?: number;
    reason_phrase?: string;
    body?: string;
}

export interface SessionSendDtmfOptions {
    duration?: number;
    interToneGap: number;
    extraHeaders?: string[];
}

export interface SessionSendInfoOptions {
    extraHeaders?: string[];
}

export interface SessionHoldOptions {
    useUpdate?: boolean;
    extraHeaders?: string[];
}

export interface SessionRenegotiateOptions {
    useUpdate?: boolean;
    extraHeaders?: string[];
    rtcOfferConstraints?: RTCOfferOptions;
}

export interface SessionMuteOptions {
    audio?: boolean;
    video?: boolean;
}

export interface SessionReferOptions {
    extraHeaders?: string[];
    eventHandlers?: { [s: string]: (data: any) => void; };
    replaces?: JsSIP.RTCSession;
}

export class RTCSession {
    connection?: RTCPeerConnection;
    direction: string;
    local_identity: JsSIP.NameAddrHeader;
    remote_identity: JsSIP.NameAddrHeader;
    start_time?: Date;
    end_time: Date;
    data?: any;
    isInProgress(): boolean;
    isEstablished(): boolean;
    isEnded(): boolean;
    isReadyToReOffer(): boolean;
    answer(options?: SessionAnswerOptions): void;
    terminate(options?: SessionTerminateOptions): void;
    sendDTMF(tone: string|number, options?: SessionSendDtmfOptions): void;
    sendInfo(contentType: string, body?: string, options?: SessionSendInfoOptions): void;
    hold(options?: SessionHoldOptions, done?: () => void): void;
    unhold(options?: SessionHoldOptions, done?: () => void): void;
    renegotiate(options?: SessionRenegotiateOptions, done?: () => void): void;
    isOnHold(): boolean;
    mute(options?: SessionMuteOptions): void;
    unmute(options?: SessionMuteOptions): void;
    isMuted(): boolean;
    refer(target: string|JsSIP.URI, options?: SessionReferOptions): void;
    resetLocalMedia(): void;
    on(eventName: "peerconnection", handler: EventHandler<RTCPeerConnection>): void;
    on(eventName: "connecting", handler: EventHandler<SessionConnectingEvent>): void;
    on(eventName: "sending", handler: EventHandler<SessionSendingEvent>): void;
    on(eventName: "progress", handler: EventHandler<SessionProgressEvent>): void;
    on(eventName: "accepted", handler: EventHandler<SessionAcceptedEvent>): void;
    on(eventName: "confirmed", handler: EventHandler<SessionConfirmedEvent>): void;
    on(eventName: "ended", handler: EventHandler<SessionEndedEvent>): void;
    on(eventName: "failed", handler: EventHandler<SessionFailedEvent>): void;
    on(eventName: "newDTMF", handler: EventHandler<SessionNewDtmfEvent>): void;
    on(eventName: "newInfo", handler: EventHandler<SessionNewInfoEvent>): void;
    on(eventName: "hold", handler: EventHandler<SessionHoldEvent>): void;
    on(eventName: "unhold", handler: EventHandler<SessionUnholdEvent>): void;
    on(eventName: "muted", handler: EventHandler<SessionMuteEvent>): void;
    on(eventName: "unmuted", handler: EventHandler<SessionUnmuteEvent>): void;
    on(eventName: "reinvite", handler: EventHandler<SessionReinviteEvent>): void;
    on(eventName: "update", handler: EventHandler<SessionUpdateEvent>): void;
    on(eventName: "refer", handler: EventHandler<SessionReferEvent>): void;
    on(eventName: "replaces", handler: EventHandler<SessionReplaceEvent>): void;
    on(eventName: "sdp", handler: EventHandler<SessionSdpEvent>): void;
    on(eventName: "icecandidate", handler: EventHandler<SessionIceCandidateEvent>): void;
    on(eventName: "getusermediafailed", handler: EventHandler<SessionUserMediaFailedEvent>): void;
    on(eventName: "peerconnection:createofferfailed", handler: EventHandler<SessionCreateOfferFailedEvent>): void;
    on(eventName: "peerconnection:createanswerfailed", handler: EventHandler<SessionCreateAnswerFailedEvent>): void;
    on(eventName: "peerconnection:setlocaldescriptionfailed", handler: EventHandler<SessionSetLocalDescriptionFailedEvent>): void;
    on(eventName: "peerconnection:setremotedescriptionfailed", handler: EventHandler<SessionSetRemoteDescriptionFailedEvent>): void;
}

export class Registrator {
    setExtraHeaders(extraHeaders?: string[]): void;
    setExtraContactParams(extraContactParams?: { [s: string]: string; }): void;
}

export namespace URI {
    function parse(uri: string): URI;
}

export class URI {
    constructor(scheme: string | null, user: string | null, host: string, port?: number, parameters?: { [s: string]: string; }, headers?: { [s: string]: string; });
    clearHeaders(): void;
    clearParams(): void;
    clone(): JsSIP.URI;
    deleteHeader(header: string): void;
    deleteParam(parameter: string): void;
    getHeader(name: string): string[] | undefined;
    getParam(key: string): string | undefined;
    hasHeader(name: string): boolean;
    hasParam(key: string): boolean;
    setHeader(name: string, value: string): void;
    setParam(key: string, value?: string): void;
    toAor(show_port: boolean): string;
    toString(): string;
}
