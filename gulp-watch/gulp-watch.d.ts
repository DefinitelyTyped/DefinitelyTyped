declare module Gulp {
    interface IWatchOptions {
        emit?: string;
        passThrough?: boolean;
        glob?: any;
        emitOnGlob?: boolean;
        name?: string;
    }
}

interface IGulpWatch {
    (options?: Gulp.IWatchOptions): any;
    (options: Gulp.IWatchOptions, cb: (events: any, done: Function) => void): any;
}

declare var __IGulpWatch: IGulpWatch;
declare module "gulp-watch" {
    export = __IGulpWatch;
}
