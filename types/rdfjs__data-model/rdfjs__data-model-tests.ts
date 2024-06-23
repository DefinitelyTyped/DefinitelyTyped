import factory from "@rdfjs/data-model";
import Factory from "@rdfjs/data-model/Factory.js";
import BlankNode from "@rdfjs/data-model/lib/BlankNode.js";
import DefaultGraph from "@rdfjs/data-model/lib/DefaultGraph.js";
import Literal from "@rdfjs/data-model/lib/Literal.js";
import NamedNode from "@rdfjs/data-model/lib/NamedNode.js";
import Quad from "@rdfjs/data-model/lib/Quad.js";
import Variable from "@rdfjs/data-model/lib/Variable.js";
import Environment from "@rdfjs/environment/Environment.js";
import * as RDF from "@rdfjs/types";

const exports: [
    "blankNode",
    "defaultGraph",
    "fromQuad",
    "fromTerm",
    "literal",
    "namedNode",
    "quad",
    "variable",
] = Factory.exports;

const blankNodeConstructed: RDF.BlankNode = new BlankNode("34");
const defaultGraphConstructed: RDF.DefaultGraph = new DefaultGraph();
let literalConstructed: RDF.Literal = new Literal("Apple");
literalConstructed = new Literal("Apfel", "de");
literalConstructed = new Literal("Apfel", undefined, factory.namedNode("http://example.org/fruit"));
const namedNodeConstructed: RDF.NamedNode = new NamedNode("http://example.org/subject");
const quadConstructed: RDF.BaseQuad = new Quad(
    blankNodeConstructed,
    namedNodeConstructed,
    literalConstructed,
    defaultGraphConstructed,
);
const variableConstructed: RDF.Variable = new Variable("?o");

const fromCtor = new Factory(); // $ExpectType DataFactory
const asFactory: RDF.DataFactory = fromCtor;
fromCtor.init();

const env = new Environment([Factory]); // $ExpectType Environment<DataFactory>

const myQuad = factory.quad(
    factory.namedNode("http://example.org/subject"),
    factory.namedNode("http://example.org/predicate"),
    factory.namedNode("http://example.org/object"),
);

const myQuadWithLiteral = factory.quad(
    factory.namedNode("http://example.org/subject"),
    factory.namedNode("http://example.org/predicate"),
    factory.literal("34"),
);

const myQuadWithVariable = factory.quad(
    factory.namedNode("http://example.org/subject"),
    factory.namedNode("http://example.org/predicate"),
    factory.variable("?o"),
);

const myQuadWithGraph = factory.quad(
    factory.namedNode("http://example.org/subject"),
    factory.namedNode("http://example.org/predicate"),
    factory.namedNode("http://example.org/object"),
    factory.defaultGraph(),
);

const myBaseQuad = factory.quad<RDF.BaseQuad>(
    factory.namedNode("http://example.org/subject"),
    factory.blankNode("34"),
    factory.namedNode("http://example.org/object"),
);

const myBaseQuadBad = factory.quad(
    factory.namedNode("http://example.org/subject"),
    // @ts-expect-error
    factory.blankNode("34"),
    factory.namedNode("http://example.org/object"),
);

// $ExpectType BaseQuad
const fromQuadValue = factory.fromQuad(myQuad);
// $ExpectType BaseQuad
const fromBaseQuadValue = factory.fromQuad(myBaseQuad);

// @ts-expect-error
factory.fromQuad(factory.variable("?o"));

// $ExpectType Variable
const fromTermValue = factory.fromTerm(factory.variable("?o"));

const baseQuad: RDF.BaseQuad = <any> {};
// $ExpectType BaseQuad
const fromTermBaseQuad = factory.fromTerm(baseQuad);
