import ddb = require('documentdb');

/** DocumentClient constructor */
const permission1: ddb.Permission = { id: '1', permissionMode: 'Read', resource: 'foo' };
const auth1: ddb.AuthOptions = { masterKey: 'masterKey' };
const auth2: ddb.AuthOptions = { resourceTokens: {foo: 'bar' }};
const auth3: ddb.AuthOptions = { permissionFeed: [ permission1 ]};
const retry1: ddb.RetryOptions = { MaxRetryAttemptCount: 3 };
const retry2: ddb.RetryOptions = { FixedRetryIntervalInMilliseconds: 1000 };
const retry3: ddb.RetryOptions = { MaxWaitTimeInSeconds: 20 };
const connectionPolicy: ddb.ConnectionPolicy = {
  MediaReadMode: 'Buffered', MediaRequestTimeout: 1000, RequestTimeout: 1000,
  EnableEndpointDiscovery: true, PreferredLocations: ['foo'],
  RetryOptions: retry1, DisableSSLVerification: false };
const client1 = new ddb.DocumentClient('host', auth1);
const client2 = new ddb.DocumentClient('host', auth1, connectionPolicy);
const client3 = new ddb.DocumentClient('host', auth1, connectionPolicy, 'Strong');

/** DocumentClient methods */
const requestOptions1: ddb.RequestOptions = { };
const mediaOptions1: ddb.MediaOptions = { };
const docOptions1: ddb.DocumentOptions = { };
const attachment1: ddb.Attachment = { id: '1', contentType: 'foo/bar', media: 'foo' };
const stream1: NodeJS.ReadableStream = null;
const index1: ddb.Index = { Kind: 'Hash', DataType: 'foo', Precision: 0.1 };
const includePath1: ddb.IncludedPath = { Path: 'foo', Indexes: [index1] };
const excludePath1: ddb.ExcludedPath = { Path: 'foo' };
const indexingPolicy1: ddb.IndexingPolicy = { automatic: true, indexingMode: 'Consistent', IncludedPaths: [includePath1], ExcludedPaths: [excludePath1]};
const collection1: ddb.Collection = { id: '1' };
const collection2: ddb.Collection = { id: '2', indexingPolicy: indexingPolicy1 };
const collection3: ddb.Collection = { id: '3', defaultTtl: 60 };
const database1: ddb.UniqueId = { id: '1' };
const document1: ddb.NewDocument = { id: '1' };
const document2: ddb.NewDocument = { id: '1', ttl: 60 };
const sproc1: ddb.Procedure = { id: '1', body() {} };
const sproc2: ddb.Procedure = { id: '1', body: 'function() {}' };
const trigger1: ddb.Trigger = { id: '1', triggerOperation: 'All', serverScript() {} };
const trigger2: ddb.Trigger = { id: '1', triggerOperation: 'All', serverScript: 'function() {}' };
const trigger3: ddb.Trigger = { id: '1', triggerOperation: 'All', triggerType: 'Pre', serverScript: 'function() {}' };
const user1: ddb.UniqueId = { id: '1' };
const udf1: ddb.UserDefinedFunction = { id: '1', serverScript() {} };
const udf2: ddb.UserDefinedFunction = { id: '1', serverScript: 'function() {}' };
const udf3: ddb.UserDefinedFunction = { id: '1', serverScript: 'function() {}', userDefinedFunctionType: 'Javascript' };
const databaseAccountOptions: ddb.DatabaseAccountRequestOptions = { };
const query1: ddb.DocumentQuery = 'foo';
const query2: ddb.DocumentQuery = { query: 'foo', parameters: [ {name: 'foo', value: 'bar' }] };
const feedOptions1: ddb.FeedOptions = { };

