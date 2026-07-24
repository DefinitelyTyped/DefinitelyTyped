interface Config {
    logType?: number;
    rtmp?: RtmpConfig;
    http?: HttpConfig;
    https?: SslConfig;
    trans?: TransConfig;
    relay?: RelayConfig;
    fission?: FissionConfig;
    auth?: AuthConfig;
}

interface RtmpConfig {
    port?: number;
    ssl?: SslConfig;
    chunk_size?: number;
    gop_cache?: boolean;
    ping?: number;
    ping_timeout?: number;
}

interface SslConfig {
    key: string;
    cert: string;
    port?: number;
}

interface HttpConfig {
    mediaroot: string;
    port?: number;
    allow_origin?: string;
}

interface AuthConfig {
    play?: boolean;
    publish?: boolean;
    secret?: string;
    api?: boolean;
    api_user?: string;
    api_pass?: string;
}

interface TransConfig {
    ffmpeg: string;
    tasks: TransTaskConfig[];
}

interface RelayConfig {
    tasks: RelayTaskConfig[];
    ffmpeg: string;
}

interface FissionConfig {
    ffmpeg: string;
    tasks: FissionTaskConfig[];
}

interface TransTaskConfig {
    app: string;
    hls?: boolean;
    hlsFlags?: string;
    dash?: boolean;
    dashFlags?: string;
    vc?: string;
    vcParam?: string[];
    ac?: string;
    acParam?: string[];
    rtmp?: boolean;
    rtmpApp?: string;
    mp4?: boolean;
    mp4Flags?: string;
}

interface RelayTaskConfig {
    app: string;
    name?: string;
    mode: string;
    edge: string;
    rtsp_transport?: string;
    appendName?: boolean;
}

interface FissionTaskConfig {
    rule: string;
    model: FissionTaskModel[];
}

interface FissionTaskModel {
    ab: string;
    vb: string;
    vs: string;
    vf: string;
}

type NodeMediaServerEvents = {
    preConnect: (id: string, args: Record<string, unknown>) => void;
    postConnect: (id: string, args: Record<string, unknown>) => void;
    doneConnect: (id: string, args: Record<string, unknown>) => void;
    prePublish: (id: string, streamPath: string, args: Record<string, unknown>) => void;
    postPublish: (id: string, streamPath: string, args: Record<string, unknown>) => void;
    donePublish: (id: string, streamPath: string, args: Record<string, unknown>) => void;
    prePlay: (id: string, streamPath: string, args: Record<string, unknown>) => void;
    postPlay: (id: string, streamPath: string, args: Record<string, unknown>) => void;
    donePlay: (id: string, streamPath: string, args: Record<string, unknown>) => void;
    logMessage: (...args: any[]) => void;
    errorMessage: (...args: any[]) => void;
    debugMessage: (...args: any[]) => void;
    ffDebugMessage: (...args: any[]) => void;
};

declare class NodeMediaServer extends EventEmitter {
    constructor(config: Config);
    run(): void;
    on<E extends keyof NodeMediaServerEvents>(event: E, listener: NodeMediaServerEvents[E]): this;
    stop(): void;
    getSession(id: string): Map<string, unknown>;
}

export = NodeMediaServer;
