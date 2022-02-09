// Type definitions for react-motion-slider 0.4.1
// Project: https://github.com/souporserious/react-motion-slider
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare module "react-motion-slider" {
    import * as React from "react";
    import { OpaqueConfig } from "react-motion";

    export interface SliderProps {
        children?: React.ReactNode;
        /**
         * Move to a slide by its key.
         */
        currentKey?: string | number | undefined;
        /**
         * Move to a slide by its index.
         */
        currentIndex?: number | undefined;
        /**
         * The amount of slides shown in view
         * @default 1
         */
        slidesToShow?: number | undefined;
        /**
         * The amount of slides to move upon using prev and next methods.
         * @default 1
         */
        slidesToMove?: number | undefined;
        /**
         * Animates the wrapper height to fit the current slide.
         * @default false
         */
        autoHeight?: boolean | undefined;
        /**
         * Offsets the slide to align either left, center, or right.
         * @default "left"
         */
        align?: "left" | "center" | "right" | undefined;
        /**
         * Enable touch and/or mouse dragging
         * @default true
         */
        swipe?: boolean | "touch" | "mouse" | undefined;
        /**
         * The amount the user must swipe to advance slides. (sliderWidth * swipeThreshold)
         * @default 0.5
         */
        swipeThreshold?: number | undefined;
        /**
         * The amount of time in milliseconds that determines if a swipe was a flick or not.
         */
        flickTimeout?: number | undefined;
        /**
         * Accepts a React Motion spring config.
         */
        springConfig?: OpaqueConfig | undefined;
        /**
         * Prop callback fired before slide change.
         * @param currentIndex
         * @param nextIndex
         */
        beforeSlide?: ((currentIndex: number, nextIndex: number) => void) | undefined;
        /**
         * Prop callback fired after slide change.
         * @param currentIndex
         */
        afterSlide?: ((currentIndex: number) => void) | undefined;
    }

    export default class Slider extends React.Component<SliderProps> {
        /**
         * Moves to next slide
         */
        public next(): void;

        /**
         * Move to previous slide
         */
        public prev(): void;
    }
}
