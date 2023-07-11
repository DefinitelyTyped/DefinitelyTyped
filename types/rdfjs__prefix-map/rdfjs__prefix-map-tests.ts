import { NamedNode } from '@rdfjs/types';
import Environment from '@rdfjs/environment/Environment';
import PrefixMapFactory from '@rdfjs/prefix-map/Factory';

const term: NamedNode = <any> {};

class FooFactory {
    init() {}
}

const environment = new Environment([PrefixMapFactory, FooFactory]);
const prefixMap = environment.prefixMap([
    ['schema', term]
]);

const termShort: NamedNode = prefixMap.shrink(term);
const termLong: NamedNode = prefixMap.resolve(term);
