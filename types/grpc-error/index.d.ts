// Type definitions for grpc-error 1.0
// Project: https://github.com/bojand/grpc-error
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare class GRPCError extends Error {
  constructor(value: string | object);
  constructor(message: string, value: number | object);
  constructor(message: string, code: number, metadata: object);

  code: number;
  metadata: object;
}

export = GRPCError;
