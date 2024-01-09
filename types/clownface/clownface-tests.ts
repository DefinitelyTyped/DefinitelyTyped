import DataFactory from "@rdfjs/data-model/Factory.js";
import DatasetFactory from "@rdfjs/dataset/Factory.js";
import Environment from "@rdfjs/environment/Environment.js";
import { BlankNode, Dataset, DatasetCore, Literal, NamedNode, Quad_Graph, Term, Variable } from "@rdfjs/types";
import clownface, { AnyContext, AnyPointer, GraphPointer, MultiPointer } from "clownface";
import ClownfaceFactory from "clownface/Factory.js";
import filters from "clownface/filter.js";
import Context from "clownface/lib/Context.js";

const node: NamedNode = <any> {};
const blankNode: BlankNode = <any> {};
const predicate: NamedNode = <any> {};
const literal: Literal = <any> {};
const term: Term = <any> {};

const dataset: Dataset = <any> {};
const graph: NamedNode = <any> {};

function testCasting() {
    const singleNode: AnyPointer<NamedNode> = <any> {};
    const safeContext: MultiPointer<NamedNode> = singleNode;
    let noContext: AnyPointer = singleNode;
    noContext = safeContext;
}

function withoutContext() {
    const cf: AnyPointer<undefined, Dataset> = <any> {};
    const term: undefined = cf.term;
    const terms: Term[] = cf.terms;
    const value: undefined = cf.value;
    const values: string[] = cf.values;
    const _context: Array<Context<DatasetCore, Term>> = cf._context;
}

function multiContext() {
    const cf: AnyPointer<Array<NamedNode | BlankNode>, Dataset> = <any> {};
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
    const cf: AnyPointer<Literal, Dataset> = <any> {};
    const term: Literal = cf.term;
    const terms: [Literal] = cf.terms;
    const value: string = cf.value;
    const values: [string] = cf.values;
    const _context: Array<Context<DatasetCore, Term>> = cf._context;

    const asMultiContext: AnyPointer<Literal[] | Literal, Dataset> = cf;
}

function testAddIn() {
    let cf: AnyPointer<BlankNode> = <any> {};
    cf = cf.addIn(node);
    cf = cf.addIn(node);
    cf = cf.addIn([node, node], node);
    cf = cf.addIn(node, [node, node]);
    cf = cf.addIn([node, node], [node, blankNode], child => {
        const values: Array<NamedNode | BlankNode> = child.terms;
    });
    cf = cf.addIn(node, child => {
        const childNode: AnyPointer<BlankNode> = child;
    });
    cf = cf.addIn(cf.node(node), cf.node(node));

    const manyPredicates: AnyPointer<NamedNode[]> = <any> {};
    const manyObjects: AnyPointer<Literal[]> = <any> {};
    cf = cf.addIn(manyPredicates, manyObjects);
}

function testAddInBlankNode() {
    const cf: AnyPointer = <any> {};

    function bnodeCallback(bnode: GraphPointer<BlankNode>): void {}
    cf.addIn(node, null, bnodeCallback);
    cf.addIn(node, undefined, bnodeCallback);
}

function testAddList() {
    let cf: AnyPointer<NamedNode> = <any> {};
    cf = cf.addList(predicate, [node]);
    cf = cf.addList(predicate, [node, node]);
}

function testAddOut() {
    let cf: AnyPointer<BlankNode> = <any> {};
    cf = cf.addOut(node);
    cf = cf.addOut(node);
    cf = cf.addOut([node, node], node);
    cf = cf.addOut(node, [node, node]);
    cf = cf.addOut([node, node], [node, blankNode], child => {
        const values: Array<NamedNode | BlankNode> = child.terms;
    });
    cf = cf.addOut(node, child => {
        const childNode: AnyPointer<BlankNode> = child;
    });
    cf = cf.addOut(cf.node(node), cf.node(node));

    const manyPredicates: AnyPointer<NamedNode[]> = <any> {};
    const manyObjects: AnyPointer<Literal[]> = <any> {};
    cf = cf.addOut(manyPredicates, manyObjects);
}

function testAddOutBlankNode() {
    const cf: AnyPointer = <any> {};

    function bnodeCallback(bnode: GraphPointer<BlankNode>): void {}
    cf.addOut(node, null, bnodeCallback);
    cf.addOut(node, undefined, bnodeCallback);
}

