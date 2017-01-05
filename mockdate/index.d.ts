// Type definitions for mockdate
// Project: https://www.npmjs.com/package/mockdate
// Definitions by: Bruno Leonardo Michels <https://github.com/brunolm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "mockdate" {
    export default MockDate;
}

declare var MockDate: MockDateStatic;

interface MockDateStatic {
    /**
     * Change the Date implementation to mock a specific date.
     * @param Date to be set as current
     * @param timezoneOffset? The value that should be returned by new Date().getTimezoneOffset()
     */
    set: (date: ObjectValueOf | number | string, timezoneOffset?: number) => void;

    /**
     * Restore the original Date object back to the native implementation.
     */
    reset: () => void;
}

interface ObjectValueOf {
    valueOf: () => number;
}
