// Type definitions for jest-when 3.5
// Project: https://github.com/timkindberg/jest-when#readme
// Definitions by: Alden Taylor <https://github.com/aldentaylor>
//                 Trung Dang <https://github.com/immanuel192>
//                 Gregor Stamać <https://github.com/gstamac>
//                 Nicholas Hehr <https://github.com/hipsterbrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

/// <reference types="jest" />

export type ArgumentOrMatcher<ArgTypes extends any[]> = {
    [Index in keyof ArgTypes]: ArgTypes[Index] | WhenMock<boolean, [ArgTypes[Index]]>;
};

export interface WhenMock<T = any, Y extends any[] = any> extends jest.MockInstance<T, Y> {
    calledWith(allArgsMatcher: AllArgsMatcher<Y>): this;
    calledWith(...matchers: ArgumentOrMatcher<Y>): this;
    expectCalledWith(allArgsMatcher: AllArgsMatcher<Y>): this;
    expectCalledWith(...matchers: ArgumentOrMatcher<Y>): this;
    mockReturnValue(value: T): this;
    mockReturnValueOnce(value: T): this;
    mockResolvedValue(value: jest.ResolvedValue<T>): this;
    mockResolvedValueOnce(value: jest.ResolvedValue<T>): this;
    mockRejectedValue(value: jest.RejectedValue<T>): this;
    mockRejectedValueOnce(value: jest.RejectedValue<T>): this;
    mockImplementation(fn: (...args: Y) => T): this;
    mockImplementationOnce(fn?: (...args: Y) => T): this;
    defaultReturnValue(value: T): this;
    defaultResolvedValue(value: jest.ResolvedValue<T>): this;
    defaultRejectedValue(value: jest.RejectedValue<T>): this;
    defaultImplementation(fn: (...args: Y) => T): this;
}

export interface AllArgsMatcher<Y> {
    (args: Y, equals: jest.MatcherUtils['equals']): boolean;
    // Internal, but needed to distinguish from normal callables
    _isAllArgsFunctionMatcher: true;
    _isFunctionMatcher: true;
}

export interface When {
    <T, Y extends any[]>(fn: ((...args: Y) => T) | jest.MockInstance<T, Y>): WhenMock<T, Y>;

    allArgs<Y extends any[]>(matcher: (args: Y, equals: jest.MatcherUtils['equals']) => boolean): AllArgsMatcher<Y>;
}

export const when: When;
export function resetAllWhenMocks(): void;
export function verifyAllWhenMocksCalled(): void;
