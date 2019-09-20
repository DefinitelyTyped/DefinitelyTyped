import * as fs from 'fs';
import * as stream from 'stream';
import * as express from 'express';
import * as glob from 'glob';

import * as sf from 'jsforce';
import { RecordReference, Record } from 'jsforce/record';
import { SObject } from 'jsforce/salesforce-object';
import { RecordResult } from 'jsforce/record-result';

const salesforceConnection: sf.Connection = new sf.Connection({
    instanceUrl: '',
    refreshToken: '',
    oauth2: {
        clientId: '',
        clientSecret: '',
    },
});

async function testSObject(connection: sf.Connection) {
    interface DummyRecord {
        thing: boolean;
        other: number;
        person: string;
    }

    const dummySObject: SObject<DummyRecord> = connection.sobject<DummyRecord>('Dummy');

    // currently untyped, but some future change may make this stricter
    const restApiOptions = {
        headers: { Bearer: 'I have no idea what this wants' }
    };

    { // Test SObject.record
        // $ExpectType RecordReference<DummyRecord>
        dummySObject.record('50130000000014C');
    }

    { // Test SObject.retrieve
        // with single id
        // $ExpectType Record<DummyRecord>
        await dummySObject.retrieve('50130000000014C');
        // with single id and rest api options
        // $ExpectType Record<DummyRecord>
        await dummySObject.retrieve('50130000000014C', restApiOptions);

        // with single id and callback
        dummySObject.retrieve('50130000000014C', restApiOptions, (err, res) => {
            err; // $ExpectType Error | null
            res; // $ExpectType Record<DummyRecord>
        });

        // with ids array
        // $ExpectType Record<DummyRecord>[]
        await dummySObject.retrieve(['IIIIDDD']);
        // with ids array and rest api options
        // $ExpectType Record<DummyRecord>[]
        await dummySObject.retrieve(['IIIIDDD'], restApiOptions);

        // with ids array and callback
        dummySObject.retrieve(['50130000000014C'], restApiOptions, (err, res) => {
            err; // $ExpectType Error | null
            res; // $ExpectType Record<DummyRecord>[]
        });

        salesforceConnection.sobject<any>("ContentVersion").retrieve("world", {
            test: "test"
        }, (err, ret) => {
            err; // $ExpectType Error | null
            ret; // $ExpectType any
        });
    }

    { // Test SObject.update
        // if we require that records have an id field this will fail
        // //$ExpectError
        await dummySObject.update({ thing: false });

        // If we require that the records have an Id field
        // await dummySObject.update({ thing: false, Id: 'asdf' }); // $ExpectType RecordResult

        // invalid field
        // $ExpectError
        await dummySObject.update({ asdf: false });

        // with rest api options
        // $ExpectType RecordResult
        await dummySObject.update({ thing: false }, restApiOptions);

        // with callback
        dummySObject.update({ thing: false }, (err, res) => {
            err; // $ExpectType Error | null
            res; // $ExpectType RecordResult
        });

        dummySObject.update({ thing: false }, restApiOptions, (err, res) => {
            err; // $ExpectType Error | null
            res; // $ExpectType RecordResult
        });

        // with multiple records
        // $ExpectType RecordResult[]
        await dummySObject.update([{ thing: false }]);

        // with multiple records and api options
        // $ExpectType RecordResult[]
        await dummySObject.update([{ thing: false }], restApiOptions);

        // with multiple records and callback
        dummySObject.update([{ thing: false }], restApiOptions, (err, res) => {
            err; // $ExpectType Error | null
            res; // $ExpectType RecordResult[]
        });

        dummySObject.update([{ thing: false }], (err, res) => {
            err; // $ExpectType Error | null
            res; // $ExpectType RecordResult[]
        });
    }

    { // Test SObject.updated
        // $ExpectType UpdatedRecordsInfo
        await dummySObject.updated(new Date(), new Date());

        // $ExpectType UpdatedRecordsInfo
        await dummySObject.updated(new Date(), 'hi');

        // $ExpectType UpdatedRecordsInfo
        await dummySObject.updated('hi', new Date());

        // $ExpectType UpdatedRecordsInfo
        await dummySObject.updated('hi', 'hi');

        dummySObject.updated(new Date(), 'hi', (err, ret) => {
            err; // $ExpectType Error | null
            ret; // $ExpectType UpdatedRecordsInfo
        });
    }

    { // Test SObject.upsert
        const updateData = {
            Id: 'Some ID',
            thing: true,
            other: 1,
            person: 'hi'
        };
        // $ExpectType RecordResult
        await dummySObject.upsert(updateData, 'Id');

        // $ExpectType RecordResult
        await dummySObject.upsert(updateData, 'Id', restApiOptions);

        // $ExpectType RecordResult[]
        await dummySObject.upsert([updateData], 'Id');

        // $ExpectType RecordResult[]
        await dummySObject.upsert([updateData], 'Id', restApiOptions);

        dummySObject.upsert(updateData, 'Id', (err, ret) => {
            err; // $ExpectType Error | null
            ret; // $ExpectType RecordResult
        });

        dummySObject.upsert(updateData, 'Id', restApiOptions, (err, ret) => {
            err; // $ExpectType Error | null
            ret; // $ExpectType RecordResult
        });

        dummySObject.upsert([updateData], 'Id', (err, ret) => {
            err; // $ExpectType Error | null
            ret; // $ExpectType RecordResult[]
        });

        dummySObject.upsert([updateData], 'Id', restApiOptions, (err, ret) => {
            err; // $ExpectType Error | null
            ret; // $ExpectType RecordResult[]
        });
    }

    { // Test SObject.find
    }

    { // Test SObject.findOne
        salesforceConnection.sobject("ContentVersion").findOne<any>({ Id: '' }, (err, contentVersion) => {
            err; // $ExpectType Error | null
            contentVersion; // $ExpectType any
        });
    }

    { // Test SObject.select

        dummySObject.select(["thing", "other"]);

        // note the following should never compile:
        // $ExpectError
        dummySObject.select(["lol"]);
    }

    { // Test SObject.create
        // $ExpectType RecordResult
        await dummySObject.create({
            thing: true,
            other: 1,
            person: 'hi'
        });

        // $ExpectType RecordResult
        await dummySObject.create({
            thing: true,
            other: 1,
            person: 'hi'
        }, restApiOptions);

        // $ExpectType RecordResult[]
        await dummySObject.create([{
            thing: true,
            other: 1,
            person: 'hi'
        }]);

        // $ExpectType RecordResult[]
        await dummySObject.create([{
            thing: true,
            other: 1,
            person: 'hi'
        }], restApiOptions);

        dummySObject.create([{
            thing: true,
            other: 1,
            person: 'hi'
        }], (err, ret) => {
            err; // $ExpectType Error | null
            ret; // $ExpectType RecordResult[]
        });

        dummySObject.create([{
            thing: true,
            other: 1,
            person: 'hi'
        }], restApiOptions, (err, ret) => {
            err; // $ExpectType Error | null
            ret; // $ExpectType RecordResult[]
        });

        salesforceConnection.sobject("Account").create({
            Name: "Test Acc 2",
            BillingStreet: "Maplestory street",
            BillingPostalCode: "ME4 666"
        }, (err, ret) => {
            err; // $ExpectType Error | null
            ret; // $ExpectType RecordResult
        });

        // callback and rest api options
        salesforceConnection.sobject("ContentVersion").create({
            OwnerId: '',
            Title: 'hello',
            PathOnClient: './hello-world.jpg',
            VersionData: '{ Test: Data }'
        }, restApiOptions, (err, ret) => {
            err; // $ExpectType Error | null
            ret; // $ExpectType RecordResult
        });

        salesforceConnection.sobject("ContentDocumentLink").create({
            ContentDocumentId: '',
            LinkedEntityId: '',
            ShareType: "I"
        }, (err, ret) => {
            err; // $ExpectType Error | null
            ret; // $ExpectType RecordResult
        });
    }

    { // Test SObject.createBulk
        // $ExpectType Batch
        dummySObject.createBulk();
        // $ExpectType Batch
        dummySObject.createBulk('hi.csv');
        // $ExpectType Batch
        dummySObject.createBulk([{ Id: 'hi', thing: true, other: 1, person: 'you' }]);
        // $ExpectType Batch
        dummySObject.createBulk([{ Id: 'hi', thing: true, other: 1, person: 'you' }], (err, res) => {
            err; // $ExpectType Error | null
            res; // $ExpectType RecordResult[]
        });
        dummySObject.createBulk('hi.csv', (err, res) => {
            err; // $ExpectType Error | null
            res; // $ExpectType RecordResult[]
        });
    }

    { // Test SObject.deleteBulk and aliases
        // $ExpectType Batch
        dummySObject.deleteBulk();
        // $ExpectType Batch
        dummySObject.deleteBulk('hi.csv');
        // $ExpectType Batch
        dummySObject.deleteBulk([{ Id: 'hi', thing: true, other: 1, person: 'you' }]);
        // $ExpectType Batch
        dummySObject.deleteBulk([{ Id: 'hi', thing: true, other: 1, person: 'you' }], (err, res) => {
            err; // $ExpectType Error | null
            res; // $ExpectType RecordResult[]
        });
        dummySObject.deleteBulk('hi.csv', (err, res) => {
            err; // $ExpectType Error | null
            res; // $ExpectType RecordResult[]
        });

        // $ExpectType Batch
        dummySObject.destroyBulk();
        // $ExpectType Batch
        dummySObject.destroyBulk('hi.csv');
        // $ExpectType Batch
        dummySObject.destroyBulk([{ Id: 'hi', thing: true, other: 1, person: 'you' }]);
        // $ExpectType Batch
        dummySObject.destroyBulk([{ Id: 'hi', thing: true, other: 1, person: 'you' }], (err, res) => {
            err; // $ExpectType Error | null
            res; // $ExpectType RecordResult[]
        });
        dummySObject.destroyBulk('hi.csv', (err, res) => {
            err; // $ExpectType Error | null
            res; // $ExpectType RecordResult[]
        });
    }

    { // Test SObject.deleteHardBulk and aliases
        // $ExpectType Batch
        dummySObject.deleteHardBulk();
        // $ExpectType Batch
        dummySObject.deleteHardBulk('hi.csv');
        // $ExpectType Batch
        dummySObject.deleteHardBulk([{ Id: 'hi', thing: true, other: 1, person: 'you' }]);
        // $ExpectType Batch
        dummySObject.deleteHardBulk([{ Id: 'hi', thing: true, other: 1, person: 'you' }], (err, res) => {
            err; // $ExpectType Error | null
            res; // $ExpectType RecordResult[]
        });
        dummySObject.deleteHardBulk('hi.csv', (err, res) => {
            err; // $ExpectType Error | null
            res; // $ExpectType RecordResult[]
        });

        // $ExpectType Batch
        dummySObject.destroyHardBulk();
        // $ExpectType Batch
        dummySObject.destroyHardBulk('hi.csv');
        // $ExpectType Batch
        dummySObject.destroyHardBulk([{ Id: 'hi', thing: true, other: 1, person: 'you' }]);
        // $ExpectType Batch
        dummySObject.destroyHardBulk([{ Id: 'hi', thing: true, other: 1, person: 'you' }], (err, res) => {
            err; // $ExpectType Error | null
            res; // $ExpectType RecordResult[]
        });
        dummySObject.destroyHardBulk('hi.csv', (err, res) => {
            err; // $ExpectType Error | null
            res; // $ExpectType RecordResult[]
        });
    }

    { // Test SObject.destroy and aliases
        // $ExpectType RecordResult
        await dummySObject.del('Id');
        // $ExpectType RecordResult
        await dummySObject.destroy('Id');
        // $ExpectType RecordResult
        await dummySObject.delete('Id');

        // $ExpectType RecordResult[]
        await dummySObject.del(['Id']);
        // $ExpectType RecordResult[]
        await dummySObject.destroy(['Id']);
        // $ExpectType RecordResult[]
        await dummySObject.delete(['Id']);

        dummySObject.del('Id', (err, ret) => {
            err; // $ExpectType Error | null
            ret; // $ExpectType RecordResult
        });
        dummySObject.destroy('Id', (err, ret) => {
            err; // $ExpectType Error | null
            ret; // $ExpectType RecordResult
        });
        dummySObject.delete('Id', (err, ret) => {
            err; // $ExpectType Error | null
            ret; // $ExpectType RecordResult
        });

        dummySObject.del(['Id'], (err, ret) => {
            err; // $ExpectType Error | null
            ret; // $ExpectType RecordResult[]
        });
        dummySObject.destroy(['Id'], (err, ret) => {
            err; // $ExpectType Error | null
            ret; // $ExpectType RecordResult[]
        });
        dummySObject.delete(['Id'], (err, ret) => {
            err; // $ExpectType Error | null
            ret; // $ExpectType RecordResult[]
        });
    }
}

