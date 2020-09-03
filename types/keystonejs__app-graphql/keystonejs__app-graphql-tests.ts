import { GraphQLApp, validation } from '@keystonejs/app-graphql';

new GraphQLApp();

validation.depthLimit(1);
