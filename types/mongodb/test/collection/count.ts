import { connectionString } from '../index';
import { connect, MongoError } from 'mongodb';

// test collection.countDocuments and collection.count functions
async function run() {
    const client = await connect(connectionString);
    const collection = client.db('test').collection('test.count');

    collection.countDocuments((err: MongoError, count: number) => {});

    const c1 = await collection.countDocuments();
    c1; // $ExpectType number

    collection.countDocuments({ foo: 1 }, (err: MongoError, count: number) => {});

    const c2 = await collection.countDocuments({ foo: 1 });
    c2; // $ExpectType number

    collection.countDocuments({ foo: 1 }, { limit: 10 }, (err: MongoError, count: number) => {});

    const c3 = await collection.countDocuments({ foo: 1 }, { limit: 10 });
    c3; // $ExpectType number
}
