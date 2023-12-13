
// Type definitions for riscript 1.0
// Project: https://github.com/dhowe/riscript
// Definitions by: Daniel C Howe <https://github.com/dhowe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class RiScript {
  constructor(options?: object);
  static evaluate(script: string, context?: object, opts?: object): string;
  evaluate(script: string, context?: object, opts?: object): string;
}