import { PluginDefinition, PluginParams, WaveSurferObserver, WaveSurferPlugin } from "../..";

export = WaveSurfer.MediaSessionPlugin;

declare namespace WaveSurfer {
    class MediaSessionPlugin extends WaveSurferObserver implements WaveSurferPlugin {
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
}
