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
        mkdirp?: boolean | undefined;
        /**
         * @default false
         */
        clobber?: boolean | undefined;
        /**
         * @default 16
         */
        limit?: number | undefined;
    }
}

export = mv;
