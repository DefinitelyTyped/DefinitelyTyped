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
    offset?: number | undefined;
    padding?: string | undefined;
    height?: number | undefined;
    colors?: Color[] | undefined;
    min?: number | undefined;
    max?: number | undefined;
    symbols?: [string, string, string, string, string, string, string, string, string, string] | undefined;
    format?: ((x: number, i: number) => string) | undefined;
}

export function plot(series: ReadonlyArray<number | number[]>, cfg?: PlotConfig): string;
