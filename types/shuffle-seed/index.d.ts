export as namespace shuffleSeed;

export function shuffle<T>(arr: readonly T[], seed: any): T[];
export function unshuffle<T>(arr: readonly T[], seed: any): T[];
