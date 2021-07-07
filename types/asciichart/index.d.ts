// Type definitions for asciichart 1.5
// Project: https://github.com/kroitor/asciichart
// Definitions by: pokutuna <https://github.com/pokutuna>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace asciichart;

export const black: string;
export const red: string;
export const green: string;
export const yellow: string;
export const blue: string;
export const magenta: string;
export const cyan: string;
export const lightgray: string;
declare const _default: string; // default is a reserved word
export { _default as default };
export const darkgray: string;
export const lightred: string;
export const lightgreen: string;
export const lightyellow: string;
export const lightblue: string;
export const lightmagenta: string;
export const lightcyan: string;
export const white: string;
export const reset: string;

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

export function plot(series: ReadonlyArray<number | number[]>, cfg?: PlotConfig): string;
