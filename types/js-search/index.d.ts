declare module "js-search" {
    class Search {
        constructor(
            uidFieldName: string | string[],
        );

        public indexStrategy: IIndexStrategy;
        public sanitizer: ISanitizer;
        public searchIndex: ISearchIndex;
        public tokenizer: ITokenizer;

        public addDocument(document: Object): void;
        public addDocuments(documents: Object[]): void;

        public addIndex(field: string | string[]): void;

        public search(query: string): Object[];
    }

    interface IIndexStrategy {
        expandToken(token: string): string[];
    }

    class AllSubstringsIndexStrategy implements IIndexStrategy {
        expandToken(token: string): string[];
    }

    class ExactWordIndexStrategy implements IIndexStrategy {
        expandToken(token: string): string[];
    }

    class PrefixIndexStrategy implements IIndexStrategy {
        expandToken(token: string): string[];
    }

    interface ISanitizer {
        sanitize(text: string): string;
    }

    class CaseSensitiveSanitizer implements ISanitizer {
        sanitize(text: string): string;
    }

    class LowerCaseSanitizer implements ISanitizer {
        sanitize(text: string): string;
    }

    interface ISearchIndex {
        indexDocument(
            token: string,
            uid: string,
            document: Object,
        ): void;

        search(
            tokens: string[],
            corpus: Object[],
        ): Object[];
    }

    type ITfIdfTokenMap = {
        [token: string]: ITfIdfTokenMetadata;
    };

    type ITfIdfUidMap = {
        [uid: string]: ITfIdfUidMetadata;
    };

    type ITfIdfTokenMetadata = {
        $numDocumentOccurrences: number;
        $totalNumOccurrences: number;
        $uidMap: ITfIdfUidMap;
    };

    type ITfIdfUidMetadata = {
        $document: Object;
        $numTokenOccurrences: number;
    };

    class TfIdfSearchIndex implements ISearchIndex {
        constructor(uidFieldName: string | string[]);

        indexDocument(token: string, uid: string, doc: Object): void;

        search(tokens: string[], corpus: Object[]): Object[];
    }

    class UnorderedSearchIndex implements ISearchIndex {
        constructor();

        indexDocument(token: string, uid: string, doc: Object): void;

        search(tokens: string[], corpus: Object[]): Object[];
    }

    interface ITokenizer {
        tokenize(text: string): string[];
    }

    class SimpleTokenizer implements ITokenizer {
        tokenize(text: string): string[];
    }

    type StemmingFunction = (text: string) => string;

    class StemmingTokenizer implements ITokenizer {
        constructor(
            stemmingFunction: StemmingFunction,
            decoratedTokenizer: ITokenizer,
        );

        tokenize(text: string): string[];
    }

    class StopWordsTokenizer implements ITokenizer {
        constructor(decoratedTokenizer: ITokenizer);

        tokenize(text: string): string[];
    }

    var StopWordsMap: any;

    class TokenHighlighter {
        constructor(
            opt_indexStrategy: IIndexStrategy,
            opt_sanitizer: ISanitizer,
            opt_wrapperTagName: string,
        );

        public highlight(text: string, tokens: string[]): string;
    }
}
