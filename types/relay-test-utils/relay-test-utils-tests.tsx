import React from 'react';
import { MockEnvironment, MockPayloadGenerator, unwrapContainer } from 'relay-test-utils';
import { createFragmentContainer, graphql } from 'react-relay';

const environment = MockEnvironment.createMockEnvironment();

environment.mock.resolveMostRecentOperation(operation => {
    MockPayloadGenerator.generate(operation);
});

function Test() {
    return <div />;
}

const TestFragment = createFragmentContainer(Test, {
    query: graphql``,
});

unwrapContainer(TestFragment);
