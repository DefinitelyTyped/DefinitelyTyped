import * as React from "react";

export interface Step {
    /**
     * Action of the step, + as scramble, - as descramble and leave blank to do nothing.
     */
    action: "+" | "-";
    /**
     * Times of action in the step.
     */
    roll?: number | undefined;
    /**
     * Change the original text.
     */
    text?: string | undefined;
    /**
     * Scramble/descrmble type of the step.
     */
    type?: "all" | "random" | "forward" | undefined;
}

export interface AnimationControls {
    reset: () => void;
    restart: () => void;
    start: () => void;
    pause: () => void;
}

export interface Props {
    /**
     * Set true to auto start animation after render.
     */
    autoStart?: boolean | undefined;
    /**
     * Scramble the text after render.
     */
    preScramble?: boolean | undefined;
    /**
     * Speed of scramble per second.
     */
    speed?: "slow" | "medium" | "fast" | undefined;
    /**
     * Original text.
     */
    text: string;
    /**
     * Scramble steps, a list of Object in Step format.
     */
    steps: Step[];
    /**
     * Using no-break space or not.
     */
    noBreakSpace?: boolean | undefined;
    /**
     * Event trigger type when mouse enter.
     */
    mouseEnterTrigger?: "start" | "pause" | "reset" | "restart" | undefined;
    /**
     * Event trigger type when mouse leave.
     */
    mouseLeaveTrigger?: "start" | "pause" | "reset" | "restart" | undefined;
    /**
     * Method binding callback function.
     */
    bindMethod?: ((c: AnimationControls) => void) | undefined;
}

/**
 * @example
 * ```
 * import React from 'react'
 * import Scramble from 'react-scramble'
 *
 * class App extends React.Component {
 *   render() {
 *    return (
 *      <Scramble
 *        autoStart
 *        text="Scramble me!"
 *        steps={[
 *          {
 *            roll: 10,
 *            action: '+',
 *            type: 'all',
 *          },
 *          {
 *            action: '-',
 *            type: 'forward',
 *          },
 *        ]}
 *      />
 *    )
 *  }
 * }
 * ```
 */
declare const Scramble: React.FC<Props>;

export default Scramble;
