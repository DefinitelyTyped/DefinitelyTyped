import { Context } from './concord'
/**
 * Created by cloud on 16-11-4.
 */
export interface ResolveError extends Error {
    details: string;
    missing: string[];
    recursion: boolean;
}
export interface ResolveParseResult {
    request: string;
    query: string;
    module: boolean;
    directory: boolean;
    file: boolean;
}
export interface ResolveResult {
    path: boolean | string;
    query: string;
}
export interface ResolverRequest {
    request: string;
    relativePath?: string;
    descriptionFileData?: any;
    descriptionFileRoot?: string;
    descriptionFilePath?: string;
    context: Context;
    path: string;
    query?: string;
    directory?: boolean;
    module?: boolean;
}
export interface LoggingCallbackTools {
    log?(msg: string): void;
    stack?: string[];
    missing?: string[] | {
        push: (item: string) => void;
    };
}
export interface LoggingCallbackWrapper extends LoggingCallbackTools {
    (...args: any[]): any;
}

export interface ErrorCallback {
    (err: Error | null, ...args: any[]): any
}

export interface CommonFileSystemMethod {
    (name: string, callback: (err: Error | null, ...args: any[]) => void): void
}

export interface BaseFileSystem {
    stat: CommonFileSystemMethod
    readdir?: CommonFileSystemMethod
    readFile?(path: string, encoding: string, callback: any): void
    readFile?(path: string, callback: any): void
    readJson?: CommonFileSystemMethod
    readlink?: CommonFileSystemMethod
    isSync: () => boolean
}


