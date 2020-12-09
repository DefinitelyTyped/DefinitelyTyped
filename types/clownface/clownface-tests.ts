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
    const singleNode: clownface.AnyPointer<NamedNode> = <any> {};
    const safeContext: clownface.MultiPointer<NamedNode> = singleNode;
    let noContext: clownface.AnyPointer = singleNode;
    noContext = safeContext;
}

function withoutContext() {
    const cf: clownface.AnyPointer<undefined, Dataset> = <any> {};
    const term: undefined = cf.term;
    const terms: Term[] = cf.terms;
    const value: undefined = cf.value;
    const values: string[] = cf.values;
    const _context: Array<Context<DatasetCore, Term>> = cf._context;
}

function multiContext() {
    const cf: clownface.AnyPointer<Array<NamedNode | BlankNode>, Dataset> = <any> {};
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
    const cf: clownface.AnyPointer<Literal, Dataset> = <any> {};
    const term: Literal = cf.term;
    const terms: [Literal] = cf.terms;
    const value: string = cf.value;
    const values: [string] = cf.values;
    const _context: Array<Context<DatasetCore, Term>> = cf._context;

    const asMultiContext: clownface.AnyPointer<Literal[] | Literal, Dataset> = cf;
}

function testConstructor() {
    const typedByTerm: Clownface<NamedNode, Dataset> = new Clownface({ dataset, term: node });
    const typedByTerms: Clownface<Array<NamedNode | BlankNode>, Dataset> = new Clownface({ dataset, term: [node, blankNode] });

    let contructedWithValueHasTermContext: Clownface<Term, Dataset> = new Clownface({ dataset, value: 'foo' });
    contructedWithValueHasTermContext = new Clownface({ dataset, value: ['foo', 'bar'] });
    const anyTerms: clownface.MultiPointer = new Clownface({ dataset, term: [term, term], value: ['foo', 'bar'] });

    const constructedWithSingleTerm: clownface.GraphPointer<NamedNode> = new Clownface({ dataset, term: node });
}

function testAddIn() {
    let cf: clownface.AnyPointer<BlankNode> = <any> {};
    cf = cf.addIn(node);
    cf = cf.addIn(node);
    cf = cf.addIn([ node, node ], node);
    cf = cf.addIn(node, [ node, node ]);
    cf = cf.addIn([ node, node ], [ node, blankNode ], child => {
        const values: Array<NamedNode | BlankNode> = child.terms;
    });
    cf = cf.addIn(node, child => {
        const childNode: clownface.AnyPointer<BlankNode> = child;
    });
    cf = cf.addIn(cf.node(node), cf.node(node));

    const manyPredicates: clownface.AnyPointer<NamedNode[]> = <any> {};
    const manyObjects: clownface.AnyPointer<Literal[]> = <any> {};
    cf = cf.addIn(manyPredicates, manyObjects);
}

function testAddInBlankNode() {
    const cf: clownface.AnyPointer = <any> {};

    function bnodeCallback(bnode: clownface.GraphPointer<BlankNode>): void {}
    cf.addIn(node, null, bnodeCallback);
    cf.addIn(node, undefined, bnodeCallback);
}

function testAddList() {
    let cf: clownface.AnyPointer<NamedNode> = <any> {};
    cf = cf.addList(predicate, [node]);
    cf = cf.addList(predicate, [node, node]);
}

function testAddOut() {
    let cf: clownface.AnyPointer<BlankNode> = <any> {};
    cf = cf.addOut(node);
    cf = cf.addOut(node);
    cf = cf.addOut([ node, node ], node);
    cf = cf.addOut(node, [ node, node ]);
    cf = cf.addOut([ node, node ], [ node, blankNode ], child => {
        const values: Array<NamedNode | BlankNode> = child.terms;
    });
    cf = cf.addOut(node, child => {
        const childNode: clownface.AnyPointer<BlankNode> = child;
    });
    cf = cf.addOut(cf.node(node), cf.node(node));

    const manyPredicates: clownface.AnyPointer<NamedNode[]> = <any> {};
    const manyObjects: clownface.AnyPointer<Literal[]> = <any> {};
    cf = cf.addOut(manyPredicates, manyObjects);
}

function testAddOutBlankNode() {
    const cf: clownface.AnyPointer = <any> {};

    function bnodeCallback(bnode: clownface.GraphPointer<BlankNode>): void {}
    cf.addOut(node, null, bnodeCallback);
    cf.addOut(node, undefined, bnodeCallback);
}

