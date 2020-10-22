import { AdminUIApp } from '@keystonejs/app-admin-ui';

new AdminUIApp();
new AdminUIApp({
    enableDefaultRoute: true,
    authStrategy: 1,
    isAccessAllowed: ({ authentication: { item } }) => true,
});

// with type configuration
new AdminUIApp<'User', { role: 'admin' }>({
    enableDefaultRoute: true,
    authStrategy: 1,
    isAccessAllowed: ({ authentication: { item } }) => item.role === 'admin',
});
