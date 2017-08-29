import {
	createInstrumenter,
	readInitialCoverage,
	programVisitor
} from 'istanbul-lib-instrument';

import * as babelTypes from 'babel-types';

const code = 'foo';
const filename = 'bar.txt';

createInstrumenter();
createInstrumenter({});
createInstrumenter({
	coverageVariable: 'coverage'
});
const instrumenter = createInstrumenter({
	preserveComments: true,
	compact: false,
	esModules: true,
	autoWrap: false,
	produceSourceMap: true,
	sourceMapUrlCallback: (filename: string, url: string) => {},
	debug: false
});

instrumenter.instrumentSync(code, filename);
const newCode = instrumenter.instrumentSync(code, filename, {});
code.trim();

// instrument with all args
instrumenter.instrument(code, filename, (error, code) => {
	if (error) {
		error.stack;
	} else {
		code.trim();
	}
}, {});

// instrument without a filename
instrumenter.instrument(code, (error, code) => {
	if (error) {
		error.stack;
	} else {
		code.trim();
	}
});

const cov = instrumenter.lastFileCoverage();
Object.create(cov);

const map = instrumenter.lastSourceMap();
Object.create(map);

const initialCov = readInitialCoverage(code);
initialCov.gcv;

programVisitor(babelTypes);
programVisitor(babelTypes, filename);
programVisitor(babelTypes, filename, { coverageVariable: 'coverage' });
const visitor = programVisitor(babelTypes, filename, { inputSourceMap: {} });

visitor.enter(filename);
const data = visitor.exit(filename);
Object.create(data.fileCoverage);
