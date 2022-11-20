import GraphQLJSClient from './graphql-client';

export default class Resource {
    graphQLClient: GraphQLJSClient;

    constructor(client: GraphQLJSClient);
}
