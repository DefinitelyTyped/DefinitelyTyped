import uuidToHex = require('uuid-to-hex');
import uuid = require('uuid');

const uuidToBeParsed = uuid.v4();

// $ExpectType string
uuidToHex(uuidToBeParsed);

// $ExpectType string
uuidToHex(uuidToBeParsed, true);

// $ExpectError
uuidToHex();
