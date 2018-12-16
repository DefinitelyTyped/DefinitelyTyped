// Type definitions for react-color 2.13
// Project: https://github.com/casesandberg/react-color/
// Definitions by: Karol Janyst <https://github.com/LKay>, Marks Polakovs <https://github.com/markspolakovs>, Matthieu Montaudouin <https://github.com/mntdn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentClass, ClassAttributes, StatelessComponent, ReactNode } from "react";

export interface HSLColor {
    a?: number;
    h: number;
    l: number;
    s: number;
}

export interface RGBColor {
    a?: number;
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

export type ColorChangeHandler = (color: ColorResult) => void;

export interface ColorPickerProps<A> extends ClassAttributes<A> {
    color?: Color;
    onChange?: ColorChangeHandler;
    onChangeComplete?: ColorChangeHandler;
}

export interface CustomPickerProps<A> extends ClassAttributes<A> {
    color?: Color;
    pointer?: ReactNode;
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
export { default as PhotoshopPicker, PhotoshopPickerProps } from "./lib/components/photoshop/Photoshop";
export { default as SketchPicker, SketchPickerProps } from "./lib/components/sketch/Sketch";
export { default as SliderPicker, SliderPickerProps } from "./lib/components/slider/Slider";
export { default as SwatchesPicker, SwatchesPickerProps } from "./lib/components/swatches/Swatches";
export { default as TwitterPicker, TwitterPickerProps } from "./lib/components/twitter/Twitter";
export { default as CustomPicker, InjectedColorProps } from "./lib/components/common/ColorWrap";
