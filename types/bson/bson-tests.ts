import * as bson from 'bson';

let BSON = new bson.BSON();
let Long = bson.Long;

let doc = {long: Long.fromNumber(100)}

// Serialize a document
let data = BSON.serialize(doc, false, true, false);
console.log("data:", data);

// Deserialize the resulting Buffer
let doc_2 = BSON.deserialize(data);
console.log("doc_2:", doc_2);

BSON = new bson.BSON();
data = BSON.serialize(doc);
doc_2 = BSON.deserialize(data);
