// Type definitions for react-joyride 1.10
// Project: https://github.com/gilbarbara/react-joyride
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>, Ben Dixon <https://github.com/bendxn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

export default class Joyride extends React.Component<Props, State> {
    constructor(props: Props);

    reset(restart?: boolean): void;
    next(): void;
    back(): void;
    addTooltip(data: Step): void;
    getProgress(): Progress;

    /**
     * Please don't use the `start` and `stop` methods anymore. Instead use a combination of the props `run` and `autoStart`.
     */
    private start(autorun?: boolean): void;
    /**
     * Please don't use the `start` and `stop` methods anymore. Instead use a combination of the props `run` and `autoStart`.
     */
    private stop(): void;

    static defaultProps: Props;
}

export interface Progress {
    index: number;
    percentageComplete: number;
    step: Step;
}

export interface Locale {
    back?: string;
    close?: string;
    last?: string;
    next?: string;
    skip?: string;
}

export interface Props {
    /**
     * The tour's steps. Defaults to []
     */
    steps?: Step[];

    /**
     * The initial step index. Defaults to 0
     */
    stepIndex?: number;

    /**
     * Run/stop the tour. Defaults to false
     */
    run?: boolean;

    /**
     * Open the tooltip automatically for the first step, without showing a beacon. Defaults to false
     */
    autoStart?: boolean;

    /**
     * Toggle keyboard navigation (esc, space bar, return). Defaults to true
     */
    keyboardNavigation?: boolean;

    /**
     * The strings used in the tooltip. Defaults to `{ back: 'Back', close: 'Close', last: 'Last', next: 'Next', skip: 'Skip' }`
     */
    locale?: Locale;

    /**
     * Delay the reposition of the current step while the window is being resized. Defaults to false
     */
    resizeDebounce?: boolean;

    /**
     * The amount of delay for the resizeDebounce callback. Defaults to 200
     */
    resizeDebounceDelay?: number;

    /**
     * The gap around the target inside the hole. Defaults to 5
     */
    holePadding?: number;

    /**
     * The scrollTop offset used in scrollToSteps. Defaults to 20
     */
    scrollOffset?: number;

    /**
     * Scroll the page to the next step if needed. Defaults to true
     */
    scrollToSteps?: boolean;

    /**
     * Scroll the page for the first step. Defaults to false
     */
    scrollToFirstStep?: boolean;

    /**
     * Display a back button. Defaults to true
     */
    showBackButton?: boolean;

    /**
     * Display an overlay with holes above your steps (for tours only). Defaults to true
     */
    showOverlay?: boolean;

    /**
     * Allow mouse and touch events within overlay hole, and prevent hole:click callback from being sent. Defaults to false
     */
    allowClicksThruHole?: boolean;

    /**
     * Display a link to skip the tour. Defaults to false
     */
    showSkipButton?: boolean;

    /**
     * Display the tour progress in the next button e.g. 2/5 in continuous tours. Defaults to false
     */
    showStepsProgress?: boolean;

    /**
     * The tooltip offset from the target. Defaults to 30
     */
    tooltipOffset?: number;

    /**
     * The type of your presentation. It can be continuous (played sequencially with the Next button) or single. Defaults to single
     */
    type?: "continuous" | "single";

    /**
     * Don't close the tooltip on clicking the overlay. Defaults to false
     */
    disableOverlay?: boolean;

    /**
     * Console.log Joyride's inner actions. Defaults to false
     */
    debug?: boolean;

    /**
     * It will be called when the tour's state changes.
     */
    callback?(options: any): void;
}

export interface Step {
    title?: string;
    text?: React.ReactNode;
    selector: string;
    position?: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right" | "right" | "left";
    type?: "click" | "hover";
    isFixed?: boolean;
    allowClicksThruHole?: boolean;
    style?: StepStyles;
    [prop: string]: any;
}

export interface StepStyles {
    backgroundColor?: string;
    borderRadius?: string;
    color?: string;
    mainColor?: string;
    textAlign?: string;
    width?: string;
    beacon?: BeaconStyles;
    [style: string]: any;
}

export interface BeaconStyles {
    offsetX?: number;
    offsetY?: number;
    inner?: string;
    outer?: string;
}

export interface State {
    action: string;
    index: number;
    play: boolean;
    redraw: boolean;
    shouldPlay: boolean;
    showTooltip: boolean;
    xPos: number;
    yPos: number;
    skipped: boolean;
}
