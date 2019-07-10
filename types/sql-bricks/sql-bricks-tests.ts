// Test file from sql-briks package tests
// https://github.com/CSNW/sql-bricks/blob/master/tests/tests.js
// taked the 03/29/2018. Some dtslint rules has been deabled to be
// close as possible of the original js file.

import sql = require("sql-bricks");

// tslint:disable-next-line:prefer-const
let assert: any;
const select = sql.select;
const insertInto = sql.insertInto;
const insert = sql.insert;
const update = sql.update;
const del = sql.delete;
const and = sql.and;
const or = sql.or;
const like = sql.like;
const not = sql.not;
const $in = sql.in;
const isNull = sql.isNull;
const isNotNull = sql.isNotNull;
const equal = sql.equal;
const eq = sql.eq;
const notEq = sql.notEq;
const lt = sql.lt;
const lte = sql.lte;
const gt = sql.gt;
const gte = sql.gte;
const between = sql.between;
const exists = sql.exists;
const eqAny = sql.eqAny;
const notEqAny = sql.notEqAny;

const alias_expansions = { usr: 'user', psn: 'person', addr: 'address' };
const table_to_alias: sql.OnCriteria = alias_expansions;
sql.aliasExpansions(alias_expansions);

sql.joinCriteria(function(left_tbl: string, left_alias: string, right_tbl: string, right_alias: string) {
  const criteria: sql.OnCriteria = {};
  criteria[`${left_alias}.${table_to_alias[right_tbl]}_fk`] = right_alias + '.pk';
  return criteria;
});

