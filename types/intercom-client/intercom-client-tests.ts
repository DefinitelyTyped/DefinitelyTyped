import Intercom = require('intercom-client');
import { IdentityVerification } from 'intercom-client';

IdentityVerification.userHash({ secretKey: '', identifier: '' }); // $ExpectType string

const client = new Intercom.Client({ token: 'my_token' });
client.useRequestOpts({
    baseUrl: 'http://local.test-server.com',
    headers: {
        'Intercom-Version': 1.2,
    },
    forever: true,
});
