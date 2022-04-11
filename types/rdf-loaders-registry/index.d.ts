// Type definitions for rdf-loaders-registry 0.3
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

    interface Loader<T, TOptions extends Record<string, any> = {}> {
        (node: GraphPointer, options: LoadOptions<TOptions>): T | Promise<T>;
    }

    interface LoaderRegistry {
        registerLiteralLoader(datatype: string | NamedNode, loader: Loader<any, any>): void;
        registerNodeLoader(type: string | NamedNode, loader: Loader<any, any>): void;
        load<
            T extends any = unknown,
            // tslint:disable-next-line:no-unnecessary-generics
            TLoader extends Loader<T, TOptions> = Loader<T>,
            TOptions extends Record<string, any> = TLoader extends Loader<T, infer U> ? U : {}>(
                node: GraphPointer,
                options?: TOptions): Promise<T> | T | undefined;
        loader(node: GraphPointer): Loader<any, any> | null;
    }
}

// tslint:disable-next-line no-empty-interface
interface LoaderRegistry extends LoaderRegistry.LoaderRegistry {
}

declare class LoaderRegistry {
    _literalLoaders: Map<string, any>;
    _nodeLoaders: Map<string, any>;
}

export = LoaderRegistry;
