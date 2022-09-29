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
}).usePromises();

// Create a lead.
client.contacts.create({
  role: 'lead',
  email: 'email@mail.com',
  name: 'name',
})
.then(() => console.log('Lead created'))
.catch(e => console.error('Error while creating lead:', e));

client.users.bulk([
    {
        create: {
            user_id: 'user_id'
        }
    }
])
    .then(() => console.log('User created in bulk'))
    .catch(e => console.error('Error while creating user in bulk', e));

client.events.bulk([
    {
        create: {
            event_id: 'event_id'
        },
    }
])
    .then(() => console.log('Event created in bulk'))
    .catch(e => console.error('Error while creating event in bulk', e));
