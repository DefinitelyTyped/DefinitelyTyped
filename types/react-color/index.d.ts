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

export { AlphaPickerProps, default as AlphaPicker } from "./lib/components/alpha/Alpha";
export { BlockPickerProps, default as BlockPicker } from "./lib/components/block/Block";
export { ChromePickerProps, default as ChromePicker } from "./lib/components/chrome/Chrome";
export { CirclePickerProps, default as CirclePicker } from "./lib/components/circle/Circle";
export { CheckboardProps, default as Checkboard } from "./lib/components/common/Checkboard";
export { default as CustomPicker, InjectedColorProps } from "./lib/components/common/ColorWrap";
export { CompactPickerProps, default as CompactPicker } from "./lib/components/compact/Compact";
export { default as GithubPicker, GithubPickerProps } from "./lib/components/github/Github";
export { default as HuePicker, HuePickerProps } from "./lib/components/hue/Hue";
export { default as MaterialPicker, MaterialPickerProps } from "./lib/components/material/Material";
export { default as PhotoshopPicker, PhotoshopPickerProps } from "./lib/components/photoshop/Photoshop";
export { default as SketchPicker, SketchPickerProps } from "./lib/components/sketch/Sketch";
export { default as SliderPicker, SliderPickerProps } from "./lib/components/slider/Slider";
export { default as SwatchesPicker, SwatchesPickerProps } from "./lib/components/swatches/Swatches";
export { default as TwitterPicker, TwitterPickerProps } from "./lib/components/twitter/Twitter";
