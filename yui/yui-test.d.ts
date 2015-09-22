// Type definitions for yui 3.14.0
// Project: https://github.com/yui/yui3/blob/release-3.14.0/src/test/js
// Definitions by: Gia Bảo @ Sân Đình <https://github.com/giabao>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module YUITest {
    interface YUITestStatic{
        Assert: IAssert
        Case: TestCase
        Runner: TestRunner
    }

    interface EventTarget{
        attach(type: string, listener: Function): void
        subscribe(type: string, listener: Function): void
        fire(event: Object): void
        fire(event: string): void
        detach(type: string, listener: Function): void
        unsubscribe(type: string, listener: Function): void
    }

    interface TestRunner extends EventTarget{
        TEST_CASE_BEGIN_EVENT: string
        TEST_CASE_COMPLETE_EVENT: string
        TEST_SUITE_BEGIN_EVENT: string
        TEST_SUITE_COMPLETE_EVENT: string
        TEST_PASS_EVENT: string
        TEST_FAIL_EVENT: string
        ERROR_EVENT: string
        TEST_IGNORE_EVENT: string
        COMPLETE_EVENT: string
        BEGIN_EVENT: string

        getName(): string
        setName(name: string): void

        add(testObject: TestSuite): void
        add(testObject: TestCase): void

        clear(): void
        isWaiting(): boolean
        isRunning(): boolean

        getResults(format?: Function): any //Object|String
        getCoverage(format?: Function): any //Object|String
        callback(...args: any[]): Function
        resume(segment?: Function): void
        run(options?: Object): void
        run(options?: boolean): void
    }

    interface TestSuite{
        name: string
//        items: any[] //Array of test suites and test cases. @private
        add(testObject: TestSuite): void
        add(testObject: TestCase): void
        setUp(): void
        tearDown(): void
    }

    interface TestCase{
        new (template: Object): TestCase
        DEFAULT_WAIT: number
        callback(...args: any[]): Function
        resume(segment?: Function): void
        wait(segment?: Function, delay?: number): void
        waitFor(condition: Function, segment: Function, timeout?: number, increment?: number): void
        assert(condition: boolean, message: string): void
        fail(message?: string): void
        init(): void
        destroy(): void
        setUp(): void
        tearDown(): void
    }

    interface IAssert{
        fail(message?: string): void
        pass(message?: string): void
        areEqual(expected: Object, actual: Object, message?: string): void
        areNotEqual(unexpected: Object, actual: Object, message?: string): void
        areNotSame(unexpected: Object, actual: Object, message?: string): void
        areSame(expected: Object, actual: Object, message?: string): void
        isFalse(actual: Object, message?: string): void
        isTrue(actual: Object, message?: string): void
        isNaN(actual: Object, message?: string): void
        isNotNaN(actual: Object, message?: string): void
        isNotNull(actual: Object, message?: string): void
        isNotUndefined(actual: Object, message?: string): void
        isNull(actual: Object, message?: string): void
        isUndefined(actual: Object, message?: string): void
        isArray(actual: Object, message?: string): void
        isBoolean(actual: Object, message?: string): void
        isFunction(actual: Object, message?: string): void
        isInstanceOf(expected: Function, actual: Object, message?: string): void
        isNumber(actual: Object, message?: string): void
        isObject(actual: Object, message?: string): void
        isString(actual: Object, message?: string): void
        isTypeOf(expectedType: string, actualValue: Object, message?: string): void

        throwsError(expectedError: string, method: Object, message?: string): void
        throwsError(expectedError: Function, method: Object, message?: string): void
        throwsError(expectedError: Object, method: Object, message?: string): void
    }
}
