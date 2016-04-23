// Type definitions for node-dir
// Project: https://github.com/fshost/node-dir
// Definitions by: Panu Horsmalahti <https://github.com/panuhorsmalahti/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "node-dir" {
    export interface Options {
        // file encoding (defaults to 'utf8')
        encoding?: string;

        // a regex pattern or array to specify filenames to ignore
        exclude?: RegExp | string[];

        // a regex pattern or array to specify directories to ignore
        excludeDir?: RegExp | string[];

        // a regex pattern or array to specify filenames to operate on
        match?: RegExp | string[];

        // a regex pattern or array to specify directories to recurse
        matchDir?: RegExp | string[];

        // whether to recurse subdirectories when reading files (defaults to true)
        recursive?: boolean;

        // sort files in each directory in descending order
        reverse?: boolean;

        // whether to aggregate only the base filename rather than the full filepath
        shortName?: boolean;

        // sort files in each directory in ascending order (defaults to true)
        sort?: boolean;

        // control if done function called on error (defaults to true)
        doneOnErr?: boolean;
    }

    export interface FileCallback {
        (error: any, content: any, next: () => void): void;
    }

    export interface FileNamedCallback {
        (error: any, content: any, filename: string, next: () => void): void;
    }

    export interface StreamCallback {
        (error: any, stream: any, next: () => void): void;
    }

    export interface FinishedCallback {
        (error: any, files: any): void;
    }

    export function readFiles(dir: string, fileCallback: FileCallback, finishedCallback?: FinishedCallback): void;
	export function readFiles(dir: string, fileCallback: FileNamedCallback, finishedCallback?: FinishedCallback): void;
    export function readFiles(dir: string, options: Options, fileCallback: FileCallback, finishedCallback?: FinishedCallback): void;
    export function readFiles(dir: string, options: Options, fileCallback: FileNamedCallback, finishedCallback?: FinishedCallback): void;
    export function readFilesStream(dir: string, options: Options, streamCallback: StreamCallback,
        finishedCallback?: FinishedCallback): void;
    export function files(dir: string, callback: (error: any, files: any) => void): void;
    export function subdirs(dir: string, callback: (error: any, subdirs: any) => void): void;
    export function paths(dir: string, callback: (error: any, paths: any) => void): void;
    export function paths(dir: string, combine: boolean, callback: (error: any, paths: any) => void): void;
}
