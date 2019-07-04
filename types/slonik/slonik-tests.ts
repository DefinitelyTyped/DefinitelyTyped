import {
  CheckIntegrityConstraintViolationError,
  createBenchmarkingInterceptor,
  createBigintTypeParser,
  createFieldNameTransformationInterceptor,
  createInterceptorPreset,
  createPool,
  createQueryNormalizationInterceptor,
  createTimestampTypeParser,
  createTimestampWithTimeZoneTypeParser,
  DatabaseConnectionType,
  DatabasePoolConnectionType,
  DatabasePoolType,
  DatabaseTransactionConnectionType,
  createTypeParserPreset,
  DataIntegrityError,
  ForeignKeyIntegrityConstraintViolationError,
  IntegrityConstraintViolationError,
  InterceptorType,
  NotFoundError,
  NotNullIntegrityConstraintViolationError,
  SlonikError,
  sql,
  TypeParserType,
  UniqueIntegrityConstraintViolationError
} from 'slonik';
import { ArrayTokenSymbol, TupleListTokenSymbol } from 'slonik/symbols';

// make sure symbols are unique
// $ExpectError
const badSymbolAssignment: typeof ArrayTokenSymbol = TupleListTokenSymbol;

const VALUE = 'foo';

//
// POOL
// ----------------------------------------------------------------------
const pool = createPool('postgres://localhost');

// $ExpectType Promise<{ connectResult: string; }>
pool.connect(async (connection) => {
    const result = await connection.query(sql`SELECT 1`);
    // $ExpectType QueryResultType<QueryResultRowType<string>>
    result;
    // $ExpectType QueryResultRowType<string>
    result.rows[0];

    connection.query(sql`
        SELECT 1
        FROM foo
        WHERE bar = ${'baz'}
    `);

    // Query methods
    await connection.any(sql`SELECT foo`);
    await connection.anyFirst(sql`SELECT foo`);
    await connection.many(sql`SELECT foo`);
    await connection.manyFirst(sql`SELECT foo`);
    await connection.maybeOne(sql`SELECT foo`);
    await connection.maybeOneFirst(sql`SELECT foo`);
    await connection.one(sql`SELECT foo`);
    await connection.oneFirst(sql`SELECT foo`);

    // Disallow raw strings
    // $ExpectError
    await connection.query(`SELECT foo`);

    // $ExpectType { transactionResult: string; }
    await connection.transaction(async (transactionConnection) => {
      await transactionConnection.query(sql`INSERT INTO foo (bar) VALUES ('baz')`);
      await transactionConnection.query(sql`INSERT INTO qux (quux) VALUES ('corge')`);
      return { transactionResult: 'foo' };
    });

    // $ExpectType QueryResultType<QueryResultRowType<string>>
    await connection.transaction(async (t1) => {
      await t1.query(sql`INSERT INTO foo (bar) VALUES ('baz')`);

      return t1.transaction((t2) => {
        return t2.query(sql`INSERT INTO qux (quux) VALUES ('corge')`);
      });
    });

    // $ExpectType void
    await connection.transaction(async (t1) => {
      await t1.query(sql`INSERT INTO foo (bar) VALUES ('baz')`);

      try {
        await t1.transaction(async (t2) => {
          await t2.query(sql`INSERT INTO qux (quux) VALUES ('corge')`);

          return Promise.reject(new Error('foo'));
        });
      } catch (error) { /* empty */ }
    });
    return { connectResult: 'foo' };
  });
pool.query(sql`SELECT * FROM table WHERE name = '${VALUE}'`);

const typedQuery = async () => {
  interface Foo { foo: string; }
  interface FooBar extends Foo { bar: number; }
  const getFooQuery = (limit: number) =>
    sql<Foo>`select foo from foobartable limit ${limit}`;

  const getFooBarQuery = (limit: number) =>
    sql<FooBar>`select foo, bar from foobartable limit ${limit}`;

  // $ExpectType QueryResultType<FooBar>
  await pool.query(getFooBarQuery(10));

  // $ExpectType string
  await pool.oneFirst(getFooQuery(10));

  // $ExpectType FooBar
  await pool.one(getFooBarQuery(10));

  // $ExpectType string | null
  await pool.maybeOneFirst(getFooQuery(10));

  // $ExpectType FooBar | null
  await pool.maybeOne(getFooBarQuery(10));

  // $ExpectType FooBar[]
  await pool.any(getFooBarQuery(10));
};

