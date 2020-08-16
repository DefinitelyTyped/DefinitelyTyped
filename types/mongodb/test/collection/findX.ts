import { connect, MongoError, Cursor, FindOneOptions } from 'mongodb';
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

  await collectionT.findOne({}, {
    projection: {
    },
    sort: {}
  });

  await collectionT.findOne({}, {
    projection: {
      stringField: {$meta: 'textScore'},
      fruitTags: {$min: 'fruitTags'},
      max: {$max: ['$max', 0]},
    },
    sort: {stringField: -1, text: {$meta: 'textScore'}, notExistingField: -1}
  });

  // Happy path: 2nd element of sort sub-array can only be 1 or -1
  const findOptions: FindOneOptions<TestModel> =  {
    projection: {
      stringField: {$meta: 'textScore'},
      fruitTags: {$min: 'fruitTags'},
      max: {$max: ['$max', 0]},
    },
    sort: [['stringField', -1], ['numberField', 1]],
  };

  // Error path: expect error if sort sub-array not 1 or -1
  // $ExpectError
  findOptions.sort = [['stringField', -5], ['numberField', 'i am a string']];

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
    if (b) {
      b.cost; // $ExpectType number
    }
  });
}
