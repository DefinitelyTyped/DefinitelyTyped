import { MapOptions } from ".";
import Source = require("./Source");

/**
 * Represents source code without SourceMap
 */
declare class RawSource extends Source {
    constructor(value: string);
    source(): string;
    map(options: MapOptions): null;
}

export = RawSource;
