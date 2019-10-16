// Type definitions for fast-shuffle 1.0
// Project: https://github.com/philihp/fast-shuffle
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default function shuffle<T>(deck: ReadonlyArray<T>, random?: () => number): T[];
