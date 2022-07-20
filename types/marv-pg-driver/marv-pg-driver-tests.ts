import marvCallbacks = require('marv/api/callback');
import marvPromises = require('marv/api/promise');
import driver = require('marv-pg-driver');
import pg = require('pg');

const directory = './migrations';

const connection = {
    host: 'postgres.example.com',
};

async function migrateCallbacks() {
    marvCallbacks.scan(directory, (err, migrations) => {
        if (err) throw err;
        marvCallbacks.migrate(migrations, driver({ connection }), err => {
            if (err) throw err;
        });
    });
}

async function migratePromises() {
    const migrations = await marvPromises.scan(directory);
    await marvPromises.migrate(
        migrations,
        driver({ connection, logger: console, pg, table: 'myMigrations', quiet: true }),
    );
}
