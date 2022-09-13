// Type definitions for fill-pdf v0.5.0
// Project: https://github.com/dommmel/fill-pdf
// Definitions by: Seth Westphal <https://github.com/westy92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'fill-pdf' {

  export interface FormData {
    [name: string]: string;
  }

  export function generatePdf(data: FormData, templatePath: string, extendArgs: string[], callback?: (err: Error, output: Buffer) => void): void;
  export function generateFdf(data: FormData): Buffer;
}
