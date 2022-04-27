import { Component, ComponentType, CSSProperties } from "react";
import { RenderersProps, CustomPickerProps } from "../../..";
import { Classes } from "reactcss";

export interface AlphaPickerProps extends RenderersProps, CustomPickerProps {
    width?: string | undefined;
    height?: string | undefined;
    direction?: "horizontal" | "vertical" | undefined;
    style?: any;
    pointer?: ComponentType | undefined;
    styles?: Partial<Classes<AlphaPickerStylesProps>> | undefined;
    className?: string | undefined;
}

export default class AlphaPicker extends Component<AlphaPickerProps> { }

export interface AlphaPickerStylesProps {
    picker: CSSProperties;
    alpha: CSSProperties;
}
