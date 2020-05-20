// Test file for db-migrate-pg Definition file

import * as DbMigratePg from "db-migrate-pg";

// Throw together a dummy driver
let db = {} as DbMigratePg.PgDriver;

let callback = (err: any, response: any) => {
  // Do nothing.
};

/// createTable(tableName, columnSpec, callback)
db.createTable('pets', {
  id: { type: 'int', primaryKey: true, autoIncrement: true },
  name: 'string'
}, callback);

db.createTable('pets', {
  columns: {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: 'string'
  },
  ifNotExists: true
}, callback);

db.createTable('product_variant', 
{
  id: {
    type: 'int',
    unsigned: true,
    notNull: true,
    primaryKey: true,
    autoIncrement: true,
    length: 10
  },
  product_id: {
    type: 'int',
    unsigned: true,
    length: 10,
    notNull: true,
    foreignKey: {
      name: 'product_variant_product_id_fk',
      table: 'product',
      rules: {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      },
      mapping: 'id'
    }
  }
}, callback);

db.createTable('product_variant', 
{
  id: {
    type: 'int',
    unsigned: true,
    notNull: true,
    primaryKey: true,
    autoIncrement: true,
    length: 10
  },
  product_id: {
    type: 'int',
    unsigned: true,
    length: 10,
    notNull: true,
    foreignKey: {
      name: 'product_variant_product_id_fk',
      table: 'product',
      rules: {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      },
      mapping: {
        product_id: 'id'
      }
    }
  }
}, callback);

/// dropTable(tableName, [options,] callback)
db.dropTable('pets', callback);

db.dropTable('pets', { ifExists: true }, callback);

/// renameTable(tableName, newTableName, callback)
db.renameTable('pets', 'pets_OLD', callback);

/// addColumn(tableName, columnName, columnSpec, callback)
db.addColumn('pets', 'eyeColor', {
  type: 'string',
  length: 25,
  notNull: true,
}, callback);

db.addColumn('pets', 'id', {
  type: 'int',
  primaryKey: true,
  autoIncrement: true,
  notNull: true,
  unique: true
}, callback);

/// renameColumn(tableName, oldColumnName, newColumnName, callback)
db.renameColumn('pets', 'id', 'pet_id', callback);

/// changeColumn(tableName, columnName, columnSpec, callback)
db.changeColumn('pets', 'eye_color', {
  type: 'int',
  unsigned: true,
  notNull: true,
  foreignKey: {
    name: 'pets_eye_color_id_fk',
    table: 'eye_color',
    rules: {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT'
    },
    mapping: {
      eye_color: 'id'
    }
  }
}, callback);

/// addIndex(tableName, indexName, columns, [unique,] callback)
db.addIndex('pets', 'pets_eye_color_idx', ['eye_color'], callback);
db.addIndex('pets', 'pets_registration_code_idx', ['registration_code'], true, callback);

/// addForeignKey(tableName, referencedTableName, keyName, fieldMapping, rules, callback)
db.addForeignKey('module_user', 'modules', 'module_user_module_id_fk',
{
  'module_id': 'id'
},
{
  onDelete: 'CASCADE',
  onUpdate: 'RESTRICT'
}, callback);

/// removeForeignKey(tableName, keyName, options, callback)
db.removeForeignKey('module_user', 'module_uer_module_id_foreign', callback);
db.removeForeignKey('module_user', 'module_user_module_id_foreign', {
  dropIndex: true,
}, callback);

/// insert(tableName, [columnNameArray,] valueArray, callback)
db.insert('module_user', ['first_name', 'last_name'], ['Test', 'Testerson'], callback);
db.insert('module_user', ['Test', 'Testerson'], callback);

/// removeIndex([tableName,] indexName, callback)
db.removeIndex('pets', 'pets_eye_color_idx', callback);
db.removeIndex('pets_eye_color_idx', callback);

