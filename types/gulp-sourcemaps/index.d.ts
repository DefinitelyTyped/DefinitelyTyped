// Type definitions for gulp-sourcemaps
// Project: https://github.com/floridoo/gulp-sourcemaps
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import * as File from 'vinyl';

interface InitOptions {
    loadMaps?: boolean;
    debug?: boolean;
}

interface WriteMapper {
    (file: string): string;
}

interface SourceMapMapper {
    (sourcePath: string, file: File): string;
}

interface CloneOptions {
    contents?: boolean;
    deep?: boolean;
}

interface WriteOptions {
    addComment?: boolean;
    includeContent?: boolean;
    sourceRoot?: string | WriteMapper;
    sourceMappingURLPrefix?: string | WriteMapper;
    clone?: boolean | CloneOptions;
}

export declare function init(opts?: InitOptions): NodeJS.ReadWriteStream;
export declare function mapSources(mapper?: SourceMapMapper): NodeJS.ReadWriteStream;
export declare function write(path?: string, opts?: WriteOptions): NodeJS.ReadWriteStream;
export declare function write(opts?: WriteOptions): NodeJS.ReadWriteStream;
