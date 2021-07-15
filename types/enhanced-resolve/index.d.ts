// Type definitions for enhanced-resolve v3.0.0
// Project: https://github.com/webpack/enhanced-resolve.git
// Definitions by: e-cloud <https://github.com/e-cloud>
//                 Onigoetz <https://github.com/onigoetz>
//                 John Reilly <https://github.com/johnnyreilly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
/// <reference types="tapable" />

import fs = require('fs');
import {
    LoggingCallbackWrapper,
    ResolverRequest,
    ResolveContext,
    AbstractInputFileSystem
} from './lib/common-types'
import { Dictionary } from './lib/concord'
import Resolver = require('./lib/Resolver');
import Tapable = require('tapable');

declare namespace Resolve {
    function sync(path: string, request: string): string;
    function sync(context: ResolveContext, path: string, request: string): string;

    function context(path: string, request: string, callback: LoggingCallbackWrapper): void;
    function context(context: ResolveContext, path: string, request: string, callback: LoggingCallbackWrapper): void;

    namespace context {
        function sync(path: string, request: string): string;
        function sync(context: ResolveContext, path: string, request: string): string;
    }

    function loader(path: string, request: string, callback: LoggingCallbackWrapper): void;
    function loader(context: ResolveContext, path: string, request: string, callback: LoggingCallbackWrapper): void;

    namespace loader {
        function sync(path: string, request: string): string;
        function sync(context: ResolveContext, path: string, request: string): string;
    }

    function create(options: ResolverFactory.ResolverOption): {
        (path: string, request: string, callback: LoggingCallbackWrapper): void;
        (context: ResolveContext, path: string, request: string, callback: LoggingCallbackWrapper): void;
    }

    export namespace create {
        function sync(options: ResolverFactory.ResolverOption): {
            (path: string, request: string): string;
            (context: ResolveContext, path: string, request: string): string;
        }
    }

    export namespace ResolverFactory {
        interface ResolverOption {
            alias?: AliasItem[] | Dictionary<string> | undefined;
            aliasFields?: string[] | undefined;
            cachePredicate?: ((val: ResolverRequest) => boolean) | undefined;
            descriptionFiles?: string[] | undefined;
            enforceExtension?: boolean | undefined;
            enforceModuleExtension?: boolean | undefined;
            extensions?: string[] | undefined;
            fileSystem?: AbstractInputFileSystem | undefined;
            mainFields?: string[] | undefined;
            mainFiles?: string[] | undefined;
            moduleExtensions?: string[] | undefined;
            modules?: string[] | undefined;
            plugins?: Tapable.Plugin[] | undefined;
            resolver?: Resolver | undefined;
            resolveToContext?: boolean | undefined;
            symlinks?: string[] | boolean | undefined;
            unsafeCache?: boolean | Dictionary<any> | undefined;
            useSyncFileSystemCalls?: boolean | undefined;
        }
        interface AliasItem {
            alias: string;
            name: string;
            onlyModule?: boolean | undefined;
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
                flag?: string | undefined;
            }, callback: (err: NodeJS.ErrnoException, data: string) => void
        ): void;
        readFile(
            filename: string, options: {
                flag?: string | undefined;
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
                flag?: string | undefined;
            }
        ): string;
        readFileSync(
            filename: string, options?: {
                flag?: string | undefined;
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

        readFileSync?(filename: string, options?: { flag?: string | undefined; }): Buffer;

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
