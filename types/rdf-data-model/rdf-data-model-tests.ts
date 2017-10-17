import * as RDF from "rdf-js";
import { BlankNode, DataFactory, DefaultGraph, Literal, NamedNode, Quad, Variable } from "rdf-data-model";
import { EventEmitter } from "events";

function test_terms() {
    // Only types are checked in this tests,
    // so this does not have to be functional.
    const someTerm: RDF.Term = <any> {};

    const namedNode: RDF.NamedNode = new NamedNode('http://example.org');
    const tt1: string = namedNode.termType;
    const v1: string = namedNode.value;
    const b1: boolean = namedNode.equals(someTerm);

    const blankNode1: RDF.BlankNode = new BlankNode();
    const blankNode2: RDF.BlankNode = new BlankNode('b100');
    const tt2: string = blankNode1.termType;
    const v2: string = blankNode1.value;
    const b2: boolean = blankNode1.equals(someTerm);

    const literal1: RDF.Literal = new Literal('abc', 'en-us');
    const literal2: RDF.Literal = new Literal('abc', 'en-us', namedNode);
    const literal3: RDF.Literal = new Literal('abc', undefined, namedNode);
    const tt3: string = literal1.termType;
    const v3: string = literal1.value;
    const lang: string = literal1.language;
    const datatype: RDF.NamedNode = literal1.datatype;
    const b3: boolean = literal1.equals(someTerm);

    const variable: RDF.Variable = new Variable('myvar');
    const tt4: string = variable.termType;
    const v4: string = variable.value;
    const b4: boolean = variable.equals(someTerm);

    const defaultGraph: RDF.DefaultGraph = new DefaultGraph();
    const tt5: string = defaultGraph.termType;
    const v5: string = defaultGraph.value;
    const b5: boolean = defaultGraph.equals(someTerm);

    const quad: RDF.Quad = new Quad(namedNode, namedNode, namedNode, namedNode);
    const s: RDF.Term = quad.subject;
    const p: RDF.Term = quad.predicate;
    const o: RDF.Term = quad.object;
    const g: RDF.Term = quad.graph;
    const b: boolean = quad.equals(new Quad(namedNode, namedNode, namedNode));
}

function test_datafactory() {
    const dataFactory: RDF.DataFactory = new DataFactory();

    const namedNode: RDF.NamedNode = dataFactory.namedNode('http://example.org');

    const blankNode1: RDF.BlankNode = dataFactory.blankNode('b1');
    const blankNode2: RDF.BlankNode = dataFactory.blankNode();

    const literal1: RDF.Literal = dataFactory.literal('abc');
    const literal2: RDF.Literal = dataFactory.literal('abc', 'en-us');
    const literal3: RDF.Literal = dataFactory.literal('abc', namedNode);

    const variable: RDF.Variable = dataFactory.variable ? dataFactory.variable('v1') : new Variable('myvar');

    const term: RDF.Term = <any> {};
    const triple: RDF.Quad = dataFactory.triple(term, term, term);
    const quad: RDF.Quad = dataFactory.quad(term, term, term, term);
}