function testBlankNode() {
    const cf: clownface.AnyPointer<Term[], Dataset> = <any> {};
    let singleBlank: clownface.AnyPointer<BlankNode, Dataset> = cf.blankNode();
    singleBlank = cf.blankNode('label');
    const multiBlankContext: clownface.AnyPointer<BlankNode[], Dataset> = cf.blankNode([ 'b1', 'b2' ]);

    const fromOther: clownface.AnyPointer<BlankNode, Dataset> = cf.blankNode(singleBlank);
    const fromMultipleOther: clownface.MultiPointer<BlankNode, Dataset> = cf.blankNode(multiBlankContext);
}

function testDeleteIn() {
    let cf: clownface.AnyPointer<NamedNode, Dataset> = <any> {};
    cf = cf.deleteIn();
    cf = cf.deleteIn(node);
    cf = cf.deleteIn([node, node]);
}

function testDeleteList() {
    let cf: clownface.AnyPointer<NamedNode, Dataset> = <any> {};
    cf = cf.deleteList(predicate);
}

function testDeleteOut() {
    let cf: clownface.AnyPointer<BlankNode, Dataset> = <any> {};
    cf = cf.deleteOut();
    cf = cf.deleteOut(node);
    cf = cf.deleteOut([node, node]);
}

function testFactory() {
    const defaultContext: clownface.AnyPointer<Term | Term[] | undefined, Dataset> = clownface({ dataset });

    const namedGraph: clownface.AnyPointer<NamedNode, Dataset> = clownface({ dataset, graph, term: node });
    const singleFromValue: clownface.AnyPointer<Literal, Dataset> = clownface({ dataset, value: 'foo' });

    const termContext: clownface.AnyPointer<Term, Dataset> = clownface({
        dataset,
        term
    });

    const namedContext: clownface.AnyPointer<NamedNode, Dataset> = clownface({
        dataset,
        term: node,
    });

    const namedMutlipleTerms: clownface.AnyPointer<NamedNode[], Dataset> = clownface({
        dataset,
        term: [node, node],
    });

    const mutlipleValues: clownface.AnyPointer<Literal[], Dataset> = clownface({
        dataset,
        value: ['foo', 'bar'],
    });

    const maybeNamed: BlankNode | NamedNode = <any> {};
    const altContext: clownface.AnyPointer<BlankNode | NamedNode, Dataset> = clownface({
        dataset,
        term: maybeNamed,
    });

    const literalContext: clownface.AnyPointer<Literal, Dataset> = <any> {};
    const deriveContextFromOtherGraph: clownface.AnyPointer<Literal, Dataset> = clownface(literalContext);

    const namedNodeContext: clownface.AnyPointer<NamedNode, Dataset> = <any> {};
    const deriveContextFromOtherNamedNodeContext: clownface.AnyPointer<NamedNode, Dataset> = clownface(namedNodeContext);
}

function testFilter() {
    let mutliple: clownface.AnyPointer<NamedNode[], Dataset> = <any> {};
    mutliple = mutliple.filter(quad => {
        const copy: clownface.AnyPointer<NamedNode, Dataset> = quad;
        return true;
    });

    let single: clownface.AnyPointer<NamedNode, Dataset> = <any> {};
    single = single.filter(quad => {
        const copy: clownface.AnyPointer<NamedNode, Dataset> = quad;
        return true;
    });

    let noContext: clownface.AnyPointer<undefined, Dataset> = <any> {};
    noContext = noContext.filter(quad => {
        const copy: never = quad;
        return true;
    });
}

function testForEach() {
    let mutliple: clownface.AnyPointer<NamedNode[], Dataset> = <any> {};
    mutliple = mutliple.forEach(quad => {
        const copy: clownface.AnyPointer<NamedNode, Dataset> = quad;
        return true;
    });

    let single: clownface.AnyPointer<NamedNode, Dataset> = <any> {};
    single = single.forEach(quad => {
        const copy: clownface.AnyPointer<NamedNode, Dataset> = quad;
        return true;
    });

    let noContext: clownface.AnyPointer<undefined, Dataset> = <any> {};
    noContext = noContext.forEach(quad => {
        const copy: never = quad;
        return true;
    });
}

function testHas() {
    const cf: clownface.AnyPointer<Term, Dataset> = <any> {};
    let has: clownface.AnyPointer<Array<NamedNode | BlankNode>, Dataset> = cf.has(predicate, 'Stuart');
    has = cf.has([predicate, predicate], 'Stuart');
    has = cf.has(predicate, [literal, literal]);
}

function testIn() {
    const cf: clownface.AnyPointer<Literal, Dataset> = <any> {};
    let cfIn: clownface.MultiPointer<NamedNode | BlankNode, Dataset> = cf.in();
    cfIn = cf.in(node);
    cfIn = cf.in([node, node]);
    cfIn = cf.in(cf.node(node));
    cfIn = cf.in(cf.node([node, node]));

    const singleContext: clownface.AnyPointer<NamedNode, Dataset> = <any> {};
    let inContext = cfIn.out(node);
    inContext = singleContext;
}

