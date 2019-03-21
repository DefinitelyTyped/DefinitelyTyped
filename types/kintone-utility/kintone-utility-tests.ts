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
// $ExpectType Promise<object>
kintoneUtility.rest.deleteAllRecords({
    app,
    ids,
});

// $ExpectType Promise<object>
kintoneUtility.rest.deleteAllRecords({
    app,
    ids,
    isGuest: true,
});

// deleteAllRecordsByQuery
// $ExpectType Promise<object>
kintoneUtility.rest.deleteAllRecordsByQuery({
    app,
});

// $ExpectType Promise<object>
kintoneUtility.rest.deleteAllRecordsByQuery({
    app,
    query,
    isGuest: true,
});

// deleteRecords
// $ExpectType Promise<object>
kintoneUtility.rest.deleteRecords({
    app,
    ids
});

// $ExpectType Promise<object>
kintoneUtility.rest.deleteRecords({
    app,
    ids,
    revisions: [1, 2, 3],
    isGuest: true,
});

// downloadFile
// $ExpectType Promise<object>
kintoneUtility.rest.downloadFile({
    fileKey,
});

// $ExpectType Promise<object>
kintoneUtility.rest.downloadFile({
    fileKey,
    isGuest: true,
});

// getAllRecordsByQuery
// $ExpectType Promise<object>
kintoneUtility.rest.getAllRecordsByQuery({
    app,
});

// $ExpectType Promise<object>
kintoneUtility.rest.getAllRecordsByQuery({
    app,
    query,
    fields,
    isGuest: true,
});

// getAppDeployStatus
// $ExpectType Promise<object>
kintoneUtility.rest.getAppDeployStatus({
    apps,
    isGuest: true,
});

// $ExpectType Promise<object>
kintoneUtility.rest.getAppDeployStatus({
    apps,
});

// getCustomization
// $ExpectType Promise<object>
kintoneUtility.rest.getCustomization({
    app,
});

// $ExpectType Promise<object>
kintoneUtility.rest.getCustomization({
    app,
    isPreview: true,
    isGuest: true,
});

// $ExpectType Promise<object>
kintoneUtility.rest.getFormFields({
    app,
    lang: 'ja',
    isGuest: true,
    isPreview: true,
});

// $ExpectType Promise<object>
kintoneUtility.rest.getFormLayout({
    app,
    isGuest: true,
    isPreview: true,
});

// getRecord
// $ExpectType Promise<object>
kintoneUtility.rest.getRecord({
    app,
    id,
});

// $ExpectType Promise<object>
kintoneUtility.rest.getRecord({
    app,
    id,
    isGuest: true,
});

// getRecords
// $ExpectType Promise<object>
kintoneUtility.rest.getRecords({
    app,
});

// $ExpectType Promise<object>
kintoneUtility.rest.getRecords({
    app,
    query,
    fields,
    totalCount: true,
    isGuest: true,
});

// postAllRecords
// $ExpectType Promise<object>
kintoneUtility.rest.postAllRecords({
    app,
    records,
});

// $ExpectType Promise<object>
kintoneUtility.rest.postAllRecords({
    app,
    records,
    isGuest: true,
});

// postDeployAppSettings
// $ExpectType Promise<object>
kintoneUtility.rest.postDeployAppSettings({
    apps: [
        {app: 1, revision: 1},
        {app: 2, revision: 2},
    ],
});

// $ExpectType Promise<object>
kintoneUtility.rest.postDeployAppSettings({
    apps: [
        {app: 1, revision: 1},
        {app: 2, revision: 2},
    ],
    revert: true,
    isGuest: true,
});

// postRecord
// $ExpectType Promise<object>
kintoneUtility.rest.postRecord({
    app,
});

// $ExpectType Promise<object>
kintoneUtility.rest.postRecord({
    app,
    record,
    isGuest: true,
});

// postRecords
// $ExpectType Promise<object>
kintoneUtility.rest.postRecords({
    app,
    records,
    isGuest: true,
});

// putAllRecords
// $ExpectType Promise<object>
kintoneUtility.rest.putAllRecords({
    app,
    records,
});

// $ExpectType Promise<object>
kintoneUtility.rest.putAllRecords({
    app,
    records,
    isGuest: true,
});

// putRecord
// $ExpectType Promise<object>
kintoneUtility.rest.putRecord({
    app,
});

// $ExpectType Promise<object>
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
// $ExpectType Promise<object>
kintoneUtility.rest.putRecords({
    app,
    records,
});

// $ExpectType Promise<object>
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
// $ExpectType Promise<object>
kintoneUtility.rest.updateCustomization({
    app,
});

// $ExpectType Promise<object>
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
// $ExpectType Promise<object>
kintoneUtility.rest.uploadFile({
    fileName: 'image.png',
    blob: {},
    isGuest: true,
});

// $ExpectType Promise<object>
kintoneUtility.rest.uploadFile({
    fileName: 'image.png',
    blob: {},
});

// upsertRecord
// $ExpectType Promise<object>
kintoneUtility.rest.upsertRecord({
    app,
    updateKey: {
        field: 'field1',
        value: 'value1'
    },
    record,
});

// $ExpectType Promise<object>
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
// $ExpectType Promise<object>
kintoneUtility.rest.upsertRecords({
    app,
    records,
});

// $ExpectType Promise<object>
kintoneUtility.rest.upsertRecords({
    app,
    records,
    isGuest: true,
});
