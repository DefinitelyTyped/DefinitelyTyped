import { Loader } from 'rdf-loaders-registry';
import LoaderRegistry = require('rdf-loaders-registry');

interface Options {
    basePath?: string;
}

type EcmaScriptModuleLoader = Loader<unknown, Options> & {
    register(registry: LoaderRegistry): void;
};

declare const loader: EcmaScriptModuleLoader;

export = loader;
