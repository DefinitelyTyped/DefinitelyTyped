// Type definitions for node-ssha256 0.1
// Project: https://github.com/henne-/node-ssha256
// Definitions by: Chris Midgley <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function check(hash: string, pw: string): boolean;
export function create(pw: string): string;
