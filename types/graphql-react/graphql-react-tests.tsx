import React from "react";
import { GraphQL, GraphQLContext, useGraphQL } from "graphql-react";

const graphql = new GraphQL();

function App() {
  const { loading, cacheValue } = useGraphQL<
    {node: null | {id: string}},
    {id: string}
  >({
    fetchOptionsOverride(options) {
      options.url = "/graphql";
    },
    operation: {
      variables: {
        id: "123456"
      },
      query: `
        query($id: !String) {
          node(id: $id) {
            id
          }
        }
      `
    }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>{
      cacheValue && cacheValue.data && cacheValue.data.node
        ? "exists"
        : "does not exist"
    }</div>
  );
}

function Root() {
  return (
    <GraphQLContext.Provider value={graphql}>
      <App />
    </GraphQLContext.Provider>
  );
}
