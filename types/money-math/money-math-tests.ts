import * as money from 'money-math';

money.add("16.11", "17.07");        // "33.18"
money.subtract("16.00", "7.00");    // "9.00"
money.mul("24.00", "0.25");         // "6.00"
money.div("64.00", "2.00");         // "32.00"
money.percent("200.00", "3.25");    // "6.50"
money.cmp("100.00", "200.00");      // -1
money.isEqual("100.00", "100.00");  // true
money.isZero("0.00");               // true
money.isNegative("-1.00");          // true
money.isPositive("-1.00");          // false

money.format("JPY", "236800.00");   // "236,800"
money.floatToAmount(56.345);        // "56.35"

money.roundUpTo5Cents("42.02");     // "42.05"
money.roundTo5Cents("442.26");      // "442.25"
