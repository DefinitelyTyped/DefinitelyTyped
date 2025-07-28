// For JsSIP 3.3
// Project: https://github.com/versatica/JsSIP
// Definitions by: Shubham Singh Thakur <https://github.com/Shubham-Thakur06>

export interface Socket {
    via_transport: string;
    url: string;
    sip_uri: string;
    connect(): void;
    disconnect(): void;
    send(message: string): void;
    isConnected(): boolean;
    onconnect: () => void;
    ondisconnect: (error: boolean, code?: number, reason?: string) => void;
    ondata: (data: any) => void;
}

export interface WeightedSocket extends Socket {
    weight: number;
}

export class WebSocketInterface implements Socket {
    constructor(url: string);
    via_transport: string;
    url: string;
    sip_uri: string;
    connect(): void;
    disconnect(): void;
    send(message: string): void;
    isConnected(): boolean;
    onconnect: () => void;
    ondisconnect: (error: boolean, code?: number, reason?: string) => void;
    ondata: (data: any) => void;
}

export interface MediaConstraints {
    audio?: boolean;
    video?: boolean;
}

export interface Configuration {
    sockets: Socket[];
    uri: string;
    password?: string;
    display_name?: string;
    authorization_user?: string;
    register?: boolean;
    register_expires?: number;
    registrar_server?: string;
    no_answer_timeout?: number;
    session_timers?: boolean;
    session_timers_refresh_method?: string;
    session_timers_force_refresher?: boolean;
}

export interface UAConfiguration extends Configuration {
    connection_recovery_max_interval?: number;
    connection_recovery_min_interval?: number;
    contact_uri?: string;
    hack_ip_in_contact?: boolean;
    hack_via_tcp?: boolean;
    hack_via_ws?: boolean;
    instance_id?: string;
    no_answer_timeout?: number;
    password?: string;
    realm?: string;
    register?: boolean;
    register_expires?: number;
    registrar_server?: string;
    use_preloaded_route?: boolean;
}

export interface CallOptions {
    eventHandlers?: {
        progress?: (e: any) => void;
        failed?: (e: any) => void;
        ended?: (e: any) => void;
        confirmed?: (e: any) => void;
        [key: string]: ((e: any) => void) | undefined;
    };
    mediaConstraints?: MediaConstraints;
    pcConfig?: RTCConfiguration;
    rtcConstraints?: any;
    rtcOfferConstraints?: any;
}

export class UA {
    constructor(configuration: UAConfiguration);
    start(): void;
    stop(): void;
    register(): void;
    unregister(options?: object): void;
    call(target: string, options?: CallOptions): RTCSession;
    sendMessage(target: string, body: string, options?: object): Message;
    isRegistered(): boolean;
    isConnected(): boolean;
    get(parameter: string): any;
    set(parameter: string, value: any): void;
    on(event: string, callback: (...args: any[]) => void): void;
    removeListener(event: string, callback: (...args: any[]) => void): void;
}

export class RTCSession {
    connection: RTCPeerConnection;
    direction: 'incoming' | 'outgoing';
    local_identity: any;
    remote_identity: any;
    start_time: Date;
    end_time: Date;
    status: number;

    isInProgress(): boolean;
    isEstablished(): boolean;
    isEnded(): boolean;
    answer(options?: { mediaConstraints?: MediaConstraints }): void;
    terminate(options?: object): void;
    sendDTMF(tones: string, options?: object): void;
    sendInfo(contentType: string, body?: string, options?: object): void;
    hold(options?: object): void;
    unhold(options?: object): void;
    renegotiate(options?: object): void;
    isOnHold(): { local: boolean; remote: boolean };
    mute(options?: MediaConstraints): void;
    unmute(options?: MediaConstraints): void;
    isMuted(): MediaConstraints;
    on(event: string, callback: (...args: any[]) => void): void;
    removeListener(event: string, callback: (...args: any[]) => void): void;
}

export class Message {
    direction: 'incoming' | 'outgoing';
    local_identity: any;
    remote_identity: any;
    status: number;

    send(target: string, body: string, options?: object): void;
    on(event: string, callback: (...args: any[]) => void): void;
    removeListener(event: string, callback: (...args: any[]) => void): void;
}

export const version: string;
export const debug: boolean;

export as namespace JsSIP; 