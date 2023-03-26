// Type definitions for remask
// Project: https://github.com/brunobertolini/remask
// Definitions by: Felipe Miiller <https://github.com/FelipeMiiller>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'remask' {
    export function mask(value: string, pattern: string): string;
    export function unmask(value: string): string;
  }
