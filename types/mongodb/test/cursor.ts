import { connect, Cursor, ReadPreference } from 'mongodb';
import { connectionString } from './index';

async function run() {
  const client = await connect(connectionString);
  const db = client.db('test');
  const collection = db.collection('test.find');

  let cursor: Cursor;
  cursor = collection.find();
  cursor = cursor.addCursorFlag('', true);
  cursor = cursor.addQueryModifier('', true);
  cursor = cursor.batchSize(1);
  cursor = cursor.comment('');
  cursor = cursor.filter({ a: 1 });
  cursor = cursor.hint({ age: 1 });
  cursor = cursor.hint('age_1');
  cursor = cursor.limit(1);
  cursor = cursor.map(result => {});
  cursor = cursor.max({ age: 130 });
  cursor = cursor.min({ age: 18 });
  cursor = cursor.maxAwaitTimeMS(1);
  cursor = cursor.maxScan({});
  cursor = cursor.maxTimeMS(1);
  cursor = cursor.project({});
  cursor = cursor.returnKey({});
  cursor = cursor.setCursorOption('', {});
  cursor = cursor.setReadPreference('primary');
  cursor = cursor.setReadPreference(ReadPreference.SECONDARY_PREFERRED);
  cursor = cursor.showRecordId({});
  cursor = cursor.skip(1);
  cursor = cursor.snapshot({});
  cursor = cursor.sort({});
  cursor = cursor.stream();
}
