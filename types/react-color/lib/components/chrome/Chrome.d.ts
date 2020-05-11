import { Component, CSSProperties } from "react";
import { ColorPickerProps } from "../../..";

export interface ChromePickerDefaultStyles {
    picker?: CSSProperties;
    saturation?: CSSProperties;
    Saturation?: CSSProperties;
    body?: CSSProperties;
    controls?: CSSProperties;
    color?: CSSProperties;
    swatch?: CSSProperties;
    active?: CSSProperties;
    toggles?: CSSProperties;
    hue?: CSSProperties;
    Hue?: CSSProperties;
    alpha?: CSSProperties;
    Alpha?: CSSProperties;
}

export interface ChromePickerDisableAlphaStyles {
    color?: CSSProperties;
    alpha?: CSSProperties;
    hue?: CSSProperties;
    swatch?: CSSProperties;
}

export interface ChromePickerStyles {
    default?: ChromePickerDefaultStyles;
    disableAlpha?: ChromePickerDisableAlphaStyles;
}

export interface ChromePickerProps extends ColorPickerProps<ChromePicker> {
    disableAlpha?: boolean;
    styles?: ChromePickerStyles;
}

export default class ChromePicker extends Component<ChromePickerProps> {}
