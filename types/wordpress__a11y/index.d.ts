// Type definitions for @wordpress/a11y 2.4
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/a11y/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

/**
 * Create the live regions.
 */
export function setup(): void;

/**
 * Allows you to easily announce dynamic interface updates to screen readers using ARIA live regions.
 * This module is inspired by the `speak` function in wp-a11y.js
 *
 * @example
 * ```js
 * import { speak } from '@wordpress/a11y';
 *
 * // For polite messages that shouldn't interrupt what screen readers are currently announcing.
 * speak( 'The message you want to send to the ARIA live region' );
 *
 * // For assertive messages that should interrupt what screen readers are currently announcing.
 * speak( 'The message you want to send to the ARIA live region', 'assertive' );
 * ```
 *
 * @param message - The message to be announced by Assistive Technologies.
 * @param ariaLive - Optional. The politeness level for aria-live. Possible values:
 *                   polite or assertive. Default polite.
 */
export function speak(message: string, ariaLive?: 'polite' | 'assertive'): void;
