/// <reference types="tapable" />
import Tapable = require('tapable');
import { ResolveParseResult, ResolverRequest, LoggingCallbackWrapper, BaseFileSystem } from './common-types'
import { Context } from './concord'
declare class Resolver extends Tapable {
    fileSystem: BaseFileSystem;

    constructor(fileSystem: BaseFileSystem);

    resolveSync(context: Context, path: string, request: string): null;

    resolve(context: Context, path: string, request: string, callback: LoggingCallbackWrapper): any;

    doResolve(type: string, request: ResolverRequest, message: string | null, callback: LoggingCallbackWrapper): any;

    parse(identifier: string): ResolveParseResult | null;

    isModule(path: string): boolean;

    isDirectory(path: string): boolean;

    join(path: string, request: string): string;

    normalize(path: string): string;
}
export = Resolver;
