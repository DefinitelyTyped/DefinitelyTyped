import * as id from 'uuid-readable';

id.generate(); // $ExpectType string

// Pass your own UUID
const uuid = '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed';

id.generate(uuid); // $ExpectType string

// Inverse, get UUID back from Readable UUID

const readable = id.generate(uuid); // $ExpectType string
id.inverse(readable); // $ExpectType string

// Low Entropy 32bit Readable (Use as Readable Hash)

const short = id.short(uuid); // $ExpectType string

// Check Later

id.check(short, uuid); // $ExpectType boolean
