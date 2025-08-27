import timespan = require("timespan-parser");

const u: timespan.Unit = "seconds";
// $ExpectType number
timespan.parse("1d 2h 3m 4s");
// $ExpectType number
timespan.parse("1d 2h 3m 4s", "seconds");
// @ts-expect-error
timespan.parse("1d 2h 3m 4s", "sss");

// $ExpectType string
timespan.getString(12345);
// $ExpectType string
timespan.getString(12345, "seconds");
// @ts-expect-error
timespan.getString(12345, "sss");
// $ExpectType string
timespan.getString(12345, { unit: "seconds" });
// @ts-expect-error
timespan.getString(12345, { unit: "sss" });

// $ExpectType number
timespan({ unit: "seconds" }).parse("1d 2h 3m 4s");
// @ts-expect-error
timespan({ unit: "sss" }).parse("1d 2h 3m 4s");
// $ExpectType string
timespan({ unit: "seconds" }).getString(12345);
// @ts-expect-error
timespan({ unit: "sss" }).getString(12345);
// $ExpectType number
timespan("seconds").parse("1d 2h 3m 4s");
// @ts-expect-error
timespan("sss").parse("1d 2h 3m 4s");
// $ExpectType number
timespan().parse("1d 2h 3m 4s");
// @ts-expect-error
timespan({}).timespan;
// @ts-expect-error
timespan({})();
