// Type definitions for jest-when 1.1
// Project: https://github.com/timkindberg/jest-when#readme
// Definitions by: Alden Taylor <https://github.com/aldentaylor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jest" />

export interface PartialMockInstance<T> {
  mockReturnValue: jest.MockInstance<T>['mockReturnValue'];
}

export interface When {
  <T>(fn: jest.Mocked<T> | jest.Mock<T>): When;
  // due to no-unnecessary-generics lint rule, the generics have been replaced with 'any'
  // calledWith<T>(...matchers: any[]): PartialMockInstance<T>;
  // expectCalledWith<T>(...matchers: any[]): PartialMockInstance<T>;
  calledWith(...matchers: any[]): PartialMockInstance<any>;
  expectCalledWith(...matchers: any[]): PartialMockInstance<any>;
}

export const when: When;
