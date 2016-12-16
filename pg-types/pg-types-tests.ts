/// <reference types="moment" />
import * as types from "pg-types";
import * as moment from "moment";

types.getTypeParser(1184, 'text');

types.setTypeParser(1184, (value) => value === null ? null : value);
types.setTypeParser(1186, 'text', (value) => value === null ? null : value);
types.setTypeParser(1186, 'binary', (value) => value.toISOString());
types.setTypeParser(1185, (value) => types.arrayParser.create(value, (x) => x).parse());

var TIMESTAMPTZ_OID = 1184
var TIMESTAMP_OID = 1114
var parseFn = function(val: any) {
   return val === null ? null : moment(val)
}
types.setTypeParser(TIMESTAMPTZ_OID, parseFn)
types.setTypeParser(TIMESTAMP_OID, parseFn)
