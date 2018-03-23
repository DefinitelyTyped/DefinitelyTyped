// Type definitions for seededshuffle 0.2
// Project: https://github.com/LouisT/SeededShuffle
// Definitions by: Uri Shaked <https://github.com/urish>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const seed: number;
export const strSeed: string;

export function shuffle<T>(arr: T[], seed: string|number): T[];
export function shuffle<T>(arr: ReadonlyArray<T>, seed: string|number, copy: true): T[];

export function unshuffle<T>(arr: T[], seed: string|number): T[];
export function unshuffle<T>(arr: ReadonlyArray<T>, seed: string|number, copy: true): T[];
