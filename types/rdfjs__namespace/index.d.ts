import { DataFactory, NamedNode } from "@rdfjs/types";

export type NamespaceBuilder<TermNames extends string = any> = Record<TermNames, NamedNode> & {
    (property?: TemplateStringsArray | TermNames): NamedNode;
};

export interface BuilderOptions {
    factory?: DataFactory | undefined;
}

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export default function namespace<TermNames extends string = string>(
    baseIRI: string,
    options?: BuilderOptions,
): NamespaceBuilder<TermNames>;
