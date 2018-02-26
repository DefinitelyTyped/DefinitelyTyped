// Type definitions for sip.js 0.8
// Project: http://sipjs.com
// Definitions by: Kir Dergachev <https://github.com/decyrus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export as namespace sipjs;

export class URI {
    scheme?: string;
    user?: string;
    host?: string;
    port?: number;

    constructor(scheme?: string, user?: string, host?: string, port?: number, parameters?: string[], headers?: string[]);
    static parse(uri: string): sipjs.URI;

    setParam(key: string, value?: string): void;
    getParam(key: string): string;
    hasParam(key: string): string;
    deleteParam(key: string): string;
    clearParams(): void;
    setHeader(name: string, value: string): void;
    getHeader(name: string): string[];
    hasHeader(name: string): boolean;
    deleteHeader(name: string): string[];
    clearHeaders(): void;
    clone(): URI;
    toString(): string;
}

export namespace UA.EventArgs {
    interface ConnectedArgs { attempts: number; }
    interface UnregisteredArgs { response: string; cause: string; }
    interface RegistrationFailedArgs extends UnregisteredArgs { }
}

export class UA {
    constructor(configuration?: sipjs.ConfigurationParameters);

    start(): UA;
    stop(): UA;
    register(options?: ExtraHeadersOptions): UA;
    unregister(options?: UnregisterOptions): UA;
    isRegistered(): boolean;
    isConnected(): boolean;
    message(target: string | URI, body: string, options?: MessageOptions): Message;
    subscribe(target: string | URI, event: string, options?: SubscribeOptions): Subscription;
    invite(target: string | URI, element?: InviteOptions | HTMLAudioElement | HTMLVideoElement): Session;
    request(method: string, target: string | URI, options?: RequestOptions): ClientContext;

    on(name: 'connected', callback: (args: UA.EventArgs.ConnectedArgs) => void): void;
    on(name: 'disconnected' | 'registered' | string, callback: () => void): void;
    on(name: 'unregistered', callback: (args: UA.EventArgs.UnregisteredArgs) => void): void;
    on(name: 'registrationFailed', callback: (args: UA.EventArgs.RegistrationFailedArgs) => void): void;
    on(name: 'invite', callback: (session: Session) => void): void;
    on(name: 'message', callback: (message: Message) => void): void;
}

export namespace C {
    namespace supported {
        const REQUIRED: string;
        const SUPPORTED: string;
        const UNSUPPORTED: string;
    }

    namespace causes {
        const INVALID_TARGET: string;
        const CONNECTION_ERROR: string;
        const REQUEST_TIMEOUT: string;
        const SIP_FAILURE_CODE: string;
    }
}

export type DescriptionModifier = (description: RTCSessionDescription) => Promise<RTCSessionDescription>;

export interface SessionDescriptionHandler {
    getDescription(options: SessionDescriptionHandlerParameters, modifiers: DescriptionModifier[]): Promise<any>;
    setDescription(sessionDescription: string, options: SessionDescriptionHandlerParameters, modifiers: DescriptionModifier[]): Promise<any>;
    hasDescription: (contentType: string) => boolean;
    close: () => void;
    holdModifier: (description: RTCSessionDescription) => Promise<RTCSessionDescription>;

    on(name: 'userMediaRequest', callback: (constraints: MediaConstraints) => void): void;
    on(name: 'userMedia', callback: (stream: MediaStream) => void): void;
    on(name: 'userMediaFailed', callback: (error: string) => void): void;
    on(name: 'iceCandidate', callback: (candidate: any) => void): void;
    on(
        name: 'iceGathering' | 'iceGatheringComplete' | 'iceConnection' | 'iceConnectionChecking' | 'iceConnectionConnected' | 'iceConnectionCompleted' | 'iceConnectionFailed' |
            'iceConnectionDisconnected' | 'iceConnectionClosed' | string,
        callback: () => void): void;
    on(name: 'dataChannel' | 'getDescription' | 'setDescription', callback: (sdpWrapper: { type: string, sdp: string }) => void): void;
    on(name: 'addTrack', callback: (track: any) => void): void;
}

export interface Session {
    startTime?: Date;
    endTime?: Date;
    ua?: UA;
    method?: string;
    mediaHandler?: WebRTC.MediaHandler;
    request?: IncomingRequest | OutgoingRequest;
    localIdentity?: NameAddrHeader;
    remoteIdentity?: NameAddrHeader;
    data: ClientContext | ServerContext;
    sessionDescriptionHandler: SessionDescriptionHandler;

