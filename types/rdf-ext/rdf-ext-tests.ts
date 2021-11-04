import rdf = require('rdf-ext');
import { Literal, Quad, NamedNode, Stream, Sink, DataFactory, DatasetCoreFactory, BlankNode, Variable } from 'rdf-js';
import { DatasetIndexed as Dataset } from 'rdf-dataset-indexed/dataset';
import QuadExt = require('rdf-ext/lib/Quad');
import BlankNodeExt = require('rdf-ext/lib/BlankNode');
import DataFactoryExt = require('rdf-ext/lib/DataFactory');
import DatasetExt = require('rdf-ext/lib/Dataset');
import DefaultGraphExt = require('rdf-ext/lib/DefaultGraph');
import LiteralExt = require('rdf-ext/lib/Literal');
import NamedNodeExt = require('rdf-ext/lib/NamedNode');
import VariableExt = require('rdf-ext/lib/Variable');
import { EventEmitter } from 'events';
import { Readable } from 'stream';

const factory: DataFactory = rdf;

function rdfExt_factory() {
    const baseFactory: DatasetCoreFactory = rdf;
    const factory: DatasetCoreFactory<QuadExt, Quad> = rdf;

    const baseDataset: Dataset = rdf.dataset();
    const dataset: Dataset<QuadExt> = rdf.dataset();
}

function NamedNode_toCanonical(): string {
    const iri = 'http://example.org';
    const term = rdf.namedNode(iri);

    return term.toCanonical();
}

function NamedNode_toJSON(): boolean {
    const iri = 'http://example.org';
    const term = rdf.namedNode(iri);

    const json = term.toJSON();

    return json.value === iri && json.termType === 'NamedNode';
}

function BlankNode_toCanonical(): string {
    const iri = 'http://example.org';
    const term = rdf.blankNode(iri);

    return term.toCanonical();
}

function BlankNode_toJSON(): boolean {
    const term = rdf.blankNode('b1');

    const json = term.toJSON();

    return json.value === 'b1' && json.termType === 'BlankNode';
}

function Literal_toCanonical(): string {
    const term = rdf.literal('foobar');

    return term.toCanonical();
}

function Literal_toJSON(): boolean {
    const term = rdf.literal('foobar');

    const json = term.toJSON();

    return json.value === 'b1' && json.termType === 'Literal';
}

function Literal_withDatatype(): Literal {
    return rdf.literal('foobar', rdf.namedNode('xsd:int'));
}

function Literal_withLanguage(): Literal {
    return rdf.literal('foobar', 'de');
}

function DefaultGraph_toCanonical(): string {
    const term = rdf.defaultGraph();

    return term.toCanonical();
}

function DefaultGraph_toJSON(): boolean {
    const term = rdf.defaultGraph();

    const json = term.toJSON();

    return json.value === '' && json.termType === 'DefaultGraph';
}

function Variable_toCanonical(): string {
    const term = rdf.variable('s');

    return term.toCanonical();
}

function Variable_toJSON(): boolean {
    const term = rdf.variable('p');

    const json = term.toJSON();

    return json.value === 'p' && json.termType === 'Variable';
}

function Quad_toCanonical(): string {
    const quad = rdf.quad(
        rdf.namedNode('urn:foo:bar'),
        rdf.namedNode('predicate'),
        rdf.namedNode('object')
    );

    return quad.toCanonical();
}

function Quad_subject(): boolean {
    const quad = rdf.quad(
        rdf.namedNode('urn:foo:bar'),
        rdf.namedNode('predicate'),
        rdf.namedNode('object')
    );

    return quad.subject.equals(rdf.namedNode('urn:foo:bar'));
}

function Quad_predicate(): boolean {
    const quad = rdf.quad(
        rdf.namedNode('urn:foo:bar'),
        rdf.namedNode('predicate'),
        rdf.namedNode('object')
    );

    return quad.predicate.equals(rdf.namedNode('predicate'));
}

function Quad_object(): boolean {
    const quad = rdf.quad(
        rdf.namedNode('urn:foo:bar'),
        rdf.namedNode('predicate'),
        rdf.namedNode('object')
    );

    return quad.object.equals(rdf.namedNode('object'));
}

