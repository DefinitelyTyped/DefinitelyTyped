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
