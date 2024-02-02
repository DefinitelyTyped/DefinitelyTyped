import TermSet from "@rdfjs/term-set";
import Factory from "@rdfjs/term-set/Factory";
import { NamedNode, Term } from "@rdfjs/types";

const type1: Term = <any> {};
const type2: Term = <any> {};
const namedNode: NamedNode = <any> {};

const set: Set<Term> = new TermSet([type1, type2]);

const exports: ["termSet"] = Factory.exports;
const fromFactory: Set<Term> = new Factory().termSet([type1, type2]);

function testHas() {
    const set = new TermSet<NamedNode>();
    const hasTerm: boolean = set.has(type1);
    const hasNamedNode: boolean = set.has(namedNode);
}
