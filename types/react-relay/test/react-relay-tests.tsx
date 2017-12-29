import * as React from "react";
import { Environment, Network, RecordSource, Store, ConnectionHandler } from "relay-runtime";

import {
    graphql,
    commitMutation,
    createFragmentContainer,
    createPaginationContainer,
    createRefetchContainer,
    requestSubscription,
    QueryRenderer,
    RelayRefetchProp,
    RelayPaginationProp
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
// Modern FragmentContainer
// ~~~~~~~~~~~~~~~~~~~~~
const MyFragmentContainer = createFragmentContainer(
    class TodoListView extends React.Component {
        render() {
            return <div />;
        }
    },
    {
        item: graphql`
            fragment TodoItem_item on Todo {
                text
                isComplete
            }
        `,
    }
);

// ~~~~~~~~~~~~~~~~~~~~~
// Modern RefetchContainer
// ~~~~~~~~~~~~~~~~~~~~~
interface StoryInterface {
    id: string;
}
interface FeedStoriesProps {
    relay: RelayRefetchProp;
    feed: {
        stories: { edges: Array<{ node: StoryInterface }> };
    };
}
class Story extends React.Component<{ story: StoryInterface }> {}
class FeedStories extends React.Component<FeedStoriesProps> {
    render() {
        return (
            <div>
                {this.props.feed.stories.edges.map(edge => <Story story={edge.node} key={edge.node.id} />)}
                <button onClick={() => this._loadMore} title="Load More" />
            </div>
        );
    }

    _loadMore() {
        // Increments the number of stories being rendered by 10.
        const refetchVariables = (fragmentVariables: { count: number }) => ({
            count: fragmentVariables.count + 10,
        });
        this.props.relay.refetch(refetchVariables);
    }
}

const FeedRefetchContainer = createRefetchContainer(
    FeedStories,
    {
        feed: graphql.experimental`
            fragment FeedStories_feed on Feed @argumentDefinitions(count: { type: "Int", defaultValue: 10 }) {
                stories(first: $count) {
                    edges {
                        node {
                            id
                            ...Story_story
                        }
                    }
                }
            }
        `,
    },
    graphql.experimental`
        query FeedStoriesRefetchQuery($count: Int) {
            feed {
                ...FeedStories_feed @arguments(count: $count)
            }
        }
    `
);

// ~~~~~~~~~~~~~~~~~~~~~
// Modern PaginationContainer
// ~~~~~~~~~~~~~~~~~~~~~
interface FeedProps {
    user: { feed: { edges: Array<{ node: StoryInterface }> } };
    relay: RelayPaginationProp;
}
class Feed extends React.Component<FeedProps> {
    render() {
        return (
            <div>
                {this.props.user.feed.edges.map(edge => <Story story={edge.node} key={edge.node.id} />)}
                <button onClick={() => this._loadMore()} title="Load More" />
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

const FeedPaginationContainer = createPaginationContainer(
    Feed,
    {
        user: graphql`
            fragment Feed_user on User {
                feed(
                    first: $count
                    after: $cursor
                    orderby: $orderBy # other variables
                ) @connection(key: "Feed_feed") {
                    edges {
                        node {
                            id
                            ...Story_story
                        }
                    }
                }
            }
        `,
    },
    {
        direction: "forward",
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
    }
);

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
