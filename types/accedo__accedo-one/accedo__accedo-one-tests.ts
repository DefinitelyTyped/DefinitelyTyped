import accedoOne = require("@accedo/accedo-one");

accedoOne(); // $ExpectError

accedoOne({
    appKey: 0, // $ExpectError
});

const accedo = accedoOne({
    appKey: 'asf8ggtg0a63189cvbs1278jj354',
});

accedo.getEntries(''); // $ExpectError
accedo.getEntries(0); // $ExpectError

accedo.getEntryById(); // $ExpectError
accedo.getEntryByAlias(); // $ExpectError
accedo.sendLog(); // $ExpectError
accedo.getMetadataByKey(); // $ExpectError
accedo.getAllApplicationScopeDataByUser(); // $ExpectError
accedo.getAllApplicationGroupScopeDataByUser(); // $ExpectError
accedo.getApplicationScopeDataByUserAndKey(); // $ExpectError
accedo.getApplicationScopeDataByUserAndKey('userName01'); // $ExpectError

accedo.getApplicationGroupScopeDataByUserAndKey(); // $ExpectError
accedo.getApplicationGroupScopeDataByUserAndKey('userName01'); // $ExpectError

accedo.setApplicationScopeUserData(); // $ExpectError
accedo.setApplicationScopeUserData('userName01'); // $ExpectError

accedo.setApplicationGroupScopeUserData(); // $ExpectError
accedo.setApplicationGroupScopeUserData('userName01'); // $ExpectError

accedo.setApplicationScopeUserDataByKey(); // $ExpectError
accedo.setApplicationScopeUserDataByKey('userName01'); // $ExpectError

accedo.setApplicationGroupScopeUserDataByKey(); // $ExpectError
accedo.setApplicationGroupScopeUserDataByKey('userName01'); // $ExpectError
accedo.setApplicationGroupScopeUserDataByKey('userName01', 'key02'); // $ExpectError

accedo.sendLogs(); // $ExpectError
