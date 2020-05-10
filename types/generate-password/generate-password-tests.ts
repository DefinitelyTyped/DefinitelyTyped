import generator = require('generate-password');

generator.generate(); // $ExpectType string
generator.generateMultiple(1); // $ExpectType string[]

// generateMultiple method called without required properties should error
generator.generateMultiple(); // $ExpectError
