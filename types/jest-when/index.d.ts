// Type definitions for jest-when 1.1
// Project: https://github.com/timkindberg/jest-when#readme
// Definitions by: Alden Taylor <https://github.com/aldentaylor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="jest" />

export type PartialMockInstance<T, Y extends any[]> = Pick<jest.MockInstance<T, Y>, 'mockReturnValue' | 'mockReturnValueOnce' | 'mockResolvedValue'
  | 'mockResolvedValueOnce' | 'mockRejectedValue' | 'mockRejectedValueOnce'>;

export interface When<T = {}, Y extends any[] = any> {
  (fn: jest.Mock<T, Y>): When<T, Y>;
  calledWith(...matchers: Y): PartialMockInstance<T, Y>;
  expectCalledWith(...matchers: Y): PartialMockInstance<T, Y>;
}

export const when: When;
