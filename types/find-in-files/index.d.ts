// Type definitions for find-in-files 0.5
// Project: https://github.com/kaesetoast/find-in-files
// Definitions by: goooseman <https://github.com/goooseman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface FindResult {
    [filePath: string]: {
        matches: string[];
        count: number;
        line: string | null;
    };
}

export interface RegexControlOptions {
    term: string;
    flags: string;
}

export function find(
    pattern: string | RegExp | RegexControlOptions,
    directory: string,
    fileFilter?: string | RegExp,
): Promise<FindResult>;
export function findSync(
    pattern: string | RegExp | RegexControlOptions,
    directory: string,
    fileFilter?: string | RegExp,
): FindResult;
