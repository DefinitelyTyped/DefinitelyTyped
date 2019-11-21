export function require(path: string): any;

export function resolve(path: string): string;

export function resolveFrom(from: string, target: string): string | null;

export function deresolve(targetFilename: string, from: string): string;
