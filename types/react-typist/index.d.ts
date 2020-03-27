// Type definitions for react-typist 2.0
// Project: https://github.com/jstejada/react-typist#readme
// Definitions by: Shawn Choi <https://github.com/shawnkoon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import * as React from 'react';

export namespace Typist {
    interface CursorProps {
        show?: boolean;
        blink?: boolean;
        element?: string;
        hideWhenDone?: boolean;
        hideWhenDoneDelay?: number;
    }

    interface CurrentTextProps {
        line: string;
        lineIdx: number;
        character: string;
        charIdx: number;
        defDelayGenerator: (mn: number, st: number) => (...params: any) => number;
    }

    interface DelayProps {
        ms: number;
    }
    class Delay extends React.Component<DelayProps> {}

    interface BackSpaceProps {
        count?: number;
        delay?: number;
    }
    class Backspace extends React.Component<BackSpaceProps> {}
}

export interface TypistProps {
    className?: string;
    avgTypingDelay?: number;
    stdTypingDelay?: number;
    startDelay?: number;
    cursor?: Typist.CursorProps;
    onCharacterTyped?: (char: string, charIndex: number) => void;
    onLineTyped?: (line: string, lineIndex: number) => void;
    onTypingDone?: () => void;
    delayGenerator?: (mean: number, std: number, current: Typist.CurrentTextProps) => number;
}

export class Typist extends React.Component<TypistProps> {}

export default Typist;
