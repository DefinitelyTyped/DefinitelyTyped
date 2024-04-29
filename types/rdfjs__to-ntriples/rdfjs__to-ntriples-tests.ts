import toNT from "@rdfjs/to-ntriples";
import blankNode from "@rdfjs/to-ntriples/lib/blankNode.js";
import dataset from "@rdfjs/to-ntriples/lib/dataset.js";
import defaultGraph from "@rdfjs/to-ntriples/lib/defaultGraph.js";
import namedNode from "@rdfjs/to-ntriples/lib/namedNode.js";
import quad from "@rdfjs/to-ntriples/lib/quad.js";
import variable from "@rdfjs/to-ntriples/lib/variable.js";
import * as RDF from "@rdfjs/types";

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
ntString = toNT([rdfBlankNode, rdfNamedNode, rdfQuad]);
ntString = toNT(rdfQuad);
ntString = toNT(rdfTerm);
