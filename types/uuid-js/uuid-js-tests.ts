import UUID = require('uuid-js');

// Generate a V4 UUID
const uuid4 = UUID.create();
console.log(uuid4.toString());
// Prints: 896b677f-fb14-11e0-b14d-d11ca798dbac

// Generate a V1 TimeUUID
const uuid1 = UUID.create(1);
console.log(uuid1.toString());

// First and last possible v1 TimeUUID for a given timestamp:
const date = new Date().getTime();
const uuidFirst = UUID.fromTime(date, false);
const uuidLast = UUID.fromTime(date, true);
console.log(uuidFirst.toString(), uuidLast.toString());
// Prints: aa0f9af0-0e1f-11e1-0000-000000000000 aa0f9af0-0e1f-11e1-c0ff-ffffffffffff

// Use these TimeUUID's to perform range queries in cassandra:
const today = new Date().getTime();
const last30days = (new Date().setDate(today - 30));

const rangeStart = UUID.firstFromTime(last30days);
const rangeEnd = UUID.lastFromTime(today);
