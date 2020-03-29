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

let noContext: clownface.Clownface<Dataset> = new Clownface({ dataset });
let cf: clownface.SingleContextClownface<Dataset, BlankNode> = noContext.blankNode();
const typedByTerm: Clownface<DatasetCore, NamedNode> = new Clownface({ dataset, term: node });
const typedByTerms: Clownface<DatasetCore, NamedNode | BlankNode> = new Clownface({ dataset, term: [node, blankNode] });
noContext = new Clownface({ dataset, value: 'foo' });
noContext = new Clownface({ dataset, value: ['foo', 'bar'] });
noContext = new Clownface({ dataset, term: [term, term], value: ['foo', 'bar'] });

// .addIn
cf = cf.addIn(node);
cf = cf.addIn(node, node);
cf = cf.addIn([ node, node ], node);
cf = cf.addIn(node, [ node, node ]);
cf = cf.addIn([ node, node ], [ node, blankNode ], child => {
    const values: Array<NamedNode | BlankNode> = child.terms;
});
cf = cf.addIn(node, child => {
    const childNode: clownface.SingleContextClownface<Dataset, BlankNode> = child;
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
let blankContext: clownface.SingleContextClownface<Dataset, BlankNode>;
blankContext = cf.blankNode();
blankContext = cf.blankNode('label');
const multiBlankContext: clownface.SafeClownface<Dataset, BlankNode> = cf.blankNode([ 'b1', 'b2' ]);

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
cf = cf.filter((thus: typeof cf) => true);

// .forEach
cf.forEach(() => {});
cf.forEach((thus: typeof cf) => {});

// .has
let has: clownface.SafeClownface<Dataset> = cf.has(predicate, 'Stuart');
has = cf.has([predicate, predicate], 'Stuart');
has = cf.has(predicate, [literal, literal]);

// .in
let cfIn: clownface.SafeClownface<Dataset> = cf.in();
cfIn = cf.in(node);
cfIn = cf.in([node, node]);
cfIn = cf.in(cf.node(node));

// .list
const listNodes: Iterable<clownface.SingleContextClownface<Dataset>> = cf.list();

// .literal
let cfLit: clownface.SafeClownface<Dataset> = cf.literal('foo');
cfLit = cf.literal(['foo', 'bar']);
cfLit = cf.literal('foo', node);
cfLit = cf.literal('foo', 'en');

// .map
const arr: BlankNode[] = cf.map((item: clownface.SingleContextClownface<Dataset, BlankNode>) => item.term);
const nums: number[] = cf.map((item: clownface.SingleContextClownface<Dataset, BlankNode>, index: number) => index);

// .namedNode
let cfSingleNamed: clownface.SingleContextClownface<Dataset, NamedNode> = cf.namedNode(node);
cfSingleNamed = cf.namedNode('http://example.com/');
const cfNamedMany: clownface.SafeClownface<Dataset, NamedNode> = cf.namedNode(['http://example.com/', 'http://example.org/']);

// .node
let singleTerm: clownface.SingleContextClownface<Dataset> = cf.node(node);
cfLit = cf.node('foo');
cfLit = cf.node(123);
const cfLitMany: clownface.SafeClownface<Dataset, Literal> = cf.node(['foo', 'bar']);
singleTerm = cf.node('http://example.org/', { type: 'NamedNode' });
const cfBlank: clownface.SingleContextClownface<Dataset, BlankNode> = cf.node(null, { type: 'BlankNode' });
cfLit = cf.node('example', { datatype: node.value });
cfLit = cf.node('example', { datatype: node });

// .out
let cfTerm: clownface.SafeClownface<Dataset> = cf.out();
cfTerm = cf.out(node);
cfTerm = cf.out([node, node]);
cfTerm = cf.out(cf.node([node, node]));

// .term
if (cf.term) {
    term = cf.term;
}

// .terms
const terms: Term[] = cf.terms;

// .toArray
const toArray: clownface.Clownface[] = cf.toArray();

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

// addIn/addOut on SingleContextClownface keeps its type
const addOutSingle: clownface.SingleContextClownface<Dataset, NamedNode> = singleNamed.addOut(predicate, 'foo');
const addOutSingleObjectArray: clownface.SingleContextClownface<Dataset, NamedNode> = singleNamed.addOut(predicate, ['foo', 'bar']);
const addOutSinglePredicateArray: clownface.SingleContextClownface<Dataset, NamedNode> = singleNamed.addOut([predicate, predicate]);
const addOutSingleNoObject: clownface.SingleContextClownface<Dataset, NamedNode> = singleNamed.addOut(predicate);
const addOutSingleWithCallback: clownface.SingleContextClownface<Dataset, NamedNode> = singleNamed.addOut(predicate, () => {});
const addOutSingleWithObjectAndCallback: clownface.SingleContextClownface<Dataset, NamedNode> = singleNamed.addOut(predicate, 'foo', () => {});

const addInSingle: clownface.SingleContextClownface<Dataset, NamedNode> = singleNamed.addIn(predicate, 'foo');
const addInSingleObjectArray: clownface.SingleContextClownface<Dataset, NamedNode> = singleNamed.addIn(predicate, ['foo', 'bar']);
const addInSinglePredicateArray: clownface.SingleContextClownface<Dataset, NamedNode> = singleNamed.addIn([predicate, predicate]);
const addInSingleNoObject: clownface.SingleContextClownface<Dataset, NamedNode> = singleNamed.addIn(predicate);
const addInSingleWithCallback: clownface.SingleContextClownface<Dataset, NamedNode> = singleNamed.addIn(predicate, () => {});
const addInSingleWithObjectAndCallback: clownface.SingleContextClownface<Dataset, NamedNode> = singleNamed.addIn(predicate, 'foo', () => {});
