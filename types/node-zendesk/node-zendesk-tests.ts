import { Attachments, Client, createClient, ZendeskCallback, ZendeskID } from "node-zendesk";
import * as path from "path";

const client: Client = createClient({
    username: "foo",
    token: "secret",
    remoteUri: "/example",
});

const zendeskCallback = () => {};

/** Job Statuses Methods */
client.jobstatuses.show(123, zendeskCallback);
client.jobstatuses.show(123).then(zendeskCallback);
client.jobstatuses.watch(123, 2, 3, zendeskCallback);
client.jobstatuses.watch(123, 2, 3).then(zendeskCallback);

/** Macros Methods */
client.macros.applyTicket(123, 123, zendeskCallback);
client.macros.applyTicket(123, 123).then(zendeskCallback);

/** Requests Methods */
client.requests.list(zendeskCallback);
client.requests.list().then(zendeskCallback);
client.requests.listOpen(zendeskCallback);
client.requests.listOpen().then(zendeskCallback);
client.requests.listSolved(zendeskCallback);
client.requests.listSolved().then(zendeskCallback);
client.requests.listCCD(123, zendeskCallback);
client.requests.listCCD(123).then(zendeskCallback);
client.requests.listByUser(123, zendeskCallback);
client.requests.listByUser(123).then(zendeskCallback);
client.requests.listByOrganization(123, zendeskCallback);
client.requests.listByOrganization(123).then(zendeskCallback);
client.requests.getRequest(123, zendeskCallback);
client.requests.getRequest(123).then(zendeskCallback);
client.requests.create({ request: { subject: "foo", comment: {} } }, zendeskCallback);
client.requests.create({ request: { subject: "foo", comment: {} } }).then(zendeskCallback);
client.requests.update(123, { request: {} }, zendeskCallback);
client.requests.update(123, { request: {} }).then(zendeskCallback);
client.requests.listComments(123, zendeskCallback);
client.requests.listComments(123).then(zendeskCallback);
client.requests.getComment(123, 123, zendeskCallback);
client.requests.getComment(123, 123).then(zendeskCallback);

/** Attachments Methods */
client.attachments.upload(
    path.resolve("./examples/busey.gif"),
    {
        filename: "busey.gif",
    },
    (err, req, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(JSON.stringify(result, null, 2));
    },
);

const { r2: { upload: { token }} } = await (async () => {
    const r1: Attachments.ShowResponseModel = await client.attachments.show(1);
    const r2: Attachments.UploadResponseModel = await client.attachments.upload("/path/to/file", {
        filename: "filename",
    });
    const r3: Attachments.UploadResponseModel = await client.attachments.upload(Buffer.alloc(8), {
        filename: "filename",
    });

    return { r1, r2, r3 };
})();

/** Tickets Methods */
client.tickets.list(zendeskCallback);
client.tickets.list().then(zendeskCallback);
client.tickets.listByOrganization(123, zendeskCallback);
client.tickets.listByOrganization(123).then(zendeskCallback);
client.tickets.listByUserRequested(123, zendeskCallback);
client.tickets.listByUserRequested(123).then(zendeskCallback);
client.tickets.listByUserCCD(123, zendeskCallback);
client.tickets.listByUserCCD(123).then(zendeskCallback);
client.tickets.listAssigned(123, zendeskCallback);
client.tickets.listAssigned(123).then(zendeskCallback);
client.tickets.listWithFilter("foo", "bar", zendeskCallback);
client.tickets.listWithFilter("foo", "bar").then(zendeskCallback);
client.tickets.listRecent(zendeskCallback);
client.tickets.listRecent().then(zendeskCallback);
client.tickets.listCollaborators(123, zendeskCallback);
client.tickets.listCollaborators(123).then(zendeskCallback);
client.tickets.listIncidents(123, zendeskCallback);
client.tickets.listIncidents(123).then(zendeskCallback);
client.tickets.listMetrics(123, zendeskCallback);
client.tickets.listMetrics(123).then(zendeskCallback);
client.tickets.show(123, zendeskCallback);
client.tickets.show(123).then(zendeskCallback);
client.tickets.showMany([123, 234], zendeskCallback);
client.tickets.showMany([123, 234]).then(zendeskCallback);
client.tickets.create({ ticket: { comment: {
  uploads: [token]
} } }, zendeskCallback);
client.tickets.create({ ticket: { comment: {} } }).then(zendeskCallback);
client.tickets.createMany({ tickets: [{ comment: {} }] }, zendeskCallback);
client.tickets.createMany({ tickets: [{ comment: {} }] }).then(zendeskCallback);
client.tickets.update(123, { ticket: {} }, zendeskCallback);
client.tickets.update(123, { ticket: {} }).then(zendeskCallback);
client.tickets.updateMany({ tickets: [{}] }, zendeskCallback);
client.tickets.updateMany({ tickets: [{}] }).then(zendeskCallback);
client.tickets.delete(123, zendeskCallback);
client.tickets.delete(123).then(zendeskCallback);
client.tickets.deleteMany([123, 234], zendeskCallback);
client.tickets.deleteMany([123, 234]).then(zendeskCallback);
client.tickets.merge(123, { ids: [234, 345] }, zendeskCallback);
client.tickets.merge(123, { ids: [234, 345] }).then(zendeskCallback);
client.tickets.export(1332034771, zendeskCallback);
client.tickets.export(1332034771).then(zendeskCallback);
client.tickets.exportSample(1332034771, {});
client.tickets.incremental(1332034771, zendeskCallback);
client.tickets.incremental(1332034771).then(zendeskCallback);
client.tickets.incrementalInclude(1332034771, {}, zendeskCallback);
client.tickets.incrementalInclude(1332034771, {}).then(zendeskCallback);
client.tickets.incrementalSample(1332034771, zendeskCallback);
client.tickets.incrementalSample(1332034771).then(zendeskCallback);
client.tickets.getComments(123, zendeskCallback);
client.tickets.getComments(123).then(zendeskCallback);
client.tickets.exportAudit(123, zendeskCallback);
client.tickets.exportAudit(123).then(zendeskCallback);
client.tickets.addTags(123, ["foo", "bar"], zendeskCallback);
client.tickets.addTags(123, ["foo", "bar"]).then(zendeskCallback);

