import { createClient, Loggly, serialize } from 'node-loggly-bulk';

const client = createClient({
    token: 'test-token',
    subdomain: 'test-subdomain',
});

client.log('Test message');
client.log({ json: 'yes' }, ['some-tag'], () => {});

new Loggly({
    token: 'YOUR_TOKEN',
    subdomain: 'YOUR_DOMAIN',
    tags: ['NodeJS'],
    json: true,
    auth: {
        username: 'your-username',
        password: 'your-password',
    },
    proxy: null,
    userAgent: 'test-user-agent-header',
    useTagHeader: true,
    isBulk: true,
    bufferOptions: {
        size: 500,
        retriesInMilliSeconds: 30000,
    },
    networkErrorsOnConsole: false,
});

serialize({ key: 'value' }, 'key');
serialize({ key: 'value' });
