import guid = require('guid');

// $ExpectType object
guid.create();

// $ExpectType string
guid.raw();

const newRawGuid = guid.raw();

// $ExpectType boolean
guid.isGuid(newRawGuid);

// $ExpectType string
guid.EMPTY;

// $ExpectType object
guid(guid.create());