client1.createAttachment('foo', attachment1, requestOptions1, (err: ddb.QueryError, resource: ddb.AttachmentMeta, responseHeaders: any) => void 0);
client1.createAttachment('foo', attachment1, (err: ddb.QueryError, resource: ddb.AttachmentMeta, responseHeaders: any) => void 0);
client1.createAttachmentAndUploadMedia('foo', stream1, mediaOptions1, (err: ddb.QueryError, resource: ddb.AttachmentMeta, responseHeaders: any) => void 0);
client1.createAttachmentAndUploadMedia('foo', stream1, (err: ddb.QueryError, resource: ddb.AttachmentMeta, responseHeaders: any) => void 0);
client1.createCollection('foo', collection1, requestOptions1, (err: ddb.QueryError, resource: ddb.CollectionMeta, responseHeaders: any) => void 0);
client1.createCollection('foo', collection1, (err: ddb.QueryError, resource: ddb.CollectionMeta, responseHeaders: any) => void 0);
client1.createDatabase(database1, requestOptions1, (err: ddb.QueryError, resource: ddb.DatabaseMeta, responseHeaders: any) => void 0);
client1.createDatabase(database1, (err: ddb.QueryError, resource: ddb.DatabaseMeta, responseHeaders: any) => void 0);
client1.createDocument('foo', document1, docOptions1, (err: ddb.QueryError, resource: ddb.RetrievedDocument, responseHeaders: any) => void 0);
client1.createDocument('foo', document1, (err: ddb.QueryError, resource: ddb.RetrievedDocument, responseHeaders: any) => void 0);
client1.createPermission('foo', permission1, requestOptions1, (err: ddb.QueryError, resource: ddb.PermissionMeta, responseHeaders: any) => void 0);
client1.createPermission('foo', permission1, (err: ddb.QueryError, resource: ddb.PermissionMeta, responseHeaders: any) => void 0);
client1.createStoredProcedure('foo', sproc1, requestOptions1, (err: ddb.QueryError, resource: ddb.ProcedureMeta, responseHeaders: any) => void 0);
client1.createStoredProcedure('foo', sproc1, (err: ddb.QueryError, resource: ddb.ProcedureMeta, responseHeaders: any) => void 0);
client1.createTrigger('foo', trigger1, requestOptions1, (err: ddb.QueryError, resource: ddb.TriggerMeta, responseHeaders: any) => void 0);
client1.createTrigger('foo', trigger1, (err: ddb.QueryError, resource: ddb.TriggerMeta, responseHeaders: any) => void 0);
client1.createUser('foo', user1, requestOptions1, (err: ddb.QueryError, resource: ddb.AbstractMeta, responseHeaders: any) => void 0);
client1.createUser('foo', user1, (err: ddb.QueryError, resource: ddb.AbstractMeta, responseHeaders: any) => void 0);
client1.createUserDefinedFunction('foo', udf1, requestOptions1, (err: ddb.QueryError, resource: ddb.UserDefinedFunctionMeta, responseHeaders: any) => void 0);
client1.createUserDefinedFunction('foo', udf1, (err: ddb.QueryError, resource: ddb.UserDefinedFunctionMeta, responseHeaders: any) => void 0);

client1.deleteAttachment('foo', requestOptions1, (err: ddb.QueryError) => void 0);
client1.deleteAttachment('foo', (err: ddb.QueryError) => void 0);
client1.deleteCollection('foo', requestOptions1, (err: ddb.QueryError) => void 0);
client1.deleteCollection('foo', (err: ddb.QueryError) => void 0);
client1.deleteConflict('foo', requestOptions1, (err: ddb.QueryError) => void 0);
client1.deleteConflict('foo', (err: ddb.QueryError) => void 0);
client1.deleteDatabase('foo', requestOptions1, (err: ddb.QueryError) => void 0);
client1.deleteDatabase('foo', (err: ddb.QueryError) => void 0);
client1.deleteDocument('foo', requestOptions1, (err: ddb.QueryError) => void 0);
client1.deleteDocument('foo', (err: ddb.QueryError) => void 0);
client1.deletePermission('foo', requestOptions1, (err: ddb.QueryError) => void 0);
client1.deletePermission('foo', (err: ddb.QueryError) => void 0);
client1.deleteStoredProcedure('foo', requestOptions1, (err: ddb.QueryError) => void 0);
client1.deleteStoredProcedure('foo', (err: ddb.QueryError) => void 0);
client1.deleteTrigger('foo', requestOptions1, (err: ddb.QueryError) => void 0);
client1.deleteTrigger('foo', (err: ddb.QueryError) => void 0);
client1.deleteUser('foo', requestOptions1, (err: ddb.QueryError) => void 0);
client1.deleteUser('foo', (err: ddb.QueryError) => void 0);
client1.deleteUserDefinedFunction('foo', requestOptions1, (err: ddb.QueryError) => void 0);
client1.deleteUserDefinedFunction('foo', (err: ddb.QueryError) => void 0);

