import * as marv from 'marv';
import marvCallbacks = require('marv/api/callback');
import marvPromises = require('marv/api/promise');
import path = require('path');

const directory = path.resolve('migrations');

const driver: marv.Driver = {
    connect: () => {},
    disconnect: () => {},
    dropMigrations: () => {},
    ensureMigrations: () => {},
    lockMigrations: () => {},
    unlockMigrations: () => {},
    getMigrations: cb => cb(null, []),
    runMigration: () => {},
};

function runMigrations() {
    marv.scan(directory, (err, migrations) => {
        if (err) throw err;
        marv.migrate(migrations, driver, err => {
            if (err) throw err;
        });
    });
}

function runCallbackMigrations() {
    marvCallbacks.scan(directory, (err, migrations) => {
        if (err) throw err;
        marvCallbacks.migrate(migrations, driver, err => {
            if (err) throw err;
        });
    });
}

async function runPromiseMigrations() {
    const migrations = await marvPromises.scan(directory);
    await marvPromises.migrate(migrations, driver);
}
