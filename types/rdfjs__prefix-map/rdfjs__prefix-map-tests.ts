import Environment from "@rdfjs/environment/Environment";
import PrefixMapFactory from "@rdfjs/prefix-map/Factory";
import { NamedNode } from "@rdfjs/types";

const term: NamedNode = <any> {};

const environment = new Environment([PrefixMapFactory]);
const prefixMap = environment.prefixMap([
    ["schema", term],
]);

const termShort: NamedNode = prefixMap.shrink(term);
const termLong: NamedNode = prefixMap.resolve(term);
