import { PluginDefinition, PluginParams, WaveSurferPlugin } from '../../types/plugin';
import Observer = require('../util/observer');
import WaveSurfer = require('../wavesurfer');

export = MediaSessionPlugin;

declare class MediaSessionPlugin extends Observer implements WaveSurferPlugin {
    constructor(params: MediaSessionPluginParams, ws: WaveSurfer);
    static create(params: MediaSessionPluginParams): PluginDefinition;
    destroy(): void;
    init(): void;

    update(): void;

    readonly metadata: MediaMetadata;
    readonly params: MediaSessionPluginParams;
    readonly wavesurfer: WaveSurfer;
}

interface MediaSessionPluginParams extends PluginParams {
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
