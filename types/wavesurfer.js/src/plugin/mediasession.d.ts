import { PluginDefinition, PluginParams, WaveSurferPlugin } from '../../types/plugin';
import Observer from '../util/observer';
import WaveSurfer from '../wavesurfer';

export default class MediaSessionPlugin extends Observer implements WaveSurferPlugin {
    constructor(params: MediaSessionPluginParams, ws: WaveSurfer);
    static create(params: MediaSessionPluginParams): PluginDefinition;
    destroy(): void;
    init(): void;

    update(): void;

    readonly metadata: MediaMetadata;
    readonly params: MediaSessionPluginParams;
    readonly wavesurfer: WaveSurfer;
}

export interface MediaSessionPluginParams extends PluginParams {
    /** Representation of the metadata associated with a MediaSession that can be used by user agents to provide a customized user interface. */
    metadata: MediaMetadata;
}

export interface MediaMetadata {
    title: string;
    artist: string;
    album: string;
    artwork: MediaImage[];
}

export interface MediaImage {
    src: string;
    sizes?: string | undefined;
    type?: string | undefined;
}
