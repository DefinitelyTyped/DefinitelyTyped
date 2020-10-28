import { Keystone } from '@keystonejs/keystone';
import { KnexAdapter } from '@keystonejs/adapter-knex';
import { GraphQLApp, validation } from '@keystonejs/app-graphql';

const keystone = new Keystone({
    name: 'test',
    adapter: new KnexAdapter(),
});

new GraphQLApp();
const app = new GraphQLApp({
    apiPath: 'anything',
    graphiqlPath: 'anything',
    schemaName: 'anything',
    apollo: {
        validationRules: [],
        introspection: true,
    },
});

app.build();

// $ExpectType Express
app.prepareMiddleware({
    keystone,
    dev: true,
});

// $ExpectType Express
app.prepareMiddleware({
    keystone,
});

validation.depthLimit(1);