    dtmf(tone: string | number, options?: Session.DtmfOptions): Session;
    terminate(options?: Session.CommonOptions): Session;
    bye(options?: Session.CommonOptions): Session;
    getLocalStreams(): any[];
    getRemoteStreams(): any[];
    refer(target: string | Session, options?: ExtraHeadersOptions): Session;
    mute(options?: ExtraHeadersOptions): void;
    unmute(options?: ExtraHeadersOptions): void;
    cancel(options?: Session.CommonOptions): void;
    progress(options?: Session.ProgressOptions): void;
    accept(options?: Session.AcceptOptions): void;
    reject(options?: Session.CommonOptions): void;
    reply(options?: Session.CommonOptions): void;
    hold(options?: Session.HoldOptions): void;
    unhold(options?: Session.HoldOptions): void;
    isOnHold(): Session.Held;
    followRefer(callback: () => void): void;

    on(name: 'progress', callback: (response: IncomingResponse) => void): void;
    on(name: 'accepted', callback: (data: { code: number, response: IncomingResponse }) => void): void;
    on(name: 'failed' | 'rejected', callback: (response: IncomingResponse, cause: string) => void): void;
    on(name: 'terminated', callback: (message: IncomingResponse, cause: string) => void): void;
    on(name: 'cancel' | string, callback: () => void): void;
    on(name: 'replaced', callback: (newSession: Session) => void): void;
    on(name: 'dtmf', callback: (request: IncomingRequest, dtmf: Session.DTMF) => void): void;
    on(name: 'muted' | 'unmuted', callback: (data: Session.Muted) => void): void;
    on(name: 'refer' | 'bye', callback: (request: IncomingRequest) => void): void;
}

export namespace Session {
    interface DtmfOptions extends ExtraHeadersOptions {
        duration?: number;
        interToneGap?: number;
    }

    interface CommonOptions extends ExtraHeadersOptions {
        status_code?: number;
        reason_phrase?: string;
        body?: string;
    }

    interface ProgressOptions extends ExtraHeadersOptions {
        rel100?: boolean;
        media?: MediaConstraints;
    }

    interface AcceptOptions {
        RTCConstraints?: any;
        media?: MediaOptions;
    }

    interface HoldOptions extends ExtraHeadersOptions {
        eventHandlers?: {
            succeeded?(): void;
            failed?(): void;
        };
    }

    interface DTMF extends Object { }

    interface Muted {
        audio?: boolean;
        video?: boolean;
    }

    interface Held {
        local: boolean;
        remote: boolean;
    }
}

export interface RenderHint {
    remote?: Element;
    local?: Element;
}

export interface MediaConstraints {
    audio: boolean;
    video: boolean;
}

export interface TurnServer {
    urls?: string | string[];
    username?: string;
    password?: string;
}

export namespace WebRTC {
    interface Options {
        stunServers?: string | string[];
        turnServers?: TurnServer | TurnServer[];
        RTCConstraints?: any;
    }

    type MediaHandlerFactory = (session: Session, options: Options) => MediaHandler;

    class MediaHandler {
        getLocalStreams(): any[];
        getRemoteStreams(): any[];
        render(renderHint: RenderHint): void;

        on(name: 'userMediaRequest', callback: (constraints: MediaConstraints) => void): void;
        on(name: 'addStream' | 'userMedia', callback: (stream: any) => void): void;
        on(name: 'userMediaFailed', callback: (error: string) => void): void;
        on(name: 'iceCandidate', callback: (candidate: any) => void): void;
        on(
            name: 'iceGathering' | 'iceGatheringComplete' | 'iceConnection' | 'iceConnectionChecking' | 'iceConnectionConnected' | 'iceConnectionCompleted' | 'iceConnectionFailed' |
                'iceConnectionDisconnected' | 'iceConnectionClosed' | string,
            callback: () => void): void;
        on(name: 'dataChannel' | 'getDescription' | 'setDescription', callback: (sdpWrapper: { type: string, sdp: string }) => void): void;
    }

    class Simple {
        constructor(options: SimpleConfigurationParameters);

        on(name: 'registered' | 'unregistered', callback: (ua: UA) => void): void;
        on(name: 'ringing' | 'connecting' | 'connected' | 'ended', callback: (session: Session) => void): void;
        on(name: 'message', callback: (message: Message) => void): void;

        call(target: string | URI): Session;
        toggleMute(mute: boolean): void;
        hangup: () => Session | void;
    }
}

