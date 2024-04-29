import { Component, CSSProperties } from "react";
import { Classes } from "reactcss";
import { ColorState, CustomPickerProps } from "../../..";

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

export default class CompactPicker extends Component<CompactPickerProps> {}
