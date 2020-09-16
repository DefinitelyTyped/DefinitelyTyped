// Type definitions for react-countup 4.3
// Project: https://react-countup.now.sh
// Definitions by: Daniel Brodin <https://github.com/danielbrodin>
//                 Ezequiel Surijon <https://github.com/esurijon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export as namespace ReactCountUp;

export = ReactCountUp;

declare namespace ReactCountUp {
    interface RenderProps {
        /**
         * Ref to hook the countUp instance to
         */
        countUpRef: React.RefObject<any>;
        /**
         * Pauses or resumes the transition
         */
        pauseResume(): void;
        /**
         * Resets to initial value
         */
        reset(): void;
        /**
         * Starts or restarts the transition
         */
        start(): void;
        /**
         * Updates transition to the new end value (if given)
         */
        update(newEnd?: number): void;
    }

    interface Props {
        /**
         * CSS class name of the span element.
         * Note: This won't be applied when using CountUp with render props.
         */
        className?: string;

        /**
         * Specifies decimal character.
         * Default: .
         */
        decimal?: string;

        /**
         * Amount of decimals to display.
         * Default: 0
         */
        decimals?: number;

        /**
         * Delay in seconds before starting the transition.
         * Default: null
         * Note: delay={0} will automatically start the count up.
         */
        delay?: number;

        /**
         * Duration in seconds.
         * Default: 2
         */
        duration?: number;

        /**
         * Target value.
         */
        end?: number;

        /**
         * Static text before the transitioning value.
         */
        prefix?: string;

        /**
         * Forces count up transition on every component update.
         * Default: false
         */
        redraw?: boolean;

        /**
         * Save previously ended number to start every new animation from it.
         * Default: false
         */
        preserveValue?: boolean;

        /**
         * Specifies character of thousands separator.
         */
        separator?: string;

        /**
         * Initial value.
         * Default: 0
         */
        start?: number;

        /**
         * Use for start counter on mount for hook usage.
         * Default: true
         */
        startOnMount?: boolean;

        /**
         * Static text after the transitioning value.
         */
        suffix?: string;

        /**
         * Enables easing. Set to false for a linear transition.
         * Default: true
         */
        useEasing?: boolean;

        /**
         * Easing function. http://robertpenner.com/easing for more details.
         * Default: easeInExpo
         */
        easingFn?(t: number, b: number, c: number, d: number): void;

        /**
         * Function to customize the formatting of the number
         */
        formattingFn?(value: number): string;

        /**
         * Callback function on transition end.
         */
        onEnd?(providedFn: {
            pauseResume(): void;
            reset(): void;
            start(): void;
            update(): void;
        }): void;

        /**
         * Callback function on transition start.
         */
        onStart?(providedFn: {
            pauseResume(): void;
            reset(): void;
            update(): void;
        }): void;

        /**
         * Callback function on pause or resume.
         */
        onPauseResume?(): (
            providedFn: { reset(): void; start(): void; update(): void }
        ) => void;

        /**
         * Callback function on reset.
         */
        onReset?(): (
            providedFn: { pauseResume(): void; start(): void; update(): void }
        ) => void;

        /**
         * Callback function on update.
         */
        onUpdate?(providedFn: {
            pauseResume(): void;
            reset(): void;
            start(): void;
        }): void;

        style?: React.CSSProperties;

        children?(data: RenderProps): React.ReactElement;
    }
}

declare class ReactCountUp extends React.PureComponent<ReactCountUp.Props> {}
