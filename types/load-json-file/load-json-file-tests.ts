
import * as loadJsonFile from 'load-json-file';

function assert(actual: string, expected: string): void {
	if (actual !== expected) {
		throw new Error(`${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
	}
}

loadJsonFile('../package.json').then(pkg => {
	assert(pkg.name, 'definitely-typed');
});

const pkg = loadJsonFile.sync('../package.json');
assert(pkg.name, 'definitely-typed');
