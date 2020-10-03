import { Component, CSSProperties } from "react";
import { CustomPickerProps, ColorState } from "../../..";
import { Classes } from "reactcss";

export interface CompactPickerStylesProps {
    Compact?: CSSProperties;
    compact?: CSSProperties;
    clear?: CSSProperties;
}

export interface CompactPickerProps extends CustomPickerProps {
    colors?: string[];
    styles?: Partial<Classes<CompactPickerStylesProps>>;
    onSwatchHover?(color: ColorState, event: MouseEvent): void;
}

export default class CompactPicker extends Component<CompactPickerProps> { }
