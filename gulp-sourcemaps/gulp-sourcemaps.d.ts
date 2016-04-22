// Type definitions for gulp-sourcemaps
// Project: https://github.com/floridoo/gulp-sourcemaps
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>


interface InitOptions {
    loadMaps?: boolean;
    debug?: boolean;
}

interface WriteMapper {
    (file: string): string;
}

interface WriteOptions {
    addComment?: boolean;
    includeContent?: boolean;
    sourceRoot?: string | WriteMapper;
    sourceMappingURLPrefix?: string | WriteMapper;
}

declare export function init(opts?: InitOptions): NodeJS.ReadWriteStream;
declare export function write(path?: string, opts?: WriteOptions): NodeJS.ReadWriteStream;
declare export function write(opts?: WriteOptions): NodeJS.ReadWriteStream;
