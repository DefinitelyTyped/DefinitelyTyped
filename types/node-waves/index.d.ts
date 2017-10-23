// Type definitions for node-waves 0.7
// Project: http://fian.my.id/Waves
// Definitions by: Stephen Lautier <https://github.com/stephenlautier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type ElementTarget = string | Element | Element[];

export interface WavesConfig {
	/**
	 * Determines how long the waves effect duration (in milliseconds).
	 *
	 */
	duration?: number;

	/**
	 * Delay amount to show waves effect on touch and hide the effect if user scrolls.
	 * Set to 0 to disable delay (in milliseconds).
	 *
	 */
	delay?: number;
}

export interface RippleOptions {
	/**
	 * Specify how long to wait between starting and stopping the ripple.
	 *
	 */
	wait?: number | null;

	/**
	 * Specify the position inside the element.
	 *
	 */
	position?: {
		x: number;
		y: number;
	} | null;
}

/**
 * Initializes waves with an optional config.
 */
export function init(config?: WavesConfig): void;

/**
 * Attach ripple effect by adding `.waves-effect` to HTML element.
 * Make sure you call `init` to activate the ripple.
 *
 * @param elements elements to target.
 * @param classes classes to add.
 */
export function attach(elements: ElementTarget, classes?: string | string[]): void;

/**
 * Creates a ripple effect in HTML element programmatically.
 * @param elements elements to target (must have `.waves-effect` already applied, ideally via `attach`).
 * @param options specify how long to wait between starting and stopping the ripple, and it's position inside the element.
 */
export function ripple(elements: ElementTarget, options?: RippleOptions): void;

/**
 * Removes all ripples from inside an element immediately.
 *
 * @param elements elements to remove ripples from.
 */
export function calm(elements: ElementTarget): void;
