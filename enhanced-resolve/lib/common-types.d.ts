/// <reference types="node" />
import { DescriptionFileData } from './DescriptionFileUtils';

import fs = require('fs');
/**
 * Created by cloud on 16-11-4.
 */
export interface ResolveError extends Error {
    details: string;
    missing: string[];
    recursion: boolean;
}

export interface ResolveParseResult {
    directory: boolean;
    file: boolean;
    module: boolean;
    query: string;
    request: string;
}

export interface ResolveContext {
    issuer?: string;
}

export interface ResolveResult {
    path: boolean | string;
    query: string;
}

export interface ResolverRequest {
    context: ResolveContext;
    descriptionFileData?: DescriptionFileData;
    descriptionFilePath?: string;
    descriptionFileRoot?: string;
    directory?: boolean;
    module?: boolean;
    path: string;
    query?: string;
    relativePath?: string;
    request: string;
}

export interface LoggingCallbackTools {
    log?(msg: string): void;
    stack?: string[] | undefined;
    missing?: string[] | {
        push: (item: string) => void;
    };
}

export interface LoggingCallbackWrapper extends LoggingCallbackTools {
    (err?: Error | null, ...args: any[]): any;
}

export interface ErrorCallback<T> {
    (err: T | null, ...args: any[]): any;
}

export interface AbstractInputFileSystem {
    isSync(): boolean;
    purge?(what?: string | string[]): void;
    readdir(path: string, callback: (err: NodeJS.ErrnoException, files: string[]) => void): void;
    readFile(filename: string, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
    readJson?(path: string, callback: (err: NodeJS.ErrnoException, data: any) => void): void;
    readlink(path: string, callback: (err: NodeJS.ErrnoException, linkString: string) => void): void;
    stat(path: string, callback: (err: NodeJS.ErrnoException, stats: fs.Stats) => void): void;
}

export interface CommonFileSystemMethod {
    (name: string, callback: (err: NodeJS.ErrnoException | null, ...args: any[]) => void): void;
}
