import { Component, CSSProperties } from "react";
import { Classes } from "reactcss";
import { CustomPickerProps, RenderersProps } from "../../..";

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
    color?: CSSProperties | undefined;
    alpha?: CSSProperties | undefined;
    hue?: CSSProperties | undefined;
    swatch?: CSSProperties | undefined;
}

export interface ChromePickerProps extends RenderersProps, CustomPickerProps {
    width?: string | undefined;
    disableAlpha?: boolean | undefined;
    styles?: Partial<Classes<ChromePickerStylesProps>> | undefined;
    className?: string | undefined;
}

export default class ChromePicker extends Component<ChromePickerProps> {}
