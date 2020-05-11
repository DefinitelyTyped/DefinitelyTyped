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
    .returnKey({})
    .setCursorOption('', {})
    .setReadPreference('primary')
    .setReadPreference(ReadPreference.SECONDARY_PREFERRED)
    .showRecordId({})
    .skip(1)
    .snapshot({})
    .sort({})
    .map(result => ({ foo: result.age }))
    .stream();

  for await (const item of cursor) {
    item.foo; // $ExpectType number
  }
}
