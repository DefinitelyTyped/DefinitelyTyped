// Type definitions for react-countup 4.0
// Project: https://react-countup.now.sh
// Definitions by: Daniel Brodin <https://github.com/danielbrodin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export as namespace ReactCountUp;

export = ReactCountUp;

declare namespace ReactCountUp {
    interface RenderProps {
        countUpRef: React.RefObject<any>;
        pauseResume(): void;
        reset(): void;
        start(): void;
        update(newEnd?: number): void;
    }

    interface Props {
        className?: string;
        decimal?: string;
        decimals?: number;
        delay?: number;
        duration?: number;
        end?: number;
        prefix?: string;
        redraw?: boolean;
        separator?: string;
        start?: number;
        suffix?: string;
        useEasing?: boolean;
        easingFn?(t: number, b: number, c: number, d: number): void;
        formattingFn?(value: number): string;
        onComplete?(): void;
        onEnd?(providedFn: {
            pauseResume(): void;
            reset(): void;
            start(): void;
            update(): void;
        }): void;
        onStart?(providedFn: {
            pauseResume(): void;
            reset(): void;
            update(): void;
        }): void;
        onPauseResume?(): (
            providedFn: { reset(): void; start(): void; update(): void }
        ) => void;
        onReset?(): (
            providedFn: { pauseResume(): void; start(): void; update(): void }
        ) => void;
        onUpdate?(providedFn: {
            pauseResume(): void;
            reset(): void;
            start(): void;
        }): void;
        style?: React.CSSProperties;
        children?(data: RenderProps): React.ReactElement<any>;
    }
}

declare class ReactCountUp extends React.PureComponent<ReactCountUp.Props> {}
