import { init, create, database, config, up, down, status, MigrationFunction } from 'migrate-mongo';
import { Db, MongoCallback, MongoClient, UpdateWriteOpResult } from 'mongodb';

const upPromisified: MigrationFunction = async (db: Db, client: MongoClient): Promise<void> => {
    await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    await db.collection('albums').updateOne({artist: 'The Doors'}, {$set: {stars: 5}});
};
const upCallback: MigrationFunction = (db: Db, client: MongoClient, callback: MongoCallback<UpdateWriteOpResult>) => {
    db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}}, callback);
};

const downPromisified: MigrationFunction = async (db: Db, client: MongoClient): Promise<void> => {
    await db.collection('albums').updateOne({artist: 'The Doors'}, {$set: {stars: 0}});
    await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
};
const downCallback: MigrationFunction = (db: Db, client: MongoClient, callback: MongoCallback<UpdateWriteOpResult>) => {
    db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}}, callback);
};

async function test() {
    await init();
    const fileName = await create('blacklist_the_beatles');
    console.log('Created:', fileName);
    const { db } = await database.connect();
    const mongoConnectionSettings = await config.read();
    const migrated = await up(db);
    migrated.forEach(fileName => console.log('Migrated:', fileName));
    const migratedDown = await down(db);
    migratedDown.forEach(fileName => console.log('Migrated Down:', fileName));
    const migrationStatus = await status(db);
    migrationStatus.forEach(({ fileName, appliedAt }) => console.log(fileName, ':', appliedAt));
    await db.close();
}
test();
