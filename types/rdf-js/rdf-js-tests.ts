import { BlankNode, DataFactory, Dataset, DatasetCore, DatasetCoreFactory, DatasetFactory, DefaultGraph, Literal,
  NamedNode, Quad, BaseQuad, Sink, Source, Store, Stream, Term, Variable, Quad_Graph } from "rdf-js";
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
    let namedNodeEqual: boolean = namedNode.equals(someTerm);
    namedNodeEqual = namedNode.equals(null);
    namedNodeEqual = namedNode.equals(undefined);

    const namedNodeConstant: NamedNode<'http://example.org'> = <any> {};
    const constantIri: 'http://example.org' = namedNodeConstant.value;
    // $ExpectError
    const otherConstantIri: 'http://not-example.org' = namedNodeConstant.value;
    // $ExpectError
    const otherNamedNodeConstant: NamedNode<'http://not-example.org'> = namedNodeConstant;
    const regularNamedNode: NamedNode = namedNodeConstant;

    const blankNode: BlankNode = <any> {};
    const termType2: string = blankNode.termType;
    const value2: string = blankNode.value;
    let blankNodeEqual: boolean = blankNode.equals(someTerm);
    blankNodeEqual = blankNode.equals(null);
    blankNodeEqual = blankNode.equals(undefined);

    const literal: Literal = <any> {};
    const termType3: string = literal.termType;
    const value3: string = literal.value;
    const language3: string = literal.language;
    const datatype3: NamedNode = literal.datatype;
    let literalEqual: boolean = literal.equals(someTerm);
    literalEqual = literal.equals(null);
    literalEqual = literal.equals(undefined);

    const variable: Variable = <any> {};
    const termType4: string = variable.termType;
    const value4: string = variable.value;
    let variableEqual = variable.equals(someTerm);
    variableEqual = variable.equals(null);
    variableEqual = variable.equals(undefined);

    const defaultGraph: DefaultGraph = <any> {};
    const termType5: string = defaultGraph.termType;
    const value5: string = defaultGraph.value;
    let defaultGraphEqual: boolean = defaultGraph.equals(someTerm);
    defaultGraphEqual = defaultGraph.equals(null);
    defaultGraphEqual = defaultGraph.equals(undefined);
}

function test_quads() {
    const quad: Quad = <any> {};
    const s1: Term = quad.subject;
    const p1: Term = quad.predicate;
    const o1: Term = quad.object;
    const g1: Term = quad.graph;
    quad.equals(quad);
}

function test_datafactory() {
    const dataFactory: DataFactory = <any> {};

    const namedNode: NamedNode = dataFactory.namedNode('http://example.org');
    const constantValue: 'http://example.org' = dataFactory.namedNode('http://example.org').value;
    // $ExpectError
    const otherConstantValue: 'http://not-example.org' = dataFactory.namedNode('http://example.org').value;
    // $ExpectError
    const otherConstantNamedNode: NamedNode<'http://not-example.org'> = dataFactory.namedNode('http://example.org');

    const blankNode1: BlankNode = dataFactory.blankNode('b1');
    const blankNode2: BlankNode = dataFactory.blankNode();

    const literal1: Literal = dataFactory.literal('abc');
    const literal2: Literal = dataFactory.literal('abc', 'en-us');
    const literal3: Literal = dataFactory.literal('abc', namedNode);

    const variable: Variable = dataFactory.variable ? dataFactory.variable('v1') : <any> {};

    const term: NamedNode = <any> {};
    interface QuadBnode extends BaseQuad {
      subject: Term;
      predicate: Term;
      object: Term;
      graph: Term;
    }

    const quadBnodeFactory: DataFactory<QuadBnode> = <any> {};
    const quad = quadBnodeFactory.quad(literal1, blankNode1, term, term);
    const hasBnode = quad.predicate.termType === "BlankNode";
}

function test_datafactory_star() {
    const dataFactory: DataFactory = <any> {};

    // Compose the triple "<<ex:bob ex:age 23>> ex:certainty 0.9."
    const quadBobAge: Quad = dataFactory.quad(
        dataFactory.namedNode('ex:bob'),
        dataFactory.namedNode('ex:age'),
        dataFactory.literal('23'),
    );
    const quadBobAgeCertainty: Quad = dataFactory.quad(
        quadBobAge,
        dataFactory.namedNode('ex:certainty'),
        dataFactory.literal('0.9'),
    );

    // Decompose the triple
    if (quadBobAgeCertainty.subject.termType === 'Quad') {
        const quadBobAge2: Quad = quadBobAgeCertainty.subject;

        const equalToSelf: boolean = quadBobAge2.equals(quadBobAge);
        const notEqualToOtherType: boolean = quadBobAge2.equals(dataFactory.namedNode('ex:something:else'));
    }
}

