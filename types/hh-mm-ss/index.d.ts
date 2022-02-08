// Type definitions for hh-mm-ss 1.2
// Project: https://github.com/Goldob/hh-mm-ss#readme
// Definitions by: Thomas Cazade <https://github.com/TotomInc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Convert given `hh:mm:ss` formatted string to miliseconds
 *
 * @param time String representation
 * @param format Default input format. If present, it will be used to resolve
 *  ambiguities during interpretation. If not specified, `mm:ss` is implied.
 *  [See section below for supported format list](https://github.com/Goldob/hh-mm-ss#supported-time-formats)
 */
export function toMs(time: string, format?: string): number;

/**
 * Convert given `hh:mm:ss` formatted string to seconds
 *
 * @param time String representation
 * @param format Default input format. If present, it will be used to resolve
 *  amiguities during interpretation. If not specified, `mm:ss` is implied.
 *  [See section below for supported format list](https://github.com/Goldob/hh-mm-ss#supported-time-formats)
 */
export function toS(time: string, format?: string): number;

/**
 * Generate formatted string from time in miliseconds
 *
 * @param ms Time in miliseconds
 * @param format Default output format. If not specified, `mm:ss` is implied.
 *  [See section below for supported format list](https://github.com/Goldob/hh-mm-ss#supported-time-formats)
 */
export function fromMs(ms: number, format?: string): string;

/**
 * Generate formatted string from time in seconds
 *
 * @param s Time in seconds
 * @param format Default output format. If not specified, `mm:ss` is implied.
 *  [See section below for supported format list](https://github.com/Goldob/hh-mm-ss#supported-time-formats)
 */
export function fromS(s: number, format?: string): string;
