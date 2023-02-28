import factory from "@rdfjs/data-model";
import Factory from "@rdfjs/data-model/Factory";
import * as RDF from "@rdfjs/types";

const exports: [
    'blankNode',
    'defaultGraph',
    'fromQuad',
    'fromTerm',
    'literal',
    'namedNode',
    'quad',
    'variable'
] = Factory.exports;

const fromCtor = new Factory();
const asFactory: RDF.DataFactory = fromCtor;
fromCtor.init();

const myQuad = factory.quad(
  factory.namedNode('http://example.org/subject'),
  factory.namedNode('http://example.org/predicate'),
  factory.namedNode('http://example.org/object'),
);

const myQuadWithLiteral = factory.quad(
  factory.namedNode('http://example.org/subject'),
  factory.namedNode('http://example.org/predicate'),
  factory.literal('34'),
);

const myQuadWithVariable = factory.quad(
  factory.namedNode('http://example.org/subject'),
  factory.namedNode('http://example.org/predicate'),
  factory.variable('?o'),
);

const myQuadWithGraph = factory.quad(
  factory.namedNode('http://example.org/subject'),
  factory.namedNode('http://example.org/predicate'),
  factory.namedNode('http://example.org/object'),
  factory.defaultGraph()
);

const myBaseQuad = factory.quad<RDF.BaseQuad>(
  factory.namedNode('http://example.org/subject'),
  factory.blankNode('34'),
  factory.namedNode('http://example.org/object'),
);

const myBaseQuadBad = factory.quad(
  factory.namedNode('http://example.org/subject'),
  // @ts-expect-error
  factory.blankNode('34'),
  factory.namedNode('http://example.org/object'),
);

const fromQuadValue = factory.fromQuad(myQuad);
const fromBaseQuadValue = factory.fromQuad(myBaseQuad);

// @ts-expect-error
factory.fromQuad(factory.variable('?o'));

const fromTermValue = factory.fromTerm(factory.variable('?o'));
