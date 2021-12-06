// Type definitions for node-media-server 2.3
// Project: https://github.com/illuspas/Node-Media-Server
// Definitions by: Thomas Seberechts <https://github.com/Tseberechts>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
    port?: number;
    allow_origin?: string;
}

interface AuthConfig {
    play?: boolean;
    publish?: boolean;
    secret?: string;
}

interface TransConfig {
    ffmpeg: string;
    tasks: [TransTaskConfig];
}

interface RelayConfig {
    tasks: [RelayTaskConfig];
    ffmpeg: string;
}

interface FissionConfig {
    ffmpeg: string;
    tasks: [FissionTaskConfig];
}

interface TransTaskConfig {
    app: string;
    hls?: boolean;
    hlsFlags?: string;
    dash?: true;
    dashFlags?: string;
    vc?: string;
    vcParam?: [string];
    ac?: string;
    acParam?: [string];
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
}

interface FissionTaskConfig {
    rule: string;
    model: [FissionTaskModel];
}

interface FissionTaskModel {
    ab: string;
    vb: string;
    vs: string;
    vf: string;
}

declare class NodeMediaServer {
    config: Config;
    constructor(config: Config);
    run(): any;
    on(eventName: string, listener: () => any): any;
    stop(): any;
    getSession(id: string): any;
}

export = NodeMediaServer;
