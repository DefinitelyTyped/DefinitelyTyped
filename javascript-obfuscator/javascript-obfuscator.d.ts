// Type definitions for javascript-obfuscator
// Project: https://github.com/sanex3339/javascript-obfuscator
// Definitions by: sanex3339 <https://github.com/sanex3339>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'javascript-obfuscator' {
  export interface IOptions {
    compact?: boolean;
    debugProtection?: boolean;
    debugProtectionInterval?: boolean;
    disableConsoleOutput?: boolean;
    rotateUnicodeArray?: boolean;
    wrapUnicodeArrayCalls?: boolean;
  }

  export class JavaScriptObfuscator {
    public static obfuscate (sourceCode: string, customOptions?: IOptions): string;
  }
}