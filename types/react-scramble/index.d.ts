// Type definitions for react-scramble 0.4
// Project: https://github.com/cettoana/react-scramble#readme
// Definitions by: fes300 <https://github.com/fes300>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface Step {
    /**
     * Action of the step, + as scramble, - as descramble and leave blank to do nothing.
     */
    action: '+' | '-';
    /**
     * Times of action in the step.
     */
    roll?: number;
    /**
     * Change the original text.
     */
    text?: string;
    /**
     * Scramble/descrmble type of the step.
     */
    type?: 'all' | 'random' | 'forward';
}

export interface AnimationControls {
    start: () => void;
    pause: () => void;
}

export interface Props {
    /**
     * Set true to auto start animation after render.
     */
    autoStart?: boolean;
    /**
     * Scramble the text after render.
     */
    preScramble?: boolean;
    /**
     * Speed of scramble per second.
     */
    speed?: 'slow' | 'medium' | 'fast';
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
    noBreakSpace?: boolean;
    /**
     * Event trigger type when mouse enter.
     */
    mouseEnterTrigger?: 'start' | 'pause' | 'reset' | 'restart';
    /**
     * Event trigger type when mouse leave.
     */
    mouseLeaveTrigger?: 'start' | 'pause' | 'reset' | 'restart';
    /**
     * Method binding callback function.
     */
    bindMethod?: (c: AnimationControls) => void;
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
