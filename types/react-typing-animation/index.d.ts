// Type definitions for react-typing-animation 1.6
// Project: https://adamjking3.github.io/react-typing-animation-example/
// Definitions by: Haseeb Majid <https://github.com/hmajid2301>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from 'react';

export interface TypingProps {
    children: React.ReactNode;
    className?: string;
    cursorClassName?: string;
    cursor?: React.ReactNode;
    hideCurson?: boolean;
    speed?: number;
    startDelay?: number;
    loop?: boolean;
    onStartedTyping?: () => {};
    onBeforeType?: () => {};
    onAfterType?: () => {};
    onFinishedType?: () => {};
}

declare class Typing extends Component<TypingProps> {}

export default Typing;
