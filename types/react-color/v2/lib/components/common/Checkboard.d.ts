import { Component } from "react";
import { RenderersProps } from "../../..";
export interface CheckboardProps extends RenderersProps {
    white?: string | undefined;
    grey?: string | undefined;
    size?: number | undefined;
    borderRadius?: string | undefined;
    boxShadow?: string | undefined;
}

export default class Checkboard extends Component<CheckboardProps> {}
