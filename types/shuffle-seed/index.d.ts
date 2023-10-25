export as namespace shuffleSeed;

export function shuffle<T>(arr: ReadonlyArray<T>, seed: any): T[];
export function unshuffle<T>(arr: ReadonlyArray<T>, seed: any): T[];
