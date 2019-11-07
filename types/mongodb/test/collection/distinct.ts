import { connectionString } from '../index';
import { connect, MongoError } from 'mongodb';

// test collection.distinct functions
async function run() {
  const client = await connect(connectionString);
  const collection = client.db('test').collection('test.distinct');

  collection.distinct('test', (err: MongoError, fields: any) => {});
  collection.distinct('test', { foo: 1 }, (err: MongoError, fields: any) => {});
  collection.distinct('test', { foo: 1 }, { maxTimeMS: 400 }, (err: MongoError, fields: any) => {});

  collection.distinct('test'); // $ExpectType Promise<any>
  collection.distinct('test', { foo: 1 }); // $ExpectType Promise<any>
  collection.distinct('test', { foo: 1 }, { maxTimeMS: 400 }); // $ExpectType Promise<any>
}
