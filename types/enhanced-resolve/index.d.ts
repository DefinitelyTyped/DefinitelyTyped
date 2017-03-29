// Type definitions for enhanced-resolve v3.0.0
// Project: http://github.com/webpack/enhanced-resolve.git
// Definitions by: e-cloud <https://github.com/e-cloud>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="tapable" />

import fs = require('fs');
import {
    ResolveResult,
    LoggingCallbackWrapper,
    ResolverRequest,
    ResolveContext,
    AbstractInputFileSystem
} from './lib/common-types'
import { Dictionary } from './lib/concord'
import Resolver = require('./lib/Resolver');
import Tapable = require('tapable');

declare namespace Resolve {
    function sync(path: string, request: string): ResolveResult;
    function sync(context: ResolveContext, path: string, request: string): ResolveResult;

    function context(path: string, request: string, callback: LoggingCallbackWrapper): void;
    function context(context: ResolveContext, path: string, request: string, callback: LoggingCallbackWrapper): void;

    namespace context {
        function sync(path: string, request: string): ResolveResult;
        function sync(context: ResolveContext, path: string, request: string): ResolveResult;
    }

    function loader(path: string, request: string, callback: LoggingCallbackWrapper): void;
    function loader(context: ResolveContext, path: string, request: string, callback: LoggingCallbackWrapper): void;

    namespace context {
        function sync(path: string, request: string): ResolveResult;
        function sync(context: ResolveContext, path: string, request: string): ResolveResult;
    }

    function create(path: string, request: string, callback: LoggingCallbackWrapper): void;
    function create(context: ResolveContext, path: string, request: string, callback: LoggingCallbackWrapper): void;

    export namespace create {
        function sync(path: string, request: string): ResolveResult;
        function sync(context: ResolveContext, path: string, request: string): ResolveResult;
    }

    export namespace ResolverFactory {
        interface ResolverOption {
            alias?: AliasItem[] | Dictionary<string>;
            aliasFields?: string[];
            cachePredicate?: (val: ResolverRequest) => boolean;
            descriptionFiles?: string[];
            enforceExtension?: boolean;
            enforceModuleExtension?: boolean;
            extensions: string[];
            fileSystem: AbstractInputFileSystem;
            mainFields?: string[];
            mainFiles?: string[];
            moduleExtensions?: string[];
            modules?: string[];
            plugins?: Tapable.Plugin[];
            resolver?: Resolver;
            resolveToContext?: boolean;
            symlinks?: string[] | boolean;
            unsafeCache?: boolean | Dictionary<any>;
            useSyncFileSystemCalls?: boolean;
        }
        interface AliasItem {
            alias: string;
            name: string;
            onlyModule: boolean;
        }
        function createResolver(options: ResolverOption): Resolver;
    }

    class NodeJsInputFileSystem {
        stat(path: string, callback?: (err: NodeJS.ErrnoException, stats: fs.Stats) => any): void;

        readdir(path: string, callback: (err: Error, files: string[]) => void): void
        readFile(
            filename: string, encoding: string,
            callback: (err: NodeJS.ErrnoException, data: string) => void
        ): void;
        readFile(
            filename: string, options: {
                encoding: string;
                flag?: string;
            }, callback: (err: NodeJS.ErrnoException, data: string) => void
        ): void;
        readFile(
            filename: string, options: {
                flag?: string;
            }, callback: (err: NodeJS.ErrnoException, data: Buffer) => void
        ): void;
        readFile(filename: string, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;

        readlink(path: string, callback?: (err: NodeJS.ErrnoException, linkString: string) => any): void;

        statSync(path: string | Buffer): fs.Stats;

        readdirSync(path: string): string[];

        readFileSync(filename: string, encoding: string): string;
        readFileSync(
            filename: string, options: {
                encoding: string;
                flag?: string;
            }
        ): string;
        readFileSync(
            filename: string, options?: {
                flag?: string;
            }
        ): Buffer;

        readlinkSync(path: string | Buffer): string;
    }

    class CachedInputFileSystem {
        fileSystem: AbstractInputFileSystem;

        constructor(fileSystem: AbstractInputFileSystem, duration: number);

        stat?(path: string, callback: (err: NodeJS.ErrnoException, stats: fs.Stats) => void): void;

        readdir?(path: string, callback: (err: NodeJS.ErrnoException, files: string[]) => void): void;

        readFile?(path: string, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;

        readJson?(path: string, callback: (err: NodeJS.ErrnoException, data: any) => void): void;

        readlink?(path: string, callback: (err: NodeJS.ErrnoException, linkString: string) => void): void;

        statSync?(path: string | Buffer): fs.Stats;

        readdirSync?(path: string): string[];

        readFileSync?(filename: string, options?: { flag?: string; }): Buffer;

        readlinkSync?(path: string | Buffer): string;

        readJsonSync?(path: string): any;

        purge(what?: string | string[]): void;
    }
}

declare function Resolve(path: string, request: string, callback: LoggingCallbackWrapper): void;
declare function Resolve(
    context: ResolveContext,
    path: string,
    request: string,
    callback: LoggingCallbackWrapper
): void;

export = Resolve;
