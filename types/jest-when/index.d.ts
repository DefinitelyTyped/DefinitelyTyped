// Type definitions for jest-when 3.5
// Project: https://github.com/timkindberg/jest-when#readme
// Definitions by: Alden Taylor <https://github.com/aldentaylor>
//                 Trung Dang <https://github.com/immanuel192>
//                 Gregor Stamać <https://github.com/gstamac>
//                 Nicholas Hehr <https://github.com/hipsterbrown>
//                 Bogi Napoleon Wennerström <https://github.com/boginw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

/// <reference types="jest" />

export type ArgumentOrMatcher<ArgTypes extends any[]> = {
    [Index in keyof ArgTypes]: ArgTypes[Index] | WhenMock<boolean, [ArgTypes[Index]]>;
};

export interface WhenMock<T = any, Y extends any[] = any> {
    calledWith(allArgsMatcher: AllArgsMatcher<Y>): WhenMockWithMatchers<T, Y>;
    calledWith(...matchers: ArgumentOrMatcher<Y>): WhenMockWithMatchers<T, Y>;
    expectCalledWith(allArgsMatcher: AllArgsMatcher<Y>): WhenMockWithMatchers<T, Y>;
    expectCalledWith(...matchers: ArgumentOrMatcher<Y>): WhenMockWithMatchers<T, Y>;
    mockReturnValue(value: T): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
    mockResolvedValue(value: jest.ResolvedValue<T>): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
    mockRejectedValue(value: jest.RejectedValue<T>): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
    mockImplementation(fn: (...args: Y) => T): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
    defaultReturnValue(value: T): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
    defaultResolvedValue(value: jest.ResolvedValue<T>): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
    defaultRejectedValue(value: jest.RejectedValue<T>): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
    defaultImplementation(fn: (...args: Y) => T): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
    resetWhenMocks(): void;
}

export interface WhenMockWithMatchers<T = any, Y extends any[] = any> {
    mockReturnValue(value: T): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
    mockReturnValueOnce(value: T): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
    mockResolvedValue(value: jest.ResolvedValue<T>): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
    mockResolvedValueOnce(value: jest.ResolvedValue<T>): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
    mockRejectedValue(value: jest.RejectedValue<T>): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
    mockRejectedValueOnce(value: jest.RejectedValue<T>): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
    mockImplementation(fn: (...args: Y) => T): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
    mockImplementationOnce(fn?: (...args: Y) => T): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
    defaultImplementation(fn: (...args: Y) => T): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
    defaultReturnValue(value: T): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
    defaultResolvedValue(value: jest.ResolvedValue<T>): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
    defaultRejectedValue(value: jest.RejectedValue<T>): WhenMockWithMatchers<T, Y> & WhenMock<T, Y>;
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
