import format from "tz-format";

// $ExpectType string
format();
// $ExpectType string
format(1);
// $ExpectType string
format(new Date());
// $ExpectType string
format(new Date(), 1);
