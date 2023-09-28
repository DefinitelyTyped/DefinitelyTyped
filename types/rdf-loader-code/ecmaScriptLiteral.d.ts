import { Loader } from "rdf-loaders-registry";
import LoaderRegistry = require("rdf-loaders-registry");

interface Options {
    variables?: Map<string, any> | undefined;
    context?: unknown | undefined;
}

type EcmaScriptLiteralLoader = Loader<string, Options> & {
    register(registry: LoaderRegistry): void;
};

declare const loader: EcmaScriptLiteralLoader;

export = loader;
