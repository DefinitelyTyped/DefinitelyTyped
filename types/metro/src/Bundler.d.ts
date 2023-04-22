import type { TransformResultWithSource } from './DeltaBundler';
import type { TransformOptions } from './DeltaBundler/Worker';
import type DependencyGraph from './node-haste/DependencyGraph';
import type { ConfigT } from 'metro-config';
import type { EventEmitter } from 'events';

export interface BundlerOptions {
    readonly hasReducedPerformance?: boolean;
    readonly watch?: boolean;
}

export default class Bundler {
    constructor(config: ConfigT, options?: BundlerOptions);

    getWatcher(): EventEmitter;

    end(): Promise<void>;

    getDependencyGraph(): Promise<DependencyGraph>;

    transformFile(
        filePath: string,
        transformOptions: TransformOptions,
        /** Optionally provide the file contents, this can be used to provide virtual contents for a file. */
        fileBuffer?: Buffer,
    ): Promise<TransformResultWithSource<void>>;

    ready(): Promise<void>;
}
