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
    onSwatchHover?: ((color: ColorState, event: MouseEvent) => void) | undefined;
    colors?: string[] | undefined;
    width?: string | undefined;
    triangle?: "hide" | "top" | undefined;
    styles?: Partial<Classes<BlockPickerStylesProps>> | undefined;
    className?: string | undefined;
}

export default class BlockPicker extends Component<BlockPickerProps> { }