const requestInfo: sf.RequestInfo = {
    body: '',
    headers: {},
    method: '',
    url: ''
};
salesforceConnection.request(requestInfo);

const queryOptions: sf.ExecuteOptions = {
    autoFetch: true,
    maxFetch: 5000,
    headers: {},
    scanAll: true
};
salesforceConnection.query('SELECT Id, Name FROM Account', queryOptions);

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
    .on('error', (error: Error) => {
        console.log('Error returned from query:', error);
    })
    .run({ autoFetch: true, maxFetch: 25 });

salesforceConnection.sobject<any>('Coverage__c')
    .select(['Id', 'Name']).del(() => { });

salesforceConnection.sobject<any>('Coverage__c')
    .select(['Id', 'Name']).del("test", () => { });

async function testAnalytics(conn: sf.Connection): Promise<void> {
    const analytics: sf.Analytics = conn.analytics;

    const dashboards: sf.DashboardInfo[] = await analytics.dashboards();
    const dashboard = dashboards[0] as any;
    Object.keys(dashboards[0])
        .forEach((key: string) => console.log(`key: ${key} : ${dashboard[key]}`));
    console.log('dashboard keys from await');

    analytics.dashboards((err, dashboards: sf.DashboardInfo[]) => {
        const _dashboard: any = dashboards[0] as any;
        Object.keys(_dashboard)
            .forEach((key: string) => console.log(`key: ${key} : ${_dashboard[key]}`));
        console.log('dashboard keys from callback');
    });

    const reports: sf.ReportInfo[] = await analytics.reports();
    const report: any = reports[0] as any;
    Object.keys(reports[0]).forEach((key: string) => console.log(`key: ${key} : ${report[key]}`));

    analytics.reports((err, reports: sf.ReportInfo[]) => {
        const _report: any = reports[0] as any;
        Object.keys(reports[0])
            .forEach((key: string) => console.log(`key: ${key} : ${_report[key]}`));
        console.log('report keys from callback');
    });
}

