// Type definitions for react-joyride 2.0
// Project: https://github.com/gilbarbara/react-joyride
// Definitions by: DongYoon Kang <https://github.com/kdy1>
//                 Kamran Ayub <https://github.com/kamranayub>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export type Action = 'init' | 'start' | 'stop' | 'reset' | 'restart' | 'prev' |
    'next' | 'go' | 'index' | 'close' | 'skip' | 'update';

export type Lifecycle = 'init' | 'ready' | 'beacon' | 'tooltip' | 'complete' | 'error';

export type Status = 'idle' | 'ready' | 'waiting' | 'running' |
    'paused' | 'skipped' | 'finished' | 'error';

export type EventType =
    'tour:start' |
    'step:before' |
    'beacon' |
    'tooltip' |
    'step:after' |
    'tour:end' |
    // these usually don't happen in a normal tour
    'tour:status' |
    'error:target_not_found' |
    'error';

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

export interface Props extends OverridableProps {
    /**
     * The tour's steps. Defaults to []
     */
    steps: Step[];

    /**
     * Setting a number here will turn Joyride into controlled mode.
     * You will receive the state events in the callback and you'll have to update this prop by yourself.
     */
    stepIndex?: number;

    /**
     * Run/stop the tour. Defaults to true.
     */
    run?: boolean;

    /**
     * The scroll distance from the element scrollTop value. Defaults to 20.
     */
    scrollOffset?: number;

    /**
     * Scroll the page for the first step. Defaults to false
     */
    scrollToFirstStep?: boolean;

    /**
     * Display a link to skip the tour. Defaults to false
     */
    showSkipButton?: boolean;

    /**
     * Disable auto scrolling between steps. Defaults to false.
     */
    disableScrolling?: boolean;

    /**
     * Log Joyride's actions to the console. Defaults to false.
     */
    debug?: boolean;

    /**
     * It will be called when Joyride's state changes. It returns a single parameter with the state.
     */
    callback?: (data: State) => any;

    /**
     * The tour is played sequentially with the Next button. Defaults to false.
     */
    continuous?: boolean;
}

export interface OverridableProps {
    /**
     * A React component or function to be used instead the default Beacon.
     */
    beaconComponent?: React.ReactNode;

    /**
     * Allow mouse and touch events thru the spotlight. You can click links in your app. Defaults to true.
     */
    spotlightClicks?: boolean;

    /**
     * The padding of the spotlight. Defaults to 10.
     */
    spotlightPadding?: number;

    /**
     * Display the tour progress in the next button _e.g. 2/5 _in continuous tours. Defaults to false.
     */
    showProgress?: boolean;

    /**
     * Display a button to skip the tour.
     */
    showSkipButton?: boolean;

    /**
     * Disable closing the tooltip on ESC. Defaults to false.
     */
    disableCloseOnEsc?: boolean;

    /**
     * Don't show the overlay. Defaults to false
     */
    disableOverlay?: boolean;

    /**
     * Don't close the tooltip when clicking the overlay. Defaults to false.
     */
    disableOverlayClose?: boolean;

    /**
     * Disable auto scrolling between steps.
     */
    disableScrolling?: boolean;

    /**
     * The strings used in the tooltip. Defaults to `{ back: 'Back', close: 'Close', last: 'Last', next: 'Next', skip: 'Skip' }`
     */
    locale?: Locale;

    /**
     * A React component or function to be used instead the default Tooltip excluding the arrow.
     */
    tooltipComponent?: React.ReactNode;

    /**
     * Options to be passed to react-floater.
     */
    floaterProps?: object;

    /**
     * Hide the "back" button. Defaults to false.
     */
    hideBackButton?: boolean;

    styles?: StepStyles;
}

export interface Step extends OverridableProps {
    /**
     * The target for the step. It can be a CSS selector or an HtmlElement directly (but using refs created in the same render would required an additional render afterwards).
     */
    target: HTMLElement | string;
    /**
     * The tooltip's body.
     */
    content: React.ReactNode | string;

    /**
     * The tooltip's title.
     */
    title?: React.ReactNode | string;

    /**
     * Don't show the Beacon before the tooltip. Defaults to false.
     */
    disableBeacon?: boolean;

    /**
     * The event to trigger the beacon. It can be click or hover. Defaults to click.
     */
    event?: 'click' | 'hover';

    /**
     * Force the step to be fixed. Defaults to false.
     */
    isFixed?: boolean;

    /**
     * The distance from the target to the tooltip. Defaults to 10.
     */
    offset?: number;
    /**
     * The placement of the beacon and tooltip. It will re-position itself if there's no space available.
     * Defaults to bottom.
     */
    placement?: 'top' | 'top-start' | 'top-end' |
    'bottom' | 'bottom-start' | 'bottom-end' |
    'left' | 'left-start' | 'left-end' |
    'right' | 'right-start' | 'right-end' |
    'auto' | 'center';

    /**
     * The placement of the beacon. It will use the placement if nothing is passed and it can be: top, bottom, left, right.
     */
    placementBeacon?: 'top' | 'bottom' | 'left' | 'right';
}
export interface StepStyles {
    /**
     * See https://github.com/gilbarbara/react-joyride/blob/master/docs/styling.md
     */
    options?: {
        [s: string]: any;
    };
}

export interface State {
    action: Action;
    index: number;
    controlled: boolean;
    lifecycle: Lifecycle;
    size: number;
    status: Status;
    /**
     * The current step.
     */
    step: Step;
    type: EventType;
}
