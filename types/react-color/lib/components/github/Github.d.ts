import { Component, CSSProperties } from "react";
import { ColorPickerProps, ColorResult } from "../../..";
import { Classes } from "reactcss";

export interface GithubPickerStylesProps {
    card: CSSProperties;
    triangle: CSSProperties;
    triangleShadow: CSSProperties;
}

export interface GithubPickerProps extends ColorPickerProps<GithubPicker> {
    colors?: string[];
    width?: string;
    triangle?: 'hide' | 'top-left' | 'top-right';
    styles?: Partial<Classes<GithubPickerStylesProps>>;
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export default class GithubPicker extends Component<GithubPickerProps> { }
