import * as RDF from 'rdf-js';
import rdf = require('@rdfjs/dataset');

const dataset: RDF.DatasetCore = rdf.dataset();
const literal: RDF.Literal = rdf.literal('foo');
const blankNode: RDF.BlankNode = rdf.blankNode('foo');
const variable: RDF.Variable = rdf.variable('foo');
const graph: RDF.DefaultGraph = rdf.defaultGraph();
const defaultGraph: RDF.DefaultGraph = rdf.defaultGraphInstance;
const namedNode: RDF.NamedNode = rdf.namedNode('foo');
const triple: RDF.Triple = rdf.triple(namedNode, variable, literal);
const quad: RDF.Quad = rdf.quad(namedNode, variable, literal, graph);