async function testExecuteAnonymous(conn: sf.Connection): Promise<void> {
    const res: sf.ExecuteAnonymousResult = await salesforceConnection.tooling.executeAnonymous('');
    console.log('ExecuteAnonymousResult column: ' + res.column);
    console.log('ExecuteAnonymousResult compiled: ' + res.compiled);
    console.log('ExecuteAnonymousResult compileProblem: ' + res.compileProblem);
    console.log('ExecuteAnonymousResult exceptionMessage: ' + res.exceptionMessage);
    console.log('ExecuteAnonymousResult exceptionStackTrace: ' + res.exceptionStackTrace);
    console.log('ExecuteAnonymousResult line: ' + res.line);
    console.log('ExecuteAnonymousResult success: ' + res.success);
}

async function testMetadata(conn: sf.Connection): Promise<void> {
    const md: sf.Metadata = conn.metadata;
    const m: sf.DescribeMetadataResult = await md.describe('34.0');
    const pages: sf.MetadataObject[] =
        m.metadataObjects.filter((value: sf.MetadataObject) => value.directoryName === 'pages');
    console.log(`ApexPage?: ${pages[0].xmlName === 'ApexPage'}`);

    const types: sf.ListMetadataQuery[] = [{ type: 'CustomObject', folder: undefined }];
    md.list(types, '39.0', (err, properties: sf.FileProperties[]) => {
        if (err) {
            console.error('err', err);
            return;
        }
        const meta: sf.FileProperties = properties[0];
        console.log('metadata count: ' + properties.length);
        console.log('createdById: ' + meta.createdById);
        console.log('createdByName: ' + meta.createdByName);
        console.log('createdDate: ' + meta.createdDate);
        console.log('fileName: ' + meta.fileName);
        console.log('fullName: ' + meta.fullName);
        console.log('id: ' + meta.id);
        console.log('lastModifiedById: ' + meta.lastModifiedById);
        console.log('lastModifiedByName: ' + meta.lastModifiedByName);
        console.log('lastModifiedDate: ' + meta.lastModifiedDate);
        console.log('manageableState: ' + meta.manageableState);
        console.log('namespacePrefix: ' + meta.namespacePrefix);
        console.log('type: ' + meta.type);
    });

    const fullNames: string[] = ['Account', 'Contact'];
    const info: sf.MetadataInfo | sf.MetadataInfo[] = await md.read('CustomObject', fullNames);
    console.log((info as sf.MetadataInfo[])[0].fullName);
    console.log((info as sf.MetadataInfo[])[1].fullName);

    const now: number = Date.now();
    const now2: number = now + 1;
    const metadata = [{
        fullName: `TestObject${now}__c`,
        label: `Test Object ${now}`,
        pluralLabel: `Test Object ${now}`,
        nameField: {
            type: 'Text',
            label: `Test Object Name ${now}`
        },
        deploymentStatus: 'Deployed',
        sharingModel: 'ReadWrite'
    }, {
        fullName: `TestObject${now2}__c`,
        label: `Test Object ${now2}`,
        pluralLabel: `Test Object ${now2}`,
        nameField: {
            type: 'AutoNumber',
            label: 'Test Object #'
        },
        deploymentStatus: 'InDevelopment',
        sharingModel: 'Private'
    }];

    const result: sf.SaveResult | sf.SaveResult[] = await md.create('CustomObject', metadata);
    console.log(`created ${(result as sf.SaveResult[])[0].fullName} - ${(result as sf.SaveResult[])[0].success}`);
    console.log(`created ${(result as sf.SaveResult[])[1].fullName} - ${(result as sf.SaveResult[])[1].success}`);

    const fullNames2: string[] = [`TestObject${now}__c`, `TestObject${now2}__c`];
    const result2: sf.SaveResult | sf.SaveResult[] =
        await (md.delete('CustomObject', fullNames2) as Promise<sf.SaveResult[]>);
    console.log(`deleted ${result2[0].fullName} - ${result2[0].success}`);
    console.log(`deleted ${result2[1].fullName} - ${result2[1].success}`);
}

