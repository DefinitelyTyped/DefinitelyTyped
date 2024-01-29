/// <reference types="node"/>

import { ReadStream } from "fs";

export interface Options {
    // file encoding (defaults to 'utf8')
    encoding?: string | undefined;

    // a regex pattern or array to specify filenames to ignore
    exclude?: RegExp | string[] | undefined;

    // a regex pattern or array to specify directories to ignore
    excludeDir?: RegExp | string[] | undefined;

    // a regex pattern or array to specify filenames to operate on
    match?: RegExp | string[] | undefined;

    // a regex pattern or array to specify directories to recurse
    matchDir?: RegExp | string[] | undefined;

    // whether to recurse subdirectories when reading files (defaults to true)
    recursive?: boolean | undefined;

    // sort files in each directory in descending order
    reverse?: boolean | undefined;

    // whether to aggregate only the base filename rather than the full filepath
    shortName?: boolean | undefined;

    // sort files in each directory in ascending order (defaults to true)
    sort?: boolean | undefined;

    // control if done function called on error (defaults to true)
    doneOnErr?: boolean | undefined;
}

export interface FileCallback {
    (error: any, content: string | Buffer, next: () => void): void;
}

export interface FileNamedCallback {
    (error: any, content: string | Buffer, filename: string, next: () => void): void;
}

export interface StreamCallback {
    (error: any, stream: ReadStream, next: () => void): void;
}

export interface FinishedCallback {
    (error: any, files: string[]): void;
}
export interface PathsResult {
    files: string[];
    dirs: string[];
}

export function readFiles(dir: string, fileCallback: FileCallback, finishedCallback?: FinishedCallback): void;
export function readFiles(dir: string, fileCallback: FileNamedCallback, finishedCallback?: FinishedCallback): void;
export function readFiles(
    dir: string,
    options: Options,
    fileCallback: FileCallback,
    finishedCallback?: FinishedCallback,
): void;
export function readFiles(
    dir: string,
    options: Options,
    fileCallback: FileNamedCallback,
    finishedCallback?: FinishedCallback,
): void;
export function readFilesStream(dir: string, streamCallback: StreamCallback, finishedCallback?: FinishedCallback): void;
export function readFilesStream(
    dir: string,
    options: Options,
    streamCallback: StreamCallback,
    finishedCallback?: FinishedCallback,
): void;
export function files(dir: string, callback: (error: any, files: string[]) => void): void;
export function files(dir: string, syncOption: { sync: true }): string[];
export function promiseFiles(dir: string): Promise<string[]>;
export function subdirs(dir: string, callback: (error: any, subdirs: string[]) => void): void;
export function paths(dir: string, callback: (error: any, paths: PathsResult) => void): void;
export function paths(
    dir: string,
    combine: boolean,
    callback: (error: any, paths: string[] | PathsResult) => void,
): void;
