import { MapOptions } from ".";
import Source = require("./Source");

/**
 * Represents source code without SourceMap
 */
declare class RawSource extends Source {
    constructor(source: string | Buffer, convertToString?: boolean);
    source(): string;
    map(options: MapOptions): null;
}

export = RawSource;
