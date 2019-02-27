import * as uuidv4 from 'uuidv4'; // uuidv4 is () => string

// $ExpectType string
uuidv4();

// $ExpectType string
uuidv4.empty();

// $ExpectType boolean
uuidv4.is('00000000-0000-0000-0000-000000000000');

// $ExpectType string
uuidv4.fromString("test");
