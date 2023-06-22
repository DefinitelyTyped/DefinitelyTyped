import uuid = require('sodium-uuid');

uuid.BYTES; // $ExpectType 16

uuid(); // $ExpectType Buffer
uuid(Buffer.alloc(uuid.BYTES)); // $ExpectType Buffer

uuid.stringify(Buffer.alloc(uuid.BYTES)); // $ExpectType string
uuid.parse(''); // $ExpectType Buffer
uuid.parse('', Buffer.alloc(uuid.BYTES)); // $ExpectType Buffer
uuid.isUUID(''); // $ExpectType boolean
uuid.isUUID(Buffer.alloc(uuid.BYTES)); // $ExpectType boolean
