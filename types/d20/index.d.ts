// Type definitions for d20 1.4
// Project: https://github.com/michaelenger/d20.js#readme
// Definitions by: Asai Masami <https://github.com/pipboy3000>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace d20;

export function roll(dice: string|number, verbose?: boolean): number;
export function roll(dice: string|number, verbose: false): number;
export function roll(dice: string|number, verbose: true): number[];
export function verboseRoll(dice: string|number): number[];
