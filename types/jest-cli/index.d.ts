export interface SnapshotSummary {}
export interface TestResult {}
export interface ReporterConfig {}
export interface FileCoverage {}
export interface SnapshotUpdateState {}
export interface RawFileCoverage {}
export interface RawCoverage {}
export type Argv = string[];

export type Path = string;

export type Glob = string;

export interface AggregatedResultWithoutCoverage {
    numFailedTests: number;
    numFailedTestSuites: number;
    numPassedTests: number;
    numPassedTestSuites: number;
    numPendingTests: number;
    numTodoTests: number;
    numPendingTestSuites: number;
    numRuntimeErrorTestSuites: number;
    numTotalTests: number;
    numTotalTestSuites: number;
    openHandles: Error[];
    snapshot: SnapshotSummary;
    startTime: number;
    success: boolean;
    testResults: TestResult[];
    wasInterrupted: boolean;
}

export interface CoverageMap {
    merge(data: { [index: string]: any }): void;
    getCoverageSummary(): FileCoverage;
    data: RawCoverage;
    addFileCoverage(fileCoverage: RawFileCoverage): void;
    files(): string[];
    fileCoverageFor(file: string): FileCoverage;
}

export interface AggregatedResult extends AggregatedResultWithoutCoverage {
    coverageMap?: CoverageMap;
}

export interface GlobalConfig {
    bail: boolean;
    changedSince: string;
    changedFilesWithAncestor: boolean;
    collectCoverage: boolean;
    collectCoverageFrom: Glob[];
    collectCoverageOnlyFrom?: { [key: string]: boolean };
    coverageDirectory: string;
    coveragePathIgnorePatterns?: string[];
    coverageReporters: string[];
    coverageThreshold: { global: { [key: string]: number } };
    detectLeaks: boolean;
    detectOpenHandles: boolean;
    enabledTestsMap?: { [key: string]: { [key: string]: boolean } };
    expand: boolean;
    filter?: Path;
    findRelatedTests: boolean;
    forceExit: boolean;
    json: boolean;
    globalSetup?: string;
    globalTeardown?: string;
    lastCommit: boolean;
    logHeapUsage: boolean;
    listTests: boolean;
    maxWorkers: number;
    noStackTrace: boolean;
    nonFlagArgs: string[];
    noSCM?: boolean;
    notify: boolean;
    notifyMode: string;
    outputFile?: Path;
    onlyChanged: boolean;
    onlyFailures: boolean;
    passWithNoTests: boolean;
    projects: Glob[];
    replname?: string;
    reporters: Array<string | ReporterConfig>;
    runTestsByPath: boolean;
    rootDir: Path;
    silent: boolean;
    skipFilter: boolean;
    errorOnDeprecated: boolean;
    testFailureExitCode: number;
    testNamePattern: string;
    testPathPattern: string;
    testResultsProcessor?: string;
    updateSnapshot: SnapshotUpdateState;
    useStderr: boolean;
    verbose?: boolean;
    watch: boolean;
    watchAll: boolean;
    watchman: boolean;
    watchPlugins?: Array<{ path: string; config: { [index: string]: any } }>;
}

export function run(maybeArgv?: Argv, project?: Path): Promise<void>;
export function runCLI(
    argv: Argv,
    projects: Path[]
): Promise<{ results: AggregatedResult; globalConfig: GlobalConfig }>;
