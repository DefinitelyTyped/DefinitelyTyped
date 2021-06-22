// tslint:disable:interface-over-type-literal
// tslint:disable:use-default-type-parameter

import * as React from 'react';
import {
    Environment,
    Network,
    RecordSource,
    Store,
    ConnectionHandler,
    _FragmentRefs,
    FragmentRefs,
} from 'relay-runtime';

import {
    commitMutation,
    createFragmentContainer,
    createPaginationContainer,
    createRefetchContainer,
    FragmentRef,
    graphql,
    QueryRenderer,
    LocalQueryRenderer,
    ReactRelayContext,
    readInlineData,
    RelayPaginationProp,
    RelayProp,
    RelayRefetchProp,
    requestSubscription,
} from 'react-relay';

// ~~~~~~~~~~~~~~~~~~~~~
// Modern Environment
// ~~~~~~~~~~~~~~~~~~~~~
function fetchQuery(operation: any, variables: any, cacheConfig: {}) {
    return fetch('/graphql').then(response => response.json());
}
const network = Network.create(fetchQuery);
const source = new RecordSource();
const store = new Store(source);
const modernEnvironment = new Environment({ network, store });

// ~~~~~~~~~~~~~~~~~~~~~
// Modern QueryRenderer
// ~~~~~~~~~~~~~~~~~~~~~

// Artifact produced by relay-compiler-language-typescript
type MyQueryVariables = {
    pageID: string;
};

type MyQueryResponse = {
    name: string;
};

type MyQuery = {
    variables: MyQueryVariables;
    response: MyQueryResponse;
};

const MyQueryRenderer = (props: { name: string; show: boolean }) => (
    <QueryRenderer<MyQuery>
        environment={modernEnvironment}
        query={
            props.show
                ? graphql`
                      query ExampleQuery($pageID: ID!) {
                          page(id: $pageID) {
                              name
                          }
                      }
                  `
                : null
        }
        fetchPolicy="store-and-network"
        variables={{
            pageID: '110798995619330',
        }}
        render={({ error, props }) => {
            if (error) {
                return <div>{error.message}</div>;
            } else if (props) {
                return <div>{props.name} is great!</div>;
            }
            return <div>Loading</div>;
        }}
    />
);

const MyEmptyQueryRenderer = () => (
    <QueryRenderer
        environment={modernEnvironment}
        // NOTE: let's intentionally leave out `query`
        query={undefined}
        variables={{}}
        render={({ error, props }) => {
            if (error) {
                return <div>{error.message}</div>;
            } else if (props) {
                throw new Error('This code path should never be hit');
            }
            return <div>Loading</div>;
        }}
    />
);

// ~~~~~~~~~~~~~~~~~~~~~
// LocalQueryRenderer
// ~~~~~~~~~~~~~~~~~~~~~
// should behave the same as QueryRenderer less the two optional props, cacheConfig and fetchPolicy

const MyLocalQueryRenderer = (props: { name: string; show: boolean }) => (
    <LocalQueryRenderer<MyQuery>
        environment={modernEnvironment}
        query={
            props.show
                ? graphql`
                      query ExampleQuery($pageID: ID!) {
                          page(id: $pageID) {
                              name
                          }
                      }
                  `
                : null
        }
        variables={{
            pageID: '110798995619330',
        }}
        render={({ error, props }) => {
            if (error) {
                return <div>{error.message}</div>;
            } else if (props) {
                return <div>{props.name} is great!</div>;
            }
            return <div>Loading</div>;
        }}
    />
);

const MyEmptyLocalQueryRenderer = () => (
    <LocalQueryRenderer
        environment={modernEnvironment}
        query={undefined}
        variables={{}}
        render={({ error, props }) => {
            if (error) {
                return <div>{error.message}</div>;
            } else if (props) {
                throw new Error('This code path should never be hit');
            }
            return <div>Loading</div>;
        }}
    />
);

// ~~~~~~~~~~~~~~~~~~~~~
// Modern RefetchContainer
// ~~~~~~~~~~~~~~~~~~~~~

type StoryLike = (storyID: string) => void;

// Artifact produced by relay-compiler-language-typescript
type Story_story = {
    readonly id: string;
    readonly text: string;
    readonly isPublished: boolean;
    readonly ' $refType': 'Story_story';
};

