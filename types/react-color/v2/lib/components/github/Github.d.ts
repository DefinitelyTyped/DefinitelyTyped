import { Component, CSSProperties } from "react";
import { CustomPickerProps, ColorState } from "../../..";

export interface GithubPickerDefaultStyles {
    card?: CSSProperties;
    triangle?: CSSProperties;
    triangleShadow?: CSSProperties;
}

export interface GithubPickerTriangleStyles {
    triangle?: CSSProperties;
    triangleShadow?: CSSProperties;
}

export interface GithubPickerHideTriangleStyles {
    triangle?: CSSProperties;
    "top-left-triangle"?: GithubPickerTriangleStyles;
    "top-right-triangle"?: GithubPickerTriangleStyles;
    "bottom-left-triangle"?: GithubPickerTriangleStyles;
    "bottom-right-triangle"?: GithubPickerTriangleStyles;
}

export interface GithubPickerStyles {
    default?: GithubPickerDefaultStyles;
}

export interface GithubPickerProps extends CustomPickerProps {
    colors?: string[];
    width?: string;
    triangle?: "hide" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
    onSwatchHover?(color: ColorState, event: MouseEvent): void;
    className?: string;
    styles?: GithubPickerStyles;
}

export default class GithubPicker extends Component<GithubPickerProps> {}
