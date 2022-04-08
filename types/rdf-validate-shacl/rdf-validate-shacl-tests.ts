import { DatasetCore, DatasetCoreFactory, Term } from "rdf-js";
import SHACLValidator = require("rdf-validate-shacl");
import DataFactory = require("rdf-validate-shacl/src/data-factory");

const shapes: DatasetCore = <any> {};
const data: DatasetCore = <any> {};
const factory: DatasetCoreFactory & DataFactory = <any> {};

const validator = new SHACLValidator(shapes, { factory });
const report = validator.validate(data);

const conform: boolean = report.conforms;

for (const result of report.results) {
    const message: Term[] = result.message;
    const path: Term | null = result.path;
    const focusNode: Term | null = result.focusNode;
    const severity: Term | null = result.severity;
    const sourceConstraintComponent: Term | null = result.sourceConstraintComponent;
    const sourceShape: Term | null = result.sourceShape;
}

const dataset: DatasetCore = report.dataset;