const Story = (() => {
    interface Props {
        relay: RelayRefetchProp;
        story: Story_story;
        onLike: StoryLike;
        ignoreMe?: {};
    }

    interface State {
        isLoading: boolean;
    }

    class Story extends React.Component<Props> {
        state = {
            isLoading: false,
        };

        componentDidMount() {
            setInterval(this.handleRefresh.bind(this), 1000);
        }

        handleRefresh() {
            this.setState({ isLoading: true });
            this.props.relay.refetch(
                { id: this.props.story.id },
                {},
                error => {
                    this.setState({ isLoading: false });
                },
                { force: true },
            );
        }

        render() {
            return (
                <div>
                    {this.props.story.isPublished ? '' : 'Draft: '}
                    {this.props.story.text}
                    {this.state.isLoading && <span>♺</span>}
                    <button onClick={() => this.props.onLike(this.props.story.id)}>LIKE</button>
                </div>
            );
        }
    }

    const StoryRefetchContainer = createRefetchContainer(
        Story,
        {
            story: graphql`
                fragment Story_story on Todo {
                    id
                    text
                    isPublished
                }
            `,
        },
        graphql`
            query StoryRefetchQuery($id: ID!) {
                story(id: $id) {
                    ...Story_story
                }
            }
        `,
    );

    function requiresTheRightProps() {
        const onLike = (id: string) => console.log(`Liked story #${id}`);
        const story: _FragmentRefs<'Story_story'> = {} as any;
        <StoryRefetchContainer story={story} onLike={onLike} />;
    }

    function requiresTheCorrectFragmentRef() {
        const onLike = (id: string) => console.log(`Liked story #${id}`);
        const feed: _FragmentRefs<'FeedStories_feed'> = {} as any;
        // $ExpectError
        <StoryRefetchContainer story={feed} onLike={onLike} />;
    }

    function doesNotRequireRelayPropToBeProvidedByParent() {
        const onLike = (id: string) => console.log(`Liked story #${id}`);
        const story: _FragmentRefs<'Story_story'> = {} as any;
        const relayProp: RelayRefetchProp = {} as any;
        // $ExpectError
        <StoryRefetchContainer story={story} onLike={onLike} relay={relayProp} />;
    }

    function requiresTheRelayPropInPropsInterface() {
        // FIXME: This should throw a type error, but doesn't
        // const FunctionComponent: React.FC<{}> = () => null;
        // // $ExpectError
        // createRefetchContainer(FunctionComponent, { story: graphql`` }, graphql``);

        class ClassComponent extends React.Component<{}> {}
        // $ExpectError
        createRefetchContainer(ClassComponent, { story: graphql`` }, graphql``);
    }

    function requiresTheCorrectRelayPropTypeInPropsInterface() {
        class ClassComponent1 extends React.Component<{ relay: RelayProp }> {}
        // $ExpectError
        createRefetchContainer(ClassComponent1, { story: graphql`` }, graphql``);

        class ClassComponent2 extends React.Component<{ relay: RelayPaginationProp }> {}
        // $ExpectError
        createRefetchContainer(ClassComponent2, { story: graphql`` }, graphql``);

        class ClassComponent3 extends React.Component<{ relay: undefined }> {}
        // $ExpectError
        createRefetchContainer(ClassComponent3, { story: graphql`` }, graphql``);
    }

    function canTakeComponentRef() {
        const onLike = (id: string) => console.log(`Liked story #${id}`);
        const story: _FragmentRefs<'Story_story'> = {} as any;
        <StoryRefetchContainer story={story} onLike={onLike} componentRef={ref => console.log(ref)} />;
    }

    return StoryRefetchContainer;
})();

// ~~~~~~~~~~~~~~~~~~~~~
// Modern FragmentContainer
// ~~~~~~~~~~~~~~~~~~~~~

// Artifact produced by relay-compiler-language-typescript
type FeedStories_feed = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly ' $fragmentRefs': FragmentRefs<'Story_story' | 'FeedStories_feed'>;
        };
        readonly ' $fragmentRefs': FragmentRefs<'FeedStory_edges'>;
    }>;
    readonly ' $refType': 'FeedStories_feed';
};
type FeedStory_edges = ReadonlyArray<{
    readonly publishedAt: string;
    readonly ' $refType': 'FeedStory_edges';
}>;

