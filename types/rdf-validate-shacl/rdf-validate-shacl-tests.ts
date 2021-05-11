import { DatasetCore, DatasetCoreFactory, NamedNode, Term, BlankNode } from "rdf-js";
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
    const path: BlankNode | NamedNode | null = result.path;
    const focusNode: BlankNode | NamedNode | null = result.focusNode;
    const severity: NamedNode | null = result.severity;
    const sourceConstraintComponent: BlankNode | NamedNode | null = result.sourceConstraintComponent;
    const sourceShape: BlankNode | NamedNode | null = result.sourceShape;
}

const dataset: DatasetCore = report.dataset;
