import { Component, MouseEvent, CSSProperties } from "react";
import { CustomPickerProps } from "../../..";

export interface PhotoshopPickerDefaultStyles {
    picker?: CSSProperties;
    head?: CSSProperties;
    body?: CSSProperties;
    saturation?: CSSProperties;
    hue?: CSSProperties;
    controls?: CSSProperties;
    top?: CSSProperties;
    preview?: CSSProperties;
    actions?: CSSProperties;
}

export interface PhotoshopPickerStyles {
    default?: PhotoshopPickerDefaultStyles;
}

export interface PhotoshopPickerProps extends CustomPickerProps {
    header?: string;
    onAccept?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onCancel?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    styles?: PhotoshopPickerStyles;
    className?: string;
}

export default class PhotoshopPicker extends Component<PhotoshopPickerProps> {}
