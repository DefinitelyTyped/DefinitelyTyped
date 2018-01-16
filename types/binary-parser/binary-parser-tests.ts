import { Parser } from "binary-parser";

// Build an IP packet header Parser
const ipHeader = new Parser()
    .endianess('big')
    .bit4('version')
    .bit4('headerLength')
    .uint8('tos')
    .uint16('packetLength')
    .uint16('id')
    .bit3('offset')
    .bit13('fragOffset')
    .uint8('ttl')
    .uint8('protocol')
    .uint16('checksum')
    .array('src', {
        type: 'uint8',
        length: 4
    })
    .array('dst', {
        type: 'uint8',
        length: 4
    });

// Prepare buffer to parse.
const buf = new Buffer('450002c5939900002c06ef98adc24f6c850186d1', 'hex');

// Parse buffer and show result
ipHeader.parse(buf);

const parser2 = new Parser()
    // Signed 32-bit integer (little endian)
    .int32le('a')
    // Unsigned 8-bit integer
    .uint8('b')
    // Signed 16-bit integer (big endian)
    .int16be('c');

const parser3 = new Parser()
    // 32-bit floating value (big endian)
    .floatbe('a')
    // 64-bit floating value (little endian)
    .doublele('b');

const parser4 = new Parser()
    // Statically sized array
    .array('data', {
        type: 'int32',
        length: 8
    })

    // Dynamically sized array (references another variable)
    .uint8('dataLength')
    .array('data2', {
        type: 'int32',
        length: 'dataLength'
    })

    // Dynamically sized array (with some calculation)
    .array('data3', {
        type: 'int32',
        length: () => 4 // other fields are available through this
    })

    // Statically sized array
    .array('data4', {
        type: 'int32',
        lengthInBytes: 16
    })

    // Dynamically sized array (references another variable)
    .uint8('dataLengthInBytes')
    .array('data5', {
        type: 'int32',
        lengthInBytes: 'dataLengthInBytes'
    })

    // Dynamically sized array (with some calculation)
    .array('data6', {
        type: 'int32',
        lengthInBytes: () => 4, // other fields are available through this
    })

    // Dynamically sized array (with stop-check on parsed item)
    .array('data7', {
        type: 'int32',
        readUntil: (item, buffer) => true // stop when specific item is parsed. buffer can be used to perform a read-ahead.
    });

const parser5 = new Parser()
    .array('ipv4', {
        type: 'uint8',
        length: '4',
        formatter: (arr) => { }
    });
