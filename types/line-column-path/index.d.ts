// Type definitions for line-column-path 1.0
// Project: https://github.com/sindresorhus/line-column-path#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export function parse(input: PathSpec): ParsedPath;
export function stringify(input: PathDescriptor, options?: StringifyOptions): string;

export type PathSpec = string | PathDescriptor;

export interface PathDescriptor {
    file: string;
    line?: number;
    column?: number;
}

export type ParsedPath = Required<PathDescriptor>;

export interface StringifyOptions {
    file?: boolean;
    column?: boolean;
}
