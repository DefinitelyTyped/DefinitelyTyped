import * as sf from 'jsforce';

export interface DummyRecord {
    thing: boolean;
    other: number;
    person: string;
}

const salesforceConnection: sf.Connection = new sf.Connection({
    instanceUrl: '',
    refreshToken: '',
    oauth2: {
        clientId: '',
        clientSecret: '',
    },
});

salesforceConnection.sobject<DummyRecord>("Dummy").select(["thing", "other"]);

// note the following should never compile:
// salesforceConnection.sobject<DummyRecord>("Dummy").select(["lol"]);

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

salesforceConnection.sobject<any>("ContentVersion").retrieve("world", {
    test: "test"
}, (err: Error, ret) => {
    if (err) {
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

salesforceConnection.sobject<any>('Coverage__c')
    .select(['Id', 'Name'])
    .include('Coverage_State_Configurations__r')
    .select(['Id']).where({ Is_Active__c: true })
    .end()
    .where({ Is_Active__c: true }).execute();

const records: any[] = [];
salesforceConnection.query('SELECT Id FROM Account')
    .on('record', (record) => {
        records.push(record);
    })
    .on('end', (query: any) => {
        console.log(records);
    })
    .on('error', (error) => {
        console.log('Error returned from query:', error);
    })
    .run({ autoFetch: true, maxFetch: 25 });

salesforceConnection.sobject<any>('Coverage__c')
    .select(['Id', 'Name']).del(() => { });

salesforceConnection.sobject<any>('Coverage__c')
    .select(['Id', 'Name']).del("test", () => { });
