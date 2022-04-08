// Type definitions for @rdfjs/namespace 1.1
// Project: https://github.com/rdfjs-base/namespace
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { DataFactory, NamedNode } from 'rdf-js';

// tslint:disable-next-line: no-unnecessary-generics
declare function namespace<TermNames extends string = string>(baseIRI: string, options?: namespace.BuilderOptions): namespace.NamespaceBuilder<TermNames>;

declare namespace namespace {
    type NamespaceBuilder<TermNames extends string = any> = Record<TermNames, NamedNode> & {
        (property?: TemplateStringsArray | TermNames): NamedNode;
    };

    interface BuilderOptions {
        factory?: DataFactory;
    }
}

export = namespace;
