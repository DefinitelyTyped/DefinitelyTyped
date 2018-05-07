import lf = require("lovefield");
function main(): void {
  const schemaBuilder: lf.schema.Builder = lf.schema.create('todo', 1);

  schemaBuilder.createTable('Item').
      addColumn('id', lf.Type.INTEGER).
      addColumn('description', lf.Type.STRING).
      addColumn('deadline', lf.Type.DATE_TIME).
      addColumn('done', lf.Type.BOOLEAN).
      addPrimaryKey(['id'], false).
      addIndex('idxDeadline', ['deadline'], false, lf.Order.DESC).
      addNullable(['deadline']).
      addUnique('uq_description', ['description']);

  let todoDb: lf.Database = null;
  let itemSchema: lf.schema.Table = null;
  const connectOptions: lf.schema.ConnectOptions = {
    storeType: lf.schema.DataStoreType.MEMORY
  };
  schemaBuilder.connect(connectOptions).then((db) => {
    todoDb = db;
    itemSchema = db.getSchema().table('Item');
    const row = itemSchema.createRow({
      id: 1,
      description: 'Get a cup of coffee',
      deadline: new Date(),
      done: false,
    });
    return db.insertOrReplace().into(itemSchema).values([row]).exec();
  }).then(() => {
    const column = itemSchema['done'];
    return todoDb.select().from(itemSchema).where(column.eq(false)).exec();
}).then((results) => {
    results.forEach((row) => {
      document.body.textContent = `${(row as any).description} before ${(row as any).deadline}`;
    });

    return todoDb.delete().from(itemSchema);
  }).then(() => {
    return todoDb.select(lf.fn.count()).from(itemSchema).exec();
  }).then(() => {
    return todoDb.export();
  }).then(() => {
    todoDb.createTransaction().stats();
  });
}

main();
