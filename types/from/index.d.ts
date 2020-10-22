// Type definitions for from v0.1.3
// Project: https://github.com/dominictarr/from
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />



declare var mod: mod.From;

declare namespace mod {
    interface From {
        (getChunk: (count: number, next: () => any) => any): NodeJS.ReadableStream;
        (chunks: any[]): NodeJS.ReadableStream;
        emit(type: string, data: any): void;
    }
}

export = mod;
