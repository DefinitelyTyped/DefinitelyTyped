import { Loader } from 'rdf-loaders-registry';
import LoaderRegistry = require('rdf-loaders-registry');

interface Options {
    basePath?: string;
    context?: unknown;
}

type EcmaScriptLoader = Loader<unknown, Options> & {
    register(registry: LoaderRegistry): void;
};

declare const loader: EcmaScriptLoader;

export = loader;
