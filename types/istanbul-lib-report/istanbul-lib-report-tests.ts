import {
	createContext,
	getDefaultWatermarks,
	summarizers,
	Watermarks
} from 'istanbul-lib-report';

import { CoverageMap } from 'istanbul-lib-coverage';

const watermarks: Watermarks = {
	statements: [50, 100],
	branches: [10, 50],
	functions: [50, 99],
	lines: [25, 75]
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

const context2 = createContext({
	watermarks: {
		statements: [75, 100]
	}
});

context2.watermarks.functions[1];

const defaultMarks: Watermarks = getDefaultWatermarks();

const map = new CoverageMap({});
summarizers.flat(map).getRoot();
summarizers.nested(map).getRoot();
summarizers.pkg(map).getRoot();
