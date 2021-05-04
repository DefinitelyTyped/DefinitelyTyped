import * as WaveSurfer from '../../wavesurfer';

export = MediaSessionPlugin;

declare class MediaSessionPlugin extends WaveSurfer.Observer implements WaveSurfer.WaveSurferPlugin {
    constructor(params: MediaSessionPluginParams, ws: WaveSurfer.WaveSurfer);
    static create(params: MediaSessionPluginParams): WaveSurfer.PluginDefinition;
    destroy(): void;
    init(): void;

    update(): void;

    readonly metadata: MediaMetadata;
    readonly params: MediaSessionPluginParams;
    readonly wavesurfer: WaveSurfer.WaveSurfer;
}

interface MediaSessionPluginParams extends WaveSurfer.PluginParams {
    /** Representation of the metadata associated with a MediaSession that can be used by user agents to provide a customized user interface. */
    metadata: MediaMetadata;
}

interface MediaMetadata {
    title: string;
    artist: string;
    album: string;
    artwork: MediaImage[];
}

interface MediaImage {
    src: string;
    sizes?: string;
    type?: string;
}
