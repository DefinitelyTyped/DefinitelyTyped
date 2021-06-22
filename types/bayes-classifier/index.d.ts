// Type definitions for bayes-classifier 0.0
// Project: https://github.com/miguelmota/bayes-classifier
// Definitions by: Jason Harrison <https://github.com/jasonharrison>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

interface Classifications {
    label: string;
    value: number;
}

declare class BayesClassifier {
    constructor();

    addDocument(doc: string, label: string): void;

    addDocuments(docs: string[], label: string): void;

    classify(doc: string): string;

    getClassifications(doc: string): Classifications;

    restore(classifier: any): void;

    train(): void;
}

export = BayesClassifier;