function Quad_withGraph(): Quad {
    return rdf.quad(
        rdf.namedNode('urn:foo:bar'),
        rdf.namedNode('predicate'),
        rdf.namedNode('object'),
        rdf.namedNode('G')
    );
}

function Quad_withLiteralObject(): Quad {
    return rdf.quad(
        rdf.namedNode('urn:foo:bar'),
        rdf.namedNode('predicate'),
        rdf.literal('object'),
        rdf.namedNode('G')
    );
}

function Quad_withBlankSubject(): Quad {
    return rdf.quad(
        rdf.blankNode('foo'),
        rdf.namedNode('predicate'),
        rdf.literal('object')
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
        rdf.blankNode('foo'),
        rdf.namedNode('predicate'),
        rdf.literal('object')
    );

    const json = quad.toJSON();

    return json.subject.termType === 'BlankNode'
        && json.predicate.value === 'predicate'
        && json.object.termType === 'Literal'
        && json.graph !== null;
}

function graph_noParams_returnsDataset(): boolean {
    return rdf.graph().length === 0;
}

function graph_initWithTriples(): Dataset {
    const triple1 = rdf.quad(
        rdf.namedNode('http://example.org/subject'),
        rdf.namedNode('http://example.org/predicate'),
        rdf.literal('object1'));

    const triple2 = rdf.quad(
        rdf.namedNode('http://example.org/subject'),
        rdf.namedNode('http://example.org/predicate'),
        rdf.literal('object2'));

    return rdf.graph([triple1, triple2]);
}

function dataset_empty(): boolean {
    return rdf.dataset().length === 0;
}

function dataset_merge(): DatasetExt {
    const other: Dataset = <any> {};
    return rdf.dataset().merge(other);
}

function dataset_merge_array(): DatasetExt {
    const other: Quad[] = <any> {};
    return rdf.dataset().merge(other);
}

function dataset_clone(): Dataset {
    return rdf.dataset().clone();
}

function dataset_filter(): Dataset {
    return rdf.dataset().filter(() => true);
}

function dataset_equals(): boolean {
    return rdf.dataset().equals(rdf.dataset());
}

function dataset_toCanoncal(): string {
    return rdf.dataset().toCanonical();
}

function dataset_initializeWithQuads(): Dataset {
    const quad1 = rdf.quad(
        rdf.namedNode('http://example.org/subject'),
        rdf.namedNode('http://example.org/predicate'),
        rdf.literal('object1'),
        rdf.namedNode('http://example.org/graph'));

    const quad2 = rdf.quad(
        rdf.namedNode('http://example.org/subject'),
        rdf.namedNode('http://example.org/predicate'),
        rdf.literal('object2'),
        rdf.namedNode('http://example.org/graph'));

    return rdf.dataset([quad1, quad2]);
}

function Dataset_toJSON() {
    const dataset = rdf.dataset([
        rdf.quad(
            rdf.namedNode('http://example.org/subject'),
            rdf.namedNode('http://example.org/predicate'),
            rdf.literal('object1'),
            rdf.namedNode('http://example.org/graph'))
        ]);

    const json = dataset.toJSON();

    json.forEach(quad => {
        quad.subject.termType === 'NamedNode'
        && quad.predicate.value === 'predicate'
        && quad.object.termType === 'Literal'
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
    const blankNode: BlankNode = new BlankNodeExt('b1');

    const namedNode: NamedNode = new NamedNodeExt('foo:bar:baz');

    let literal: Literal;
    literal = new LiteralExt('foo');
    literal = new LiteralExt('foo', 'bar');
    literal = new LiteralExt('foo', null, namedNode);

    const variable: Variable = new VariableExt('foo');

    let quad: Quad;
    quad = new QuadExt(blankNode, namedNode, literal);
    quad = new QuadExt(blankNode, namedNode, literal, null);
    quad = new QuadExt(blankNode, namedNode, literal, namedNode);
    quad = new QuadExt(blankNode, namedNode, literal, new DefaultGraphExt());

    let dataset: Dataset;
    dataset = new DatasetExt();
    dataset = new DatasetExt([quad, quad, quad]);
}
