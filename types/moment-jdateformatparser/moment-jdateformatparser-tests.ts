import moment from "moment";

// $ExpectType string
moment("2013-12-24 14:30").formatWithJDF("dd.MM.yyyy");

// $ExpectType string
moment().toMomentFormatString("dd.MM.yyyy");

// $ExpectType string
moment().toJDFString("DD.MM.YYYY");
