import createEsmUtils from 'esm-utils';

const {
    dirname,
    filename,
    json,
    __filename,
    __dirname,
} = createEsmUtils({url: ''});

// $ExpectType string
filename;

// $ExpectType string
dirname;

// $ExpectType string
__filename;

// $ExpectType string
__dirname;

// $ExpectType Promise<JsonValue>
json.load('');

// $ExpectType JsonValue
json.loadSync('');
