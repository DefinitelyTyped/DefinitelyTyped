import { connect } from 'mongodb';
import { connectionString } from '../index';
import { ObjectId } from 'bson';

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
  type TestModelWithId = TestModel & { _id: ObjectId; };
  const collection = db.collection<TestModel>('testCollection');
  const result = await collection.insert({
    stringField: 'hola',
    fruitTags: ['Strawberry'],
  });
  const resultOne = await collection.insertOne({
    stringField: 'hola',
    fruitTags: ['Strawberry'],
  });
  const resultMany = await collection.insertMany([
    { stringField: 'hola', fruitTags: ['Apple', 'Lemon'] },
    { stringField: 'hola', numberField: 1, fruitTags: [] },
  ]);

  // test results type
  // should add a _id field with ObjectId type if it does not exist on collection type
  result.ops[0]._id;   // $ExpectType ObjectId
  resultMany.ops[0]._id;  // $ExpectType ObjectId
  resultOne.ops[0]._id;   // $ExpectType ObjectId
  result.insertedIds;     // $ExpectType { [key: number]: ObjectId; }
  resultMany.insertedIds; // $ExpectType { [key: number]: ObjectId; }
  resultOne.insertedId;   // $ExpectType ObjectId

  // should add a _id field with user specified type
  type TestModelWithCustomId = TestModel & { _id: number; };
  const collectionWithId = db.collection<TestModelWithCustomId>('testCollection');

  const resultOneWithId = await collectionWithId.insertOne({
    stringField: 'hola',
    fruitTags: ['Strawberry'],
  });
  const resultManyWithId = await collectionWithId.insertMany([
    { stringField: 'hola', fruitTags: ['Apple', 'Lemon'] },
    { stringField: 'hola', numberField: 1, fruitTags: [] },
  ]);

  resultOneWithId.ops[0]._id;    // $ExpectType number
  resultOneWithId.insertedId;    // $ExpectType number
  resultManyWithId.ops[0]._id;   // $ExpectType number
  resultManyWithId.insertedIds;  // $ExpectType { [key: number]: number; }
}
