/// <reference types="node"/>

import File = require("vinyl");

interface InitOptions {
    loadMaps?: boolean | undefined;
    debug?: boolean | undefined;
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
    contents?: boolean | undefined;
    deep?: boolean | undefined;
}

interface WriteOptions {
    addComment?: boolean | undefined;
    includeContent?: boolean | undefined;
    sourceRoot?: string | WriteMapper | undefined;
    sourceMappingURLPrefix?: string | WriteMapper | undefined;
    sourceMappingURL?: SourceUrlMapper | undefined;
    destPath?: string | undefined;
    mapFile?: MapFilenameMapper | undefined;
    charset?: BufferEncoding | undefined;
    clone?: boolean | CloneOptions | undefined;
}

export declare function init(opts?: InitOptions): NodeJS.ReadWriteStream;
export declare function mapSources(mapper?: SourceMapMapper): NodeJS.ReadWriteStream;
export declare function write(path?: string, opts?: WriteOptions): NodeJS.ReadWriteStream;
export declare function write(opts?: WriteOptions): NodeJS.ReadWriteStream;
