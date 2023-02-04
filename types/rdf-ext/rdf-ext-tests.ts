import * as RDF from '@rdfjs/types';
import $rdf from 'rdf-ext';
import * as clownface from 'clownface';
import { DatasetExt } from 'rdf-ext/lib/dataset';
import NamedNodeExt from "rdf-ext/lib/NamedNode";
import QuadExt from "rdf-ext/lib/Quad";

function testDataFactory() {
    const namedNode = $rdf.namedNode('foo'); // $ExpectType NamedNodeExt<"foo">
    const literal = $rdf.literal('foo'); // $ExpectType LiteralExt
    const variable = $rdf.variable('foo'); // $ExpectType VariableExt
    let blankNode = $rdf.blankNode();  // $ExpectType BlankNodeExt
    blankNode = $rdf.blankNode('b1');
    const quad = $rdf.quad(blankNode, namedNode, literal); // $ExpectType QuadExt

    const originalNamedNode: RDF.NamedNode = <any> {};
    const fromNamed: NamedNodeExt = $rdf.fromTerm(originalNamedNode);
    const originalQuad: RDF.Quad = <any> {};
    const fromQuad: QuadExt = $rdf.fromQuad(originalQuad);
}

function testDatasetFactory() {
    const emptyDataset: DatasetExt = $rdf.dataset();

    const quad: RDF.Quad = <any> {};
    const datasetWithQuads: DatasetExt = $rdf.dataset([ quad, quad, quad ]);

    const graph: RDF.NamedNode | RDF.DefaultGraph = <any> {};
    const datasetWithQuadsInGraph: DatasetExt = $rdf.dataset([ quad, quad, quad ], graph);
}

type DatasetFoo = RDF.DatasetCore & {
    foo: 'bar'
};

function testClownface() {
    const anyPointer = $rdf.clownface();
    anyPointer.dataset; // $ExpectType DatasetExt

    const dataset: DatasetFoo = <any> {};
    const anyPointerExistingDataset = $rdf.clownface({ dataset });
    anyPointerExistingDataset.dataset; // $ExpectType DatasetFoo

    const namedNode = $rdf.clownface({ term: $rdf.namedNode('foo') });
    namedNode.dataset; // $ExpectType DatasetExt

    const namedNodes = $rdf.clownface({ term: [$rdf.namedNode('foo'), $rdf.namedNode('bar')] });
    namedNodes.dataset; // $ExpectType DatasetExt

    const other: clownface.MultiPointer<RDF.NamedNode | RDF.BlankNode, DatasetFoo> = <any> {};
    const fromOther = $rdf.clownface(other);
    fromOther.dataset; // $ExpectType DatasetFoo
}

async function testFetch() {
    const formats: any = <any> {};
    const res = await $rdf.fetch('foo');
    const stream: RDF.Stream = await res.quadStream();
    const dataset: RDF.DatasetCore = await res.dataset();
}

function testFormats() {
    const { parsers, serializers } = $rdf.formats;
}

function testNamespace() {
    const schema = $rdf.namespace('http://schema.org/');
    const typedNs = $rdf.namespace<'foo' | 'bar'>('http://schema.org/');

    const { foo, bar } = typedNs;
    // @ts-expect-error
    const baz = typedNs.baz;
}

function termSetMapFactoryTest() {
    const map = $rdf.termMap();
    const set = $rdf.termSet();
}

function testPrefixMap() {
    const prefixMap = $rdf.prefixMap();
}
