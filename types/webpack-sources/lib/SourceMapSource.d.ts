import { RawSourceMap, SourceMapGenerator } from "source-map";

import { SourceAndMapMixin } from ".";
import Source = require("./Source");

/**
 * Represents source code with SourceMap, optionally having an additional SourceMap for the original source.
 */
declare class SourceMapSource extends Source implements SourceAndMapMixin {
    constructor(
        sourceCode: string,
        name: string,
        sourceMap: SourceMapGenerator | RawSourceMap,
        originalSource?: string,
        innerSourceMap?: RawSourceMap | string,
        removeOriginalSource?: boolean,
    );
    buffer(): Buffer;
    source(): string;
}

export = SourceMapSource;
