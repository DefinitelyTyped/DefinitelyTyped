import { connect, FindOneOptions, MongoError, Cursor } from 'mongodb';
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
        readonlyFruitTags: ReadonlyArray<string>;
    }
    const collectionT = db.collection<TestModel>('testCollection');
    await collectionT.find({
        $and: [{ numberField: { $gt: 0 } }, { numberField: { $lt: 100 } }],
        readonlyFruitTags: { $all: ['apple', 'pear'] },
    });
    const res: Cursor<TestModel> = collectionT.find({});

    await collectionT.findOne(
        {},
        {
            projection: {},
            sort: {},
        },
    );

    await collectionT.findOne(
        {},
        {
            projection: {
                stringField: { $meta: 'textScore' },
                fruitTags: { $min: 'fruitTags' },
                max: { $max: ['$max', 0] },
            },
            sort: { stringField: -1, text: { $meta: 'textScore' }, notExistingField: -1 },
        },
    );

    // test with discriminated union type
    interface DUModelEmpty {
        type: 'empty';
    }
    interface DUModelString {
        type: 'string';
        value: string;
    }
    type DUModel = DUModelEmpty | DUModelString;
    const collectionDU = db.collection<DUModel>('testDU');
    const duValue = await collectionDU.findOne({});
    if (duValue && duValue.type === 'string') {
        const value: string = duValue.value;
    }

    // collection.findX<T>() generic tests
    interface Bag {
        cost: number;
        color: string;
    }
    const collectionBag = db.collection<Bag>('bag');
    const cursor: Cursor<Bag> = collectionBag.find({ color: 'black' });
    cursor.toArray((err, r) => {
        r[0].cost; // $ExpectType number
    });
    cursor.forEach(
        bag => {
            bag.color; // $ExpectType string
        },
        () => {},
    );
    collectionBag.findOne({ color: 'white' }).then(b => {
        b; // $ExpectType Bag | null
    });
    collectionBag
        .findOne<{ cost: number }>({ color: 'white' })
        .then(b => {
            if (b) {
                b.cost; // $ExpectType number
            }
        });
    collectionBag
        .findOne<{ cost: number }>({ color: 'red' }, { projection: { cost: 1 } })
        .then(b => {
            if (b) {
                b.color; // $ExpectError
                b.cost; // $ExpectType number
            }
        });
}

async function testFindReturnValue() {
    interface Car { make: string; }
    interface House { windows: number; }

    function printHouse(house: House | null) {
        console.log(house == null ? 'No house' : `A house with ${house.windows} windows`);
    }

    const client = await connect(connectionString);
    const db = client.db('test');
    const car = db.collection<Car>('car');

    // $ExpectError
    printHouse(await car.findOne({}));
}

async function testFindWithGenericOptions() {
    interface Car { make: string; }

    function printCar(car: Car | null) {
        console.log(car == null ? 'No car' : `A car of ${car.make} make`);
    }

    const client = await connect(connectionString);
    const db = client.db('test');
    const car = db.collection<Car>('car');
    const options: FindOneOptions<Car> = {};

    printCar(await car.findOne({}, options));
}
