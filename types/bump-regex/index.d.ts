declare function bump(opts: string | bump.Options, cb: bump.Callback): any;

declare namespace bump {
    type Callback = (err: string | Error | null, opts?: Result) => void;

    interface Options {
        key?: string | undefined;
        type?: "major" | "minor" | "patch" | "prerelease" | undefined;
        case?: boolean | undefined;
        keys?: string[] | undefined;
        /**
         * Keep the metadata of the old version after bumping
         * @default false
         */
        keepmetadata?: boolean | undefined;
        global?: boolean | undefined;
        version?: string | undefined;
        preid?: string | undefined;
        regex?: RegExp | undefined;
        str?: string | undefined;
    }

    interface Result extends Options {
        prev: string;
        new: string;
    }
}

export = bump;
