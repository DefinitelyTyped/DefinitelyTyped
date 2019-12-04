import { BlankNode, DataFactory, DatasetCore, DatasetCoreFactory, DefaultGraph, Literal, NamedNode, Quad, BaseQuad,
  Sink, Source, Store, Stream, Triple, Term, Variable, Quad_Graph, Quad_Object, Quad_Predicate, Quad_Subject } from "rdf-js";
import { EventEmitter } from "events";

function test_terms() {
    // Only types are checked in this tests,
    // so this does not have to be functional.
    const someTerm: Term = <any> {};

    if (someTerm.termType === 'Literal') {
      console.log(someTerm.datatype);
    }
    const namedNode: NamedNode = <any> {};
    const termType1: string = namedNode.termType;
    const value1: string = namedNode.value;
    namedNode.equals(someTerm);
    const namedNodeSubject: Quad_Subject = namedNode;
    const namedNodePredicate: Quad_Predicate = namedNode;
    const namedNodeObject: Quad_Object = namedNode;
    const namedNodeGraph: Quad_Graph = namedNode;

    const blankNode: BlankNode = <any> {};
    const termType2: string = blankNode.termType;
    const value2: string = blankNode.value;
    blankNode.equals(someTerm);
    const blankNodeSubject: Quad_Subject = blankNode;
    const blankNodeObject: Quad_Object = blankNode;
    const blankNodeGraph: Quad_Graph = blankNode;

    const literal: Literal = <any> {};
    const termType3: string = literal.termType;
    const value3: string = literal.value;
    const language3: string = literal.language;
    const datatype3: NamedNode = literal.datatype;
    literal.equals(someTerm);
    const literalObject: Quad_Object = literal;

    const variable: Variable = <any> {};
    const termType4: string = variable.termType;
    const value4: string = variable.value;
    variable.equals(someTerm);
    const variableSubject: Quad_Subject = variable;
    const variablePredicate: Quad_Predicate = variable;
    const variableObject: Quad_Object = variable;
    const variableGraph: Quad_Graph = variable;

    const defaultGraph: DefaultGraph = <any> {};
    const termType5: string = defaultGraph.termType;
    const value5: string = defaultGraph.value;
    defaultGraph.equals(someTerm);
    const defaultGraphGraph: Quad_Graph = defaultGraph;
}

function test_quads() {
    const quad: Quad = <any> {};
    const s1: Quad_Subject = quad.subject;
    const p1: Quad_Predicate = quad.predicate;
    const o1: Quad_Object = quad.object;
    const g1: Quad_Graph = quad.graph;
    quad.equals(quad);

    const triple: Triple = quad;
    const s2: Quad_Subject = triple.subject;
    const p2: Quad_Predicate = triple.predicate;
    const o2: Quad_Object = triple.object;
    const g2: Quad_Graph = triple.graph;
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

    const term: NamedNode = <any> {};
    const triple: Quad = dataFactory.triple(term, term, term);
    interface QuadBnode extends BaseQuad {
      subject: Term;
      predicate: Term;
      object: Term;
      graph: Term;
    }
    const quad = dataFactory.quad<QuadBnode>(literal1, blankNode1, term, term);
    const hasBnode = quad.predicate.termType === "BlankNode";
}

