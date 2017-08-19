import {
    CachedSource,
    ConcatSource,
    RawSource,
    LineToLineMappedSource,
    PrefixSource,
    ReplaceSource,
    OriginalSource,
    SourceMapSource,

} from 'webpack-sources';
import { RawSourceMap } from 'source-map'

const s1 = new OriginalSource('a', 'b');

const s2 = new CachedSource(s1);

const s3 = new ConcatSource('a', 'b', s1);

const s4 = new RawSource('hey');

const a = {} as RawSourceMap
const b = {} as RawSourceMap

const s5 = new LineToLineMappedSource('a', 'v', 'c');
const s6 = new PrefixSource(s4, s5);
const s7 = new ReplaceSource(s3, 'ha');
const s8 = new SourceMapSource('va', 'vb', a, 'vc', b);
