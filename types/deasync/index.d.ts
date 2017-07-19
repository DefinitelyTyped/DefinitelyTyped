// Type definitions for deasync
// Project: https://github.com/abbr/deasync
// Definitions by: Matt Rollins <https://github.com/Sicilica>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare function deasync(func: (...pn: any[])=>void): (...pn: any[])=>any;
declare namespace deasync {

	export function loopWhile(predicate: ()=>boolean): void
	export function runLoopOnce(): void
	export function sleep(ms: number): void

}

export = deasync