client1.executeStoredProcedure('foo', ['1', 1, {}], requestOptions1, (err: ddb.QueryError, resource: any, responseHeaders: any) => void 0);
client1.executeStoredProcedure('foo', requestOptions1, (err: ddb.QueryError, resource: any, responseHeaders: any) => void 0);
client1.executeStoredProcedure('foo', ['1', 1, {}], (err: ddb.QueryError, resource: any, responseHeaders: any) => void 0);

client1.getDatabaseAccount(databaseAccountOptions, (err: ddb.QueryError, resource: ddb.DatabaseAccount, responseHeaders: any) => void 0);
client1.getDatabaseAccount((err: ddb.QueryError, resource: ddb.DatabaseAccount, responseHeaders: any) => void 0);
client1.getReadEndpoint((err: ddb.QueryError, resource: string, responseHeaders: any) => void 0);
client1.getWriteEndpoint((err: ddb.QueryError, resource: string, responseHeaders: any) => void 0);

const it1: ddb.QueryIterator<ddb.AttachmentMeta> = client1.queryAttachments('foo', query1, feedOptions1);
const it2: ddb.QueryIterator<ddb.AttachmentMeta> = client1.queryAttachments('foo', query1);
const it3: ddb.QueryIterator<ddb.CollectionMeta> = client1.queryCollections('foo', query1, feedOptions1);
const it4: ddb.QueryIterator<ddb.CollectionMeta> = client1.queryCollections('foo', query1);
const it5: ddb.QueryIterator<any> = client1.queryConflicts('foo', query1, feedOptions1); // TODO add type for Conflict
const it6: ddb.QueryIterator<any> = client1.queryConflicts('foo', query1);
const it7: ddb.QueryIterator<ddb.DatabaseMeta> = client1.queryDatabases(query1, feedOptions1);
const it8: ddb.QueryIterator<ddb.DatabaseMeta> = client1.queryDatabases(query1);
const it9: ddb.QueryIterator<ddb.RetrievedDocument> = client1.queryDocuments('foo', query1, feedOptions1);
const it10: ddb.QueryIterator<ddb.RetrievedDocument> = client1.queryDocuments('foo', query1);
const it11: ddb.QueryIterator<any> = client1.queryOffers(query1, feedOptions1); // TODO add type for Offer
const it12: ddb.QueryIterator<any> = client1.queryOffers(query1);
const it13: ddb.QueryIterator<ddb.PermissionMeta> = client1.queryPermissions('foo', query1, feedOptions1);
const it14: ddb.QueryIterator<ddb.PermissionMeta> = client1.queryPermissions('foo', query1);
const it15: ddb.QueryIterator<ddb.ProcedureMeta> = client1.queryStoredProcedures('foo', query1, feedOptions1);
const it16: ddb.QueryIterator<ddb.ProcedureMeta> = client1.queryStoredProcedures('foo', query1);
const it17: ddb.QueryIterator<ddb.TriggerMeta> = client1.queryTriggers('foo', query1, feedOptions1);
const it18: ddb.QueryIterator<ddb.TriggerMeta> = client1.queryTriggers('foo', query1);
const it19: ddb.QueryIterator<ddb.UserDefinedFunctionMeta> = client1.queryUserDefinedFunctions('foo', query1, feedOptions1);
const it20: ddb.QueryIterator<ddb.UserDefinedFunctionMeta> = client1.queryUserDefinedFunctions('foo', query1);
const it21: ddb.QueryIterator<ddb.AbstractMeta> = client1.queryUsers('foo', query1, feedOptions1); // TODO add type for User
const it22: ddb.QueryIterator<ddb.AbstractMeta> = client1.queryUsers('foo', query1);

