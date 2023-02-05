import { NamespaceBuilder } from '.';

export interface NamespaceFactory {
    namespace<TermNames extends string = any>(baseIRI: string): NamespaceBuilder<TermNames>;
}

interface NamespaceFactoryCtor {
    new(): NamespaceFactory;
    exports: ['namespace'];
}

declare const namespaceFactory: NamespaceFactoryCtor;

export default namespaceFactory;
