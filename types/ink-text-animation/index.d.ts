import { Component, ReactNode } from "react";

export interface InkTextAnimationProps {
    children?: ReactNode;
    name?: "rainbow" | "pulse" | "glitch" | "radar" | "neon";
    speed?: number;
}

export default class InkTextAnimation extends Component<InkTextAnimationProps> {}
