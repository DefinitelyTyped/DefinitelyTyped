import { GraphQLSchema } from 'graphql';
import { wrapResolvers } from '@adeira/graphql-resolve-wrapper';

const Schema = new GraphQLSchema({});

wrapResolvers(Schema, resolveFn => async (...args) => {
    const value = await resolveFn(...args);
    return typeof value === 'string' ? value.toUpperCase() : value;
});
