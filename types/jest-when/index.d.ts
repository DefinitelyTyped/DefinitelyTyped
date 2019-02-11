// Type definitions for jest-when 1.1
// Project: https://github.com/timkindberg/jest-when#readme
// Definitions by: Alden Taylor <https://github.com/aldentaylor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="jest" />

export interface WhenMockInstance<F extends jest.Mockable> extends jest.MockInstance<F> {
  calledWith(...matchers: jest.ArgsType<F>): WhenMock<F>;
  expectCalledWith(...matchers: jest.ArgsType<F>): WhenMock<F>;
  mockReturnValue(value: jest.RetType<F>): WhenMock<F>;
  mockReturnValueOnce(value: jest.RetType<F>): WhenMock<F>;
  mockResolvedValue(value: jest.ResolvedValue<jest.RetType<F>>): WhenMock<F>;
  mockResolvedValueOnce(value: jest.ResolvedValue<jest.RetType<F>>): WhenMock<F>;
  mockRejectedValue(value: jest.RejectedValue<jest.RetType<F>>): WhenMock<F>;
  mockRejectedValueOnce(value: jest.RejectedValue<jest.RetType<F>>): WhenMock<F>;
}

export type WhenMock<F extends jest.Mockable> = F & WhenMockInstance<F>;

export type When = <F extends jest.Mockable>(fn: jest.Mock<F>) => WhenMock<F>;

export const when: When;