/* Parameters */
export interface ConfigurationParameters {
    uri?: string;
    wsServers?: string | Array<string | { ws_uri: string; weight?: number }>;
    allowLegacyNotifications?: boolean;
    authenticationFactory?: WebRTC.MediaHandlerFactory;
    authorizationUser?: string;
    autostart?: boolean;
    autostop?: boolean;
    connectionRecoveryMaxInterval?: number;
    connectionRecoveryMinInterval?: number;
    contactTransport?: string;
    displayName?: string;
    extraSupported?: string[];
    forceRport?: boolean;
    hackAllowUnregisteredOptionTags?: boolean;
    hackCleanJitsiSdpImageattr?: boolean;
    hackStripTcp?: boolean;
    hackIpInContact?: boolean;
    hackViaTcp?: boolean;
    hackWssInTransport?: boolean;
    iceCheckingTimeout?: number;
    instanceId?: string;
    keepAliveInterval?: number;
    log?: {
        builtinEnabled?: boolean;
        level?: number | string;
        connector?(level: string, category: string, label: string, content: string): void;
    };
    mediaHandlerFactory?: WebRTC.MediaHandlerFactory;
    noAnswerTimeout?: number;
    password?: string;
    register?: boolean;
    registerExpires?: number;
    registrarServer?: string;
    rel100?: string;
    replaces?: string;
    rtcpMuxPolicy?: string;
    stunServers?: string | string[];
    traceSip?: boolean;
    turnServers?: TurnServer | TurnServer[];
    usePreloadedRoute?: boolean;
    userAgentString?: string;
    wsServerMaxReconnection?: number;
    wsServerReconnectionTimeout?: number;
}

export interface SimpleConfigurationParameters {
    ua: {
        wsServers?: string | Array<string | { ws_uri: string; weight?: number }>;
        uri?: string;
        authorizationUser?: string;
        password?: string;
        displayName?: string;
        traceSip?: boolean;
        userAgentString?: string;
    };
    media?: {
        remote?: {
            audio?: Element;
            video?: Element;
        };
        local?: {
            audio?: Element;
            video?: Element;
        };
    };
}

export interface SessionDescriptionHandlerParameters {
    constraints?: any;
    peerConnectionOptions?: {
        rtcConfiguration: {
            iceServers: TurnServer[];
            iceCheckingTimeout: number;
        };
        RTCOfferOptions: {};
    };
}

/* Options */
export interface ExtraHeadersOptions {
    extraHeaders?: string[];
}

export interface UnregisterOptions extends ExtraHeadersOptions {
    all?: boolean;
}

export interface MessageOptions extends ExtraHeadersOptions {
    contentType?: string;
}

export interface SubscribeOptions extends ExtraHeadersOptions {
    expires?: number;
}

export interface MediaOptions {
    constraints?: MediaConstraints;
    stream?: any;
    render?: RenderHint;
}

export interface InviteOptions extends ExtraHeadersOptions {
    media?: MediaOptions;
    anonymous?: boolean;
    rel100?: string;
    inviteWithoutSdp?: boolean;
    RTCConstraints?: any;
}

export interface RequestOptions extends ExtraHeadersOptions {
    body?: string;
}

/* Contexts */
export interface Message extends ClientContext {
    body: string;
}

export interface Subscription extends ClientContext {
    id: string;
    state: string;
    event: string;
    dialog: string;
    timers: {};
    errorCodes: number[];
    subscribe(): Subscription;
    unsubscribe(): void;
    close(): void;
}

/* Context */
export interface Context {
    ua: UA;
    method: string;
    request: OutgoingRequest;
    localIdentity: NameAddrHeader;
    remoteIdentity: NameAddrHeader;
    data: {};
    on(name: 'progress' | 'accepted' | 'rejected' | 'failed', callback: (response: IncomingMessage, cause: string) => void): void;
    on(name: 'notify', callback: (request: IncomingRequest) => void): void;
    on(name: string, callback: () => void): void;
}

export interface ClientContext extends Context {
    cancel(options?: { status_code?: number, reason_phrase?: string }): ClientContext;
}

export interface ServerContext extends Context {
    progress(options?: Session.ProgressOptions): void;
    accept(options?: Session.AcceptOptions): void;
    reject(options?: Session.CommonOptions): void;
    reply(options?: Session.CommonOptions): void;
}

/* Request */
export interface Request extends Context {
}

export interface IncomingRequest extends Request {
}

export interface OutgoingRequest extends Request {
}

export interface IncomingResponse extends Request {
}

export interface IncomingMessage extends Request {
}

/* Header */
export class NameAddrHeader {
    uri: URI;
    displayName: string;

    constructor(uri: sipjs.URI, displayName: string, parameters: Array<{ key: string, value: string }>);
    static parse(name_addr_header: string): sipjs.NameAddrHeader;

    setParam(key: string, value?: string): void;
    getParam(key: string): string;
    deleteParam(key: string): string;
    clearParams(): void;
}
