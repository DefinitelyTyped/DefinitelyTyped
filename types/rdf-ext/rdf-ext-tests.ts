import Environment, { Environment as IEnvironment } from "@rdfjs/environment/Environment";
import Traverser from "@rdfjs/traverser/Traverser";
import {
    BlankNode,
    DatasetCore,
    DatasetCoreFactory,
    DefaultGraph,
    Literal,
    NamedNode,
    Quad,
    Sink,
    Stream,
    Term,
    Variable,
} from "@rdfjs/types";
import { EventEmitter } from "events";
import rdf from "rdf-ext";
import DataFactory, { DataFactoryExt } from "rdf-ext/DataFactory";
import DatasetFactoryExt, { DatasetFactory } from "rdf-ext/DatasetFactory";
import BlankNodeExt from "rdf-ext/lib/BlankNode";
import { DatasetExt } from "rdf-ext/lib/Dataset";
import DefaultGraphExt from "rdf-ext/lib/DefaultGraph";
import LiteralExt from "rdf-ext/lib/Literal";
import NamedNodeExt from "rdf-ext/lib/NamedNode";
import QuadExt from "rdf-ext/lib/Quad";
import VariableExt from "rdf-ext/lib/Variable";
import { Readable } from "stream";

function rdfExt_factory() {
    const baseFactory: DatasetCoreFactory = rdf;
    const factory: DatasetCoreFactory<QuadExt, Quad> = rdf;

    const baseDataset: DatasetExt = rdf.dataset();
    const dataset: DatasetCore<QuadExt> = rdf.dataset();
}

function NamedNode_toCanonical(): string {
    const iri = "http://example.org";
    const term = rdf.namedNode(iri);

    return term.toCanonical();
}

function NamedNode_toJSON(): boolean {
    const iri = "http://example.org";
    const term = rdf.namedNode(iri);

    const json = term.toJSON();

    return json.value === iri && json.termType === "NamedNode";
}

function BlankNode_toCanonical(): string {
    const iri = "http://example.org";
    const term = rdf.blankNode(iri);

    return term.toCanonical();
}

function BlankNode_toJSON(): boolean {
    const term = rdf.blankNode("b1");

    const json = term.toJSON();

    return json.value === "b1" && json.termType === "BlankNode";
}

function Literal_toCanonical(): string {
    const term = rdf.literal("foobar");

    return term.toCanonical();
}

function Literal_toJSON(): boolean {
    const term = rdf.literal("foobar");

    const json = term.toJSON();

    return json.value === "b1" && json.termType === "Literal";
}

function Literal_withDatatype(): Literal {
    return rdf.literal("foobar", rdf.namedNode("xsd:int"));
}

function Literal_withLanguage(): Literal {
    return rdf.literal("foobar", "de");
}

function DefaultGraph_toCanonical(): string {
    const term = rdf.defaultGraph();

    return term.toCanonical();
}

function DefaultGraph_toJSON(): boolean {
    const term = rdf.defaultGraph();

    const json = term.toJSON();

    return json.value === "" && json.termType === "DefaultGraph";
}

function Variable_toCanonical(): string {
    const term = rdf.variable("s");

    return term.toCanonical();
}

function Variable_toJSON(): boolean {
    const term = rdf.variable("p");

    const json = term.toJSON();

    return json.value === "p" && json.termType === "Variable";
}

function Quad_toCanonical(): string {
    const quad = rdf.quad(
        rdf.namedNode("urn:foo:bar"),
        rdf.namedNode("predicate"),
        rdf.namedNode("object"),
    );

    return quad.toCanonical();
}

function Quad_subject(): boolean {
    const quad = rdf.quad(
        rdf.namedNode("urn:foo:bar"),
        rdf.namedNode("predicate"),
        rdf.namedNode("object"),
    );

    return quad.subject.equals(rdf.namedNode("urn:foo:bar"));
}

function Quad_predicate(): boolean {
    const quad = rdf.quad(
        rdf.namedNode("urn:foo:bar"),
        rdf.namedNode("predicate"),
        rdf.namedNode("object"),
    );

    return quad.predicate.equals(rdf.namedNode("predicate"));
}

function Quad_object(): boolean {
    const quad = rdf.quad(
        rdf.namedNode("urn:foo:bar"),
        rdf.namedNode("predicate"),
        rdf.namedNode("object"),
    );

    return quad.object.equals(rdf.namedNode("object"));
}

function Quad_withGraph(): Quad {
    return rdf.quad(
        rdf.namedNode("urn:foo:bar"),
        rdf.namedNode("predicate"),
        rdf.namedNode("object"),
        rdf.namedNode("G"),
    );
}

function Quad_withLiteralObject(): Quad {
    return rdf.quad(
        rdf.namedNode("urn:foo:bar"),
        rdf.namedNode("predicate"),
        rdf.literal("object"),
        rdf.namedNode("G"),
    );
}

