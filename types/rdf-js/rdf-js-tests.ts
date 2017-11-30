import { BlankNode, DataFactory, DefaultGraph, Literal, NamedNode, Quad, Sink, Source, Store, Stream, Triple, Term,
  Variable } from "rdf-js";
import { EventEmitter } from "events";

function test_terms() {
    // Only types are checked in this tests,
    // so this does not have to be functional.
    const someTerm: Term = <any> {};

    const namedNode: NamedNode = <any> {};
    const termType1: string = namedNode.termType;
    const value1: string = namedNode.value;
    namedNode.equals(someTerm);

    const blankNode: BlankNode = <any> {};
    const termType2: string = blankNode.termType;
    const value2: string = blankNode.value;
    blankNode.equals(someTerm);

    const literal: Literal = <any> {};
    const termType3: string = literal.termType;
    const value3: string = literal.value;
    const language3: string = literal.language;
    const datatype3: NamedNode = literal.datatype;
    literal.equals(someTerm);

    const variable: Variable = <any> {};
    const termType4: string = variable.termType;
    const value4: string = variable.value;
    variable.equals(someTerm);

    const defaultGraph: DefaultGraph = <any> {};
    const termType5: string = defaultGraph.termType;
    const value5: string = defaultGraph.value;
    defaultGraph.equals(someTerm);
}

function test_quads() {
    const quad: Quad = <any> {};
    const s1: Term = quad.subject;
    const p1: Term = quad.predicate;
    const o1: Term = quad.object;
    const g1: Term = quad.graph;
    quad.equals(quad);

    const triple: Triple = quad;
    const s2: Term = triple.subject;
    const p2: Term = triple.predicate;
    const o2: Term = triple.object;
    const g2: Term = triple.graph;
    triple.equals(quad);
    quad.equals(triple);
}

function test_datafactory() {
    const dataFactory: DataFactory = <any> {};

    const namedNode: NamedNode = dataFactory.namedNode('http://example.org');

    const blankNode1: BlankNode = dataFactory.blankNode('b1');
    const blankNode2: BlankNode = dataFactory.blankNode();

    const literal1: Literal = dataFactory.literal('abc');
    const literal2: Literal = dataFactory.literal('abc', 'en-us');
    const literal3: Literal = dataFactory.literal('abc', namedNode);

    const variable: Variable = dataFactory.variable ? dataFactory.variable('v1') : <any> {};

    const term: Term = <any> {};
    const triple: Quad = dataFactory.triple(term, term, term);
    const quad: Quad = dataFactory.quad(term, term, term, term);
}

function test_stream() {
    const stream: Stream = <any> {};
    const quad: Quad = stream.read();

    const term: Term = <any> {};
    const source: Source = <any> {};
    const matchStream1: Stream = source.match();
    const matchStream2: Stream = source.match(term);
    const matchStream3: Stream = source.match(/.*/);
    const matchStream4: Stream = source.match(term, term);
    const matchStream5: Stream = source.match(term, /.*/);
    const matchStream6: Stream = source.match(term, term, term);
    const matchStream7: Stream = source.match(term, term, /.*/);
    const matchStream8: Stream = source.match(term, term, term, term);
    const matchStream9: Stream = source.match(term, term, term, /.*/);

    const sink: Sink = <any> {};
    const eventEmitter1: EventEmitter = sink.import(stream);

    const store: Store = <any> {};
    const storeSource: Source = store;
    const storeSink: Sink = store;
    const eventEmitter2: EventEmitter = store.remove(stream);
    const eventEmitter3: EventEmitter = store.removeMatches();
    const eventEmitter4: EventEmitter = store.removeMatches(term);
    const eventEmitter5: EventEmitter = store.removeMatches(/.*/);
    const eventEmitter6: EventEmitter = store.removeMatches(term, term);
    const eventEmitter7: EventEmitter = store.removeMatches(term, /.*/);
    const eventEmitter8: EventEmitter = store.removeMatches(term, term, term);
    const eventEmitter9: EventEmitter = store.removeMatches(term, term, /.*/);
    const eventEmitter10: EventEmitter = store.removeMatches(term, term, term, term);
    const eventEmitter11: EventEmitter = store.removeMatches(term, term, term, /.*/);
    const eventEmitter12: EventEmitter = store.deleteGraph(term);
    const eventEmitter13: EventEmitter = store.deleteGraph('http://example.org');
}
