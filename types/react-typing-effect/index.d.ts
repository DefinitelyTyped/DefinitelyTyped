import { Component } from "react";

export interface ReactTypingEffectProps {
    text: string | string[];
    staticText?: string | undefined;
    className?: string | undefined;
    speed?: number | undefined;
    eraseDelay?: number | undefined;
    eraseSpeed?: number | undefined;
    typingDelay?: number | undefined;
    cursor?: string | undefined;
    cursorClassName?: string | undefined;
    displayTextRenderer?(text: string, i: number): JSX.Element;
}

export default class ReactTypingEffect extends Component<ReactTypingEffectProps> {}
