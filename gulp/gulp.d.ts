// Type definitions for gulp
// Project: http://gulpjs.com/
// Definitions by: David Driscoll <http://www.blacklite.ca>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
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

    dest(path: string);

    task(name: string, fn: (done?: (error?) => void) => void): ReadableStream;
    task(name: string, deps: string[], fn?: (done?: (error?) => void) => void): ReadableStream;

    watch(glob: string, tasks: string[]);
    watch(glob: string, options: Gulp.IGaze, tasks: string[]);
    watch(glob: string[], tasks: string[]);
    watch(glob: string[], options: Gulp.IGaze, tasks: string[]);

    watch(glob: string, callback: (cb: Gulp.IEvent) => void);
    watch(glob: string, options: Gulp.IGaze, callback: (cb: Gulp.IEvent) => void);
    watch(glob: string[], callback: (cb: Gulp.IEvent) => void);
    watch(glob: string[], options: Gulp.IGaze, callback: (cb: Gulp.IEvent) => void);

    start(...tasks: any[]);
}

declare var __IGulp: IGulp;
declare module "gulp" {
    export = __IGulp;
}
