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
