import MongodbMemoryServer from 'mongodb-memory-server';

// Simple server start example from https://www.npmjs.com/package/mongodb-memory-server
async function simpleServerStart() {
    const mongod = new MongodbMemoryServer();

    const uri = await mongod.getConnectionString();
    const port = await mongod.getPort();
    const dbPath = await mongod.getDbPath();
    const dbName = await mongod.getDbName();

    // you may stop mongod manually
    mongod.stop();
    // or it will be stopped automatically when you exit from script
}
