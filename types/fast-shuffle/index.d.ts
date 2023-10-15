// Type definitions for fast-shuffle 4.5
// Project: https://github.com/philihp/fast-shuffle
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function shuffle<T>(deck: ReadonlyArray<T>): T[];
export default function _default<T>(randomSeed: number, deck: ReadonlyArray<T>): T[];
