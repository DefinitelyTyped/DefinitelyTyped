import lf = require("lovefield");
function main(): void {
  var schemaBuilder: lf.schema.Builder = lf.schema.create('todo', 1);

  schemaBuilder.createTable('Item').
      addColumn('id', lf.Type.INTEGER).
      addColumn('description', lf.Type.STRING).
      addColumn('deadline', lf.Type.DATE_TIME).
      addColumn('done', lf.Type.BOOLEAN).
      addPrimaryKey(['id'], false).
      addIndex('idxDeadline', ['deadline'], false, lf.Order.DESC).
      addNullable(['deadline']).
      addUnique('uq_description', ['description']);

  var todoDb: lf.Database = null;
  var itemSchema: lf.schema.Table = null;
  var connectOptions: lf.schema.ConnectOptions = {
    storeType: lf.schema.DataStoreType.MEMORY
  }
  schemaBuilder.connect(connectOptions).then(
      function(db) {
        todoDb = db;
        itemSchema = db.getSchema().table('Item');
        var row = itemSchema.createRow({
          'id': 1,
          'description': 'Get a cup of coffee',
          'deadline': new Date(),
          'done': false
        });
        return db.insertOrReplace().into(itemSchema).values([row]).exec();
      }).then(
      function() {
        var column = itemSchema['done'];
        return todoDb.select().from(itemSchema).where(column.eq(false)).exec();
      }).then(
      function(results) {
        results.forEach(function(row) {
          document.body.textContent =
              (<any>row).description + ' before ' + (<any>row).deadline;
        });

        return todoDb.delete().from(itemSchema);
      }).then(
      function() {
        return todoDb.select(lf.fn.count()).from(itemSchema).exec();
      }).then(function() {
        return todoDb.export();
      });
}

main();
