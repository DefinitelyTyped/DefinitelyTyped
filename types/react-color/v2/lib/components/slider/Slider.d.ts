import { Component, ComponentType, CSSProperties } from "react";
import { CustomPickerProps } from "../../..";
import { Classes } from "reactcss";

export interface SliderPickerStylesProps {
    hue: CSSProperties;
    Hue: CSSProperties;
}

export interface SliderPickerProps extends CustomPickerProps {
    pointer?: ComponentType | undefined;
    styles?: Partial<Classes<SliderPickerStylesProps>> | undefined;
}

export default class SliderPicker extends Component<SliderPickerProps> { }
