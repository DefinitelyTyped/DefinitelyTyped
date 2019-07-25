import parsePackageName = require('parse-package-name');

function testType({ name, path, version }: { name: string; path: string; version: string }) {}

const result = parsePackageName('');
testType(result);
