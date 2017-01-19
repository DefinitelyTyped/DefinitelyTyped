// Type definitions for SIP.js v0.7.6
// Project: https://sipjs.com/
// Definitions by: Kir Dergachev <https://github.com/decyrus/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = SIP;

declare namespace SIP {

    class URI {
        constructor(
            scheme?: string,
            user?: string,
            host?: string,
            port?: number,
            parameters?: string[],
            headers?: string[]);

        scheme?: string;
        user?: string;
        host?: string;
        port?: number;

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

        static parse(uri: string): URI;
    }

    namespace UA.EventArgs {
        interface ConnectedArgs { attempts: number }
        interface UnregisteredArgs { response: string; cause: string; }
        interface RegistrationFailedArgs extends UnregisteredArgs { }
    }

    class UA {
        constructor(configuration?: ConfigurationParameters);
        start(): void;
        stop(): void;
        register(options?: ExtraHeadersOptions): UA;
        unregister(options?: UnregisterOptions): void;
        isRegistered(): boolean;
        isConnected(): boolean;
        message(target: string | URI, body: string, options?: MessageOptions): Message;
        subscribe(target: string | URI, event: string, options?: SubscribeOptions): Subscription;
        invite(target: string | URI, options?: InviteOptions): Session;
        invite(target: string | URI, element?: HTMLAudioElement | HTMLVideoElement): Session;
        request(method: string, target: string | URI, options?: RequestOptions): ClientContext;

        on(name: 'connected', callback: (args: UA.EventArgs.ConnectedArgs) => void): void;
        on(name: 'disconnected' | 'registered', callback: () => void): void;
        on(name: 'unregistered', callback: (args: UA.EventArgs.UnregisteredArgs) => void): void;
        on(name: 'registrationFailed', callback: (args: UA.EventArgs.RegistrationFailedArgs) => void): void;
        on(name: 'invite', callback: (session: Session) => void): void;
        on(name: 'message', callback: (message: Message) => void): void;
    }

    namespace UA.C {
        class supported {
            REQUIRED: string;
            SUPPORTED: string;
            UNSUPPORTED: string;
        }

        class causes {
            INVALID_TARGET: string;
            CONNECTION_ERROR: string;
            REQUEST_TIMEOUT: string;
            SIP_FAILURE_CODE: string;
        }
    }

    class Session {
        startTime?: Date;
        endTime?: Date;
        ua?: UA;
        method?: string;
        mediaHandler?: WebRTC.MediaHandler;
        request?: IncomingRequest | OutgoingRequest;
        localIdentity?: NameAddrHeader;
        remoteIdentity?: NameAddrHeader;
        data: ClientContext | ServerContext;

        dtmf(tone: string | number, options?: Session.DtmfOptions): Session;
        terminate(options?: Session.CommonOptions): Session;
        bye(options?: Session.CommonOptions): Session;
        getLocalStreams(): MediaStream[];
        getRemoteStreams(): MediaStream[];
        refer(target: string | Session, options?: ExtraHeadersOptions): Session;
        mute(options?: ExtraHeadersOptions): void;
        unmute(options?: ExtraHeadersOptions): void;
        cancel(options?: Session.CommonOptions): void;
        progress(options?: Session.ProgressOptions): void;
        accept(options?: Session.AcceptOptions): void;
        reject(options?: Session.CommonOptions): void;
        reply(options?: Session.CommonOptions): void;
        followRefer(callback: Function): void;

        on(name: 'progress', callback: (response: IncomingResponse) => void): void;
        on(name: 'accepted', callback: (data: { code: number, response: IncomingResponse }) => void): void;
        on(name: 'rejected', callback: (response: IncomingResponse, cause: string) => void): void;
        on(name: 'failed', callback: (response: IncomingResponse, cause: string) => void): void;
        on(name: 'terminated', callback: (message: IncomingResponse, cause: string) => void): void;
        on(name: 'refer', callback: (request: IncomingRequest) => void): void;
        on(name: 'cancel', callback: () => void): void;
        on(name: 'replaced', callback: (newSession: Session) => void): void;
        on(name: 'dtmf', callback: (request: IncomingRequest, dtmf: Session.DTMF) => void): void;
        on(name: 'muted', callback: (data: Session.Muted) => void): void;
        on(name: 'unmuted', callback: (data: Session.Muted) => void): void;
        on(name: 'bye', callback: (request: IncomingRequest) => void): void;
    }

    namespace Session {
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
            RTCConstraints?: RTCPeerConnection;
            media?: MediaOptions;
        }

        interface DTMF {
        }

