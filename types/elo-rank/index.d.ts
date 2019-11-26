// Type definitions for elo-rank 1.0
// Project: https://github.com/dmamills/elo-rank#readme
// Definitions by: Antonio Pavlinovic <https://github.com/apavlinovic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

declare class EloRank {
	constructor(kFactor?: number);
	setKFactor(kFactor: number): void;
	getKFactor(): number;
	getExpected(a: number, b: number): number;
	updateRating(expected: number, actual: number, current: number): number;
}

export = EloRank;
