import * as RDF from 'rdf-js';
import rdf = require('@rdfjs/dataset');

let dataset: RDF.DatasetCore = rdf.dataset();
const literal: RDF.Literal = rdf.literal('foo');
const blankNode: RDF.BlankNode = rdf.blankNode('foo');
const variable: RDF.Variable = rdf.variable('foo');
const graph: RDF.DefaultGraph = rdf.defaultGraph();
const defaultGraph: RDF.DefaultGraph = rdf.defaultGraphInstance;
const namedNode: RDF.NamedNode = rdf.namedNode('foo');
const triple: RDF.Quad = rdf.quad(namedNode, variable, literal);
const quad: RDF.Quad = rdf.quad(namedNode, variable, literal, graph);

dataset = rdf.dataset([quad]);

interface CustomQuad extends RDF.BaseQuad {
    foo: string;
}

const customQuad: CustomQuad = <any> {};
const customQuadDataset: RDF.DatasetCore<RDF.Quad, CustomQuad> = rdf.dataset([customQuad]);
