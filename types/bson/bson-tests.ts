import * as bson from 'bson';

// enable hex string caching
bson.ObjectID.cacheHexString = true

let BSON = new bson.BSON();
let Long = bson.Long;

let doc = { long: Long.fromNumber(100) }

// Serialize a document
let data = BSON.serialize(doc);
console.log("data:", data);

// Deserialize the resulting Buffer
let doc_2 = BSON.deserialize(data);
console.log("doc_2:", doc_2);

BSON = new bson.BSON();
data = BSON.serialize(doc);
doc_2 = BSON.deserialize(data);


// Calculate Object Size
BSON = new bson.BSON();
console.log("Calculated Object size - no options object:", BSON.calculateObjectSize(doc));
console.log("Calculated Object size - empty options object:", BSON.calculateObjectSize(doc, {}));
console.log("Calculated Object size - custom options object:", BSON.calculateObjectSize(doc, { ignoreUndefined: false, serializeFunctions: true }));
