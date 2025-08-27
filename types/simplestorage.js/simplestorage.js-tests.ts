import simpleStorage = require("simplestorage.js");

simpleStorage.version; // $ExpectType "0.2.1"
simpleStorage.status; // $ExpectType string | number | undefined
simpleStorage.canUse(); // $ExpectType boolean
const simpleStorageTest1: boolean | Error = simpleStorage.set("string", 7);
const simpleStorageTest2: boolean | Error = simpleStorage.set("string", 7, {});
const simpleStorageTest3: boolean | Error = simpleStorage.set("string", 7, { TTL: 7 });
const simpleStorageTest4: boolean | Error = simpleStorage.set("string", undefined);
const simpleStorageTest5: boolean | Error = simpleStorage.set("string", undefined, {});
const simpleStorageTest6: boolean | Error = simpleStorage.set("string", undefined, { TTL: 7 });
const getTest: any = simpleStorage.get("string");
const deleteKeyTest: boolean | Error = simpleStorage.deleteKey("string");
const setTTLTest: boolean | Error = simpleStorage.setTTL("string", 7);
const getTTLTest: number | boolean = simpleStorage.getTTL("string");
const flushTest: boolean | Error = simpleStorage.flush();
const indexTest: [string] | boolean = simpleStorage.index();
const storageSizeTest: number = simpleStorage.storageSize();
const hasKey: boolean = simpleStorage.hasKey("string");
