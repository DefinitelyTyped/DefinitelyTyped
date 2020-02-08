import * as BSON from 'bson';

// enable hex string caching
BSON.ObjectId.cacheHexString = true

// Verify that legacy name ObjectID still works
BSON.ObjectID.cacheHexString = true

let Long = BSON.Long;

let doc = { long: Long.fromNumber(100) }

// Serialize a document
let data = BSON.serialize(doc);
console.log("data:", data);

// Deserialize the resulting Buffer
let doc_2 = BSON.deserialize(data);
console.log("doc_2:", doc_2);

data = BSON.serialize(doc);
doc_2 = BSON.deserialize(data);


// Calculate Object Size
console.log("Calculated Object size - no options object:", BSON.calculateObjectSize(doc));
console.log("Calculated Object size - empty options object:", BSON.calculateObjectSize(doc, {}));
console.log("Calculated Object size - custom options object:", BSON.calculateObjectSize(doc, { ignoreUndefined: false, serializeFunctions: true }));

const { EJSON, Int32, ObjectId } = BSON;

console.log(EJSON.stringify(doc, { relaxed: false }));
console.log(EJSON.stringify(doc, ['int32'], { relaxed: false }));
console.log(EJSON.stringify(doc, ['int32'], 2, { relaxed: false }));
console.log(EJSON.stringify(doc));
console.log(EJSON.stringify(doc, ['int32']));
console.log(EJSON.stringify(doc, ['int32'], 2));

let doc2 = { int32: new Int32(10), _id: new ObjectId() };
const text = '{ "int32": { "$numberInt": "10" } }';

let o: {}
o = EJSON.parse (text, { relaxed: false });
console.log(EJSON.stringify(o));

console.log (EJSON.parse (text));

o = EJSON.serialize(doc2);
let o2 = EJSON.deserialize (o);
console.log(o);
console.log(o2);