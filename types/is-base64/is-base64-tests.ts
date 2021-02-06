import isBase64 = require('is-base64');

const string = '';

const test1: boolean = isBase64(string);
const test2: boolean = isBase64(string, { allowEmpty: true });
const test3: boolean = isBase64(string, { allowMime: true });
const test4: boolean = isBase64(string, { mimeRequired: true });
const test5: boolean = isBase64(string, { paddingRequired: true });