createPool('postgres://localhost', {
  interceptors: [
    {
      afterPoolConnection: async (ctx, connection) => {
        await connection.query(sql`LOAD 'auto_explain'`);
        await connection.query(sql`SET auto_explain.log_analyze=true`);
        await connection.query(sql`SET auto_explain.log_format=json`);
        await connection.query(sql`SET auto_explain.log_min_duration=0`);
        await connection.query(sql`SET auto_explain.log_timing=true`);
        await connection.query(sql`SET client_min_messages=log`);
      },
      transformRow: (ctx, query, row, fields) => {
        ctx.queryId; // $ExpectType string
        query.sql; // $ExpectType string
        fields[0].dataTypeID; // $ExpectType number
        row.foo; // $ExpectType QueryResultRowColumnType
        return row;
      }
    }
  ]
});

//
// INTERCEPTOR
// ----------------------------------------------------------------------
createPool('postgres://', {
  interceptors: []
});

createPool('postgres://', {
  interceptors: [
    ...createInterceptorPreset()
  ]
});

const interceptors = [
    createBenchmarkingInterceptor(),
    createQueryNormalizationInterceptor(),
    createFieldNameTransformationInterceptor({
        format: 'CAMEL_CASE'
    })
];

const connection = createPool('postgres://', {
    interceptors
});

connection.any(sql`
    SELECT
        id,
        full_name
    FROM person
`);

//
// TYPE PARSER
// ----------------------------------------------------------------------
const typeParser: TypeParserType<number> = {
    name: 'int8',
    parse: value => {
        // $ExpectType string
        value;
        return parseInt(value, 10);
    }
};

createPool('postgres://', {
  typeParsers: [typeParser]
});

createPool('postgres://', {
  typeParsers: [
    ...createTypeParserPreset()
  ]
});

createBigintTypeParser();
createTimestampTypeParser();
createTimestampWithTimeZoneTypeParser();

//
// RECIPES
// ----------------------------------------------------------------------
(async () => {
    await connection.query(sql`
        INSERT INTO (foo, bar, baz)
        VALUES ${sql.tupleList([
            [1, 2, 3],
            [4, 5, 6]
            ])}
    `);
})();

(async () => {
    await connection.query(sql`
        INSERT INTO (foo, bar, baz)
        SELECT *
        FROM ${sql.unnest(
            [
                [1, 2, 3],
                [4, 5, 6]
            ],
            [
                'int4',
                'int4',
                'int4'
            ]
            )}
    `);
})();

(async () => {
    const uniquePairs = [
        ['a', 1],
        ['b', 2]
      ];

      let placeholderIndex = 1;

      const whereConditionSql = uniquePairs
        .map(needleColumns => {
          return needleColumns
            .map((column) => {
              return `${column} = $${placeholderIndex++}`;
            })
            .join(' AND ');
        })
        .join(' OR ');

      const values = [];

      for (const pairValues of uniquePairs) {
        values.push(...pairValues);
      }

      const query = sql`
        SELECT
          id
        FROM foo
        WHERE
          ${sql.raw(whereConditionSql, values)}
      `;

      await connection.any(query);
})();

//
// SQL
// ----------------------------------------------------------------------
(async () => {
  // ExpectType SqlSqlTokenType
  const query0 = sql`SELECT ${'foo'} FROM bar`;
  // ExpectType SqlSqlTokenType
  const query1 = sql`SELECT ${'baz'} FROM (${query0})`;

  await connection.query(sql`
      SELECT (${sql.valueList([1, 2, 3])})
  `);

  await connection.query(sql`
      INSERT INTO (foo, bar, baz)
      VALUES ${sql.tuple([1, 2, 3])}
  `);

  await connection.query(sql`
      INSERT INTO (foo, bar, baz)
      VALUES ${sql.tupleList([
          [1, 2, 3],
          [4, 5, 6]
      ])}
  `);

  await connection.query(sql`
      SELECT bar, baz
      FROM ${sql.unnest(
          [
              [1, 'foo'],
              [2, 'bar']
          ],
          [
              'int4',
              'text'
          ]
      )} AS foo(bar, baz)
  `);

  sql`
      SELECT 1
      FROM ${sql.identifier(['bar', 'baz'])}
  `;

  sql`
      SELECT 1
      FROM ${sql.raw('"bar"')}
  `;

  sql`
      SELECT ${sql.raw('$1', [1])}
  `;
})();

