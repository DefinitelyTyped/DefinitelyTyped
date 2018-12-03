// Type definitions for random-int 1.0
// Project: https://github.com/sindresorhus/random-int
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = randomInt;

declare function randomInt(max: number): number;
declare function randomInt(min: number, max: number): number; // tslint:disable-line unified-signatures
