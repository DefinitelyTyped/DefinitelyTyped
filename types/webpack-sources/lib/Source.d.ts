import { Hash } from "crypto";
import { RawSourceMap } from "source-map";

import { MapOptions, SourceAndMapResult } from ".";

/**
 * Base class for all sources.
 * A Source can be asked for source code, size, source map and hash.
 */
declare abstract class Source {
    /**
     * Returns the represented source code as string.
     */
    source(): string | ArrayBuffer;

    /**
     * Returns the represented source code as Buffer. Strings are converted to utf-8.
     */
    buffer(): Buffer;

    /**
     * Returns the size in chars of the represented source code.
     */
    size(): number;

    /**
     * Returns the SourceMap of the represented source code as JSON.
     * May return `null` if no SourceMap is available.
     */
    map(options?: MapOptions): RawSourceMap | null;

    /**
     * Returns both, source code (like `Source.prototype.source()` and SourceMap (like `Source.prototype.map()`).
     * This method could have better performance than calling `source()` and `map()` separately.
     */
    sourceAndMap(options?: MapOptions): SourceAndMapResult;

    /**
     * Updates the provided Hash object with the content of the represented source code.
     * (Hash is an object with an update method, which is called with string values)
     */
    updateHash(hash: Hash): void;
}

export = Source;
