import factory from '@rdfjs/data-model';
import * as RDF from '@rdfjs/types'

const myQuad: RDF.Quad = factory.quad(
  factory.namedNode('http://example.org/subject'),
  factory.namedNode('http://example.org/predicate'),
  factory.namedNode('http://example.org/object'),
)

const myQuadWithLiteral: RDF.Quad = factory.quad(
  factory.namedNode('http://example.org/subject'),
  factory.namedNode('http://example.org/predicate'),
  factory.literal(34),
)

const myQuadWithVariable: RDF.Quad = factory.quad(
  factory.namedNode('http://example.org/subject'),
  factory.namedNode('http://example.org/predicate'),
  factory.variable('?o'),
)

const myQuadWithGraph: RDF.Quad = factory.quad(
  factory.namedNode('http://example.org/subject'),
  factory.namedNode('http://example.org/predicate'),
  factory.namedNode('http://example.org/object'),
  factory.defaultGraph()
)

const myBaseQuad: RDF.BaseQuad = factory.quad<RDF.BaseQuad>(
  factory.namedNode('http://example.org/subject'),
  factory.blankNode('34'),
  factory.namedNode('http://example.org/object'),
)

// @ts-expect-error
const myBaseQuadBad: RDF.Quad = factory.quad<RDF.Quad>(
  factory.namedNode('http://example.org/subject'),
  factory.blankNode('34'),
  factory.namedNode('http://example.org/object'),
)

const fromQuadValue: RDF.Quad = factory.fromQuad(myQuad);
const fromBaseQuadValue: RDF.BaseQuad = factory.fromQuad(myBaseQuad);

// @ts-expect-error
factory.fromQuad(factory.variable('?o'))

const fromTermValue: RDF.Variable = factory.fromQuad(factory.variable('?o'));
