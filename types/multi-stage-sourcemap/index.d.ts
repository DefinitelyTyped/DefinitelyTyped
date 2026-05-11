import type { RawSourceMap } from "source-map";

/**
 * @returns re-mapped rawSourceMap string
 */
export function transfer(mappingObject: {
    fromSourceMap: RawSourceMap | string;
    toSourceMap: RawSourceMap | string;
}): string;
