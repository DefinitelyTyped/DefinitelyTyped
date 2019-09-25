// Type definitions for ssdeep 0.1
// Project: https://github.com/pchaigno/node-ssdeep
// Definitions by: Arne Schubert <https://github.com/atd-schubert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function compare(hash1: string, hash2: string): number;

export function hash(content: string): string;

export function hash_from_file(path: string): string;
