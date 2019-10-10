// Type definitions for cypress-cucumber-preprocessor 1.12
// Project: https://github.com/TheBrainFamily/cypress-cucumber-preprocessor
// Definitions by: Alec Brunelle <https://github.com/aleccool213>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default function preprocessor(options?: any): (file: any) => Promise<string>;

/**
 * @returns NodeJS.ReadableStream
 */
export function transform(file: any): any;
