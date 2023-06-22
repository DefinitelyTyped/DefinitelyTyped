import { generateTestsFromFixtures, evaluateGraphQLResolver } from '@adeira/test-utils';

// generateTestsFromFixtures

generateTestsFromFixtures(`/__fixtures__`, input => input);
generateTestsFromFixtures(`/__fixtures__`, input => input, 'snapshot name');
// @ts-expect-error
generateTestsFromFixtures(`/__fixtures__`, 1);
// @ts-expect-error
generateTestsFromFixtures(1, input => input);

// evaluateGraphQLResolver

const mockField = { aaa: -1 };
evaluateGraphQLResolver(mockField, {
    country: ' ... ', // test value
});
