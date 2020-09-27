// Type definitions for elasticlunr 0.9
// Project: http://weixsong.github.io
// Definitions by: Luis Rodrigues <https://github.com/goblindegook>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = elasticlunr;

declare function elasticlunr<T>(
    config?: (this: elasticlunr.Index<T>, idx: elasticlunr.Index<T>) => void,
): elasticlunr.Index<T>;

declare namespace elasticlunr {
    class Configuration<T> {
        constructor(config: string, fields: Array<keyof T>);

        addAllFields2UserConfig(bool: Bool, expand: boolean, fields: Array<keyof T>): void;

        buildDefaultConfig(fields: Array<keyof T>): void;

        buildUserConfig(config: SearchConfig<T>, fields: Array<keyof T>): void;

        get(): SearchConfig<T>;

        reset(): void;
    }

    type DocumentReference = string | number;

    class DocumentStore<T> {
        constructor(save?: boolean);

        addDoc(docRef: DocumentReference, doc: T): void;

        addFieldLength(docRef: DocumentReference, fieldName: keyof T, length: number): void;

        getDoc(docRef: DocumentReference): T;

        getFieldLength(docRef: DocumentReference, fieldName: keyof T): number;

        hasDoc(docRef: DocumentReference): boolean;

        isDocStored(): boolean;

        removeDoc(docRef: DocumentReference): void;

        toJSON(): SerialisedDocumentStore<T>;

        updateFieldLength(docRef: DocumentReference, fieldName: keyof T, length: number): void;

        static load<T>(serialisedData: SerialisedDocumentStore<T>): DocumentStore<T>;
    }

    type EventType = 'add' | 'update' | 'remove';
    type EventHandler = (...args: any[]) => void;

    class EventEmitter {
        constructor();

        addListener(e1: EventType, fn: EventHandler): void;
        addListener(e1: EventType, e2: EventType, fn: EventHandler): void;
        addListener(e1: EventType, e2: EventType, e3: EventType, fn: EventHandler): void;

        emit(name: EventType, ...args: any[]): void;

        hasHandler(name: EventType): boolean;

        removeListener(name: EventType, fn: EventHandler): void;
    }

    interface SearchScores {
        [key: string]: number;
    }

    interface SearchResults {
        ref: string;
        score: number;
    }

    interface IndexTokens {
        [key: string]: string[];
    }

    interface IndexDocuments<T> {
        [key: string]: T;
    }

    type Bool = 'OR' | 'AND';

    type FieldSearchConfig<T extends {}> = {
        [K in keyof T]?: {
            bool?: Bool;
            boost?: number;
        };
    };

    interface SearchConfig<T> {
        fields?: FieldSearchConfig<T>;
        expand?: boolean;
    }

    interface SerialisedInvertedIndex {
        root: InvertedIndexNode;
    }

    interface SerialisedDocumentStore<T> {
        docInfo: {
            [docRef: string]: {
                [field in keyof T]: number;
            };
        };
        docs: {
            [docRef: string]: T;
        };
    }

    interface SerialisedIndexData<T> {
        version: string;
        fields: Array<keyof T>;
        ref: keyof T;
        pipeline: SerialisedPipeline;
        documentStore: SerialisedDocumentStore<T>;
        index: { [K in keyof T]?: InvertedIndexNode };
    }

    class Index<T> {
        constructor();

        documentStore: DocumentStore<T>;

        eventEmitter: EventEmitter;

        index: { [K in keyof T]?: InvertedIndexNode };

        pipeline: Pipeline;

        addDoc(doc: T, emitEvent?: boolean): void;

        addField(fieldName: keyof T): Index<T>;

        coordNorm(scores: SearchScores, docTokens: IndexTokens, n: number): SearchScores;

        fieldSearch(queryTokens: string[], fieldName: keyof T, config: FieldSearchConfig<T>): SearchScores;

        fieldSearchStats(docTokens: IndexTokens, token: string, docs: IndexDocuments<T>): void;

        getFields(): Array<keyof T>;

        idf(term: string, field: keyof T): number;

        mergeScores(accumScores: SearchScores | null, scores: SearchScores, op: 'AND' | 'OR'): SearchScores;

        off(name: EventType, fn: EventHandler): void;

        on(e1: EventType, fn: EventHandler): void;
        on(e1: EventType, e2: EventType, fn: EventHandler): void;
        on(e1: EventType, e2: EventType, e3: EventType, fn: EventHandler): void;

        removeDoc(doc: T, emitEvent?: boolean): void;

        removeDocByRef(docRef: DocumentReference, emitEvent?: boolean): void;

        saveDocument(save: boolean): Index<T>;

        search(query: string, userConfig?: SearchConfig<T>): SearchResults[];

        setRef(refName: keyof T): Index<T>;

        toJSON(): SerialisedIndexData<T>;

        updateDoc(doc: T, emitEvent?: boolean): void;

