import SyncStorage = require("sync-storage");

// $ExpectType Promise<void>
SyncStorage.set("foo", "bar");
// $ExpectType any
SyncStorage.get("foo");
// $ExpectType Promise<any[]>
SyncStorage.init();
// $ExpectType any[]
SyncStorage.getAllKeys();
// $ExpectType Promise<void>
SyncStorage.remove("foo");
