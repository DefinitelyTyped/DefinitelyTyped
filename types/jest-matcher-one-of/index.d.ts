/// <reference types="jest" />
declare namespace jest {
    interface Matchers<R, T> {
        toBeOneOf(expected: any[]): R;
    }
}
