import {
	CoverageMapData,
	CoverageSummary,
	FileCoverageData,
	createCoverageSummary,
	createCoverageMap,
	createFileCoverage
} from 'istanbul-lib-coverage';

const summaryData: CoverageSummary = {
	lines: { total: 0, covered: 0, skipped: 0, pct: 0 },
	statements: { total: 0, covered: 0, skipped: 0, pct: 0 },
	functions: { total: 0, covered: 0, skipped: 0, pct: 0 },
	branches: { total: 0, covered: 0, skipped: 0, pct: 0 }
};

const coverageMapData: CoverageMapData = {};

const fileCoverageData: FileCoverageData = {
	path: 'foo',
	statementMap: {},
	fnMap: {},
	branchMap: {},
	s: {},
	f: {},
	b: {}
};

const summary = createCoverageSummary(summaryData);
summary.branches;
summary.lines;
summary.functions;
summary.statements;

const map1 = createCoverageMap(coverageMapData);
map1.data;
const map2 = createCoverageMap(map1);
map2.data;

const fileCoverage1 = createFileCoverage('path/to/foo');
fileCoverage1.data;
const fileCoverage2 = createFileCoverage(fileCoverage1.data);
fileCoverage2.data;
const fileCoverage3 = createFileCoverage(fileCoverageData);
fileCoverage3.data;

// CoverageMap methods and properties
map1.addFileCoverage('foo.js');
map1.addFileCoverage(fileCoverageData);
map1.files()[0];
map1.fileCoverageFor('foo').path;
map1.filter(name => false);
map1.merge(map2);
map1.merge(coverageMapData);

// FileCoverage methods and properties
fileCoverage1.merge(fileCoverageData);
fileCoverage1.merge(fileCoverage2.data);
fileCoverage1.getBranchCoverageByLine()[5].covered;
isNaN(fileCoverage1.getLineCoverage()[5]);
isNaN(fileCoverage1.getUncoveredLines()[5]);
fileCoverage1.resetHits();
fileCoverage1.computeBranchTotals().skipped;
fileCoverage1.computeSimpleTotals().skipped;
isNaN(fileCoverage1.toSummary().branches.total);
