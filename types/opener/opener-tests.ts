import opener = require('opener');

// all example code should compile

opener('http://google.com');
opener('./my-file.txt');
opener('firefox');
opener('npm run lint');

const editor = opener('documentation.odt');
editor.unref();
