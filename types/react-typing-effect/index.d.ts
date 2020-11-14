// Type definitions for react-typing-effect 2.0
// Project: https://github.com/lamyfarai/react-typing-effect#readme
// Definitions by: Debananda <https://github.com/Debananda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component } from 'react';

export interface ReactTypingEffectProps {
    text: string | string[];
    staticText?: string;
    className?: string;
    speed?: number;
    eraseDelay?: number;
    eraseSpeed?: number;
    typingDelay?: number;
    cursor?: string;
    cursorClassName?: string;
}

export default class ReactTypingEffect extends Component<ReactTypingEffectProps> {}
