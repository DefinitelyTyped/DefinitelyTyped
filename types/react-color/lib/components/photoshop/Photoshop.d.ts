import { Component } from "react";
import { ColorChangeHandler, ColorPickerProps } from "../../..";

export interface PhotoshopPickerProps extends ColorPickerProps<PhotoshopPicker> {
    header?: string;
    onAccept?: ColorChangeHandler;
    onCancel?: ColorChangeHandler;
}

export default class PhotoshopPicker extends Component<PhotoshopPickerProps> {}
