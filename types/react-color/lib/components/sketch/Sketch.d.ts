import { Component, CSSProperties } from "react";
import { ColorPickerProps, ColorResult } from "../../..";
import { Classes } from "reactcss";

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
    disableAlpha?: boolean;
    presetColors?: PresetColor[];
    width?: string;
    styles?: Partial<Classes<SketchPickerStylesProps>>;
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export default class SketchPicker extends Component<SketchPickerProps> { }
