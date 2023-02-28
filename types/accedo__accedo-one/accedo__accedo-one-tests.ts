import accedoOne = require("@accedo/accedo-one");

// @ts-expect-error
accedoOne();

accedoOne({
    // @ts-expect-error
    appKey: 0,
});

const accedo = accedoOne({
    appKey: 'asf8ggtg0a63189cvbs1278jj354',
});

// @ts-expect-error
accedo.getEntries('');
// @ts-expect-error
accedo.getEntries(0);

// @ts-expect-error
accedo.getEntryById();
// @ts-expect-error
accedo.getEntryByAlias();
// @ts-expect-error
accedo.sendLog();
// @ts-expect-error
accedo.getMetadataByKey();
// @ts-expect-error
accedo.getAllApplicationScopeDataByUser();
// @ts-expect-error
accedo.getAllApplicationGroupScopeDataByUser();
// @ts-expect-error
accedo.getApplicationScopeDataByUserAndKey();
// @ts-expect-error
accedo.getApplicationScopeDataByUserAndKey('userName01');

// @ts-expect-error
accedo.getApplicationGroupScopeDataByUserAndKey();
// @ts-expect-error
accedo.getApplicationGroupScopeDataByUserAndKey('userName01');

// @ts-expect-error
accedo.setApplicationScopeUserData();
// @ts-expect-error
accedo.setApplicationScopeUserData('userName01');

// @ts-expect-error
accedo.setApplicationGroupScopeUserData();
// @ts-expect-error
accedo.setApplicationGroupScopeUserData('userName01');

// @ts-expect-error
accedo.setApplicationScopeUserDataByKey();
// @ts-expect-error
accedo.setApplicationScopeUserDataByKey('userName01');

// @ts-expect-error
accedo.setApplicationGroupScopeUserDataByKey();
// @ts-expect-error
accedo.setApplicationGroupScopeUserDataByKey('userName01');
// @ts-expect-error
accedo.setApplicationGroupScopeUserDataByKey('userName01', 'key02');

// @ts-expect-error
accedo.sendLogs();
