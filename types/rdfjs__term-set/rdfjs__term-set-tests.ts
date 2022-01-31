import TermSet from '@rdfjs/term-set';
import Factory from '@rdfjs/term-set/Factory';
import { Term } from 'rdf-js';

const type1: Term = <any> {};
const type2: Term = <any> {};

const set: Set<Term> = new TermSet([type1, type2]);

const exports: ['termSet'] = Factory.exports;
const fromFactory: Set<Term> = new Factory().termSet([type1, type2]);
