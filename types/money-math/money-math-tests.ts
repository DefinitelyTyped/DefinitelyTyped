import money = require("money-math");

money.add("16.11", "17.07"); // $ExpectType string
money.subtract("16.00", "7.00"); // $ExpectType string
money.mul("24.00", "0.25"); // $ExpectType string
money.div("64.00", "2.00"); // $ExpectType string
money.percent("200.00", "3.25"); // $ExpectType string
money.cmp("100.00", "200.00"); // $ExpectType number
money.isEqual("100.00", "100.00"); // $ExpectType boolean
money.isZero("0.00"); // $ExpectType boolean
money.isNegative("-1.00"); // $ExpectType boolean
money.isPositive("-1.00"); // $ExpectType boolean

money.format("JPY", "236800.00"); // $ExpectType string
money.floatToAmount(56.345); // $ExpectType string

money.roundUpTo5Cents("42.02"); // $ExpectType string
money.roundTo5Cents("442.26"); // $ExpectType string

money.integralPart("-55.10"); // $ExpectType string
money.amountToCents("126.99"); // $ExpectType string
money.centsToAmount("10"); // $ExpectType string
