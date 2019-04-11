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

const VALUE = 'foo';

//
// POOL
// ----------------------------------------------------------------------
const pool = createPool('postgres://localhost');

pool.connect(async (connection) => {
    const result = await connection.query(sql`SELECT 1`);
    // $ExpectType QueryResultRowType<string>
    result;

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

    await connection.transaction(async (transactionConnection) => {
      await transactionConnection.query(sql`INSERT INTO foo (bar) VALUES ('baz')`);
      await transactionConnection.query(sql`INSERT INTO qux (quux) VALUES ('corge')`);
    });

    await connection.transaction(async (t1) => {
      await t1.query(sql`INSERT INTO foo (bar) VALUES ('baz')`);

      return t1.transaction((t2) => {
        return t2.query(sql`INSERT INTO qux (quux) VALUES ('corge')`);
      });
    });

    await connection.transaction(async (t1) => {
      await t1.query(sql`INSERT INTO foo (bar) VALUES ('baz')`);

      try {
        await t1.transaction(async (t2) => {
          await t2.query(sql`INSERT INTO qux (quux) VALUES ('corge')`);

          return Promise.reject(new Error('foo'));
        });
      } catch (error) { /* empty */ }
    });
  });
pool.query(sql`SELECT * FROM table WHERE name = '${VALUE}'`);

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
new  IntegrityConstraintViolationError();
new  NotNullIntegrityConstraintViolationError();
new  ForeignKeyIntegrityConstraintViolationError();
new  UniqueIntegrityConstraintViolationError();
new  CheckIntegrityConstraintViolationError();
