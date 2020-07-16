import { Client, createClient, ZendeskID } from 'node-zendesk';

const client: Client = createClient({
    username: 'foo',
    token: 'secret',
    remoteUri: '/example',
});

const zendeskCallback = () => {};

/** Job Statuses Methods */
client.jobstatuses.show(123, zendeskCallback);
client.jobstatuses.watch(123, 2, 3, zendeskCallback);

/** Macros Methods */
client.macros.applyTicket(123, 123, zendeskCallback);

/** Requests Methods */
client.requests.list(zendeskCallback);
client.requests.listOpen(zendeskCallback);
client.requests.listSolved(zendeskCallback);
client.requests.listCCD(123, zendeskCallback);
client.requests.listByUser(123, zendeskCallback);
client.requests.listByOrganization(123, zendeskCallback);
client.requests.getRequest(123, zendeskCallback);
client.requests.create({ request: { subject: 'foo', comment: {} } }, zendeskCallback);
client.requests.update(123, { request: {} }, zendeskCallback);
client.requests.listComments(123, zendeskCallback);
client.requests.getComment(123, 123, zendeskCallback);

/** Tickets Methods */
client.tickets.list(zendeskCallback);
client.tickets.listByOrganization(123, zendeskCallback);
client.tickets.listByUserRequested(123, zendeskCallback);
client.tickets.listByUserCCD(123, zendeskCallback);
client.tickets.listAssigned(123, zendeskCallback);
client.tickets.listWithFilter('foo', 'bar', zendeskCallback);
client.tickets.listRecent(zendeskCallback);
client.tickets.listCollaborators(123, zendeskCallback);
client.tickets.listIncidents(123, zendeskCallback);
client.tickets.listMetrics(123, zendeskCallback);
client.tickets.show(123, zendeskCallback);
client.tickets.showMany([123, 234], zendeskCallback);
client.tickets.create({ ticket: { comment: {} } }, zendeskCallback);
client.tickets.createMany({ tickets: [{ comment: {} }] }, zendeskCallback);
client.tickets.update(123, { ticket: {} }, zendeskCallback);
client.tickets.updateMany({ tickets: [{}] }, zendeskCallback);
client.tickets.delete(123, zendeskCallback);
client.tickets.deleteMany([123, 234], zendeskCallback);
client.tickets.merge(123, { ids: [234, 345] }, zendeskCallback);
client.tickets.export(1332034771, zendeskCallback);
client.tickets.exportSample(1332034771, {});
client.tickets.incremental(1332034771, zendeskCallback);
client.tickets.incrementalInclude(1332034771, {}, zendeskCallback);
client.tickets.incrementalSample(1332034771, zendeskCallback);
client.tickets.getComments(123, zendeskCallback);
client.tickets.exportAudit(123, zendeskCallback);
client.tickets.addTags(123, ['foo', 'bar'], zendeskCallback);

/** Users Methods */
client.users.auth(zendeskCallback);
client.users.list(zendeskCallback);
client.users.listByGroup(123, zendeskCallback);
client.users.listByOrganization(123, zendeskCallback);
client.users.show(123, zendeskCallback);
client.users.showMany([123, 234], zendeskCallback);
client.users.create({ user: { name: 'foo' } }, zendeskCallback);
client.users.createMany({ users: [{ name: 'foo' }] }, zendeskCallback);
client.users.createOrUpdate({ user: { name: 'foo' } }, zendeskCallback);
client.users.createOrUpdateMany({ users: [{ name: 'foo' }] }, zendeskCallback);
client.users.update(123, { user: {} }, zendeskCallback);
client.users.updateMany([123, 234], { users: [{}, {}] }, zendeskCallback);
client.users.suspend(123, zendeskCallback);
client.users.unsuspend(123, zendeskCallback);
client.users.delete(123, zendeskCallback);
client.users.search({}, zendeskCallback);
client.users.me(zendeskCallback);
client.users.merge(123, 234, zendeskCallback);
client.users.password(123, 'foo', 'bar', zendeskCallback);
client.users.incrementalInclude(1332034771, {}, zendeskCallback);
client.users.incremental(1332034771, zendeskCallback);
client.users.incrementalSample(1332034771, zendeskCallback);

/** User Identities Methods */
client.useridentities.list(123, zendeskCallback);
client.useridentities.show(123, 234, zendeskCallback);
client.useridentities.create(123, { identity: { type: 'email', value: 'foo@example.com' } }, zendeskCallback);
client.useridentities.update(123, 234, { identity: {} }, zendeskCallback);
client.useridentities.makePrimary(123, 234, zendeskCallback);
client.useridentities.verify(123, 234, zendeskCallback);
client.useridentities.requestVerification(123, 234, zendeskCallback);
client.useridentities.delete(123, 234, zendeskCallback);
