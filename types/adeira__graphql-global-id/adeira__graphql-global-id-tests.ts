import { GraphQLObjectType } from 'graphql';
import GlobalID, { fromGlobalId, toGlobalId } from '@adeira/graphql-global-id';

new GraphQLObjectType({
    name: 'TypeName',
    fields: {
        id: GlobalID(({ id }) => id),
    },
});

fromGlobalId('TG9jYXRpb246bG9uZG9uX2di');
// @ts-expect-error
fromGlobalId(42);

toGlobalId('SomeType', 123);
toGlobalId('SomeType', '123');
// @ts-expect-error
toGlobalId(123, '123');
