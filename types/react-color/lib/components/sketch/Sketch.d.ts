import { Component, CSSProperties } from "react";
import { Classes } from "reactcss";
import { ColorPickerProps, ColorResult } from "../../..";

export interface SketchPickerStylesProps {
    picker: CSSProperties;
    saturation: CSSProperties;
    Saturation: CSSProperties;
    controls: CSSProperties;
    sliders: CSSProperties;
    color: CSSProperties;
    activeColor: CSSProperties;
    hue: CSSProperties;
    Hue: CSSProperties;
    alpha: CSSProperties;
    Alpha: CSSProperties;
}

export type PresetColor = { color: string; title: string } | string;
export interface SketchPickerProps extends ColorPickerProps<SketchPicker> {
    disableAlpha?: boolean | undefined;
    presetColors?: PresetColor[] | undefined;
    width?: string | undefined;
    styles?: Partial<Classes<SketchPickerStylesProps>> | undefined;
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export default class SketchPicker extends Component<SketchPickerProps> {}
