import * as RDF from 'rdf-js';
import toNtriples = require('@rdfjs/to-ntriples');
import blankNode = require('@rdfjs/to-ntriples/lib/blankNode');
import defaultGraph = require('@rdfjs/to-ntriples/lib/defaultGraph');
import namedNode = require('@rdfjs/to-ntriples/lib/namedNode');
import variable = require('@rdfjs/to-ntriples/lib/variable');

const rdfBlankNode: RDF.BlankNode = <any> {};
const rdfDefaultGraph: RDF.DefaultGraph = <any> {};
const rdfNamedNode: RDF.NamedNode = <any> {};
const rdfVariable: RDF.Variable = <any> {};
const rdfQuad: RDF.Quad = <any> {};

const blankNodeString: string = blankNode(rdfBlankNode);
let defaultGraphString: string = defaultGraph();
defaultGraphString = defaultGraph(rdfDefaultGraph);
const namedNodeString: string = namedNode(rdfNamedNode);
const variableString: string = variable(rdfVariable);
const quadString: string = toNtriples.quadToNTriples(rdfQuad);

let termString: string;
termString = toNtriples.termToNTriples(rdfBlankNode);
termString = toNtriples.termToNTriples(rdfDefaultGraph);
termString = toNtriples.termToNTriples(rdfNamedNode);
termString = toNtriples.termToNTriples(rdfVariable);

const notTermString: undefined = toNtriples.termToNTriples({ termType: 'foo' });
