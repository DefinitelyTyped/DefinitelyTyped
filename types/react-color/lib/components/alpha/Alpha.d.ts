import { Component, ReactNode } from "react";
import { RenderersProps, RGBColor, HSLColor, CustomPickerProps } from "../../..";

export interface AlphaPickerProps extends RenderersProps, CustomPickerProps {
    width?: string;
    height?: string;
    direction?: "horizontal" | "vertical";
    style?: any;
    pointer?: ReactNode;
    className?: string;
}

export default class AlphaPicker extends Component<AlphaPickerProps> {}