function testBlankNode() {
    const cf: AnyPointer<Term[], Dataset> = <any> {};
    let singleBlank: AnyPointer<BlankNode, Dataset> = cf.blankNode();
    singleBlank = cf.blankNode("label");
    const multiBlankContext: AnyPointer<BlankNode[], Dataset> = cf.blankNode(["b1", "b2"]);
    const set: Set<BlankNode> = <any> {};

    const fromOther: AnyPointer<BlankNode, Dataset> = cf.blankNode(singleBlank);
    const fromMultipleOther: MultiPointer<BlankNode, Dataset> = cf.blankNode(multiBlankContext);
    const fromSet: MultiPointer<BlankNode, Dataset> = cf.blankNode(set);

    const pointers: Array<GraphPointer<BlankNode, Dataset>> = <any> {};
    const fromArray: MultiPointer<BlankNode, Dataset> = cf.blankNode(pointers);
}

function testDeleteIn() {
    let cf: AnyPointer<NamedNode, Dataset> = <any> {};
    cf = cf.deleteIn();
    cf = cf.deleteIn(node);
    cf = cf.deleteIn([node, node]);
    cf = cf.deleteIn([node, node], node);
    cf = cf.deleteIn([node, node], [node]);
    cf = cf.deleteIn([node, node], cf.out());
}

function testDeleteList() {
    let cf: AnyPointer<NamedNode, Dataset> = <any> {};
    cf = cf.deleteList(predicate);
}

function testDeleteOut() {
    let cf: AnyPointer<BlankNode, Dataset> = <any> {};
    cf = cf.deleteOut();
    cf = cf.deleteOut(node);
    cf = cf.deleteOut([node, node]);
    cf = cf.deleteOut([node, node], node);
    cf = cf.deleteOut([node, node], [node]);
    cf = cf.deleteOut([node, node], cf.out());
}

function testFactory() {
    const defaultContext: AnyPointer<Term | Term[] | undefined, Dataset> = clownface({ dataset });

    const namedGraph: AnyPointer<NamedNode, Dataset> = clownface({ dataset, graph, term: node });
    const singleFromValue: AnyPointer<Literal, Dataset> = clownface({ dataset, value: "foo" });

    const termContext: AnyPointer<Term, Dataset> = clownface({
        dataset,
        term,
    });

    const namedContext: AnyPointer<NamedNode, Dataset> = clownface({
        dataset,
        term: node,
    });

    const namedMutlipleTerms: AnyPointer<NamedNode[], Dataset> = clownface({
        dataset,
        term: [node, node],
    });

    const mutlipleValues: AnyPointer<Literal[], Dataset> = clownface({
        dataset,
        value: ["foo", "bar"],
    });

    const maybeNamed: BlankNode | NamedNode = <any> {};
    const altContext: AnyPointer<BlankNode | NamedNode, Dataset> = clownface({
        dataset,
        term: maybeNamed,
    });

    const literalContext: AnyPointer<Literal, Dataset> = <any> {};
    const deriveContextFromOtherGraph: AnyPointer<Literal, Dataset> = clownface(literalContext);

    const namedNodeContext: AnyPointer<NamedNode, Dataset> = <any> {};
    const deriveContextFromOtherNamedNodeContext: AnyPointer<NamedNode, Dataset> = clownface(namedNodeContext);

    const factory = new Environment([
        DatasetFactory,
        DataFactory,
    ]);
    const withFactory = clownface({ dataset, factory });

    const incompatibleFactory = new Environment([
        DataFactory,
    ]);
    // @ts-expect-error
    const withIncompatibleFactory = clownface({ dataset, factory: incompatibleFactory });
}

function testFilter() {
    let mutliple: AnyPointer<NamedNode[], Dataset> = <any> {};
    mutliple = mutliple.filter(quad => {
        const copy: AnyPointer<NamedNode, Dataset> = quad;
        return true;
    });

    let single: AnyPointer<NamedNode, Dataset> = <any> {};
    single = single.filter(quad => {
        const copy: AnyPointer<NamedNode, Dataset> = quad;
        return true;
    });

    let noContext: AnyPointer<undefined, Dataset> = <any> {};
    noContext = noContext.filter(quad => {
        const copy: never = quad;
        return true;
    });

    const anyPointer: AnyPointer<AnyContext, Dataset> = <any> {};
    function onlyVariables(ptr: GraphPointer): ptr is GraphPointer<Variable> {
        return true;
    }

    const typeGuarded: AnyPointer<Variable, Dataset> = anyPointer.filter(onlyVariables);

    function onlyNamedOrBlank(ptr: GraphPointer): ptr is GraphPointer<NamedNode> | GraphPointer<BlankNode> {
        return true;
    }

    const multipleTypeGuarded: AnyPointer<NamedNode | BlankNode, Dataset> = anyPointer.filter<NamedNode | BlankNode>(
        onlyNamedOrBlank,
    );

    const fullSignature = mutliple.filter(
        (ptr: GraphPointer<NamedNode>, index: number, pointers: Array<GraphPointer<NamedNode>>) => {
            return true;
        },
    );
}

