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
    issuer?: string | undefined;
}

export interface ResolverRequest {
    context: ResolveContext;
    descriptionFileData?: DescriptionFileData | undefined;
    descriptionFilePath?: string | undefined;
    descriptionFileRoot?: string | undefined;
    directory?: boolean | undefined;
    module?: boolean | undefined;
    path: string;
    query?: string | undefined;
    relativePath?: string | undefined;
    request: string;
    __innerRequest?: string | undefined;
    __innerRequest_request?: string | undefined;
    __innerRequest_relativePath?: string | undefined;
}

export interface LoggingCallbackTools {
    log?(msg: string): void;
    stack?: string[] | undefined;
    missing?: string[] | {
        push: (item: string) => void;
    } | undefined;
}

export interface LoggingCallbackWrapper extends LoggingCallbackTools {
    (err?: Error | null, ...args: any[]): any;
}

export interface ErrorCallback<T> {
    (err: T | null, ...args: any[]): any;
}

export interface AbstractInputFileSystem {
    purge?(what?: string | string[]): void;
    readdir(path: string, callback: (err: NodeJS.ErrnoException, files: string[]) => void): void;
    readdirSync?(path: string): string[];
    readFile(filename: string, encoding: string, callback: (err: NodeJS.ErrnoException, data: string) => void): void;
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
    readFileSync?(filename: string): Buffer;
    readJson?(path: string, callback: (err: NodeJS.ErrnoException, data: any) => void): void;
    readJsonSync?(path: string): any;
    readlink(path: string, callback: (err: NodeJS.ErrnoException, linkString: string) => void): void;
    readlinkSync?(path: string): string;
    stat(path: string, callback: (err: NodeJS.ErrnoException, stats: fs.Stats) => void): void;
    statSync?(path: string): fs.Stats;
}

export interface CommonFileSystemMethod {
    (name: string, callback: (err: NodeJS.ErrnoException | null, ...args: any[]) => void): void;
}
