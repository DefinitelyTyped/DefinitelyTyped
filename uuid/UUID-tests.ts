/// <reference path="UUID.d.ts" />
// Copied below from readme at https://github.com/LiosK/UUID.js




// the simplest way to get an UUID (as a hexadecimal string)
console.log(UUID.generate());  // "0db9a5fa-f532-4736-89d6-8819c7f3ac7b"

// create a version 4 (random-numbers-based) UUID object
var objV4 = UUID.genV4();

// create a version 1 (time-based) UUID object
var objV1 = UUID.genV1();

// create an UUID object from a hexadecimal string
var uuid = UUID.parse("a0e0f130-8c21-11df-92d9-95795a3bcd40");


// UUID object as a string
console.log(uuid.toString());  // "a0e0f130-8c21-11df-92d9-95795a3bcd40"
console.log(uuid.hexString);   // "a0e0f130-8c21-11df-92d9-95795a3bcd40"
console.log(uuid.bitString);   // "101000001110000 ... 1100110101000000"
console.log(uuid.urn);         // "urn:uuid:a0e0f130-8c21-11df-92d9-95795a3bcd40"

// compare UUID objects
console.log(objV4.equals(objV1));  // false

// show version numbers
console.log(objV4.version);  // 4
console.log(objV1.version);  // 1

// get UUID field values in 3 different formats by 2 different accessors
console.log(uuid.intFields.timeLow);               // 2699096368
console.log(uuid.bitFields.timeMid);               // "1000110000100001"
console.log(uuid.hexFields.timeHiAndVersion);      // "11df"
console.log(uuid.intFields.clockSeqHiAndReserved); // 146
console.log(uuid.bitFields.clockSeqLow);           // "11011001"
console.log(uuid.hexFields.node);                  // "95795a3bcd40"

console.log(uuid.intFields[0]);                    // 2699096368
console.log(uuid.bitFields[1]);                    // "1000110000100001"
console.log(uuid.hexFields[2]);                    // "11df"
console.log(uuid.intFields[3]);                    // 146
console.log(uuid.bitFields[4]);                    // "11011001"
console.log(uuid.hexFields[5]);                    // "95795a3bcd40"
