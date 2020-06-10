import { Term, NamedNode, Dataset, Literal, DatasetCore, BlankNode, Quad_Graph } from 'rdf-js';
import Clownface = require('clownface/lib/Clownface');
import clownface = require('clownface');
import Context = require('clownface/lib/Context');

const node: NamedNode = <any> {};
const blankNode: BlankNode = <any> {};
const predicate: NamedNode = <any> {};
const literal: Literal = <any> {};
const term: Term = <any> {};

const dataset: Dataset = <any> {};
const graph: NamedNode = <any> {};

function testCasting() {
    const singleNode: clownface.Clownface<NamedNode> = <any> {};
    const safeContext: clownface.SafeClownface<NamedNode> = singleNode;
    let noContext: clownface.Clownface = singleNode;
    noContext = safeContext;
}

function withoutContext() {
    const cf: clownface.Clownface<undefined, Dataset> = <any> {};
    const term: undefined = cf.term;
    const terms: Term[] = cf.terms;
    const value: undefined = cf.value;
    const values: string[] = cf.values;
    const _context: Array<Context<DatasetCore, Term>> = cf._context;
}

function multiContext() {
    const cf: clownface.Clownface<Array<NamedNode | BlankNode>, Dataset> = <any> {};
    if (cf.term) {
        const definedTerm: NamedNode | BlankNode = cf.term;
    } else {
        const undefinedTerm: undefined = cf.term;
    }
    const terms: Array<NamedNode | BlankNode> = cf.terms;
    if (cf.value) {
        const definedValue: string = cf.value;
    } else {
        const undefinedValue = cf.value;
    }
    const values: string[] = cf.values;
    const _context: Array<Context<DatasetCore, Term>> = cf._context;
}

function singleContext() {
    const cf: clownface.Clownface<Literal, Dataset> = <any> {};
    const term: Literal = cf.term;
    const terms: [Literal] = cf.terms;
    const value: string = cf.value;
    const values: [string] = cf.values;
    const _context: Array<Context<DatasetCore, Term>> = cf._context;

    const asMultiContext: clownface.Clownface<Literal[] | Literal, Dataset> = cf;
}

function testConstructor() {
    const typedByTerm: Clownface<NamedNode, Dataset> = new Clownface({ dataset, term: node });
    const typedByTerms: Clownface<Array<NamedNode | BlankNode>, Dataset> = new Clownface({ dataset, term: [node, blankNode] });

    let contructedWithValueHasTermContext: Clownface<Term, Dataset> = new Clownface({ dataset, value: 'foo' });
    contructedWithValueHasTermContext = new Clownface({ dataset, value: ['foo', 'bar'] });
    const anyTerms: clownface.SafeClownface = new Clownface({ dataset, term: [term, term], value: ['foo', 'bar'] });

    const constructedWithSingleTerm: clownface.SingleContextClownface<NamedNode> = new Clownface({ dataset, term: node });
}

function testAddIn() {
    let cf: clownface.Clownface<BlankNode> = <any> {};
    cf = cf.addIn(node);
    cf = cf.addIn(node);
    cf = cf.addIn([ node, node ], node);
    cf = cf.addIn(node, [ node, node ]);
    cf = cf.addIn([ node, node ], [ node, blankNode ], child => {
        const values: Array<NamedNode | BlankNode> = child.terms;
    });
    cf = cf.addIn(node, child => {
        const childNode: clownface.Clownface<BlankNode> = child;
    });
    cf = cf.addIn(cf.node(node), cf.node(node));

    const manyPredicates: clownface.Clownface<NamedNode[]> = <any> {};
    const manyObjects: clownface.Clownface<Literal[]> = <any> {};
    cf = cf.addIn(manyPredicates, manyObjects);
}

function testAddList() {
    let cf: clownface.Clownface<NamedNode> = <any> {};
    cf = cf.addList(predicate, [node]);
    cf = cf.addList(predicate, [node, node]);
}

