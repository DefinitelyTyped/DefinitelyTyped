import { GraphQL, GraphQLContext, useGraphQL } from "graphql-react";

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

/* This SHOULD be the test, but the DefinitelyTyped tooling is so difficult to
   work with that I've spent all my time, and can't figure out how to use JSX
   here, since it won't recognize the test if it ends with .tsx, it complains
   about an extra file if I simply have the test import an additional .tsx file,
   and I have to change, push, and wait for CI because neither the lint nor test
   scripts run locally, because I depend on `react` which has some error that
   breaks before it runs my code. What a frustrating several hours.

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
*/
