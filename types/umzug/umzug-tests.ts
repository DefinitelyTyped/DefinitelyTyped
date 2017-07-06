import * as Umzug from "umzug";
import * as Sequelize from "sequelize";

var someVar:Umzug.Umzug;
var umzug = new Umzug({});
someVar = umzug;

umzug.up().then(function (result) {
  // do something with the result
});

umzug.execute({
  migrations: ['some-id', 'some-other-id'],
  method: 'up'
}).then(function (migrations) {
  // "migrations" will be an Array of all executed/reverted migrations.
});

umzug.pending().then(function (migrations) {
  // "migrations" will be an Array with the names of
  // pending migrations.
});

umzug.executed().then(function (migrations) {
  // "migrations" will be an Array of already executed migrations.
});

umzug.up().then(function (migrations) {
  // "migrations" will be an Array with the names of the
  // executed migrations.
});

umzug.up({ to: '20141101203500-task' }).then(function (migrations) {});

umzug.up({ migrations: ['20141101203500-task', '20141101203501-task-2'] });

umzug.up('20141101203500-task'); // Runs just the passed migration
umzug.up(['20141101203500-task', '20141101203501-task-2']);

umzug.down().then(function (migration) {
  // "migration" will the name of the reverted migration.
});

umzug.down({ to: '20141031080000-task' }).then(function (migrations) {
  // "migrations" will be an Array with the names of all reverted migrations.
});

umzug.down({ migrations: ['20141101203500-task', '20141101203501-task-2'] });

umzug.down('20141101203500-task'); // Runs just the passed migration
umzug.down(['20141101203500-task', '20141101203501-task-2']);

var AnotherUmzug = new Umzug({
  // The storage.
  // Possible values: 'json', 'sequelize', an object
  storage: 'json',

  // The options for the storage.
  // Check the available storages for further details.
  storageOptions: {},

  // The logging function.
  // A function that gets executed everytime migrations start and have ended.
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
    wrap: <T>(fun: T) => fun,
  }
});

var AnotherUmzug = new Umzug({
  // The storage.
  // Possible values: 'json', 'sequelize', an object
  storage: 'json',
  storageOptions: {
      path: '/db/sequelize-meta.json'
  }
});

var sequelize = new Sequelize('');

var AnotherUmzug = new Umzug({
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
    model: sequelize.define<any, any>( 'model', {} ),

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
    columnType: Sequelize.STRING(100)
  }

});
