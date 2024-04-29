import { formatTestList } from "./format-test-list";
export interface VisitCallback {
    (test: Test | Suite, parentSuite?: Suite): void;
}
export interface Results {
    suiteNames: string[];
    testNames: string[];
    tests: Array<TestInfo | SuiteInfo>;
}
export interface ResultsWithStructure extends Results {
    structure: Structure;
    testCount: number;
    pendingTestCount: number;
}

export interface Test {
    name: string;
    requiredTags: string[] | undefined;
    type: "test";
    tags: Tags;
    pending: boolean;
}
export interface TestInfo {
    name: string;
    type: "test";
    pending: boolean;
    tags?: Tags | undefined;
}
export interface Suite {
    name: string;
    requiredTags?: string[] | undefined;
    tags?: Tags | undefined;
    pending: boolean;
    type: "suite";
    tests: Test[];
    suites: Suite[];
    testCount: number;
    suiteCount: number;
}
export interface SuiteInfo {
    name: string;
    type: "suite";
    pending: boolean;
    tags?: Tags | undefined;
}

export interface SuiteDescribe {
    suiteInfo: SuiteInfo;
    suite: Suite;
}
export interface TestDescribe {
    testInfo: TestInfo;
    test: Test;
}
export type Structure = Array<Suite | Test>;
export type Tags = string[];

// api

/**
 * Returns all suite and test names found in the given JavaScript
 * source code (Mocha / Cypress syntax)
 * @param source
 * @param [withStructure]
 */
export function getTestNames(source: string, withStructure?: false): Results;

/**
 * Returns all suite and test names found in the given JavaScript
 * source code (Mocha / Cypress syntax)
 * @param source
 * @param withStructure - return nested structure of suites and tests
 */
export function getTestNames(source: string, withStructure: true): ResultsWithStructure;

/**
 * Looks at the tests and counts how many tests in each suite
 * are pending. The parent suites use the sum of the inner
 * suite counts.
 * Warning: modifies the input structure
 * @param structure
 */
export function countTests(structure: Structure): {
    testCount: number;
    pendingTestCount: number;
};

/**
 * Synchronous tree walker, calls the given callback for each test.
 * @param structure
 * @param fn Receives the test as argument
 * @param [parentSuite]
 */
export function visitEachTest(structure: Structure, fn: VisitCallback, parentSuite?: Suite): void;
/**
 * Counts the tags found on the tests.
 * @param structure
 * @returns object with tags as keys and counts for each
 */
export function countTags(structure: Structure): Record<string, number>;
/**
 * @param structure
 * @param fn
 * @param parentSuite
 */
export function visitEachNode(structure: Structure, fn: VisitCallback, parentSuite: Suite): void;
/**
 * @param structure
 */
export function setParentSuite(structure: Structure): void;
/**
 * Visits each test and counts its tags and its parents' tags
 * to compute the "effective" tags list.
 * @param structure
 */
export function setEffectiveTags(structure: Structure): Structure;
/**
 * Visits each individual test in the structure and checks if it
 * has any effective tags from the given list.
 * @param structure
 * @param tags
 */
export function filterByEffectiveTags(structure: string | Structure, tags: string[]): Test[];

/**
 * Returns a single object with full test titles as keys.
 */
export function findEffectiveTestTags(source: string): Record<string, Tags>;

/**
 * Reads the source code of the given spec file from disk
 * and finds all tests and their effective tags.
 */
export function findEffectiveTestTagsIn(specFilename: string): ReturnType<typeof findEffectiveTestTags>;

export { formatTestList };
