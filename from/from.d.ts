// Type definitions for from v0.1.3
// Project: https://github.com/dominictarr/from
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'from' {

	var mod: mod.From;

	module mod {
		interface From {
			(getChunk: (count: number, next: () => any) => any): NodeJS.ReadableStream;
			(chunks: any[]): NodeJS.ReadableStream;
			emit(type: string, data: any): void;
		}
	}

	export  = mod;
}
