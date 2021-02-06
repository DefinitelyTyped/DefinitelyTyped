import { CoverageMap } from 'istanbul-lib-coverage';
import { RawSourceMap } from 'source-map';
import { createSourceMapStore } from 'istanbul-lib-source-maps';

createSourceMapStore();
createSourceMapStore({});
const store = createSourceMapStore({
    verbose: false,
    baseDir: 'foo',
    sourceStore: 'memory',
    tmpdir: 'foo',
});

store.data['foo'].type.trim();

const sourceMap: RawSourceMap = {
    version: (1 as any) as string, // Fixed by https://github.com/mozilla/source-map/pull/293 but the fix is not yet published
    sources: ['foo', 'bar'],
    names: ['foo', 'bar'],
    mappings: 'foo',
    file: 'foo',
};
store.registerMap('foo', sourceMap);

store.registerURL('foo', 'foo');

const map = new CoverageMap({});
const transformed = store.transformCoverage(map);
transformed.then(obj => obj.data);

store.dispose();

store.sourceStore.registerSource('foo', 'bar');
const source = store.sourceStore.getSource('foo');
if (source != null) {
    source.trim();
}
