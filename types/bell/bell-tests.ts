import { RequestQuery, Server } from 'hapi';
import * as bell from 'bell';

async function run() {
    const server = new Server({ port: 8000 });
    await server.register(bell);

    server.auth.strategy('arcgisonline', 'bell', {
        provider: 'twitter',
        password: 'some cookie password',
        location: 'http://example.com/oauth',
        clientId: '',
        clientSecret: '',
        scope(request) {
            const scopes = ['public_profile', 'email'];
            if ((<RequestQuery> request.query).wantsSharePermission) {
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
        provider: 'office365',
        clientId: '',
        clientSecret: '',
        password: 'cookie_encryption_password_secure',
        providerParams: {
            response_type: 'code'
        },
        scope: ['openid', 'offline_access', 'profile']
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
    }];
}
