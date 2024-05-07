import React from "react";
import { createFragmentContainer, graphql, QueryRenderer } from "react-relay";
import { createMockEnvironment, MockPayloadGenerator, unwrapContainer } from "relay-test-utils";

// @ExpectType MockEnvironment
const environment = createMockEnvironment();

environment.mock.resolveMostRecentOperation(operation => {
    return MockPayloadGenerator.generate(operation);
});

environment.mock.queuePendingOperation(graphql``, { foo: "bar" });

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
                if (error) return <div>{String(error)}</div>;

                if (props) return <TestFragment {...props} />;

                return <div>Loading</div>;
            }}
            variables={{}}
        />
    );
}
