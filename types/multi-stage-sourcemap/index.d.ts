// Type definitions for multi-stage-sourcemap 0.3
// Project: https://github.com/azu/multi-stage-sourcemap/
// Definitions by: David Reed <https://github.com/e9x>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import type { RawSourceMap } from 'source-map';

/**
 * @returns re-mapped rawSourceMap string
 */
export function transfer(mappingObject: {
    fromSourceMap: RawSourceMap | string;
    toSourceMap: RawSourceMap | string;
}): string;
