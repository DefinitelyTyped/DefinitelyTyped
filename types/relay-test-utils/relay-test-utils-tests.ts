import { MockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

const environment = MockEnvironment.createMockEnvironment();

environment.mock.resolveMostRecentOperation(operation => {
    MockPayloadGenerator.generate(operation);
});
