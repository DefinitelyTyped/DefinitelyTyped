import parseKey = require('parse-key');

const visibilityKey = parseKey('ctrl-c');
visibilityKey.name;
visibilityKey.ctrl;
visibilityKey.alt;
visibilityKey.meta;
visibilityKey.sequence;
visibilityKey.shift;
