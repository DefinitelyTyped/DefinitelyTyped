// Type definitions for gulp-sourcemaps
// Project: https://github.com/gulp-sourcemaps/gulp-sourcemaps
// Definitions by: Phips Peter <https://github.com/pspeter3>
//                 Concision <https://github.com/concision>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import File = require("vinyl");

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

interface SourceUrlMapper {
    (file: File): string;
}

interface MapFilenameMapper {
    (mapFilePath: string): string;
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
    sourceMappingURL?: SourceUrlMapper;
    destPath?: string;
    mapFile?: MapFilenameMapper;
    charset?: BufferEncoding;
    clone?: boolean | CloneOptions;
}

export declare function init(opts?: InitOptions): NodeJS.ReadWriteStream;
export declare function mapSources(mapper?: SourceMapMapper): NodeJS.ReadWriteStream;
export declare function write(path?: string, opts?: WriteOptions): NodeJS.ReadWriteStream;
export declare function write(opts?: WriteOptions): NodeJS.ReadWriteStream;
