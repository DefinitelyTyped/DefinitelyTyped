import CacheDB = require("chenyfan__cache-db");

const namespace = "test-ns";
const prefix = "test-prefix";

const db = new CacheDB(namespace, prefix);

db.read("Test");

db.write('Test', "test value");
db.write('Test2', new Blob([]));
db.write('Test3', new ArrayBuffer(1));

db.delete("Test");
