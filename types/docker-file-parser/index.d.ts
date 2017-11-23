// Type definitions for docker-file-parser 1.0
// Project: https://github.com/joyent/docker-file-parse
// Definitions by: Yash Kulshrestha <https://github.com/yashdalfthegray>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface CommandEntry {
    name: string;
    args: string[];
    lineno: number;
    raw: string;
    error?: string;
}

export interface ParseOptions {
    includeComments: boolean;
}

export function parse(
    contents: string,
    options?: ParseOptions
): CommandEntry[];
