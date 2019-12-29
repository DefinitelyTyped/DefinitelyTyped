import leveldown = require("leveldown");

const db = leveldown("db1");

db.open((err) => {});
db.open({createIfMissing: true}, (err) => {});

db.put("key", "value", (err) => {});
db.put(Buffer.from("key"), Buffer.from("value"), (err) => {});
db.put("key", "value", {sync: true}, (err) => {});

db.get("key", {asBuffer: false}, (error, val) => {
    console.log(val.toUpperCase());
});
db.get("key", {fillCache: true}, (error, val) => {
    console.log(val.readUInt32BE(0));
});
db.get("key", (error, val) => {
    console.log(val.readUInt32BE(0));
});

db.del("key");
db.del("key", (error) => {});
db.del("key", {sync: true}, (error) => {});

db.batch([{
    type: "put", key: "k", value: "v"
}, {
    type: "del", key: "k"
}], (error) => {});

const keyAsStringIterator = db.iterator({keyAsBuffer: false});
keyAsStringIterator.next((err, k, v) => {
    console.log(k.toUpperCase());
    console.log(v.readUInt32BE(0));
});

const valueAsStringIterator = db.iterator({valueAsBuffer: false});
valueAsStringIterator.next((err, k, v) => {
    console.log(k.readUInt32BE(0));
    console.log(v.toUpperCase());
});

const keyAndValueAsStringIterator = db.iterator({keyAsBuffer: false, valueAsBuffer: false});
keyAndValueAsStringIterator.next((err, k, v) => {
    console.log(k.toUpperCase());
    console.log(v.toUpperCase());
});

const keyAndValueAsBufferIterator1 = db.iterator({keyAsBuffer: true, valueAsBuffer: true});
keyAndValueAsBufferIterator1.next((err, k, v) => {
    console.log(k.readUInt32BE(0));
    console.log(v.readUInt32BE(0));
});

const keyAndValueAsBufferIterator2 = db.iterator({keyAsBuffer: true});
keyAndValueAsBufferIterator2.next((err, k, v) => {
    console.log(k.readUInt32BE(0));
    console.log(v.readUInt32BE(0));
});

const keyAndValueAsBufferIterator3 = db.iterator({valueAsBuffer: true});
keyAndValueAsBufferIterator3.next((err, k, v) => {
    console.log(k.readUInt32BE(0));
    console.log(v.readUInt32BE(0));
});

const keyAndValueAsBufferIterator4 = db.iterator({});
keyAndValueAsBufferIterator4.next((err, k, v) => {
    console.log(k.readUInt32BE(0));
    console.log(v.readUInt32BE(0));
});

keyAndValueAsBufferIterator4.seek("k");
keyAndValueAsBufferIterator4.end((err) => {});

const s: string = db.getProperty("leveldb.stats");

db.approximateSize("k1", "k2", (err, size) => {
    console.log(size.toExponential());
});

db.compactRange("k1", "k2", (err) => {});

leveldown.destroy("/path/to/db", (err) => {});
leveldown.repair("/path/to/db", (err) => {});
