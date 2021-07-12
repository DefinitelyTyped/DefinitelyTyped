import { DataFactory, DatasetCore, DatasetCoreFactory } from 'rdf-js';
import SHACLValidator = require('rdf-validate-shacl');
import DataFactoryExt = require('rdf-ext/lib/DataFactory');

const shapes: DatasetCore = <any> {};
const data: DatasetCore = <any> {};
const factory1: DatasetCoreFactory & DataFactory = <any> {};
const factory2: DataFactoryExt = <any> {};

// $ExpectType SHACLValidator<DatasetCoreFactory<Quad, Quad, DatasetCore<Quad, Quad>> & DataFactory<Quad, Quad>>
const validator1 = new SHACLValidator(shapes, { factory: factory1 });

// $ExpectType DatasetCoreFactory<Quad, Quad, DatasetCore<Quad, Quad>> & DataFactory<Quad, Quad>
validator1.factory;

// $ExpectType ValidationReport<DatasetCoreFactory<Quad, Quad, DatasetCore<Quad, Quad>> & DataFactory<Quad, Quad>>
const report1 = validator1.validate(data);

// $ExpectType boolean
report1.conforms;

for (const result of report1.results) {
    result.term; // $ExpectType BlankNode | NamedNode<string>
    result.dataset; // $ExpectType DatasetCore<Quad, Quad>
    result.cf; // $ExpectType GraphPointer<BlankNode | NamedNode<string>, DatasetCore<Quad, Quad>> || AnyPointer<BlankNode | NamedNode<string>, DatasetCore<Quad, Quad>>
    result.message; // $ExpectType (BlankNode | NamedNode<string> | Literal)[] || (BlankNode | Literal | NamedNode<string>)[]
    result.path; // $ExpectType BlankNode | NamedNode<string> | null
    result.focusNode; // $ExpectType BlankNode | NamedNode<string> | null
    result.severity; // $ExpectType NamedNode<string> | null
    result.sourceConstraintComponent; // $ExpectType BlankNode | NamedNode<string> | null
    result.sourceShape; // $ExpectType BlankNode | NamedNode<string> | null
}

// $ExpectType BlankNode | NamedNode<string>
report1.term;

// $ExpectType DatasetCore<Quad, Quad>
report1.dataset;

// $ExpectType SHACLValidator<DataFactoryExt>
const validator2 = new SHACLValidator(shapes, { factory: factory2 });

// $ExpectType DataFactoryExt
validator2.factory;

// $ExpectType ValidationReport<DataFactoryExt>
const report2 = validator2.validate(data);

// $ExpectType boolean
report2.conforms;

for (const result of report2.results) {
    result.term; // $ExpectType BlankNodeExt | NamedNodeExt<string>
    result.dataset; // $ExpectType DatasetExt
    result.cf; // $ExpectType GraphPointer<BlankNodeExt | NamedNodeExt<string>, DatasetExt> || AnyPointer<BlankNodeExt | NamedNodeExt<string>, DatasetExt>
    result.message; // $ExpectType (BlankNodeExt | LiteralExt | NamedNodeExt<string>)[]
    result.path; // $ExpectType BlankNodeExt | NamedNodeExt<string> | null
    result.focusNode; // $ExpectType BlankNodeExt | NamedNodeExt<string> | null
    result.severity; // $ExpectType NamedNodeExt<string> | null
    result.sourceConstraintComponent; // $ExpectType BlankNodeExt | NamedNodeExt<string> | null
    result.sourceShape; // $ExpectType BlankNodeExt | NamedNodeExt<string> | null
}

// $ExpectType BlankNodeExt | NamedNodeExt<string>
report2.term;

// $ExpectType DatasetExt
report2.dataset;
