// Type definitions for gulp
// Project: http://gulpjs.com/
// Definitions by: David Driscoll <http://www.blacklite.ca>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/// <reference path="../node/node.d.ts" />
declare module Gulp {
	interface ISrcOptions {
		buffer?: boolean;
		read?: boolean;
	}

	interface IGaze {
		interval?: number;
		debounceDelay?: number;
	}
		
	interface IEvent {
		type: string;
		path: string;
	}
}

interface IGulp {
	src(glob: string, options?: Gulp.ISrcOptions): ReadableStream;
    src(globs: string[], options?: Gulp.ISrcOptions): ReadableStream;

    dest(path: string): ReadableStream;

    task(name: string, fn: (done?: (error?: any) => void) => void): ReadableStream;
    task(name: string, deps: string[], fn?: (done?: (error?: any) => void) => void): ReadableStream;

    watch(glob: string, tasks: string[]): NodeEventEmitter;
    watch(glob: string, options: Gulp.IGaze, tasks: string[]): NodeEventEmitter;
    watch(glob: string[], tasks: string[]): NodeEventEmitter;
    watch(glob: string[], options: Gulp.IGaze, tasks: string[]): NodeEventEmitter;

    watch(glob: string, callback: (cb: Gulp.IEvent) => void): NodeEventEmitter;
    watch(glob: string, options: Gulp.IGaze, callback: (cb: Gulp.IEvent) => void): NodeEventEmitter;
    watch(glob: string[], callback: (cb: Gulp.IEvent) => void): NodeEventEmitter;
    watch(glob: string[], options: Gulp.IGaze, callback: (cb: Gulp.IEvent) => void): NodeEventEmitter;

    start(...tasks: any[]): void;
}

declare var __IGulp: IGulp;
declare module "gulp" {
    export = __IGulp;
}