function testAddOut() {
    let cf: clownface.Clownface<BlankNode> = <any> {};
    cf = cf.addOut(node);
    cf = cf.addOut(node);
    cf = cf.addOut([ node, node ], node);
    cf = cf.addOut(node, [ node, node ]);
    cf = cf.addOut([ node, node ], [ node, blankNode ], child => {
        const values: Array<NamedNode | BlankNode> = child.terms;
    });
    cf = cf.addOut(node, child => {
        const childNode: clownface.Clownface<BlankNode> = child;
    });
    cf = cf.addOut(cf.node(node), cf.node(node));

    const manyPredicates: clownface.Clownface<NamedNode[]> = <any> {};
    const manyObjects: clownface.Clownface<Literal[]> = <any> {};
    cf = cf.addOut(manyPredicates, manyObjects);
}

function testBlankNode() {
    const cf: clownface.Clownface<Term[], Dataset> = <any> {};
    let singleBlank: clownface.Clownface<BlankNode, Dataset> = cf.blankNode();
    singleBlank = cf.blankNode('label');
    const multiBlankContext: clownface.Clownface<BlankNode[], Dataset> = cf.blankNode([ 'b1', 'b2' ]);
}

function testDeleteIn() {
    let cf: clownface.Clownface<NamedNode, Dataset> = <any> {};
    cf = cf.deleteIn();
    cf = cf.deleteIn(node);
    cf = cf.deleteIn([node, node]);
}

function testDeleteList() {
    let cf: clownface.Clownface<NamedNode, Dataset> = <any> {};
    cf = cf.deleteList(predicate);
}

function testDeleteOut() {
    let cf: clownface.Clownface<BlankNode, Dataset> = <any> {};
    cf = cf.deleteOut();
    cf = cf.deleteOut(node);
    cf = cf.deleteOut([node, node]);
}

function testFactory() {
    const defaultContext: clownface.Clownface<Term | Term[] | undefined, Dataset> = clownface({ dataset });

    const namedGraph: clownface.Clownface<NamedNode, Dataset> = clownface({ dataset, graph, term: node });
    const singleFromValue: clownface.Clownface<Literal, Dataset> = clownface({ dataset, value: 'foo' });

    const termContext: clownface.Clownface<Term, Dataset> = clownface({
        dataset,
        term
    });

    const namedContext: clownface.Clownface<NamedNode, Dataset> = clownface({
        dataset,
        term: node,
    });

    const namedMutlipleTerms: clownface.Clownface<NamedNode[], Dataset> = clownface({
        dataset,
        term: [node, node],
    });

    const mutlipleValues: clownface.Clownface<Literal[], Dataset> = clownface({
        dataset,
        value: ['foo', 'bar'],
    });

    const maybeNamed: BlankNode | NamedNode = <any> {};
    const altContext: clownface.Clownface<BlankNode | NamedNode, Dataset> = clownface({
        dataset,
        term: maybeNamed,
    });

    const literalContext: clownface.Clownface<Literal, Dataset> = <any> {};
    const deriveContextFromOtherGraph: clownface.Clownface<Literal, Dataset> = clownface(literalContext);

    const namedNodeContext: clownface.Clownface<NamedNode, Dataset> = <any> {};
    const deriveContextFromOtherNamedNodeContext: clownface.Clownface<NamedNode, Dataset> = clownface(namedNodeContext);
}

function testFilter() {
    let mutliple: clownface.Clownface<NamedNode[], Dataset> = <any> {};
    mutliple = mutliple.filter(quad => {
        const copy: clownface.Clownface<NamedNode, Dataset> = quad;
        return true;
    });

    let single: clownface.Clownface<NamedNode, Dataset> = <any> {};
    single = single.filter(quad => {
        const copy: clownface.Clownface<NamedNode, Dataset> = quad;
        return true;
    });

    let noContext: clownface.Clownface<undefined, Dataset> = <any> {};
    noContext = noContext.filter(quad => {
        const copy: never = quad;
        return true;
    });
}

function testForEach() {
    const mutliple: clownface.Clownface<NamedNode[], Dataset> = <any> {};
    mutliple.forEach(quad => {
        const copy: clownface.Clownface<NamedNode, Dataset> = quad;
        return true;
    });

    const single: clownface.Clownface<NamedNode, Dataset> = <any> {};
    single.forEach(quad => {
        const copy: clownface.Clownface<NamedNode, Dataset> = quad;
        return true;
    });

    const noContext: clownface.Clownface<undefined, Dataset> = <any> {};
    noContext.forEach(quad => {
        const copy: never = quad;
        return true;
    });
}

