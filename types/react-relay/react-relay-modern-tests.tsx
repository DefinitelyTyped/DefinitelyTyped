import * as React from "react"
import { QueryRenderer, createFragmentContainer, createRefetchContainer, createPaginationContainer, graphql, RelayProp, RelayPaginationProp, RelayRefetchProp, commitMutation } from "react-relay/modern"

///////////////////////////////////////////////////////////////////////////////
// See this page for the example code: 
// https://facebook.github.io/relay/docs/query-renderer.html
///////////////////////////////////////////////////////////////////////////////
const environment = {};
const error = { message: 'error' };

<QueryRenderer
    environment={environment}
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

    render={ ({ error, props }) => {
        if (error) {
            return <div>{error.message}</div>;
        } else if (props) {
            return <div>{props.page.name} is great!</div>;
        }
        return <div>Loading</div>;
    } }
/>


///////////////////////////////////////////////////////////////////////////////
// See this page for the example code: 
// https://facebook.github.io/relay/docs/fragment-container.html
///////////////////////////////////////////////////////////////////////////////

interface TodoListProp {
    title: string
    list: any
    relay: RelayProp
}

class TodoItem extends React.Component<any, void> {

}

class TodoList extends React.Component<TodoListProp, void> {
  render() {
    // Expects a `list` with a string `title`, as well as the information
    // for the `<TodoItem>`s (we'll get that next).
    const list = this.props.list;
    return (
      <div>
        {/* It works just like a React component, because it is one! */}
        <h1>{list.title}</h1>
        {list.todoItems.map((item: any) => <TodoItem item={item} />)}
      </div>
    );
  }
}

export const TodoContainer = createFragmentContainer(
  TodoList,
  // This `_list` fragment name suffix corresponds to the prop named `list` that
  // is expected to be populated with server data by the `<TodoList>` component.
  graphql`
    fragment TodoList_list on TodoList {
      # Specify any fields required by '<TodoList>' itself.
      title,
      # Include a reference to the fragment from the child component.
      todoItems {
        ...TodoItem_item
      }
    }
  `,
);
interface Props {
    text: string
    userId: string
}

interface Response {
}

///////////////////////////////////////////////////////////////////////////////
// See this page for the example code: 
// https://facebook.github.io/relay/docs/refetch-container.html
///////////////////////////////////////////////////////////////////////////////

interface FeedStoryProp {
    feed: any
    relay: RelayRefetchProp
}

class FeedStories extends React.Component<FeedStoryProp, void> {
  render() {
    return (
      <div>
        {this.props.feed.stories.edges.map(
          (edge: any) => <Story story={edge.node} key={edge.node.id} />
        )}
        <button
          onClick={this._loadMore}
          title="Load More"
        />
      </div>
    );
  }

  _loadMore() {
    // Increments the number of stories being rendered by 10.
    const refetchVariables = (fragmentVariables: any) => ({
      count: fragmentVariables.count + 10,
    });
    this.props.relay.refetch(refetchVariables, null);
  }
}

export const FeedStoriesContainer = createRefetchContainer(
  FeedStories,
  {
    // Removed graphql.experimental because it's not defined in the flow types
    feed: graphql` 
      fragment FeedStories_feed on Feed 
      @argumentDefinitions(
        count: {type: "Int", defaultValue: 10}
      ) {
        stories(first: $count) {
          edges {
            node {
              id
              ...Story_story
            }
          }
        }
      }
    `
  },
  // Removed graphql.experimental because it's not defined in the flow types
  graphql`
    query FeedStoriesRefetchQuery($count: Int) {
      feed {
        ...FeedStories_feed @arguments(count: $count)
      }
    }
  `,
);

///////////////////////////////////////////////////////////////////////////////
// See this page for the example code: 
// https://facebook.github.io/relay/docs/pagination-container.html
///////////////////////////////////////////////////////////////////////////////

interface FeedProps {
    viewer: any
    relay: RelayPaginationProp
}

class Story extends React.Component<any, void> {

}

class Feed extends React.Component<FeedProps, void> {
  render() {
    return (
      <div>
        {this.props.viewer.feed.edges.map(
          (edge: any) => <Story story={edge.node} key={edge.node.id} />
        )}
        <button
          onClick={() => this._loadMore()}
          title="Load More"
        />
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

export default createPaginationContainer(
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
    getVariables(props, {count, cursor}, fragmentVariables) {
      return {
        count,
        cursor,
        // in most cases, for variables other than connection filters like
        // `first`, `after`, etc. you may want to use the previous values.
        orderBy: fragmentVariables.orderBy,
      };
    },
    query: graphql`
      query FeedPaginationQuery(
        $count: Int!
        $cursor: String
        $orderby: String!
      ) {
        user {
          # You could reference the fragment defined previously.
          ...Feed_user
        }
      }
    `
  }
);

///////////////////////////////////////////////////////////////////////////////
// See this page for the example code: 
// https://facebook.github.io/relay/docs/mutations.html
///////////////////////////////////////////////////////////////////////////////

const source = 'source';
const storyID = 'storyID';

const mutation = graphql`
    mutation MarkReadNotificationMutation(
        $input: MarkReadNotificationData!
    ) {
        markReadNotification(data: $input) {
        notification {
            seenState
        }
        }
    }
`;

const variables = {
    input: {
        source,
        storyID,
    },
};

function markNotificationAsRead(source: any, storyID: any) {
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                console.log('Success!')
            },
            onError: err => console.error(err),
        },
    );
}