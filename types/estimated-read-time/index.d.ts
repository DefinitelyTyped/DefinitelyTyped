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