async function testChatter(conn: sf.Connection): Promise<void> {
    const chatter: sf.Chatter = conn.chatter;
    chatter.resource('/feed-elements').create({
        body: {
            messageSegments: [{
                type: 'Text',
                text: 'This is new post'
            }]
        },
        feedElementType: 'FeedItem',
        subjectId: 'me'
    }, (err: Error | null, result: any) => {
        if (err) {
            throw err;
        }
        const feedMessageUrl = `/feed-elements/${result.id}/capabilities/comments/items`;
        chatter.resource(feedMessageUrl).create({
            body: {
                messageSegments: [{
                    type: 'Text',
                    text: 'This is new comment on the post'
                }]
            }
        }, (err: Error | null, result: any) => {
            if (err) {
                throw err;
            }
            console.log("Id: " + result.id);
            console.log("URL: " + result.url);
            console.log("Body: " + result.body.messageSegments[0].text);
        });
    });

    const resourceMe: sf.Resource<sf.RequestResult> = chatter.resource('/users/me');
    resourceMe.retrieve((err, res: any) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("username: " + res.username);
        console.log("email: " + res.email);
        console.log("small photo url: " + res.photo.smallPhotoUrl);
    });

    chatter.resource('/users', { q: 'Suzuki' }).retrieve((err, result: any) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("current page URL: " + result['currentPageUrl']);
        console.log("next page URL: " + result['nextPageUrl']);
        console.log("users count: " + result['users'].length);
        for (const user of result['users']) {
            console.log('User ID: ' + user.id);
            console.log('User URL: ' + user.url);
            console.log('Username: ' + user.username);
        }
    });

    const feedResource: sf.Resource<sf.RequestResult> = chatter.resource('/feed-elements');

    const feedCreateRequest: any = await feedResource.create({
        body: {
            messageSegments: [{
                type: 'Text',
                text: 'This is new comment on the post'
            }]
        },
        feedElementType: 'FeedItem',
        subjectId: 'me'
    });

    console.log(`feedCreateRequest.id: ${feedCreateRequest.id}`);
    const itemLikesUrl = `/feed-elements/${feedCreateRequest.id}/capabilities/chatter-likes/items`;
    const itemsLikeResource: sf.Resource<sf.RequestResult> = chatter.resource(itemLikesUrl);

    const itemsLikeCreateResult: sf.RequestResult = await itemsLikeResource.create('');
    console.log(`itemsLikeCreateResult['likedItem']: ${itemsLikeCreateResult as any['likedItem']}`);
}

