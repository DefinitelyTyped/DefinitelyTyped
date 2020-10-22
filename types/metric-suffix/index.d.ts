// Type definitions for metric-suffix.js 0.0.3
// Project: https://github.com/mstdokumaci/metric-suffix.js
// Definitions by: David Muller <https://github.com/davidm77>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace metric_suffix;

export = metric_suffix;

declare function metric_suffix(value: number, precision?: number): string;
