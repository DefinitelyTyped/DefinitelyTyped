import { GraphPointer } from "clownface";
import { NamedNode } from "rdf-js";

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
            // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
            TLoader extends Loader<T, TOptions> = Loader<T>,
            TOptions extends Record<string, any> = TLoader extends Loader<T, infer U> ? U : {},
        >(
            node: GraphPointer,
            options?: TOptions,
        ): Promise<T> | T | undefined;
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
