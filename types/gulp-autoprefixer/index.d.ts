/// <reference types="node"/>

declare namespace autoPrefixer {
    interface Options {
        env?: string | undefined;
        cascade?: boolean | undefined;
        add?: boolean | undefined;
        remove?: boolean | undefined;
        supports?: boolean | undefined;
        flexbox?: boolean | "no-2009" | undefined;
        grid?: false | "autoplace" | "no-autoplace" | undefined;
        stats?: object | undefined;
        browsers?: string[] | undefined;
        ignoreUnknownVersions?: boolean | undefined;
    }
}

declare function autoPrefixer(opts?: autoPrefixer.Options): NodeJS.ReadWriteStream;

export = autoPrefixer;
