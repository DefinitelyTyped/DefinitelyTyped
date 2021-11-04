import TermMap = require('@rdfjs/term-map');
import { Term, Literal, BlankNode, NamedNode } from 'rdf-js';

const literal: Literal = <any> {};
const blank: BlankNode = <any> {};
const named: NamedNode = <any> {};

const anyTermMap: Map<Term, any> = new TermMap();
const value: any = anyTermMap.get(literal);

const initializedMap: Map<Term, number> = new TermMap([
    [literal, 1],
    [blank, 1]
]);

const specificKeyMap: Map<NamedNode, string> = new TermMap<NamedNode, string>([
    [named, 'foo']
]);
