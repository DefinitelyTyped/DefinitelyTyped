import { RawSourceMap } from 'source-map';
import {
    CachedSource,
    ConcatSource,
    LineToLineMappedSource,
    OriginalSource,
    PrefixSource,
    RawSource,
    ReplaceSource,
    SourceMapSource,
    Source,
    MapOptions,
} from 'webpack-sources';
import { Hash } from 'crypto';

const tests = (source: Source, options: MapOptions, hash: Hash, sourceMap: RawSourceMap) => {
    const cachedSource = new CachedSource(source);
    cachedSource.size(); // $ExpectType number
    cachedSource.source(); // $ExpectType string | ArrayBuffer
    cachedSource.updateHash(hash); // $ExpectType void
    cachedSource.map(); // $ExpectType RawSourceMap
    cachedSource.map(options); // $ExpectType RawSourceMap
    cachedSource.sourceAndMap(options); // $ExpectType SourceAndMapResult
    cachedSource.sourceAndMap(); // $ExpectType SourceAndMapResult

    const concatSource = new ConcatSource(source);
    concatSource.add(source); // $ExpectType void
    concatSource.source(); // $ExpectType string
    concatSource.size(); // $ExpectType number
    concatSource.node(options); // $ExpectType SourceNode
    concatSource.listMap(options); // $ExpectType SourceListMap
    concatSource.updateHash(hash); // $ExpectType void
    concatSource.map(options); // $ExpectType RawSourceMap | null
    concatSource.sourceAndMap(options); // $ExpectType SourceAndMapResult

    const lineToLineMappedSource = new LineToLineMappedSource(
        concatSource.source(),
        'concatSource',
        cachedSource.source().toString(),
    );
    lineToLineMappedSource.source(); // $ExpectType string
    lineToLineMappedSource.node(options); // $ExpectType SourceNode
    lineToLineMappedSource.listMap(options); // $ExpectType SourceListMap
    lineToLineMappedSource.updateHash(hash); // $ExpectType void
    lineToLineMappedSource.map(options); // $ExpectType RawSourceMap | null
    lineToLineMappedSource.sourceAndMap(options); // $ExpectType SourceAndMapResult

    const originalSource = new OriginalSource(lineToLineMappedSource.source(), 'originalSource');
    originalSource.source(); // $ExpectType string
    originalSource.node(options); // $ExpectType SourceNode
    originalSource.listMap(options); // $ExpectType SourceListMap
    originalSource.updateHash(hash); // $ExpectType void
    originalSource.map(options); // $ExpectType RawSourceMap | null
    originalSource.sourceAndMap(options); // $ExpectType SourceAndMapResult

    const prefixSource = new PrefixSource('prefixSource', originalSource);
    prefixSource.source(); // $ExpectType string
    prefixSource.node(options); // $ExpectType SourceNode
    prefixSource.listMap(options); // $ExpectType SourceListMap
    prefixSource.updateHash(hash); // $ExpectType void
    prefixSource.map(options); // $ExpectType RawSourceMap | null
    prefixSource.sourceAndMap(options); // $ExpectType SourceAndMapResult

    const rawSource = new RawSource(prefixSource.source());
    rawSource.source(); // $ExpectType string
    rawSource.map(options); // $ExpectType null
    rawSource.node(options); // $ExpectType SourceNode
    rawSource.listMap(options); // $ExpectType SourceListMap
    rawSource.updateHash(hash); // $ExpectType void

    const replaceSource = new ReplaceSource(rawSource, 'replaceSource');
    replaceSource.replace(0, 0, 'newValue');
    replaceSource.insert(0, 'newValue');
    replaceSource.replace(0, 0, 'newValue', 'name');
    replaceSource.insert(0, 'newValue', 'name');
    replaceSource.source(); // $ExpectType string
    replaceSource.original(); // $ExpectType Source
    replaceSource.node(options); // $ExpectType SourceNode
    replaceSource.listMap(options); // $ExpectType SourceListMap
    replaceSource.map(options); // $ExpectType RawSourceMap | null
    replaceSource.sourceAndMap(options); // $ExpectType SourceAndMapResult

    const sourceMapSource = new SourceMapSource(replaceSource.source(), 'sourceMapSource', sourceMap);
    sourceMapSource.source(); // $ExpectType string
    sourceMapSource.node(options); // $ExpectType SourceNode
    sourceMapSource.listMap(options); // $ExpectType SourceListMap
    sourceMapSource.updateHash(hash); // $ExpectType void
    sourceMapSource.map(options); // $ExpectType RawSourceMap | null
    sourceMapSource.sourceAndMap(options); // $ExpectType SourceAndMapResult
};