        use(plugin: (...args: any[]) => any, ...args: any[]): void;

        static load<T>(serialisedData: SerialisedIndexData<T>): Index<T>;
    }

    interface TokenInfo {
        ref: number | string;
        tf: number;
    }

    interface InvertedIndexCharNode {
        a?: InvertedIndexNode;
        b?: InvertedIndexNode;
        c?: InvertedIndexNode;
        d?: InvertedIndexNode;
        e?: InvertedIndexNode;
        f?: InvertedIndexNode;
        g?: InvertedIndexNode;
        h?: InvertedIndexNode;
        i?: InvertedIndexNode;
        j?: InvertedIndexNode;
        k?: InvertedIndexNode;
        l?: InvertedIndexNode;
        m?: InvertedIndexNode;
        n?: InvertedIndexNode;
        o?: InvertedIndexNode;
        p?: InvertedIndexNode;
        q?: InvertedIndexNode;
        r?: InvertedIndexNode;
        s?: InvertedIndexNode;
        t?: InvertedIndexNode;
        u?: InvertedIndexNode;
        v?: InvertedIndexNode;
        w?: InvertedIndexNode;
        x?: InvertedIndexNode;
        y?: InvertedIndexNode;
        z?: InvertedIndexNode;
    }

    interface InvertedIndexDocs {
        [key: string]: {
            tf?: number;
        };
    }

    type InvertedIndexNode = InvertedIndexCharNode & {
        df: number;
        docs: InvertedIndexDocs;
    };

    class InvertedIndex {
        constructor();

        addToken(token: string, tokenInfo: TokenInfo, root?: InvertedIndexNode): void;

        expandToken(token: string, memo?: string[], root?: InvertedIndexNode): string[];

        getDocFreq(token: string): number;

        getDocs(token: string): InvertedIndexDocs;

        getNode(token: string): InvertedIndexNode;

        getTermFrequency(token: string, docRef: string | number): number;

        hasToken(token: string): boolean;

        removeToken(token: string, ref: number | string): void;

        toJSON(): SerialisedInvertedIndex;

        static load(serialisedData: SerialisedInvertedIndex): InvertedIndex;
    }

    type SerialisedPipeline = string[];

    type PipelineFunction = (token: string, i: number, tokens: string[]) => string | undefined | null | void;

    class Pipeline {
        constructor();

        add(...functions: PipelineFunction[]): void;

        after(existingFn: PipelineFunction, newFn: PipelineFunction): void;

        before(existingFn: PipelineFunction, newFn: PipelineFunction): void;

        get(): PipelineFunction[];

        remove(fn: PipelineFunction): void;

        reset(): void;

        run(tokens: string[]): string[];

        toJSON(): SerialisedPipeline;

        static getRegisteredFunction(label: string): PipelineFunction;

        static load(serialised: SerialisedPipeline): Pipeline;

        static registerFunction(fn: PipelineFunction, label: string): void;

        static warnIfFunctionNotRegistered(fn: PipelineFunction): void;
    }

    class SortedSet<T> {
        constructor();

        add(...args: any[]): void;

        clone(): SortedSet<T>;

        forEach(fn: (element: T, index: number, collection: T[]) => void, ctx: {}): void;

        indexOf(elem: {}): number;

        intersect(otherSet: SortedSet<T>): SortedSet<T>;

        locationFor(elem: T): number;

        map(fn: (element: T, index: number, collection: T[]) => T, ctx?: {}): T[];

        toArray(): T[];

        toJSON(): T[];

        union(otherSet: SortedSet<T>): SortedSet<T>;

        static load<T>(serialisedData: T[]): SortedSet<T>;
    }

    const defaultStopWords: {
        [key: string]: boolean;
    };

    const version: string;

    function addStopWords(words: string[]): void;

    function clearStopWords(): void;

    function resetStopWords(): void;

    function stemmer(w: string): string;

    function stopWordFilter(token: string): string;

    function tokenizer(str?: string): string[];

    function trimmer(token: string): string;

    namespace Pipeline {
        namespace registeredFunctions {
            function stemmer(w: string): string;

            function stopWordFilter(token: string): string;

            function trimmer(token: string): string;

            namespace stemmer {
                const label: string;
            }

            namespace stopWordFilter {
                const label: string;

                const stopWords: {
                    [key: string]: boolean;
                };
            }

            namespace trimmer {
                const label: string;
            }
        }
    }

    namespace stemmer {
        const label: string;
    }

    namespace stopWordFilter {
        const label: string;

        const stopWords: {
            [key: string]: boolean;
        };
    }

    namespace tokenizer {
        const defaultSeperator: RegExp;

        const seperator: RegExp;

        function getSeperator(): RegExp;

        function resetSeperator(): void;

        function setSeperator(sep: RegExp): void;
    }

    namespace trimmer {
        const label: string;
    }

    namespace utils {
        function toString(obj: {}): string;

        function warn(message: string): void;
    }
}
