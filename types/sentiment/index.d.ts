// Type definitions for sentiment 5.0
// Project: https://github.com/thisandagain/sentiment
// Definitions by: Isaac Ong <https://github.com/iojw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Sentiment;

declare class Sentiment {
    constructor(options?: Sentiment.SentimentOptions);

    analyze(
        phrase: string,
        options?: Sentiment.AnalysisOptions,
        callback?: (err: string, result: Sentiment.AnalysisResult) => void,
    ): Sentiment.AnalysisResult;
    registerLanguage(languageCode: string, language: Sentiment.LanguageModule): void;
}

declare namespace Sentiment {
    // No options supported currently
    // tslint:disable-next-line no-empty-interface
    interface SentimentOptions {}

    interface LanguageModule {
        labels: {
            [token: string]: number;
        };
        scoringStrategy?: {
            apply: (tokens: string[], cursor: number, tokenScore: number) => number;
        };
    }

    interface AnalysisOptions {
        extras?: {
            [token: string]: number;
        };
        language?: string;
    }

    interface AnalysisResult {
        score: number;
        comparative: number;
        calculation: Array<{
            [token: string]: number;
        }>;
        tokens: string[];
        words: string[];
        positive: string[];
        negative: string[];
    }
}
