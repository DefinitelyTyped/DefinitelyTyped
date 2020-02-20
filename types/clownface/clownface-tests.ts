import { Term, NamedNode, Dataset, Literal, DatasetCore, BlankNode, Quad_Graph } from 'rdf-js';
import Clownface = require('clownface/lib/Clownface');
import clownface = require('clownface');

const node: NamedNode = <any> {};
const blankNode: BlankNode = <any> {};
const predicate: NamedNode = <any> {};
const literal: Literal = <any> {};
let term: Term = <any> {};

// .ctor
const dataset: Dataset = <any> {};
const graph: NamedNode = <any> {};

let cf: Clownface<Dataset> = new Clownface({ dataset });
cf = new Clownface({ dataset, graph });
const typedByTerm: Clownface<DatasetCore, NamedNode> = new Clownface({ dataset, term: node });
const typedByTerms: Clownface<DatasetCore, NamedNode | BlankNode> = new Clownface({ dataset, term: [node, blankNode] });
cf = new Clownface({ dataset, value: 'foo' });
cf = new Clownface({ dataset, value: ['foo', 'bar'] });
cf = new Clownface({ dataset, term: [term, term], value: ['foo', 'bar'] });

// .addIn
cf = cf.addIn(node);
cf = cf.addIn(node, node);
cf = cf.addIn([ node, node ], node);
cf = cf.addIn(node, [ node, node ]);
cf = cf.addIn([ node, node ], [ node, node ], child => {
    const values: string[] = child.values;
});
cf = cf.addIn(node, child => {
    cf = child;
});
cf = cf.addIn(cf.node(node), cf.node(node));

// .addList
cf = cf.addList(predicate, [node, node]);

// .addOut
cf = cf.addOut(predicate, node);
cf = cf.addOut(predicate);
cf = cf.addOut(predicate, ['', 0]);
cf = cf.addOut([predicate, predicate], node);
cf = cf.addOut(predicate, [node, node]);
cf = cf.addOut([predicate, predicate], [node, node], child => {
    const values: string[] = child.values;
});
cf = cf.addOut(predicate, child => {
    const values: string[] = child.values;
});
cf = cf.addOut(cf.node(predicate), cf.node(node));

// .blankNode
let blankContext: Clownface;
blankContext = cf.blankNode();
blankContext = cf.blankNode('label');
blankContext = cf.blankNode([ 'b1', 'b2' ]);

// .deleteIn
cf = cf.deleteIn();
cf = cf.deleteIn(node);
cf = cf.deleteIn([node, node]);

// .deleteList
cf = cf.deleteList(predicate);

// .deleteOut
cf = cf.deleteOut();
cf = cf.deleteOut(node);
cf = cf.deleteOut([node, node]);

// factory
cf = clownface({ dataset });
const namedGraph: clownface.Clownface<Dataset, NamedNode> = clownface({ dataset, graph });
const singleFromValue: clownface.SingleContextClownface = clownface({ dataset, value: 'foo' });

const termContext: clownface.SingleContextClownface = clownface({
    dataset,
    term
});

const namedContext: clownface.SingleContextClownface<DatasetCore, NamedNode> = clownface({
    dataset,
    term: node,
});

const namedMutlipleTerms: clownface.SafeClownface<DatasetCore, NamedNode> = clownface({
    dataset,
    term: [node, node],
});

const mutlipleValues: clownface.SafeClownface = clownface({
    dataset,
    value: ['foo', 'bar'],
});

const maybeNamed: BlankNode | NamedNode = <any> {};
const altContext: clownface.SingleContextClownface<DatasetCore, BlankNode | NamedNode> = clownface({
    dataset,
    term: maybeNamed,
});

const literalContext: clownface.SingleContextClownface<Dataset, Literal> = <any> {};
const deriveContextFromOtherGraph: clownface.SingleContextClownface<Dataset, Literal> = clownface(literalContext);

// .filter
cf = cf.filter(() => true);
cf = cf.filter((thus: Clownface) => true);

// .forEach
cf.forEach(() => {});
cf.forEach((thus: Clownface) => {});

