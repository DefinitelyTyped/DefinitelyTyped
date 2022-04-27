import { Component, CSSProperties } from "react";
import { CustomPickerProps, ColorState } from "../../..";
import { Classes } from "reactcss";

export interface GithubPickerStylesProps {
    card: CSSProperties;
    triangle: CSSProperties;
    triangleShadow: CSSProperties;
}

export interface GithubPickerProps extends CustomPickerProps {
    colors?: string[] | undefined;
    width?: string | undefined;
    triangle?: "hide" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | undefined;
    onSwatchHover?(color: ColorState, event: MouseEvent): void;
    styles?: Partial<Classes<GithubPickerStylesProps>> | undefined;
}

export default class GithubPicker extends Component<GithubPickerProps> { }
