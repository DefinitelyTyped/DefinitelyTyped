import express = require('express');
import session = require('express-session');
import connectAzureTables = require('connect-azuretables');

const app = express();

/// Create Azure Tables Store Factory

const AzureTablesStoreFactory = connectAzureTables(session);

/// Use AzureTableStore

// Default settings
app.use(
    session({
        secret: 'secret',
        store: AzureTablesStoreFactory.create({}),
    }),
);

// Loggers
app.use(
    session({
        secret: 'secret',
        store: AzureTablesStoreFactory.create({
            logger: console.log,
            errorLogger: console.error,
        }),
    }),
);

// Override Azure Table keys
app.use(
    session({
        secret: 'secret',
        store: AzureTablesStoreFactory.create({
            accessKey: '',
            storageAccount: '',
            table: '',
        }),
    }),
);

// Override cron settings and timeout
app.use(
    session({
        secret: 'secret',
        store: AzureTablesStoreFactory.create({
            overrideCron: '',
            sessionTimeOut: 30,
        }),
    }),
);

// Manual methods

const store = AzureTablesStoreFactory.create({});
app.use(
    session({
        secret: 'secret',
        store,
    }),
);

store.startBackgroundCleanUp();
