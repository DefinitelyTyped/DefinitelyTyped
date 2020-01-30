import { connect, UpdateQuery } from 'mongodb';
import { connectionString } from '../index';

// collection.updateX tests
async function run() {
    const client = await connect(connectionString);
    const db = client.db('test');

    interface SubTestModel {
        field1: string;
        field2: string;
    }

    type FruitTypes = 'apple' | 'pear';

    // test with collection type
    interface TestModel {
        stringField: string;
        numberField: number;
        dateField: Date;
        otherDateField: Date;
        oneMoreDateField: Date;
        fruitTags: string[];
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
    buildUpdateQuery({ $inc: { 'dot.notation': 2 } });
    buildUpdateQuery({ $inc: { 'subInterfaceArray.$': -10 } });
    buildUpdateQuery({ $inc: { 'subInterfaceArray.$[bla]': 40 } });
    buildUpdateQuery({ $inc: { 'subInterfaceArray.$[]': 1000.2 } });

    buildUpdateQuery({ $min: { numberField: 1 } });
    buildUpdateQuery({ $min: { stringField: 'a' } });
    buildUpdateQuery({ $min: { 'dot.notation': 2 } });
    buildUpdateQuery({ $min: { 'subInterfaceArray.$': 'string' } });
    buildUpdateQuery({ $min: { 'subInterfaceArray.$[bla]': 40 } });
    buildUpdateQuery({ $min: { 'subInterfaceArray.$[]': 1000.2 } });

    // buildUpdateQuery({ $min: { numberField: 'a' } }); // Matches the type of the keys

    buildUpdateQuery({ $max: { numberField: 1 } });
    buildUpdateQuery({ $max: { stringField: 'a' } });
    buildUpdateQuery({ $max: { 'dot.notation': 2 } });
    buildUpdateQuery({ $max: { 'subInterfaceArray.$': -10 } });
    buildUpdateQuery({ $max: { 'subInterfaceArray.$[bla]': 40 } });
    buildUpdateQuery({ $max: { 'subInterfaceArray.$[]': 1000.2 } });

    // buildUpdateQuery({ $min: { numberField: 'a' } }); // Matches the type of the keys

    buildUpdateQuery({ $mul: { numberField: 1 } });
    buildUpdateQuery({ $mul: { 'dot.notation': 2 } });
    buildUpdateQuery({ $mul: { 'subInterfaceArray.$': -10 } });
    buildUpdateQuery({ $mul: { 'subInterfaceArray.$[bla]': 40 } });
    buildUpdateQuery({ $mul: { 'subInterfaceArray.$[]': 1000.2 } });

    buildUpdateQuery({ $set: { numberField: 1 } });
    buildUpdateQuery({ $set: { stringField: 'a' } });
    buildUpdateQuery({ $set: { 'dot.notation': 2 } });
    buildUpdateQuery({ $set: { 'subInterfaceArray.$': -10 } });
    buildUpdateQuery({ $set: { 'subInterfaceArray.$[bla]': 40 } });
    buildUpdateQuery({ $set: { 'subInterfaceArray.$[]': 1000.2 } });

    buildUpdateQuery({ $setOnInsert: { numberField: 1 } });
    buildUpdateQuery({ $setOnInsert: { stringField: 'a' } });
    buildUpdateQuery({ $setOnInsert: { 'dot.notation': 2 } });
    buildUpdateQuery({ $setOnInsert: { 'subInterfaceArray.$': -10 } });
    buildUpdateQuery({ $setOnInsert: { 'subInterfaceArray.$[bla]': 40 } });
    buildUpdateQuery({ $setOnInsert: { 'subInterfaceArray.$[]': 1000.2 } });

    buildUpdateQuery({ $unset: { numberField: '' } });
    buildUpdateQuery({ $unset: { dateField: '' } });
    buildUpdateQuery({ $unset: { 'dot.notation': '' } });
    buildUpdateQuery({ $unset: { 'subInterfaceArray.$': '' } });
    buildUpdateQuery({ $unset: { 'subInterfaceArray.$[bla]': '' } });
    buildUpdateQuery({ $unset: { 'subInterfaceArray.$[]': '' } });

    buildUpdateQuery({ $rename: { numberField2: 'stringField' } });

    buildUpdateQuery({ $addToSet: { fruitTags: 'stringField' } });
    buildUpdateQuery({ $addToSet: { fruitTags: { $each: ['stringField'] } } });
    buildUpdateQuery({ $addToSet: { maybeFruitTags: 'apple' } });
    buildUpdateQuery({ $addToSet: { 'dot.notation': 'stringField' } });
    buildUpdateQuery({ $addToSet: { 'dot.notation': { $each: ['stringfield'] } } });

    buildUpdateQuery({ $pop: { fruitTags: 1 } });
    buildUpdateQuery({ $pop: { fruitTags: -1 } });
    buildUpdateQuery({ $pop: { 'dot.notation': 1 } });
    buildUpdateQuery({ $pop: { 'subInterfaceArray.$[]': -1 } });

    buildUpdateQuery({ $pull: { fruitTags: 'a' } });
    buildUpdateQuery({ $pull: { fruitTags: { $in: ['a'] } } });
    buildUpdateQuery({ $pull: { 'dot.notation': 1 } });
    buildUpdateQuery({ $pull: { 'subInterfaceArray.$[]': { $in: ['a'] } } });
    buildUpdateQuery({ $pull: { subInterfaceArray: { field1: 'a' } }});
    buildUpdateQuery({ $pull: { subInterfaceArray: { field1: { $in: ['a'] } }  }});

    buildUpdateQuery({ $push: { fruitTags: 'a' } });
    buildUpdateQuery({ $push: { fruitTags: { $each: ['a'] } } });
    buildUpdateQuery({ $push: { fruitTags: { $each: ['a'], $slice: 3 } } });
    buildUpdateQuery({ $push: { fruitTags: { $each: ['a'], $position: 1 } } });
    buildUpdateQuery({ $push: { fruitTags: { $each: ['a'], $sort: 1 } } });
    buildUpdateQuery({ $push: { fruitTags: { $each: ['a'], $sort: -1 } } });
    buildUpdateQuery({ $push: { fruitTags: { $each: ['a'], $sort: { 'sub.field': -1 } } } });
    // buildUpdateQuery({ $push: { fruitTags: { $each: ['stringField'] } } });
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
