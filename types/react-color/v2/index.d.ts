export interface HEXColor {
    hex: string;
    source?: string | undefined;
}

export interface HSLColor {
    a?: number | undefined;
    h: number;
    l: number;
    s: number;
    source?: string | undefined;
}

export interface RGBColor {
    a?: number | undefined;
    b: number;
    g: number;
    r: number;
    source?: string | undefined;
}

export interface HSVColor {
    a?: number | undefined;
    h: number;
    s: number;
    v: number;
    source?: string | undefined;
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
    } | undefined;
}

export type ColorChangeHandler<T = HSLColor | HSVColor | RGBColor> = (color: T) => void;

export { AlphaPickerProps, default as AlphaPicker } from "./lib/components/alpha/Alpha";
export { BlockPickerProps, default as BlockPicker } from "./lib/components/block/Block";
export { ChromePickerProps, default as ChromePicker } from "./lib/components/chrome/Chrome";
export { CirclePickerProps, default as CirclePicker } from "./lib/components/circle/Circle";
export { CheckboardProps, default as Checkboard } from "./lib/components/common/Checkboard";
export {
    CustomPickerInjectedProps,
    CustomPickerProps,
    default as CustomPicker,
} from "./lib/components/common/ColorWrap";
export { CompactPickerProps, default as CompactPicker } from "./lib/components/compact/Compact";
export { default as GithubPicker, GithubPickerProps } from "./lib/components/github/Github";
export { default as HuePicker, HuePickerProps } from "./lib/components/hue/Hue";
export { default as MaterialPicker, MaterialPickerProps } from "./lib/components/material/Material";
export { default as PhotoshopPicker, PhotoshopPickerProps } from "./lib/components/photoshop/Photoshop";
export { default as SketchPicker, SketchPickerProps } from "./lib/components/sketch/Sketch";
export { default as SliderPicker, SliderPickerProps } from "./lib/components/slider/Slider";
export { default as SwatchesPicker, SwatchesPickerProps } from "./lib/components/swatches/Swatches";
export { default as TwitterPicker, TwitterPickerProps } from "./lib/components/twitter/Twitter";
