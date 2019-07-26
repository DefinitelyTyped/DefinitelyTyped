// Type definitions for react-native-webrtc 1.69.2
// Project: https://github.com/react-native-webrtc/react-native-webrtc
// Definitions by: Carlos Quiroga <https://github.com/KarlosQ>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type RTCSignalingState =
    | "stable"
    | "have-local-offer"
    | "have-remote-offer"
    | "have-local-pranswer"
    | "have-remote-pranswer"
    | "closed";

export type RTCIceGatheringState = "new" | "gathering" | "complete";

export type MediaStreamTrackState = "live" | "ended";

export type SourceInfo = {
    id: string;
    label: string;
    facing: string;
    kind: string;
};

export type RTCIceConnectionState =
    | "new"
    | "checking"
    | "connected"
    | "completed"
    | "failed"
    | "disconnected"
    | "closed";

export class MediaStreamTrack {
    private _enabled: boolean;

    public enabled: boolean;
    public id: string;
    public kind: string;
    public label: string;
    public muted: boolean;
    public readonly: boolean;
    public readyState: MediaStreamTrackState;
    public remote: boolean;
    public onended: Function | undefined;
    public onmute: Function | undefined;
    public onunmute: Function | undefined;
    public overconstrained: Function | undefined;

    public constructor();

    public stop(): void;
    public applyConstraints(): void;
    public clone(): void;
    public getCapabilities(): void;
    public getConstraints(): void;
    public getSettings(): void;
    public release(): void;

    private _switchCamera(): void;
}

export class MediaStream {
    public id: string;
    public active: boolean;
    public onactive: Function | undefined;
    public oninactive: Function | undefined;
    public onaddtrack: Function | undefined;
    public onremovetrack: Function | undefined;

    private _tracks: Array<MediaStreamTrack>;
    private _reactTag: string;

    public constructor(arg: any);

    public addTrack(track: MediaStreamTrack): void;
    public removeTrack(track: MediaStreamTrack): void;
    public getTracks(): Array<MediaStreamTrack>;
    public getTrackById(trackId: string): MediaStreamTrack | undefined;
    public getAudioTracks(): Array<MediaStreamTrack>;
    public getVideoTracks(): Array<MediaStreamTrack>;
    public clone(): void;
    public toURL(): string;
    public release(): void;
}

interface ConfigurationParam {
    username?: string;
    credential?: string;
}

interface ConfigurationParamWithUrls extends ConfigurationParam {
    urls: Array<string>;
}

interface ConfigurationParamWithUrl extends ConfigurationParam {
    url: string;
}

export interface RTCPeerConnectionConfiguration {
    iceServers: Array<ConfigurationParamWithUrls | ConfigurationParamWithUrl>;
    iceTransportPolicy?: "all" | "public" | "relay";
}

export class RTCPeerConnection {
    public localDescription: RTCSessionDescriptionType;
    public remoteDescription: RTCSessionDescriptionType;

    public signalingState: RTCSignalingState;
    private privateiceGatheringState: RTCIceGatheringState;
    private privateiceConnectionState: RTCIceConnectionState;

    public onconnectionstatechange: Function | undefined;
    public onicecandidate: Function | undefined;
    public onicecandidateerror: Function | undefined;
    public oniceconnectionstatechange: Function | undefined;
    public onicegatheringstatechange: Function | undefined;
    public onnegotiationneeded: Function | undefined;
    public onsignalingstatechange: Function | undefined;

    public onaddstream: Function | undefined;
    public onremovestream: Function | undefined;

    private _peerConnectionId: number;
    private _localStreams: Array<MediaStream>;
    private _remoteStreams: Array<MediaStream>;
    private _subscriptions: Array<any>;

    private _dataChannelIds: any;

    public constructor(configuration: RTCPeerConnectionConfiguration);

    public addStream(stream: MediaStream): void;

    public removeStream(stream: MediaStream): void;

    public createOffer(): Promise<RTCSessionDescriptionType>;

    public createAnswer(): Promise<RTCSessionDescriptionType>;

    public setConfiguration(
        configuration: RTCPeerConnectionConfiguration
    ): void;

    public setLocalDescription(
        sessionDescription: RTCSessionDescriptionType
    ): Promise<void>;

    public setRemoteDescription(
        sessionDescription: RTCSessionDescriptionType
    ): Promise<void>;

    public addIceCandidate(candidate: RTCIceCandidateType): Promise<void>;

    public getStats(selector?: MediaStreamTrack | null): Promise<any>;

    public getLocalStreams(): Array<MediaStream>;

    public getRemoteStreams(): Array<MediaStream>;

    public close(): void;

    private _getTrack(
        streamReactTag: string,
        trackId: string
    ): MediaStreamTrack;

    private _unregisterEvents(): void;

    private _registerEvents(): void;

    public createDataChannel(label: string, dataChannelDict?: any): void;
}

export class RTCIceCandidateType {
    candidate: string;
    sdpMLineIndex: number;
    sdpMid: string;
}

export class RTCIceCandidate extends RTCIceCandidateType {
    public constructor(info: RTCIceCandidateType);

    public toJSON(): RTCIceCandidateType;
}

export class RTCSessionDescriptionType {
    sdp: string;
    type: string;
}

export class RTCSessionDescription extends RTCSessionDescriptionType {
    public constructor(info: RTCSessionDescriptionType);
    public toJSON(): RTCSessionDescriptionType;
}

interface MandatoryMedia {
    minWidth: number;
    minHeight: number;
    minFrameRate: number;
}

interface MediaSources {
    sourceId: string;
}

interface MediaTrackConstraints {
    mandatory: MandatoryMedia;
    facingMode: "user" | "environment";
    optional: Array<MediaSources>;
}

export interface MediaStreamConstraints {
    video?: boolean | MediaTrackConstraints;
    audio?: boolean;
}

export class mediaDevices {
    public ondevicechange: Function | undefined;

    public static enumerateDevices(): Promise<any>;

    public static getUserMedia(
        constraints: MediaStreamConstraints
    ): MediaStreamConstraints;
}