function Quad_withBlankSubject(): Quad {
    return rdf.quad(
        rdf.blankNode("foo"),
        rdf.namedNode("predicate"),
        rdf.literal("object"),
    );
}

function static_Quad_fromBaseTerms(): Quad {
    const subject: NamedNode = <any> {};
    const predicate: NamedNode = <any> {};
    const object: NamedNode = <any> {};
    const graph: NamedNode = <any> {};

    return rdf.quad(subject, predicate, object, graph);
}

function static_Triple_fromBaseTerms(): Quad {
    const subject: NamedNode = <any> {};
    const predicate: NamedNode = <any> {};
    const object: NamedNode = <any> {};

    return rdf.quad(subject, predicate, object);
}

function instance_Quad_fromBaseTerms(): Quad {
    const factory: DataFactoryExt = <any> {};
    const subject: NamedNode = <any> {};
    const predicate: NamedNode = <any> {};
    const object: NamedNode = <any> {};
    const graph: NamedNode = <any> {};

    return factory.quad(subject, predicate, object, graph);
}

function instance_Triple_fromBaseTerms(): Quad {
    const factory: DataFactoryExt = <any> {};
    const subject: NamedNode = <any> {};
    const predicate: NamedNode = <any> {};
    const object: NamedNode = <any> {};

    return factory.quad(subject, predicate, object);
}

function Quad_toJSON(): boolean {
    const quad = rdf.quad(
        rdf.blankNode("foo"),
        rdf.namedNode("predicate"),
        rdf.literal("object"),
    );

    const json = quad.toJSON();

    return json.subject.termType === "BlankNode"
        && json.predicate.value === "predicate"
        && json.object.termType === "Literal"
        && json.graph !== null;
}

function dataset_empty(): boolean {
    return rdf.dataset().size === 0;
}

function dataset_merge(): DatasetExt {
    const other: DatasetExt = <any> {};
    return rdf.dataset().merge(other);
}

function dataset_map(): DatasetExt {
    const other: DatasetExt = <any> {};
    return rdf.dataset().map((q: QuadExt): Quad => <any> {});
}

function dataset_match() {
    let matched: DatasetExt;
    const term: Term = <any> {};
    matched = rdf.dataset().match(null, null, null, null);
    matched = rdf.dataset().match(term);
    matched = rdf.dataset().match(null, term);
    matched = rdf.dataset().match(null, null, term);
    matched = rdf.dataset().match(null, null, null, term);
}

function test_reduce() {
    const quad: QuadExt = <any> {};
    const dataset: DatasetExt = <any> {};

    // $ExpectType QuadExt
    const reduced = dataset.reduce(
        (previousValue: QuadExt, currentValue: QuadExt, currentIndex: number, self: DatasetExt) => {
            return previousValue;
        },
    );

    // $ExpectType QuadExt
    const reducedWithInitial = dataset.reduce(
        (previousValue: QuadExt, currentValue: QuadExt, currentIndex: number, self: DatasetExt) => {
            return previousValue;
        },
        quad,
    );

    // $ExpectType string
    const reducedToOther = dataset.reduce(
        (previousValue: string, currentValue: QuadExt, currentIndex: number, self: DatasetExt) => {
            return previousValue;
        },
        "",
    );

    // $ExpectType number
    const reducedToExplicit = dataset.reduce<number>(
        (previousValue: number, currentValue: QuadExt, currentIndex: number, self: DatasetExt) => {
            return previousValue;
        },
        0,
    );
}

function dataset_merge_array(): DatasetExt {
    const other: Quad[] = <any> {};
    return rdf.dataset().merge(other);
}

function dataset_clone(): DatasetExt {
    return rdf.dataset().clone();
}

function dataset_filter(): DatasetExt {
    return rdf.dataset().filter(() => true);
}

function dataset_equals(): boolean {
    return rdf.dataset().equals(rdf.dataset());
}

function dataset_toCanoncal(): string {
    return rdf.dataset().toCanonical();
}

function dataset_initializeWithQuads(): DatasetExt {
    const quad1 = rdf.quad(
        rdf.namedNode("http://example.org/subject"),
        rdf.namedNode("http://example.org/predicate"),
        rdf.literal("object1"),
        rdf.namedNode("http://example.org/graph"),
    );

    const quad2 = rdf.quad(
        rdf.namedNode("http://example.org/subject"),
        rdf.namedNode("http://example.org/predicate"),
        rdf.literal("object2"),
        rdf.namedNode("http://example.org/graph"),
    );

    return rdf.dataset([quad1, quad2]);
}

function Dataset_toJSON() {
    const dataset = rdf.dataset([
        rdf.quad(
            rdf.namedNode("http://example.org/subject"),
            rdf.namedNode("http://example.org/predicate"),
            rdf.literal("object1"),
            rdf.namedNode("http://example.org/graph"),
        ),
    ]);

    const json = dataset.toJSON();

    json.forEach(quad => {
        quad.subject.termType === "NamedNode"
            && quad.predicate.value === "predicate"
            && quad.object.termType === "Literal"
            && quad.graph !== null;
    });
}

