import resource = require('rdf-utils-dataset/resource');
import { DatasetIndexed } from 'rdf-dataset-indexed/dataset';
import DatasetExt = require('rdf-ext/lib/Dataset');
import NamedNodeExt = require('rdf-ext/lib/NamedNode');
import { BaseQuad, NamedNode, Quad, Term } from 'rdf-js';

const dataset1: DatasetIndexed<BaseQuad, BaseQuad> = {} as any;
const dataset2: DatasetIndexed<Quad, BaseQuad> = {} as any;
const dataset3: DatasetIndexed = {} as any;
const dataset4: DatasetExt = {} as any;
const term: Term = {} as any;
const namedNode: NamedNode = {} as any;
const namedNodeExt: NamedNodeExt = {} as any;

// $ExpectType DatasetIndexed<BaseQuad, BaseQuad>
resource(dataset1, term);

// $ExpectType DatasetIndexed<Quad, BaseQuad>
resource(dataset2, namedNode);

// $ExpectError
resource(dataset2, term);

// $ExpectType DatasetIndexed<Quad, Quad>
resource(dataset3, namedNode);

// $ExpectError
resource(dataset3, term);

// $ExpectType DatasetExt
resource(dataset4, namedNodeExt);

// $ExpectError
resource(dataset4, namedNode);
