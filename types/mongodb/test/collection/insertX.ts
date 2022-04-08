import { connect } from 'mongodb';
import { connectionString } from '../index';
import { ObjectId } from 'bson';

// test collection.insertX functions
async function run() {
    const client = await connect(connectionString);
    const db = client.db('test');

    const anyCollection = db.collection('test-any-type');

    // should accept any _id type when it is not provided in Schema

    /**
     * test no collection type ("any")
     */
    // test insertOne results
    anyCollection.insertOne({ a: 2 }, (err, result) => {
        result.insertedCount; // $ExpectType number
        result.insertedId; // $ExpectType any
        result.ops[0].a; // $ExpectType any
        result.result.n; // $ExpectType number
        result.result.ok; // $ExpectType number
    });
    // test insertMany results
    anyCollection.insertMany([{ a: 2 }], (err, result) => {
        result.insertedCount; // $ExpectType number
        result.insertedIds; // $ExpectType { [key: number]: any; }
        result.ops[0].a; // $ExpectType any
        result.result.n; // $ExpectType number
        result.result.ok; // $ExpectType number
    });
    // should accept _id with ObjectId type
    const insertManyWithIdResult = await anyCollection.insertMany([{ _id: new ObjectId(), a: 2 }]);
    insertManyWithIdResult.insertedCount; // $ExpectType number
    insertManyWithIdResult.insertedIds; // $ExpectType { [key: number]: any; }
    insertManyWithIdResult.ops[0].a; // $ExpectType any
    insertManyWithIdResult.result.n; // $ExpectType number
    insertManyWithIdResult.result.ok; // $ExpectType number
    // should accept any _id type when it is not provided in Schema
    await anyCollection.insertMany([{ _id: 12, a: 2 }]);

    /**
     * test with collection type
     */
    interface TestModel {
        stringField: string;
        numberField?: number;
        fruitTags: string[];
    }
    type TestModelWithId = TestModel & { _id: ObjectId };
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

    // $ExpectError
    await collection.insert({ stringField: 3, fruitTags: ['Strawberry'] });
    // $ExpectError
    await collection.insert({ fruitTags: ['Strawberry'] });

    // test results type
    // should add a _id field with ObjectId type if it does not exist on collection type
    result.ops[0]._id; // $ExpectType ObjectId
    resultMany.ops[0]._id; // $ExpectType ObjectId
    resultOne.ops[0]._id; // $ExpectType ObjectId
    result.insertedIds; // $ExpectType { [key: number]: ObjectId; }
    resultMany.insertedIds; // $ExpectType { [key: number]: ObjectId; }
    resultOne.insertedId; // $ExpectType ObjectId

    /**
     * test custom _id type
     */
    interface TestModelWithCustomId {
        _id: number;
        stringField: string;
        numberField?: number;
        fruitTags: string[];
    }
    const collectionWithId = db.collection<TestModelWithCustomId>('testCollection');

    const resultOneWithId = await collectionWithId.insertOne({
        _id: 1,
        stringField: 'hola',
        fruitTags: ['Strawberry'],
    });
    const resultManyWithId = await collectionWithId.insertMany([
        { _id: 2, stringField: 'hola', fruitTags: ['Apple', 'Lemon'] },
        { _id: 2, stringField: 'hola', numberField: 1, fruitTags: [] },
    ]);

    // should demand _id if it is not ObjectId
    // $ExpectError
    await collectionWithId.insertOne({ stringField: 'hola', fruitTags: ['Strawberry'] });
    await collectionWithId.insertMany([
        // $ExpectError
        { stringField: 'hola', fruitTags: ['Apple', 'Lemon'] },
        { _id: 2, stringField: 'hola', numberField: 1, fruitTags: [] },
    ]);

    // should not accept wrong _id type
    await collectionWithId.insertMany([
        // $ExpectError
        { _id: new ObjectId(), stringField: 'hola', fruitTags: ['Apple', 'Lemon'] },
        { _id: 2, stringField: 'hola', numberField: 1, fruitTags: [] },
    ]);

    resultOneWithId.ops[0]._id; // $ExpectType number
    resultOneWithId.insertedId; // $ExpectType number
    resultManyWithId.ops[0]._id; // $ExpectType number
    resultManyWithId.insertedIds; // $ExpectType { [key: number]: number; }

    /**
     * test custom _id type (ObjectId)
     */
    interface TestModelWithCustomObjectId {
        _id: ObjectId;
        stringField: string;
        numberField?: number;
        fruitTags: string[];
    }
    const collectionWithObjectId = db.collection<TestModelWithCustomObjectId>('testCollection');

    // should accept ObjectId
    await collectionWithObjectId.insertOne({
        _id: new ObjectId(),
        stringField: 'hola',
        numberField: 23,
        fruitTags: ['hi'],
    });
    // should not demand _id if it is ObjectId
    await collectionWithObjectId.insertOne({ stringField: 'hola', numberField: 23, fruitTags: ['hi'] });

    /**
     * test indexed types
     */
    interface IndexTypeTestModel {
        stringField: string;
        numberField?: number;
        [key: string]: any;
    }
    const indexTypeCollection1 = db.collection<IndexTypeTestModel>('testCollection');

    const indexTypeResult1 = await indexTypeCollection1.insertOne({
        stringField: 'hola',
        numberField: 23,
        randomField: [34, 54, 32],
        randomFiel2: 32,
    });
    const indexTypeResultMany1 = await indexTypeCollection1.insertMany([
        { stringField: 'hola', numberField: 0 },
        { _id: new ObjectId(), stringField: 'hola', randomField: [34, 54, 32] },
    ]);

    // should not accept wrong _id type
    // $ExpectError
    await indexTypeCollection1.insertMany([{ _id: 12, stringField: 'hola', numberField: 0 }]);
    // should not accept wrong types for fields
    // $ExpectError
    await indexTypeCollection1.insert({ stringField: 3, randomField: [34, 54, 32] });
    // should demand missing fields
    // $ExpectError
    await indexTypeCollection1.insertMany([{ randomField: [34, 54, 32] }]);

    indexTypeResult1.ops[0]._id; // $ExpectType ObjectId
    indexTypeResult1.insertedId; // $ExpectType ObjectId
    // should not remove types of existing fields
    indexTypeResult1.ops[0].stringField; // $ExpectType string
    indexTypeResult1.ops[0].numberField; // $ExpectType number | undefined
    // should assign "any" type to any other field
    indexTypeResult1.ops[0].randomField; // $ExpectType any
    // should do the same for insertMany
    indexTypeResultMany1.ops[0]._id; // $ExpectType ObjectId
    indexTypeResultMany1.insertedIds; // $ExpectType { [key: number]: ObjectId; }
    indexTypeResultMany1.ops[0].numberField; // $ExpectType number | undefined
    indexTypeResultMany1.ops[0].stringField; // $ExpectType string
    indexTypeResultMany1.ops[0].randomField; // $ExpectType any

    /**
     * test indexed types with custom _id (not ObjectId)
     */
    interface IndexTypeTestModelWithId {
        _id: number;
        stringField: string;
        numberField?: number;
        [key: string]: any;
    }
    const indexTypeCollection2 = db.collection<IndexTypeTestModelWithId>('testCollection');

    const indexTypeResult2 = await indexTypeCollection2.insertOne({
        _id: 1,
        stringField: 'hola',
        numberField: 23,
        randomField: [34, 54, 32],
        randomFiel2: 32,
    });
    const indexTypeResultMany2 = await indexTypeCollection2.insertMany([
        { _id: 1, stringField: 'hola', numberField: 0 },
        { _id: 2, stringField: 'hola', randomField: [34, 54, 32] },
    ]);

    // should only accept _id type provided in Schema
    await indexTypeCollection2.insertOne({
        // $ExpectError
        _id: '12',
        stringField: 'hola',
        numberField: 23,
        randomField: [34, 54, 32],
        randomFiel2: 32,
    });
    await indexTypeCollection2.insertMany([
        // $ExpectError
        { _id: '1', stringField: 'hola', numberField: 0 },
        { _id: 2, stringField: 'hola', randomField: [34, 54, 32] },
    ]);

    // should demand _id if it is defined and is not ObjectId
    // $ExpectError
    await indexTypeCollection2.insertOne({
        stringField: 'hola',
        numberField: 23,
        randomField: [34, 54, 32],
        randomFiel2: 32,
    });
    await indexTypeCollection2.insertMany([
        // $ExpectError
        { stringField: 'hola', numberField: 0 },
        { _id: 12, stringField: 'hola', randomField: [34, 54, 32] },
    ]);

    indexTypeResult2.ops[0]._id; // $ExpectType number
    indexTypeResult2.insertedId; // $ExpectType number
    indexTypeResultMany2.ops[0]._id; // $ExpectType number
    indexTypeResultMany2.insertedIds; // $ExpectType { [key: number]: number; }

    /**
     * test indexed types with custom _id (ObjectId)
     */
    interface IndexTypeTestModelWithObjectId {
        _id: ObjectId;
        stringField: string;
        numberField?: number;
        [key: string]: any;
    }
    const indexTypeCollection3 = db.collection<IndexTypeTestModelWithObjectId>('testCollection');

    // TODO: should not demand _id if it is ObjectId
    // await indexTypeCollection3.insertOne({ stringField: 'hola', numberField: 23, randomField: [34, 54, 32], randomFiel2: 32 });
}
