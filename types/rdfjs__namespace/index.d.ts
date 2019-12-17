import { DataFactory, NamedNode } from 'rdf-js';

declare function namespace(baseIRI: string, options?: namespace.BuilderOptions): namespace.NamespaceBuilder;

declare namespace namespace {

    export interface NamespaceBuilder {
        (property: TemplateStringsArray): NamedNode;

        (property: string): NamedNode;

        readonly [property: string]: NamedNode;
    }

    export interface BuilderOptions {
        factory?: DataFactory;
    }

}

export = namespace;
