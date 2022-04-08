import { RequestQuery, Server } from '@hapi/hapi';
import * as bell from '@hapi/bell';

async function run() {
    const server = new Server({ port: 8000 });
    await server.register(bell);

    bell.simulate(async () => ({}));
    bell.simulate(() => ({}));

    server.auth.strategy('arcgisonline', 'bell', {
        provider: 'twitter',
        password: 'some cookie password',
        location: 'http://example.com/oauth',
        clientId: '',
        clientSecret: '',
        scope(request) {
            const scopes = ['public_profile', 'email'];
            if (request.query.wantsSharePermission) {
              scopes.push('publish_actions');
            }
            return scopes;
        }
    });

    const providers: bell.BellOptions[] = [{
        provider: 'discord',
        password: 'cookie_encryption_password_secure',
        isSecure: false,
        clientId: '',
        clientSecret: '',
        location: () => '',
    },
    {
        provider: 'facebook',
        password: 'cookie_encryption_password_secure',
        isSecure: false,
        clientId: '',
        clientSecret: '',
        location: server.info.uri
    },
    {
        provider: 'google',
        password: 'cookie_encryption_password_secure',
        isSecure: false,
        clientId: '',
        clientSecret: '',
        location: server.info.uri
    },
    {
        provider: 'linkedin',
        password: 'cookie_encryption_password_secure',
        isSecure: false,
        clientId: '',
        clientSecret: '',
        providerParams: {
            redirect_uri: server.info.uri + '/bell/door'
        }
    },
    {
        provider: 'meetup',
        password: 'cookie_encryption_password_secure',
        isSecure: false,
        clientId: '',
        clientSecret: '',
        scope: ['basic', 'ageless', 'group_edit', 'reporting'],
    },
    {
        provider: 'nest',
        password: 'cookie_encryption_password_secure',
        isSecure: false,
        clientId: '',
        clientSecret: ''
    },
    {
        provider: 'okta',
        config: { uri: 'https://your-organization.okta.com' },
        password: 'cookie_encryption_password_secure',
        isSecure: false,
        location: 'http://127.0.0.1:8000',
        clientId: '',
        clientSecret: ''
    },
    {
        provider: 'slack',
        password: 'cookie_encryption_password_secure',
        isSecure: false,
        clientId: '',
        clientSecret: ''
    },
    {
        provider: 'twitch',
        password: 'cookie_encryption_password_secure',
        isSecure: false,
        clientId: '',
        clientSecret: '',
        scope: ['user_read', 'channel_read']
    },
    {
        provider: {
            auth: 'http://test.com/auth',
            token: 'http://test.com/auth',
            name: 'custom',
            protocol: 'oauth',
            temporary: 'wat',
            async profile(credentials, params, get) {
                console.log(credentials.provider);
                console.log(credentials.query);
                console.log(credentials.secret);
                console.log(this.clientId);
                credentials.profile = await get('http://test.com/profile', {
                    a: 'test',
                });
            },
        },
        password: 'cookie_encryption_password_secure',
        isSecure: false,
        clientId: '',
        clientSecret: '',
        location: () => '',
    },
    {
        provider: {
            auth: 'http://test.com/auth',
            token: 'http://test.com/auth',
            name: 'custom',
            protocol: 'oauth2',
            scope: ['a', 's', 'd', 'f'],
            scopeSeparator: '~~~',
            pkce: 'S256',
            async profile(credentials, params, get) {
                console.log(credentials.provider);
                console.log(credentials.query);
                console.log(credentials.token);
                console.log(credentials.refreshToken);
                console.log(this.clientId);
                credentials.profile = await get('http://test.com/profile', {
                    a: 'test',
                });
            },
        },
        password: 'cookie_encryption_password_secure',
        isSecure: false,
        clientId: '',
        clientSecret: '',
        location: () => '',
    }];
}
