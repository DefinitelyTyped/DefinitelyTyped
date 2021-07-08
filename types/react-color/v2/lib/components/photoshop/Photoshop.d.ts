import { Component, MouseEvent, CSSProperties } from "react";
import { CustomPickerProps } from "../../..";
import { Classes } from "reactcss";

export interface PhotoshopPickerStylesProps {
    picker: CSSProperties;
    head: CSSProperties;
    body: CSSProperties;
    saturation: CSSProperties;
    hue: CSSProperties;
    controls: CSSProperties;
    top: CSSProperties;
    preview: CSSProperties;
    actions: CSSProperties;
}

export interface PhotoshopPickerProps extends CustomPickerProps {
    header?: string | undefined;
    onAccept?: ((event: MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onCancel?: ((event: MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    styles?: Partial<Classes<PhotoshopPickerStylesProps>> | undefined;
    className?: string | undefined;
}

export default class PhotoshopPicker extends Component<PhotoshopPickerProps> { }
