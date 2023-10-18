/// <reference types="node" />

interface IOptions {
    modifyVars?: {} | undefined;
    paths?: string[] | undefined;
    plugins?: any[] | undefined;
    relativeUrls?: boolean | undefined;
}

declare function less(options?: IOptions): NodeJS.ReadWriteStream;

declare namespace less {}

export = less;
