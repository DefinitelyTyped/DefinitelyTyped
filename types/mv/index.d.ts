// Type definitions for mv 2.1
// Project: https://github.com/andrewrk/node-mv
// Definitions by: Miloslav Nenadál <https://github.com/nenadalm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * `fs.rename` but works across devices. same as the unix utility `mv`
 */
declare function mv(source: string, dest: string, options: mv.Options, callback: (error?: any) => void): void;
declare function mv(source: string, dest: string, callback: (error?: any) => void): void;

declare namespace mv {
    interface Options {
        /**
         * @default false
         */
        mkdirp?: boolean;
        /**
         * @default false
         */
        clobber?: boolean;
        /**
         * @default 16
         */
        limit?: number;
    }
}

export = mv;
