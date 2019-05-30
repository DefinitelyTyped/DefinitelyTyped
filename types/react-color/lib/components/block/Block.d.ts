import { Component, CSSProperties } from "react";
import { CustomPickerProps, ColorState } from "../../..";

export interface BlockPickerDefaultStyles {
    card?: CSSProperties;
    head?: CSSProperties;
    body?: CSSProperties;
    label?: CSSProperties;
    triangle?: CSSProperties;
    input?: CSSProperties;
}

export interface BlockPickerStyles {
    default?: BlockPickerDefaultStyles;
}

export interface BlockPickerProps extends CustomPickerProps {
    onSwatchHover?: (color: ColorState, event: MouseEvent) => void;
    colors?: string[];
    width?: string;
    triangle?: "hide" | "top";
    styles?: BlockPickerStyles;
    className?: string;
}

export default class BlockPicker extends Component<BlockPickerProps> {}
