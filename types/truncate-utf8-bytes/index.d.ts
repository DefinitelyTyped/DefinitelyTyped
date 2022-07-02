// Type definitions for truncate-utf8-bytes 1.0
// Project: https://github.com/parshap/truncate-utf8-bytes#readme
// Definitions by: Ben Limmer <https://github.com/blimmer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** Returns string truncated to at most length bytes in length. */
declare function truncate(string: string, byteLength: number): string;

export = truncate;
