import {
    PluginDefinition,
    PluginParams,
    Styles,
    WaveSurferObserver,
    WaveSurferPlugin,
    WaveSurferUtil,
} from "../../index";

export = WaveSurfer.CursorPlugin;

declare namespace WaveSurfer {
    class CursorPlugin extends WaveSurferObserver implements WaveSurferPlugin {
        constructor(params: CursorPluginParams, ws: WaveSurfer);
        static create(params: CursorPluginParams): PluginDefinition;
        destroy(): void;
        init(): void;

        formatTime(cursorTime: number): string;
        hideCursor(): void;
        outerWidth(element: Element): number;
        showCursor(): void;
        updateCursorPosition(xpos: number, ypos: number, flip: boolean): void;

        readonly cursor: HTMLElement;
        readonly defaultParams: CursorPluginParams;
        readonly displayTime: HTMLElement;
        readonly params: CursorPluginParams;
        readonly showTime: HTMLElement;
        readonly style: WaveSurferUtil["style"];
        readonly wavesurfer: WaveSurfer;
        readonly wrapper: HTMLElement;
    }

    interface CursorPluginParams extends PluginParams {
        container?: string;
        hideOnBlur?: boolean;
        width?: string;
        color?: string;
        opacity?: string;
        style?: string;
        zIndex?: number;
        customStyle?: Styles;
        showTime?: boolean;
        customShowTimeStyle?: Styles;
        followCursorY?: string | false;
        formatTimeCallback?: ((cursorTime: number) => string) | null;
    }
}
