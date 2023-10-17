declare namespace builder {
    interface JUnitReportBuilder {
        /**
         * Writes report to disk synchronously
         */
        writeTo(reportPath: string): void;
        /**
         * Returns report as string
         */
        build(): string;
        /**
         * Adds a test suite to the report
         */
        testSuite(): TestSuite;
        /**
         * Adds a test case outside of any test suite to the report
         */
        testCase(): TestCase;
        /**
         * Creates a new builder for a separate report
         */
        newBuilder(): JUnitReportBuilder;
    }

    interface TestSuite {
        /**
         * Sets the label of the test suite
         */
        name(name: string | number): TestSuite;
        /**
         * Sets the elapsed time for all test cases within the test suite
         */
        time(timeInSeconds: number): TestSuite;
        /**
         * Sets the timestamp denoting the start of the test suite
         */
        timestamp(timestamp: string | number | Date): TestSuite;
        /**
         * Adds a custom property to the test suite
         */
        property(name: string | number, value: string | number): TestSuite;
        /**
         * Adds a test case to the test suite
         */
        testCase(): TestCase;
    }

    interface TestCase {
        /**
         * Adds the class name associated with the test case
         */
        className(className: string): TestCase;
        /**
         * Sets the label of the test case
         */
        name(name: string | number): TestCase;
        /**
         * Sets the elapsed time for the test case
         */
        time(timeInSeconds: number): TestCase;
        /**
         * Adds the path to the file associated with the test case
         */
        file(filePath: string): TestCase;
        /**
         * Marks the test case as a failure
         */
        failure(message?: string, type?: string): TestCase;
        /**
         * Marks the test case as erroneous
         */
        error(message?: string, type?: string, content?: string): TestCase;
        /**
         * Adds the stack trace associated with test case failure or error
         */
        stacktrace(stackTrace: string): TestCase;
        /**
         * Marks the test case as skipped
         */
        skipped(): TestCase;
        /**
         * Adds the text written to stdout during test case execution
         */
        standardOutput(log: string): TestCase;
        /**
         * Adds the text written to stderr during test case execution
         */
        standardError(log: string): TestCase;
        /**
         * Adds the path to an attachment associated with test case failure or error
         */
        errorAttachment(filePath: string): TestCase;
    }
}

declare const builder: builder.JUnitReportBuilder;

export = builder;
