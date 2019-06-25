// Type definitions for jest-when 2.4
// Project: https://github.com/timkindberg/jest-when#readme
// Definitions by: Alden Taylor <https://github.com/aldentaylor>
//                 Trung Dang <https://github.com/immanuel192>
//                 Gregor Stamać <https://github.com/gstamac>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="jest" />

export interface WhenMock<T = any, Y extends any[] = any> extends jest.MockInstance<T, Y> {
  calledWith(...matchers: Y): this;
  expectCalledWith(...matchers: Y): this;
  mockReturnValue(value: T): this;
  mockReturnValueOnce(value: T): this;
  mockResolvedValue(value: jest.ResolvedValue<T>): this;
  mockResolvedValueOnce(value: jest.ResolvedValue<T>): this;
  mockRejectedValue(value: jest.RejectedValue<T>): this;
  mockRejectedValueOnce(value: jest.RejectedValue<T>): this;
  mockImplementation(fn: (...args: Y) => T): this;
  mockImplementationOnce(fn?: (...args: Y) => T): this;
}

export type When = <T, Y extends any[]>(fn: jest.MockInstance<T, Y>) => WhenMock<T, Y>;

export const when: When;
