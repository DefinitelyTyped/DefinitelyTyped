// Type definitions for mv 2.1
// Project: https://github.com/andrewrk/node-mv
// Definitions by: Miloslav Nenadál <https://github.com/nenadalm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    mkdirp?: boolean;
    clobber?: boolean;
}

interface Mv {
    (
        src: string,
        dest: string,
        options: Options,
        callback: (error: any) => void
    ): void;
    (src: string, dest: string, callback: (error: any) => void): void;
}

declare const inst: Mv;

export = inst;
