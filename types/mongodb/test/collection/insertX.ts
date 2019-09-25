import { connect } from 'mongodb';
import { connectionString } from '../index';

// test collection.insertX functions
async function run() {
  const client = await connect(connectionString);
  const db = client.db('test');

  // test insertOne results
  db.collection('test-insert').insertOne({ a: 2 }, (err, result) => {
    result.insertedCount; // $ExpectType number
    result.insertedId; // $ExpectType ObjectId
    result.result.n; // $ExpectType number
    result.result.ok; // $ExpectType number
  });

  // test with collection type
  interface TestModel {
    stringField: string;
    numberField?: number;
    fruitTags: string[];
  }
  const collection = db.collection<TestModel>('testCollection');
  collection.insertOne({
    stringField: 'hola',
    fruitTags: ['Strawberry'],
  });
  collection.insertMany([
    { stringField: 'hola', fruitTags: ['Apple', 'Lemon'] },
    { stringField: 'hola', numberField: 1, fruitTags: [] },
  ]);
}
