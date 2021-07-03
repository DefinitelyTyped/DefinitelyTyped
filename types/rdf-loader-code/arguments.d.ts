import { Loader } from 'rdf-loaders-registry';
import { NamedNode } from 'rdf-js';
import LoaderRegistry = require('rdf-loaders-registry');

interface Options {
    property?: NamedNode;
    context?: any;
    variables?: Map<string, any>;
    basePath?: string;
}

declare namespace loader {
    type Arguments = unknown[] | [Record<string, any>];
}

type ArgumentsLoader = Loader<loader.Arguments, Options> & {
    register(registry: LoaderRegistry): void;
};

declare const loader: ArgumentsLoader;
export = loader;
