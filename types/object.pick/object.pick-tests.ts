import pick = require('object.pick');

pick({a: 'a', b: 'b'}, ['a']);

const keys = ['a'] as const;
pick({a: 'a', b: 'b'}, keys);
