import { generateTestsFromFixtures, evaluateGraphQLResolver } from '@adeira/test-utils';

// generateTestsFromFixtures

generateTestsFromFixtures(`/__fixtures__`, input => input);
generateTestsFromFixtures(`/__fixtures__`, input => input, 'snapshot name');
generateTestsFromFixtures(`/__fixtures__`, 1); // $ExpectError
generateTestsFromFixtures(1, input => input); // $ExpectError

// evaluateGraphQLResolver

const mockField = { aaa: -1 };
evaluateGraphQLResolver(mockField, {
    country: ' ... ', // test value
});
