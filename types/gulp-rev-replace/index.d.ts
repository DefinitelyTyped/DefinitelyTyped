/// <reference types="node" />

declare namespace revReplace {
    interface Options {
        canonicalUris?: boolean | undefined;
        replaceInExtensions?: Array<string> | undefined;
        prefix?: string | undefined;
        manifest?: NodeJS.ReadWriteStream | undefined;
        modifyUnreved?: Function | undefined;
        modifyReved?: Function | undefined;
    }
}

declare function revReplace(options?: revReplace.Options): NodeJS.ReadWriteStream;

export = revReplace;