client1.readAttachment('foo', requestOptions1, (err: ddb.QueryError, resource: ddb.AttachmentMeta, responseHeaders: any) => void 0);
client1.readAttachment('foo', (err: ddb.QueryError, resource: ddb.AttachmentMeta, responseHeaders: any) => void 0);
client1.readCollection('foo', requestOptions1, (err: ddb.QueryError, resource: ddb.CollectionMeta, responseHeaders: any) => void 0);
client1.readCollection('foo', (err: ddb.QueryError, resource: ddb.CollectionMeta, responseHeaders: any) => void 0);
client1.readConflict('foo', requestOptions1, (err: ddb.QueryError, resource: any, responseHeaders: any) => void 0);
client1.readConflict('foo', (err: ddb.QueryError, resource: any, responseHeaders: any) => void 0);
client1.readDatabase('foo', requestOptions1, (err: ddb.QueryError, resource: ddb.DatabaseMeta, responseHeaders: any) => void 0);
client1.readDatabase('foo', (err: ddb.QueryError, resource: ddb.DatabaseMeta, responseHeaders: any) => void 0);
client1.readDocument('foo', requestOptions1, (err: ddb.QueryError, resource: ddb.RetrievedDocument, responseHeaders: any) => void 0);
client1.readDocument('foo', (err: ddb.QueryError, resource: ddb.RetrievedDocument, responseHeaders: any) => void 0);
client1.readPermission('foo', requestOptions1, (err: ddb.QueryError, resource: ddb.PermissionMeta, responseHeaders: any) => void 0);
client1.readPermission('foo', (err: ddb.QueryError, resource: ddb.PermissionMeta, responseHeaders: any) => void 0);
client1.readStoredProcedure('foo', requestOptions1, (err: ddb.QueryError, resource: ddb.ProcedureMeta, responseHeaders: any) => void 0);
client1.readStoredProcedure('foo', (err: ddb.QueryError, resource: ddb.ProcedureMeta, responseHeaders: any) => void 0);
client1.readTrigger('foo', requestOptions1, (err: ddb.QueryError, resource: ddb.TriggerMeta, responseHeaders: any) => void 0);
client1.readTrigger('foo', (err: ddb.QueryError, resource: ddb.TriggerMeta, responseHeaders: any) => void 0);
client1.readUserDefinedFunction('foo', requestOptions1, (err: ddb.QueryError, resource: ddb.UserDefinedFunctionMeta, responseHeaders: any) => void 0);
client1.readUserDefinedFunction('foo', (err: ddb.QueryError, resource: ddb.UserDefinedFunctionMeta, responseHeaders: any) => void 0);
client1.readUser('foo', requestOptions1, (err: ddb.QueryError, resource: any, responseHeaders: any) => void 0);
client1.readUser('foo', (err: ddb.QueryError, resource: any, responseHeaders: any) => void 0);
client1.readOffer('foo', (err: ddb.QueryError, resource: any, responseHeaders: any) => void 0);
client1.readMedia('foo', (err: ddb.QueryError, resource: Buffer|NodeJS.ReadableStream, responseHeaders: any) => void 0);

const it23: ddb.QueryIterator<ddb.AttachmentMeta> = client1.readAttachments('foo', feedOptions1);
const it24: ddb.QueryIterator<ddb.AttachmentMeta> = client1.readAttachments('foo');
const it25: ddb.QueryIterator<ddb.CollectionMeta> = client1.readCollections('foo', feedOptions1);
const it26: ddb.QueryIterator<ddb.CollectionMeta> = client1.readCollections('foo');
const it27: ddb.QueryIterator<any> = client1.readConflicts('foo', feedOptions1); // TODO
const it28: ddb.QueryIterator<any> = client1.readConflicts('foo'); // TODO
const it29: ddb.QueryIterator<ddb.DatabaseMeta> = client1.readDatabases(feedOptions1);
const it30: ddb.QueryIterator<ddb.DatabaseMeta> = client1.readDatabases();
const it31: ddb.QueryIterator<ddb.RetrievedDocument> = client1.readDocuments('foo', feedOptions1);
const it32: ddb.QueryIterator<ddb.RetrievedDocument> = client1.readDocuments('foo');
const it33: ddb.QueryIterator<ddb.PermissionMeta> = client1.readPermissions('foo', feedOptions1);
const it34: ddb.QueryIterator<ddb.PermissionMeta> = client1.readPermissions('foo');
const it35: ddb.QueryIterator<ddb.ProcedureMeta> = client1.readStoredProcedures('foo', feedOptions1);
const it36: ddb.QueryIterator<ddb.ProcedureMeta> = client1.readStoredProcedures('foo');
const it37: ddb.QueryIterator<ddb.TriggerMeta> = client1.readTriggers('foo', feedOptions1);
const it38: ddb.QueryIterator<ddb.TriggerMeta> = client1.readTriggers('foo');
const it39: ddb.QueryIterator<ddb.UserDefinedFunctionMeta> = client1.readUserDefinedFunctions('foo', feedOptions1);
const it40: ddb.QueryIterator<ddb.UserDefinedFunctionMeta> = client1.readUserDefinedFunctions('foo');
const it41: ddb.QueryIterator<any> = client1.readUsers('foo', feedOptions1); // TODO
const it42: ddb.QueryIterator<any> = client1.readUsers('foo'); // TODO
const it43: ddb.QueryIterator<any> = client1.readOffers(); // TODO

