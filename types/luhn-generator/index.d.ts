// Type definitions for luhn-generator 0.5
// Project: https://github.com/rromanovsky/luhn-generator
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace luhn;

export function checksum(input: number | string): number;

export function generate(input: number | string, inputOptions?: InputOptions): number;

export function random(input: number | string, inputOptions?: InputOptions): number;

export function validate(input: number | string): boolean;

export interface InputOptions {
    /** @default 0 */
    pad?: number;
    /** @default 2 */
    weightFactor?: number;
}
