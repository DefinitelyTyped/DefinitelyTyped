// Type definitions for react-countup 4.0
// Project: https://react-countup.now.sh
// Definitions by: Daniel Brodin <https://github.com/danielbrodin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

export as namespace ReactCountUp;

export = ReactCountUp;

declare namespace ReactCountUp {
    interface RenderProps {
        countUpRef: React.RefObject<any>;
        pauseResume: () => void;
        reset: () => void;
        start: () => void;
        update: (newEnd?: number) => void;
    }

    interface Props {
        className?: string;
        decimal?: string;
        decimals?: number;
        delay?: number;
        duration?: number;
        easingFn?(): void;
        end?: number;
        formattingFn?(): void;
        onComplete?(): void;
        onEnd?(): void;
        onStart?(): void;
        prefix?: string;
        redraw?: boolean;
        separator?: string;
        start?: number;
        style?: React.CSSProperties;
        suffix?: string;
        useEasing?: boolean;
        children?(data: RenderProps): React.ReactElement<any>;
    }
}

declare class ReactCountUp extends React.PureComponent<ReactCountUp.Props> {}
