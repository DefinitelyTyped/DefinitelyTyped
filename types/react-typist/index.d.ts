import * as React from "react";

export namespace Typist {
    interface CursorProps {
        show?: boolean | undefined;
        blink?: boolean | undefined;
        element?: string | undefined;
        hideWhenDone?: boolean | undefined;
        hideWhenDoneDelay?: number | undefined;
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
        count?: number | undefined;
        delay?: number | undefined;
    }
    class Backspace extends React.Component<BackSpaceProps> {}
}

export interface TypistProps {
    children?: React.ReactNode;
    className?: string | undefined;
    avgTypingDelay?: number | undefined;
    stdTypingDelay?: number | undefined;
    startDelay?: number | undefined;
    cursor?: Typist.CursorProps | undefined;
    onCharacterTyped?: ((char: string, charIndex: number) => void) | undefined;
    onLineTyped?: ((line: string, lineIndex: number) => void) | undefined;
    onTypingDone?: (() => void) | undefined;
    delayGenerator?: ((mean: number, std: number, current: Typist.CurrentTextProps) => number) | undefined;
}

export class Typist extends React.Component<TypistProps> {}

export default Typist;
