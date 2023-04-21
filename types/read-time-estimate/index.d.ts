// Type definitions for read-time-estimate 0.0
// Project: https://github.com/pritishvaidya/read-time-estimate#readme
// Definitions by: rubek <https://github.com/rubek-joshi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ You can declare types that are available via importing the module */
declare function readTimeEstimate(
    string: string,
    customWordTime?: number,
    customImageTime?: number,
    chineseKoreanReadTime?: number,
    imageTags?: string[],
): readTimeEstimate.ReadTimeEstimate;

declare namespace readTimeEstimate {
    interface ReadTimeEstimate {
        humanizedDuration: string;
        duration: number;
        totalWords: number;
        wordTime: number;
        totalImages: number;
        imageTime: number;
        otherLanguageTimeCharacters: number;
        otherLanguageTime: number;
    }
}

export = readTimeEstimate;
