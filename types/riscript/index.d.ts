
// Type definitions for riscript 1.0
// Project: https://github.com/dhowe/riscript
// Definitions by: Daniel C Howe <https://github.com/dhowe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class RiScript {
  static VERSION: string;
  static evaluate(script: string, context?: object, options?: object): string;
  
  constructor(opts?: {});
  evaluate(script: string, context?: object, options?: object): string;
  addTransform(name: string, def: any): RiScript;
  getTransforms(): string[];
  removeTransform(name: string): RiScript;
}