client1.replaceAttachment('foo', attachment1, requestOptions1, (err: ddb.QueryError, resource: ddb.AttachmentMeta, responseHeaders: any) => void 0);
client1.replaceAttachment('foo', attachment1, (err: ddb.QueryError, resource: ddb.AttachmentMeta, responseHeaders: any) => void 0);
client1.replaceCollection('foo', collection1, requestOptions1, (err: ddb.QueryError, resource: ddb.CollectionMeta, responseHeaders: any) => void 0);
client1.replaceCollection('foo', collection1, (err: ddb.QueryError, resource: ddb.CollectionMeta, responseHeaders: any) => void 0);
client1.replaceDocument('foo', document1, requestOptions1, (err: ddb.QueryError, resource: ddb.RetrievedDocument, responseHeaders: any) => void 0);
client1.replaceDocument('foo', document1, (err: ddb.QueryError, resource: ddb.RetrievedDocument, responseHeaders: any) => void 0);
client1.replacePermission('foo', permission1, requestOptions1, (err: ddb.QueryError, resource: ddb.PermissionMeta, responseHeaders: any) => void 0);
client1.replacePermission('foo', permission1, (err: ddb.QueryError, resource: ddb.PermissionMeta, responseHeaders: any) => void 0);
client1.replaceStoredProcedure('foo', sproc1, requestOptions1, (err: ddb.QueryError, resource: ddb.ProcedureMeta, responseHeaders: any) => void 0);
client1.replaceStoredProcedure('foo', sproc1, (err: ddb.QueryError, resource: ddb.ProcedureMeta, responseHeaders: any) => void 0);
client1.replaceTrigger('foo', trigger1, requestOptions1, (err: ddb.QueryError, resource: ddb.TriggerMeta, responseHeaders: any) => void 0);
client1.replaceTrigger('foo', trigger1, (err: ddb.QueryError, resource: ddb.TriggerMeta, responseHeaders: any) => void 0);
client1.replaceUser('foo', user1, requestOptions1, (err: ddb.QueryError, resource: ddb.AbstractMeta, responseHeaders: any) => void 0);
client1.replaceUser('foo', user1, (err: ddb.QueryError, resource: ddb.AbstractMeta, responseHeaders: any) => void 0);
client1.replaceUserDefinedFunction('foo', udf1, requestOptions1, (err: ddb.QueryError, resource: ddb.UserDefinedFunctionMeta, responseHeaders: any) => void 0);
client1.replaceUserDefinedFunction('foo', udf1, (err: ddb.QueryError, resource: ddb.UserDefinedFunctionMeta, responseHeaders: any) => void 0);
client1.replaceOffer('foo', {}, (err: ddb.QueryError, resource: any, responseHeaders: any) => void 0);

client1.updateMedia('foo', stream1, mediaOptions1, (err: ddb.QueryError, resource: any, responseHeaders: any) => void 0);
client1.updateMedia('foo', stream1, (err: ddb.QueryError, resource: any, responseHeaders: any) => void 0);

