// Type definitions for react-typing-effect 2.0
// Project: https://github.com/lamyfarai/react-typing-effect#readme
// Definitions by: Debananda <https://github.com/Debananda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component } from 'react';

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
