import { Keystone, BaseApp } from '@keystonejs/keystone';
import { PasswordAuthStrategy } from '@keystonejs/auth-password';
import { GraphQLApp } from '@keystonejs/app-graphql';
import { AdminUIApp } from '@keystonejs/app-admin-ui';
import { KnexAdapter as Adapter } from '@keystonejs/adapter-knex';
import { Text, Checkbox, Password, AutoIncrement, CalendarDay, Integer } from '@keystonejs/fields';
import { NextApp } from '@keystonejs/app-next';
import { StaticApp } from '@keystonejs/app-static';

const keystone: Keystone = new Keystone({
    adapter: new Adapter(),
    appVersion: {
        version: '1.0.0',
        addVersionToHttpHeaders: true,
        access: true,
    },
    cookie: {
        secure: process.env.NODE_ENV === 'production', // Default to true in production
        maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
        sameSite: false,
    },
    defaultAccess: {
        list: true,
        field: true,
        custom: true
    },
    queryLimits: {
        maxTotalResults: 1000,
    },
});

keystone.createList('Test', {
    fields: {},
    access: true,
});
keystone.createList('Test', {
    fields: {
        autoincrement: { type: AutoIncrement, gqlType: 'ID' },
        calendar: {
            type: CalendarDay,
            format: 'Do MMMM YYYY',
            yearRangeFrom: 1901,
            yearRangeTo: 2018,
            yearPickerType: 'auto',
        },
        email: { type: Text, isUnique: true },
        isAdmin: { type: Checkbox },
        password: { type: Password },
    },
});

keystone.createList('Test', {
    fields: {
        name: {
            type: Integer,
            hooks: {
                afterChange: console.info,
            },
        },
    },
    access: {
        create: true,
        read: true,
        update: false,
        delete: false,
    },
    hooks: {
        resolveInput: async ({ context }) => console.log(context),
    },
});

keystone.createList('Test', {
    fields: {
        name: {
            type: Integer,
            access: ({ authentication: { item } }) => item,
        },
    },
    access: {
        create: () => true,
        read: () => true,
        update: () => false,
        delete: () => false,
        auth: true,
    },
});

keystone.createList('Todo', {
    schemaDoc: 'A list of things which need to be done',
    fields: {
        name: { type: Text, schemaDoc: 'This is the thing you need to do' },
    },
});

keystone.extendGraphQLSchema({});

keystone.extendGraphQLSchema({
    types: [{ type: 'type FooBar { foo: Int, bar: Float }' }],
    queries: [
        {
            schema: 'double(x: Int): Int',
            resolver: (source, args, context, info) => console.log('ARGS: ', args),
            access: true,
        },
    ],
    mutations: [
        {
            schema: 'double(x: Int): Int',
            resolver: (source, args, context, info) => console.log('ARGS: ', args),
            access: () => true,
        },
        {
            schema: 'double(x: Int): Int',
            resolver: (source, args, context, info) => console.log('ARGS: ', args),
            access: {
                create: true,
                read: () => false,
                update: false,
                delete: false,
            },
        },
    ],
});

const authStrategy = keystone.createAuthStrategy({
    type: PasswordAuthStrategy,
    list: 'User',
});

const apps: BaseApp[] = [
    new GraphQLApp(),
    new AdminUIApp({ enableDefaultRoute: true, authStrategy }),
    new NextApp({
        dir: './hello',
    }),
    new StaticApp({
        path: '/',
        src: 'public',
        fallback: 'index.html',
    }),
];

apps.map(app =>
    app.build({
        distDir: '.',
        keystone,
    }),
);

keystone.prepare({ apps, dev: process.env.NODE_ENV !== 'production' }).then(async ({ middlewares }) => {
    await keystone.connect();
});
