// Type definitions for @rdfjs/namespace 1.1
// Project: https://github.com/rdfjs-base/namespace
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { BaseQuad, DataFactory, NamedNode, Quad } from 'rdf-js';

declare function namespace(baseIRI: string, options?: namespace.BuilderOptions): namespace.NamespaceBuilder;

declare namespace namespace {
    interface NamespaceBuilder {
        (property?: TemplateStringsArray | string): NamedNode;

        readonly [property: string]: NamedNode;
    }

    interface BuilderOptions<Q extends BaseQuad = Quad> {
        factory?: DataFactory<Q>;
    }
}

export = namespace;
