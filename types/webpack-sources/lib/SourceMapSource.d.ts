import { RawSourceMap, SourceMapGenerator } from "source-map";

import { SourceAndMapMixin } from ".";
import Source = require("./Source");

/**
 * Represents source code with SourceMap, optionally having an additional SourceMap for the original source.
 */
declare class SourceMapSource extends Source implements SourceAndMapMixin {
    constructor(
        source: string | Buffer,
        name: string,
        sourceMap: SourceMapGenerator | RawSourceMap | string | Buffer,
        originalSource?: string | Buffer,
        innerSourceMap?: RawSourceMap | string | Buffer,
        removeOriginalSource?: boolean,
    );
    buffer(): Buffer;
    source(): string;
    getArgsAsBuffers(): [
        Buffer,
        string,
        Buffer,
        undefined | Buffer,
        undefined | Buffer,
        boolean,
    ];
}

export = SourceMapSource;
