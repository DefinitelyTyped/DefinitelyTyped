import { PluginDefinition, PluginParams, WaveSurferPlugin } from '../../types/plugin';
import Observer from '../util/observer';
import WaveSurfer from '../wavesurfer';

export default class PlayheadPlugin extends Observer implements WaveSurferPlugin {
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
    readonly style: WaveSurfer['util']['style'];
    readonly unFuns: Array<(this: WaveSurfer) => void>;
    readonly util: WaveSurfer['util'];
    readonly wavesurfer: WaveSurfer;
    readonly wrapper: HTMLElement;
}

export interface PlayheadPluginParams extends PluginParams {
    /** Draw the playhead as a triangle/line. */
    draw?: boolean | undefined;
    /** Seeking (via clicking) while playing moves the playhead. */
    moveOnSeek?: boolean | undefined;
    /** Pausing the track returns the seek position to the playhead. */
    returnOnPause?: boolean | undefined;
}
