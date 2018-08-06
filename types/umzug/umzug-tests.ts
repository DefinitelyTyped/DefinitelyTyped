import Umzug = require('umzug');
import Sequelize = require('sequelize');
import MongoDB = require('mongodb');

let someVar: Umzug.Umzug;
const umzug = new Umzug({});
someVar = umzug;

umzug.up().then((migrations: Umzug.Migration[]) => null);

umzug.execute({
  migrations: ['some-id', 'some-other-id'],
  method: 'up'
}).then((migrations: Umzug.Migration[]) => null);

umzug.pending().then((migrations: Umzug.Migration[]) => null);

umzug.executed().then((migrations: Umzug.Migration[]) => null);

umzug.up().then((migrations: Umzug.Migration[]) => null);

umzug.up({ to: '20141101203500-task' }).then((migrations: Umzug.Migration[]) => null);

umzug.up({ migrations: ['20141101203500-task', '20141101203501-task-2'] }).then((migrations: Umzug.Migration[]) => null);

umzug.up('20141101203500-task').then((migrations: Umzug.Migration[]) => null); // Runs just the passed migration
umzug.up(['20141101203500-task', '20141101203501-task-2']).then((migrations: Umzug.Migration[]) => null);

umzug.down().then((migrations: Umzug.Migration[]) => null);

umzug.down({ to: '20141031080000-task' }).then((migrations: Umzug.Migration[]) => null);

umzug.down({ migrations: ['20141101203500-task', '20141101203501-task-2'] }).then((migrations: Umzug.Migration[]) => null);

umzug.down('20141101203500-task').then((migrations: Umzug.Migration[]) => null);
umzug.down(['20141101203500-task', '20141101203501-task-2']).then((migrations: Umzug.Migration[]) => null);

umzug.down({ to: 0 }).then((migrations: Umzug.Migration[]) => null);

umzug.on('migrating', (name: string, migration: Umzug.Migration) => null);
umzug.on('migrated', (name: string, migration: Umzug.Migration) => null);
umzug.on('reverting', (name: string, migration: Umzug.Migration) => null);
umzug.on('reverted', (name: string, migration: Umzug.Migration) => null);


new Umzug({
    // The storage.
    // Possible values: 'json', 'sequelize', 'mongodb' an object
    storage: 'json',

    // The options for the storage.
    // Check the available storages for further details.
    storageOptions: {},

    // The logging function.
    // A function that gets executed every time migrations start and have ended.
    logging: false,

    // The name of the positive method in migrations.
    upName: 'up',

    // The name of the negative method in migrations.
    downName: 'down',

    migrations: {
        // The params that gets passed to the migrations.
        // Might be an array or a synchronous function which returns an array.
        params: [],

        // The path to the migrations directory.
        path: 'migrations',

        // The pattern that determines whether or not a file is a migration.
        pattern: /^\d+[\w-]+\.js$/,

        // A function that receives and returns the to be executed function.
        // This can be used to modify the function.
        wrap: <T> (fun: T) => fun,
    },
});

new Umzug({
    // The storage.
    // Possible values: 'json', 'sequelize', 'mongodb' an object
    storage: 'json',
    storageOptions: {
        path: '/db/sequelize-meta.json',
    },
});

const sequelize = new Sequelize('');

new Umzug({
    // The storage.
    // Possible values: 'json', 'sequelize', an object
    storage: 'sequelize',
    storageOptions: {
        // The configured instance of Sequelize.
        // Optional if `model` is passed.
        sequelize: sequelize,

        // The to be used Sequelize model.
        // Must have column name matching `columnName` option
        // Optional of `sequelize` is passed.
        model: sequelize.define<any, any>('model', {}),

        // The name of the to be used model.
        // Defaults to 'SequelizeMeta'
        modelName: 'Schema',

        // The name of table to create if `model` option is not supplied
        // Defaults to `modelName`
        tableName: 'Schema',

        // The name of table column holding migration name.
        // Defaults to 'name'.
        columnName: 'migration',

        // The type of the column holding migration name.
        // Defaults to `Sequelize.STRING`
        columnType: Sequelize.STRING(100),
    },

});

const mongodb = new MongoDB.Db('database', new MongoDB.Server('host', 21017));

new Umzug({
    // The storage.
    // Possible values: 'json', 'sequelize', 'mongodb' an object
    storage: 'mongodb',
    storageOptions: {
        /**
         * The MongoDB database connection instance.
         */
        connection: mongodb,

        /**
         * The to be used Mongo collection cursor.
         * Defaults to collection created from collectionName attribute.
         */
        collection: mongodb.collection,

        /**
         * The name of the collection used by the connection.
         * Defaults to 'migrations'
         */
        collectionName: 'migrations'
    },

});
