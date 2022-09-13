import { MongoClientOptions } from 'mongodb';
import Fixtures = require('node-mongodb-fixtures');

const uri = 'mongodb://localhost:27017/mydb';

const options: Fixtures.Options = {
    dir: 'examples/fixtures',
    filter: 'people.*',
    mute: false,
};

// $ExpectType Fixtures
const fixtures0 = new Fixtures();
// @ts-expect-error
fixtures0.connect();

// $ExpectType Fixtures
const fixtures1 = new Fixtures({});
// $ExpectType Promise<Fixtures>
fixtures1.connect(uri);

// $ExpectType Fixtures
const fixtures2 = new Fixtures({});
// $ExpectType Promise<Fixtures>
fixtures2.connect(uri, {});

// $ExpectType Fixtures
const fixtures3 = new Fixtures(options);
declare const mongoOptions: MongoClientOptions;
// $ExpectType Promise<Fixtures>
fixtures3.connect(
    uri,
    mongoOptions,
    'db',
);
// $ExpectType Promise<Fixtures>
fixtures3.load();
// $ExpectType Promise<Fixtures>
fixtures3.unload();
// $ExpectType Promise<void>
fixtures3.disconnect();
