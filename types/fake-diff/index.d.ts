// Type definitions for fake-diff 1.0.0
// Project: https://github.com/onurkerimov/fake-diff
// Definitions by: Álvaro Mondéjar Rubio <https://github.com/mondeja>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default function fakeDiff(
    previous: string,
    next: string,
    options?: { hideLines?: boolean; maxAdjacentStaticLines?: number }
): string;
