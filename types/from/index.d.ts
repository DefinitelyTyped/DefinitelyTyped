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
