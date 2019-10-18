import filesizeParser = require('filesize-parser');

// Without options
filesizeParser('200kb');

// With empty options
filesizeParser('200kb', {});

// With `base` option
filesizeParser('200kb', { base: 10 });
