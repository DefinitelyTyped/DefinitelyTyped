import { Component, CSSProperties } from "react";
import { CustomPickerProps, ColorState } from "../../..";

export interface CompactPickerDefaultStyles {
    Compact?: CSSProperties;
    compact?: CSSProperties;
    clear?: CSSProperties;
}
export interface CompactPickerStyles {
    default?: CompactPickerDefaultStyles;
}

export interface CompactPickerProps extends CustomPickerProps {
    colors?: string[];
    onSwatchHover?(color: ColorState, event: MouseEvent): void;
    styles?: CompactPickerStyles;
    className?: string;
}

export default class CompactPicker extends Component<CompactPickerProps> {}
