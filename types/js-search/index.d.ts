// Type definitions for js-search v1.4.0
// Project: https://github.com/bvaughn/js-search
// Definitions by: Guo Yunhe <https://github.com/guoyunhe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "js-search" {

    class Search {

        constructor(
            uidFieldName: string | Array<string>
        );

        public indexStrategy: IIndexStrategy;
        public sanitizer: ISanitizer;
        public searchIndex: ISearchIndex;
        public tokenizer: ITokenizer;

        public addDocument(document: Object): void;
        public addDocuments(documents: Array<Object>): void;

        public addIndex(field: string | Array<string>): void;

        public search(query: string): Array<Object>;

    }

    interface IIndexStrategy {
        expandToken(token: string): Array<string>;
    }

    class AllSubstringsIndexStrategy implements IIndexStrategy {
        expandToken(token: string): Array<string>;
    }

    class ExactWordIndexStrategy implements IIndexStrategy {
        expandToken(token: string): Array<string>;
    }

    class PrefixIndexStrategy implements IIndexStrategy {
        expandToken(token: string): Array<string>;
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
            document: Object
        ): void;

        search(
            tokens: Array<string>,
            corpus: Array<Object>
        ): Array<Object>;
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
        constructor(uidFieldName: string | Array<string>);

        indexDocument(token: string, uid: string, doc: Object): void;

        search(tokens: Array<string>, corpus: Array<Object>): Array<Object>;
    }

    class UnorderedSearchIndex implements ISearchIndex {
        constructor();

        indexDocument(token: string, uid: string, doc: Object): void;

        search(tokens: Array<string>, corpus: Array<Object>): Array<Object>;
    }

    interface ITokenizer {
        tokenize(text: string): Array<string>;
    }

    class SimpleTokenizer implements ITokenizer {
        tokenize(text: string): Array<string>;
    }

    type StemmingFunction = (text: string) => string;

    class StemmingTokenizer implements ITokenizer {
        constructor(
            stemmingFunction: StemmingFunction,
            decoratedTokenizer: ITokenizer
        );

        tokenize(text: string): Array<string>;
    }

    class StopWordsTokenizer implements ITokenizer {
        constructor(decoratedTokenizer: ITokenizer);

        tokenize(text: string): Array<string>;
    }

    var StopWordsMap: any;

    class TokenHighlighter {

        constructor(
            opt_indexStrategy: IIndexStrategy,
            opt_sanitizer: ISanitizer,
            opt_wrapperTagName: string
        );

        public highlight(text: string, tokens: Array<string>): string;

    }

}
