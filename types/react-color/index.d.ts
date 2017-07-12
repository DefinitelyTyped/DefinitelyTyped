// Type definitions for react-color 2.11
// Project: https://github.com/casesandberg/react-color/
// Definitions by: Karol Janyst <https://github.com/LKay>, Marks Polakovs <https://github.com/markspolakovs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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

export { default as AlphaPicker, AlphaPickerProps } from "react-color/lib/components/alpha/Alpha";
export { default as BlockPicker, BlockPickerProps } from "react-color/lib/components/block/Block";
export { default as ChromePicker, ChromePickerProps } from "react-color/lib/components/chrome/Chrome";
export { default as CirclePicker, CirclePickerProps } from "react-color/lib/components/circle/Circle";
export { default as CompactPicker, CompactPickerProps } from "react-color/lib/components/compact/Compact";
export { default as GithubPicker, GithubPickerProps } from "react-color/lib/components/github/Github";
export { default as HuePicker, HuePickerProps } from "react-color/lib/components/hue/Hue";
export { default as MaterialPicker, MaterialPickerProps } from "react-color/lib/components/material/Material";
export { default as PhotoshopPicker, PhotoshopPickerProps } from "react-color/lib/components/photoshop/Photoshop";
export { default as SketchPicker, SketchPickerProps } from "react-color/lib/components/sketch/Sketch";
export { default as SliderPicker, SliderPickerProps } from "react-color/lib/components/slider/Slider";
export { default as SwatchesPicker, SwatchesPickerProps } from "react-color/lib/components/swatches/Swatches";
export { default as TwitterPicker, TwitterPickerProps } from "react-color/lib/components/twitter/Twitter";
export { default as CustomPicker, InjectedColorProps } from "react-color/lib/components/common/ColorWrap";