function test_datafactory_star_basequad() {
    const dataFactory: DataFactory<BaseQuad> = <any> {};

    // Compose the triple "<<ex:bob ex:age 23>> ex:certainty 0.9."
    const quadBobAge: BaseQuad = dataFactory.quad(
        dataFactory.namedNode('ex:bob'),
        dataFactory.namedNode('ex:age'),
        dataFactory.literal('23'),
    );
    const quadBobAgeCertainty: BaseQuad = dataFactory.quad(
        quadBobAge,
        dataFactory.namedNode('ex:certainty'),
        dataFactory.literal('0.9'),
    );

    // Decompose the triple
    if (quadBobAgeCertainty.subject.termType === 'Quad') {
        const quadBobAge2: BaseQuad = quadBobAgeCertainty.subject;

        const equalToSelf: boolean = quadBobAge2.equals(quadBobAge);
        const notEqualToOtherType: boolean = quadBobAge2.equals(dataFactory.namedNode('ex:something:else'));
    }
}

function test_stream() {
    const stream: Stream = <any> {};
    const quad: Quad | null = stream.read();

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

    const sink: Sink<Stream, EventEmitter> = <any> {};
    const graph: Quad_Graph = <any> {};
    const eventEmitter1: EventEmitter = sink.import(stream);

    const store: Store = <any> {};
    const storeSource: Source = store;
    const storeSink: Sink<Stream, EventEmitter> = store;
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
    const dataset3: DatasetCore<QuadBnode, QuadBnode> = datasetCoreFactory2.dataset([quadBnode, quad]);

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

    const quadFilterIteratee: (quad: Quad, dataset: Dataset) => boolean = <any> {};
    const quadMapIteratee: (quad: Quad, dataset: Dataset) => Quad = <any> {};
    const quadReduceToStringIteratee: (reduced: string, quad: Quad) => string = <any> {};
    const quadReduceToArrayIteratee: (arr: boolean[], quad: Quad, dataset: Dataset) => boolean[] = <any> {};
    const quadForEachIteratee: (quad: Quad, dataset: Dataset) => void = <any> {};

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
    const dataset2Every: boolean = dataset2.every(quadFilterIteratee);
    const dataset2Filter: Dataset = dataset2.filter(quadFilterIteratee);
    dataset2.forEach(quadForEachIteratee);
    const dataset2Has: boolean = dataset2.has(quad);
    const dataset2Import: Promise<Dataset> = dataset2.import(stream1);
    const dataset2Intersection: Dataset = dataset2.intersection(dataset1);
    const dataset2Map: Dataset = dataset2.map(quadMapIteratee);
    const dataset2Match1: Dataset = dataset2.match();
    const dataset2Match2: Dataset = dataset2.match(term);
    const dataset2Match3: Dataset = dataset2.match(term, term);
    const dataset2Match4: Dataset = dataset2.match(term, term, term);
    const dataset2Match5: Dataset = dataset2.match(term, term, term, term);
    const dataset2Reduce1: string = dataset2.reduce(quadReduceToStringIteratee);
    const dataset2Reduce2: boolean[] = dataset2.reduce(quadReduceToArrayIteratee, []);
    const dataset2Reduce3: string = dataset2.reduce(quadReduceToStringIteratee, '');
    const dataset2Some: boolean = dataset2.some(quadFilterIteratee);
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
    const dataset4Every: boolean = dataset4.every(quadFilterIteratee);
    const dataset4Filter: Dataset<QuadBnode> = dataset4.filter(quadFilterIteratee);
    dataset4.forEach(quadForEachIteratee);
    const dataset4Has: boolean = dataset4.has(quadBnode);
    const dataset4Import: Promise<Dataset<QuadBnode>> = dataset4.import(stream2);
    const dataset4Intersection: Dataset<QuadBnode> = dataset4.intersection(dataset3);
    const dataset4Map: Dataset<QuadBnode> = dataset4.map(quadMapIteratee);
    const dataset4Match1: Dataset<QuadBnode> = dataset4.match();
    const dataset4Match2: Dataset<QuadBnode> = dataset4.match(term);
    const dataset4Match3: Dataset<QuadBnode> = dataset4.match(term, term);
    const dataset4Match4: Dataset<QuadBnode> = dataset4.match(term, term, term);
    const dataset4Match5: Dataset<QuadBnode> = dataset4.match(term, term, term, term);
    const dataset4Reduce1: string = dataset4.reduce(quadReduceToStringIteratee);
    const dataset4Reduce2: boolean[] = dataset4.reduce(quadReduceToArrayIteratee, []);
    const dataset4Reduce3: string = dataset4.reduce(quadReduceToStringIteratee, '');
    const dataset4Reduce4: string = dataset4.reduce(quadReduceToStringIteratee);
    const dataset4Reduce5: string = dataset4.reduce(quadReduceToStringIteratee, '');
    const dataset4Some: boolean = dataset4.some(quadFilterIteratee);
    const dataset4ToArray: QuadBnode[] = dataset4.toArray();
    const dataset4ToCanonical: string = dataset4.toCanonical();
    const dataset4ToStream: Stream<QuadBnode> = dataset4.toStream();
    const dataset4ToString: string = dataset4.toString();
    const dataset4Union: Dataset<QuadBnode> = dataset4.union(dataset3);
    const dataset4Iterable: Iterable<QuadBnode> = dataset4;
    const dataset4Core: DatasetCore<QuadBnode> = dataset4;
}

