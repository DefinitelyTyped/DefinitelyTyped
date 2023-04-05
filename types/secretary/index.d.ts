// Type definitions for secretary 0.1.0
// Project: https://www.npmjs.com/package/secretary
// Definitions by: Mohtasim Alam Sohom <https://github.com/Sohom829>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Engine {
    minFlag: number;
    maxFlag: number;
    minRunningFlag: number;
    maxRunningFlag: number;
  
    process(args: [string, ...any[]]): string;
    isValidFlag(flag: number): boolean;
    setMinFlag(flag: number): void;
    setMaxFlag(flag: number): void;
  }
  
  export function flag(flag: number): typeof import(".");
  export function log(...args: any[]): void;
  export function configure(config: {
    minFlag?: number;
    maxFlag?: number;
    minRunningFlag?: number;
    maxRunningFlag?: number;
  }): void;
  
  declare const _default: {
    Engine: typeof Engine;
    flag: typeof flag;
    log: typeof log;
    configure: typeof configure;
  };
  
  export default _default;
  