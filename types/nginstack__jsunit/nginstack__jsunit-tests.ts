import TestSuite = require('@nginstack/jsunit/lib/TestSuite');

const suite = new TestSuite('fileId'); // $ExpectType TestSuite
const any = '*';
const arrAny = [any];

suite.key; // $ExpectType number | null
suite.version; // $ExpectType number | null
suite.filePath; // $ExpectType string
suite.name; // $ExpectType string
suite.type; // $ExpectType number

suite.getFileId(); // $ExpectType string | number
suite.getSourceEncoding(); // $ExpectType string
suite.getId(); // $ExpectType string
suite.declareTestMethods(); // $ExpectType void
suite.deleteTestMethods(); // $ExpectType void
suite.isTestCase(any); // $ExpectType boolean
suite.getTests(); // $ExpectType any[]
suite.getTestByName(any); // $ExpectType any
suite.update(); // $ExpectType void
suite.setUp(); // $ExpectType void
suite.tearDown(); // $ExpectType void
suite.fail(''); // $ExpectType never
suite.failEquals(any, any, any); // $ExpectType void
suite.failNotEquals(any, any, any); // $ExpectType void
suite.check(any, any); // $ExpectType void
suite.checkEquals(any, any, any); // $ExpectType void
suite.checkNotEquals(any, any, any); // $ExpectType void
suite.checkEqualNumbers(any, any, any, any); // $ExpectType void
suite.checkNotEqualNumbers(any, any, any, any); // $ExpectType void
suite.removeTime(any); // $ExpectType Date
suite.checkEqualDates(any, any, any); // $ExpectType void
suite.checkNotEqualDates(any, any, any); // $ExpectType void
suite.checkEqualDateTimes(any, any, any); // $ExpectType void
suite.checkNotEqualDateTimes(any, any, any); // $ExpectType void
suite.isEqualArrays(any, any); // $ExpectType boolean
suite.checkEqualArrays(any, any, any); // $ExpectType void
suite.checkNotEqualArrays(any, any, any); // $ExpectType void
suite.assert(any, any, arrAny); // $ExpectType void
suite.assertTrue(arrAny); // $ExpectType void
suite.assertFalse(arrAny); // $ExpectType void
suite.assertEquals(arrAny); // $ExpectType void
suite.assertNotEquals(arrAny); // $ExpectType void
suite.assertNull(arrAny); // $ExpectType void
suite.assertNotNull(arrAny); // $ExpectType void
suite.assertUndefined(arrAny); // $ExpectType void
suite.assertNotUndefined(arrAny); // $ExpectType void
suite.assertNan(arrAny); // $ExpectType void
suite.assertNotNan(arrAny); // $ExpectType void

function testMajorVersions(prior: number, current: number): boolean {
    return current > prior;
}
testMajorVersions(64, 65); // $ExpectType boolean
