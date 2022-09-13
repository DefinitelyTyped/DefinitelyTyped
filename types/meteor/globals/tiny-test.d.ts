declare interface ILengthAble {
    length: number;
}

declare interface ITinytestAssertions {
    ok(doc: Object): void;
    expect_fail(): void;
    fail(doc: Object): void;
    runId(): string;
    equal<T>(actual: T, expected: T, message?: string, not?: boolean): void;
    notEqual<T>(actual: T, expected: T, message?: string): void;
    instanceOf(obj: Object, klass: Function, message?: string): void;
    notInstanceOf(obj: Object, klass: Function, message?: string): void;
    matches(actual: any, regexp: RegExp, message?: string): void;
    notMatches(actual: any, regexp: RegExp, message?: string): void;
    throws(f: Function, expected?: string | RegExp): void;
    isTrue(v: boolean, msg?: string): void;
    isFalse(v: boolean, msg?: string): void;
    isNull(v: any, msg?: string): void;
    isNotNull(v: any, msg?: string): void;
    isUndefined(v: any, msg?: string): void;
    isNotUndefined(v: any, msg?: string): void;
    isNan(v: any, msg?: string): void;
    isNotNan(v: any, msg?: string): void;
    include<T>(s: Array<T> | Object | string, value: any, msg?: string, not?: boolean): void;

    notInclude<T>(s: Array<T> | Object | string, value: any, msg?: string, not?: boolean): void;
    length(obj: ILengthAble, expected_length: number, msg?: string): void;
    _stringEqual(actual: string, expected: string, msg?: string): void;
}

declare namespace Tinytest {
    function add(description: string, func: (test: ITinytestAssertions) => void): void;

    function addAsync(description: string, func: (test: ITinytestAssertions) => void): void;
}
