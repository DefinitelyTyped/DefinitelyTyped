// Type definitions for stats-lite 2.2
// Project: https://github.com/brycebaril/node-stats-lite
// Definitions by: Nathan Shively-Sanders <https://github.com/sandersn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function sum(ns: number[]): number;
export function mean(ns: number[]): number;
export function median(ns: number[]): number;
export function mode(ns: number[]): number;
export function variance(ns: number[]): number;
export function stdev(ns: number[]): number;
export function sampleStdev(ns: number[]): number;
export function percentile(ns: number[], percentile: number): number;
export function histogram(ns: number[], percentile: number): number;
