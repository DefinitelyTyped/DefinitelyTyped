import { Component } from "react";

export interface TypingProps {
    children: React.ReactNode;
    className?: string | undefined;
    cursorClassName?: string | undefined;
    cursor?: React.ReactNode | undefined;
    hideCursor?: boolean | undefined;
    speed?: number | undefined;
    startDelay?: number | undefined;
    loop?: boolean | undefined;
    onStartedTyping?: (() => void) | undefined;
    onBeforeType?: (() => void) | undefined;
    onAfterType?: (() => void) | undefined;
    onFinishedTyping?: (() => void) | undefined;
}

declare namespace Typing {
    interface BackspaceProperties {
        count?: number | undefined;
        delay?: number | undefined;
        speed?: number | undefined;
    }
    class Backspace extends Component<BackspaceProperties> {}

    interface DelayProperties {
        ms: number;
    }
    class Delay extends Component<DelayProperties> {}

    interface SpeedProperties {
        ms: number;
    }
    class Speed extends Component<SpeedProperties> {}

    interface ResetProperties {
        count?: number | undefined;
        delay?: number | undefined;
        speed?: number | undefined;
    }
    class Reset extends Component<ResetProperties> {}
}

declare class Typing extends Component<TypingProps> {}

export default Typing;
