import { NamedNode, Quad, Term } from 'rdf-js';
import validateDatatype = require('rdf-validate-datatype');

const { validateTerm, validateQuad, validators } = validateDatatype;

const term: Term = <any> {};
const quad: Quad = <any> {};
const named: NamedNode = <any> {};

validators.register(named, (value: string) => true);

let func = validators.find(named);
func = validators.find(null);
func = validators.find(undefined);

if (func) {
    const isValid: boolean = func('foo');
}

const termIsValid: boolean = validateTerm(term);
const quadIsValid: boolean = validateQuad(quad);
