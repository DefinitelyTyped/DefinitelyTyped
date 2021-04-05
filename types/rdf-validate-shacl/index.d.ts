// Type definitions for rdf-validate-shacl 0.2
// Project: https://github.com/zazuko/rdf-validate-shacl#readme
// Definitions by: Tomasz Pluskiewicz <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as RDF from 'rdf-js';
import DataFactory = require('./src/data-factory');
import ValidationReport = require('./src/validation-report');

declare namespace SHACLValidator {
    interface Options {
        factory?: RDF.DataFactory & RDF.DatasetCoreFactory;
        maxErrors?: number;
    }
}

declare class SHACLValidator {
    constructor(shapes: RDF.DatasetCore, options?: SHACLValidator.Options);
    factory: DataFactory;
    depth: number;
    validate(data: RDF.DatasetCore): ValidationReport;
    nodeConformsToShape(focusNode: RDF.Term, shapeNode: RDF.Term): boolean;
}

export = SHACLValidator;
