import marvDefault, { Driver } from 'marv';
import marvCallbacks = require('marv/api/callback');
import marvPromises = require('marv/api/promise');
import path = require('path');

const directory = path.resolve('migrations');

const driver: Driver = {
    connect: () => {},
    disconnect: () => {},
    dropMigrations: () => {},
    ensureMigrations: () => {},
    lockMigrations: () => {},
    unlockMigrations: () => {},
    getMigrations: cb => cb(null, []),
    runMigration: () => {},
};

function runCallbackMigrations() {
    marvCallbacks.scan(directory, (err, migrations) => {
        if (err) throw err;
        marvCallbacks.migrate(migrations, driver, err => {
            if (err) throw err;
        });
    });
}

function runDefaultExportCallbackMigrations() {
    marvDefault.scan(directory, (err, migrations) => {
        if (err) throw err;
        marvDefault.migrate(migrations, driver, err => {
            if (err) throw err;
        });
    });
}

async function runPromiseMigrations() {
    const migrations = await marvPromises.scan(directory);
    await marvPromises.migrate(migrations, driver);
}