function testForEach() {
    let mutliple: AnyPointer<NamedNode[], Dataset> = <any> {};
    mutliple = mutliple.forEach(quad => {
        const copy: AnyPointer<NamedNode, Dataset> = quad;
        return true;
    });

    let single: AnyPointer<NamedNode, Dataset> = <any> {};
    single = single.forEach(quad => {
        const copy: AnyPointer<NamedNode, Dataset> = quad;
        return true;
    });

    let noContext: AnyPointer<undefined, Dataset> = <any> {};
    noContext = noContext.forEach(quad => {
        const copy: never = quad;
        return true;
    });
}

function testHas() {
    const cf: AnyPointer<Term, Dataset> = <any> {};
    let has: AnyPointer<Array<NamedNode | BlankNode>, Dataset> = cf.has(predicate, "Stuart");
    has = cf.has([predicate, predicate], "Stuart");
    has = cf.has(predicate, [literal, literal]);
}

function testIn() {
    const cf: AnyPointer<Literal, Dataset> = <any> {};
    let cfIn: MultiPointer<NamedNode | BlankNode, Dataset> = cf.in();
    cfIn = cf.in(node);
    cfIn = cf.in([node, node]);
    cfIn = cf.in(cf.node(node));
    cfIn = cf.in(cf.node([node, node]));

    const singleContext: AnyPointer<NamedNode, Dataset> = <any> {};
    let inContext = cfIn.out(node);
    inContext = singleContext;
}

function testList() {
    const cf: AnyPointer<NamedNode, Dataset> = <any> {};
    // $ExpectType Iterable<GraphPointer<Term, Dataset<Quad, Quad>>> | null
    const listNodes = cf.list();

    if (listNodes) {
        const roundTrip = cf.node(listNodes);
    }
}

function testIsList() {
    const anyPtr: AnyPointer<NamedNode, Dataset> = <any> {};
    const isList: boolean = anyPtr.isList();

    if (anyPtr.isList()) {
        const graphPtr: GraphPointer<NamedNode, Dataset> = anyPtr;
        const listNodes: Iterable<AnyPointer<Term, Dataset>> = anyPtr.list();
    }
}

function testLiteral() {
    const cf: AnyPointer<undefined, Dataset> = <any> {};
    let cfOneLit: AnyPointer<Literal, Dataset> = cf.literal("foo");
    const cfLiterals: AnyPointer<Literal[], Dataset> = cf.literal(["foo", "bar"]);
    cfOneLit = cf.literal("foo", node);
    cfOneLit = cf.literal("foo", "en");

    const fromOther: AnyPointer<Literal, Dataset> = cf.literal(cfOneLit);
    const fromMultipleOther: MultiPointer<Literal, Dataset> = cf.literal(cfLiterals);

    const set: Set<Literal> = <any> {};
    const fromSet: MultiPointer<Literal | NamedNode, Dataset> = cf.literal(set);

    const pointers: Array<GraphPointer<Literal, Dataset>> = <any> {};
    const fromArray: MultiPointer<Literal, Dataset> = cf.literal(pointers);
}

function testMap() {
    const singleContext: AnyPointer<BlankNode, Dataset> = <any> {};
    const multiContext: AnyPointer<BlankNode, Dataset> = <any> {};
    let terms: BlankNode[] = singleContext.map((item) => item.term);
    terms = multiContext.map((item) => item.term);

    let nums: number[] = singleContext.map((_, index) => index);
    nums = multiContext.map((_, index) => index);
}

