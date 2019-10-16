import svgr, { Options } from '@svgr/rollup';

// test data
const partialOptions: Options = { exclude: '', babel: true };
const fullOptions: Options = { include: '', exclude: '', babel: true };

// tests
svgr();
svgr(partialOptions);
svgr(fullOptions);
