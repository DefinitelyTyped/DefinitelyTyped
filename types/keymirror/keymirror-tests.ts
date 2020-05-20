import keyMirror = require('keymirror');

const result = keyMirror({key1: null, key2: null});

type Key = 'key1' | 'key2';

function test(value: Key) {}

// Check that it can be accessed via [] and typechecks against the 'Key' type
test(result['key2']);

// Check that it can be accessed as a property and typechecks against the 'Key' type
test(result.key2);
