import { Component, CSSProperties } from "react";
import { ColorPickerProps, ColorResult } from "../../..";
import { Classes } from "reactcss";

export interface GithubPickerStylesProps {
    card: CSSProperties;
    triangle: CSSProperties;
    triangleShadow: CSSProperties;
}

export interface GithubPickerProps extends ColorPickerProps<GithubPicker> {
    colors?: string[] | undefined;
    width?: string | undefined;
    triangle?: 'hide' | 'top-left' | 'top-right' | undefined;
    styles?: Partial<Classes<GithubPickerStylesProps>> | undefined;
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export default class GithubPicker extends Component<GithubPickerProps> { }
