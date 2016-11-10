// Type definitions for enhanced-resolve v2.3.0
// Project: http://github.com/webpack/tapable.git
// Definitions by: e-cloud <https://github.com/e-cloud>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="tapable" />

import fs = require('fs');
import {
    ResolveResult,
    LoggingCallbackWrapper,
    ErrorCallback,
    CommonFileSystemMethod,
    BaseFileSystem,
    ResolverRequest
} from './lib/common-types';
import { Context } from './lib/concord';
import Resolver = require('./lib/Resolver');

declare namespace Resolve {
    function sync(path: string, request: string): ResolveResult;
    function sync(context: Context, path: string, request: string): ResolveResult;

    function context(path: string, request: string, callback: LoggingCallbackWrapper): void;
    function context(context: Context, path: string, request: string, callback: LoggingCallbackWrapper): void;

    namespace context {
        function sync(path: string, request: string): ResolveResult;
        function sync(context: Context, path: string, request: string): ResolveResult;
    }

    function loader(path: string, request: string, callback: LoggingCallbackWrapper): void;
    function loader(context: Context, path: string, request: string, callback: LoggingCallbackWrapper): void;

    namespace context {
        function sync(path: string, request: string): ResolveResult;
        function sync(context: Context, path: string, request: string): ResolveResult;
    }

    function create(path: string, request: string, callback: LoggingCallbackWrapper): void;
    function create(context: Context, path: string, request: string, callback: LoggingCallbackWrapper): void;

    export namespace create {
        function sync(path: string, request: string): ResolveResult;
        function sync(context: Context, path: string, request: string): ResolveResult;
    }

    export namespace ResolverFactory {
        interface ResolverOption {
            modules?: string[];
            descriptionFiles?: string[];
            plugins?: any[];
            mainFields?: string[];
            aliasFields?: string[];
            mainFiles?: string[];
            extensions: string[];
            enforceExtension?: boolean;
            moduleExtensions?: string[];
            enforceModuleExtension?: boolean;
            alias?: AliasItem[] | {};
            symlinks?: string[] | boolean;
            resolveToContext?: boolean;
            unsafeCache?: boolean | {};
            cachePredicate?: (val: ResolverRequest) => boolean;
            fileSystem: any;
            resolver?: Resolver;
        }
        interface AliasItem {
            name: string;
            alias: string;
            onlyModule: boolean;
        }
        function createResolver(options: ResolverOption): Resolver;
    }

    class NodeJsInputFileSystem {
        readdir(path: string, callback: (err: Error, files: string[]) => void): void;

        isSync(): boolean;

        stat(path: string, callback?: (err: NodeJS.ErrnoException, stats: fs.Stats) => any): void;

        readFile(filename: string, encoding: string, callback: (err: NodeJS.ErrnoException, data: string) => void): void;
        readFile(filename: string, callback: (err: NodeJS.ErrnoException, data: string) => void): void;

        readlink(path: string, callback?: (err: NodeJS.ErrnoException, linkString: string) => any): void;
    }

    class SyncNodeJsInputFileSystem {
        isSync(): boolean;

        stat: CommonFileSystemMethod;
        readdir: CommonFileSystemMethod;
        readFile(path: string, encoding?: string, callback?: (err: NodeJS.ErrnoException, result: Buffer) => void): void;
        readFile(path: string, callback?: (err: NodeJS.ErrnoException, result: Buffer) => void): void;
        readlink: CommonFileSystemMethod;
    }

    class CachedInputFileSystem {
        fileSystem: BaseFileSystem;
        _statStorage: Storage;
        _readdirStorage: Storage;
        _readFileStorage: Storage;
        _readJsonStorage: Storage;
        _readlinkStorage: Storage;
        _stat: CommonFileSystemMethod;
        _readdir: CommonFileSystemMethod;
        _readFile: CommonFileSystemMethod;
        _readJson: CommonFileSystemMethod;
        _readlink: CommonFileSystemMethod;

        constructor(fileSystem: BaseFileSystem, duration: number);

        isSync(): boolean;

        stat(path: string, callback: ErrorCallback): void;

        readdir(path: string, callback: ErrorCallback): void;

        readFile(path: string, callback: ErrorCallback): void;

        readJson(path: string, callback: ErrorCallback): void;

        readlink(path: string, callback: ErrorCallback): void;

        purge(what?: string | string[]): void;
    }
}

declare function Resolve(path: string, request: string, callback: LoggingCallbackWrapper): void;
declare function Resolve(context: Context, path: string, request: string, callback: LoggingCallbackWrapper): void;

export = Resolve;
