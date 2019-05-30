import { Component, ReactNode, CSSProperties } from "react";
import { CustomPickerProps } from "../../..";

export interface SliderPickerDefaultStyles {
    hue?: CSSProperties;
    Hue?: CSSProperties;
}

export interface SliderPickerStyles {
    default?: SliderPickerDefaultStyles;
}

export interface SliderPickerProps extends CustomPickerProps {
    pointer?: ReactNode;
    styles?: SliderPickerStyles;
    className?: string;
}

export default class SliderPicker extends Component<SliderPickerProps> {}
