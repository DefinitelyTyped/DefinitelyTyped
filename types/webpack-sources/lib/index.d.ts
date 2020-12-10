import { RawSourceMap } from 'source-map';

export import CachedSource = require('./CachedSource');
export import CompatSource = require('./CompatSource');
export import ConcatSource = require('./ConcatSource');
export import OriginalSource = require('./OriginalSource');
export import PrefixSource = require('./PrefixSource');
export import RawSource = require('./RawSource');
export import ReplaceSource = require('./ReplaceSource');
export import SizeOnlySource = require('./SizeOnlySource');
export import Source = require('./Source');
export import SourceMapSource = require('./SourceMapSource');

export interface MapOptions {
    /**
     * If set to false the implementation may omit mappings for columns
     * @default true
     */
    columns?: boolean;
    /**
     * If set to false the implementation may omit inner mappings for modules.
     * @default true
     */
    module?: boolean;
}

export interface SourceAndMapMixin {
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
}

export interface SourceAndMapResult {
    source: string | Buffer;
    map: RawSourceMap | null;
}

export interface Replacement {
    readonly start: number;
    readonly end: number;
    readonly content: string;
    readonly insertIndex: number;
    readonly name: string;
}

export type SourceLike = Partial<Pick<Source, 'source' | 'buffer' | 'size' | 'map' | 'sourceAndMap' | 'updateHash'>>;

export interface CachedData {
    buffer?: Buffer;
    source?: string | boolean;
    size?: number;
    cachedData?: Map<any, any>;
}
