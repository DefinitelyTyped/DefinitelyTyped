import { Component, CSSProperties } from "react";
import { ColorChangeHandler, ColorPickerProps } from "../../..";
import { Classes } from "reactcss";

export interface PhotoshopPickerStylesProps {
    picker: CSSProperties;
    head: CSSProperties;
    body: CSSProperties;
    saturation: CSSProperties;
    hue: CSSProperties;
    controls: CSSProperties;
    top: CSSProperties;
    previews: CSSProperties;
    actions: CSSProperties;
}

export interface PhotoshopPickerProps extends ColorPickerProps<PhotoshopPicker> {
    header?: string;
    styles?: Partial<Classes<PhotoshopPickerStylesProps>>;
    onAccept?: ColorChangeHandler;
    onCancel?: ColorChangeHandler;
}

export default class PhotoshopPicker extends Component<PhotoshopPickerProps> { }
