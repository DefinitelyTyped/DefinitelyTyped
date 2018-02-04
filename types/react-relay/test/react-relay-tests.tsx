// tslint:disable:interface-over-type-literal

import * as React from "react";
import { Environment, Network, RecordSource, Store, ConnectionHandler, ConcreteFragment } from "relay-runtime";

import {
    graphql,
    commitMutation,
    createFragmentContainer,
    createPaginationContainer,
    createRefetchContainer,
    requestSubscription,
    QueryRenderer,
    RelayRefetchProp,
    RelayPaginationProp,
    RelayProp
} from "react-relay";

// ~~~~~~~~~~~~~~~~~~~~~
// Modern Environment
// ~~~~~~~~~~~~~~~~~~~~~
function fetchQuery(operation: any, variables: any, cacheConfig: {}) {
    return fetch("/graphql");
}
const network = Network.create(fetchQuery);
const source = new RecordSource();
const store = new Store(source);
const modernEnvironment = new Environment({ network, store });

// ~~~~~~~~~~~~~~~~~~~~~
// Modern QueryRenderer
// ~~~~~~~~~~~~~~~~~~~~~
const MyQueryRenderer = (props: { name: string }) => (
    <QueryRenderer
        environment={modernEnvironment}
        query={graphql`
            query ExampleQuery($pageID: ID!) {
                page(id: $pageID) {
                    name
                }
            }
        `}
        variables={{
            pageID: "110798995619330",
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

// ~~~~~~~~~~~~~~~~~~~~~
// Modern RefetchContainer
// ~~~~~~~~~~~~~~~~~~~~~

type StoryLike = (storyID: string) => void;

// Artifact produced by relay-compiler-language-typescript
const enum _Story_story$ref {}
type Story_story$ref = _Story_story$ref & ConcreteFragment;
type Story_story = {
    readonly id: string;
    readonly text: string;
    readonly isPublished: boolean;
    readonly " $refType": Story_story$ref;
};

const Story = (() => {
    interface Props {
        relay: RelayRefetchProp;
        story: Story_story;
        onLike: StoryLike;
    }

    interface State {
        isLoading: boolean;
    }

    class Story extends React.Component<Props> {
        state = {
            isLoading: false
        };

        componentDidMount() {
            setInterval(this.handleRefresh.bind(this), 1000);
        }

        handleRefresh() {
            this.setState({ isLoading: true });
            this.props.relay.refetch({ id: this.props.story.id }, {}, error => {
                this.setState({ isLoading: false });
            }, { force: true });
        }

        render() {
            return (
                <div>
                    {this.props.story.isPublished ? "" : "Draft: "}
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
        graphql.experimental`
            query StoryRefetchQuery($id: ID!) {
                story(id: $id) {
                    ...Story_story
                }
            }
        `
    );

    function doesNotRequireRelayPropToBeProvided() {
        const onLike = (id: string) => console.log(`Liked story #${id}`);
        const story: { " $fragmentRefs": Story_story$ref } = {} as any;
        // TODO: Fix requirement to cast fragment reference as `any`.
        <StoryRefetchContainer story={story as any} onLike={onLike} />;
    }

    return StoryRefetchContainer;
})();

// ~~~~~~~~~~~~~~~~~~~~~
// Modern FragmentContainer
// ~~~~~~~~~~~~~~~~~~~~~

// Artifact produced by relay-compiler-language-typescript
const enum _FeedStories_feed$ref {}
type FeedStories_feed$ref = _FeedStories_feed$ref & ConcreteFragment;
type FeedStories_feed = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly " $fragmentRefs": Story_story$ref;
        };
    }>;
    readonly " $refType": FeedStories_feed$ref;
};

const Feed = (() => {
    interface Props {
        relay: RelayProp;
        feed: FeedStories_feed;
        onStoryLike: StoryLike;
    }

    const FeedStories: React.SFC<Props> = ({ feed, onStoryLike, relay }) => {
        // TODO: Getting env here for no good reason other than needing to test it works.
        //       If you have a good relavant example, please update!
        relay.environment;
        const stories = feed.edges.map(edge => {
            // TODO: Fix requirement to cast fragment reference as `any`.
            return <Story story={edge.node as any} key={edge.node.id} onLike={onStoryLike} />;
        });
        return <div>{stories}</div>;
    };

    const FeedFragmentContainer = createFragmentContainer(
        FeedStories,
        {
            feed: graphql`
                fragment FeedStories_feed on Feed {
                    edges {
                        node {
                            id
                            ...Story_story
                        }
                    }
                }
            `,
        }
    );

    function doesNotRequireRelayPropToBeProvided() {
        const onStoryLike = (id: string) => console.log(`Liked story #${id}`);
        const feed: { " $fragmentRefs": FeedStories_feed$ref } = {} as any;
        // TODO: Fix requirement to cast fragment reference as `any`.
        <FeedFragmentContainer feed={feed as any} onStoryLike={onStoryLike} />;
    }

    return FeedFragmentContainer;
})();

// ~~~~~~~~~~~~~~~~~~~~~
// Modern PaginationContainer
// ~~~~~~~~~~~~~~~~~~~~~

// Artifact produced by relay-compiler-language-typescript
const enum _UserFeed_user$ref {}
type UserFeed_user$ref = _UserFeed_user$ref & ConcreteFragment;
type UserFeed_user = {
    readonly feed: {
        readonly pageInfo: {
            readonly endCursor?: string | null;
            readonly hasNextPage: boolean;
        };
        readonly " $fragmentRefs": FeedStories_feed$ref;
    };
    readonly " $refType": UserFeed_user$ref;
};

() => {
    interface Props {
        relay: RelayPaginationProp;
        loadMoreTitle: string;
        user: UserFeed_user;
    }

    class UserFeed extends React.Component<Props> {
        render() {
            const onStoryLike = (id: string) => console.log(`Liked story #${id}`);
            // TODO: Fix requirement to cast fragment reference as `any`.
            const feed = this.props.user.feed as any;
            return (
                <div>
                    <Feed feed={feed} onStoryLike={onStoryLike} />
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
                }
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
            direction: "forward",
            getConnectionFromProps(props) {
                // TODO: Fix requirement to have `edges` and both `pageInfo` details for forward and backward pagination
                return props.user && props.user.feed as any;
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
        }
    );

    function doesNotRequireRelayPropToBeProvided() {
        const user: { " $fragmentRefs": UserFeed_user$ref } = {} as any;
        // TODO: Fix requirement to cast fragment reference as `any`.
        <UserFeedPaginationContainer loadMoreTitle="Load More" user={user as any} />;
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
            seenState: "SEEN",
        },
    },
};

export const configs = [
    {
        type: "NODE_DELETE" as "NODE_DELETE",
        deletedIDFieldName: "destroyedShipId",
    },
    {
        type: "RANGE_ADD" as "RANGE_ADD",
        parentID: "shipId",
        connectionInfo: [
            {
                key: "AddShip_ships",
                rangeBehavior: "append",
            },
        ],
        edgeName: "newShipEdge",
    },
    {
        type: "RANGE_DELETE" as "RANGE_DELETE",
        parentID: "todoId",
        connectionKeys: [
            {
                key: "RemoveTags_tags",
                rangeBehavior: "append",
            },
        ],
        pathToConnection: ["todo", "tags"],
        deletedIDFieldName: "removedTagId",
    },
];

function markNotificationAsRead(source: string, storyID: string) {
    const variables = {
        input: {
            source,
            storyID,
        },
    };

    commitMutation(modernEnvironment, {
        configs,
        mutation,
        optimisticResponse,
        variables,
        onCompleted: (response, errors) => {
            console.log("Response received from server.");
        },
        onError: err => console.error(err),
        updater: (store, data) => {
            const field = store.get(storyID);
            if (field) {
                field.setValue(data.story, "story");
            }
        }
    });
}

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
    storyID: "123",
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
            const rootField = store.getRootField("markReadNotification");
            const notification = !!rootField && rootField.getLinkedRecord("notification");
            // Add it to a connection
            const viewer = store.getRoot().getLinkedRecord("viewer");
            const notifications = ConnectionHandler.getConnection(viewer, "notifications");
            const edge = ConnectionHandler.createEdge(store, notifications, notification, "<TypeOfNotificationsEdge>");
            ConnectionHandler.insertEdgeAfter(notifications, edge);
        },
    }
);