async function dataset_parserImport() {
    const dataset: DatasetExt = <any> {};
    const parserSink: Sink<EventEmitter, Stream> = <any> {};
    const stream: Readable = <any> {};

    const promise: DatasetExt = await dataset.import(parserSink.import(stream));
}

function constructedTerms() {
    const blankNode: BlankNode = new BlankNodeExt("b1");

    const namedNode: NamedNode = new NamedNodeExt("foo:bar:baz");

    let literal: Literal;
    literal = new LiteralExt("foo");
    literal = new LiteralExt("foo", "bar");
    literal = new LiteralExt("foo", null, namedNode);

    const variable: Variable = new VariableExt("foo");

    let quad: Quad;
    quad = new QuadExt(blankNode, namedNode, literal);
    quad = new QuadExt(blankNode, namedNode, literal, null);
    quad = new QuadExt(blankNode, namedNode, literal, namedNode);
    quad = new QuadExt(blankNode, namedNode, literal, new DefaultGraphExt());

    let dataset: DatasetExt;
    dataset = new DatasetExt();
    dataset = new DatasetExt([quad, quad, quad]);
}

function dataset_addAll() {
    const quad: Quad = <any> {};
    let dataset: DatasetExt = <any> {};
    dataset = dataset.addAll([quad, quad]);
}

function dataset_deleteMatches() {
    const term: NamedNode = <any> {};
    const graph: NamedNode | DefaultGraph = <any> {};
    let dataset: DatasetExt = <any> {};
    dataset = dataset.deleteMatches(null, null, term, graph);
}

function dataset_difference() {
    const dataset: DatasetExt = <any> {};
    const datasetCore: DatasetCore = <any> {};
    const diff: DatasetExt = dataset.difference(datasetCore);
}

function dataset_every() {
    const dataset: DatasetExt = <any> {};
    const result: boolean = dataset.every((quad: QuadExt) => {
        return true;
    });
}

function dataset_forEach() {
    const dataset: DatasetExt = <any> {};
    dataset.forEach((quad: QuadExt) => {
        //
    });
}

function dataset_toStream() {
    const dataset: DatasetExt = <any> {};
    // $ExpectType Stream<QuadExt>
    const stream = dataset.toStream();
}

function testDataFactory() {
    const namedNode = rdf.namedNode("foo"); // $ExpectType NamedNodeExt<"foo">
    const literal = rdf.literal("foo"); // $ExpectType LiteralExt
    const variable = rdf.variable("foo"); // $ExpectType VariableExt
    let blankNode = rdf.blankNode(); // $ExpectType BlankNodeExt
    blankNode = rdf.blankNode("b1");
    const quad = rdf.quad(blankNode, namedNode, literal); // $ExpectType QuadExt

    const originalNamedNode: NamedNode = <any> {};
    const fromNamed: NamedNodeExt = rdf.fromTerm(originalNamedNode);
    const originalQuad: Quad = <any> {};
    const fromQuad: QuadExt = rdf.fromQuad(originalQuad);
}

function testDatasetFactory() {
    const emptyDataset: DatasetExt = rdf.dataset();

    const quad: Quad = <any> {};
    const datasetWithQuads: DatasetExt = rdf.dataset([quad, quad, quad]);

    const graph: NamedNode | DefaultGraph = <any> {};
    const datasetWithQuadsInGraph: DatasetExt = rdf.dataset([quad, quad, quad], graph);
}

type DatasetFoo = DatasetCore & {
    foo: "bar";
};

async function testFetch() {
    const formats: any = <any> {};
    const res = await rdf.fetch("foo");
    const stream: Stream = await res.quadStream();
    const dataset: DatasetCore = await res.dataset();
}

function testFormats() {
    const { parsers, serializers } = rdf.formats;
}

function testNamespace() {
    const schema = rdf.namespace("http://schema.org/");
    const typedNs = rdf.namespace<"foo" | "bar">("http://schema.org/");

    const { foo, bar } = typedNs;
    // @ts-expect-error
    const baz = typedNs.baz;
}

function termSetMapFactoryTest() {
    const map = rdf.termMap();
    const set = rdf.termSet();
}

function testPrefixMap() {
    const prefixMap = rdf.prefixMap();
}

function testTraverser() {
    const traverser: Traverser<DatasetExt> = rdf.traverser(({ level }) => {
        return level === 0;
    });
}

function testScore() {
    const {
        combine,
        concat,
        count,
        distinct,
        exists,
        fallback,
        fixed,
        language,
        pageRank,
        pathDepth,
        prioritized,
        product,
        scale,
        sort,
        sortObjects,
        sum,
        type,
    } = rdf.score;
}

function testBundledFactories() {
    const env = new Environment([
        DatasetFactoryExt,
        DataFactory,
    ]);

    const {
        dataset,
        quad,
    } = env;
}

function testEnvironmentAssignable() {
    const datasetEnv: IEnvironment<DatasetFactory> = rdf;
}
