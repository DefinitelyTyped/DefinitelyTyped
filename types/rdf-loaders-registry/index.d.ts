// Type definitions for rdf-loaders-registry 0.2
// Project: https://github.com/zazuko/rdf-loaders-registry
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

import { NamedNode } from 'rdf-js';
import { GraphPointer } from 'clownface';

declare namespace LoaderRegistry {
    type LoadOptions<T extends Record<string, any> = {}> = T & {
        loaderRegistry: LoaderRegistry;
    };

    interface Loader<T, TOptions = {}> {
        (node: GraphPointer, options: LoadOptions<TOptions>): T | Promise<T>;
    }
}

declare class LoaderRegistry {
    _literalLoaders: Map<string, any>;
    _nodeLoaders: Map<string, any>;

    registerLiteralLoader(datatype: string | NamedNode, loader: LoaderRegistry.Loader<any, any>): void;
    registerNodeLoader(type: string | NamedNode, loader: LoaderRegistry.Loader<any, any>): void;
    load<
        T extends any = unknown,
        // tslint:disable-next-line:no-unnecessary-generics
        TLoader extends LoaderRegistry.Loader<T, TOptions> = LoaderRegistry.Loader<T>,
        TOptions = TLoader extends LoaderRegistry.Loader<T, infer U> ? U : {}>(
            node: GraphPointer,
            options?: TOptions): Promise<T | null>;
    loader(node: GraphPointer): LoaderRegistry.Loader<any, any> | null;
}

export = LoaderRegistry;
