import * as types from "pg-types";

types.getTypeParser(1184, 'text');

types.setTypeParser(1184, (value) => value === null ? null : value);
types.setTypeParser(1186, 'text', (value) => value === null ? null : value);
types.setTypeParser(1186, 'binary', (value) => value.toISOString());
types.setTypeParser(1185, (value) => types.arrayParser.create(value, (x) => x).parse());

const TIMESTAMPTZ_OID = 1184;
const TIMESTAMP_OID = 1114;
types.setTypeParser(TIMESTAMPTZ_OID, parseInt);
types.setTypeParser(TIMESTAMP_OID, parseInt);
