import * as RDF from 'rdf-js';
import { GraphPointer } from 'clownface';

type Factory<OutQuad extends RDF.Quad = RDF.Quad,
    InQuad extends RDF.Quad = RDF.Quad,
    D extends RDF.DatasetCore<OutQuad, InQuad> = RDF.DatasetCore<OutQuad, InQuad>,
> = RDF.DataFactory<OutQuad, InQuad> & RDF.DatasetCoreFactory<OutQuad, InQuad, D>;

type BlankNodeOf<F extends Factory> = ReturnType<F['blankNode']>;
type NamedNodeOf<F extends Factory> = ReturnType<F['namedNode']>;
type LiteralOf<F extends Factory> = ReturnType<F['literal']>;
type DatasetOf<F extends Factory> = ReturnType<F['dataset']>;

declare namespace ValidationReport {
    interface Options<F extends Factory> {
        factory: F;
    }

    interface ValidationResult<F extends Factory = Factory> {
        term: BlankNodeOf<F> | NamedNodeOf<F>;
        dataset: DatasetOf<F>;
        pointer: GraphPointer<BlankNodeOf<F> | NamedNodeOf<F>, DatasetOf<F>>;
        readonly message: Array<BlankNodeOf<F> | NamedNodeOf<F> | LiteralOf<F>>;
        readonly path: BlankNodeOf<F> | NamedNodeOf<F> | null;
        readonly focusNode: BlankNodeOf<F> | NamedNodeOf<F> | null;
        readonly severity: NamedNodeOf<F> | null;
        readonly sourceConstraintComponent: BlankNodeOf<F> | NamedNodeOf<F> | null;
        readonly sourceShape: BlankNodeOf<F> | NamedNodeOf<F> | null;
        readonly detail: Array<ValidationResult<F>>;
    }
}

declare class ValidationReport<F extends Factory = Factory> {
    constructor(resultQuads: RDF.Quad[], options: ValidationReport.Options<F>);
    term: BlankNodeOf<F> | NamedNodeOf<F>;
    dataset: DatasetOf<F>;
    pointer: GraphPointer<BlankNodeOf<F> | NamedNodeOf<F>, DatasetOf<F>>;
    conforms: boolean;
    results: Array<ValidationReport.ValidationResult<F>>;
}

export = ValidationReport;