function test_datasetCoreFactory_covariance() {
    const quad: BaseQuad = <any> {};
    const factory: DatasetCoreFactory<Quad, BaseQuad> = <any> {};

    const fromQuads = factory.dataset([quad, quad]);
}

function test_datasetFactory_covariance() {
    const quad: BaseQuad = <any> {};
    const dataset: Dataset = <any> {};
    const factory: DatasetFactory<Quad, BaseQuad> = <any> {};

    const fromQuads = factory.dataset([quad, quad]);
    const fromDataset = factory.dataset(dataset);
}

async function test_dataset_covariance(): Promise<Dataset> {
    const quad: Quad = <any> {};
    const dataset: Dataset = <any> {};

    // rdf-ext-like quad
    interface QuadExt extends Quad {
        toCanonical(): string;
    }
    let datasetExt: Dataset<QuadExt, Quad> = <any> {};

    // stream coming from a generic parser
    const stream: Stream = <any> {};

    datasetExt = datasetExt.add(quad);
    datasetExt = datasetExt.delete(quad);
    datasetExt = datasetExt.addAll([quad, quad]);
    datasetExt = datasetExt.addAll(dataset);
    datasetExt.contains(dataset);
    datasetExt = datasetExt.difference(dataset);
    datasetExt.equals(dataset);
    datasetExt.has(quad);
    datasetExt.intersection(dataset);
    datasetExt.union(dataset);
    return datasetExt.import(stream);
}

class DatasetCoreExt implements DatasetCore {
    size: number;

    add(): this {
        throw new Error("Method not implemented.");
    }

    delete(): this {
        throw new Error("Method not implemented.");
    }

    has(): boolean {
        throw new Error("Method not implemented.");
    }

    match(): DatasetCore<Quad, Quad> {
        const newInstance: DatasetCoreExt = <any> {};
        return newInstance;
    }

    [Symbol.iterator](): Iterator<Quad> {
        throw new Error("Method not implemented.");
    }
}

class DatasetExt extends DatasetCoreExt implements Dataset {
    addAll(): this {
        throw new Error("Method not implemented.");
    }

    contains(): boolean {
        throw new Error("Method not implemented.");
    }

    deleteMatches(): this {
        throw new Error("Method not implemented.");
    }

    difference(): Dataset<Quad, Quad> {
        const newInstance: DatasetExt = <any> {};
        return newInstance;
    }

    equals(): boolean {
        throw new Error("Method not implemented.");
    }

    every(): boolean {
        throw new Error("Method not implemented.");
    }

    filter(): Dataset<Quad, Quad> {
        const newInstance: DatasetExt = <any> {};
        return newInstance;
    }

    forEach(): void {
        throw new Error("Method not implemented.");
    }

    import(): Promise<this> {
        throw new Error("Method not implemented.");
    }

    intersection(): this {
        throw new Error("Method not implemented.");
    }

    map(): Dataset<Quad, Quad> {
        const newInstance: DatasetExt = <any> {};
        return newInstance;
    }

    match(): Dataset<Quad, Quad> {
        const newInstance: DatasetExt = <any> {};
        return newInstance;
    }

    reduce(): any {
        throw new Error("Method not implemented.");
    }

    some(): boolean {
        throw new Error("Method not implemented.");
    }

    toArray(): Quad[] {
        throw new Error("Method not implemented.");
    }

    toCanonical(): string {
        throw new Error("Method not implemented.");
    }

    toStream(): Stream {
        throw new Error("Method not implemented.");
    }

    toString(): string {
        throw new Error("Method not implemented.");
    }

    union(): Dataset<Quad, Quad> {
        const newInstance: DatasetExt = <any> {};
        return newInstance;
    }
}

function testInheritance() {
    const datasetCoreExt: DatasetCoreExt = new DatasetCoreExt();
    const datasetCoreMatch: DatasetCore = datasetCoreExt.match();

    const datasetExt: DatasetExt = new DatasetExt();
    const datasetMatch: Dataset = datasetExt.match();
    const datasetMap: Dataset = datasetExt.map();
    const datasetUnion: Dataset = datasetExt.union();
    const datasetFilter: Dataset = datasetExt.filter();
    const datasetDifference: Dataset = datasetExt.difference();
}
