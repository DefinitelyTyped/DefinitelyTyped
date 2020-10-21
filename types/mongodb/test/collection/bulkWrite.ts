import { connect, ObjectID, UpdateQuery } from 'mongodb';
import { connectionString } from '../index';

// collection.bulkWrite tests
async function run() {
    const client = await connect(connectionString);
    const db = client.db('test');

    interface SubTestSchema {
        field1: string;
        field2: string;
    }

    type FruitTypes = 'apple' | 'pear';

    // test with collection type
    interface TestSchema {
        _id: ObjectID;
        stringField: string;
        numberField: number;
        optionalNumberField?: number;
        dateField: Date;
        fruitTags: string[];
        maybeFruitTags?: FruitTypes[];
        readonlyFruitTags: ReadonlyArray<string>;
        subInterfaceField: SubTestSchema;
        subInterfaceArray: SubTestSchema[];
    }
    const collectionType = db.collection<TestSchema>('test.update');

    const testDocument: TestSchema = {
        _id: new ObjectID(),
        stringField: 'foo',
        numberField: 123,
        dateField: new Date(),
        fruitTags: ['apple'],
        readonlyFruitTags: ['pear'],
        subInterfaceField: {
            field1: 'foo',
            field2: 'bar',
        },
        subInterfaceArray: [],
    };
    const { _id, ...testDocumentWithoutId } = testDocument;

    // insertOne

    collectionType.bulkWrite([
        {
            insertOne: {
                document: testDocument,
            },
        },
    ]);
    collectionType.bulkWrite([
        {
            insertOne: {
                document: testDocumentWithoutId,
            },
        },
    ]);
    collectionType.bulkWrite([
        // The following code is written all on one line due to
        // the difference of error lines reported by TS <3.9 and >=3.9
        // prettier-ignore
        // $ExpectError
        { insertOne: { document: { ...testDocument, stringField: 123 } } },
    ]);

    // updateOne

    collectionType.bulkWrite([
        {
            updateOne: {
                filter: { stringField: 'foo' },
                update: {
                    $set: {
                        numberField: 123,
                        'dot.notation': true,
                    },
                },
            },
        },
    ]);
    collectionType.bulkWrite([
        {
            updateOne: {
                filter: {},
                hint: 'foo-index',
                update: {
                    $set: {
                        optionalNumberField: 123,
                        fruitTags: ['apple'],
                    },
                },
                upsert: true,
            },
        },
    ]);
    collectionType.bulkWrite([
        // The following code is written all on one line due to
        // the difference of error lines reported by TS <3.9 and >=3.9
        // prettier-ignore
        // $ExpectError
        { updateOne: { filter: { stringField: 123 }, update: { $set: { numberField: 123 } } } },
    ]);
    collectionType.bulkWrite([
        // The following code is written all on one line due to
        // the difference of error lines reported by TS <3.9 and >=3.9
        // prettier-ignore
        // $ExpectError
        { updateOne: { filter: { stringField: 'foo' }, update: { $set: { numberField: 'bar' } } } },
    ]);
    collectionType.bulkWrite([
        // The following code is written all on one line due to
        // the difference of error lines reported by TS <3.9 and >=3.9
        // prettier-ignore
        // $ExpectError
        { updateOne: { filter: { stringField: 'foo' }, update: { 'dot.notation': true } } },
    ]);

    // updateMany

    collectionType.bulkWrite([
        {
            updateMany: {
                filter: { stringField: 'foo' },
                update: {
                    $set: {
                        numberField: 123,
                        'dot.notation': true,
                    },
                },
            },
        },
    ]);
    collectionType.bulkWrite([
        {
            updateMany: {
                filter: {},
                hint: 'foo-index',
                update: {
                    $set: {
                        optionalNumberField: 123,
                        fruitTags: ['apple'],
                    },
                },
                upsert: true,
            },
        },
    ]);
    collectionType.bulkWrite([
        // The following code is written all on one line due to
        // the difference of error lines reported by TS <3.9 and >=3.9
        // prettier-ignore
        // $ExpectError
        { updateMany: { filter: { stringField: 123 }, update: { $set: { numberField: 123 } } } },
    ]);
    collectionType.bulkWrite([
        // The following code is written all on one line due to
        // the difference of error lines reported by TS <3.9 and >=3.9
        // prettier-ignore
        // $ExpectError
        { updateMany: { filter: { stringField: 'foo' }, update: { $set: { numberField: 'bar' } } } },
    ]);
    collectionType.bulkWrite([
        // The following code is written all on one line due to
        // the difference of error lines reported by TS <3.9 and >=3.9
        // prettier-ignore
        // $ExpectError
        { updateMany: { filter: { stringField: 'foo' }, update: { 'dot.notation': true } } },
    ]);

    // replaceOne

    collectionType.bulkWrite([
        {
            replaceOne: {
                filter: { stringField: 'foo' },
                replacement: testDocument,
            },
        },
    ]);
    collectionType.bulkWrite([
        {
            replaceOne: {
                filter: {},
                hint: 'foo-index',
                replacement: testDocument,
                upsert: true,
            },
        },
    ]);
    collectionType.bulkWrite([
        // The following code is written all on one line due to
        // the difference of error lines reported by TS <3.9 and >=3.9
        // prettier-ignore
        // $ExpectError
        { replaceOne: { filter: { stringField: 123 }, replacement: testDocument } },
    ]);
    collectionType.bulkWrite([
        // The following code is written all on one line due to
        // the difference of error lines reported by TS <3.9 and >=3.9
        // prettier-ignore
        // $ExpectError
        { replaceOne: { filter: { stringField: 'foo' }, replacement: { ...testDocument, stringField: 123 } } },
    ]);

    // deleteOne

    collectionType.bulkWrite([
        {
            deleteOne: {
                filter: { stringField: 'foo' },
            },
        },
    ]);
    collectionType.bulkWrite([
        // The following code is written all on one line due to
        // the difference of error lines reported by TS <3.9 and >=3.9
        // prettier-ignore
        // $ExpectError
        { deleteOne: { filter: { stringField: 123 } } },
    ]);

    // deleteMany

    collectionType.bulkWrite([
        {
            deleteMany: {
                filter: { stringField: 'foo' },
            },
        },
    ]);
    collectionType.bulkWrite([
        // The following code is written all on one line due to
        // the difference of error lines reported by TS <3.9 and >=3.9
        // prettier-ignore
        // $ExpectError
        { deleteMany: { filter: { stringField: 123 } } },
    ]);

    // combined

    collectionType.bulkWrite([
        {
            insertOne: {
                document: testDocument,
            },
        },
        {
            updateMany: {
                filter: { stringField: 'foo' },
                update: {
                    $set: { numberField: 123 },
                },
            },
        },
        {
            updateMany: {
                filter: { stringField: 'foo' },
                update: {
                    $set: { numberField: 123 },
                },
            },
        },
        {
            replaceOne: {
                filter: { stringField: 'foo' },
                replacement: testDocument,
            },
        },
        {
            deleteOne: {
                filter: { stringField: 'foo' },
            },
        },
        {
            deleteMany: {
                filter: { stringField: 'foo' },
            },
        },
    ]);
}
