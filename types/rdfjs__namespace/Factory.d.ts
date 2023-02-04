import { NamespaceBuilder } from '.';

export interface NamespaceFactory {
    exports: ['namespace'];
    namespace<TermNames extends string = any>(baseIRI: string): NamespaceBuilder<TermNames>;
}

declare const namespaceFactory: NamespaceFactory;

export default namespaceFactory;