function testList() {
    const cf: clownface.AnyPointer<NamedNode, Dataset> = <any> {};
    const listNodes: Iterable<clownface.AnyPointer<NamedNode, Dataset>> | null = cf.list();
}

function testLiteral() {
    const cf: clownface.AnyPointer<undefined, Dataset> = <any> {};
    let cfOneLit: clownface.AnyPointer<Literal, Dataset> = cf.literal('foo');
    const cfLiterals: clownface.AnyPointer<Literal[], Dataset> = cf.literal(['foo', 'bar']);
    cfOneLit = cf.literal('foo', node);
    cfOneLit = cf.literal('foo', 'en');

    const fromOther: clownface.AnyPointer<Literal, Dataset> = cf.literal(cfOneLit);
    const fromMultipleOther: clownface.MultiPointer<Literal, Dataset> = cf.literal(cfLiterals);
}

function testMap() {
    const singleContext: clownface.AnyPointer<BlankNode, Dataset> = <any> {};
    const multiContext: clownface.AnyPointer<BlankNode, Dataset> = <any> {};
    let terms: BlankNode[] = singleContext.map((item) => item.term);
    terms = multiContext.map((item) => item.term);

    let nums: number[] = singleContext.map((_, index) => index);
    nums = multiContext.map((_, index) => index);
}

function testNamedNode() {
    const cf: clownface.AnyPointer<undefined, Dataset> = <any> {};
    let cfSingleNamed: clownface.AnyPointer<NamedNode, Dataset> = cf.namedNode(node);
    cfSingleNamed = cf.namedNode('http://example.com/');
    const cfNamedMany: clownface.AnyPointer<NamedNode[], Dataset> = cf.namedNode(['http://example.com/', 'http://example.org/']);

    const fromOther: clownface.AnyPointer<NamedNode, Dataset> = cf.namedNode(cfSingleNamed);
    const fromMultipleOther: clownface.MultiPointer<NamedNode, Dataset> = cf.namedNode(cfNamedMany);
}

function testNode() {
    const cf: clownface.AnyPointer<undefined, Dataset> = <any> {};
    let singleTerm: clownface.AnyPointer<Term, Dataset> = cf.node(node);
    let cfLit: clownface.AnyPointer<Literal, Dataset> = cf.node('foo');
    cfLit = cf.node(123);
    const cfLitMany: clownface.AnyPointer<Literal[], Dataset> = cf.node(['foo', 'bar']);
    singleTerm = cf.node('http://example.org/', { type: 'NamedNode' });
    const cfBlank: clownface.AnyPointer<BlankNode, Dataset> = cf.node(null, { type: 'BlankNode' });
    cfLit = cf.node('example', { datatype: node.value });
    cfLit = cf.node('example', { datatype: node });

    const fromOtherNode: clownface.MultiPointer<Term, Dataset> = cf.node(singleTerm);
    const literalFromOther: clownface.MultiPointer<Literal, Dataset> = cf.node(cfLit);

    const literalFromMultipleOther: clownface.MultiPointer<Literal, Dataset> = cf.node(cfLitMany);
}

function testOut() {
    const cf: clownface.AnyPointer<undefined, Dataset> = <any> {};
    let cfTerm: clownface.AnyPointer<Term[], Dataset> = cf.out();
    cfTerm = cf.out(node);
    cfTerm = cf.out([node, node]);
    cfTerm = cf.out(cf.node([node, node]));

    const singleContext: clownface.AnyPointer<NamedNode, Dataset> = <any> {};
    let outContext = cfTerm.out(node);
    outContext = singleContext;
}

function testOutWithLanguage() {
    const cf: clownface.AnyPointer<undefined, Dataset> = <any> {};
    let cfTerms: Literal[] = cf.out(undefined, { language: 'en' }).terms;
    cfTerms = cf.out(node).terms;
    cfTerms = cf.out([node, node]).terms;
    cfTerms = cf.out(cf.node([node, node])).terms;

    let outTerms: Literal[] = cf.blankNode().out(node, { language: 'en' }).terms;
    outTerms = cf.blankNode().out(node, { language: ['en', 'de'] }).terms;
}

function testToArray() {
    const single: clownface.AnyPointer<Literal, Dataset> = <any> {};
    const singleToArray: Array<clownface.AnyPointer<Literal, Dataset>> = single.toArray();

    const mutliple: clownface.AnyPointer<Literal[], Dataset> = <any> {};
    const mutlipleToArray: Array<clownface.AnyPointer<Literal, Dataset>> = mutliple.toArray();
}

