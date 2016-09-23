// Type definitions for NodeEach v0.4.9
// Project: http://www.adaltas.com/projects/node-each/
// Definitions by: Michael Zabka <https://github.com/misak113/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Each {
	paused: boolean;
	readable: boolean;
	started: number;
	done: number;
	total: number;
	on(eventName: string, onCallback: Function): Each;
	on(eventName: "item", onItem: (item: any, next: (error?: Error) => void) => void): Each;
	on(eventName: "error", onError: (error: Error[]) => void): Each;
	on(eventName: "error", onError: (error: Error) => void): Each;
	on(eventName: "both", onBoth: (error?: Error[]) => void): Each;
	on(eventName: "end", onEnd: () => void): Each;
	parallel(mode: number): Each;
	parallel(mode: boolean): Each;
	shift(items: any[]): void;
	write(items: any[]): void;
	unshift(items: any[]): void;
	end(): Each;
	times(): Each;
	repeat(): Each;
	sync(): Each;
	files(glob: any): void;
	files(base: any, glob: any): void;
}

interface EachStatic {
	(array: any[]): Each;
}

declare var each: EachStatic;

declare module "each" {
	export = each;
}
