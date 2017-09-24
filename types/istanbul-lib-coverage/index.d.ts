// Type definitions for istanbul-lib-coverage 1.1
// Project: https://github.com/istanbuljs/istanbuljs
// Definitions by: Jason Cheatham <https://github.com/jason0x43>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export interface CoverageSummary {
	lines: Totals;
	statements: Totals;
	branches: Totals;
	functions: Totals;
}

export interface CoverageMapData {
	[key: string]: FileCoverage;
}

export class CoverageMap {
	constructor(data: CoverageMapData);
	addFileCoverage(pathOrObject: string | FileCoverageData): void;
	files(): string[];
	fileCoverageFor(filename: string): FileCoverage;
	filter(callback: (key: string) => boolean): void;
	merge(data: CoverageMapData | CoverageMap): void;
	toJSON(): object;
	data: CoverageMapData;
}

export interface Location {
	line: number;
	column: number;
}

export interface Range {
	start: Location;
	end: Location;
}

export interface BranchMapping {
	loc: Range;
	type: string;
	locations: Range[];
	line: number;
}

export interface FunctionMapping {
	name: string;
	decl: Range;
	loc: Range;
	line: number;
}

export interface FileCoverageData {
	path: string;
	statementMap: { [key: string]: Range };
	fnMap: { [key: string]: FunctionMapping };
	branchMap: { [key: string]: BranchMapping };
	s: { [key: string]: number };
	f: { [key: string]: number };
	b: { [key: string]: number[] };
}

export interface Totals {
	total: number;
	covered: number;
	skipped: number;
	pct: number;
}

export interface Coverage {
	covered: number;
	total: number;
	coverage: number;
}

export class FileCoverage implements FileCoverageData {
	constructor(data: string | FileCoverageData);
	merge(other: FileCoverageData): void;
	getBranchCoverageByLine(): { [line: number]: Coverage };
	getLineCoverage(): { [line: number]: number };
	getUncoveredLines(): number[];
	resetHits(): void;
	computeBranchTotals(): Totals;
	computeSimpleTotals(): Totals;
	toSummary(): CoverageSummary;
	toJSON(): object;

	data: FileCoverageData;
	path: string;
	statementMap: { [key: string]: Range };
	fnMap: { [key: string]: FunctionMapping };
	branchMap: { [key: string]: BranchMapping };
	s: { [key: string]: number };
	f: { [key: string]: number };
	b: { [key: string]: number[] };
}

export const classes: {
	FileCoverage: FileCoverage;
};

export function createCoverageMap(data?: CoverageMap | CoverageMapData): CoverageMap;
export function createCoverageSummary(obj?: CoverageSummary): CoverageSummary;
export function createFileCoverage(pathOrObject: string | FileCoverageData): FileCoverage;
