// Type definitions for rdf-validate-shacl 0.2
// Project: https://github.com/zazuko/rdf-validate-shacl#readme
// Definitions by: Tomasz Pluskiewicz <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { DataFactory, DatasetCore, DatasetCoreFactory, Quad } from 'rdf-js';
import ValidationReport = require('./src/validation-report');

type FactoryFor<D> = D extends DatasetCore<infer OutQuad, infer InQuad> ? DataFactory<OutQuad, InQuad> & DatasetCoreFactory<OutQuad, InQuad, D> : never
type OutQuadOf<T> = T extends DatasetCore<infer Q, any> ? Q : never;

declare namespace SHACLValidator {
    interface Options<F extends DataFactory & DatasetCoreFactory> {
        factory?: F;
        maxErrors?: number;
    }
}

declare class SHACLValidator<D extends DatasetCore<Quad>, F extends FactoryFor<D>>{
    constructor(shapes: D, options?: SHACLValidator.Options<F>);
    factory: F;
    depth: number;
    validate(data: D): ValidationReport<D>;
    nodeConformsToShape(focusNode: OutQuadOf<D>['subject'], shapeNode: OutQuadOf<D>['subject']): boolean;
}

export = SHACLValidator;
