import filesizeParser = require('filesize-parser');

// Without options
filesizeParser('200kb');

// With empty options
filesizeParser('200kb', {});

// With `base` option
filesizeParser('200kb', { base: 10 });

// Not included in the package's docs, but any input with a toString() method is valid
filesizeParser(200, { base: 10 });