/** Users Methods */
client.users.auth(zendeskCallback);
client.users.auth().then(zendeskCallback);
client.users.list(zendeskCallback);
client.users.list().then(zendeskCallback);
client.users.listByGroup(123, zendeskCallback);
client.users.listByGroup(123).then(zendeskCallback);
client.users.listByOrganization(123, zendeskCallback);
client.users.listByOrganization(123).then(zendeskCallback);
client.users.show(123, zendeskCallback);
client.users.show(123).then(zendeskCallback);
client.users.showMany([123, 234], zendeskCallback);
client.users.showMany([123, 234]).then(zendeskCallback);
client.users.create({ user: { name: "foo" } }, zendeskCallback);
client.users.create({ user: { name: "foo" } }).then(zendeskCallback);
client.users.createMany({ users: [{ name: "foo" }] }, zendeskCallback);
client.users.createMany({ users: [{ name: "foo" }] }).then(zendeskCallback);
client.users.createOrUpdate({ user: { name: "foo" } }, zendeskCallback);
client.users.createOrUpdate({ user: { name: "foo" } }).then(zendeskCallback);
client.users.createOrUpdateMany({ users: [{ name: "foo" }] }, zendeskCallback);
client.users.createOrUpdateMany({ users: [{ name: "foo" }] }).then(zendeskCallback);
client.users.update(123, { user: {} }, zendeskCallback);
client.users.update(123, { user: {} }).then(zendeskCallback);
client.users.updateMany([123, 234], { users: [{}, {}] }, zendeskCallback);
client.users.updateMany([123, 234], { users: [{}, {}] }).then(zendeskCallback);
client.users.suspend(123, zendeskCallback);
client.users.suspend(123).then(zendeskCallback);
client.users.unsuspend(123, zendeskCallback);
client.users.unsuspend(123).then(zendeskCallback);
client.users.delete(123, zendeskCallback);
client.users.delete(123).then(zendeskCallback);
client.users.search({}, zendeskCallback);
client.users.search({}).then(zendeskCallback);
client.users.me(zendeskCallback);
client.users.me().then(zendeskCallback);
client.users.merge(123, 234, zendeskCallback);
client.users.merge(123, 234).then(zendeskCallback);
client.users.password(123, "foo", "bar", zendeskCallback);
client.users.password(123, "foo", "bar").then(zendeskCallback);
client.users.incrementalInclude(1332034771, {}, zendeskCallback);
client.users.incrementalInclude(1332034771, {}).then(zendeskCallback);
client.users.incremental(1332034771, zendeskCallback);
client.users.incremental(1332034771).then(zendeskCallback);
client.users.incrementalSample(1332034771, zendeskCallback);
client.users.incrementalSample(1332034771).then(zendeskCallback);

/** User Identities Methods */
client.useridentities.list(123, zendeskCallback);
client.useridentities.list(123).then(zendeskCallback);
client.useridentities.show(123, 234, zendeskCallback);
client.useridentities.show(123, 234).then(zendeskCallback);
client.useridentities.create(123, { identity: { type: "email", value: "foo@example.com" } }, zendeskCallback);
client.useridentities.create(123, { identity: { type: "email", value: "foo@example.com" } }).then(zendeskCallback);
client.useridentities.update(123, 234, { identity: {} }, zendeskCallback);
client.useridentities.update(123, 234, { identity: {} }).then(zendeskCallback);
client.useridentities.makePrimary(123, 234, zendeskCallback);
client.useridentities.makePrimary(123, 234).then(zendeskCallback);
client.useridentities.verify(123, 234, zendeskCallback);
client.useridentities.verify(123, 234).then(zendeskCallback);
client.useridentities.requestVerification(123, 234, zendeskCallback);
client.useridentities.requestVerification(123, 234).then(zendeskCallback);
client.useridentities.delete(123, 234, zendeskCallback);
client.useridentities.delete(123, 234).then(zendeskCallback);

/** User Fields */
client.userfields.create(
    {
        title: "Support description (type text is default)",
        description: "This field describes the support plan this user has",
        position: 0,
        active: true,
        key: "support_description",
    },
    zendeskCallback,
);
client.userfields.create(
    {
        type: "textarea",
        title: "Support description",
        description: "This field describes the support plan this user has",
        position: 0,
        active: true,
        key: "support_description",
    },
    zendeskCallback,
);
client.userfields.create(
    {
        type: "tagger",
        title: "Support description",
        description: "This field describes the support plan this user has",
        position: 0,
        active: true,
        key: "support_description",
        custom_field_options: [
            {
                id: 1,
                name: "Custom Fielld Option",
                value: 5,
            },
        ],
    },
    zendeskCallback,
);
