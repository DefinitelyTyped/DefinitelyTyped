import * as yesql from 'yesql';

yesql(''); // $ExpectType string
yesql('', { pg: true }); // $ExpectType string
yesql('', { type: 'mysql' }); // $ExpectType string

yesql.pg(''); // $ExpectType (params: Record<string, any>) => { text: string; values: any[]; }
yesql.pg('')({}); // $ExpectType { text: string; values: any[]; }

yesql.pg('')('demo'); // $ExpectError
yesql.pg('')(42); // $ExpectError

yesql.mysql(''); // $ExpectType (params: Record<string, any>) => { sql: string; values: any[]; }
yesql.mysql('')({}); // $ExpectType { sql: string; values: any[]; }

yesql.mysql('')('demo'); // $ExpectError
yesql.mysql('')(42); // $ExpectError

interface QueryParams {
    id: number;
    name: string;
}

yesql.mysql<QueryParams>('')(); // $ExpectError
yesql.mysql<QueryParams>('')({ id: 'string-id' }); // $ExpectError
yesql.mysql<QueryParams>('')({ id: 123, name: 'foo' }); // $ExpectType { sql: string; values: (string | number)[]; }

yesql.pg('', { useNullForMissing: true })({}); // $ExpectType { text: string; values: any[]; }
yesql.pg('', { useNullForMissing: 1 })({}); // $ExpectError
