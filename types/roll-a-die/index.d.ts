// Type definitions for roll-a-die 1.5
// Project: https://github.com/chukwumaijem/roll-a-die
// Definitions by: Romilo <https://github.com/romilodev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    /** The element to render die animation on. */
    element: HTMLElement;
    /** The number of dice to use. */
    numberOfDice: number;
    /**
     * Called when animation is finished.
     * @param values An array of the values from throw.
     */
    callback: (values: number[]) => any;
    /**
     * Roll the die without sound.
     * @default false
     */
    noSound?: boolean;
    /**
     * Time in milliseconds to delay before removing animations
     * @default 3000
     */
    delay?: number;
    /**
     * Values to show on die face.
     * When provided, it overrides library genrated values.
     */
    values?: number[];
  }

/**
 * Run 3D dice roll animation.
 *
 * @param options
 *
 * @example
 * rollADie({ element, numberOfDice: 2, callback});
 *
 * @example
 * rollADie({ element, numberOfDice: 2, callback, noSound: true});
 *
 * @example
 * rollADie({ element, numberOfDice: 2, callback, delay: 1000});
 *
 * @example
 * rollADie({ element, numberOfDice: 2, callback, values: [3, 4]});
 *
 * @see {@link https://github.com/chukwumaijem/roll-a-die|Github}
 * @see {@link https://www.npmjs.com/package/roll-a-die|NPM}
 * @see {@link https://codepen.io/chukwuma-ezumezu/pen/qYKOGW|Demo}
 */
export default function(options: Options): void;
