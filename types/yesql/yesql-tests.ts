import * as yesql from "yesql";

yesql.readSqlFiles(''); // $ExpectType string
yesql.readSqlFiles('', {pg: true}); // $ExpectType string
yesql.readSqlFiles('', {type: 'mysql'}); // $ExpectType string

yesql.pg(''); // $ExpectType (data: object) => string
yesql.pg('')({}); // $ExpectType string

yesql.pg('')('demo'); // $ExpectError
yesql.pg('')(42); // $ExpectError

yesql.mysql(''); // $ExpectType (data: object) => string
yesql.mysql('')({}); // $ExpectType string

yesql.mysql('')('demo'); // $ExpectError
yesql.mysql('')(42); // $ExpectError
