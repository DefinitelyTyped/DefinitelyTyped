// Type definitions for react-type-animation 1.1
// Project: https://github.com/notadamking/react-typing-animation
// Definitions by: Seungbin Oh <https://github.com/sboh1214>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ReactNode, FunctionComponent } from 'react';

interface TypingProps {
    element?: string;
    children: ReactNode;
    className?: string;
    cursorClassName?: string;
    cursorElement?: string;
    cursor?: ReactNode;
    hideCursor?: boolean;
    speed?: number;
    startDelay?: number;
    loop?: boolean;
    onStartedTyping?: () => void;
    onBeforeType?: () => void;
    onAfterType?: () => void;
    onFinishedTyping?: () => void;
}

interface BackspaceProps {
    count?: number;
    delay?: number;
    speed?: number;
}

interface DelayProps {
    ms: number;
}

interface SpeedProps {
    ms: number;
}

interface ResetProps {
    count?: number;
    delay?: number;
    speed?: number;
}

declare const Typing: FunctionComponent<TypingProps> & {
    Backspace: FunctionComponent<BackspaceProps>;
    Delay: FunctionComponent<DelayProps>;
    Speed: FunctionComponent<SpeedProps>;
    Reset: FunctionComponent<ResetProps>;
};

export default Typing;
