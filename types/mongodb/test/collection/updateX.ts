import { connect, Decimal128, Double, Int32, Long, ObjectId, UpdateQuery } from 'mongodb';
import { connectionString } from '../index';

// collection.updateX tests
async function run() {
    const client = await connect(connectionString);
    const db = client.db('test');

    interface SubTestModel {
        _id: ObjectId;
        field1: string;
        field2?: string;
    }

    type FruitTypes = 'apple' | 'pear';

    // test with collection type
    interface TestModel {
        stringField: string;
        numberField: number;
        decimal128Field: Decimal128;
        doubleField: Double;
        int32Field: Int32;
        longField: Long;
        optionalNumberField?: number;
        dateField: Date;
        otherDateField: Date;
        oneMoreDateField: Date;
        fruitTags: string[];
        readonlyFruitTags: ReadonlyArray<string>;
        maybeFruitTags?: FruitTypes[];
        subInterfaceField: SubTestModel;
        subInterfaceArray: SubTestModel[];
    }
    const collectionTType = db.collection<TestModel>('test.update');

    function buildUpdateQuery(updateQuery: UpdateQuery<TestModel>): UpdateQuery<TestModel> {
        return updateQuery;
    }

    const justASample = buildUpdateQuery({ $currentDate: { dateField: true } });

    buildUpdateQuery({ $currentDate: { dateField: true } });
    buildUpdateQuery({ $currentDate: { otherDateField: { $type: 'date' } } });
    buildUpdateQuery({ $currentDate: { otherDateField: { $type: 'timestamp' } } });
    buildUpdateQuery({ $currentDate: { 'dot.notation': true } });
    buildUpdateQuery({ $currentDate: { 'subInterfaceArray.$': true } });
    buildUpdateQuery({ $currentDate: { 'subInterfaceArray.$[bla]': { $type: 'date' } } });
    buildUpdateQuery({ $currentDate: { 'subInterfaceArray.$[]': { $type: 'timestamp' } } });

    // buildUpdateQuery({ $currentDate: { stringField: true } }); // stringField is not a date Field

    buildUpdateQuery({ $inc: { numberField: 1 } });
    buildUpdateQuery({ $inc: { decimal128Field: Decimal128.fromString('1.23') } });
    buildUpdateQuery({ $inc: { doubleField: new Double(1.23) } });
    buildUpdateQuery({ $inc: { int32Field: new Int32(10) } });
    buildUpdateQuery({ $inc: { longField: Long.fromString('999') } });
    buildUpdateQuery({ $inc: { optionalNumberField: 1 } });
    buildUpdateQuery({ $inc: { 'dot.notation': 2 } });
    buildUpdateQuery({ $inc: { 'subInterfaceArray.$': -10 } });
    buildUpdateQuery({ $inc: { 'subInterfaceArray.$[bla]': 40 } });
    buildUpdateQuery({ $inc: { 'subInterfaceArray.$[]': 1000.2 } });

    buildUpdateQuery({ $min: { numberField: 1 } });
    buildUpdateQuery({ $min: { decimal128Field: Decimal128.fromString('1.23') } });
    buildUpdateQuery({ $min: { doubleField: new Double(1.23) } });
    buildUpdateQuery({ $min: { int32Field: new Int32(10) } });
    buildUpdateQuery({ $min: { longField: Long.fromString('999') } });
    buildUpdateQuery({ $min: { stringField: 'a' } });
    buildUpdateQuery({ $min: { 'dot.notation': 2 } });
    buildUpdateQuery({ $min: { 'subInterfaceArray.$': 'string' } });
    buildUpdateQuery({ $min: { 'subInterfaceArray.$[bla]': 40 } });
    buildUpdateQuery({ $min: { 'subInterfaceArray.$[]': 1000.2 } });

    // buildUpdateQuery({ $min: { numberField: 'a' } }); // Matches the type of the keys

    buildUpdateQuery({ $max: { numberField: 1 } });
    buildUpdateQuery({ $max: { decimal128Field: Decimal128.fromString('1.23') } });
    buildUpdateQuery({ $max: { doubleField: new Double(1.23) } });
    buildUpdateQuery({ $max: { int32Field: new Int32(10) } });
    buildUpdateQuery({ $max: { longField: Long.fromString('999') } });
    buildUpdateQuery({ $max: { stringField: 'a' } });
    buildUpdateQuery({ $max: { 'dot.notation': 2 } });
    buildUpdateQuery({ $max: { 'subInterfaceArray.$': -10 } });
    buildUpdateQuery({ $max: { 'subInterfaceArray.$[bla]': 40 } });
    buildUpdateQuery({ $max: { 'subInterfaceArray.$[]': 1000.2 } });

    // buildUpdateQuery({ $min: { numberField: 'a' } }); // Matches the type of the keys

    buildUpdateQuery({ $mul: { numberField: 1 } });
    buildUpdateQuery({ $mul: { decimal128Field: Decimal128.fromString('1.23') } });
    buildUpdateQuery({ $mul: { doubleField: new Double(1.23) } });
    buildUpdateQuery({ $mul: { int32Field: new Int32(10) } });
    buildUpdateQuery({ $mul: { longField: Long.fromString('999') } });
    buildUpdateQuery({ $mul: { optionalNumberField: 1 } });
    buildUpdateQuery({ $mul: { 'dot.notation': 2 } });
    buildUpdateQuery({ $mul: { 'subInterfaceArray.$': -10 } });
    buildUpdateQuery({ $mul: { 'subInterfaceArray.$[bla]': 40 } });
    buildUpdateQuery({ $mul: { 'subInterfaceArray.$[]': 1000.2 } });

    buildUpdateQuery({ $set: { numberField: 1 } });
    buildUpdateQuery({ $set: { decimal128Field: Decimal128.fromString('1.23') } });
    buildUpdateQuery({ $set: { doubleField: new Double(1.23) } });
    buildUpdateQuery({ $set: { int32Field: new Int32(10) } });
    buildUpdateQuery({ $set: { longField: Long.fromString('999') } });
    buildUpdateQuery({ $set: { stringField: 'a' } });
    // $ExpectError
    buildUpdateQuery({ $set: { stringField: 123 } });
    buildUpdateQuery({ $set: { 'dot.notation': 2 } });
    buildUpdateQuery({ $set: { 'subInterfaceArray.$': -10 } });
    buildUpdateQuery({ $set: { 'subInterfaceArray.$[bla]': 40 } });
    buildUpdateQuery({ $set: { 'subInterfaceArray.$[]': 1000.2 } });

    buildUpdateQuery({ $setOnInsert: { numberField: 1 } });
    buildUpdateQuery({ $setOnInsert: { decimal128Field: Decimal128.fromString('1.23') } });
    buildUpdateQuery({ $setOnInsert: { doubleField: new Double(1.23) } });
    buildUpdateQuery({ $setOnInsert: { int32Field: new Int32(10) } });
    buildUpdateQuery({ $setOnInsert: { longField: Long.fromString('999') } });
    buildUpdateQuery({ $setOnInsert: { stringField: 'a' } });
    // $ExpectError
    buildUpdateQuery({ $setOnInsert: { stringField: 123 } });
    buildUpdateQuery({ $setOnInsert: { 'dot.notation': 2 } });
    buildUpdateQuery({ $setOnInsert: { 'subInterfaceArray.$': -10 } });
    buildUpdateQuery({ $setOnInsert: { 'subInterfaceArray.$[bla]': 40 } });
    buildUpdateQuery({ $setOnInsert: { 'subInterfaceArray.$[]': 1000.2 } });

    buildUpdateQuery({ $unset: { numberField: '' } });
    buildUpdateQuery({ $unset: { decimal128Field: '' } });
    buildUpdateQuery({ $unset: { doubleField: '' } });
    buildUpdateQuery({ $unset: { int32Field: '' } });
    buildUpdateQuery({ $unset: { longField: '' } });
    buildUpdateQuery({ $unset: { dateField: '' } });
    buildUpdateQuery({ $unset: { 'dot.notation': '' } });
    buildUpdateQuery({ $unset: { 'subInterfaceArray.$': '' } });
    buildUpdateQuery({ $unset: { 'subInterfaceArray.$[bla]': '' } });
    buildUpdateQuery({ $unset: { 'subInterfaceArray.$[]': '' } });

    buildUpdateQuery({ $unset: { numberField: 1 } });
    buildUpdateQuery({ $unset: { decimal128Field: 1 } });
    buildUpdateQuery({ $unset: { doubleField: 1 } });
    buildUpdateQuery({ $unset: { int32Field: 1 } });
    buildUpdateQuery({ $unset: { longField: 1 } });
    buildUpdateQuery({ $unset: { dateField: 1 } });
    buildUpdateQuery({ $unset: { 'dot.notation': 1 } });
    buildUpdateQuery({ $unset: { 'subInterfaceArray.$': 1 } });
    buildUpdateQuery({ $unset: { 'subInterfaceArray.$[bla]': 1 } });
    buildUpdateQuery({ $unset: { 'subInterfaceArray.$[]': 1 } });

    buildUpdateQuery({ $rename: { numberField2: 'stringField' } });

    buildUpdateQuery({ $addToSet: { fruitTags: 'stringField' } });
    // $ExpectError
    buildUpdateQuery({ $addToSet: { fruitTags: 123 } });
    buildUpdateQuery({ $addToSet: { fruitTags: { $each: ['stringField'] } } });
    buildUpdateQuery({ $addToSet: { readonlyFruitTags: 'apple' } });
    buildUpdateQuery({ $addToSet: { readonlyFruitTags: { $each: ['apple'] } } });
    buildUpdateQuery({ $addToSet: { maybeFruitTags: 'apple' } });
    buildUpdateQuery({ $addToSet: { 'dot.notation': 'stringField' } });
    buildUpdateQuery({ $addToSet: { 'dot.notation': { $each: ['stringfield'] } } });
    buildUpdateQuery({
        $addToSet: {
            subInterfaceArray: { field1: 'foo' },
        },
    });
    buildUpdateQuery({
        $addToSet: {
            subInterfaceArray: {
                _id: new ObjectId(),
                field1: 'foo',
            },
        },
    });
    buildUpdateQuery({
        $addToSet: {
            subInterfaceArray: {
                $each: [{ field1: 'foo' }],
            },
        },
    });
    buildUpdateQuery({
        // $ExpectError
        $addToSet: { subInterfaceArray: { field1: 123 } },
    });

    buildUpdateQuery({ $pop: { fruitTags: 1 } });
    buildUpdateQuery({ $pop: { fruitTags: -1 } });
    buildUpdateQuery({ $pop: { 'dot.notation': 1 } });
    buildUpdateQuery({ $pop: { 'subInterfaceArray.$[]': -1 } });

    buildUpdateQuery({ $pull: { fruitTags: 'a' } });
    // $ExpectError
    buildUpdateQuery({ $pull: { fruitTags: 123 } });
    buildUpdateQuery({ $pull: { fruitTags: { $in: ['a'] } } });
    buildUpdateQuery({ $pull: { maybeFruitTags: 'apple' } });
    buildUpdateQuery({ $pull: { 'dot.notation': 1 } });
    buildUpdateQuery({ $pull: { 'subInterfaceArray.$[]': { $in: ['a'] } } });
    buildUpdateQuery({ $pull: { subInterfaceArray: { field1: 'a' } } });
    buildUpdateQuery({ $pull: { subInterfaceArray: { _id: { $in: [new ObjectId()] } } } });
    buildUpdateQuery({ $pull: { subInterfaceArray: { field1: { $in: ['a'] } } } });

    buildUpdateQuery({ $push: { fruitTags: 'a' } });
    // $ExpectError
    buildUpdateQuery({ $push: { fruitTags: 123 } });
    buildUpdateQuery({ $push: { fruitTags: { $each: ['a'] } } });
    buildUpdateQuery({ $push: { fruitTags: { $each: ['a'], $slice: 3 } } });
    buildUpdateQuery({ $push: { fruitTags: { $each: ['a'], $position: 1 } } });
    buildUpdateQuery({ $push: { fruitTags: { $each: ['a'], $sort: 1 } } });
    buildUpdateQuery({ $push: { fruitTags: { $each: ['a'], $sort: -1 } } });
    buildUpdateQuery({ $push: { fruitTags: { $each: ['stringField'] } } });
    buildUpdateQuery({ $push: { fruitTags: { $each: ['a'], $sort: { 'sub.field': -1 } } } });
    buildUpdateQuery({ $push: { maybeFruitTags: 'apple' } });
    buildUpdateQuery({
        $push: {
            subInterfaceArray: { field1: 'foo' },
        },
    });
    buildUpdateQuery({
        $push: {
            subInterfaceArray: {
                _id: new ObjectId(),
                field1: 'foo',
            },
        },
    });
    buildUpdateQuery({
        $push: {
            subInterfaceArray: {
                $each: [
                    {
                        field1: 'foo',
                        field2: 'bar',
                    },
                ],
            },
        },
    });
    buildUpdateQuery({
        // $ExpectError
        $push: { subInterfaceArray: { field1: 123 } },
    });
    // buildUpdateQuery({ $push: { 'dot.notation': 1 } });
    // buildUpdateQuery({ $push: { 'subInterfaceArray.$[]': { $in: ['a'] } } });

    collectionTType.updateOne({ stringField: 'bla' }, justASample);

    collectionTType.updateMany(
        { numberField: 12 },
        {
            $set: {
                stringField: 'Banana',
            },
        },
    );
}
