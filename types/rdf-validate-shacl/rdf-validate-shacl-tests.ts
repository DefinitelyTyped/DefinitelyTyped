import { DataFactory, DatasetCore, DatasetCoreFactory } from 'rdf-js';
import SHACLValidator = require('rdf-validate-shacl');
import DataFactoryExt = require('rdf-ext/lib/DataFactory');

const shapes: DatasetCore = <any> {};
const data: DatasetCore = <any> {};
const factory1: DataFactory & DatasetCoreFactory = <any> {};
const factory2: DataFactoryExt = <any> {};

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

// $ExpectType DataFactoryExt
validator3.factory;

const report3 = validator3.validate(data);

// $ExpectType boolean
report3.conforms;

for (const result of report3.results) {
    result.term; // $ExpectType BlankNodeExt | NamedNodeExt<string>
    result.dataset; // $ExpectType DatasetExt
    result.pointer; // $ExpectType GraphPointer<BlankNodeExt | NamedNodeExt<string>, DatasetExt> || AnyPointer<BlankNodeExt | NamedNodeExt<string>, DatasetExt>
    result.message; // $ExpectType (BlankNodeExt | LiteralExt | NamedNodeExt<string>)[]
    result.path; // $ExpectType BlankNodeExt | NamedNodeExt<string> | null
    result.focusNode; // $ExpectType BlankNodeExt | NamedNodeExt<string> | null
    result.severity; // $ExpectType NamedNodeExt<string> | null
    result.sourceConstraintComponent; // $ExpectType BlankNodeExt | NamedNodeExt<string> | null
    result.sourceShape; // $ExpectType BlankNodeExt | NamedNodeExt<string> | null
    result.detail; // $ExpectType ValidationResult<DataFactoryExt>[]
}

// $ExpectType BlankNodeExt | NamedNodeExt<string>
report3.term;

// $ExpectType DatasetExt
report3.dataset;

// $ExpectType GraphPointer<BlankNodeExt | NamedNodeExt<string>, DatasetExt>
report3.pointer;
