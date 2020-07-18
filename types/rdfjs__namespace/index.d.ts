// Type definitions for @rdfjs/namespace 1.1
// Project: https://github.com/rdfjs-base/namespace
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { DataFactory, NamedNode } from 'rdf-js';

declare function namespace(baseIRI: string, options?: namespace.BuilderOptions): namespace.NamespaceBuilder;

declare namespace namespace {
    interface NamespaceBuilder {
        (property?: TemplateStringsArray | string): NamedNode;

        readonly [property: string]: NamedNode;
    }

    interface BuilderOptions {
        factory?: DataFactory;
    }
}

export = namespace;