//
// ERRORS
// ----------------------------------------------------------------------
new  SlonikError();
new  NotFoundError();
new  DataIntegrityError();
new  IntegrityConstraintViolationError(new Error("Foo"), "some-constraint");
new  NotNullIntegrityConstraintViolationError(new Error("Foo"), "some-constraint");
new  ForeignKeyIntegrityConstraintViolationError(new Error("Foo"), "some-constraint");
new  UniqueIntegrityConstraintViolationError(new Error("Foo"), "some-constraint");
new  CheckIntegrityConstraintViolationError(new Error("Foo"), "some-constraint");

const samplesFromDocs = async () => {
  // some samples generated by parsing the readme from slonik's github page
  // start samples from readme
  const sample1 = async () => {
    connection.query(sql`
      SELECT ${sql.identifier(['foo', 'a'])}
      FROM (
        VALUES ${sql.tupleList([['a1', 'b1', 'c1'], ['a2', 'b2', 'c2']])}
      ) foo(a, b, c)
      WHERE foo.b IN (${sql.valueList(['c1', 'a2'])})
    `);
  };

  const sample2 = async () => {
    await connection.query(sql`
      INSERT INTO (foo, bar, baz)
      VALUES ${sql.tupleList([
        [1, 2, 3],
        [4, 5, 6]
      ])}
    `);
  };

  const sample3 = async () => {
    await connection.query(sql`
      INSERT INTO (foo, bar, baz)
      SELECT *
      FROM ${sql.unnest(
        [
          [1, 2, 3],
          [4, 5, 6]
        ],
        [
          'int4',
          'int4',
          'int4'
        ]
      )}
    `);
  };

  const sample4 = async () => {
    await connection.query(sql`
      SELECT (${sql.valueList([1, 2, 3])})
    `);
  };

  const sample5 = async () => {
    await connection.query(sql`
      SELECT (${sql.array([1, 2, 3], 'int4')})
    `);
  };

  const sample6 = async () => {
    sql`SELECT id FROM foo WHERE id IN (${sql.valueList([1, 2, 3])})`;
    sql`SELECT id FROM foo WHERE id NOT IN (${sql.valueList([1, 2, 3])})`;
  };

  const sample7 = async () => {
    sql`SELECT id FROM foo WHERE id = ANY(${sql.array([1, 2, 3], 'int4')})`;
    sql`SELECT id FROM foo WHERE id != ALL(${sql.array([1, 2, 3], 'int4')})`;
  };

  const sample8 = async () => {
    await connection.query(sql`
      INSERT INTO (foo, bar, baz)
      VALUES ${sql.tuple([1, 2, 3])}
    `);
  };

  const sample9 = async () => {
    await connection.query(sql`
      INSERT INTO (foo, bar, baz)
      VALUES ${sql.tupleList([
        [1, 2, 3],
        [4, 5, 6]
      ])}
    `);
  };

  const sample10 = async () => {
    await connection.query(sql`
      SELECT bar, baz
      FROM ${sql.unnest(
        [
          [1, 'foo'],
          [2, 'bar']
        ],
        [
          'int4',
          'text'
        ]
      )} AS foo(bar, baz)
    `);
  };

  const sample11 = async () => {
    sql`
      SELECT 1
      FROM ${sql.identifier(['bar', 'baz'])}
    `;
  };

  const sample12 = async () => {
    sql`
      SELECT 1
      FROM ${sql.identifierList([
        ['bar', 'baz'],
        ['qux', 'quux']
      ])}
    `;
  };

  const sample13 = async () => {
    sql`
      SELECT 1
      FROM ${sql.identifierList([
        {
          alias: 'qux',
          identifier: ['bar', 'baz']
        },
        {
          alias: 'corge',
          identifier: ['quux', 'quuz']
        }
      ])}
    `;
  };

  const sample14 = async () => {
    sql`
      SELECT ${sql.booleanExpression([3, 4], 'AND')}
    `;
  };

  const sample15 = async () => {
    sql`
      SELECT ${sql.comparisonPredicate(3, '=', 4)}
    `;
  };

  const sample16 = async () => {
    await connection.query(sql`
      UPDATE foo
      SET ${sql.assignmentList({
        bar: 'baz',
        qux: 'quux'
      })}
    `);
  };
  // end samples from readme
};
