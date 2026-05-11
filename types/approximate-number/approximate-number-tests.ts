import approximateNumber from "approximate-number";

approximateNumber("100000"); // $ExpectType string
approximateNumber("10000", { separator: "." }); // $ExpectType string
