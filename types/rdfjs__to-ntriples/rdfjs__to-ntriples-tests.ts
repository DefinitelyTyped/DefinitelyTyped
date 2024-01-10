import * as RDF from "@rdfjs/types";
import toNT = require("@rdfjs/to-ntriples");
import blankNode = require("@rdfjs/to-ntriples/lib/blankNode");
import defaultGraph = require("@rdfjs/to-ntriples/lib/defaultGraph");
import namedNode = require("@rdfjs/to-ntriples/lib/namedNode");
import variable = require("@rdfjs/to-ntriples/lib/variable");
import quad = require("@rdfjs/to-ntriples/lib/quad");
import dataset = require("@rdfjs/to-ntriples/lib/dataset");
import term = require("@rdfjs/to-ntriples/lib/term");

const rdfBlankNode: RDF.BlankNode = <any> {};
const rdfDefaultGraph: RDF.DefaultGraph = <any> {};
const rdfNamedNode: RDF.NamedNode = <any> {};
const rdfVariable: RDF.Variable = <any> {};
const rdfQuad: RDF.Quad = <any> {};
const rdfDataset: RDF.DatasetCore = <any> {};
const rdfTerm: RDF.Term = <any> {};

const blankNodeString: string = blankNode(rdfBlankNode);
const defaultGraphString: string = defaultGraph();
const namedNodeString: string = namedNode(rdfNamedNode);
const variableString: string = variable(rdfVariable);
const quadString: string = quad(rdfQuad, toNT);
const datasetString: string = dataset(rdfDataset, toNT);

let ntString: string;
ntString = toNT(rdfBlankNode);
ntString = toNT(rdfDefaultGraph);
ntString = toNT(rdfNamedNode);
ntString = toNT(rdfVariable);
ntString = toNT(rdfDataset);
ntString = toNT(rdfQuad);
ntString = toNT(rdfTerm);
