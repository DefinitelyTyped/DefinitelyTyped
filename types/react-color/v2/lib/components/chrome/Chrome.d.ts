import { Component, CSSProperties } from "react";
import { RenderersProps, CustomPickerProps } from "../../..";
import { Classes } from "reactcss";

export interface ChromePickerStylesProps {
    picker: CSSProperties;
    saturation: CSSProperties;
    Saturation: CSSProperties;
    body: CSSProperties;
    controls: CSSProperties;
    color: CSSProperties;
    swatch: CSSProperties;
    active: CSSProperties;
    toggles: CSSProperties;
    hue: CSSProperties;
    Hue: CSSProperties;
    alpha: CSSProperties;
    Alpha: CSSProperties;
}

export interface ChromePickerDisableAlphaStyles {
    color?: CSSProperties;
    alpha?: CSSProperties;
    hue?: CSSProperties;
    swatch?: CSSProperties;
}

export interface ChromePickerProps extends RenderersProps, CustomPickerProps {
    width?: string;
    disableAlpha?: boolean;
    styles?: Partial<Classes<ChromePickerStylesProps>>;
    className?: string;
}

export default class ChromePicker extends Component<ChromePickerProps> { }
