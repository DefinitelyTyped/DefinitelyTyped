import wget = require('node-wget-promise');
wget('https://node.js.org/images/logo.svg');
wget('https://node.js.org/images/logo.svg', { output: '~/Pictures/logo.svg', verbose: false });
