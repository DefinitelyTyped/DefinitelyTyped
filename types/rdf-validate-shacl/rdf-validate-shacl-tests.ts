import { DataFactory, DatasetCore, DatasetCoreFactory, Quad_Object } from 'rdf-js';
import SHACLValidator = require('rdf-validate-shacl');
import ValidationReport = require('rdf-validate-shacl/src/validation-report');
import DataFactoryExt = require('rdf-ext/lib/DataFactory');
import DatasetExt = require('rdf-ext/lib/Dataset');
import NamedNodeExt = require('rdf-ext/lib/NamedNode');

const shapes1: DatasetCore = <any> {};
const data1: DatasetCore = <any> {};
const factory1: DatasetCoreFactory & DataFactory = <any> {};
const shapes2: DatasetExt = <any> {};
const data2: DatasetExt = <any> {};
const factory2: DataFactoryExt = <any> {};

// $ExpectType SHACLValidator<DatasetCore<Quad, Quad>, DatasetCoreFactory<Quad, Quad, DatasetCore<Quad, Quad>> & DataFactory<Quad, Quad>>
const validator1 = new SHACLValidator(shapes1, { factory: factory1 });

// $ExpectType ValidationReport<DatasetCore<Quad, Quad>>
const report1 = validator1.validate(data1);

// $ExpectType boolean
report1.conforms;

for (const result of report1.results) {
    result.message; // $ExpectType Quad_Object[]
    result.path; // $ExpectType Quad_Object | null
    result.focusNode; // $ExpectType Quad_Object | null
    result.severity; // $ExpectType Quad_Object | null
    result.sourceConstraintComponent; // $ExpectType Quad_Object | null
    result.sourceShape; // $ExpectType Quad_Object | null
}

// $ExpectType DatasetCore<Quad, Quad>
report1.dataset;

// $ExpectType SHACLValidator<DatasetExt, DataFactoryExt>
const validator2 = new SHACLValidator(shapes2, { factory: factory2 });

// $ExpectType ValidationReport<DatasetExt>
const report2 = validator2.validate(data2);

// $ExpectType boolean
report2.conforms;

for (const result of report2.results) {
    result.message; // $ExpectType (NamedNodeExt<string> | BlankNodeExt | VariableExt | LiteralExt)[]
    result.path; // $ExpectType NamedNodeExt<string> | BlankNodeExt | VariableExt | LiteralExt | null
    result.focusNode; // $ExpectType NamedNodeExt<string> | BlankNodeExt | VariableExt | LiteralExt | null
    result.severity; // $ExpectType NamedNodeExt<string> | BlankNodeExt | VariableExt | LiteralExt | null
    result.sourceConstraintComponent; // $ExpectType NamedNodeExt<string> | BlankNodeExt | VariableExt | LiteralExt | null
    result.sourceShape; // $ExpectType NamedNodeExt<string> | BlankNodeExt | VariableExt | LiteralExt | null
}

// $ExpectType DatasetExt
report2.dataset;
