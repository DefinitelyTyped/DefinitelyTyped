import { Component, CSSProperties } from "react";
import { CustomPickerProps, ColorState } from "../../..";
import { Classes } from "reactcss";

export interface CompactPickerStylesProps {
    Compact?: CSSProperties | undefined;
    compact?: CSSProperties | undefined;
    clear?: CSSProperties | undefined;
}

export interface CompactPickerProps extends CustomPickerProps {
    colors?: string[] | undefined;
    styles?: Partial<Classes<CompactPickerStylesProps>> | undefined;
    onSwatchHover?(color: ColorState, event: MouseEvent): void;
}

export default class CompactPicker extends Component<CompactPickerProps> { }
