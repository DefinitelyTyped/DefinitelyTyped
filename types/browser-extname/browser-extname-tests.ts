import extname = require('browser-extname');

extname('index.html');
// Returns: '.html'

extname('index.coffee.md');
// Returns: '.md'

extname('index.');
// Returns: '.'

extname('index');
// Returns: ''

extname('.index');
// Returns: ''

extname('.index.md');
// Returns: '.md'
