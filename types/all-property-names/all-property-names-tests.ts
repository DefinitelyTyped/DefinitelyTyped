import allPropertyNames = require('all-property-names');

// $ExpectType Set<string>
allPropertyNames(Symbol.prototype);