function testNamedNode() {
    const cf: AnyPointer<undefined, Dataset> = <any> {};
    let cfSingleNamed: AnyPointer<NamedNode, Dataset> = cf.namedNode(node);
    cfSingleNamed = cf.namedNode("http://example.com/");
    const cfNamedMany: AnyPointer<NamedNode[], Dataset> = cf.namedNode(["http://example.com/", "http://example.org/"]);
    const set: Set<NamedNode> = <any> {};

    const fromOther: AnyPointer<NamedNode, Dataset> = cf.namedNode(cfSingleNamed);
    const fromMultipleOther: MultiPointer<NamedNode, Dataset> = cf.namedNode(cfNamedMany);
    const fromSet: MultiPointer<NamedNode, Dataset> = cf.namedNode(set);

    const pointers: Array<GraphPointer<NamedNode, Dataset>> = <any> {};
    const fromArray: MultiPointer<NamedNode, Dataset> = cf.namedNode(pointers);

    const foo: NamedNode<"foo"> = <any> {};
    const preservedTypeArg: GraphPointer<NamedNode<"foo">, Dataset> = cf.namedNode(foo);
}

function testNode() {
    const cf: AnyPointer<undefined, Dataset> = <any> {};
    let singleTerm: AnyPointer<Term, Dataset> = cf.node(node);
    let cfLit: AnyPointer<Literal, Dataset> = cf.node("foo");
    cfLit = cf.node(123);
    const cfLitMany: AnyPointer<Literal[], Dataset> = cf.node(["foo", "bar"]);
    singleTerm = cf.node("http://example.org/", { type: "NamedNode" });
    const cfBlank: AnyPointer<BlankNode, Dataset> = cf.node(null, { type: "BlankNode" });
    cfLit = cf.node("example", { datatype: node.value });
    cfLit = cf.node("example", { datatype: node });

    const fromOtherNode: MultiPointer<Term, Dataset> = cf.node(singleTerm);
    const literalFromOther: MultiPointer<Literal, Dataset> = cf.node(cfLit);

    const literalFromMultipleOther: MultiPointer<Literal, Dataset> = cf.node(cfLitMany);

    const set: Set<Literal | NamedNode> = <any> {};
    const fromSet: MultiPointer<Literal | NamedNode, Dataset> = cf.node(set);

    const pointers: Array<GraphPointer<Literal | NamedNode, Dataset>> = <any> {};
    const fromArray: MultiPointer<Literal | NamedNode, Dataset> = cf.node(pointers);
}

function testOut() {
    const cf: AnyPointer<undefined, Dataset> = <any> {};
    let cfTerm: AnyPointer<Term[], Dataset> = cf.out();
    cfTerm = cf.out(node);
    cfTerm = cf.out([node, node]);
    cfTerm = cf.out(cf.node([node, node]));

    const singleContext: AnyPointer<NamedNode, Dataset> = <any> {};
    let outContext = cfTerm.out(node);
    outContext = singleContext;
}

function testOutWithLanguage() {
    const cf: AnyPointer<undefined, Dataset> = <any> {};
    let cfTerms: Literal[] = cf.out(undefined, { language: "en" }).terms;
    cfTerms = cf.out(node).terms;
    cfTerms = cf.out([node, node]).terms;
    cfTerms = cf.out(cf.node([node, node])).terms;

    let outTerms: Literal[] = cf.blankNode().out(node, { language: "en" }).terms;
    outTerms = cf.blankNode().out(node, { language: ["en", "de"] }).terms;
}

function testToArray() {
    const single: AnyPointer<Literal, Dataset> = <any> {};
    const singleToArray: Array<AnyPointer<Literal, Dataset>> = single.toArray();

    const mutliple: AnyPointer<Literal[], Dataset> = <any> {};
    const mutlipleToArray: Array<AnyPointer<Literal, Dataset>> = mutliple.toArray();
}

