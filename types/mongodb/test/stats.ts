import { connect, MongoError, CollStats } from 'mongodb';
import { connectionString } from './index';

async function run() {
    const client = await connect(connectionString);
    const db = client.db('test');
    const collection = db.collection('test.find');

    collection.stats((err: MongoError, stats: CollStats) => {});

    const stats = await collection.stats();
    if (stats.wiredTiger) {
        stats.wiredTiger.cache['bytes currently in the cache']; // $ExpectType number
    }
}
