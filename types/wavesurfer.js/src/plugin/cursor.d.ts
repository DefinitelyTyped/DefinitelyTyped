import { PluginDefinition, PluginParams, WaveSurferPlugin } from '../../types/plugin';
import { Styles } from '../../types/util';
import Observer from '../util/observer';
import WaveSurfer from '../wavesurfer';
export default class CursorPlugin extends Observer implements WaveSurferPlugin {
    constructor(params: CursorPluginParams, ws: WaveSurfer);
    static create(params: CursorPluginParams): PluginDefinition;
    destroy(): void;
    init(): void;

    formatTime(cursorTime: number): string;
    hideCursor(): void;
    showCursor(): void;
    updateCursorPosition(xpos: number, ypos: number, flip: boolean): void;

    /** The cursor HTML element. */
    readonly cursor: HTMLElement;
    readonly defaultParams: CursorPluginParams;
    /** The html container that will display the time. */
    readonly displayTime: HTMLElement;
    readonly params: CursorPluginParams;
    /** Displays the time next to the cursor. */
    readonly showTime: HTMLElement;
    readonly style: WaveSurfer['util']['style'];
    readonly wavesurfer: WaveSurfer;
    readonly wrapper: HTMLElement;
}

export interface CursorPluginParams extends PluginParams {
    /** Hide the cursor when the mouse leaves the waveform (default: true). */
    hideOnBlur?: boolean | undefined;
    /** The width of the cursor (default: '1px'). */
    width?: string | undefined;
    /** The color of the cursor (default: 'black'). */
    color?: string | undefined;
    /** The opacity of the cursor (default 0.25). */
    opacity?: string | undefined;
    /** The border style of the cursor (default: 'solid'). */
    style?: string | undefined;
    /** The z-index of the cursor element (default: 3). */
    zIndex?: number | undefined;
    /** An object with custom styles which are applied to the cursor element. */
    customStyle?: Styles | undefined;
    /** Show the time on the cursor (default: false). */
    showTime?: boolean | undefined;
    /** An object with custom styles which are applied to the cursor time element. */
    customShowTimeStyle?: Styles | undefined;
    /**
     * Whether to follow both the x- and the y-position of the mouse (default: false).
     *
     * Use `true` to make the time on the cursor follow the x and the y-position of the mouse.
     * Use `false` to make the it only follow the x-position of the mouse.
     */
    followCursorY?: string | false | undefined;
    /** Formats the timestamp on the cursor. */
    formatTimeCallback?: ((cursorTime: number) => string) | null | undefined;
}
