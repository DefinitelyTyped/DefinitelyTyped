import * as yesql from "yesql";

yesql(''); // $ExpectType string
yesql('', {pg: true}); // $ExpectType string
yesql('', {type: 'mysql'}); // $ExpectType string

yesql.pg(''); // $ExpectType (data: object) => { text: string; values: any[]; }
yesql.pg('')({}); // $ExpectType { text: string; values: any[]; }

yesql.pg('')('demo'); // $ExpectError
yesql.pg('')(42); // $ExpectError

yesql.mysql(''); // $ExpectType (data: object) => { sql: string; values: any[]; }
yesql.mysql('')({}); // $ExpectType { sql: string; values: any[]; }

yesql.mysql('')('demo'); // $ExpectError
yesql.mysql('')(42); // $ExpectError
