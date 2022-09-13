import wildstring = require('wildstring');

wildstring.wildcard = '*';
wildstring.caseSensitive = true;

wildstring.match('Test*', 'Testing');

wildstring.replace('I * node.*', 'script');
wildstring.replace('I * node.*', [ 'love', 'js' ]);
