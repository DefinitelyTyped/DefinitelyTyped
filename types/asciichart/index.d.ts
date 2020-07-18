// Type definitions for asciichart 1.5
// Project: https://github.com/kroitor/asciichart
// Definitions by: pokutuna <https://github.com/pokutuna>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export let black: string;
export let red: string;
export let green: string;
export let yellow: string;
export let blue: string;
export let magenta: string;
export let cyan: string;
export let lightgray: string;
declare let _default: string; // default is a reserved word
export { _default as default };
export let darkgray: string;
export let lightred: string;
export let lightgreen: string;
export let lightyellow: string;
export let lightblue: string;
export let lightmagenta: string;
export let lightcyan: string;
export let white: string;
export let reset: string;

/**
 * Color is a control sequence for coloring.
 * undefined is equivalent to the default color.
 */
export type Color = string | undefined;

export function colored(char: string, color: Color): string;

export interface PlotConfig {
    offset?: number;
    padding?: string;
    height?: number;
    colors?: Color[];
    min?: number;
    max?: number;
    symbols?: [string, string, string, string, string, string, string, string, string, string];
    format?: (x: number, i: number) => string;
}

export function plot(series: ReadonlyArray<number>, cfg?: PlotConfig): string;
