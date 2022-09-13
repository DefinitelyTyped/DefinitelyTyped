import {
    createInstrumenter,
    readInitialCoverage,
    programVisitor
} from 'istanbul-lib-instrument';

import * as babelTypes from 'babel-types';
import { RawSourceMap } from 'source-map';

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

const sourceMap: RawSourceMap = {
    version: 1 as any as string, // Fixed by https://github.com/mozilla/source-map/pull/293 but the fix is not yet published
    sources: ['foo', 'bar'],
    names: ['foo', 'bar'],
    mappings: 'foo',
    file: 'foo'
};
instrumenter.instrumentSync(code, filename);
const newCode = instrumenter.instrumentSync(code, filename, sourceMap);
code.trim();

// instrument with all args
instrumenter.instrument(code, filename, (error, code) => {
    if (error) {
        error.stack;
    } else {
        code.trim();
    }
}, sourceMap);

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
const visitor = programVisitor(babelTypes, filename, { inputSourceMap: sourceMap });

visitor.enter(filename);
const data = visitor.exit(filename);
Object.create(data.fileCoverage);
