import { DataFactory, DatasetCore, DatasetCoreFactory, Literal, NamedNode } from "@rdfjs/types";
import { GraphPointer } from "clownface";
import SHACLValidator = require("rdf-validate-shacl");
import $rdf from "rdf-ext";
import { ValidationResult } from "rdf-validate-shacl/src/validation-report";
import ValidationReport = require("rdf-validate-shacl/src/validation-report");
import BlankNodeExt from "rdf-ext/lib/BlankNode";
import LiteralExt from "rdf-ext/lib/Literal";
import NamedNodeExt from "rdf-ext/lib/NamedNode";

const shapes: DatasetCore = <any> {};
const data: DatasetCore = <any> {};
const factory1: DataFactory & DatasetCoreFactory = <any> {};
const factory2: typeof $rdf = <any> {};

const validator1 = new SHACLValidator(shapes);

// $ExpectType DataFactory<Quad, Quad> & DatasetCoreFactory<Quad, Quad, DatasetCore<Quad, Quad>>
validator1.factory;

const report1 = validator1.validate(data);

// $ExpectType boolean
report1.conforms;

for (const result of report1.results) {
    result.term; // $ExpectType BlankNode | NamedNode<string>
    result.dataset; // $ExpectType DatasetCore<Quad, Quad>
    result.pointer; // $ExpectType GraphPointer<BlankNode | NamedNode<string>, DatasetCore<Quad, Quad>> || AnyPointer<BlankNode | NamedNode<string>, DatasetCore<Quad, Quad>>
    result.message; // $ExpectType (BlankNode | NamedNode<string> | Literal)[] || (BlankNode | Literal | NamedNode<string>)[]
    result.path; // $ExpectType BlankNode | NamedNode<string> | null
    result.focusNode; // $ExpectType BlankNode | NamedNode<string> | null
    result.severity; // $ExpectType NamedNode<string> | null
    result.sourceConstraintComponent; // $ExpectType BlankNode | NamedNode<string> | null
    result.sourceShape; // $ExpectType BlankNode | NamedNode<string> | null
    result.detail; // $ExpectType ValidationResult<DataFactory<Quad, Quad> & DatasetCoreFactory<Quad, Quad, DatasetCore<Quad, Quad>>>[]
}

// $ExpectType BlankNode | NamedNode<string>
report1.term;

// $ExpectType DatasetCore<Quad, Quad>
report1.dataset;

// $ExpectType GraphPointer<BlankNode | NamedNode<string>, DatasetCore<Quad, Quad>> || AnyPointer<BlankNode | NamedNode<string>, DatasetCore<Quad, Quad>>
report1.pointer;

const validator2 = new SHACLValidator(shapes, { factory: factory1 });

// $ExpectType DataFactory<Quad, Quad> & DatasetCoreFactory<Quad, Quad, DatasetCore<Quad, Quad>>
validator2.factory;

const report2 = validator2.validate(data);

// $ExpectType boolean
report2.conforms;

for (const result of report2.results) {
    result.term; // $ExpectType BlankNode | NamedNode<string>
    result.dataset; // $ExpectType DatasetCore<Quad, Quad>
    result.pointer; // $ExpectType GraphPointer<BlankNode | NamedNode<string>, DatasetCore<Quad, Quad>> || AnyPointer<BlankNode | NamedNode<string>, DatasetCore<Quad, Quad>>
    result.message; // $ExpectType (BlankNode | NamedNode<string> | Literal)[] || (BlankNode | Literal | NamedNode<string>)[]
    result.path; // $ExpectType BlankNode | NamedNode<string> | null
    result.focusNode; // $ExpectType BlankNode | NamedNode<string> | null
    result.severity; // $ExpectType NamedNode<string> | null
    result.sourceConstraintComponent; // $ExpectType BlankNode | NamedNode<string> | null
    result.sourceShape; // $ExpectType BlankNode | NamedNode<string> | null
    result.detail; // $ExpectType ValidationResult<DataFactory<Quad, Quad> & DatasetCoreFactory<Quad, Quad, DatasetCore<Quad, Quad>>>[]
}

// $ExpectType BlankNode | NamedNode<string>
report2.term;

// $ExpectType DatasetCore<Quad, Quad>
report2.dataset;

// $ExpectType GraphPointer<BlankNode | NamedNode<string>, DatasetCore<Quad, Quad>> || AnyPointer<BlankNode | NamedNode<string>, DatasetCore<Quad, Quad>>
report2.pointer;

const validator3 = new SHACLValidator(shapes, { factory: factory2 });

const inferredFactory: typeof $rdf = validator3.factory;

const report3 = validator3.validate(data);

// $ExpectType boolean
report3.conforms;

for (const result of report3.results) {
    result.term; // $ExpectType BlankNodeExt | NamedNodeExt<string>
    result.dataset; // $ExpectType DatasetExt
    result.pointer; // $ExpectType GraphPointer<BlankNodeExt | NamedNodeExt<string>, DatasetExt> || AnyPointer<BlankNodeExt | NamedNodeExt<string>, DatasetExt>
    const message: Array<BlankNodeExt | LiteralExt | NamedNodeExt> = result.message;
    result.path; // $ExpectType BlankNodeExt | NamedNodeExt<string> | null
    result.focusNode; // $ExpectType BlankNodeExt | NamedNodeExt<string> | null
    result.severity; // $ExpectType NamedNodeExt<string> | null
    result.sourceConstraintComponent; // $ExpectType BlankNodeExt | NamedNodeExt<string> | null
    result.sourceShape; // $ExpectType BlankNodeExt | NamedNodeExt<string> | null
    const detail: Array<ValidationResult<typeof $rdf>> = result.detail;
}

// $ExpectType BlankNodeExt | NamedNodeExt<string>
report3.term;

// $ExpectType DatasetExt
report3.dataset;

// $ExpectType GraphPointer<BlankNodeExt | NamedNodeExt<string>, DatasetExt>
report3.pointer;

const pointer: GraphPointer<NamedNode> = <any> {};
let reportFromCtor = new ValidationReport(pointer, { factory: factory1 });

const nonResourcePointer: GraphPointer<Literal> = <any> {};
// @ts-expect-error
reportFromCtor = new ValidationReport(nonResourcePointer, { factory: factory1 });
