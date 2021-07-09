import { DataFactory, DatasetCore, DatasetCoreFactory } from 'rdf-js';
import { GraphPointer } from 'clownface';

type FactoryFor<D> = D extends DatasetCore<infer OutQuad, infer InQuad> ? DataFactory<OutQuad, InQuad> & DatasetCoreFactory<OutQuad, InQuad, D> : never;
type OutQuadOf<D> = D extends DatasetCore<infer Q, any> ? Q : never;
type InQuadOf<D> = D extends DatasetCore<any, infer Q> ? Q : never;
type SubjectOf<D> = OutQuadOf<D>['subject'];
type ObjectOf<D> = OutQuadOf<D>['object'];

declare namespace ValidationReport {
    interface Options<F extends DataFactory & DatasetCoreFactory> {
        factory: F;
    }

    interface ValidationResult<D extends DatasetCore> {
        term: SubjectOf<D>;
        dataset: D;
        cf: GraphPointer<SubjectOf<D>, D>;
        readonly message: Array<ObjectOf<D>>;
        readonly path: ObjectOf<D> | null;
        readonly focusNode: ObjectOf<D> | null;
        readonly severity: ObjectOf<D> | null;
        readonly sourceConstraintComponent: ObjectOf<D> | null;
        readonly sourceShape: ObjectOf<D> | null;
    }
}

declare class ValidationReport<D extends DatasetCore> {
    constructor(resultQuads: Array<InQuadOf<D>>, options: ValidationReport.Options<FactoryFor<D>>);
    term: SubjectOf<D>;
    dataset: D;
    conforms: boolean;
    results: Array<ValidationReport.ValidationResult<D>>;
}

export = ValidationReport;
