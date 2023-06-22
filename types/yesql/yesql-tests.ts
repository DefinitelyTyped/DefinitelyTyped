import * as yesql from 'yesql';

yesql(''); // $ExpectType string
yesql('', { pg: true }); // $ExpectType string
yesql('', { type: 'mysql' }); // $ExpectType string

yesql.pg(''); // $ExpectType (params: Record<string, any>) => { text: string; values: any[]; } || (params: AnyParams) => { text: string; values: any[]; }
yesql.pg('')({}); // $ExpectType { text: string; values: any[]; }

// @ts-expect-error
yesql.pg('')('demo');
// @ts-expect-error
yesql.pg('')(42);

yesql.mysql(''); // $ExpectType (params: Record<string, any>) => { sql: string; values: any[]; } || (params: AnyParams) => { sql: string; values: any[]; }
yesql.mysql('')({}); // $ExpectType { sql: string; values: any[]; }

// @ts-expect-error
yesql.mysql('')('demo');
// @ts-expect-error
yesql.mysql('')(42);

interface QueryParams {
    id: number;
    name: string;
}

// @ts-expect-error
yesql.mysql<QueryParams>('')();
// @ts-expect-error
yesql.mysql<QueryParams>('')({ id: 'string-id' });
yesql.mysql<QueryParams>('')({ id: 123, name: 'foo' }); // $ExpectType { sql: string; values: (string | number)[]; }

yesql.pg('', { useNullForMissing: true })({}); // $ExpectType { text: string; values: any[]; }
// @ts-expect-error
yesql.pg('', { useNullForMissing: 1 })({});
