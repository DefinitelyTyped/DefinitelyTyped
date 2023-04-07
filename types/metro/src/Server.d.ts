import type { AssetData } from '../Asset';
import type { RamBundleInfo } from './DeltaBundler/Serializers/getRamBundleInfo';
import IncrementalBundler, { RevisionId } from './IncrementalBundler';
import type { GraphId } from './lib/getGraphId';
import type MultipartResponse from './Server/MultipartResponse';
import type { BundleOptions, GraphOptions, SplitBundleOptions } from '../shared/types';
import type { IncomingMessage, ServerResponse } from 'http';
import type { CustomTransformOptions, TransformProfile } from 'metro-babel-transformer';
import type { ConfigT, RootPerfLogger } from 'metro-config';
import type { CustomResolverOptions } from 'metro-resolver';

export interface SegmentLoadData {
    [index: number]: [number[], number | null];
}

export interface BundleMetadata {
    hash: string;
    otaBuildNumber: string | null;
    mobileConfigs: string[];
    segmentHashes: string[];
    segmentLoadData: SegmentLoadData;
}

export interface ProcessStartContext extends SplitBundleOptions {
    readonly buildNumber: number;
    readonly bundleOptions: BundleOptions;
    readonly graphId: GraphId;
    readonly graphOptions: GraphOptions;
    readonly mres: MultipartResponse | ServerResponse;
    readonly req: IncomingMessage;
    readonly revisionId?: RevisionId | null;
    readonly bundlePerfLogger: RootPerfLogger;
}

export interface ProcessDeleteContext {
    readonly graphId: GraphId;
    readonly req: IncomingMessage;
    readonly res: ServerResponse;
}

export interface ProcessEndContext<T> extends ProcessStartContext {
    readonly result: T;
}

export type ServerOptions = Readonly<{
    hasReducedPerformance?: boolean;
    onBundleBuilt?: (bundlePath: string) => void;
    watch?: boolean;
}>;

export interface DefaultGraphOptions {
    customResolverOptions: CustomResolverOptions;
    customTransformOptions: CustomTransformOptions;
    dev: boolean;
    hot: boolean;
    minify: boolean;
    runtimeBytecodeVersion?: number;
    unstable_transformProfile: TransformProfile;
}

export interface DefaultBundleOptions extends DefaultGraphOptions {
    excludeSource: false;
    inlineSourceMap: false;
    modulesOnly: false;
    onProgress: null;
    runModule: true;
    shallow: false;
    sourceMapUrl: null;
    sourceUrl: null;
}

export default class Server {
    static DEFAULT_GRAPH_OPTIONS: DefaultGraphOptions;
    static DEFAULT_BUNDLE_OPTIONS: BundleOptions;
    constructor(config: ConfigT, options?: ServerOptions);
    end(): void;
    getBundler(): IncrementalBundler;
    getCreateModuleId(): (path: string) => number;
    build(options: BundleOptions): Promise<{
        code: string;
        map: string;
    }>;
    getRamBundleInfo(options: BundleOptions): Promise<RamBundleInfo>;
    getAssets(options: BundleOptions): Promise<ReadonlyArray<AssetData>>;
    getOrderedDependencyPaths(options: {
        readonly dev: boolean;
        readonly entryFile: string;
        readonly minify: boolean;
        readonly platform: string;
    }): Promise<string[]>;
    processRequest(
        IncomingMessage: IncomingMessage,
        ServerResponse: ServerResponse,
        next: (e: Error | null) => unknown,
    ): void;
}
