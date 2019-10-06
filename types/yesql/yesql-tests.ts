import * as yesql from 'yesql';

yesql(''); // $ExpectType Record<string, string> & Record<never, PgPreparedStatementFactory | MySqlPreparedStatementFactory>
yesql('', { pg: true }); // $ExpectType Record<string, string> & Record<never, PgPreparedStatementFactory | MySqlPreparedStatementFactory>
yesql('', { type: 'mysql' }); // $ExpectType Record<string, string> & Record<never, PgPreparedStatementFactory | MySqlPreparedStatementFactory>

yesql.pg(''); // $ExpectType PgPreparedStatementFactory | PgPreparedStatementFactoryGeneric<Record<string, any>>
yesql.pg('')({}); // $ExpectType PgPreparedStatement<Record<string, any>> | PgPreparedStatement<{}>

yesql.pg('')('demo'); // $ExpectError
yesql.pg('')(42); // $ExpectError

yesql.mysql(''); // $ExpectType MySqlPreparedStatementFactory | MySqlPreparedStatementFactoryGeneric<Record<string, any>>
yesql.mysql('')({}); // $ExpectType MySqlPreparedStatement<Record<string, any>> | MySqlPreparedStatement<{}>

yesql.mysql('')('demo'); // $ExpectError
yesql.mysql('')(42); // $ExpectError

interface QueryParams {
    id: number;
    name: string;
}

yesql.mysql<QueryParams>('')(); // $ExpectError
yesql.mysql<QueryParams>('')({ id: 'string-id' }); // $ExpectError
yesql.mysql<QueryParams>('')({ id: 123, name: 'foo' }); // $ExpectType MySqlPreparedStatement<QueryParams> | MySqlPreparedStatement<{ id: number; name: string; }>

const queries = yesql<'mysql', 'foo' | 'bar'>('', { type: 'mysql' });
queries.foo({});
queries.foo<{ name: string }>({ name: '' });

yesql.mysql<{ name: string }>('')({ name: '' });

yesql.pg('')<{ name: string }>({ name: '' });
