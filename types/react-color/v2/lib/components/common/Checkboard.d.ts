import { Component } from "react";
import { RenderersProps } from "../../..";
export interface CheckboardProps extends RenderersProps {
    white?: string;
    grey?: string;
    size?: number;
    borderRadius?: string;
    boxShadow?: string;
}

export default class Checkboard extends Component<CheckboardProps> {}