(async () => {
    const query2: sf.QueryResult<object> =
        await (salesforceConnection.query("SELECT Id, Name FROM User") as Promise<sf.QueryResult<object>>);
    console.log("Query Promise: total in database: " + query2.totalSize);
    console.log("Query Promise: total fetched : " + query2.records[0]);

    await testAnalytics(salesforceConnection);
    await testChatter(salesforceConnection);
    await testMetadata(salesforceConnection);
    await testExecuteAnonymous(salesforceConnection);
})();

const oauth2 = new sf.OAuth2({
    // you can change loginUrl to connect to sandbox or prerelease env.
    // loginUrl : 'https://test.salesforce.com',
    clientId: '<your Salesforce OAuth2 client ID is here>',
    clientSecret: '<your Salesforce OAuth2 client secret is here>',
    redirectUri: '<callback URI is here>'
});
oauth2.getAuthorizationUrl({ scope: 'api id web' });

const job = salesforceConnection.bulk.createJob("Account", "insert");
const batch = job.createBatch();
batch.execute(undefined);
batch.on("queue", (batchInfo) => { // fired when batch request is queued in server.
    console.log('batchInfo:', batchInfo);
    const batchId = batchInfo.id;
    const jobId = batchInfo.jobId;
});
job.batch("batchId");
batch.poll(1000, 20000);
batch.on("response", (rets: sf.BatchResultInfo[]) => {
    for (let i = 0; i < rets.length; i++) {
        if (rets[i].success) {
            console.log(`# ${(i + 1)} loaded successfully, id = ${rets[i].id}`);
        } else {
            const errors = rets[i].errors;
            console.log(`# ${(i + 1)} error occurred, message = ${errors ? errors.join(', ') : ''}`);
        }
    }
});

