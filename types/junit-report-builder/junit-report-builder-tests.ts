import * as builder from "junit-report-builder";

// $ExpectType TestSuite
const testSuite = builder
    .testSuite()
    .name(1)
    .name("test suite")
    .time(42)
    .timestamp("1970-01-01T00:00:00.000Z")
    .timestamp(Date.now())
    .timestamp(new Date())
    .property(1, "first value")
    .property("second property", 2);

// $ExpectType TestCase
testSuite
    .testCase()
    .className("TestClass")
    .name("failed test case in test suite")
    .time(42)
    .file("/path/to/test")
    .failure()
    .failure("failure reason")
    .failure("failure reason", "failure type");

// $ExpectType TestCase
testSuite
    .testCase()
    .name("erroneous test case in test suite")
    .error()
    .error("error message")
    .error("error message", "error type")
    .error("error message", "error type", "error content")
    .stacktrace("stack trace");

// $ExpectType TestCase
testSuite.testCase().name("skipped test case in test suite").skipped();

// $ExpectType TestCase
builder
    .testCase()
    .name(1)
    .name("test case outside of test suite")
    .standardOutput("output written to stdout")
    .standardError("output written to stderr")
    .errorAttachment("/path/to/attachment");

// $ExpectType string
builder.build();
// $ExpectType void
builder.writeTo("test-report.xml");

// $ExpectType JUnitReportBuilder
builder.newBuilder();
