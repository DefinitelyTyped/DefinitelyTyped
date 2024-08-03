import isurl = require("isurl");

// Test basic usage
const result1: boolean = isurl("https://example.com");
const result2: boolean = isurl(new URL("https://example.com"));

// Test with supportIncomplete parameter
const result3: boolean = isurl("https://example.com", true);

// Test lenient method
const result4: boolean = isurl.lenient("https://example.com");

// Test with invalid input
const result5: boolean = isurl(123);
const result6: boolean = isurl.lenient(123);
