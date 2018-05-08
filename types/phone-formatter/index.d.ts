// Type definitions for phone-formatter v0.0.2
// Project: https://github.com/stevekinney/node-phone-formatter
// Definitions by: Seth Westphal <https://github.com/westy92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'phone-formatter' {

  export interface FormatOptions {
    normalize: boolean;
  }

  export function normalize(digits: string): string;
  export function format(digits: string, format: string, options?: FormatOptions): string;
}
