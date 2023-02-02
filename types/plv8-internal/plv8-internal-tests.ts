// $ExpectType string
const ver = plv8.version;
// @ts-expect-error
plv8.version = '5';

plv8.quote_literal('my_literal');
plv8.quote_literal(1);
// @ts-expect-error
plv8.quote_literal(null);

plv8.quote_ident('my_ident');
// @ts-expect-error
plv8.quote_ident(null);
// @ts-expect-error
plv8.quote_ident(1);

plv8.quote_nullable(null);
plv8.quote_nullable('str');
plv8.quote_nullable(1);

plv8.execute('select * from table');
plv8.execute('select * from table where id = $1', [ 1 ]);
plv8.execute('select * from table where id = $1 and name = $2', [ 1, 'name' ]);
plv8.execute('select * from table where id = $1 and name = $2', 1, 'name');
// @ts-expect-error
plv8.execute(null);

plv8.elog(DEBUG1, 'my message');
plv8.elog(DEBUG2, 'my message');
plv8.elog(DEBUG3, 'my message');
plv8.elog(DEBUG4, 'my message');
plv8.elog(DEBUG5, 'my message');
plv8.elog(LOG, 'my message');
plv8.elog(NOTICE, 'my message');
plv8.elog(INFO, 'my message');
plv8.elog(WARNING, 'my message');
plv8.elog(ERROR, 'my message');
plv8.elog(INFO, 'my message', 'and more');
// @ts-expect-error
plv8.elog('my message');

plv8.find_function('my_func');
// @ts-expect-error
plv8.find_function(null);

// $ExpectType HeapStatistics
plv8.memory_usage();

plv8.run_script('() => { return 1 }');
plv8.run_script('() => { return 1 }', 'myFunc');
// @ts-expect-error
plv8.run_script(null);

// $ExpectType PreparedPlan
const plan = plv8.prepare('select * from table where id = $1 and name = $2');
// $ExpectType SQLRow[]
plan.execute([1, 'name']);
// $ExpectType Cursor
const cursor = plan.cursor([1, 'name']);
// $ExpectType SQLRow | SQLRow[]
cursor.fetch();
// $ExpectType SQLRow | SQLRow[]
cursor.fetch(10);
cursor.close();
plan.free();

plv8.subtransaction(() => {
    plv8.execute('update table set name = $1 where id = $1', [ 1, 'name' ]);
});

plv8.return_next({ a: 1, b: 'data' });

plv8.commit();
plv8.rollback();

// $ExpectType WindowObject
const winObj = plv8.get_window_object();
// $ExpectType number
let pos = winObj.get_current_position();
const context = winObj.get_partition_local();
winObj.rows_are_peers(pos, pos - 1);
winObj.set_mark_position(pos);
winObj.set_partition_local(context);
winObj.get_func_arg_in_frame(0, 0, winObj.SEEK_HEAD, true);
winObj.get_func_arg_in_frame(0, 0, winObj.SEEK_TAIL, true);
winObj.get_func_arg_current(1);
