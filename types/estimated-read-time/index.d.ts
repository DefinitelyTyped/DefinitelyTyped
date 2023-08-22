// Type definitions for estimated-read-time 1.2
// Project: https://github.com/karthik512/estimated-read-time
// Definitions by: Stepan Zinchenko <https://github.com/stepanzin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface TextOptions {
    MIN_WORD_LEN?: number;
    WPM?: number;
    IS_TECHNICAL_DOC?: boolean;
    TECH_DIFFICULTY?: 1 | 2 | 3 | 4 | 5;
    TOTAL_WORDS?: number;
    TOTAL_SECONDS?: number;
}

export interface TextResult {
    // eslint-disable-next-line camelcase
    word_count: number;
    seconds: number;
}

export function text(content: string, options?: TextOptions): TextResult;
