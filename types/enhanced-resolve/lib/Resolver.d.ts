/// <reference types="tapable" />
import Tapable = require('tapable');
import {
    ResolveParseResult,
    ResolverRequest,
    LoggingCallbackWrapper,
    AbstractInputFileSystem,
    ResolveContext
} from './common-types';

declare class Resolver extends Tapable {
    fileSystem: AbstractInputFileSystem;

    constructor(fileSystem: AbstractInputFileSystem);

    resolveSync(context: ResolveContext, path: string, request: string): string;

    resolve(context: ResolveContext, path: string, request: string, callback: LoggingCallbackWrapper): any;

    doResolve(type: string, request: ResolverRequest, message: string | null, callback: LoggingCallbackWrapper): any;

    parse(identifier: string): ResolveParseResult | null;

    isModule(path: string): boolean;

    isDirectory(path: string): boolean;

    join(path: string, request: string): string;

    normalize(path: string): string;
}

export = Resolver;
