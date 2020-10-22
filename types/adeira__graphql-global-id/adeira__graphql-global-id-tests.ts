import { GraphQLObjectType } from 'graphql';
import GlobalID, { fromGlobalId, toGlobalId } from '@adeira/graphql-global-id';

new GraphQLObjectType({
    name: 'TypeName',
    fields: {
        id: GlobalID(({ id }) => id),
    },
});

fromGlobalId('TG9jYXRpb246bG9uZG9uX2di');
fromGlobalId(42); // $ExpectError

toGlobalId('SomeType', 123);
toGlobalId('SomeType', '123');
toGlobalId(123, '123'); // $ExpectError