// .has
cf = cf.has(predicate, 'Stuart');
cf = cf.has([predicate, predicate], 'Stuart');
cf = cf.has(predicate, [literal, literal]);

// .in
cf = cf.in();
cf = cf.in(node);
cf = cf.in([node, node]);
cf = cf.in(cf.node(node));

// .list
const listNodes: Iterable<clownface.SingleContextClownface<Dataset>> = cf.list();

// .literal
cf = cf.literal('foo');
cf = cf.literal(['foo', 'bar']);
cf = cf.literal('foo', node);
cf = cf.literal('foo', 'en');

// .map
const arr: Clownface[] = cf.map((item: Clownface) => item);
const nums: number[] = cf.map((item: Clownface, index: number) => index);

// .namedNode
cf = cf.namedNode(node);
cf = cf.namedNode('http://example.com/');
cf = cf.namedNode(['http://example.com/', 'http://example.org/']);

// .node
cf = cf.node(node);
cf = cf.node('foo');
cf = cf.node(123);
cf = cf.node(['foo', 'bar']);
cf = cf.node('http://example.org/', { type: 'NamedNode' });
cf = cf.node(null, { type: 'BlankNode' });
cf = cf.node('example', { datatype: node.value });
cf = cf.node('example', { datatype: node });

// .out
cf = cf.out();
cf = cf.out(node);
cf = cf.out([node, node]);
cf = cf.out(cf.node([node, node]));

// .term
if (cf.term) {
    term = cf.term;
}

// .terms
const terms: Term[] = cf.terms;

// .toArray
const toArray: Clownface[] = cf.toArray();

// .value
if (cf.value) {
    const valueProp: string = cf.value;
}

// .values
const values: string[] = cf.values;

const safeCf: clownface.SafeClownface<Dataset> = <any> {};

let singleBlank: clownface.SingleContextClownface<Dataset, BlankNode> = safeCf.blankNode();
singleBlank = clownface({ dataset }).blankNode();
singleBlank = safeCf.blankNode('blank');
singleBlank = clownface({ dataset }).node(null);

let singleNamed: clownface.SingleContextClownface<Dataset, NamedNode> = clownface({ dataset }).namedNode('urn:foo:bar');
singleNamed = safeCf.namedNode('http://example.com/a');
singleNamed = clownface({ dataset }).node(node);

let singleLiteral: clownface.SingleContextClownface<Dataset, Literal> = clownface({ dataset }).literal('foo');
singleLiteral = safeCf.literal('a');
singleLiteral = clownface({ dataset }).node('b');

const fromSingleArrayBLank: clownface.SingleContextClownface<Dataset, BlankNode> = safeCf.blankNode([ 'b1' ]);
const fromSingleArrayNamed: clownface.SingleContextClownface<Dataset, NamedNode> = safeCf.namedNode([ 'http://example.com/a' ]);
const fromSingleArrayLiteral: clownface.SingleContextClownface<Dataset, Literal> = safeCf.literal([ 'a' ]);

let multipleBlanks: clownface.SafeClownface<Dataset, BlankNode> = safeCf.blankNode([ 'b1', 'b2' ]);
multipleBlanks = clownface({ dataset }).node([ null, null ]);

let multipleNamed: clownface.SafeClownface<Dataset, NamedNode> = safeCf.namedNode([ 'http://example.com/a', 'http://example.com/b' ]);
multipleNamed = clownface({ dataset }).node([ node, node ]);

let multipleLiterals: clownface.SafeClownface<Dataset, Literal> = safeCf.literal([ 'a', 'b' ]);
multipleLiterals = clownface({ dataset }).node([ 'a', 10, false ]);

const multipleMixedTerms: clownface.SafeClownface<Dataset> = clownface({ dataset }).node([ 'a', node, null ]);

// .context
const ctxTerm: Literal = fromSingleArrayLiteral._context[0].term;
const ctxGraph: Quad_Graph | undefined = fromSingleArrayLiteral._context[0].graph;
const ctxDataset: Dataset = fromSingleArrayLiteral._context[0].dataset;