/// runSql(sql, [params,] callback)
db.runSql('INSERT INTO `module_user` (`?`,`?`) VALUES (\'?\',\'?\')', [
  'first_name', 'last_name',
  'Test', 'Testerson'
], callback);
db.runSql('DROP TABLE `pets`', callback);

/// all(sql, [params,] callback)
db.all('SELECT * FROM `module_user` WHERE `?` = \'?\'', ['first_name', 'Test'], callback);
db.all('SELECT * FROM `module_user`', callback);

/// =========
///   Async
/// =========

let onResolve = (result: any) => {};

/// createTableAsync(tableName, columnSpec)
db.createTableAsync('pets', {
  id: { type: 'int', primaryKey: true, autoIncrement: true },
  name: 'string'
}).then(onResolve);

db.createTableAsync('pets', {
  columns: {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: 'string'
  },
  ifNotExists: true
}).then(onResolve);

db.createTableAsync('product_variant', 
{
  id: {
    type: 'int',
    unsigned: true,
    notNull: true,
    primaryKey: true,
    autoIncrement: true,
    length: 10
  },
  product_id: {
    type: 'int',
    unsigned: true,
    length: 10,
    notNull: true,
    foreignKey: {
      name: 'product_variant_product_id_fk',
      table: 'product',
      rules: {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      },
      mapping: 'id'
    }
  }
}).then(onResolve);

db.createTableAsync('product_variant', 
{
  id: {
    type: 'int',
    unsigned: true,
    notNull: true,
    primaryKey: true,
    autoIncrement: true,
    length: 10
  },
  product_id: {
    type: 'int',
    unsigned: true,
    length: 10,
    notNull: true,
    foreignKey: {
      name: 'product_variant_product_id_fk',
      table: 'product',
      rules: {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      },
      mapping: {
        product_id: 'id'
      }
    }
  }
}).then(onResolve);

/// dropTableAsync(tableName, [options])
db.dropTableAsync('pets').then(onResolve);
db.dropTableAsync('pets', { ifExists: true }).then(onResolve);

/// renameTableAsync(tableName, newTableName)
db.renameTableAsync('pets', 'pets_OLD').then(onResolve);

/// addColumnAsync(tableName, columnName, columnSpec)
db.addColumnAsync('pets', 'eyeColor', {
  type: 'string',
  length: 25,
  notNull: true,
}).then(onResolve);

db.addColumnAsync('pets', 'id', {
  type: 'int',
  primaryKey: true,
  autoIncrement: true,
  notNull: true,
  unique: true
}).then(onResolve);

/// renameColumnAsync(tableName, oldColumnName, newColumnName)
db.renameColumnAsync('pets', 'id', 'pet_id').then(onResolve);

/// changeColumnAsync(tableName, columnName, columnSpec)
db.changeColumnAsync('pets', 'eye_color', {
  type: 'int',
  unsigned: true,
  notNull: true,
  foreignKey: {
    name: 'pets_eye_color_id_fk',
    table: 'eye_color',
    rules: {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT'
    },
    mapping: {
      eye_color: 'id'
    }
  }
}).then(onResolve);

/// addIndexAsync(tableName, indexName, columns, [unique])
db.addIndexAsync('pets', 'pets_eye_color_idx', ['eye_color']).then(onResolve);
db.addIndexAsync('pets', 'pets_registration_code_idx', ['registration_code'], true).then(onResolve);

/// addForeignKeyAsync(tableName, referencedTableName, keyName, fieldMapping, rules)
db.addForeignKeyAsync('module_user', 'modules', 'module_user_module_id_fk',
{
  'module_id': 'id'
},
{
  onDelete: 'CASCADE',
  onUpdate: 'RESTRICT'
}).then(onResolve);

/// removeForeignKeyAsync(tableName, keyName, options)
db.removeForeignKeyAsync('module_user', 'module_uer_module_id_foreign').then(onResolve);
db.removeForeignKeyAsync('module_user', 'module_user_module_id_foreign', {
  dropIndex: true,
}).then(onResolve);

