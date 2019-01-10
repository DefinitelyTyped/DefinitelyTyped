// Type definitions for agora-rtc-sdk 2.3
// Project: https://github.com/AgoraIO/web-archive#readme
// Definitions by: Menthays <https://github.com/menthays>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace AgoraRTC;

/*~ If this module has methods, declare them as functions like so.
 */
export function createClient(config: ClientConfig): Client;
export function createStream(spec: StreamSpec): Stream;
export function checkSystemRequirements(): boolean;
export function getDevices(callback: (devices: any[]) => void): void;

/*~ You can declare types that are available via importing the module */
export interface ClientConfig  {
    mode: 'live' | 'rtc';
    codec: 'vp8' | 'h264';
    proxyServer?: string;
    turnServer?: {
        turnServerURL: string;
        username: string;
        password: string;
        udpport: string;
        tcpport: string;
        forceturn: boolean;
    };
}

export interface StreamSpec  {
    streamID: number;
    audio: boolean;
    video: boolean;
    screen: boolean;
    cameraId?: string;
    microphoneId?: string;
    mirror?: boolean;
    extensionid?: string;
    mediaSource?: 'screen' | 'application' | 'window';
    audioProcessing?: {
        AGC: boolean;
    };
    attributes?: {
        resolution: string;
        minFrameRate: number;
        maxFrameRate: number;
    };
}

export interface LocalStreamStats {
    audioSendBytes: string;
    audioSendPackets: string;
    videoSendBytes: string;
    videoSendPackets: string;
    videoSendPacketsLost: string;
    videoSendFrameRate: string;
    videoSendBandwidth: string;
    videoSendResolutionWidth?: string;
    videoSendResolutionHeight?: string;
    audioCodecName: string;
    videoCodecName: string;
    timestamp: string;
    startTime: string;
    duration: string;
}

export interface RemoteStreamStats {
    audioReceiveBytes: string;
    audioReceivePackets: string;
    audioReceivePacketsLost: string;
    videoReceiveBytes: string;
    videoReceivePackets: string;
    videoReceivePacketsLost: string;
    videoReceiveFrameRate?: string;
    videoReceiveDecodeFrameRate?: string;
    videoReceiveBandwidth?: string;
    videoReceivedResolutionWidth?: string;
    videoReceivedResolutionHeight?: string;
    timestamp: string;
    startTime: string;
    duration: string;
}

export type VideoProfile =
    | '120p'
    | '120p_1'
    | '120p_3'
    | '180p'
    | '180p_1'
    | '180p_3'
    | '180p_4'
    | '240p'
    | '240p_1'
    | '240p_3'
    | '240p_4'
    | '360p'
    | '360p_1'
    | '360p_3'
    | '360p_4'
    | '360p_6'
    | '360p_7'
    | '360p_8'
    | '360p_9'
    | '360p_10'
    | '360p_11'
    | '480p'
    | '480p_1'
    | '480p_2'
    | '480p_3'
    | '480p_4'
    | '480p_6'
    | '480p_8'
    | '480p_9'
    | '480p_10'
    | '720p'
    | '720p_1'
    | '720p_2'
    | '720p_3'
    | '720p_5'
    | '720p_6'
    | '1080p'
    | '1080p_1'
    | '1080p_2'
    | '1080p_3'
    | '1080p_5'
    | '1440p'
    | '1440p_1'
    | '1440p_2'
    | '4K'
    | '4K_1'
    | '4K_3';

export type FirefoxVideoProfile =
    | '480p'
    | '480p_1'
    | '480p_2'
    | '480p_3'
    | '480p_4'
    | '480p_6'
    | '480p_8'
    | '480p_9'
    | '480p_10'
    | '720p'
    | '720p_1'
    | '720p_2'
    | '720p_3'
    | '720p_5'
    | '720p_6';

export type SafariVideoProfile =
    | '480p'
    | '480p_1'
    | '480p_2'
    | '480p_3'
    | '480p_4'
    | '480p_6'
    | '480p_8'
    | '480p_9'
    | '480p_10'
    | '720p'
    | '720p_1'
    | '720p_2'
    | '720p_3'
    | '720p_5'
    | '720p_6'
    | '1080p'
    | '1080p_1'
    | '1080p_2'
    | '1080p_3'
    | '1080p_5'
    | '1440p'
    | '1440p_1'
    | '1440p_2'
    | '4K'
    | '4K_1'
    | '4K_3';

