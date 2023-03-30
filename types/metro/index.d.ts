// Type definitions for metro 0.76
// Project: https://github.com/facebook/metro
// Definitions by: Adam Foxman <https://github.com/afoxman>
//                 Tommy Nguyen <https://github.com/tido64>
//                 Alex Hunt <https://github.com/huntie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export * from './Asset';
export * from './src/DeltaBundler/types';
export * from './ModuleGraph/worker/collectDependencies';
export * from './Server';
export * from './src/lib/reporting';

import type { Server as HttpServer } from 'http';
import type { Server as HttpsServer } from 'https';
import type { ConfigT, InputConfigT, loadConfig, Middleware } from 'metro-config';
import type { CustomTransformOptions } from 'metro-babel-transformer';
import type { ReadOnlyGraph } from './src/DeltaBundler/types';
import type { Server } from 'ws';
import Yargs = require('yargs');
import type { Server as MetroServer, ServerOptions } from './Server';
import type { OutputOptions, RequestOptions } from './shared/types';

export { HttpServer, HttpsServer };

interface MetroMiddleWare {
    attachHmrServer: (httpServer: HttpServer | HttpsServer) => void;
    end: () => void;
    metroServer: MetroServer;
    middleware: Middleware;
}

export interface RunMetroOptions extends ServerOptions {
    waitForBundler?: boolean;
}

export interface RunServerOptions {
    hasReducedPerformance?: boolean;
    host?: string;
    onError?: (error: Error & { code?: string }) => void;
    onReady?: (server: HttpServer | HttpsServer) => void;
    runInspectorProxy?: boolean;
    secureServerOptions?: Record<string, unknown>;

    /** @deprecated since version 0.61 */
    secure?: boolean;

    /** @deprecated since version 0.61 */
    secureCert?: string;

    /** @deprecated since version 0.61 */
    secureKey?: string;

    waitForBundler?: boolean;
    watch?: boolean;
    websocketEndpoints?: {
        [path: string]: Server;
    };
}

export interface RunBuildOptions {
    entry: string;
    dev?: boolean;
    out?: string;
    onBegin?: () => void;
    onComplete?: () => void;
    onProgress?: (transformedFileCount: number, totalFileCount: number) => void;
    minify?: boolean;
    output?: {
        build: (
            server: MetroServer,
            options: RequestOptions,
        ) => Promise<{
            code: string;
            map: string;
        }>;
        save: (
            entry: {
                code: string;
                map: string;
            },
            options: OutputOptions,
            postSave: (...args: string[]) => void,
        ) => Promise<unknown>;
    };
    platform?: string;
    sourceMap?: boolean;
    sourceMapUrl?: string;
}

interface BuildGraphOptions {
    entries: ReadonlyArray<string>;
    customTransformOptions?: CustomTransformOptions;
    dev?: boolean;
    minify?: boolean;
    onProgress?: (transformedFileCount: number, totalFileCount: number) => void;
    platform?: string;
    type?: 'module' | 'script';
}

export function runMetro(config: InputConfigT, options?: RunMetroOptions): Promise<MetroServer>;

export { loadConfig };

export function createConnectMiddleWare(config: ConfigT, options?: RunMetroOptions): Promise<MetroMiddleWare>;

export function runServer(config: ConfigT, options: RunServerOptions): Promise<HttpServer | HttpsServer>;

export function runBuild(config: ConfigT, options: RunBuildOptions): Promise<void>;

export function buildGraph(config: ConfigT, options: BuildGraphOptions): Promise<ReadOnlyGraph<void>>;

type BuildCommandOptions = {} | null;
type ServeCommandOptions = {} | null;

interface AttachMetroCLIOptions {
    build?: BuildCommandOptions;
    serve?: ServeCommandOptions;
    dependencies?: unknown;
}

export function attachMetroCli(yargs: typeof Yargs, options?: AttachMetroCLIOptions): typeof Yargs;
