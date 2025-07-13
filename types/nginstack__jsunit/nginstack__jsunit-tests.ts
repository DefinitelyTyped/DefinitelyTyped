import TestSuite = require("@nginstack/jsunit/lib/TestSuite");

const suite = new TestSuite("fileId"); // $ExpectType TestSuite

suite.version; // $ExpectType number
suite.filePath; // $ExpectType string
suite.name; // $ExpectType string
suite.fileId; // $ExpectType string | number
suite.fileEncoding; // $ExpectType string
suite.id; // $ExpectType string
suite.testCases; // $ExpectType TestCase[]

suite.getTestCase("*"); // $ExpectType TestCase
suite.update(); // $ExpectType void
suite.setUp(); // $ExpectType void
suite.tearDown(); // $ExpectType void

function getVersion(): string {
    return "72.0.1";
}
getVersion(); // $ExpectType string