const Feed = (() => {
    interface Props {
        relay: RelayProp;
        feed: FeedStories_feed;
        onStoryLike: StoryLike;
        ignoreMe?: {};
    }

    const FeedStoryEdges: React.FC<{ edges: FeedStory_edges; relay: RelayProp }> = ({ edges }) => (
        <div>{edges.map(({ publishedAt }) => publishedAt).join(', ')}</div>
    );

    const FeedStoryEdgesFragmentContainer = createFragmentContainer(FeedStoryEdges, {
        edges: graphql`
            fragment FeedStory_edges on FeedStoryEdge @relay(plural: true) {
                publishedAt
            }
        `,
    });

    const FeedStories: React.FC<Props> = ({ feed, onStoryLike, relay }) => {
        // TODO: Getting env here for no good reason other than needing to test it works.
        //       If you have a good relavant example, please update!
        relay.environment;
        const stories = feed.edges.map(edge => {
            return <Story story={edge.node} key={edge.node.id} onLike={onStoryLike} />;
        });
        return (
            <div>
                {stories}
                <span>{<FeedStoryEdgesFragmentContainer edges={feed.edges} />}</span>
            </div>
        );
    };

    const FeedFragmentContainer = createFragmentContainer(FeedStories, {
        feed: graphql`
            fragment FeedStories_feed on Feed {
                edges {
                    node {
                        id
                        ...Story_story
                    }
                    ...FeedStoryEdges_feed
                }
            }
        `,
    });

    function requiresTheRightProps() {
        const onStoryLike = (id: string) => console.log(`Liked story #${id}`);
        const feed: _FragmentRefs<'FeedStories_feed'> = {} as any;
        <FeedFragmentContainer feed={feed} onStoryLike={onStoryLike} />;
    }

    function requiresTheCorrectFragmentRef() {
        const onStoryLike = (id: string) => console.log(`Liked story #${id}`);
        const story: _FragmentRefs<'Story_story'> = {} as any;
        // $ExpectError
        <FeedFragmentContainer feed={story} onStoryLike={onStoryLike} />;
    }

    function doesNotRequireRelayPropToBeProvidedByParent() {
        const onStoryLike = (id: string) => console.log(`Liked story #${id}`);
        const feed: _FragmentRefs<'FeedStories_feed'> = {} as any;
        const relayProp: RelayProp = {} as any;
        // $ExpectError
        <FeedFragmentContainer feed={feed} onStoryLike={onStoryLike} relay={relayProp} />;
    }

    function doesNotRequireTheRelayPropInPropsInterface() {
        const FunctionComponent: React.FC<{}> = () => null;
        createFragmentContainer(FunctionComponent, {});

        class ClassComponent extends React.Component<{}> {}
        createFragmentContainer(ClassComponent, {});
    }

    function requiresTheCorrectRelayPropTypeInPropsInterface() {
        class ClassComponent1 extends React.Component<{ relay: RelayRefetchProp }> {}
        // $ExpectError
        createFragmentContainer(ClassComponent1, {});

        class ClassComponent2 extends React.Component<{ relay: RelayPaginationProp }> {}
        // $ExpectError
        createFragmentContainer(ClassComponent2, {});
    }

    function canTakeComponentRef() {
        const onStoryLike = (id: string) => console.log(`Liked story #${id}`);
        const feed: _FragmentRefs<'FeedStories_feed'> = {} as any;
        <FeedFragmentContainer feed={feed} onStoryLike={onStoryLike} componentRef={ref => console.log(ref)} />;
    }

    return FeedFragmentContainer;
})();

// ~~~~~~~~~~~~~~~~~~~~~
// Modern PaginationContainer
// ~~~~~~~~~~~~~~~~~~~~~

