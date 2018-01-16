

import typeName = require("type-name");
console.log(typeName('foo') === 'string');
console.log(typeName([1, 2]) === 'Array');
