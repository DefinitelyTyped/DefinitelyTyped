import { BlankNode, DataFactory, DatasetCore, DatasetCoreFactory, NamedNode, Quad, Term } from 'rdf-js';
import { GraphPointer } from 'clownface';

declare namespace ValidationReport {
    interface Options {
        factory: DataFactory & DatasetCoreFactory;
    }

    interface ValidationResult {
        term: BlankNode | NamedNode;
        dataset: DatasetCore;
        cf: GraphPointer;
        readonly message: Term[];
        readonly path: BlankNode | NamedNode | null;
        readonly focusNode: BlankNode | NamedNode | null;
        readonly severity: NamedNode | null;
        readonly sourceConstraintComponent: BlankNode | NamedNode | null;
        readonly sourceShape: BlankNode | NamedNode | null;
    }
}

declare class ValidationReport {
    constructor(resultQuads: Quad[], options: ValidationReport.Options);
    term: BlankNode | NamedNode;
    dataset: DatasetCore;
    conforms: boolean;
    results: ValidationReport.ValidationResult[];
}

export = ValidationReport;
