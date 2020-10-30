import { connectionString } from '../index';
import { connect, MongoError, ObjectId } from 'mongodb';

// test collection.distinct functions
async function run() {
    interface Collection {
        foo: number;
        nested: { num: number };
        array: string[];
        readonlyArray: ReadonlyArray<string>;
        test: string;
    }

    const client = await connect(connectionString);
    const collection = client.db('test').collection<Collection>('test.distinct');

    collection.distinct('test', (err: MongoError, fields: string[]) => {});
    collection.distinct('test', { foo: 1 }, (err: MongoError, fields: string[]) => {});
    collection.distinct('test', { foo: 1 }, { maxTimeMS: 400 }, (err: MongoError, fields: string[]) => {});

    collection.distinct('test'); // $ExpectType Promise<string[]>
    collection.distinct('test', { foo: 1 }); // $ExpectType Promise<string[]>
    collection.distinct('test', { foo: 1 }, { maxTimeMS: 400 }); // $ExpectType Promise<string[]>

    collection.distinct('_id', (err: MongoError, fields: ObjectId[]) => {});
    collection.distinct('_id', { foo: 1 }, (err: MongoError, fields: ObjectId[]) => {});
    collection.distinct('_id', { foo: 1 }, { maxTimeMS: 400 }, (err: MongoError, fields: ObjectId[]) => {});

    collection.distinct('_id'); // $ExpectType Promise<ObjectId[]>
    collection.distinct('_id', { foo: 1 }); // $ExpectType Promise<ObjectId[]>
    collection.distinct('_id', { foo: 1 }, { maxTimeMS: 400 }); // $ExpectType Promise<ObjectId[]>

    collection.distinct('nested.num', (err: MongoError, fields: any[]) => {});
    collection.distinct('nested.num', { foo: 1 }, (err: MongoError, fields: any[]) => {});
    collection.distinct('nested.num', { foo: 1 }, { maxTimeMS: 400 }, (err: MongoError, fields: any[]) => {});

    collection.distinct('nested.num'); // $ExpectType Promise<any[]>
    collection.distinct('nested.num', { foo: 1 }); // $ExpectType Promise<any[]>
    collection.distinct('nested.num', { foo: 1 }, { maxTimeMS: 400 }); // $ExpectType Promise<any[]>

    collection.distinct('array'); // $ExpectType Promise<string[]>
    collection.distinct('array', { foo: 1 }); // $ExpectType Promise<string[]>
    collection.distinct('array', { foo: 1 }, { maxTimeMS: 400 }); // $ExpectType Promise<string[]>

    collection.distinct('readonlyArray'); // $ExpectType Promise<string[]>
    collection.distinct('readonlyArray', { foo: 1 }); // $ExpectType Promise<string[]>
    collection.distinct('readonlyArray', { foo: 1 }, { maxTimeMS: 400 }); // $ExpectType Promise<string[]>
}
