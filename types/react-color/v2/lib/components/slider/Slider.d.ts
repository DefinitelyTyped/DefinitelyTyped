import { Component, ComponentType, CSSProperties } from "react";
import { Classes } from "reactcss";
import { CustomPickerProps } from "../../..";

export interface SliderPickerStylesProps {
    hue: CSSProperties;
    Hue: CSSProperties;
}

export interface SliderPickerProps extends CustomPickerProps {
    pointer?: ComponentType | undefined;
    styles?: Partial<Classes<SliderPickerStylesProps>> | undefined;
}

export default class SliderPicker extends Component<SliderPickerProps> {}
