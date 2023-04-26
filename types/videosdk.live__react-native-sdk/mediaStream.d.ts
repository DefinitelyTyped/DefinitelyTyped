export type MediaStreamTrackState = 'live' | 'ended';

export class MediaStreamTrack {
    private _enabled: boolean;

    enabled: boolean;
    id: string;
    kind: string;
    label: string;
    muted: boolean;
    readonly: boolean;
    readyState: MediaStreamTrackState;
    remote: boolean;
    onended: () => void | undefined;
    onmute: () => void | undefined;
    onunmute: () => void | undefined;
    overconstrained: () => void | undefined;

    constructor();

    stop(): void;
    applyConstraints(): void;
    clone(): void;
    getCapabilities(): void;
    getConstraints(): void;
    getSettings(): void;
    release(): void;

    private _switchCamera(): void;
}

export class MediaStream {
    id: string;
    active: boolean;
    onactive: () => void | undefined;
    oninactive: () => void | undefined;
    onaddtrack: () => void | undefined;
    onremovetrack: () => void | undefined;

    private _tracks: MediaStreamTrack[];
    private _reactTag: string;

    constructor(arg: any);

    addTrack(track: MediaStreamTrack): void;
    removeTrack(track: MediaStreamTrack): void;
    getTracks(): MediaStreamTrack[];
    getTrackById(trackId: string): MediaStreamTrack | undefined;
    getAudioTracks(): MediaStreamTrack[];
    getVideoTracks(): MediaStreamTrack[];
    clone(): void;
    toURL(): string;
    release(): void;
}
