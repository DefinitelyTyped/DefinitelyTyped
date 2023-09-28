import { NamedNode } from "rdf-js";
import { Loader } from "rdf-loaders-registry";
import LoaderRegistry = require("rdf-loaders-registry");

interface Options {
    property?: NamedNode | undefined;
    context?: any;
    variables?: Map<string, any> | undefined;
    basePath?: string | undefined;
}

declare namespace loader {
    type Arguments = unknown[] | [Record<string, any>];
}

type ArgumentsLoader = Loader<loader.Arguments, Options> & {
    register(registry: LoaderRegistry): void;
};

declare const loader: ArgumentsLoader;
export = loader;