function testHas() {
    const cf: clownface.Clownface<Term, Dataset> = <any> {};
    let has: clownface.Clownface<Array<NamedNode | BlankNode>, Dataset> = cf.has(predicate, 'Stuart');
    has = cf.has([predicate, predicate], 'Stuart');
    has = cf.has(predicate, [literal, literal]);
}

function testIn() {
    const cf: clownface.Clownface<Literal, Dataset> = <any> {};
    let cfIn: clownface.SafeClownface<NamedNode | BlankNode, Dataset> = cf.in();
    cfIn = cf.in(node);
    cfIn = cf.in([node, node]);
    cfIn = cf.in(cf.node(node));
    cfIn = cf.in(cf.node([node, node]));

    const singleContext: clownface.Clownface<NamedNode, Dataset> = <any> {};
    let inContext = cfIn.out(node);
    inContext = singleContext;
}

function testList() {
    const cf: clownface.Clownface<NamedNode, Dataset> = <any> {};
    const listNodes: Iterable<clownface.Clownface<NamedNode, Dataset>> = cf.list();
}

function testLiteral() {
    const cf: clownface.Clownface<undefined, Dataset> = <any> {};
    let cfOneLit: clownface.Clownface<Literal, Dataset> = cf.literal('foo');
    const cfLiterasl: clownface.Clownface<Literal[], Dataset> = cf.literal(['foo', 'bar']);
    cfOneLit = cf.literal('foo', node);
    cfOneLit = cf.literal('foo', 'en');
}

function testMap() {
    const singleContext: clownface.Clownface<BlankNode, Dataset> = <any> {};
    const multiContext: clownface.Clownface<BlankNode, Dataset> = <any> {};
    let terms: BlankNode[] = singleContext.map((item) => item.term);
    terms = multiContext.map((item) => item.term);

    let nums: number[] = singleContext.map((_, index) => index);
    nums = multiContext.map((_, index) => index);
}

function testNamedNode() {
    const cf: clownface.Clownface<undefined, Dataset> = <any> {};
    let cfSingleNamed: clownface.Clownface<NamedNode, Dataset> = cf.namedNode(node);
    cfSingleNamed = cf.namedNode('http://example.com/');
    const cfNamedMany: clownface.Clownface<NamedNode[], Dataset> = cf.namedNode(['http://example.com/', 'http://example.org/']);
}

function testNode() {
    const cf: clownface.Clownface<undefined, Dataset> = <any> {};
    let singleTerm: clownface.Clownface<Term, Dataset> = cf.node(node);
    let cfLit: clownface.Clownface<Literal, Dataset> = cf.node('foo');
    cfLit = cf.node(123);
    const cfLitMany: clownface.Clownface<Literal[], Dataset> = cf.node(['foo', 'bar']);
    singleTerm = cf.node('http://example.org/', { type: 'NamedNode' });
    const cfBlank: clownface.Clownface<BlankNode, Dataset> = cf.node(null, { type: 'BlankNode' });
    cfLit = cf.node('example', { datatype: node.value });
    cfLit = cf.node('example', { datatype: node });
}

function testOut() {
    const cf: clownface.Clownface<undefined, Dataset> = <any> {};
    let cfTerm: clownface.Clownface<Term[], Dataset> = cf.out();
    cfTerm = cf.out(node);
    cfTerm = cf.out([node, node]);
    cfTerm = cf.out(cf.node([node, node]));

    const singleContext: clownface.Clownface<NamedNode, Dataset> = <any> {};
    let inContext = cfTerm.out(node);
    inContext = singleContext;
}

function testToArray() {
    const single: clownface.Clownface<Literal, Dataset> = <any> {};
    const singleToArray: Array<clownface.Clownface<Literal, Dataset>> = single.toArray();

    const mutliple: clownface.Clownface<Literal[], Dataset> = <any> {};
    const mutlipleToArray: Array<clownface.Clownface<Literal, Dataset>> = mutliple.toArray();
}

