import { PasswordAuthStrategy } from '@keystonejs/auth-password';
import { Keystone } from '@keystonejs/keystone';
import { KnexAdapter } from '@keystonejs/adapter-knex';

const adapter = new KnexAdapter();

const keystone = new Keystone({
    name: 'Typescript Test',
    adapter,
});

keystone.createAuthStrategy({
    type: PasswordAuthStrategy,
    list: 'User',
});

new PasswordAuthStrategy(keystone, 'whatever', {
    identityField: 'username',
    secretField: 'password',
});
