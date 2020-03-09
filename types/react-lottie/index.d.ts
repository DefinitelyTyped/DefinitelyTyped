// Type definitions for react-lottie 1.2
// Project: https://github.com/chenqingspring/react-lottie#readme
// Definitions by: Kana00 <https://github.com/Kana00>
//                 Ricki-BumbleDev <https://github.com/Ricki-BumbleDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface Options {
    /**
     * Defines if the animation should play only once or repeatedly in an endless loop
     * or the number of loops that should be completed before the animation ends
     */
    loop?: boolean | number;
    /**
     * Defines if the animation should immediately play when the component enters the DOM
     */
    autoplay?: boolean;
    /**
     * The JSON data exported from Adobe After Effects using the Bodymovin plugin
     */
    animationData: any;
    rendererSettings?: {
        preserveAspectRatio?: string;
        /**
         * The canvas context
         */
        context?: any;
        scaleMode?: any;
        clearCanvas?: boolean;
        /**
         * Loads DOM elements when needed. Might speed up initialization for large number of elements. Only with SVG renderer.
         */
        progressiveLoad?: boolean;
        /**
         * Hides elements when opacity reaches 0. Only with SVG renderer.
         * @default true
         */
        hideOnTransparent?: boolean;
        className?: string;
    };
}

export interface EventListener {
    /**
     * The event sent by Lottie
     */
    eventName:
        | 'complete'
        | 'loopComplete'
        | 'enterFrame'
        | 'segmentStart'
        | 'config_ready'
        | 'data_ready'
        | 'loaded_images'
        | 'DOMLoaded'
        | 'destroy';
    /**
     * A callback that will be executed when the given eventName is received
     */
    callback: () => void;
}

export interface LottieProps {
    /**
     * Object representing animation settings
     */
    options: Options;
    /**
     * Height size in pixels
     * @default '100%'
     */
    height?: number | string;
    /**
     * Width size in pixels
     * @default '100%'
     */
    width?: number | string;
    /**
     * Describes if the animation must be in stopped mode
     */
    isStopped?: boolean;
    /**
     * Describes if the animation must be in paused mode
     */
    isPaused?: boolean;
    /**
     * Array of objects containing eventName and a callback function that will be registered as eventListeners on the animation object.
     * Refer to Lottie documentation for a list of available events.
     */
    eventListeners?: EventListener[];
    segments?: number[];
    speed?: number;
    direction?: number;
    ariaRole?: string | 'button';
    ariaLabel?: string | 'animation';
    isClickToPauseDisabled?: boolean;
    title?: string;
}

/**
 * Lottie allows you to render an animation from a JSON structure exported from Adobe After Effects using the Bodymovin plugin
 */
declare class Lottie extends React.Component<LottieProps, any> {}
export default Lottie;
