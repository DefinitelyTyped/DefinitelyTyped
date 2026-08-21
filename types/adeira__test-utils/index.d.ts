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
