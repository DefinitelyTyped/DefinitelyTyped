// Type definitions for react-color 2.17
// Project: https://github.com/casesandberg/react-color/, http://casesandberg.github.io/react-color
// Definitions by:  Karol Janyst <https://github.com/LKay>,
//                  Marks Polakovs <https://github.com/markspolakovs>,
//                  Matthieu Montaudouin <https://github.com/mntdn>,
//                  Nokogiri <https://github.com/nkgrnkgr>,
//                  0815Strohhut <https://github.com/0815Strohhut>,
//                  Daniel Fürst <https://github.com/dnlfrst>,
//                  Erick Tamayo <https://github.com/ericktamayo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export interface HEXColor {
    hex: string;
    source?: string;
}

export interface HSLColor {
    a?: number;
    h: number;
    l: number;
    s: number;
    source?: string;
}

export interface RGBColor {
    a?: number;
    b: number;
    g: number;
    r: number;
    source?: string;
}

export interface HSVColor {
    a?: number;
    h: number;
    s: number;
    v: number;
    source?: string;
}

export type Color = string | HEXColor | HSLColor | RGBColor | HSVColor;

export interface ColorState {
    hex: string;
    hsl: HSLColor;
    hsv: HSVColor;
    rgb: RGBColor;
    oldHue: number;
    source: string;
}

export interface RenderersProps {
    renderers?: {
        canvas: any;
    };
}
export type ColorChangeHandler = (color: ColorState) => void;

export { default as AlphaPicker, AlphaPickerProps } from "./lib/components/alpha/Alpha";
export { default as BlockPicker, BlockPickerProps } from "./lib/components/block/Block";
export { default as Checkboard, CheckboardProps } from "./lib/components/common/Checkboard";
export { default as ChromePicker, ChromePickerProps } from "./lib/components/chrome/Chrome";
export { default as CirclePicker, CirclePickerProps } from "./lib/components/circle/Circle";
export { default as CompactPicker, CompactPickerProps } from "./lib/components/compact/Compact";
export { default as GithubPicker, GithubPickerProps } from "./lib/components/github/Github";
export { default as HuePicker, HuePickerProps } from "./lib/components/hue/Hue";
export { default as MaterialPicker, MaterialPickerProps } from "./lib/components/material/Material";
export {
    default as PhotoshopPicker,
    PhotoshopPickerProps
} from "./lib/components/photoshop/Photoshop";
export { default as SketchPicker, SketchPickerProps } from "./lib/components/sketch/Sketch";
export { default as SliderPicker, SliderPickerProps } from "./lib/components/slider/Slider";
export { default as SwatchesPicker, SwatchesPickerProps } from "./lib/components/swatches/Swatches";
export { default as TwitterPicker, TwitterPickerProps } from "./lib/components/twitter/Twitter";
export {
    default as CustomPicker,
    CustomPickerInjectedProps,
    CustomPickerProps
} from "./lib/components/common/ColorWrap";
