// Type definitions for @rdfjs/namespace 2.0
// Project: https://github.com/rdfjs-base/namespace
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
//                 Jesse Wright <https://github.com/jeswr>
//                 tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { DataFactory, NamedNode } from "@rdfjs/types";

export type NamespaceBuilder<TermNames extends string = any> = Record<TermNames, NamedNode> & {
    (property?: TemplateStringsArray | TermNames): NamedNode;
};

export interface BuilderOptions {
    factory?: DataFactory | undefined;
}

export default function namespace<TermNames extends string = string>(
    baseIRI: string,
    options?: BuilderOptions,
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
): NamespaceBuilder<TermNames>;
