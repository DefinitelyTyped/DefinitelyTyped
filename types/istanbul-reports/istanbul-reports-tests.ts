import { create } from 'istanbul-reports';

create('clover');
create('clover', { file: 'foo', projectRoot: 'bar' });

create('cobertura');
create('cobertura', { file: 'foo', projectRoot: 'bar' });

create('html');
create('html', { verbose: false, subdir: 'foo' });
create('html', {
	linkMapper: {
		getPath: () => 'foo',
		relativePath: () => 'foo',
		assetPath: () => 'foo'
	}
});

create('json');
create('json', { file: 'foo' });

create('json-summary');
create('json-summary', { file: 'foo' });

create('lcov');

create('lcovonly');
create('lcovonly', { file: 'foo' });

create('none');

create('teamcity');
create('teamcity', { file: 'foo' });
create('teamcity', { file: 'foo', blockName: 'bar' });

create('text');
create('text', { file: 'foo' });
create('text', { file: 'foo', maxCols: 3 });

create('text-lcov');
create('text-lcov', { file: 'foo' });

create('text-summary');
create('text-summary', { file: 'foo' });
