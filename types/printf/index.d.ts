// Type definitions for printf 0.2
// Project: https://github.com/adaltas/node-printf
// Definitions by: Aluísio Augusto Silva Gonçalves <https://github.com/AluisioASG>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = printf;
declare function printf(format: string, ...args: any[]): string;
declare function printf(writeStream: NodeJS.WritableStream, format: string, ...args: any[]): void;
