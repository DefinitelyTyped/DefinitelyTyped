import { Component, CSSProperties } from "react";
import { CustomPickerProps, ColorState } from "../../..";
import { Classes } from "reactcss";

export interface BlockPickerStylesProps {
    card: CSSProperties;
    head: CSSProperties;
    body: CSSProperties;
    label: CSSProperties;
    triangle: CSSProperties;
    input: CSSProperties;
}

export interface BlockPickerProps extends CustomPickerProps {
    onSwatchHover?: (color: ColorState, event: MouseEvent) => void;
    colors?: string[];
    width?: string;
    triangle?: "hide" | "top";
    styles?: Partial<Classes<BlockPickerStylesProps>>;
    className?: string;
}

export default class BlockPicker extends Component<BlockPickerProps> { }
