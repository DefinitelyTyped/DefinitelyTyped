import TermSet = require('@rdfjs/term-set');
import { Term } from 'rdf-js';

const type1: Term = <any> {};
const type2: Term = <any> {};

const set: Set<Term> = new TermSet([type1, type2]);
