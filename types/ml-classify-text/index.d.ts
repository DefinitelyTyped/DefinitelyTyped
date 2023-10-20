interface ModelOptions {
    nGramMin: number;
    nGramMax: number;
    vocabulary: string[];
    data: {};
}

interface PredictionOptions {
    label: string;
    confidence: number;
}

declare class Classifier {
    constructor(model?: Partial<ModelOptions> | Model);
    get model(): Model;
    set model(model: Model | Partial<ModelOptions>);
    train(input: string | string[], label: string): this;
    predict(input: string, maxMatches?: number, minimumConfidence?: number): Prediction[];
    splitWords(input: string): string[];
    tokenize(input: string | string[]): Record<string, number>;
    vectorize(tokens: Record<string, number>): Record<number, number>;
    cosineSimilarity(v1: Record<number, number>, v2: Record<number, number>): number;
}

declare class Model {
    constructor(config?: Partial<ModelOptions>);
    get nGramMin(): number;
    set nGramMin(nGramMin: number);
    get nGramMax(): number;
    set nGramMax(nGramMax: number);
    get vocabulary(): Vocabulary;
    set vocabulary(vocabulary: Vocabulary | string[]);
    get data(): Record<string, Record<string, number>>;
    set data(data: Record<string, Record<string, number>>);
    serialize(): ModelOptions;
}

declare class Vocabulary {
    constructor(terms: string[]);
    get size(): number;
    get terms(): Set<string>;
    set terms(terms: Set<string> | string[]);
    add(terms: string | string[] | Set<string>): this;
    remove(terms: string | string[] | Set<string>): this;
    has(term: string): boolean;
    indexOf(term: string): number;
}

declare class Prediction {
    constructor(prediction?: Partial<PredictionOptions>);
    get label(): string;
    set label(label: string);
    get confidence(): number;
    set confidence(confidence: number);
}

export {
    Classifier,
    Classifier as default,
    Model,
    Vocabulary as Cocabulary, // typo by the package author
};
