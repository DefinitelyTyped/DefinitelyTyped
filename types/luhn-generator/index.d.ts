export as namespace luhn;

export function checksum(input: number | string): number;

export function generate(input: number | string, inputOptions?: InputOptions): number;

export function random(input: number | string, inputOptions?: InputOptions): number;

export function validate(input: number | string): boolean;

export interface InputOptions {
    /** @default 0 */
    pad?: number | undefined;
    /** @default 2 */
    weightFactor?: number | undefined;
}
