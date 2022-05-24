// Type definitions for @rdfjs/namespace 2.0
// Project: https://github.com/rdfjs-base/namespace
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { DataFactory, NamedNode } from 'rdf-js';

export type NamespaceBuilder<TermNames extends string = any> = Record<TermNames, NamedNode> & {
    (property?: TemplateStringsArray | TermNames): NamedNode;
};

export interface BuilderOptions {
    factory?: DataFactory | undefined;
}

// tslint:disable-next-line: no-unnecessary-generics
export default function namespace<TermNames extends string = string>(baseIRI: string, options?: BuilderOptions): NamespaceBuilder<TermNames>;
