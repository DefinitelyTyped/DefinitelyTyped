import { Keystone } from '@keystonejs/keystone';
import { KnexAdapter } from '@keystonejs/adapter-knex';
import { Text, Checkbox, Password } from '@keystonejs/fields';

const keystone = new Keystone({
    name: 'Typescript Test',
    adapter: new KnexAdapter(),
});

keystone.createList('Test', {
    fields: {
        name: { type: Text },
        email: { type: Text, isUnique: true },
        isAdmin: { type: Checkbox },
        password: { type: Password },
    },
    access: true,
});