// Artifact produced by relay-compiler-language-typescript
type UserFeed_user = {
    readonly feed: {
        readonly pageInfo: {
            readonly endCursor?: string | null;
            readonly hasNextPage: boolean;
        };
        readonly ' $fragmentRefs': FragmentRefs<'FeedStories_feed'>;
    };
    readonly ' $refType': 'UserFeed_user';
};
() => {
    interface Props {
        relay: RelayPaginationProp;
        loadMoreTitle: string;
        user: UserFeed_user;
        ignoreMe?: {};
    }

    class UserFeed extends React.Component<Props> {
        render() {
            const onStoryLike = (id: string) => console.log(`Liked story #${id}`);
            return (
                <div>
                    <Feed feed={this.props.user.feed} onStoryLike={onStoryLike} />
                    <button onClick={() => this._loadMore()} title={this.props.loadMoreTitle} />
                </div>
            );
        }

        _loadMore() {
            if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
                return;
            }

            this.props.relay.loadMore(
                10, // Fetch the next 10 feed items
                e => {
                    console.log(e);
                },
            );
        }
    }

    const UserFeedPaginationContainer = createPaginationContainer(
        UserFeed,
        {
            user: graphql`
                fragment UserFeed_user on User {
                    feed(
                        first: $count
                        after: $cursor
                        orderby: $orderBy # other variables
                    ) @connection(key: "Feed_feed") {
                        ...FeedStories_feed
                        pageInfo {
                            endCursor
                            hasNextPage
                        }
                    }
                }
            `,
        },
        {
            direction: 'forward',
            getConnectionFromProps(props) {
                return props.user && props.user.feed;
            },
            getFragmentVariables(prevVars, totalCount) {
                return {
                    ...prevVars,
                    count: totalCount,
                };
            },
            getVariables(props, { count, cursor }, fragmentVariables) {
                return {
                    count,
                    cursor,
                    // in most cases, for variables other than connection filters like
                    // `first`, `after`, etc. you may want to use the previous values.
                    orderBy: fragmentVariables.orderBy,
                };
            },
            query: graphql`
                query FeedPaginationQuery($count: Int!, $cursor: String, $orderby: String!) {
                    user {
                        # You could reference the fragment defined previously.
                        ...Feed_user
                    }
                }
            `,
        },
    );

    function requiresTheRightProps() {
        const user: _FragmentRefs<'UserFeed_user'> = {} as any;
        <UserFeedPaginationContainer loadMoreTitle="Load More" user={user} />;
    }

    function requiresTheCorrectFragmentRef() {
        const story: _FragmentRefs<'Story_story'> = {} as any;
        // $ExpectError
        <UserFeedPaginationContainer loadMoreTitle="Load More" user={story} />;
    }

    function doesNotRequireRelayPropToBeProvidedByParent() {
        const user: _FragmentRefs<'UserFeed_user'> = {} as any;
        const relayProp: RelayPaginationProp = {} as any;
        // $ExpectError
        <UserFeedPaginationContainer loadMoreTitle="Load More" user={user} relay={relayProp} />;
    }

    function requiresTheRelayPropInPropsInterface() {
        // FIXME: This should throw a type error, but doesn't
        // const FunctionComponent: React.FC<{}> = () => null;
        // // $ExpectError
        // createPaginationContainer(FunctionComponent, {}, {} as any);

        class ClassComponent extends React.Component<{}> {}
        // $ExpectError
        createPaginationContainer(ClassComponent, {}, {} as any);
    }

    function requiresTheCorrectRelayPropTypeInPropsInterface() {
        class ClassComponent1 extends React.Component<{ relay: RelayProp }> {}
        // $ExpectError
        createPaginationContainer(ClassComponent1, {}, {} as any);

        class ClassComponent2 extends React.Component<{ relay: RelayRefetchProp }> {}
        // $ExpectError
        createPaginationContainer(ClassComponent2, {}, {} as any);

        class ClassComponent3 extends React.Component<{ relay: undefined }> {}
        // $ExpectError
        createPaginationContainer(ClassComponent3, {}, {} as any);
    }

    function canTakeComponentRef() {
        const user: _FragmentRefs<'UserFeed_user'> = {} as any;
        <UserFeedPaginationContainer loadMoreTitle="Load More" user={user} componentRef={ref => console.log(ref)} />;
    }
};

// ~~~~~~~~~~~~~~~~~~~~~
// Modern Mutations
// ~~~~~~~~~~~~~~~~~~~~~
export const mutation = graphql`
    mutation MarkReadNotificationMutation($input: MarkReadNotificationData!) {
        markReadNotification(data: $input) {
            notification {
                seenState
            }
        }
    }
`;

export const optimisticResponse = {
    markReadNotification: {
        notification: {
            seenState: 'SEEN' as 'SEEN',
        },
    },
};

export const configs = [
    {
        type: 'NODE_DELETE' as 'NODE_DELETE',
        deletedIDFieldName: 'destroyedShipId',
    },
    {
        type: 'RANGE_ADD' as 'RANGE_ADD',
        parentID: 'shipId',
        connectionInfo: [
            {
                key: 'AddShip_ships',
                rangeBehavior: 'append',
            },
        ],
        edgeName: 'newShipEdge',
    },
    {
        type: 'RANGE_DELETE' as 'RANGE_DELETE',
        parentID: 'todoId',
        connectionKeys: [
            {
                key: 'RemoveTags_tags',
                rangeBehavior: 'append',
            },
        ],
        pathToConnection: ['todo', 'tags'],
        deletedIDFieldName: 'removedTagId',
    },
];

