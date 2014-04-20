// Type definitions for gulp-changed
// Project: https://github.com/sindresorhus/gulp-changed
// Definitions by: David Driscoll <http://www.blacklite.ca>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module Gulp {
	interface IChangedOptions {
		cwd?: string;
		extension?: string;
	}
}
interface IGulpChanged {
    (dest: string, options?: Gulp.IChangedOptions): any;
}

declare var __IGulpChanged: IGulpChanged;
declare module "gulp-changed" {
    export = __IGulpChanged;
}	