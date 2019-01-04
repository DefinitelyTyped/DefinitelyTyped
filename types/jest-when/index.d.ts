// Type definitions for jest-when 1.1
// Project: https://github.com/timkindberg/jest-when#readme
// Definitions by: Alden Taylor <https://github.com/aldentaylor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jest" />

export interface When {
  <T>(fn: jest.Mocked<T> | jest.Mock<T>): When;

  // due to no-unnecessary-generics lint rule, the generics have been replaced with 'any'
  // calledWith<T>(...matchers: any[]): PartialMockInstance<T>;
  // expectCalledWith<T>(...matchers: any[]): PartialMockInstance<T>;
  calledWith(...matchers: any[]): When;

  expectCalledWith(...matchers: any[]): When;

  mockReturnValue: (value: any) => jest.MockInstance<any>['mockReturnValue'] & When;
  mockReturnValueOnce: (value: any) => jest.MockInstance<any>['mockReturnValue'] & When;
  mockResolvedValue: (value: any) => jest.MockInstance<any>['mockReturnValue'] & When;
  mockResolvedValueOnce: (value: any) => jest.MockInstance<any>['mockReturnValue'] & When;
  mockRejectedValue: (value: any) => jest.MockInstance<any>['mockReturnValue'] & When;
  mockRejectedValueOnce: (value: any) => jest.MockInstance<any>['mockReturnValue'] & When;
}

export const when: When;
