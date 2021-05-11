import { WaveSurferObserver, WaveSurferPlugin, PluginDefinition, PluginParams, WaveSurferUtil } from "../..";

export = WaveSurfer.PlayheadPlugin;

declare namespace WaveSurfer {
    class PlayheadPlugin extends WaveSurferObserver implements WaveSurferPlugin {
        constructor(params: PlayheadPluginParams, ws: WaveSurfer);
        static create(params: PlayheadPluginParams): PluginDefinition;
        destroy(): void;
        init(): void;

        setPlayheadTime(time: number): void;
        wavesurferOn(ev: string, fn: EventListener): void;

        readonly element: HTMLElement;
        readonly markerHeight: number;
        readonly markerWidth: number;
        readonly options: Record<string, unknown>;
        readonly params: PlayheadPluginParams;
        readonly playheadTime: number;
        readonly style: WaveSurferUtil["style"];
        readonly unFuns: Array<(this: WaveSurfer) => void>;
        readonly util: WaveSurferUtil;
        readonly wavesurfer: WaveSurfer;
        readonly wrapper: HTMLElement;
    }

    interface PlayheadPluginParams extends PluginParams {
        /** Draw the playhead as a triangle/line. */
        draw?: boolean;
        /** Seeking (via clicking) while playing moves the playhead. */
        moveOnSeek?: boolean;
        /** Pausing the track returns the seek position to the playhead. */
        returnOnPause?: boolean;
    }
}