function test_stream() {
    interface QuadBnode extends BaseQuad {
        subject: Term;
        predicate: Term;
        object: Term;
        graph: Term;
    }

    const stream1: Stream = <any> {};
    const stream2: Stream<QuadBnode> = <any> {};
    const quad1: Quad = stream1.read();
    const quad2: QuadBnode = stream2.read();

    const subject: Quad_Subject = <any> {};
    const predicate: Quad_Predicate = <any> {};
    const object: Quad_Object = <any> {};
    const graph: Quad_Graph = <any> {};
    const term: Term = <any> {};
    const source1: Source = <any> {};
    const source2: Source<QuadBnode> = <any> {};
    const match1Stream1: Stream = source1.match();
    const match1Stream2: Stream = source1.match(subject);
    const match1Stream3: Stream = source1.match(/.*/);
    const match1Stream4: Stream = source1.match(subject, predicate);
    const match1Stream5: Stream = source1.match(subject, /.*/);
    const match1Stream6: Stream = source1.match(subject, predicate, object);
    const match1Stream7: Stream = source1.match(subject, predicate, /.*/);
    const match1Stream8: Stream = source1.match(subject, predicate, object, graph);
    const match1Stream9: Stream = source1.match(subject, predicate, object, /.*/);
    const match2Stream1: Stream<QuadBnode> = source2.match();
    const match2Stream2: Stream<QuadBnode> = source2.match(term);
    const match2Stream3: Stream<QuadBnode> = source2.match(/.*/);
    const match2Stream4: Stream<QuadBnode> = source2.match(term, term);
    const match2Stream5: Stream<QuadBnode> = source2.match(term, /.*/);
    const match2Stream6: Stream<QuadBnode> = source2.match(term, term, term);
    const match2Stream7: Stream<QuadBnode> = source2.match(term, term, /.*/);
    const match2Stream8: Stream<QuadBnode> = source2.match(term, term, term, term);
    const match2Stream9: Stream<QuadBnode> = source2.match(term, term, term, /.*/);

    const sink1: Sink = <any> {};
    const sink2: Sink<QuadBnode> = <any> {};
    const store1: Store = <any> {};
    const store2: Store<QuadBnode> = <any> {};
    const store1Source: Source = store1;
    const store1Sink: Sink = store1;
    const store2Source: Source<QuadBnode> = store2;
    const store2Sink: Sink<QuadBnode> = store2;

    const eventEmitter1_1: EventEmitter = sink1.import(stream1);
    const eventEmitter1_2: EventEmitter = store1.remove(stream1);
    const eventEmitter1_3: EventEmitter = store1.removeMatches();
    const eventEmitter1_4: EventEmitter = store1.removeMatches(subject);
    const eventEmitter1_5: EventEmitter = store1.removeMatches(/.*/);
    const eventEmitter1_6: EventEmitter = store1.removeMatches(subject, predicate);
    const eventEmitter1_7: EventEmitter = store1.removeMatches(subject, /.*/);
    const eventEmitter1_8: EventEmitter = store1.removeMatches(subject, predicate, object);
    const eventEmitter1_9: EventEmitter = store1.removeMatches(subject, predicate, /.*/);
    const eventEmitter1_10: EventEmitter = store1.removeMatches(subject, predicate, object, graph);
    const eventEmitter1_11: EventEmitter = store1.removeMatches(subject, predicate, object, /.*/);
    const eventEmitter1_12: EventEmitter = store1.deleteGraph(graph);
    const eventEmitter1_13: EventEmitter = store1.deleteGraph('http://example.org');
    const eventEmitter2_1: EventEmitter = sink2.import(stream2);
    const eventEmitter2_2: EventEmitter = store2.remove(stream2);
    const eventEmitter2_3: EventEmitter = store2.removeMatches();
    const eventEmitter2_4: EventEmitter = store2.removeMatches(term);
    const eventEmitter2_5: EventEmitter = store2.removeMatches(/.*/);
    const eventEmitter2_6: EventEmitter = store2.removeMatches(term, term);
    const eventEmitter2_7: EventEmitter = store2.removeMatches(term, /.*/);
    const eventEmitter2_8: EventEmitter = store2.removeMatches(term, term, term);
    const eventEmitter2_9: EventEmitter = store2.removeMatches(term, term, /.*/);
    const eventEmitter2_10: EventEmitter = store2.removeMatches(term, term, term, term);
    const eventEmitter2_11: EventEmitter = store2.removeMatches(term, term, term, /.*/);
    const eventEmitter2_12: EventEmitter = store2.deleteGraph(term);
    const eventEmitter2_13: EventEmitter = store2.deleteGraph('http://example.org');
}

function test_dataset() {
    interface QuadBnode extends BaseQuad {
        subject: Term;
        predicate: Term;
        object: Term;
        graph: Term;
    }

    const quad: Quad = <any> {};
    const quadBnode: QuadBnode = <any> {};
    const subject: Quad_Subject = <any> {};
    const predicate: Quad_Predicate = <any> {};
    const object: Quad_Object = <any> {};
    const graph: Quad_Graph = <any> {};
    const term: Term = <any> {};

    const datasetCoreFactory1: DatasetCoreFactory = <any> {};
    const datasetCoreFactory2: DatasetCoreFactory<QuadBnode> = <any> {};

    const dataset1: DatasetCore = datasetCoreFactory1.dataset();
    const dataset2: DatasetCore = datasetCoreFactory1.dataset([quad, quad]);
    const dataset3: DatasetCore<QuadBnode> = datasetCoreFactory2.dataset([quadBnode, quad]);

    const dataset2Size: number = dataset2.size;
    const dataset2Add: DatasetCore = dataset2.add(quad);
    const dataset2Delete: DatasetCore = dataset2.delete(quad);
    const dataset2Has: boolean = dataset2.has(quad);
    const dataset2Match1: DatasetCore = dataset2.match();
    const dataset2Match2: DatasetCore = dataset2.match(subject);
    const dataset2Match3: DatasetCore = dataset2.match(subject, predicate);
    const dataset2Match4: DatasetCore = dataset2.match(subject, predicate, object);
    const dataset2Match5: DatasetCore = dataset2.match(subject, predicate, object, graph);
    const dataset2Iterable: Iterable<Quad> = dataset2;

    const dataset3Size: number = dataset3.size;
    const dataset3Add: DatasetCore<QuadBnode> = dataset3.add(quadBnode);
    const dataset3Delete: DatasetCore<QuadBnode> = dataset3.delete(quadBnode);
    const dataset3Has: boolean = dataset3.has(quadBnode);
    const dataset3Match1: DatasetCore<QuadBnode> = dataset3.match();
    const dataset3Match2: DatasetCore<QuadBnode> = dataset3.match(term);
    const dataset3Match3: DatasetCore<QuadBnode> = dataset3.match(term, term);
    const dataset3Match4: DatasetCore<QuadBnode> = dataset3.match(term, term, term);
    const dataset3Match5: DatasetCore<QuadBnode> = dataset3.match(term, term, term, term);
    const dataset3Iterable: Iterable<QuadBnode> = dataset3;
}
