// $ExpectType Promise<string | null>
Catchpoint.username("testUsername");

// $ExpectType Promise<string | null>
Catchpoint.password("testPassword");

// $ExpectType Promise<void>
Catchpoint.startStep("Test Step");

// $ExpectType Promise<void>
Catchpoint.startStep("Test Step", [false]);

// $ExpectType Promise<void>
Catchpoint.storeGlobalVariable("testValue", "testName");

// $ExpectType Promise<void>
Catchpoint.setTracepoint("insightToken", "insightValue");

// $ExpectType Promise<void>
Catchpoint.setIndicator("insightToken", "insightValue");
