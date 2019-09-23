import { Component, ComponentType } from "react";
import { RenderersProps, CustomPickerProps } from "../../..";

export interface AlphaPickerProps extends RenderersProps, CustomPickerProps {
    width?: string;
    height?: string;
    direction?: "horizontal" | "vertical";
    style?: any;
    pointer?: ComponentType;
    className?: string;
}

export default class AlphaPicker extends Component<AlphaPickerProps> {}
