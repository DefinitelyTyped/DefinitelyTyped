import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

// $ExpectType typeof import('@sanity/schema')
createSchema({
    name: 'default',
    types: schemaTypes,
});