/// insertAsync(tableName, [columnNameArray,] valueArray)
db.insertAsync('module_user', ['first_name', 'last_name'], ['Test', 'Testerson']).then(onResolve);
db.insertAsync('module_user', ['Test', 'Testerson']).then(onResolve);

/// removeIndexAsync([tableName,] indexName)
db.removeIndexAsync('pets', 'pets_eye_color_idx').then(onResolve);
db.removeIndexAsync('pets_eye_color_idx').then(onResolve);

/// runSqlAsync(sql, [params])
db.runSqlAsync('INSERT INTO `module_user` (`?`,`?`) VALUES (\'?\',\'?\')', [
  'first_name', 'last_name',
  'Test', 'Testerson'
]).then(onResolve);
db.runSqlAsync('DROP TABLE `pets`').then(onResolve);

/// allAsync(sql, [params])
db.allAsync('SELECT * FROM `module_user` WHERE `?` = \'?\'', ['first_name', 'Test']).then(onResolve);
db.allAsync('SELECT * FROM `module_user`').then(onResolve);

/// ====================
/// PG-specific tests
/// ====================

/// createColumnConstraint(spec, options, tableName, columnName) (INTERNAL USE ONLY)
let constraint: DbMigratePg.ColumnConstraint;

constraint = db.createColumnConstraint({
  type: 'int',
  length: 10,
  unsigned: true,
  primaryKey: false,
  autoIncrement: false,
  notNull: true,
  unique: false,
  defaultValue: 0,
  foreignKey: {
    name: 'pets_eye_color_id_fk',
    table: 'eye_color',
    rules: {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT'
    },
    mapping: {
      'eye_color': 'id'
    }
  }
}, {
  emitPrimaryKey: false
}, 'pets', 'eye_color');

// Print the SQL constraints
console.log(constraint.constraints);

// Invoke the foreign key builder
constraint.foreignKey(callback);

/// Public Callback Methods:

/// createDatabase(dbName, [options,] callback)
db.createDatabase('petstore', callback);
db.createDatabase('petstore', {}, callback);

/// dropDatabase(dbName, [options,] callback)
db.dropDatabase('petstore', callback);
db.dropDatabase('petstore', { ifExists: true }, callback);

/// createSequence(sqName, [options,] callback)
db.createSequence('pets_id_sq', callback);
db.createSequence('pets_id_sq', { temp: true }, callback);

/// switchDatabase(options, callback)
db.switchDatabase('petstore', callback);
db.switchDatabase({ database: 'petstore' }, callback);

/// dropSequence(sqName, [options,] callback)
db.dropSequence('pets_id_sq', callback);
db.dropSequence('pets_id_sq', {
  ifExists: true,
  cascade: true,
  restrict: true,
}, callback);

/// Public Promisified Methods:

/// createDatabaseAsync(dbName, [options])
db.createDatabaseAsync('petstore').then(onResolve);
db.createDatabaseAsync('petstore', {}).then(onResolve);

/// dropDatabaseAsync(dbName, [options])
db.dropDatabaseAsync('petstore').then(onResolve);
db.dropDatabaseAsync('petstore', { ifExists: true }).then(onResolve);

/// createSequenceAsync(sqName, [options])
db.createSequenceAsync('pets_id_sq').then(onResolve);
db.createSequenceAsync('pets_id_sq', { temp: true }).then(onResolve);

/// switchDatabaseAsync(options)
db.switchDatabaseAsync('petstore').then(onResolve);
db.switchDatabaseAsync({ database: 'petstore' }).then(onResolve);

/// dropSequenceAsync(sqName, [options])
db.dropSequenceAsync('pets_id_sq').then(onResolve);
db.dropSequenceAsync('pets_id_sq', {
  ifExists: true,
  cascade: true,
  restrict: true,
}).then(onResolve);
