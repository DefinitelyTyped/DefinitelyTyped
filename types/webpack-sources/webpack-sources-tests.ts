import { RawSourceMap } from 'source-map';
import {
    CachedSource,
    CompatSource,
    ConcatSource,
    OriginalSource,
    PrefixSource,
    RawSource,
    ReplaceSource,
    SourceMapSource,
    Source,
    MapOptions,
    SizeOnlySource,
} from 'webpack-sources';
import { Hash } from 'crypto';

const CONTENT = 'Line1\n\nLine3\n';
class TrackedSource extends Source {
    private readonly _innerSource: Source;
    sizeCalled: number;
    sourceCalled: number;
    bufferCalled: number;
    mapCalled: number;
    sourceAndMapCalled: number;
    constructor(source: Source) {
        super();
        this._innerSource = source;
        this.sizeCalled = 0;
        this.sourceCalled = 0;
        this.bufferCalled = 0;
        this.mapCalled = 0;
        this.sourceAndMapCalled = 0;
    }

    getCalls() {
        return {
            size: this.sizeCalled,
            source: this.sourceCalled,
            buffer: this.bufferCalled,
            map: this.mapCalled,
            sourceAndMap: this.sourceAndMapCalled,
        };
    }

    size() {
        this.sizeCalled++;
        return this._innerSource.size();
    }

    source() {
        this.sourceCalled++;
        return this._innerSource.source();
    }

    buffer() {
        this.bufferCalled++;
        return this._innerSource.buffer();
    }

    map(options: MapOptions) {
        this.mapCalled++;
        return this._innerSource.map(options);
    }

    sourceAndMap(options: MapOptions) {
        this.sourceAndMapCalled++;
        return this._innerSource.sourceAndMap(options);
    }
}

const tests = (options: MapOptions, hash: Hash, sourceMap: RawSourceMap) => {
    let source: Source = new OriginalSource(Buffer.from(new Array(256)), 'file.wasm');
    source = new OriginalSource('TestTestTest', 'file.js');
    source = new OriginalSource('😋', 'file.js');
    source = new TrackedSource(new OriginalSource('TestTestTest', 'file.js'));
    source = CompatSource.from({
        source() {
            return CONTENT;
        },
        size() {
            return 42;
        },
    });
    const cachedSource = new CachedSource(source);
    cachedSource.size(); // $ExpectType number
    cachedSource.source(); // $ExpectType string | ArrayBuffer
    cachedSource.updateHash(hash); // $ExpectType void
    cachedSource.map(); // $ExpectType RawSourceMap
    cachedSource.map(options); // $ExpectType RawSourceMap
    cachedSource.sourceAndMap(options); // $ExpectType SourceAndMapResult
    cachedSource.sourceAndMap(); // $ExpectType SourceAndMapResult
    let clone = new CachedSource(null, cachedSource.getCachedData());
    clone = new CachedSource(() => {
        return source;
    }, clone.getCachedData());

    const concatSource = new ConcatSource(source);
    concatSource.add(source); // $ExpectType void
    concatSource.source(); // $ExpectType string
    concatSource.size(); // $ExpectType number
    concatSource.updateHash(hash); // $ExpectType void
    concatSource.map(options); // $ExpectType RawSourceMap | null
    concatSource.sourceAndMap(options); // $ExpectType SourceAndMapResult

    const originalSource = new OriginalSource(concatSource.source(), 'originalSource');
    originalSource.source(); // $ExpectType string
    originalSource.updateHash(hash); // $ExpectType void
    originalSource.map(options); // $ExpectType RawSourceMap | null
    originalSource.sourceAndMap(options); // $ExpectType SourceAndMapResult

    const prefixSource = new PrefixSource('prefixSource', originalSource);
    prefixSource.source(); // $ExpectType string
    prefixSource.updateHash(hash); // $ExpectType void
    prefixSource.map(options); // $ExpectType RawSourceMap | null
    prefixSource.sourceAndMap(options); // $ExpectType SourceAndMapResult

    const rawSource = new RawSource(prefixSource.source());
    rawSource.source(); // $ExpectType string
    rawSource.map(options); // $ExpectType null
    rawSource.updateHash(hash); // $ExpectType void

    const replaceSource = new ReplaceSource(rawSource, 'replaceSource');
    replaceSource.replace(0, 0, 'newValue');
    replaceSource.insert(0, 'newValue');
    replaceSource.replace(0, 0, 'newValue', 'name');
    replaceSource.insert(0, 'newValue', 'name');
    replaceSource.source(); // $ExpectType string
    replaceSource.original(); // $ExpectType Source
    replaceSource.map(options); // $ExpectType RawSourceMap | null
    replaceSource.sourceAndMap(options); // $ExpectType SourceAndMapResult

    const sourceMapSource = new SourceMapSource(replaceSource.source(), 'sourceMapSource', sourceMap);
    sourceMapSource.source(); // $ExpectType string
    sourceMapSource.updateHash(hash); // $ExpectType void
    sourceMapSource.map(options); // $ExpectType RawSourceMap | null
    sourceMapSource.sourceAndMap(options); // $ExpectType SourceAndMapResult

    source = new SizeOnlySource(42);
    source.size(); // $ExpectType number
};