function testMultipleContext() {
    const safeCf: AnyPointer<Term[], Dataset> = <any> {};

    let singleBlank: AnyPointer<BlankNode, Dataset> = safeCf.blankNode();
    singleBlank = clownface({ dataset }).blankNode();
    singleBlank = safeCf.blankNode("blank");
    singleBlank = clownface({ dataset }).node(null);

    let singleNamed: AnyPointer<NamedNode, Dataset> = clownface({ dataset }).namedNode("urn:foo:bar");
    singleNamed = safeCf.namedNode("http://example.com/a");
    singleNamed = clownface({ dataset }).node(node);

    let singleLiteral: AnyPointer<Literal, Dataset> = clownface({ dataset }).literal("foo");
    singleLiteral = safeCf.literal("a");
    singleLiteral = clownface({ dataset }).node("b");

    const fromSingleArrayBLank: AnyPointer<BlankNode, Dataset> = safeCf.blankNode(["b1"]);
    const fromSingleArrayNamed: AnyPointer<NamedNode, Dataset> = safeCf.namedNode(["http://example.com/a"]);
    const fromSingleArrayLiteral: AnyPointer<Literal, Dataset> = safeCf.literal(["a"]);

    let multipleBlanks: AnyPointer<BlankNode[], Dataset> = safeCf.blankNode(["b1", "b2"]);
    multipleBlanks = clownface({ dataset }).node([null, null]);

    let multipleNamed: AnyPointer<NamedNode[], Dataset> = safeCf.namedNode([
        "http://example.com/a",
        "http://example.com/b",
    ]);
    multipleNamed = clownface({ dataset }).node([node, node]);

    let multipleLiterals: AnyPointer<Literal[], Dataset> = safeCf.literal(["a", "b"]);
    multipleLiterals = clownface({ dataset }).node(["a", 10, false]);

    const multipleMixedTerms: AnyPointer<Term[], Dataset> = clownface({ dataset }).node(["a", node, null]);
}

function testContext() {
    const fromSingleArrayLiteral: AnyPointer<Literal, Dataset> = <any> {};
    const ctxTerm: Term = fromSingleArrayLiteral._context[0].term;
    const ctxGraph: Quad_Graph | undefined = fromSingleArrayLiteral._context[0].graph;
    const ctxDataset: Dataset = fromSingleArrayLiteral._context[0].dataset;
}

function addInAddOutRetainsType() {
    const singleNamed: AnyPointer<NamedNode, Dataset> = <any> {};

    const addOutSingle: AnyPointer<NamedNode, Dataset> = singleNamed.addOut(predicate, "foo");
    const addOutSingleObjectArray: AnyPointer<NamedNode, Dataset> = singleNamed.addOut(predicate, ["foo", "bar"]);
    const addOutSinglePredicateArray: AnyPointer<NamedNode, Dataset> = singleNamed.addOut([predicate, predicate]);
    const addOutSingleNoObject: AnyPointer<NamedNode, Dataset> = singleNamed.addOut(predicate);
    const addOutSingleWithCallback: AnyPointer<NamedNode, Dataset> = singleNamed.addOut(predicate, () => {});
    const addOutSingleWithObjectAndCallback: AnyPointer<NamedNode, Dataset> = singleNamed.addOut(
        predicate,
        "foo",
        () => {},
    );

    const addInSingle: AnyPointer<NamedNode, Dataset> = singleNamed.addIn(predicate, "foo");
    const addInSingleObjectArray: AnyPointer<NamedNode, Dataset> = singleNamed.addIn(predicate, ["foo", "bar"]);
    const addInSinglePredicateArray: AnyPointer<NamedNode, Dataset> = singleNamed.addIn([predicate, predicate]);
    const addInSingleNoObject: AnyPointer<NamedNode, Dataset> = singleNamed.addIn(predicate);
    const addInSingleWithCallback: AnyPointer<NamedNode, Dataset> = singleNamed.addIn(predicate, () => {});
    const addInSingleWithObjectAndCallback: AnyPointer<NamedNode, Dataset> = singleNamed.addIn(
        predicate,
        "foo",
        () => {},
    );
}

function testAny() {
    const multiPtr: AnyPointer<AnyContext, Dataset> = <any> {};
    const graphPtr: AnyPointer<AnyContext, Dataset> = <any> {};
    let anyPointer: AnyPointer<AnyContext, Dataset> = <any> {};

    anyPointer = anyPointer.any();
    anyPointer = multiPtr.any();
    anyPointer = graphPtr.any();
}

function testFilterModule() {
    const { taggedLiteral } = filters;

    const pointer: MultiPointer<Term, Dataset> = <any> {};

    let literals: MultiPointer<Literal, Dataset> = pointer.filter(taggedLiteral("de"));
    literals = pointer.filter(taggedLiteral(["en-US", "en"]));
}

function testEnvironmentUsage() {
    const env = new Environment([
        ClownfaceFactory,
        DatasetFactory,
    ]);

    // $ExpectType AnyPointer<AnyContext, DatasetCore<Quad, Quad>>
    const noDataset = env.clownface();

    // $ExpectType AnyPointer<NamedNode<string>, DatasetCore<Quad, Quad>>
    const namedNode = env.clownface({
        term: node,
    });
}
