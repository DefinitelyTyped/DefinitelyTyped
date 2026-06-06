import { NamespaceBuilder } from "./index.js";

export interface NamespaceFactory {
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    namespace<TermNames extends string = any>(baseIRI: string): NamespaceBuilder<TermNames>;
}

interface NamespaceFactoryCtor {
    new(): NamespaceFactory;
    exports: ["namespace"];
}

declare const namespaceFactory: NamespaceFactoryCtor;

export default namespaceFactory;
