/// <reference types="node" />

declare function csso(options?: boolean | csso.Options): NodeJS.ReadWriteStream;

declare namespace csso {
    interface Options {
        sourceMap?: boolean | undefined;
        restructure?: boolean | undefined;
        debug?: boolean | undefined;
    }
}

export = csso;