export type ScreenSharingProfile =
    | '480p_1'
    | '480p_2'
    | '720p_1'
    | '720p_2'
    | '1080p_1'
    | '1080p_2';

export type ClientEvent =
    | 'stream-published'
    | 'stream-added'
    | 'stream-removed'
    | 'stream-subscribed'
    | 'peer-leave'
    | 'mute-audio'
    | 'unmute-audio'
    | 'mute-video'
    | 'unmute-video'
    | 'client-banned'
    | 'active-speaker'
    | 'error';

export interface Stream {
    getStats(
        callback: (stats: LocalStreamStats | RemoteStreamStats) => void
    ): void;
    init(onSuccess: () => void, onFailure: (err: any) => void): void;
    getId(): number;
    getAttributes(): any;
    getAudioLevel(): number;
    hasVideo(): boolean;
    hasAudio(): boolean;
    enableVideo(): void;
    disableVideo(): void;
    enableAudio(): void;
    disableAudio(): void;
    setVideoProfile(
        profile:
        | VideoProfile
        | FirefoxVideoProfile
        | SafariVideoProfile
        | ScreenSharingProfile
    ): void;
    play(HTMLElementID: string): void;
    stop(): void;
    close(): void;
}

export interface Client {
    on(eventName: ClientEvent, callback: (evt: any) => void): void;
    init(
        appId: string,
        onSuccess: () => void,
        onFailure: (err: any) => void
    ): void;
    join(
        tokenOrKey: string,
        channel: string,
        uid: number,
        onSuccess: (uid: number) => void,
        onFailure: (err: any) => void
    ): void;
    renewChannelKey(
        key: string,
        onSuccess: () => void,
        onFailure: (err: any) => void
    ): void;
    enableDualStream(
        onSuccess: () => void,
        onFailure: (err: any) => void
    ): void;
    setRemoteVideoStreamType(stream: Stream, streamType: 0 | 1): void;
    setLowStreamParameter(param: {
        width: number;
        height: number;
        framerate: number;
        birate: number;
    }): void;
    disableDualStream(
        onSuccess: () => void,
        onFailure: (err: any) => void
    ): void;
    leave(onSuccess: () => void, onFailure: (err: any) => void): void;
    publish(stream: Stream, onFailure: (err: any) => void): void;
    unpublish(stream: Stream, onFailure: (err: any) => void): void;
    subscribe(stream: Stream, onFailure: (err: any) => void): void;
    unsubscribe(stream: Stream, onFailure: (err: any) => void): void;
    setProxyServer(proxyServer: ClientConfig['proxyServer']): void;
    setTurnServer(turnServer: ClientConfig['turnServer']): void;
    setEncryptionSecret(password: string): void;
    setEncryptionMode(
        encryptionMode: 'aes-128-xts' | 'aes-256-xts' | 'aes-128-ecb'
    ): void;
}

/*~ You can declare properties of the module using const, let, or var */
export const VERSION: string;

export const AUDIO_SAMPLE_RATE_32000: 32000;
export const AUDIO_SAMPLE_RATE_44100: 44100;
export const AUDIO_SAMPLE_RATE_48000: 48000;

export const VIDEO_CODEC_PROFILE_BASELINE: 66;
export const VIDEO_CODEC_PROFILE_MAIN: 77;
export const VIDEO_CODEC_PROFILE_HIGH: 100;

export const REMOTE_VIDEO_STREAM_HIGH: 0;
export const REMOTE_VIDEO_STREAM_LOW: 1;
export const REMOTE_VIDEO_STREAM_MEDIUM: 2;
/*~ If there are types, properties, or methods inside dotted names
 *~ of the module, declare them inside a 'namespace'.
 */
export namespace Logger {
    /*~ For example, given this definition, someone could write:
     *~   import { subProp } from 'yourModule';
     *~   subProp.foo();
     *~ or
     *~   import * as yourMod from 'yourModule';
     *~   yourMod.subProp.foo();
     */
    type DEBUG = 0;
    type INFO = 1;
    type WARNING = 2;
    type ERROR = 3;
    type NONE = 4;
    function setLogLevel(level: DEBUG|INFO|WARNING|NONE): void;
    function log(args: any): void;
    function debug(args: any): void;
    function info(args: any): void;
    function warning(args: any): void;
    function error(args: any): void;
}
