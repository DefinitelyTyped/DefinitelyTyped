import React from 'react';
import { MockEnvironment, MockPayloadGenerator, unwrapContainer } from 'relay-test-utils';
import { createFragmentContainer, graphql, QueryRenderer } from 'react-relay';

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

function TestQueryRenderer() {
    return (
        <QueryRenderer<any>
            environment={environment}
            query={graphql``}
            render={({ error, props }) => {
                if (error) return <div>{error}</div>;

                if (props) return <TestFragment {...props} />;

                return <div>Loading</div>;
            }}
            variables={{}}
        />
    );
}
