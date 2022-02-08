// Type definitions for rdf-validate-shacl 0.4
// Project: https://github.com/zazuko/rdf-validate-shacl#readme
// Definitions by: Tomasz Pluskiewicz <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as RDF from 'rdf-js';
import ValidationReport = require('./src/validation-report');

type Factory<OutQuad extends RDF.Quad = RDF.Quad,
    InQuad extends RDF.Quad = RDF.Quad,
    D extends RDF.DatasetCore<OutQuad, InQuad> = RDF.DatasetCore<OutQuad, InQuad>,
> = RDF.DataFactory<OutQuad, InQuad> & RDF.DatasetCoreFactory<OutQuad, InQuad, D>;

declare namespace SHACLValidator {
    interface Options<F extends Factory> {
        factory?: F | undefined;
        maxErrors?: number | undefined;
    }
}

declare class SHACLValidator<F extends Factory = RDF.DataFactory & RDF.DatasetCoreFactory> {
    constructor(shapes: RDF.DatasetCore, options?: SHACLValidator.Options<F>);
    factory: F;
    depth: number;
    validate(data: RDF.DatasetCore): ValidationReport<F>;
    nodeConformsToShape(focusNode: RDF.Term, shapeNode: RDF.Term): boolean;
}

export = SHACLValidator;
