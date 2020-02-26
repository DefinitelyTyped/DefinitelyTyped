import parsePreferHeader = require('parse-prefer-header');

parsePreferHeader(['respond-async, wait=100', 'handling=lenient']);
parsePreferHeader('');

parsePreferHeader(null);
parsePreferHeader(undefined);