describe('SQL Bricks', function() {
  describe('parameterized sql', function() {
    it('should generate for insert statements', function() {
      const values = { first_name: 'Fred', last_name: 'Flintstone' };
      checkParams(insert('user', values),
        'INSERT INTO "user" (first_name, last_name) VALUES ($1, $2)',
        ['Fred', 'Flintstone']);
    });
    it('should generate for UPDATEs', function() {
      const values = { first_name: 'Fred', last_name: 'Flintstone' };
      checkParams(update('user', values),
        'UPDATE "user" SET first_name = $1, last_name = $2',
        ['Fred', 'Flintstone']);
    });
    it('should generate for WHERE clauses', function() {
      checkParams(select().from('user').where({
        removed: 0,
        name: 'Fred Flintstone'
      }), 'SELECT * FROM "user" WHERE removed = $1 AND name = $2',
        [0, 'Fred Flintstone']);
    });
    it('should generate WHERE clauses with arbitrary SQL', function() {
      const stmt = select().from('time_limits');
      stmt.where(sql(
        "tsrange(start_date_time, end_date_time, '[]') @> tsrange($1, $2, '[]')"));
      check(stmt,
        "SELECT * FROM time_limits WHERE tsrange(start_date_time, end_date_time, '[]') @> tsrange($1, $2, '[]')");
    });
    it('should generate WHERE clauses with arbitrary SQL and parameters', function() {
      const stmt = select().from('time_limits');
      const time1 = '2014-12-06T22:35:00';
      const time2 = '2014-12-06T22:36:00';
      stmt.where(sql(
        "tsrange(start_date_time, end_date_time, '[]') @> tsrange($, $, '[]')", time1, time2));
      checkParams(stmt,
        "SELECT * FROM time_limits WHERE tsrange(start_date_time, end_date_time, '[]') @> tsrange($1, $2, '[]')",
        ['2014-12-06T22:35:00', '2014-12-06T22:36:00']);
    });
    it('should handle WHERE clauses with sql() and a null check', function() {
      check(select().from('test').where(sql('my_col_val()'), null),
        "SELECT * FROM test WHERE my_col_val() IS NULL");
    });
    it('should not escape single quotes in the values returned by toParams()', function() {
      checkParams(update('user', { name: "Muad'Dib" }),
        'UPDATE "user" SET name = $1',
        ["Muad'Dib"]);
    });
    it('should not attempt to serialize arrays (should be done by subsequent layer)', function() {
      checkParams(update('user', { name: ["Paul", "Muad'Dib"] }),
        'UPDATE "user" SET name = $1',
        [["Paul", "Muad'Dib"]]);
    });
    it('should not attempt to serialize dates', function() {
      const dt = new Date();
      checkParams(update('user', { birthdate: dt }),
        'UPDATE "user" SET birthdate = $1',
        [dt]);
    });
    it('should generate node-sqlite3 style params', function() {
      const values = { first_name: 'Fred', last_name: 'Flintstone' };
      const result = insert('user', values).toParams({ placeholder: '?%d' });
      assert.equal(result.text, 'INSERT INTO "user" (first_name, last_name) VALUES (?1, ?2)');
      assert.deepEqual(result.values, ['Fred', 'Flintstone']);
    });
    it('should generate node-mysql style params', function() {
      const values = { first_name: 'Fred', last_name: 'Flintstone' };
      const result = insert('user', values).toParams({ placeholder: '?' });
      assert.equal(result.text, 'INSERT INTO "user" (first_name, last_name) VALUES (?, ?)');
      assert.deepEqual(result.values, ['Fred', 'Flintstone']);
    });
    it('should output non-numeric params in SQL order', function() {
      const result = select().from('user').where($in(sql.val(5), [3, 5, 10])).toParams({ placeholder: '?' });
      assert.equal(result.text, 'SELECT * FROM "user" WHERE ? IN (?, ?, ?)');
      assert.deepEqual(result.values, [5, 3, 5, 10]);
    });
    it('should properly parameterize subqueries', function() {
      const values = { first_name: 'Fred' };
      checkParams(select(select('last_name').from('user').where(values)),
        'SELECT (SELECT last_name FROM "user" WHERE first_name = $1)',
        ['Fred']);
    });
    it('should properly parameterize subqueries with a join', function() {
      const values = { first_name: 'Fred' };
      const query = select().from(select().from('user').where(values).as('subuser'))
        .join('other_table', { 'other_table.id': 'subuser.id' });
      checkParams(query,
        'SELECT * FROM (SELECT * FROM "user" WHERE first_name = $1) subuser INNER JOIN other_table ON other_table.id = subuser.id',
        ['Fred']);
    });
    it('should properly parameterize subqueries in updates', function() {
      const addr_id_for_usr = select('id').from('address').where('usr_id', sql('"user".id')).and('active', true);
      checkParams(update('user').set('addr_id', addr_id_for_usr),
        'UPDATE "user" SET addr_id = (SELECT id FROM address WHERE usr_id = "user".id AND active = $1)',
        [true]);
    });
    it('should properly merge parameterized sub-expressions with $%d placeholders', function() {
      checkParams(select().from('tbl').where(or(sql('a = $1', 444), sql('b = $1', 555), sql('c = $1', 666))),
        'SELECT * FROM tbl WHERE a = $1 OR b = $2 OR c = $3',
        [444, 555, 666]);
    });
  });

  describe('value handling', function() {
    it('should escape single quotes when toString() is used', function() {
      check(update('user', { name: "Muad'Dib" }),
        "UPDATE \"user\" SET name = 'Muad''Dib'");
    });
    it('should escape multiple single quotes in the same string', function() {
      check(update('address', { city: "Liu'e, Hawai'i" }),
        "UPDATE address SET city = 'Liu''e, Hawai''i'");
    });
    it('should support sql.val() to pass in values where columns are expected', function() {
      check(select().from('user').where(sql.val('Fred'), sql('first_name')),
        "SELECT * FROM \"user\" WHERE 'Fred' = first_name");
    });
    it('should support value objects with differing field orders', function() {
      check(insert('user').values([{ id: 1, name: 'Fred' }, { name: 'Barney', id: 2 }]),
        "INSERT INTO \"user\" (id, name) VALUES (1, 'Fred'), (2, 'Barney')");
    });

    describe('.toString() value conversions', function() {
      it('should, by default, convert dates to SQL TIMESTAMP WITH TIME ZONE format', function() {
        check(update('user', { birthdate: new Date('1980-01-01T00:00:00Z') }),
          "UPDATE \"user\" SET birthdate = TIMESTAMP WITH TIME ZONE '1980-01-01 00:00:00.000+00:00'");
      });
      it('should work with sql() SQL literal strings', function() {
        check(select().from('person').where(sql('some_func($, $)', ['a', 'b'])),
          "SELECT * FROM person WHERE some_func('a', 'b')");
      });
      it('should escape single quotes when sql() SQL literal strings are used', function() {
        check(select().from('person').where(sql('some_func($)', ["Muad'Dib"])),
          "SELECT * FROM person WHERE some_func('Muad''Dib')");
      });
      it('should support user-supplied conversions', function() {
        const orig_bool = sql.conversions.Boolean;
        sql.conversions.Boolean = function(bool: boolean) { return bool ? '1' : '0'; };
        const str = del('user').where('active', false).toString();
        sql.conversions.Boolean = orig_bool;
        assert.equal(str, 'DELETE FROM "user" WHERE active = 0');
      });
    });
  });

  it('should expand abbreviations in FROM and JOINs', function() {
    check(select().from('usr').join('psn', { 'usr.psn_fk': 'psn.pk' }),
      'SELECT * FROM "user" usr INNER JOIN person psn ON usr.psn_fk = psn.pk');
  });

  it('should expand left_tbl on all joins', function() {
    const left_tbls: any[] = [];
    const orig = sql.joinCriteria();
    sql.joinCriteria(function(left_tbl) {
      left_tbls.push(left_tbl);
      // return orig.apply(this, arguments);
      return orig.apply();
    });

    select().from('test').join('psn').join('usr').toString();
    sql.joinCriteria(orig);
    assert(left_tbls.indexOf('person') > -1 && left_tbls.indexOf('psn') === -1, `left_tbl is not expanded: [ ${left_tbls.join(',')} ]`);
  });

  it('should support aliases', function() {
    check(select().from('user usr2').join('address addr2'),
      'SELECT * FROM "user" usr2 INNER JOIN address addr2 ON usr2.addr_fk = addr2.pk');
  });

  it('should auto-generate join criteria using supplied joinCriteria() function', function() {
    check(select().from('usr').join('psn'),
      'SELECT * FROM "user" usr INNER JOIN person psn ON usr.psn_fk = psn.pk');
  });
  it('should auto-generate join criteria to multiple tables', function() {
    check(select().from('usr').join('psn').join('addr'),
      'SELECT * FROM "user" usr ' +
      'INNER JOIN person psn ON usr.psn_fk = psn.pk ' +
      'INNER JOIN address addr ON psn.addr_fk = addr.pk');
  });
  it('should auto-generate join criteria from a single table to multiple tables', function() {
    check(select().from('usr').join('psn', 'addr'),
      'SELECT * FROM "user" usr ' +
      'INNER JOIN person psn ON usr.psn_fk = psn.pk ' +
      'INNER JOIN address addr ON usr.addr_fk = addr.pk');
  });
  it('should handle unions', function() {
    check(select().from('usr').where({ name: 'Roy' })
      .union(select().from('usr').where({ name: 'Moss' }))
      .union(select().from('usr').where({ name: 'The elders of the internet' })),
      "SELECT * FROM \"user\" usr WHERE name = 'Roy'" +
      " UNION SELECT * FROM \"user\" usr WHERE name = 'Moss'" +
      " UNION SELECT * FROM \"user\" usr WHERE name = 'The elders of the internet'");
  });
  it('should handle chained unions', function() {
    check(select().from('usr').where({ name: 'Roy' })
      .union().select().from('usr').where({ name: 'blurns' }),
      "SELECT * FROM \"user\" usr WHERE name = 'Roy'" +
      " UNION SELECT * FROM \"user\" usr WHERE name = 'blurns'");
  });
  it('should handle chained unions with params', function() {
    checkParams(select().from('usr').where({ name: 'Roy' })
      .union().select().from('usr').where({ name: 'Moss' }),
      "SELECT * FROM \"user\" usr WHERE name = $1" +
      " UNION SELECT * FROM \"user\" usr WHERE name = $2", ['Roy', 'Moss']);
  });
  it('should handle unions with params', function() {
    checkParams(select().from('usr').where({ name: 'Roy' })
      .union(select().from('usr').where({ name: 'Moss' }))
      .union(select().from('usr').where({ name: 'The elders of the internet' })),
      'SELECT * FROM "user" usr WHERE name = $1' +
      ' UNION SELECT * FROM "user" usr WHERE name = $2' +
      ' UNION SELECT * FROM "user" usr WHERE name = $3',
      ['Roy', 'Moss', 'The elders of the internet']);
  });

  describe('UPDATE statements', function() {
    it('should handle .set() with (key, value)', function() {
      check(update('user').set('name', 'Fred'),
        "UPDATE \"user\" SET name = 'Fred'");
    });
    it('should handle .values() with an object literal', function() {
      check(update('user').values({ name: 'Fred' }),
        "UPDATE \"user\" SET name = 'Fred'");
    });
    it('should handle multiple .set()s with object literals', function() {
      check(update('user').set({ name: 'Fred' }).set({ last_name: 'Flintstone' }),
        "UPDATE \"user\" SET name = 'Fred', last_name = 'Flintstone'");
    });
    it('should handle multiple .values() with (key, value)', function() {
      check(update('user').values('name', 'Fred').values('last_name', 'Flintstone'),
        "UPDATE \"user\" SET name = 'Fred', last_name = 'Flintstone'");
    });
    it('should handle values argument', function() {
      check(update('user', { name: 'Fred' }),
        "UPDATE \"user\" SET name = 'Fred'");
    });
  });

  describe('INSERT statements', function() {
    it('should take an object of column/value pairs', function() {
      check(insert('user', { id: 33, name: 'Fred' }),
        "INSERT INTO \"user\" (id, name) VALUES (33, 'Fred')");
    });
    it('should insert a null for undefined', function() {
      check(insert('user', { id: 33, name: undefined }),
        "INSERT INTO \"user\" (id, name) VALUES (33, null)");
    });
    it('should insert a null for null', function() {
      check(insert('user', { id: 33, name: null }),
        "INSERT INTO \"user\" (id, name) VALUES (33, null)");
    });
    it('should take an array of columns & values', function() {
      check(insert('user', ['id', 'name']).values([33, 'Fred']),
        "INSERT INTO \"user\" (id, name) VALUES (33, 'Fred')");
    });
    it('should take multiple parameters of columns & values', function() {
      check(insert('user', 'id', 'name').values(33, 'Fred'),
        "INSERT INTO \"user\" (id, name) VALUES (33, 'Fred')");
    });
    it('should take an array of objects', function() {
      check(insert('user', [{ id: 33, name: 'Fred' }, { id: 34, name: 'Wilma' }]),
        "INSERT INTO \"user\" (id, name) VALUES (33, 'Fred'), (34, 'Wilma')");
    });

    describe('.values()', function() {
      it('should take an array of arrays', function() {
        check(insert('user', ['id', 'name']).values([[33, 'Fred'], [34, 'Wilma']]),
          "INSERT INTO \"user\" (id, name) VALUES (33, 'Fred'), (34, 'Wilma')");
      });
    });

    describe('.into()', function() {
      it('should take an object of column/value pairs', function() {
        check(insert().into('user', { id: 33, name: 'Fred' }),
          "INSERT INTO \"user\" (id, name) VALUES (33, 'Fred')");
      });
      it('should take an array of columns & values', function() {
        check(insert().into('user', ['id', 'name']).values([33, 'Fred']),
          "INSERT INTO \"user\" (id, name) VALUES (33, 'Fred')");
      });
      it('should take multiple parameters of columns & values', function() {
        check(insert().into('user', 'id', 'name').values(33, 'Fred'),
          "INSERT INTO \"user\" (id, name) VALUES (33, 'Fred')");
      });
    });
  });

  describe('SELECT clause', function() {
    it('should handle an array', function() {
      check(select(['one', 'order']).from('user'),
        'SELECT one, "order" FROM "user"');
    });
    it('should handle multiple args', function() {
      check(select('one', 'order').from('user'),
        'SELECT one, "order" FROM "user"');
    });
    it('should default to *', function() {
      check(select().from('user'),
        'SELECT * FROM "user"');
    });
    it('should handle a comma-delimited str', function() {
      check(select('one, order').from('user'),
        'SELECT one, "order" FROM "user"');
    });
    it('should handle being called multiple times', function() {
      check(select('one, order').select(['two', 'desc']).select('three', 'four').from('user'),
        'SELECT one, "order", two, "desc", three, four FROM "user"');
    });
    it('should support DISTINCT', function() {
      check(select('one, order').distinct('two, desc').from('user'),
        'SELECT DISTINCT one, "order", two, "desc" FROM "user"');
    });
    it('should support FOR UPDATE', function() {
      check(select().from('user').forUpdate(),
        'SELECT * FROM "user" FOR UPDATE');
    });
    it('should support FOR UPDATE w/ col list', function() {
      check(select().from('user').forUpdate().of('user'),
        'SELECT * FROM "user" FOR UPDATE OF "user"');
    });
    it('should support FOR UPDATE OF ... NO WAIT', function() {
      check(select().from('user').forUpdate().of('user').noWait(),
        'SELECT * FROM "user" FOR UPDATE OF "user" NO WAIT');
    });
  });

  describe('.from()', function() {
    it('should handle an array', function() {
      check(select().from(['one', 'two', 'usr']),
        'SELECT * FROM one, two, "user" usr');
    });
    it('should handle multiple args', function() {
      check(select().from('one', 'two', 'usr'),
        'SELECT * FROM one, two, "user" usr');
    });
    it('should handle a comma-delimited string', function() {
      check(select().from('one, two, usr'),
        'SELECT * FROM one, two, "user" usr');
    });
    it('should handle being called multiple times', function() {
      check(select().from('one', 'usr').from(['two', 'psn']).from('three, addr'),
        'SELECT * FROM one, "user" usr, two, person psn, three, address addr');
    });
    it('should handle subquery object', function() {
      check(select().from(select().from('user').as('subq')),
        'SELECT * FROM (SELECT * FROM "user") subq');
    });
    it('should handle subquery string', function() {
      check(select().from('(SELECT * FROM "user") subq'),
        'SELECT * FROM (SELECT * FROM "user") subq');
    });
  });

  describe('select().into() should insert into a new table', function() {
    it('.into()', function() {
      check(select().into('new_user').from('user'),
        'SELECT * INTO new_user FROM "user"');
    });
    it('.intoTable()', function() {
      check(select().intoTable('new_user').from('user'),
        'SELECT * INTO new_user FROM "user"');
    });
    it('intoTemp()', function() {
      check(select().intoTemp('new_user').from('user'),
        'SELECT * INTO TEMP new_user FROM "user"');
    });
    it('intoTempTable()', function() {
      check(select().intoTempTable('new_user').from('user'),
        'SELECT * INTO TEMP new_user FROM "user"');
    });
  });

  describe('insert().into() should insert into a preexisting table', function() {
    it('insert().into().select()', function() {
      check(insert().into('new_user', 'id', 'addr_id')
        .select('id', 'addr_id').from('user'),
        'INSERT INTO new_user (id, addr_id) SELECT id, addr_id FROM "user"');
    });
    it('insert().into().select() with no columns', function() {
      check(insert().into('new_user')
        .select('id', 'addr_id').from('user'),
        'INSERT INTO new_user SELECT id, addr_id FROM "user"');
    });
    it('insert().select()', function() {
      check(insert('new_user', 'id', 'addr_id')
        .select('id', 'addr_id').from('user'),
        'INSERT INTO new_user (id, addr_id) SELECT id, addr_id FROM "user"');
    });
    it('insert().select() with params', function() {
      check(insert('new_user', 'id', 'addr_id')
        .select('id', 'addr_id').from('user').where({ active: true }).toParams().text,
        'INSERT INTO new_user (id, addr_id) SELECT id, addr_id FROM "user" WHERE active = $1');
    });
  });

  describe('GROUP BY clause', function() {
    it('should support single group by', function() {
      check(select().from('user').groupBy('last_name'),
        'SELECT * FROM "user" GROUP BY last_name');
    });
    it('should support multiple groupBy() args w/ reserved words quoted', function() {
      check(select().from('user').groupBy('last_name', 'order'),
        'SELECT * FROM "user" GROUP BY last_name, "order"');
    });
    it('should support .groupBy().groupBy()', function() {
      check(select().from('user').groupBy('last_name').groupBy('order'),
        'SELECT * FROM "user" GROUP BY last_name, "order"');
    });
    it('should support an array', function() {
      check(select().from('user').groupBy(['last_name', 'order']),
        'SELECT * FROM "user" GROUP BY last_name, "order"');
    });
  });

  describe('.order() / .orderBy()', function() {
    it('should support .orderBy(arg1, arg2)', function() {
      check(select().from('user').orderBy('last_name', 'order'),
        'SELECT * FROM "user" ORDER BY last_name, "order"');
    });
    it('should support an array', function() {
      check(select().from('user').orderBy(['last_name', 'order']),
        'SELECT * FROM "user" ORDER BY last_name, "order"');
    });
    it('should support being called multiple times', function() {
      check(select().from('user').orderBy('last_name').orderBy('order'),
        'SELECT * FROM "user" ORDER BY last_name, "order"');
    });
  });

  describe('joins', function() {
    it('.join() should accept a comma-delimited string', function() {
      check(select().from('usr').join('psn, addr'),
        'SELECT * FROM "user" usr ' +
        'INNER JOIN person psn ON usr.psn_fk = psn.pk ' +
        'INNER JOIN address addr ON usr.addr_fk = addr.pk');
    });
    it('.leftJoin() should generate a left join', function() {
      check(select().from('usr').leftJoin('addr'),
        'SELECT * FROM "user" usr ' +
        'LEFT JOIN address addr ON usr.addr_fk = addr.pk');
    });
    it('.leftOuterJoin() should generate a left join', function() {
      check(select().from('usr').leftOuterJoin('addr'),
        'SELECT * FROM "user" usr ' +
        'LEFT JOIN address addr ON usr.addr_fk = addr.pk');
    });
    it('.rightJoin() should generate a right join', function() {
      check(select().from('usr').rightJoin('addr'),
        'SELECT * FROM "user" usr ' +
        'RIGHT JOIN address addr ON usr.addr_fk = addr.pk');
    });
    it('.rightOuterJoin() should generate a right join', function() {
      check(select().from('usr').rightOuterJoin('addr'),
        'SELECT * FROM "user" usr ' +
        'RIGHT JOIN address addr ON usr.addr_fk = addr.pk');
    });
    it('.fullJoin() should generate a full join', function() {
      check(select().from('usr').fullJoin('addr'),
        'SELECT * FROM "user" usr ' +
        'FULL JOIN address addr ON usr.addr_fk = addr.pk');
    });
    it('.fullOuterJoin() should generate a full join', function() {
      check(select().from('usr').fullOuterJoin('addr'),
        'SELECT * FROM "user" usr ' +
        'FULL JOIN address addr ON usr.addr_fk = addr.pk');
    });
    it('.crossJoin() should generate a cross join', function() {
      check(select().from('usr').crossJoin('addr'),
        'SELECT * FROM "user" usr ' +
        'CROSS JOIN address addr');
    });
    it('join() should accept an expression for the on argument', function() {
      check(select().from('usr').join('addr', eq('usr.addr_id', sql('addr.id'))),
        'SELECT * FROM "user" usr INNER JOIN address addr ON usr.addr_id = addr.id');
    });
    it('join() should accept an array for the on argument (for JOIN USING)', function() {
      check(select().from('usr').join('addr', ['addr_id', 'country_id']),
        'SELECT * FROM "user" usr INNER JOIN address addr USING (addr_id, country_id)');
    });
  });

  describe('.on()', function() {
    it('should accept an object literal', function() {
      check(select().from('usr').join('addr').on({ 'usr.addr_id': 'addr.id' }),
        'SELECT * FROM "user" usr ' +
        'INNER JOIN address addr ON usr.addr_id = addr.id');
    });
    it('should accept a (key, value) pair', function() {
      check(select().from('usr').join('addr').on('usr.addr_id', 'addr.id'),
        'SELECT * FROM "user" usr ' +
        'INNER JOIN address addr ON usr.addr_id = addr.id');
    });
    it('can be called multiple times', function() {
      check(select().from('usr', 'psn').join('addr').on({ 'usr.addr_id': 'addr.id' })
        .on('psn.addr_id', 'addr.id'),
        'SELECT * FROM "user" usr, person psn ' +
        'INNER JOIN address addr ON usr.addr_id = addr.id AND psn.addr_id = addr.id');
    });
    it('can be called multiple times w/ an object literal', function() {
      check(select().from('usr', 'psn').join('addr').on({ 'usr.addr_id': 'addr.id' })
        .on({ 'psn.addr_id': 'addr.id' }),
        'SELECT * FROM "user" usr, person psn ' +
        'INNER JOIN address addr ON usr.addr_id = addr.id AND psn.addr_id = addr.id');
    });
    it('should accept an expression', function() {
      check(select().from('usr').join('addr').on(eq('usr.addr_id', sql('addr.id'))),
        'SELECT * FROM "user" usr INNER JOIN address addr ON usr.addr_id = addr.id');
    });
    it('should not proceed if .using() has already been used', function() {
      assert.throws(function() {
        select().from('t1').join('t2').using('id').on({ 't1.t2_id': 't2.id' });
      });
    });
  });

  describe('.using()', function() {
    it('should accept a comma-delimited string', function() {
      check(select().from('usr').join('addr').using('addr_id, contrived_id'),
        'SELECT * FROM "user" usr ' +
        'INNER JOIN address addr USING (addr_id, contrived_id)');
    });
    it('should accept multiple arguments', function() {
      check(select().from('usr').join('addr').using('addr_id', 'contrived_id'),
        'SELECT * FROM "user" usr ' +
        'INNER JOIN address addr USING (addr_id, contrived_id)');
    });
    it('should accept an array literal', function() {
      check(select().from('usr').join('addr').using(['addr_id', 'contrived_id']),
        'SELECT * FROM "user" usr ' +
        'INNER JOIN address addr USING (addr_id, contrived_id)');
    });
    it('should not proceed if .on() has already been used', function() {
      assert.throws(function() {
        select().from('t1').join('t2').on({ 't1.t2_id': 't2.id' }).using('id');
      });
    });
  });

  describe('natural joins', function() {
    it('.naturalJoin() should accept a comma-delimited string', function() {
      check(select().from('usr').naturalJoin('psn, addr'),
        'SELECT * FROM "user" usr ' +
        'NATURAL INNER JOIN person psn ' +
        'NATURAL INNER JOIN address addr');
    });
    it('.naturalLeftJoin() should generate a natural left join', function() {
      check(select().from('usr').naturalLeftJoin('addr'),
        'SELECT * FROM "user" usr ' +
        'NATURAL LEFT JOIN address addr');
    });
    it('.naturalLeftOuterJoin() should generate a natural left join', function() {
      check(select().from('usr').naturalLeftOuterJoin('addr'),
        'SELECT * FROM "user" usr ' +
        'NATURAL LEFT JOIN address addr');
    });
    it('.naturalRightJoin() should generate a natural right join', function() {
      check(select().from('usr').naturalRightJoin('addr'),
        'SELECT * FROM "user" usr ' +
        'NATURAL RIGHT JOIN address addr');
    });
    it('.naturalRightOuterJoin() should generate a natural right join', function() {
      check(select().from('usr').naturalRightOuterJoin('addr'),
        'SELECT * FROM "user" usr ' +
        'NATURAL RIGHT JOIN address addr');
    });
    it('.naturalFullJoin() should generate a natural full join', function() {
      check(select().from('usr').naturalFullJoin('addr'),
        'SELECT * FROM "user" usr ' +
        'NATURAL FULL JOIN address addr');
    });
    it('.naturalFullOuterJoin() should generate a natural full join', function() {
      check(select().from('usr').naturalFullOuterJoin('addr'),
        'SELECT * FROM "user" usr ' +
        'NATURAL FULL JOIN address addr');
    });
  });

  describe('WHERE clauses', function() {
    it('should AND multiple where() criteria by default', function() {
      check(select().from('user').where({
        first_name: 'Fred',
        last_name: 'Flintstone'
      }),
        "SELECT * FROM \"user\" WHERE first_name = 'Fred' AND last_name = 'Flintstone'");
    });
    it('should AND multiple where()s by default', function() {
      check(select().from('user').where({ first_name: 'Fred' })
        .where({ last_name: 'Flintstone' }),
        "SELECT * FROM \"user\" WHERE first_name = 'Fred' AND last_name = 'Flintstone'");
    });
    it('should handle explicit .and() with (key, value) args', function() {
      check(select().from('user').where('first_name', 'Fred')
        .and('last_name', 'Flintstone'),
        "SELECT * FROM \"user\" WHERE first_name = 'Fred' AND last_name = 'Flintstone'");
    });
    it('should handle nested and(or())', function() {
      check(select().from('user').where(and({ last_name: 'Flintstone' }, or({ first_name: 'Fred' }, { first_name: 'Wilma' }))),
        "SELECT * FROM \"user\" WHERE last_name = 'Flintstone' AND (first_name = 'Fred' OR first_name = 'Wilma')");
    });
    it('should handle or([...])', function() {
      check(select().from('table').where({ this: 'test' }).and(or(['test1', 'test2'].map(function(val) { return eq('that', val); }))),
        "SELECT * FROM \"table\" WHERE this = 'test' AND (that = 'test1' OR that = 'test2')");
    });
    it('and() should be implicit', function() {
      check(select().from('user').where({ last_name: 'Flintstone' }, or({ first_name: 'Fred' }, { first_name: 'Wilma' })),
        "SELECT * FROM \"user\" WHERE last_name = 'Flintstone' AND (first_name = 'Fred' OR first_name = 'Wilma')");
    });
    it('should handle like()', function() {
      check(select().from('user').where(like('last_name', 'Flint%')),
        "SELECT * FROM \"user\" WHERE last_name LIKE 'Flint%'");
    });
    it('should accept a 3rd escape param to like()', function() {
      check(select().from('user').where(like('percent', '100\\%', '\\')),
        "SELECT * FROM \"user\" WHERE percent LIKE '100\\%' ESCAPE '\\'");
    });
    it('should handle not()', function() {
      check(select().from('user').where(not({ first_name: 'Fred' })),
        "SELECT * FROM \"user\" WHERE NOT first_name = 'Fred'");
    });
    it('should handle in()', function() {
      check(select().from('user').where($in('first_name', ['Fred', 'Wilma'])),
        "SELECT * FROM \"user\" WHERE first_name IN ('Fred', 'Wilma')");
    });
    it('should handle .in() with multiple args', function() {
      check(select().from('user').where($in('name', 'Jimmy', 'Owen')),
        "SELECT * FROM \"user\" WHERE name IN ('Jimmy', 'Owen')");
    });
    it('should handle .in() with a subquery', function() {
      check(select().from('user').where($in('addr_id', select('id').from('address'))),
        'SELECT * FROM "user" WHERE addr_id IN (SELECT id FROM address)');
    });
    it('should handle exists() with a subquery', function() {
      check(select().from('user').where(exists(select().from('address').where({ 'user.addr_id': sql('address.id') }))),
        'SELECT * FROM "user" WHERE EXISTS (SELECT * FROM address WHERE "user".addr_id = address.id)');
    });
    it('should handle exists() with a subquery, parameterized', function() {
      checkParams(select().from('user').where('active', true).where(exists(select().from('address').where({ 'user.addr_id': 37 }))),
        'SELECT * FROM "user" WHERE active = $1 AND EXISTS (SELECT * FROM address WHERE "user".addr_id = $2)',
        [true, 37]);
    });
    it('should handle isNull()', function() {
      check(select().from('user').where(isNull('first_name')),
        'SELECT * FROM "user" WHERE first_name IS NULL');
    });
    it('should handle isNotNull()', function() {
      check(select().from('user').where(isNotNull('first_name')),
        'SELECT * FROM "user" WHERE first_name IS NOT NULL');
    });
    it('should automatically generate IS NULL', function() {
      check(select().from('user').where({ first_name: null }),
        'SELECT * FROM "user" WHERE first_name IS NULL');
    });
    it('should handle explicit equal()', function() {
      check(select().from('user').where(equal('first_name', 'Fred')),
        "SELECT * FROM \"user\" WHERE first_name = 'Fred'");
    });
    it('should automatically generate IS NOT NULL', function() {
      check(select().from('user').where(notEq('first_name', null)),
        "SELECT * FROM \"user\" WHERE first_name IS NOT NULL");
    });
    it('should handle lt()', function() {
      check(select().from('user').where(lt('order', 5)),
        'SELECT * FROM "user" WHERE "order" < 5');
    });
    it('should handle lte()', function() {
      check(select().from('user').where(lte('order', 5)),
        'SELECT * FROM "user" WHERE "order" <= 5');
    });
    it('should handle gt()', function() {
      check(select().from('user').where(gt('order', 5)),
        'SELECT * FROM "user" WHERE "order" > 5');
    });
    it('should handle gte()', function() {
      check(select().from('user').where(gte('order', 5)),
        'SELECT * FROM "user" WHERE "order" >= 5');
    });
    it('should handle between()', function() {
      check(select().from('user').where(between('name', 'Frank', 'Fred')),
        "SELECT * FROM \"user\" WHERE name BETWEEN 'Frank' AND 'Fred'");
    });
    it('should do nothing for null, undefined, {}', function() {
      check(select().from('user').where(),
        "SELECT * FROM \"user\"");
      check(select().from('user').where(null),
        "SELECT * FROM \"user\"");
      check(select().from('user').where({}),
        "SELECT * FROM \"user\"");
      check(select().from('user').where(undefined),
        "SELECT * FROM \"user\"");
    });
    it('should not ignore the 2nd arg if the first is {}', function() {
      check(select().from('user').where({}, { name: 'Fred' }),
        "SELECT * FROM \"user\" WHERE name = 'Fred'");
    });

    describe('customizations', function() {
      it('should support customized criteria', function() {
        check(select().from('table').where(arraysToOrs({ this: 'test', that: ['test1', 'test2'] })),
          "SELECT * FROM \"table\" WHERE this = 'test' AND (that = 'test1' OR that = 'test2')");
      });

      it('should support changing the default array handling', function() {
        const proto = sql.select.prototype;
        const orig = proto.where;
        proto.where = function(criteria: sql.OnCriteria) {
          // return orig.call(this, arraysToOrs(criteria));
          return orig.call();
        };

        check(select().from('table').where({ this: 'test', that: ['test1', 'test2'] }),
          "SELECT * FROM \"table\" WHERE this = 'test' AND (that = 'test1' OR that = 'test2')");

        proto.where = orig;
      });

      function arraysToOrs(criteria: sql.WhereObject) {
        const where = and();
        for (const col in criteria) {
          const val = criteria[col];
          let expr: sql.WhereExpression;
            expr = Array.isArray(val) ? or(val.map(function(val) { return eq(col, val); }))
              : expr = eq(col, val);
          where.expressions.push(expr);
        }
        return where;
      }

      it('should support converting expressions to string', function() {
        check(and({ this: 'test' }, $in('that', ['v1', 'v2'])),
          "(this = 'test' AND that IN ('v1', 'v2'))");
      });

      it('should support raw sql blocks in expressions', function() {
        check(and({ this: 'test' }, sql('field is null')),
          "(this = 'test' AND field is null)");
      });

      it('should support converting ?-parameterized sql blocks to string', function() {
        check(sql('field = ?', 123).toString({ placeholder: '?' }),
          "field = 123");
      });

      it('should support converting default-parameterized sql blocks to string', function() {
        check(sql('field = $1', 123),
          "field = 123");
      });
    });
  });

  describe('should quote column names with capitals in them', function() {
    it('in SELECT', function() {
      check(select('Name').from('user'),
        'SELECT "Name" FROM "user"');
    });
    it('in SELECT, after tbl prefix, before AS suffix', function() {
      check(select('user.Name AS UserName').from('user'),
        'SELECT "user"."Name" AS UserName FROM "user"');
    });
    it('in SELECT, after tbl prefix, with the optional "AS" omitted', function() {
      check(select('user.Name UserName').from('user'),
        'SELECT "user"."Name" UserName FROM "user"');
    });
    it('in SELECT, with the optional "AS" omitted', function() {
      check(select('Name UserName').from('user'),
        'SELECT "Name" UserName FROM "user"');
    });
  });

  describe('should quote table names that are reserved words or have capitals', function() {
    it('in joins', function() {
      check(select('Name UserName').from('person').join('user', { 'person.usr_id': 'user.id' }),
        'SELECT "Name" UserName FROM person INNER JOIN "user" ON person.usr_id = "user".id');
    });
    it('unless they are wrapped in sql() literals (to query reserved system tables)', function() {
      check(select(sql('user.id')).from(sql('user')),
        'SELECT user.id FROM user');
    });
  });

  describe('should quote reserved words in column names', function() {
    it('in ORDER BY', function() {
      check(select().from('usr').orderBy('order'),
        'SELECT * FROM "user" usr ORDER BY "order"');
    });
    it('in SELECT', function() {
      check(select('desc').from('usr'),
        'SELECT "desc" FROM "user" usr');
    });
    it('in JOIN ONs', function() {
      check(select().from('usr').join('psn', { 'usr.order': 'psn.order' }),
        'SELECT * FROM "user" usr INNER JOIN person psn ON usr."order" = psn."order"');
    });
    it('in JOIN USINGs', function() {
      check(select().from('usr').join('psn').using('order'),
        'SELECT * FROM "user" usr INNER JOIN person psn USING ("order")');
    });
    it('in INSERT', function() {
      check(insert('user').values({ order: 1 }),
        'INSERT INTO "user" ("order") VALUES (1)');
    });
    it('in alternative insert() API', function() {
      check(insert('user', 'order').values(1),
        'INSERT INTO "user" ("order") VALUES (1)');
    });
    it('with a db and table prefix and a suffix', function() {
      check(select('db.person.desc AS psn_desc').from('person'),
        'SELECT db.person."desc" AS psn_desc FROM person');
    });
    it('should quote sqlite reserved words', function() {
      check(select('action').from('user'),
        'SELECT "action" FROM "user"');
    });
    it('should not quote reserved words in SELECT expressions', function() {
      check(select("CASE WHEN name = 'Fred' THEN 1 ELSE 0 AS security_level").from('user'),
        "SELECT CASE WHEN name = 'Fred' THEN 1 ELSE 0 AS security_level FROM \"user\"");
    });
  });

  describe('subqueries in <, >, etc', function() {
    it('should support a subquery in >', function() {
      const count_addrs_for_usr = select('count(*)').from('address').where({ 'user.addr_id': sql('address.id') });
      check(select().from('user').where(gt(count_addrs_for_usr, 5)),
        'SELECT * FROM "user" WHERE (SELECT count(*) FROM address WHERE "user".addr_id = address.id) > 5');
    });
    it('should support a subquery in <=', function() {
      const count_addrs_for_usr = select('count(*)').from('address').where({ 'user.addr_id': sql('address.id') });
      check(select().from('user').where(lte(count_addrs_for_usr, 5)),
        'SELECT * FROM "user" WHERE (SELECT count(*) FROM address WHERE "user".addr_id = address.id) <= 5');
    });
    it('should support = ANY (subquery) quantifier', function() {
      check(select().from('user').where(eqAny('user.id', select('user_id').from('address'))),
        'SELECT * FROM "user" WHERE "user".id = ANY (SELECT user_id FROM address)');
    });
    it('should support <> ANY (subquery) quantifier', function() {
      check(select().from('user').where(notEqAny('user.id', select('user_id').from('address'))),
        'SELECT * FROM "user" WHERE "user".id <> ANY (SELECT user_id FROM address)');
    });
  });

  describe('deep Statement.clone()', function() {
    it('should deep clone WHERE expressions', function() {
      const sel = select().from('user').where({ first_name: 'Fred' });
      sel.clone().where({ last_name: 'Flintstone' });
      check(sel, "SELECT * FROM \"user\" WHERE first_name = 'Fred'");
    });
    it('should deep clone .order()', function() {
      const sel = select().from('user').order('name');
      sel.clone().order('last_name');
      check(sel, 'SELECT * FROM "user" ORDER BY name');
    });
    it('should deep clone .join()', function() {
      const sel = select().from('user').join('addr');
      sel.clone().join('psn');
      check(sel, 'SELECT * FROM "user" INNER JOIN address addr ON "user".addr_fk = addr.pk');
    });
    it('should clone values', function() {
      const ins = insert('user', { first_name: 'Fred' });
      ins.clone().values({ last_name: 'Flintstone' });
      check(ins, "INSERT INTO \"user\" (first_name) VALUES ('Fred')");
    });
    it('should clone $in subqueries', function() {
      const sel = select().from('user').where($in('first_name', select('first_name').from('user')));
      sel.clone().where('last_name', 'Flintstone');
      check(sel, "SELECT * FROM \"user\" WHERE first_name IN (SELECT first_name FROM \"user\")");
    });
  });

  describe('the AS keyword', function() {
    it('should not generate invalid SQL', function() {
      check(select().from('user AS usr').join('addr'),
        'SELECT * FROM "user" AS usr INNER JOIN address addr ON usr.addr_fk = addr.pk');
    });
  });

  describe('delete()', function() {
    it('should generate a DELETE statement', function() {
      check(del('user'),
        'DELETE FROM "user"');
    });
    it('should support .from()', function() {
      check(del().from('user'),
        'DELETE FROM "user"');
    });
    it('should generate a DELETE statement with a WHERE clause', function() {
      check(del('user').where('first_name', 'Fred'),
        "DELETE FROM \"user\" WHERE first_name = 'Fred'");
    });
  });

  describe('_extension()', function() {
    it('should shield base', function() {
      const ext = sql._extension();

      ext.prop = 1;
      assert.equal(sql.prop, undefined);

      ext.select.prop = 1;
      // assert.equal(sql.select.returning, undefined);

      assert(ext.select.prototype.clauses !== sql.select.prototype.clauses);
    });
  });
});

function describe(...param: any[]) { }
function it(...param: any[]) { }
function check(...param: any[]) { }
function checkParams(...param: any[]) { }
