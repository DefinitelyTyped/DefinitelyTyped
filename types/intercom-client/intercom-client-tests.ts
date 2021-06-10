import Intercom = require('intercom-client');
import { IdentityVerification } from 'intercom-client';

IdentityVerification.userHash({ secretKey: '', identifier: '' }); // $ExpectType string

const client = new Intercom.Client({ token: 'my_token' });
client.useRequestOpts({
    baseUrl: 'http://local.test-server.com',
    headers: {
        'Intercom-Version': 2.0,
    },
    forever: true,
});

// Create a lead.
client.contacts.create({
  role: 'lead',
  email: 'email@mail.com',
  name: 'name',
})
.then(() => console.log('Lead created'))
.catch(e => console.error('Error while creating lead:', e));
