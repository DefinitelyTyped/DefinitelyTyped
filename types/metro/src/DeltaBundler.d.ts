import type { DeltaResult, Graph, MixedOutput, Options, ReadOnlyGraph } from './DeltaBundler/types';
import type { EventEmitter } from 'events';

export type {
    DeltaResult,
    Graph,
    Dependencies,
    MixedOutput,
    Module,
    ReadOnlyGraph,
    TransformFn,
    TransformResult,
    TransformResultDependency,
    TransformResultWithSource,
} from './DeltaBundler/types';

export default class DeltaBundler<T = MixedOutput> {
    constructor(changeEventSource: EventEmitter);
    end(): void;
    getDependencies(entryPoints: ReadonlyArray<string>, options: Options<T>): Promise<ReadOnlyGraph<T>['dependencies']>;
    buildGraph(entryPoints: ReadonlyArray<string>, options: Options<T>): Promise<Graph<T>>;

    getDelta(
        graph: Graph<T>,
        {
            reset,
            shallow,
        }: {
            reset: boolean;
            shallow: boolean;
        },
    ): Promise<DeltaResult<T>>;

    listen(graph: Graph<T>, callback: () => Promise<void>): () => void;
    endGraph(graph: Graph<T>): void;
}
