import * as WaveSurfer from '../../wavesurfer';

export = CursorPlugin;

declare class CursorPlugin extends WaveSurfer.Observer implements WaveSurfer.WaveSurferPlugin {
    constructor(params: CursorPluginParams, ws: WaveSurfer.WaveSurfer);
    static create(params: CursorPluginParams): WaveSurfer.PluginDefinition;
    destroy(): void;
    init(): void;

    formatTime(cursorTime: number): string;
    hideCursor(): void;
    outerWidth(element: Element): number;
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
    readonly style: WaveSurfer.WaveSurfer['util']["style"];
    readonly wavesurfer: WaveSurfer.WaveSurfer;
    readonly wrapper: HTMLElement;
}

interface CursorPluginParams extends WaveSurfer.PluginParams {
    /** Hide the cursor when the mouse leaves the waveform (default: true). */
    hideOnBlur?: boolean;
    /** The width of the cursor (default: '1px'). */
    width?: string;
    /** The color of the cursor (default: 'black'). */
    color?: string;
    /** The opacity of the cursor (default 0.25). */
    opacity?: string;
    /** The border style of the cursor (default: 'solid'). */
    style?: string;
    /** The z-index of the cursor element (default: 3). */
    zIndex?: number;
    /** An object with custom styles which are applied to the cursor element. */
    customStyle?: WaveSurfer.Styles;
    /** Show the time on the cursor (default: false). */
    showTime?: boolean;
    /** An object with custom styles which are applied to the cursor time element. */
    customShowTimeStyle?: WaveSurfer.Styles;
    /**
     * Whether to follow both the x- and the y-position of the mouse (default: false).
     *
     * Use `true` to make the time on the cursor follow the x and the y-position of the mouse.
     * Use `false` to make the it only follow the x-position of the mouse.
     */
    followCursorY?: string | false;
    /** Formats the timestamp on the cursor. */
    formatTimeCallback?: ((cursorTime: number) => string) | null;
}
