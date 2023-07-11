import TermMap from '@rdfjs/term-map';
import Factory from '@rdfjs/term-map/Factory';
import { Term, Literal, BlankNode, NamedNode } from '@rdfjs/types';
import Environment from '@rdfjs/environment/Environment.js';

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

class FooFactory {
    init() {}
}

const exports: ['termMap'] = Factory.exports;
const factory = new Environment([Factory, FooFactory]);
let fromFactory: Map<NamedNode, number> = factory.termMap();
fromFactory = factory.termMap([
    [named, 5]
]);