function markNotificationAsRead(source: string, storyID: string) {
    // Artifact produced by relay-compiler-language-typescript
    type MyMutationVariables = {
        readonly input: {
            readonly source: string;
            readonly storyID: string;
        };
    };
    type MyMutationResponse = {
        readonly markReadNotification: {
            readonly notification: {
                readonly seenState: 'SEEN' | 'UNSEEN';
            };
        };
    };
    type MyMutation = {
        readonly variables: MyMutationVariables;
        readonly response: MyMutationResponse;
    };

    commitMutation<MyMutation>(modernEnvironment, {
        configs,
        mutation,
        optimisticResponse,
        variables: {
            input: {
                source,
                storyID,
            },
        },
        onCompleted: (response, errors) => {
            if (errors) {
                console.log(`Errors received from server: ${errors.map(error => error.message).join(', ')}`);
            } else {
                console.log(`Response received from server: ${response.markReadNotification.notification.seenState}`);
            }
        },
        onError: err => console.error(err),
        updater: (store, data) => {
            const story = store.get(storyID);
            if (story) {
                story.setValue(data.markReadNotification.notification.seenState, 'seenState');
            }
        },
    });
}

// ~~~~~~~~~~~~~~~~~~~~~
// readInlineData
// ~~~~~~~~~~~~~~~~~~~~~

const storyFragment = graphql`
    fragment Story_story on Todo {
        id
        text
        isPublished
    }
`;

function functionWithInline(storyRef: FragmentRef<Story_story>): Story_story {
    return readInlineData<Story_story>(storyFragment, storyRef);
}

const inlineData: _FragmentRefs<'Story_story'> = {} as any;
functionWithInline(inlineData).isPublished;

// ~~~~~~~~~~~~~~~~~~~~~
// Modern Subscriptions
// ~~~~~~~~~~~~~~~~~~~~~
const subscription = graphql`
    subscription MarkReadNotificationSubscription($storyID: ID!) {
        markReadNotification(storyID: $storyID) {
            notification {
                seenState
            }
        }
    }
`;
const variables = {
    storyID: '123',
};
requestSubscription(
    modernEnvironment, // see Environment docs
    {
        subscription,
        variables,
        // optional but recommended:
        onCompleted: () => {},
        onError: error => console.error(error),
        // example of a custom updater
        updater: store => {
            // Get the notification
            const rootField = store.getRootField('markReadNotification');
            const notification = !!rootField ? rootField.getLinkedRecord('notification') : null;
            // Add it to a connection
            const viewer = store.getRoot().getLinkedRecord('viewer');
            const notifications = ConnectionHandler.getConnection(viewer!, 'notifications');
            const edge = ConnectionHandler.createEdge(
                store,
                notifications!,
                notification!,
                '<TypeOfNotificationsEdge>',
            );
            ConnectionHandler.insertEdgeAfter(notifications!, edge);
        },
    },
);

// ~~~~~~~~~~~~~~~~~~~~~
// Context
// ~~~~~~~~~~~~~~~~~~~~~

ReactRelayContext.Consumer.prototype;
ReactRelayContext.Provider.prototype;

const MyRelayContextProvider: React.FunctionComponent = children => {
    return (
        <ReactRelayContext.Provider
            value={{
                environment: modernEnvironment,
            }}>
            {children}
        </ReactRelayContext.Provider>
    );
};

const MyRelayContextConsumer: React.FunctionComponent = () => {
    const relayContext = React.useContext(ReactRelayContext);
    if (!relayContext || !relayContext.environment) {
        return null;
    }

    return (
        <QueryRenderer<MyQuery>
            environment={relayContext.environment}
            query={graphql`
                query ExampleQuery($pageID: ID!) {
                    page(id: $pageID) {
                        name
                    }
                }
            `}
            variables={{
                pageID: '110798995619330',
            }}
            render={({ error, props }) => {
                if (error) {
                    return <div>{error.message}</div>;
                } else if (props) {
                    return <div>{props.name} is great!</div>;
                }
                return <div>Loading</div>;
            }}
        />
    );
};
