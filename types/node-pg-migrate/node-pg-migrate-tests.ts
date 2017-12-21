import { MigrationBuilder } from 'node-pg-migrate';

const pgm = {} as MigrationBuilder;

// Minimal examples
pgm.addColumn('table', {
    column1: {
        type: 'int4',
    },
});
pgm.addExtension('extension');
pgm.addExtension(['extension1', 'extension2']);
pgm.createExtension('extension');
pgm.createExtension(['extension1', 'extension2']);
pgm.dropExtension('extension');
pgm.dropExtension(['extension1', 'extension2']);

pgm.createTable('table', { column1: { type: 'int4' } });
pgm.dropTable('table');
pgm.renameTable('table', 'tablenew');

pgm.addColumn('table', { column1: { type: 'int4' } });
pgm.addColumns('table', { column1: { type: 'int4' } });
pgm.dropColumn('table', ['column1', 'column2']);
pgm.dropColumns('table', ['column1', 'column2']);
pgm.renameColumn('table', 'old_column_name', 'new_column_name');
pgm.alterColumn('table', 'column1', {});

pgm.addConstraint('table', 'table_constraint', 'column1 is not null');
pgm.createConstraint('table', 'table_constraint', 'column1 is not null');
pgm.dropConstraint('table', 'table_constraint');

pgm.addType('composite_type', ['enum1', 'enum2']);
pgm.createType('composite_type', { field1: 'int', field2: 'int' });
pgm.dropType('composite_type');

pgm.createIndex('table', 'column1');
pgm.createIndex('table', ['column1', 'column2']);
pgm.dropIndex('table', 'column1');
pgm.dropIndex('table', ['column1', 'column2']);
pgm.addIndex('table', 'column1');
pgm.addIndex('table', ['column1', 'column2']);

pgm.sql(`select 1;`);
pgm.sql(`select 1;`, { one: '1' });
pgm.func('now()');

// Elaborate example
pgm.addColumn({ schema: 'schema', name: 'table' }, {
    column1: {
        type: 'int4',
        unique: true,
        primaryKey: true,
        notNull: true,
        check: '',
        references: '',
        onDelete: '',
        onUpdate: '',
    }
});

pgm.noTransaction();
