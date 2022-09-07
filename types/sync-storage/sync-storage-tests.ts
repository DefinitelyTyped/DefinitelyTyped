import SyncStorage = require("sync-storage");
SyncStorage.set("foo", "bar");
SyncStorage.get("foo");
SyncStorage.init();
SyncStorage.getAllKeys();
SyncStorage.remove("foo");
