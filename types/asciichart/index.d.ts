// Type definitions for asciichart 1.5
// Project: https://github.com/kroitor/asciichart
// Definitions by: pokutuna <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface PlotConfig {
    offset?: number;
    padding?: string;
    height?: number;
    format?: (x: number, i: number) => string;
}

export function plot(series: ReadonlyArray<number>, cfg?: PlotConfig): string;
