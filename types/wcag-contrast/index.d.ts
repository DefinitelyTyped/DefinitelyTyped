// Type definitions for wcag-contrast 2.1
// Project: https://github.com/tmcw/wcag-contrast
// Definitions by: York Yao <https://github.com/plantain-00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Get the contrast ratio between two relative luminance values
 */
export function luminance(a: number, b: number): number;

/**
 * Get a score for the contrast between two colors as rgb triplets
 */
export function rgb(a: number[], b: number[]): number;

/**
 * Get a score for the contrast between two colors as hex strings
 */
export function hex(a: string, b: string): number;

/**
 * Get a textual score from a numeric contrast value
 */
export function score(contrast: number): string;
