import * as sf from 'jsforce';

const salesforceConnection: sf.Connection = new sf.Connection({
    instanceUrl: '',
    refreshToken: '',
    oauth2: {
        clientId: '',
        clientSecret: '',
    },
});

salesforceConnection.sobject("Account").create({
    Name: "Test Acc 2",
    BillingStreet: "Maplestory street",
    BillingPostalCode: "ME4 666"
}, (err: Error, ret: sf.RecordResult) => {
    if (err || !ret.success) {
        return;
    }
});

salesforceConnection.sobject("ContentVersion").create({
    OwnerId: '',
    Title: 'hello',
    PathOnClient: './hello-world.jpg',
    VersionData: '{ Test: Data }'
}, (err: Error, ret: sf.RecordResult) => {
    if (err || !ret.success) {
        return;
    }
});

salesforceConnection.sobject("ContentVersion").retrieve("world", {
    test: "test"
}, (err: Error, ret: sf.RecordResult) => {
    if (err || !ret.success) {
        return;
    }
});

salesforceConnection.sobject("ContentVersion").findOne<any>({ Id: '' }, (err, contentVersion) => {
});

salesforceConnection.sobject("ContentDocumentLink").create({
    ContentDocumentId: '',
    LinkedEntityId: '',
    ShareType: "I"
}, (err: Error, ret: sf.RecordResult) => {
    if (err || !ret.success) {
        return;
    }
});

sf.Date.YESTERDAY;
