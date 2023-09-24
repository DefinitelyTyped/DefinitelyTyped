import parseDecimalNumber = require("parse-decimal-number");

parseDecimalNumber("12,345,678.90"); // $ExpectType number

parseDecimalNumber("12.345.678,90", ".,"); // $ExpectType number
parseDecimalNumber("12.345.678,90", [".", ","]); // $ExpectType number
parseDecimalNumber("12.345.678,90", { thousands: ".", decimal: "," }); // $ExpectType number

parseDecimalNumber("12.345.678,90", ".,", true); // $ExpectType number

parseDecimalNumber.factoryReset(); // $ExpectType void

parseDecimalNumber.setOptions({ thousands: ".", decimal: "," }); // $ExpectType void

parseDecimalNumber.withOptions({ thousands: ".", decimal: "," })("12.345.678,90"); // $ExpectType number
parseDecimalNumber.withOptions({ thousands: ".", decimal: "," }, true)("12.345.678,90"); // $ExpectType number
