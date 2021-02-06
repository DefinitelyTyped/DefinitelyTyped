import parseConflictJson = require('parse-conflict-json');
import fs = require('fs');

const data = fs.readFileSync('tsconfig.json', 'utf8');

parseConflictJson.isDiff(data); // $ExpectType boolean
parseConflictJson.isDiff(JSON.stringify({})); // $ExpectType boolean

parseConflictJson(data); // $ExpectType any
parseConflictJson(data, (name, value) => value); // $ExpectType any
parseConflictJson(data, (name, value) => value, 'theirs'); // $ExpectType any
parseConflictJson(data, (name, value) => value, 'ours'); // $ExpectType any
