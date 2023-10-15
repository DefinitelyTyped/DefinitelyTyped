import { RawSourceMap } from "source-map";

import { CachedData, MapOptions } from ".";
import Source = require("./Source");

/**
 * Decorates a Source and caches returned results of map, source, size and sourceAndMap in memory.
 * Every other operation is delegated to the wrapped Source.
 */
declare class CachedSource extends Source {
    constructor(source: null | (() => Source), cachedData: CachedData);
    constructor(source: Source);
    map(options?: MapOptions): RawSourceMap;
    original(): Source;
    getCachedData(): CachedData;
}

export = CachedSource;
