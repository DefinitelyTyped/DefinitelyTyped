export as namespace d20;

export function roll(dice: string | number, verbose?: boolean): number;
export function roll(dice: string | number, verbose: false): number;
export function roll(dice: string | number, verbose: true): number[];
export function verboseRoll(dice: string | number): number[];
