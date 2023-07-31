// Type definitions for @adeira/test-utils 0.6
// Project: https://github.com/adeira/universe/tree/master/src/test-utils
// Definitions by: Martin Zlámal <https://github.com/mrtnzlml>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function generateTestsFromFixtures(
    fixturesPath: string,
    operation: (input: string) => any,
    snapshotName?: string,
): void;

export function evaluateGraphQLResolver(
    field: Record<string, any>,
    testValue: any,
    argsValue?: Record<string, any>,
    contextValue?: Record<string, any>,
): any;
