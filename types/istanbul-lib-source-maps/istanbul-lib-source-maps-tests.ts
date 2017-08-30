import { createSourceMapStore } from 'istanbul-lib-source-maps';
import { CoverageMap } from 'istanbul-lib-coverage';

createSourceMapStore();
createSourceMapStore({});
const store = createSourceMapStore({
	verbose: false,
	baseDir: 'foo',
	sourceStore: 'memory',
	tmpdir: 'foo'
});

store.data['foo'].type.trim();

const sourceMap = {
	version: 1,
	sources: ['foo', 'bar'],
	names: ['foo', 'bar'],
	mappings: 'foo',
	file: 'foo'
};
store.registerMap('foo', sourceMap);

store.registerURL('foo', 'foo');

const map = new CoverageMap({});
const transformed = store.transformCoverage(map);
transformed.map.data;
transformed.sourceFinder('foo').trim();

store.dispose();

store.sourceStore.registerSource('foo', 'bar');
const source = store.sourceStore.getSource('foo');
if (source != null) {
	source.trim();
}
