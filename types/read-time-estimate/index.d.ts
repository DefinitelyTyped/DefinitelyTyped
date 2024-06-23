/*~ You can declare types that are available via importing the module */
export interface ReadTimeEstimate {
    humanizedDuration: string;
    duration: number;
    totalWords: number;
    wordTime: number;
    totalImages: number;
    imageTime: number;
    otherLanguageTimeCharacters: number;
    otherLanguageTime: number;
}

export default function readTimeEstimate(
    string: string,
    customWordTime?: number,
    customImageTime?: number,
    chineseKoreanReadTime?: number,
    imageTags?: string[],
): ReadTimeEstimate;