function testMultipleContext() {
    const safeCf: clownface.Clownface<Term[], Dataset> = <any> {};

    let singleBlank: clownface.Clownface<BlankNode, Dataset> = safeCf.blankNode();
    singleBlank = clownface({ dataset }).blankNode();
    singleBlank = safeCf.blankNode('blank');
    singleBlank = clownface({ dataset }).node(null);

    let singleNamed: clownface.Clownface<NamedNode, Dataset> = clownface({ dataset }).namedNode('urn:foo:bar');
    singleNamed = safeCf.namedNode('http://example.com/a');
    singleNamed = clownface({ dataset }).node(node);

    let singleLiteral: clownface.Clownface<Literal, Dataset> = clownface({ dataset }).literal('foo');
    singleLiteral = safeCf.literal('a');
    singleLiteral = clownface({ dataset }).node('b');

    const fromSingleArrayBLank: clownface.Clownface<BlankNode, Dataset> = safeCf.blankNode([ 'b1' ]);
    const fromSingleArrayNamed: clownface.Clownface<NamedNode, Dataset> = safeCf.namedNode([ 'http://example.com/a' ]);
    const fromSingleArrayLiteral: clownface.Clownface<Literal, Dataset> = safeCf.literal([ 'a' ]);

    let multipleBlanks: clownface.Clownface<BlankNode[], Dataset> = safeCf.blankNode([ 'b1', 'b2' ]);
    multipleBlanks = clownface({ dataset }).node([ null, null ]);

    let multipleNamed: clownface.Clownface<NamedNode[], Dataset> = safeCf.namedNode([ 'http://example.com/a', 'http://example.com/b' ]);
    multipleNamed = clownface({ dataset }).node([ node, node ]);

    let multipleLiterals: clownface.Clownface<Literal[], Dataset> = safeCf.literal([ 'a', 'b' ]);
    multipleLiterals = clownface({ dataset }).node([ 'a', 10, false ]);

    const multipleMixedTerms: clownface.Clownface<Term[], Dataset> = clownface({ dataset }).node([ 'a', node, null ]);
}

function testContext() {
    const fromSingleArrayLiteral: clownface.Clownface<Literal, Dataset> = <any> {};
    const ctxTerm: Term = fromSingleArrayLiteral._context[0].term;
    const ctxGraph: Quad_Graph | undefined = fromSingleArrayLiteral._context[0].graph;
    const ctxDataset: Dataset = fromSingleArrayLiteral._context[0].dataset;
}

function addInAddOutRetainsType() {
    const singleNamed: clownface.Clownface<NamedNode, Dataset> = <any> {};

    const addOutSingle: clownface.Clownface<NamedNode, Dataset> = singleNamed.addOut(predicate, 'foo');
    const addOutSingleObjectArray: clownface.Clownface<NamedNode, Dataset> = singleNamed.addOut(predicate, ['foo', 'bar']);
    const addOutSinglePredicateArray: clownface.Clownface<NamedNode, Dataset> = singleNamed.addOut([predicate, predicate]);
    const addOutSingleNoObject: clownface.Clownface<NamedNode, Dataset> = singleNamed.addOut(predicate);
    const addOutSingleWithCallback: clownface.Clownface<NamedNode, Dataset> = singleNamed.addOut(predicate, () => {});
    const addOutSingleWithObjectAndCallback: clownface.Clownface<NamedNode, Dataset> = singleNamed.addOut(predicate, 'foo', () => {});

    const addInSingle: clownface.Clownface<NamedNode, Dataset> = singleNamed.addIn(predicate, 'foo');
    const addInSingleObjectArray: clownface.Clownface<NamedNode, Dataset> = singleNamed.addIn(predicate, ['foo', 'bar']);
    const addInSinglePredicateArray: clownface.Clownface<NamedNode, Dataset> = singleNamed.addIn([predicate, predicate]);
    const addInSingleNoObject: clownface.Clownface<NamedNode, Dataset> = singleNamed.addIn(predicate);
    const addInSingleWithCallback: clownface.Clownface<NamedNode, Dataset> = singleNamed.addIn(predicate, () => {});
    const addInSingleWithObjectAndCallback: clownface.Clownface<NamedNode, Dataset> = singleNamed.addIn(predicate, 'foo', () => {});
}
