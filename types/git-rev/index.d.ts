// Type definitions for git-rev 0.2
// Project: https://github.com/tblobaum/git-rev
// Definitions by: Spicy Pixel <http://spicypixel.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function short(callback: (short: string) => void): void;
export function long(callback: (long: string) => void): void;
export function branch(callback: (branch: string) => void): void;
export function tag(callback: (tag: string) => void): void;
export function log(callback: (log: string[][]) => void): void;
