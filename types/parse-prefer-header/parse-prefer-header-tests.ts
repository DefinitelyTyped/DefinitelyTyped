import parsePreferHeader = require('parse-prefer-header');

const testArray = ['respond-async, wait=100', 'handling=lenient'];

const readonlyTestArray: ReadonlyArray<string> = testArray;

parsePreferHeader(testArray);
parsePreferHeader(readonlyTestArray);
parsePreferHeader('');
parsePreferHeader(null);
parsePreferHeader(undefined);
