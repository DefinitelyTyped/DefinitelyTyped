import { GraphQLObjectType } from 'graphql';
import * as GraphQLDate from 'graphql-date';

const fooType = new GraphQLObjectType({
    name: 'Foo',
    description: 'Some foo type',
    fields: {
        created: {
            type: GraphQLDate,
            description: 'Date foo was created',
        }
    }
});
