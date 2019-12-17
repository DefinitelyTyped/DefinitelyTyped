import { DataFactory, NamedNode } from 'rdf-js';

declare function namespace(baseIRI: string, options?: namespace.BuilderOptions): namespace.NamespaceBuilder;

declare namespace namespace {
    interface NamespaceBuilder {
        (property: TemplateStringsArray | string): NamedNode;

        readonly [property: string]: NamedNode;
    }

    interface BuilderOptions {
        factory?: DataFactory;
    }
}

export = namespace;
