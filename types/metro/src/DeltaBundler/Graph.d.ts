import type { Dependencies, GraphInputOptions, MixedOutput, Module, Options, TransformInputOptions } from './types';

export interface Result<T> {
    added: Map<string, Module<T>>;
    modified: Map<string, Module<T>>;
    deleted: Set<string>;
}

export class Graph<T = MixedOutput> {
    entryPoints: ReadonlySet<string>;
    transformOptions: TransformInputOptions;
    dependencies: Dependencies<T>;
    constructor(options: GraphInputOptions);
    traverseDependencies(paths: ReadonlyArray<string>, options: Options<T>): Promise<Result<T>>;
    initialTraverseDependencies(options: Options<T>): Promise<Result<T>>;
    markModifiedContextModules(filePath: string, modifiedPaths: Set<string>): void;
}
