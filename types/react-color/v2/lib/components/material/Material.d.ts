import { Component, CSSProperties } from "react";
import { CustomPickerProps } from "../../..";

export interface MaterialPickerDefaultStyles {
    material?: CSSProperties;
    HEXwrap?: CSSProperties;
    HEXinput?: CSSProperties;
    HEXlabel?: CSSProperties;
    Hex?: CSSProperties;
    RGBwrap?: CSSProperties;
    RGBinput?: CSSProperties;
    RGBlabel?: CSSProperties;
    split?: CSSProperties;
    third?: CSSProperties;
}

export interface MaterialPickerStyles {
    default?: MaterialPickerDefaultStyles;
}

export interface MaterialPickerProps extends CustomPickerProps {
    styles?: MaterialPickerStyles;
    className?: string;
}

export default class MaterialPicker extends Component<MaterialPickerProps> {}
