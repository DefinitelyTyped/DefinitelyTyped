import {
	createContext,
	getDefaultWatermarks,
	summarizers,
	Watermarks
} from 'istanbul-lib-report';

import { CoverageMap } from 'istanbul-lib-coverage';

const watermarks: Watermarks = {
	statements: [],
	branches: [],
	functions: [],
	lines: []
};

createContext();
createContext({});
const context = createContext({
	dir: 'foo',
	watermarks,
	sourceFinder: (filepath: string) => ''
});

context.watermarks;
context.sourceFinder('foo').trim();

const defaultMarks: Watermarks = getDefaultWatermarks();

const map = new CoverageMap({});
summarizers.flat(map).getRoot();
summarizers.nested(map).getRoot();
summarizers.pkg(map).getRoot();
