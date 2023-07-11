import Environment from '@rdfjs/environment/Environment.js';
import TermSet from '@rdfjs/term-set';
import Factory from '@rdfjs/term-set/Factory';
import { Term } from '@rdfjs/types';

const type1: Term = <any> {};
const type2: Term = <any> {};

const set: Set<Term> = new TermSet([type1, type2]);

class FooFactory {
    init() {}
}

const env = new Environment([Factory, FooFactory]);

const exports: ['termSet'] = Factory.exports;
const fromFactory: Set<Term> = env.termSet([type1, type2]);
