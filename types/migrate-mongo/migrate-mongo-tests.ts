import { init, create, database, config, up, down, status, MigrationFunction } from 'migrate-mongo';
import { Db, Callback, MongoClient } from 'mongodb';

const upPromisified: MigrationFunction = async (db: Db, client: MongoClient): Promise<void> => {
    await db.collection('albums').updateOne({ artist: 'The Beatles' }, { $set: { blacklisted: true } });
    await db.collection('albums').updateOne({ artist: 'The Doors' }, { $set: { stars: 5 } });
};
const upCallback: MigrationFunction = (db: Db, client: MongoClient, callback: Callback) => {
    db.collection('albums').updateOne({ artist: 'The Beatles' }, { $set: { blacklisted: true } }, callback);
};

const downPromisified: MigrationFunction = async (db: Db, client: MongoClient): Promise<void> => {
    await db.collection('albums').updateOne({ artist: 'The Doors' }, { $set: { stars: 0 } });
    await db.collection('albums').updateOne({ artist: 'The Beatles' }, { $set: { blacklisted: false } });
};
const downCallback: MigrationFunction = (db: Db, client: MongoClient, callback: Callback) => {
    db.collection('albums').updateOne({ artist: 'The Beatles' }, { $set: { blacklisted: false } }, callback);
};
const customMongoConnectionSetting: Partial<config.Config> = {
    mongodb: {
        url: 'mongodb://localhost:27017',
        databaseName: 'YOURDATABASENAME',
        options: {
            connectTimeoutMS: 3600000,
            socketTimeoutMS: 3600000,
        },
    },
    migrationsDir: 'migrations',
    changelogCollectionName: 'changelog',
    migrationFileExtension: '.js',
    useFileHash: false,
};

async function test() {
    await init();
    const fileName = await create('blacklist_the_beatles');
    console.log('Created:', fileName);
    const { db, client } = await database.connect();
    const mongoConnectionSettings = await config.read();
    config.set(mongoConnectionSettings);
    config.set(customMongoConnectionSetting);
    const migrated = await up(db, client);
    migrated.forEach(fileName => console.log('Migrated:', fileName));
    const migratedDown = await down(db, client);
    migratedDown.forEach(fileName => console.log('Migrated Down:', fileName));
    const migrationStatus = await status(db);
    migrationStatus.forEach(({ fileName, fileHash, appliedAt }) =>
        console.log(fileName, fileHash !== undefined ? `(${fileHash})` : '', ':', appliedAt),
    );
    await db.close();
}
test();
