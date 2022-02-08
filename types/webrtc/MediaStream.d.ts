// Type definitions for WebRTC
// Project: http://dev.w3.org/2011/webrtc/
// Definitions by: Ken Smith <https://github.com/smithkl42/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Taken from http://dev.w3.org/2011/webrtc/editor/getusermedia.html
// version: W3C Editor's Draft 29 June 2015

interface ConstrainBooleanParameters {
    exact?: boolean | undefined;
    ideal?: boolean | undefined;
}

interface NumberRange {
    max?: number | undefined;
    min?: number | undefined;
}

interface ConstrainNumberRange extends NumberRange {
    exact?: number | undefined;
    ideal?: number | undefined;
}

interface ConstrainStringParameters {
    exact?: string | string[] | undefined;
    ideal?: string | string[] | undefined;
}

interface MediaStreamConstraints {
    video?: boolean | MediaTrackConstraints | undefined;
    audio?: boolean | MediaTrackConstraints | undefined;
}

declare namespace W3C {
    type LongRange = NumberRange;
    type DoubleRange = NumberRange;
    type ConstrainBoolean = boolean | ConstrainBooleanParameters;
    type ConstrainNumber = number | ConstrainNumberRange;
    type ConstrainLong = ConstrainNumber;
    type ConstrainDouble = ConstrainNumber;
    type ConstrainString = string | string[] | ConstrainStringParameters;
}

interface MediaTrackConstraints extends MediaTrackConstraintSet {
    advanced?: MediaTrackConstraintSet[] | undefined;
}

interface MediaTrackConstraintSet {
    width?: W3C.ConstrainLong | undefined;
    height?: W3C.ConstrainLong | undefined;
    aspectRatio?: W3C.ConstrainDouble | undefined;
    frameRate?: W3C.ConstrainDouble | undefined;
    facingMode?: W3C.ConstrainString | undefined;
    volume?: W3C.ConstrainDouble | undefined;
    sampleRate?: W3C.ConstrainLong | undefined;
    sampleSize?: W3C.ConstrainLong | undefined;
    echoCancellation?: W3C.ConstrainBoolean | undefined;
    latency?: W3C.ConstrainDouble | undefined;
    deviceId?: W3C.ConstrainString | undefined;
    groupId?: W3C.ConstrainString | undefined;
}

interface MediaTrackSupportedConstraints {
    width?: boolean | undefined;
    height?: boolean | undefined;
    aspectRatio?: boolean | undefined;
    frameRate?: boolean | undefined;
    facingMode?: boolean | undefined;
    volume?: boolean | undefined;
    sampleRate?: boolean | undefined;
    sampleSize?: boolean | undefined;
    echoCancellation?: boolean | undefined;
    latency?: boolean | undefined;
    deviceId?: boolean | undefined;
    groupId?: boolean | undefined;
}

interface MediaStream extends EventTarget {
    //id: string;
    //active: boolean;

    //onactive: EventListener;
    //oninactive: EventListener;
    //onaddtrack: (event: MediaStreamTrackEvent) => any;
    //onremovetrack: (event: MediaStreamTrackEvent) => any;

    clone(): MediaStream;
    stop(): void;

    getAudioTracks(): MediaStreamTrack[];
    getVideoTracks(): MediaStreamTrack[];
    getTracks(): MediaStreamTrack[];

    getTrackById(trackId: string): MediaStreamTrack;

    addTrack(track: MediaStreamTrack): void;
    removeTrack(track: MediaStreamTrack): void;
}

interface MediaStreamTrackEvent extends Event {
    //track: MediaStreamTrack;
}

interface MediaStreamTrack extends EventTarget {
    //id: string;
    //kind: string;
    //label: string;
    enabled: boolean;
    //muted: boolean;
    //remote: boolean;
    //readyState: MediaStreamTrackState;

    //onmute: EventListener;
    //onunmute: EventListener;
    //onended: EventListener;
    //onoverconstrained: EventListener;

    clone(): MediaStreamTrack;

    stop(): void;

    getCapabilities(): MediaTrackCapabilities;
    getConstraints(): MediaTrackConstraints;
    getSettings(): MediaTrackSettings;
    applyConstraints(constraints: MediaTrackConstraints): Promise<void>;
}

interface MediaTrackCapabilities {
    //width: number | W3C.LongRange;
    //height: number | W3C.LongRange;
    //aspectRatio: number | W3C.DoubleRange;
    //frameRate: number | W3C.DoubleRange;
    //facingMode: string;
    //volume: number | W3C.DoubleRange;
    //sampleRate: number | W3C.LongRange;
    //sampleSize: number | W3C.LongRange;
    //echoCancellation: boolean[];
    latency?: W3C.DoubleRange | undefined;
    //deviceId: string;
    //groupId: string;
}

interface MediaTrackSettings {
    //width: number;
    //height: number;
    //aspectRatio: number;
    //frameRate: number;
    //facingMode: string;
    //volume: number;
    //sampleRate: number;
    //sampleSize: number;
    //echoCancellation: boolean;
    latency?: number | undefined;
    //deviceId: string;
    //groupId: string;
}

interface MediaStreamError {
    readonly name: string;
    readonly message: string | null;
    readonly constraintName: string | null;
}

interface NavigatorGetUserMedia {
    (constraints: MediaStreamConstraints,
     successCallback: (stream: MediaStream) => void,
     errorCallback: (error: MediaStreamError) => void): void;
}

// to use with adapter.js, see: https://github.com/webrtc/adapter
declare var getUserMedia: NavigatorGetUserMedia;

interface Navigator {
    getUserMedia: NavigatorGetUserMedia;

    webkitGetUserMedia: NavigatorGetUserMedia;

    mozGetUserMedia: NavigatorGetUserMedia;

    msGetUserMedia: NavigatorGetUserMedia;

    readonly mediaDevices: MediaDevices;
}

interface MediaDevices {
    getSupportedConstraints(): MediaTrackSupportedConstraints;

    getUserMedia(constraints: MediaStreamConstraints): Promise<MediaStream>;
    enumerateDevices(): Promise<MediaDeviceInfo[]>;
}

interface MediaDeviceInfo {
    //label: string;
    //deviceId: string;
    //kind: string;
    //groupId: string;
}
