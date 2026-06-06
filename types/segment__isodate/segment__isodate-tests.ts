import isodate = require("@segment/isodate");

isodate.parse("2013-09-04T00:57:26.434Z"); // $ExpectType Date
isodate.is("2013-09-04T00:57:26.434Z"); // $ExpectType boolean
isodate.is("string"); // $ExpectType boolean
isodate.is("string", true); // $ExpectType boolean
