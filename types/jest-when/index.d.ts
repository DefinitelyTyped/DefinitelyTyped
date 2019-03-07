// Type definitions for jest-when 1.1
// Project: https://github.com/timkindberg/jest-when#readme
// Definitions by: Alden Taylor <https://github.com/aldentaylor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="jest" />

export interface WhenMock<T = any, Y extends any[] = any> extends jest.Mock<T, Y> {
  calledWith(...matchers: Y): WhenMock<T, Y>;
  expectCalledWith(...matchers: Y): WhenMock<T, Y>;
  mockReturnValue(value: T): WhenMock<T, Y>;
  mockReturnValueOnce(value: T): WhenMock<T, Y>;
  mockResolvedValue(value: jest.ResolvedValue<T>): WhenMock<T, Y>;
  mockResolvedValueOnce(value: jest.ResolvedValue<T>): WhenMock<T, Y>;
  mockRejectedValue(value: jest.RejectedValue<T>): WhenMock<T, Y>;
  mockRejectedValueOnce(value: jest.RejectedValue<T>): WhenMock<T, Y>;
}

export type When = <T, Y extends any[]>(fn: jest.Mock<T, Y>) => WhenMock<T, Y>;

export const when: When;
