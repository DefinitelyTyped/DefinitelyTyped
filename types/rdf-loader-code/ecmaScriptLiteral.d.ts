import { Loader } from 'rdf-loaders-registry';
import LoaderRegistry = require('rdf-loaders-registry');

interface Options {
    variables?: Map<string, any>;
    context?: unknown;
}

type EcmaScriptLiteralLoader = Loader<string, Options> & {
    register(registry: LoaderRegistry): void;
};

declare const loader: EcmaScriptLiteralLoader;

export = loader;
