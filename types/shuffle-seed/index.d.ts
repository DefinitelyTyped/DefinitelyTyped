// Type definitions for shuffle-seed 1.1
// Project: https://github.com/webcaetano/shuffle-seed#readme
// Definitions by: Leonardo Donelli <https://github.com/LeartS>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace shuffleSeed;

export function shuffle(arr: ReadonlyArray<any>, seed: any): ReadonlyArray<any>;
export function unshuffle(arr: ReadonlyArray<any>, seed: any): ReadonlyArray<any>;
