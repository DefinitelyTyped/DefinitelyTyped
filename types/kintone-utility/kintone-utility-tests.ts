import kintoneUtility = require('kintone-utility');

const query = 'field = "value"';
const app = 1;
const apps = [1, 2, 3];
const id = 1;
const ids = [1, 2, 3];
const fileKey = 'image.png';
const fields = ['field1', 'field2', 'field3'];
const Files = [
    {type: 'js'},
    {type: 'js', url: 'https://google.com/search.js'},
    {type: 'js', file: {fileKey: 'abc_xyz_1234567'}},
];
const record = {id: 1, field1: {value: 1}};
const records = [{id: 1, field1: {value: 1}, field2: {value: 2}}];

// deleteAllRecords
// $ExpectType object
kintoneUtility.rest.deleteAllRecords({
    app,
    ids,
});

// $ExpectType object
kintoneUtility.rest.deleteAllRecords({
    app,
    ids,
    isGuest: true,
});

// deleteAllRecordsByQuery
// $ExpectType object
kintoneUtility.rest.deleteAllRecordsByQuery({
    app,
});

// $ExpectType object
kintoneUtility.rest.deleteAllRecordsByQuery({
    app,
    query,
    isGuest: true,
});

// deleteRecords
// $ExpectType object
kintoneUtility.rest.deleteRecords({
    app,
    ids
});

// $ExpectType object
kintoneUtility.rest.deleteRecords({
    app,
    ids,
    revisions: [1, 2, 3],
    isGuest: true,
});

// downloadFile
// $ExpectType object
kintoneUtility.rest.downloadFile({
    fileKey,
});

// $ExpectType object
kintoneUtility.rest.downloadFile({
    fileKey,
    isGuest: true,
});

// getAllRecordsByQuery
// $ExpectType object
kintoneUtility.rest.getAllRecordsByQuery({
    app,
});

// $ExpectType object
kintoneUtility.rest.getAllRecordsByQuery({
    app,
    query,
    fields,
    isGuest: true,
});

// getAppDeployStatus
// $ExpectType object
kintoneUtility.rest.getAppDeployStatus({
    apps,
    isGuest: true,
});

// $ExpectType object
kintoneUtility.rest.getAppDeployStatus({
    apps,
});

// getCustomization
// $ExpectType object
kintoneUtility.rest.getCustomization({
    app,
});

// $ExpectType object
kintoneUtility.rest.getCustomization({
    app,
    isPreview: true,
    isGuest: true,
});

// $ExpectType object
kintoneUtility.rest.getFormFields({
    app,
    lang: 'ja',
    isGuest: true,
    isPreview: true,
});

// $ExpectType object
kintoneUtility.rest.getFormLayout({
    app,
    isGuest: true,
    isPreview: true,
});

// getRecord
// $ExpectType object
kintoneUtility.rest.getRecord({
    app,
    id,
});

// $ExpectType object
kintoneUtility.rest.getRecord({
    app,
    id,
    isGuest: true,
});

// getRecords
// $ExpectType object
kintoneUtility.rest.getRecords({
    app,
});

// $ExpectType object
kintoneUtility.rest.getRecords({
    app,
    query,
    fields,
    totalCount: true,
    isGuest: true,
});

// postAllRecords
// $ExpectType object
kintoneUtility.rest.postAllRecords({
    app,
    records,
});

// $ExpectType object
kintoneUtility.rest.postAllRecords({
    app,
    records,
    isGuest: true,
});

// postDeployAppSettings
// $ExpectType object
kintoneUtility.rest.postDeployAppSettings({
    apps: [
        {app: 1, revision: 1},
        {app: 2, revision: 2},
    ],
});

// $ExpectType object
kintoneUtility.rest.postDeployAppSettings({
    apps: [
        {app: 1, revision: 1},
        {app: 2, revision: 2},
    ],
    revert: true,
    isGuest: true,
});

// postRecord
// $ExpectType object
kintoneUtility.rest.postRecord({
    app,
});

// $ExpectType object
kintoneUtility.rest.postRecord({
    app,
    record,
    isGuest: true,
});

// postRecords
// $ExpectType object
kintoneUtility.rest.postRecords({
    app,
    records,
    isGuest: true,
});

// putAllRecords
// $ExpectType object
kintoneUtility.rest.putAllRecords({
    app,
    records,
});

// $ExpectType object
kintoneUtility.rest.putAllRecords({
    app,
    records,
    isGuest: true,
});

// putRecord
// $ExpectType object
kintoneUtility.rest.putRecord({
    app,
});

// $ExpectType object
kintoneUtility.rest.putRecord({
    app,
    id,
    updateKey: {
        field: 'field1',
        value: 'value1'
    },
    revision: 1,
    record,
    isGuest: true,
});

// putRecords
// $ExpectType object
kintoneUtility.rest.putRecords({
    app,
    records,
});

// $ExpectType object
kintoneUtility.rest.putRecords({
    app,
    records,
    isGuest: true,
});

// setApiTokenAuth
// $ExpectType void
kintoneUtility.rest.setApiTokenAuth('token123');

// setBasicAuth
// $ExpectType void
kintoneUtility.rest.setBasicAuth('alice', 'bob');

// setDomain
// $ExpectType void
kintoneUtility.rest.setDomain('google.com');

// setGuestSpaceId
// $ExpectType void
kintoneUtility.rest.setGuestSpaceId(1);

// setUserAuth
// $ExpectType void
kintoneUtility.rest.setUserAuth('alice', 'bob');

// updateCustomization
// $ExpectType object
kintoneUtility.rest.updateCustomization({
    app,
});

// $ExpectType object
kintoneUtility.rest.updateCustomization({
    app,
    scope: '',
    desktop: {
        js: Files,
        ccs: Files,
    },
    mobile: {
        js: Files,
    },
    revision: 1,
    isGuest: true,
});

// uploadFile
// $ExpectType object
kintoneUtility.rest.uploadFile({
    fileName: 'image.png',
    blob: {},
    isGuest: true,
});

// $ExpectType object
kintoneUtility.rest.uploadFile({
    fileName: 'image.png',
    blob: {},
});

// upsertRecord
// $ExpectType object
kintoneUtility.rest.upsertRecord({
    app,
    updateKey: {
        field: 'field1',
        value: 'value1'
    },
    record,
});

// $ExpectType object
kintoneUtility.rest.upsertRecord({
    app,
    updateKey: {
        field: 'field1',
        value: 'value1'
    },
    record,
    isGuest: true,
});

// upsertRecords
// $ExpectType object
kintoneUtility.rest.upsertRecords({
    app,
    records,
});

// $ExpectType object
kintoneUtility.rest.upsertRecords({
    app,
    records,
    isGuest: true,
});
