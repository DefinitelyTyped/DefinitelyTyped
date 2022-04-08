import { DataFactory, DatasetCore, DatasetCoreFactory, Quad, Term } from 'rdf-js';
import { GraphPointer } from 'clownface';

declare namespace ValidationReport {
    interface Options {
        factory: DataFactory & DatasetCoreFactory;
    }

    interface ValidationResult {
        term: Term;
        dataset: DatasetCore;
        cf: GraphPointer;
        readonly message: Term[];
        readonly path: Term | null;
        readonly focusNode: Term | null;
        readonly severity: Term | null;
        readonly sourceConstraintComponent: Term | null;
        readonly sourceShape: Term | null;
    }
}

declare class ValidationReport {
    constructor(resultQuads: Quad[], options: ValidationReport.Options);
    term: Term;
    dataset: DatasetCore;
    conforms: boolean;
    results: ValidationReport.ValidationResult[];
}

export = ValidationReport;
