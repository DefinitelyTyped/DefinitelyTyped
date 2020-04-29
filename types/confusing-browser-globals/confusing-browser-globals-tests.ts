import globals = require('confusing-browser-globals');

globals; // $ExpectType ConfusingGlobal[]
globals[0]; // $ExpectTYpe string
Array.isArray(globals); // $ExpectType boolean
const rules = {
    'no-restricted-globals': ['error'].concat(globals),
};
