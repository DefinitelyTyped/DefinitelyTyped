// Type definitions for shuffle-seed 1.1
// Project: https://github.com/webcaetano/shuffle-seed#readme
// Definitions by: Leonardo Donelli <https://github.com/LeartS>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace shuffleSeed;

export function shuffle<T>(arr: ReadonlyArray<T>, seed: any): T[];
export function unshuffle<T>(arr: ReadonlyArray<T>, seed: any): T[];