function testMultipleContext() {
    const safeCf: clownface.AnyPointer<Term[], Dataset> = <any> {};

    let singleBlank: clownface.AnyPointer<BlankNode, Dataset> = safeCf.blankNode();
    singleBlank = clownface({ dataset }).blankNode();
    singleBlank = safeCf.blankNode('blank');
    singleBlank = clownface({ dataset }).node(null);

    let singleNamed: clownface.AnyPointer<NamedNode, Dataset> = clownface({ dataset }).namedNode('urn:foo:bar');
    singleNamed = safeCf.namedNode('http://example.com/a');
    singleNamed = clownface({ dataset }).node(node);

    let singleLiteral: clownface.AnyPointer<Literal, Dataset> = clownface({ dataset }).literal('foo');
    singleLiteral = safeCf.literal('a');
    singleLiteral = clownface({ dataset }).node('b');

    const fromSingleArrayBLank: clownface.AnyPointer<BlankNode, Dataset> = safeCf.blankNode([ 'b1' ]);
    const fromSingleArrayNamed: clownface.AnyPointer<NamedNode, Dataset> = safeCf.namedNode([ 'http://example.com/a' ]);
    const fromSingleArrayLiteral: clownface.AnyPointer<Literal, Dataset> = safeCf.literal([ 'a' ]);

    let multipleBlanks: clownface.AnyPointer<BlankNode[], Dataset> = safeCf.blankNode([ 'b1', 'b2' ]);
    multipleBlanks = clownface({ dataset }).node([ null, null ]);

    let multipleNamed: clownface.AnyPointer<NamedNode[], Dataset> = safeCf.namedNode([ 'http://example.com/a', 'http://example.com/b' ]);
    multipleNamed = clownface({ dataset }).node([ node, node ]);

    let multipleLiterals: clownface.AnyPointer<Literal[], Dataset> = safeCf.literal([ 'a', 'b' ]);
    multipleLiterals = clownface({ dataset }).node([ 'a', 10, false ]);

    const multipleMixedTerms: clownface.AnyPointer<Term[], Dataset> = clownface({ dataset }).node([ 'a', node, null ]);
}

function testContext() {
    const fromSingleArrayLiteral: clownface.AnyPointer<Literal, Dataset> = <any> {};
    const ctxTerm: Term = fromSingleArrayLiteral._context[0].term;
    const ctxGraph: Quad_Graph | undefined = fromSingleArrayLiteral._context[0].graph;
    const ctxDataset: Dataset = fromSingleArrayLiteral._context[0].dataset;
}

function addInAddOutRetainsType() {
    const singleNamed: clownface.AnyPointer<NamedNode, Dataset> = <any> {};

    const addOutSingle: clownface.AnyPointer<NamedNode, Dataset> = singleNamed.addOut(predicate, 'foo');
    const addOutSingleObjectArray: clownface.AnyPointer<NamedNode, Dataset> = singleNamed.addOut(predicate, ['foo', 'bar']);
    const addOutSinglePredicateArray: clownface.AnyPointer<NamedNode, Dataset> = singleNamed.addOut([predicate, predicate]);
    const addOutSingleNoObject: clownface.AnyPointer<NamedNode, Dataset> = singleNamed.addOut(predicate);
    const addOutSingleWithCallback: clownface.AnyPointer<NamedNode, Dataset> = singleNamed.addOut(predicate, () => {});
    const addOutSingleWithObjectAndCallback: clownface.AnyPointer<NamedNode, Dataset> = singleNamed.addOut(predicate, 'foo', () => {});

    const addInSingle: clownface.AnyPointer<NamedNode, Dataset> = singleNamed.addIn(predicate, 'foo');
    const addInSingleObjectArray: clownface.AnyPointer<NamedNode, Dataset> = singleNamed.addIn(predicate, ['foo', 'bar']);
    const addInSinglePredicateArray: clownface.AnyPointer<NamedNode, Dataset> = singleNamed.addIn([predicate, predicate]);
    const addInSingleNoObject: clownface.AnyPointer<NamedNode, Dataset> = singleNamed.addIn(predicate);
    const addInSingleWithCallback: clownface.AnyPointer<NamedNode, Dataset> = singleNamed.addIn(predicate, () => {});
    const addInSingleWithObjectAndCallback: clownface.AnyPointer<NamedNode, Dataset> = singleNamed.addIn(predicate, 'foo', () => {});
}

function testAny() {
    const multiPtr: clownface.AnyPointer<clownface.AnyContext, Dataset> = <any> {};
    const graphPtr: clownface.AnyPointer<clownface.AnyContext, Dataset> = <any> {};
    let anyPointer: clownface.AnyPointer<clownface.AnyContext, Dataset> = <any> {};

    anyPointer = anyPointer.any();
    anyPointer = multiPtr.any();
    anyPointer = graphPtr.any();
}
