import { connect, MongoError, Cursor } from 'mongodb';
import { connectionString } from '../index';

// collection.findX tests
async function run() {
  const client = await connect(connectionString);
  const db = client.db('test');
  const collection = db.collection('test.find');

  // Locate all the entries using find
  collection.find({}).toArray((err: MongoError, results: any[]) => {
    console.dir(results);
  });

  // test with collection type
  interface TestModel {
    stringField: string;
    numberField?: number;
    fruitTags: string[];
  }
  const collectionT = db.collection<TestModel>('testCollection');
  collectionT.find({
    $and: [{ numberField: { $gt: 0 } }, { numberField: { $lt: 100 } }],
  });
  const res: Cursor<TestModel> = collectionT.find({});

  // collection.findX<T>() generic tests
  interface Bag {
    cost: number;
    color: string;
  }
  const cursor: Cursor<Bag> = collection.find<Bag>({ color: 'black' });
  cursor.toArray((err, r) => {
    r[0].cost; // $ExpectType number
  });
  cursor.forEach(
    bag => {
      bag.color; // $ExpectType string
    },
    () => {},
  );
  collection.findOne({ color: 'white' }).then(b => {
    const _b: Bag = b; // b is larger than bag and may contain extra properties
  });
  collection.findOne<Bag>({ color: 'white' }).then(b => {
    b.cost;
  });
}
