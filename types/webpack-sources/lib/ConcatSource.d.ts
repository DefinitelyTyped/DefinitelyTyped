import { SourceListMap } from "source-list-map";
import { SourceNode } from "source-map";

import { MapOptions, SourceAndMapMixin } from ".";
import Source = require("./Source");

/**
 * Concatenate multiple Sources or strings to a single source.
 */
declare class ConcatSource extends Source implements SourceAndMapMixin {
    constructor(...args: Array<string | Source>);

    source(): string;

    getChildren(): Source[];
    /**
     * Adds an item to the source.
     */
    add(item: string | Source): void;
    addAllSkipOptimizing(items: Source[]): void;
}

export = ConcatSource;
