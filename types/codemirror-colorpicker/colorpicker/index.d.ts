export {};

type ColorSet =
    | {
        name: string;
        colors: string[];
    }
    | {
        name: string;
        scale: string[];
        count: number;
    };

interface Options {
    position?: "inline";
    container?: HTMLElement;
    type?:
        | "box"
        | "macos"
        | "xd"
        | "ring"
        | "mini"
        | "vscode"
        | "mini-vertical"
        | "sketch"
        | "palette"
        | "default";
    color?: string;
    outputFormat?: "rgb" | "hsl" | "hex";
    hideDelay?: number;
    onHide?: (color: string) => void;
    onChange?: (color: string) => void;
    onLastUpdate?: (color: string) => void;
}

declare class BaseColorPicker {
    constructor(opt: Options);

    show(opt, color, showCallback, hideCallback, lastUpdateCallback);

    initColor(newColor, format);

    hide();

    setColorsInPalette(colors?: ColorSet[]);

    setUserPalette(list?: ColorSet[]);
}

export function create(opts: Options): BaseColorPicker;

export const ColorPicker: typeof ChromeDevToolColorPicker;

export class ChromeDevToolColorPicker extends BaseColorPicker {}

export class MacOSColorPicker extends BaseColorPicker {}

export class RingColorPicker extends BaseColorPicker {}

export class MiniColorPicker extends BaseColorPicker {}

export class VSCodePicker extends BaseColorPicker {}

export class MiniVerticalColorPicker extends BaseColorPicker {}
