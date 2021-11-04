import { GraphQLObjectType } from 'graphql';
import * as GraphQLBigInt from 'graphql-bigint';

const fooType = new GraphQLObjectType({
    name: 'Foo',
    description: 'Some foo type',
    fields: {
        created: {
            type: GraphQLBigInt,
            description: 'BigInt foo was created',
        }
    }
});