client1.upsertAttachment('foo', attachment1, requestOptions1, (err: ddb.QueryError, resource: ddb.AttachmentMeta, responseHeaders: any) => void 0);
client1.upsertAttachment('foo', attachment1, (err: ddb.QueryError, resource: ddb.AttachmentMeta, responseHeaders: any) => void 0);
client1.upsertAttachmentAndUploadMedia('foo', stream1, mediaOptions1, (err: ddb.QueryError, resource: ddb.AttachmentMeta, responseHeaders: any) => void 0);
client1.upsertAttachmentAndUploadMedia('foo', stream1, (err: ddb.QueryError, resource: ddb.AttachmentMeta, responseHeaders: any) => void 0);
client1.upsertDocument('foo', document1, docOptions1, (err: ddb.QueryError, resource: ddb.RetrievedDocument, responseHeaders: any) => void 0);
client1.upsertDocument('foo', document1, (err: ddb.QueryError, resource: ddb.RetrievedDocument, responseHeaders: any) => void 0);
client1.upsertPermission('foo', permission1, requestOptions1, (err: ddb.QueryError, resource: ddb.PermissionMeta, responseHeaders: any) => void 0);
client1.upsertPermission('foo', permission1, (err: ddb.QueryError, resource: ddb.PermissionMeta, responseHeaders: any) => void 0);
client1.upsertStoredProcedure('foo', sproc1, requestOptions1, (err: ddb.QueryError, resource: ddb.Procedure, responseHeaders: any) => void 0);
client1.upsertStoredProcedure('foo', sproc1, (err: ddb.QueryError, resource: ddb.Procedure, responseHeaders: any) => void 0);
client1.upsertTrigger('foo', trigger1, requestOptions1, (err: ddb.QueryError, resource: ddb.TriggerMeta, responseHeaders: any) => void 0);
client1.upsertTrigger('foo', trigger1, (err: ddb.QueryError, resource: ddb.TriggerMeta, responseHeaders: any) => void 0);
client1.upsertUser('foo', user1, requestOptions1, (err: ddb.QueryError, resource: ddb.TriggerMeta, responseHeaders: any) => void 0);
client1.upsertUser('foo', user1, (err: ddb.QueryError, resource: ddb.TriggerMeta, responseHeaders: any) => void 0);
client1.upsertUserDefinedFunction('foo', udf1, requestOptions1, (err: ddb.QueryError, resource: ddb.UserDefinedFunctionMeta, responseHeaders: any) => void 0);
client1.upsertUserDefinedFunction('foo', udf1, (err: ddb.QueryError, resource: ddb.UserDefinedFunctionMeta, responseHeaders: any) => void 0);

/** QueryIterator constructor */
interface Row {foo: string; }
const qi1 = new ddb.QueryIterator(client1, query1, feedOptions1, (err: ddb.QueryError, resource: Row, responseHeaders: any): void => void 0, 'foo');
const qi2 = new ddb.QueryIterator(client1, query1, feedOptions1, [(err: ddb.QueryError, resource: Row, responseHeaders: any): void => void 0]);

/** QueryIterator methods */
qi1.current((err: ddb.QueryError, resource: Row, responseHeaders: any) => void 0);
qi1.executeNext((err: ddb.QueryError, resource: Row[], responseHeaders: any) => void 0);
qi1.forEach((err: ddb.QueryError, resource: Row, responseHeaders: any) => void 0);
const hasMoreResults1: boolean = qi1.hasMoreResults();
qi1.nextItem((err: ddb.QueryError, resoure: Row, responseHeaders: any) => void 0);
qi1.reset();
qi1.toArray((err: ddb.QueryError, resource: Row[], responseHeaders: any) => void 0);

/** HashPartitionResolver constructor */
const hashOptions1: ddb.ConsistentHashRingOptions = { computeHash: (obj: any) => obj.foo };
const hashOptions2: ddb.ConsistentHashRingOptions = { numberOfVirtualNodesPerCollection: 100 };
const hpr1 = new ddb.HashPartitionResolver('foo', ['dbs/foo/colls/bar'], hashOptions1);
const hpr2 = new ddb.HashPartitionResolver((obj: any) => obj.foo, ['dbs/foo/colls/bar']);

/** HashPartitionResolver methods */
const hashPartitionKey1: any = hpr1.getPartitionKey(document1);
const hashCollectionLink1: string = hpr1.resolveForCreate(hashPartitionKey1);
const hashCollectionLinks1: string[] = hpr1.resolveForRead(hashPartitionKey1);

/** RangePartitionResolver constructor */
const range1 = new ddb.Range({low: 0, high: 1});

/** RangePartitionResolver constructor */
const partitionKeyMap1: ddb.PartitionKeyMap = { link: 'foo', range: range1 };
const rpr1 = new ddb.RangePartitionResolver('foo', [ partitionKeyMap1 ], (a: any, b: any) => 0);
const rpr2 = new ddb.RangePartitionResolver((obj: any) => obj.foo, [ partitionKeyMap1 ]);

/** HashPartitionResolver methods */
const rangePartitionKey1: any = rpr1.getPartitionKey(document1);
const rangeCollectionLink1: string = rpr1.resolveForCreate(hashPartitionKey1);
const rangeCollectionLinks1: string[] = rpr1.resolveForRead(hashPartitionKey1);
