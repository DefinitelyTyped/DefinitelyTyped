import * as RDF from "rdf-js";
import * as DataFactory from "rdf-data-model";

function test_datafactory() {
    const namedNode: RDF.NamedNode = DataFactory.namedNode('http://example.org');

    const blankNode1: RDF.BlankNode = DataFactory.blankNode('b1');
    const blankNode2: RDF.BlankNode = DataFactory.blankNode();

    const literal1: RDF.Literal = DataFactory.literal('abc');
    const literal2: RDF.Literal = DataFactory.literal('abc', 'en-us');
    const literal3: RDF.Literal = DataFactory.literal('abc', namedNode);

    const variable: RDF.Variable = DataFactory.variable('v1');

    const defaultGraph1: RDF.DefaultGraph = DataFactory.defaultGraphInstance;
    const defaultGraph2: RDF.DefaultGraph = DataFactory.defaultGraph();

    const term: RDF.Term = <any> {};
    const triple: RDF.Quad = DataFactory.triple(term, term, term);
    const quad: RDF.Quad = DataFactory.quad(term, term, term, term);
}
