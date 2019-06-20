import { Component, CSSProperties } from "react";
import { CustomPickerProps, ColorState, RenderersProps } from "../../..";

export interface SketchPickerDefaultStyles {
    picker?: CSSProperties;
    saturation?: CSSProperties;
    Saturation?: CSSProperties;
    controls?: CSSProperties;
    sliders?: CSSProperties;
    color?: CSSProperties;
    activeColor?: CSSProperties;
    hue?: CSSProperties;
    Hue?: CSSProperties;
    alpha?: CSSProperties;
    Alpha?: CSSProperties;
}

export interface SketchPickerStyles {
    default?: SketchPickerDefaultStyles;
}

export interface SketchPickerProps extends RenderersProps, CustomPickerProps {
    disableAlpha?: boolean;
    presetColors?: string[];
    width?: string;
    onSwatchHover?(color: ColorState, event: MouseEvent): void;
    styles?: SketchPickerStyles;
    className?: string;
}

export default class SketchPicker extends Component<SketchPickerProps> {}
