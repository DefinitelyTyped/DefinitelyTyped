import nbd = require("next-biz-date");
import moment = require("moment");

const holidays = ["2020-12-17", "2020-12-25", "2020-12-28", "2021-01-01", "2021-01-04"];

nbd.FindNextBizDate("2020-12-24", holidays); // $ExpectType Moment
nbd.FindNextBizDate("2020-12-24", holidays, 1); // $ExpectType Moment
nbd.FindNextBizDate("2020-12-24", holidays, 1, "FORWARD"); // $ExpectType Moment
nbd.FindBizDate(moment("2020-12-24"), holidays); // $ExpectType Moment
nbd.FindBizDate(moment("2020-12-24"), holidays, "BACKWARDS"); // $ExpectType Moment
