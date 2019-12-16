import { BlankNode, DataFactory, Dataset, DatasetCore, DatasetCoreFactory, DatasetFactory, DefaultGraph, Literal,
  NamedNode, Quad, BaseQuad, Sink, Source, Store, Stream, Triple, Term, Variable, Quad_Graph, QuadFilterIteratee,
  QuadMapIteratee, QuadReduceIteratee, QuadRunIteratee } from "rdf-js";
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
    const graph: Quad_Graph = <any> {};
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
    const eventEmitter12: EventEmitter = store.deleteGraph(graph);
    const eventEmitter13: EventEmitter = store.deleteGraph('http://example.org');
}

function test_datasetcore() {
    interface QuadBnode extends BaseQuad {
        subject: Term;
        predicate: Term;
        object: Term;
        graph: Term;
    }

    const quad: Quad = <any> {};
    const quadBnode: QuadBnode = <any> {};
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
    const dataset2Match2: DatasetCore = dataset2.match(term);
    const dataset2Match3: DatasetCore = dataset2.match(term, term);
    const dataset2Match4: DatasetCore = dataset2.match(term, term, term);
    const dataset2Match5: DatasetCore = dataset2.match(term, term, term, term);
    const dataset2MatchWithNull1: DatasetCore = dataset2.match(term);
    const dataset2MatchWithNull2: DatasetCore = dataset2.match(null, term);
    const dataset2MatchWithNull3: DatasetCore = dataset2.match(term, null, term);
    const dataset2MatchWithNull4: DatasetCore = dataset2.match(term, term, null, term);
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

function test_dataset() {
    interface QuadBnode extends BaseQuad {
        subject: Term;
        predicate: Term;
        object: Term;
        graph: Term;
    }

    const quad: Quad = <any> {};
    const quadBnode: QuadBnode = <any> {};
    const term: Term = <any> {};

    const stream1: Stream = <any> {};
    const stream2: Stream<QuadBnode> = <any> {};

    const quadFilterIteratee1: QuadFilterIteratee = <any> {};
    const quadFilterIteratee2: QuadFilterIteratee<QuadBnode> = <any> {};

    const quadMapIteratee1: QuadMapIteratee = <any> {};
    const quadMapIteratee2: QuadMapIteratee<QuadBnode> = <any> {};

    const quadReduceIteratee1: QuadReduceIteratee = <any> {};
    const quadReduceIteratee2: QuadReduceIteratee<string> = <any> {};
    const quadReduceIteratee3: QuadReduceIteratee<any, QuadBnode> = <any> {};
    const quadReduceIteratee4: QuadReduceIteratee<string, QuadBnode> = <any> {};

    const quadRunIteratee1: QuadRunIteratee = <any> {};
    const quadRunIteratee2: QuadRunIteratee<QuadBnode> = <any> {};

    const datasetFactory1: DatasetFactory = <any> {};
    const datasetFactory2: DatasetFactory<QuadBnode> = <any> {};

    const dataset1: Dataset = datasetFactory1.dataset();
    const dataset2: Dataset = datasetFactory1.dataset([quad, quad]);
    const dataset3: Dataset<QuadBnode> = datasetFactory2.dataset();
    const dataset4: Dataset<QuadBnode> = datasetFactory2.dataset([quadBnode, quad]);

    const datasetFactory1Core: DatasetCoreFactory = datasetFactory1;
    const datasetFactory2Core: DatasetCoreFactory<QuadBnode> = datasetFactory2;

    const dataset2Size: number = dataset2.size;
    const dataset2Add: Dataset = dataset2.add(quad);
    const dataset2AddAllDataset: Dataset = dataset2.addAll(dataset1);
    const dataset2AddAllArray: Dataset = dataset2.addAll([quad]);
    const dataset2Contains: boolean = dataset2.contains(dataset1);
    const dataset2Delete: Dataset = dataset2.delete(quad);
    const dataset2DeleteMatches1: Dataset = dataset2.deleteMatches();
    const dataset2DeleteMatches2: Dataset = dataset2.deleteMatches(term);
    const dataset2DeleteMatches3: Dataset = dataset2.deleteMatches(term, term);
    const dataset2DeleteMatches4: Dataset = dataset2.deleteMatches(term, term, term);
    const dataset2DeleteMatches5: Dataset = dataset2.deleteMatches(term, term, term, term);
    const dataset2Difference: Dataset = dataset2.difference(dataset1);
    const dataset2Equals: boolean = dataset2.equals(dataset1);
    const dataset2Every: boolean = dataset2.every(quadFilterIteratee1);
    const dataset2Filter: Dataset = dataset2.filter(quadFilterIteratee1);
    // tslint:disable-next-line:no-void-expression void-return
    const dataset2Foreach: void = dataset2.forEach(quadRunIteratee1);
    const dataset2Has: boolean = dataset2.has(quad);
    const dataset2Import: Promise<Dataset> = dataset2.import(stream1);
    const dataset2Intersection: Dataset = dataset2.intersection(dataset1);
    const dataset2Map: Dataset = dataset2.map(quadMapIteratee1);
    const dataset2Match1: Dataset = dataset2.match();
    const dataset2Match2: Dataset = dataset2.match(term);
    const dataset2Match3: Dataset = dataset2.match(term, term);
    const dataset2Match4: Dataset = dataset2.match(term, term, term);
    const dataset2Match5: Dataset = dataset2.match(term, term, term, term);
    const dataset2Reduce1: object = dataset2.reduce(quadReduceIteratee1);
    const dataset2Reduce2: object = dataset2.reduce(quadReduceIteratee1, []);
    const dataset2Reduce3: object = dataset2.reduce(quadReduceIteratee1, '');
    const dataset2Reduce4: string = dataset2.reduce(quadReduceIteratee2);
    const dataset2Reduce5: string = dataset2.reduce(quadReduceIteratee2, '');
    const dataset2Some: boolean = dataset2.some(quadFilterIteratee1);
    const dataset2ToArray: Quad[] = dataset2.toArray();
    const dataset2ToCanonical: string = dataset2.toCanonical();
    const dataset2ToStream: Stream = dataset2.toStream();
    const dataset2ToString: string = dataset2.toString();
    const dataset2Union: Dataset = dataset2.union(dataset1);
    const dataset2Iterable: Iterable<Quad> = dataset2;
    const dataset2Core: DatasetCore = dataset2;

    const dataset4Size: number = dataset4.size;
    const dataset4Add: Dataset<QuadBnode> = dataset4.add(quadBnode);
    const dataset4AddAllDataset: Dataset<QuadBnode> = dataset4.addAll(dataset3);
    const dataset4AddAllArray: Dataset<QuadBnode> = dataset4.addAll([quadBnode]);
    const dataset4Contains: boolean = dataset4.contains(dataset3);
    const dataset4Delete: Dataset<QuadBnode> = dataset4.delete(quadBnode);
    const dataset4DeleteMatches1: Dataset<QuadBnode> = dataset4.deleteMatches();
    const dataset4DeleteMatches2: Dataset<QuadBnode> = dataset4.deleteMatches(term);
    const dataset4DeleteMatches3: Dataset<QuadBnode> = dataset4.deleteMatches(term, term);
    const dataset4DeleteMatches4: Dataset<QuadBnode> = dataset4.deleteMatches(term, term, term);
    const dataset4DeleteMatches5: Dataset<QuadBnode> = dataset4.deleteMatches(term, term, term, term);
    const dataset4Difference: Dataset<QuadBnode> = dataset4.difference(dataset3);
    const dataset4Equals: boolean = dataset4.equals(dataset3);
    const dataset4Every: boolean = dataset4.every(quadFilterIteratee2);
    const dataset4Filter: Dataset<QuadBnode> = dataset4.filter(quadFilterIteratee2);
    // tslint:disable-next-line:no-void-expression void-return
    const dataset4Foreach: void = dataset4.forEach(quadRunIteratee2);
    const dataset4Has: boolean = dataset4.has(quadBnode);
    const dataset4Import: Promise<Dataset<QuadBnode>> = dataset4.import(stream2);
    const dataset4Intersection: Dataset<QuadBnode> = dataset4.intersection(dataset3);
    const dataset4Map: Dataset<QuadBnode> = dataset4.map(quadMapIteratee2);
    const dataset4Match1: Dataset<QuadBnode> = dataset4.match();
    const dataset4Match2: Dataset<QuadBnode> = dataset4.match(term);
    const dataset4Match3: Dataset<QuadBnode> = dataset4.match(term, term);
    const dataset4Match4: Dataset<QuadBnode> = dataset4.match(term, term, term);
    const dataset4Match5: Dataset<QuadBnode> = dataset4.match(term, term, term, term);
    const dataset4Reduce1: object = dataset4.reduce(quadReduceIteratee3);
    const dataset4Reduce2: object = dataset4.reduce(quadReduceIteratee3, []);
    const dataset4Reduce3: object = dataset4.reduce(quadReduceIteratee3, '');
    const dataset4Reduce4: string = dataset4.reduce(quadReduceIteratee4);
    const dataset4Reduce5: string = dataset4.reduce(quadReduceIteratee4, '');
    const dataset4Some: boolean = dataset4.some(quadFilterIteratee1);
    const dataset4ToArray: QuadBnode[] = dataset4.toArray();
    const dataset4ToCanonical: string = dataset4.toCanonical();
    const dataset4ToStream: Stream<QuadBnode> = dataset4.toStream();
    const dataset4ToString: string = dataset4.toString();
    const dataset4Union: Dataset<QuadBnode> = dataset4.union(dataset3);
    const dataset4Iterable: Iterable<QuadBnode> = dataset4;
    const dataset4Core: DatasetCore<QuadBnode> = dataset4;
}
