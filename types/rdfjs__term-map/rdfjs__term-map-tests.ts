import TermMap from "@rdfjs/term-map";
import Factory from "@rdfjs/term-map/Factory";
import { BlankNode, Literal, NamedNode, Term } from "@rdfjs/types";

const literal: Literal = <any> {};
const blank: BlankNode = <any> {};
const named: NamedNode = <any> {};

const anyTermMap: Map<Term, any> = new TermMap();
const value: any = anyTermMap.get(literal);

const initializedMap: Map<Term, number> = new TermMap([
    [literal, 1],
    [blank, 1],
]);

const specificKeyMap: Map<NamedNode, string> = new TermMap<NamedNode, string>([
    [named, "foo"],
]);

const exports: ["termMap"] = Factory.exports;
const factory = new Factory();
let fromFactory: Map<NamedNode, number> = factory.termMap();
fromFactory = factory.termMap([
    [named, 5],
]);

function testHas() {
    const map = new TermMap<NamedNode, string>([
        [named, "foo"],
    ]);

    const hasNamed: boolean = map.has(named);
    const hasOther: boolean = map.has(blank);
}

function testGet() {
    const map = new TermMap<NamedNode, string>([
        [named, "foo"],
    ]);

    const gotNamed: string | undefined = map.get(named);
    const gotOther: string | undefined = map.get(blank);
}
