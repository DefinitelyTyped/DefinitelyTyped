import { KnexAdapter } from '@keystonejs/adapter-knex';

export const adapter = new KnexAdapter({
    knexOptions: {
        connection: {},
    },
    schemaName: 'whatever',
});
