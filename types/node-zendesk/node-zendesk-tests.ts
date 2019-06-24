import { Client, createClient, ZendeskID } from 'node-zendesk';

const client: Client = createClient({
    username: 'foo',
    token: 'secret',
    remoteUri: '/example',
});

const zendeskCallback = () => {};

client.macros.applyTicket(123 as ZendeskID, 123, zendeskCallback);

client.requests.create({ request: { subject: 'foo', comment: {} } }, zendeskCallback);
client.requests.getRequest(123 as ZendeskID, zendeskCallback);
client.requests.listComments(123 as ZendeskID, zendeskCallback);
client.requests.requestAll('GET', {}, zendeskCallback);
client.requests.update(123 as ZendeskID, { request: {} }, zendeskCallback);

client.tickets.create({ ticket: { comment: {} } }, zendeskCallback);
client.tickets.update(123 as ZendeskID, { ticket: {} }, zendeskCallback);

client.users.createOrUpdate({ user: { name: 'foo' } }, zendeskCallback);

client.useridentities.create(123 as ZendeskID, {}, zendeskCallback);
client.useridentities.list(123 as ZendeskID, zendeskCallback);
client.useridentities.makePrimary(123 as ZendeskID, 123 as ZendeskID, zendeskCallback);
client.useridentities.update(123 as ZendeskID, 123 as ZendeskID, {}, zendeskCallback);
