import { connect, MongoError, Cursor } from 'mongodb';
import { connectionString } from '../index';

// collection.updateX tests
async function run() {
  const client = await connect(connectionString);
  const db = client.db('test');

  // test with collection type
  interface TestModel {
    stringField: string;
    numberField?: number;
    fruitTags: string[];
  }
  const collectionT = db.collection<TestModel>('test.update');
  collectionT.updateOne(
    { stringField: 'hola' },
    {
      $addToSet: {
        fruitTags: 'Orange',
      },
      $pull: {
        fruitTags: 'Lemon',
      },
    },
  );

  collectionT.updateMany(
    { numberField: 12 },
    {
      $set: {
        stringField: 'Banana',
      },
    },
  );
}
