import React from "react";
import { createFragmentContainer, graphql, QueryRenderer } from "react-relay";
import { createMockEnvironment, MockPayloadGenerator, unwrapContainer } from "relay-test-utils";

// $ExpectType RelayMockEnvironment
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

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type User = {
    __typename?: "User";
    id: string;
    displayName?: string;
};

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type TypeMap = {
    ID: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    User: User;
};

type MockResolvers = MockPayloadGenerator.MockResolvers<TypeMap>;
type UserMockResolver = MockResolvers["User"];

const userResolver: UserMockResolver = (context, generateId) => {
    const id = generateId();

    return {
        id: (context.name || "") + String(id),
        displayName: "User " + id,
    };
};

const mockResolvers: MockResolvers = {
    User: userResolver,
};

const rawMockResolvers: MockPayloadGenerator.MockResolvers = {
    Int: () => 42,
};

environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation, mockResolvers, { mockClientData: true })
);

environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation, rawMockResolvers, { mockClientData: true })
);
