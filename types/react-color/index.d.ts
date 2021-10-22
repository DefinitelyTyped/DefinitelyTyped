// Type definitions for react-color 3.0
// Project: https://github.com/casesandberg/react-color/, http://casesandberg.github.io/react-color
// Definitions by:  Karol Janyst <https://github.com/LKay>,
//                  Marks Polakovs <https://github.com/markspolakovs>,
//                  Matthieu Montaudouin <https://github.com/mntdn>,
//                  Nokogiri <https://github.com/nkgrnkgr>,
//                  0815Strohhut <https://github.com/0815Strohhut>,
//                  Daniel Fürst <https://github.com/dnlfrst>,
//                  Erick Tamayo <https://github.com/ericktamayo>,
//                  Alexander P. Cerutti <https://github.com/alexandercerutti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ClassAttributes, ReactNode } from "react";
import { Classes } from "reactcss";

export interface HSLColor {
    a?: number | undefined;
    h: number;
    l: number;
    s: number;
}

export interface RGBColor {
    a?: number | undefined;
    b: number;
    g: number;
    r: number;
}

export type Color = string | HSLColor | RGBColor;

export interface ColorResult {
    hex: string;
    hsl: HSLColor;
    rgb: RGBColor;
}

export type ColorChangeHandler = (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => void;

export interface ColorPickerProps<A> extends ClassAttributes<A> {
    color?: Color | undefined;
    className?: string | undefined;
    styles?: Partial<Classes<any>> | undefined;
    onChange?: ColorChangeHandler | undefined;
    onChangeComplete?: ColorChangeHandler | undefined;
}

export interface CustomPickerProps<A> extends ClassAttributes<A> {
    color?: Color | undefined;
    pointer?: ReactNode | undefined;
    className?: string | undefined;
    styles?: Partial<Classes<any>> | undefined;
    onChange: ColorChangeHandler;
}

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
export { default as CustomPicker, InjectedColorProps } from "./lib/components/common/ColorWrap";