        interface Muted {
            audio?: boolean;
            video?: boolean
        }
    }

    interface RenderHint {
        remote?: Element;
        local?: Element
    }

    interface MediaConstraints {
        audio: boolean;
        video: boolean;
    }

    interface TurnServer {
        urls?: string | string[];
        username?: string;
        password?: string;
    }

    namespace WebRTC {

        interface Options {
            stunServers?: string | string[];
            turnServers?: TurnServer | TurnServer[];
            RTCConstraints?: RTCPeerConnection;
        }

        type MediaHandlerFactory = (session: Session, options: Options) => MediaHandler;

        class MediaHandler {
            getLocalStreams(): MediaStream[];
            getRemoteStreams(): MediaStream[];
            render(renderHint: RenderHint): void;

            on(name: 'userMediaRequest', callback: (constraints: MediaConstraints) => void): void;
            on(name: 'userMedia', callback: (stream: MediaStream) => void): void;
            on(name: 'userMediaFailed', callback: (error: string) => void): void;
            on(name: 'iceGathering', callback: () => void): void;
            on(name: 'iceCandidate', callback: (candidate: RTCIceCandidate) => void): void;
            on(name: 'iceGatheringComplete', callback: () => void): void;
            on(name: 'iceConnection', callback: () => void): void;
            on(name: 'iceConnectionChecking', callback: () => void): void;
            on(name: 'iceConnectionConnected', callback: () => void): void;
            on(name: 'iceConnectionCompleted', callback: () => void): void;
            on(name: 'iceConnectionFailed', callback: () => void): void;
            on(name: 'iceConnectionDisconnected', callback: () => void): void;
            on(name: 'iceConnectionClosed', callback: () => void): void;
            on(name: 'getDescription', callback: (sdpWrapper: { type: string, sdp: string }) => void): void;
            on(name: 'setDescription', callback: (sdpWrapper: { type: string, sdp: string }) => void): void;
            on(name: 'dataChannel', callback: () => void): void;
            on(name: 'addStream', callback: (stream: MediaStream) => void): void;
        }
    }

    /* Parameters */
    interface ConfigurationParameters {
        uri?: string;
        wsServers?: string | string[] | { ws_uri: string; weigth: number }[];
        allowLegacyNotifications?: boolean;
        authenticationFactory?: WebRTC.MediaHandlerFactory;
        authorizationUser?: string;
        autostart?: boolean;
        connectionRecoveryMaxInterval?: number;
        connectionRecoveryMinInterval?: number;
        displayName?: string;
        hackCleanJitsiSdpImageattr?: boolean;
        hackStripTcp?: boolean;
        hackIpInContact?: boolean;
        hackViaTcp?: boolean;
        hackWssInTransport?: boolean;
        iceCheckingTimeout?: number;
        instanceId?: string;
        log?: {
            builtinEnabled?: boolean;
            level?: number | string;
            connector?: (level: string, category: string, label: string, content: string) => void;
        };
        mediaHandlerFactory?: WebRTC.MediaHandlerFactory;
        noAnswerTimeout?: number;
        password?: string;
        register?: boolean;
        registerExpires?: number;
        registrarServer?: string;
        rel100?: string;
        replaces?: string;
        stunServers?: string | string[];
        traceSip?: boolean;
        turnServers?: TurnServer | TurnServer[];
        usePreloadedRoute?: boolean;
        userAgentString?: string;
        wsServerMaxReconnection?: number;
        wsServerReconnectionTimeout?: number;
    }

    /* Options */
    interface ExtraHeadersOptions {
        extraHeaders?: string[];
    }

    interface UnregisterOptions extends ExtraHeadersOptions {
        all?: boolean;
    }

    interface MessageOptions extends ExtraHeadersOptions {
        contentType?: string;
    }

    interface SubscribeOptions extends ExtraHeadersOptions {
        expires?: number;
    }

    interface MediaOptions {
        constraints?: MediaConstraints;
        stream?: MediaStream;
        render?: RenderHint;
    }

    interface InviteOptions extends ExtraHeadersOptions {
        media?: MediaOptions;
        anonymous?: boolean;
        rel100?: string;
        inviteWithoutSdp?: boolean;
        RTCConstraints?: RTCPeerConnection;
    }

    interface RequestOptions extends ExtraHeadersOptions {
        body?: string;
    }

    /* Contexts */
    interface Message extends ClientContext {
        body: string;
    }

    interface Subscription extends ClientContext {
        id: string;
        state: string;
        event: string;
        dialog: string;
        timers: Object;
        errorCodes: number[];
        subscribe(): Subscription;
        unsubscribe(): void;
        close(): void;
    }

    /* Context */
    interface Context {
        ua: UA;
        method: string;
        request: OutgoingRequest;
        localIdentity: NameAddrHeader;
        remoteIdentity: NameAddrHeader;
        data: {};
        
        on(name: 'progress', callback: (response: IncomingMessage, cause: string) => void): void;
        on(name: 'accepted', callback: (response: IncomingMessage, cause: string) => void): void;
        on(name: 'rejected', callback: (response: IncomingMessage, cause: string) => void): void;
        on(name: 'failed', callback: (response: IncomingMessage, cause: string) => void): void;
        on(name: 'notify', callback: (request: IncomingRequest) => void): void;
    }

    interface ClientContext extends Context {
        cancel(options?: { status_code?: number, reason_phrase?: string }): ClientContext;
    }

    interface ServerContext extends Context {
        progress(options?: Session.ProgressOptions): void;
        accept(options?: Session.AcceptOptions): void;
        reject(options?: Session.CommonOptions): void;
        reply(options?: Session.CommonOptions): void;
    }

    /* Request */
    interface Request extends Context {
    }

    interface IncomingRequest extends Request {
    }

    interface OutgoingRequest extends Request {
    }

    interface IncomingResponse extends Request {
    }

    interface IncomingMessage extends Request {
    }

    /* Header */
    class NameAddrHeader {
        constructor(uri: string | URI, displayName: string, parameters: { key: string, value: string }[]);

        uri: string | URI;
        displayName: string;

        setParam(key: string, value?: string): void;
        getParam(key: string): string;
        deleteParam(key: string): string;
        clearParams(): void;

        static parse(name_addr_header: string): NameAddrHeader;
    }
}
