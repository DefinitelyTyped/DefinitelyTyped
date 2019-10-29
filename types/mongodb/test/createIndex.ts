import { connect } from 'mongodb';
import { connectionString } from './index';

async function run() {
  const client = await connect(connectionString);
  const db = client.db('test');
  const collection = db.collection('test.find');

  collection.createIndex({}, { partialFilterExpression: { rating: { $exists: 1 } } });
}