(async () => {
    const batchInfos: sf.BatchInfo[] = await job.list();
    console.log('batchInfos:', batchInfos);
});

salesforceConnection.streaming.topic("InvoiceStatementUpdates").subscribe((message) => {
    console.log('Event Type : ' + message.event.type);
    console.log('Event Created : ' + message.event.createdDate);
    console.log('Object Id : ' + message.sobject.Id);
});

async function testDescribe() {
    const global: sf.DescribeGlobalResult = await salesforceConnection.describeGlobal();
    const globalCached: sf.DescribeGlobalResult = salesforceConnection.describeGlobal$();
    const globalCachedCorrectly = global === globalCached;
    salesforceConnection.describeGlobal$.clear();

    globalCached.sobjects.forEach(async (sobject: sf.DescribeGlobalSObjectResult) => {
        const object: sf.DescribeSObjectResult = await salesforceConnection.describe(sobject.name);
        const cachedObject: sf.DescribeSObjectResult = salesforceConnection.describe$(sobject.name);
        salesforceConnection.describe$.clear();

        object.fields.forEach(field => {
            const type: sf.FieldType = field.type;
            // following should never compile
            // $ExpectError
            const fail = type === 'hey';

            const isString = type === 'string';
        });

        // following should never compile (if StrictNullChecks is on)
        // $ExpectError
        object.keyPrefix.length;

        console.log(`${sobject.name} Label: `, object.label);

        const correctlyCached = object === cachedObject;
    });
}

async function testApex(conn: sf.Connection): Promise<void> {
    const apex: sf.Apex = conn.apex;

    // Test GET
    {
        await apex.get('/custom-get-apex-api');

        apex.get('/custom-get-apex-api', (err: Error | null, response: object) => {
            if (!err) {
                console.log(response);
            }
        });

        apex.get('/custom-get-apex-api', { headers: { 'X-Custom-Header': 'value' } });
    }

    // Test POST
    {
        await apex.post('/custom-apex-api', { email: 'test@example.com' });

        apex.post('/custom-apex-api', (err: Error | null, response: object) => {
            if (!err) {
                console.log(response);
            }
        });

        // Including custom body
        apex.post('/custom-apex-api', { email: 'test@example.com' }, (err: Error | null, response: object) => {
            if (!err) {
                console.log(response);
            }
        });
    }

    // Test PUT
    {
        await apex.put('/custom-apex-api', { email: 'test@example.com' });

        apex.put('/custom-apex-api', (err: Error | null, response: object) => {
            if (!err) {
                console.log(response);
            }
        });

        // Including custom body
        apex.put('/custom-apex-api', { email: 'test@example.com' }, (err: Error | null, response: object) => {
            if (!err) {
                console.log(response);
            }
        });
    }

    // Test PATCH
    {
        await apex.patch('/custom-apex-api', { email: 'test@example.com' });

        apex.patch('/custom-apex-api', (err: Error | null, response: object) => {
            if (!err) {
                console.log(response);
            }
        });

        // Including custom body
        apex.patch('/custom-apex-api', { email: 'test@example.com' }, (err: Error | null, response: object) => {
            if (!err) {
                console.log(response);
            }
        });
    }

    // Test DELETE
    {
        await apex.del('/custom-apex-api');

        apex.del('/custom-apex-api', (err: Error | null, response: object) => {
            if (!err) {
                console.log(response);
            }
        });

        // alias
        await apex.delete('/custom-apex-api');

        apex.delete('/custom-apex-api', (err: Error | null, response: object) => {
            if (!err) {
                console.log(response);
            }
        });
    }
}
