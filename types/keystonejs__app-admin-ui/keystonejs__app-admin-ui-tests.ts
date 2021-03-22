import { AdminUIApp } from '@keystonejs/app-admin-ui';

new AdminUIApp();

new AdminUIApp({
    enableDefaultRoute: true,
    authStrategy: 1,
    isAccessAllowed: ({ authentication: { item } }) => true,
});

new AdminUIApp({
    name: 'ADMIN Dashboard',
    adminPath: '/admin',
    apiPath: '/admin/api',
    graphiqlPath: '/admin/api',
    authStrategy: null,
    hooks: './admin-ui/',
    enableDefaultRoute: false,
    schemaName: 'public',
    isAccessAllowed: ({ authentication: { item } }) => true,
    adminMeta: {},
    defaultPageSize: 50,
    maximumPageSize: 1000
});

// with type configuration
new AdminUIApp<'User', { role: 'admin' }>({
    enableDefaultRoute: true,
    authStrategy: 1,
    isAccessAllowed: ({ authentication: { item } }) => item.role === 'admin',
});
