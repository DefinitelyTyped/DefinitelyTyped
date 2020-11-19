import { connect, ReadPreference } from 'mongodb';
import { connectionString } from './index';

async function run() {
    const client = await connect(connectionString);
    const db = client.db('test');
    const collection = db.collection('test.find');

    const cursor = collection // $ExpectType Cursor<{ foo: number; }>
        .find<{ age: number }>()
        .addCursorFlag('', true)
        .addQueryModifier('', true)
        .batchSize(1)
        .comment('')
        .filter({ a: 1 })
        .hint({ age: 1 })
        .hint('age_1')
        .limit(1)
        .max({ age: 130 })
        .min({ age: 18 })
        .maxAwaitTimeMS(1)
        .maxScan({})
        .maxTimeMS(1)
        .project({})
        .returnKey(true)
        .setCursorOption('', {})
        .setReadPreference('primary')
        .setReadPreference(ReadPreference.SECONDARY_PREFERRED)
        .setReadPreference(new ReadPreference('primary', { hedge: { enabled: true }, maxStalenessSeconds: 20 }))
        .showRecordId(true)
        .skip(1)
        .snapshot({})
        .sort({})
        .map(result => ({ foo: result.age }))
        .stream();

    collection.find().project({});
    collection.find().project({ notExistingField: 1 });
    collection.find().sort({ text: { $meta: 'textScore' }, notExistingField: -1 });
    collection.find().sort({});
    collection.find().bufferedCount();

    interface TypedDoc {
        name: string;
        age: number;
        tag: {
            name: string;
        };
    }
    const typedCollection = db.collection<TypedDoc>('test');
    typedCollection.find({ name: 'name' }, {}).map(x => x.tag);
    typedCollection.find({ 'tag.name': 'name' }, {});
    typedCollection
        .find({ 'tag.name': 'name' }, { projection: { 'tag.name': 1, max: { $max: [] } } })
        .sort({ score: { $meta: 'textScore' } })
        .map(x => x.tag);
    typedCollection
        .find({ 'tag.name': 'name' }, { projection: { name: 1, max: { $max: [] } } })
        .toArray()
        .then(docs => {
            return docs.map(x => x.tag);
        });

    // override the collection type
    typedCollection
        .find<{ name2: string; age2: number }>({ name: '123' }, { projection: { age2: 1 } })
        .map(x => x.name2 && x.age2);
    typedCollection.find({ name: '123' }, { projection: { age: 1 } }).map(x => x.tag);

    typedCollection.find().project({ name: 1 });
    typedCollection.find().project({ notExistingField: 1 });
    typedCollection.find().project({ max: { $max: [] } });

    for await (const item of cursor) {
        item.foo; // $ExpectType number
    }
}
