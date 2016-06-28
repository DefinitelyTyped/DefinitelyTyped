///<reference path="simplestorage.js.d.ts"/>

var versionTest:        string           = simpleStorage.version;
var canUseTest:         boolean          = simpleStorage.canUse();
var simpleStorageTest1: boolean|Error    = simpleStorage.set("string", 7);
var simpleStorageTest2: boolean|Error    = simpleStorage.set("string", 7, {});
var simpleStorageTest3: boolean|Error    = simpleStorage.set("string", 7, { TTL: 7 });
var simpleStorageTest4: boolean|Error    = simpleStorage.set("string", undefined);
var simpleStorageTest5: boolean|Error    = simpleStorage.set("string", undefined, {});
var simpleStorageTest6: boolean|Error    = simpleStorage.set("string", undefined, { TTL: 7 });
var getTest:            any              = simpleStorage.get("string");
var deleteKeyTest:      boolean|Error    = simpleStorage.deleteKey("string");
var setTTLTest:         boolean|Error    = simpleStorage.setTTL("string", 7);
var getTTLTest:         number|boolean   = simpleStorage.getTTL("string");
var flushTest:          boolean|Error    = simpleStorage.flush();
var indexTest:          [string]|boolean = simpleStorage.index();
var storageSizeTest:    number           = simpleStorage.storageSize();
