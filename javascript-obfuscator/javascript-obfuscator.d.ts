// Type definitions for javascript-obfuscator
// Project: https://github.com/sanex3339/javascript-obfuscator
// Definitions by: sanex3339 <https://github.com/sanex3339>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'javascript-obfuscator' {
  export class JavaScriptObfuscator {
    public static obfuscate (sourceCode: string, customOptions?: any): string;
  }
}