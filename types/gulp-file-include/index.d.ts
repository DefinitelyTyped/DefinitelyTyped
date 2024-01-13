/// <reference types="node" />

declare function fileinclude(prefix: string): NodeJS.ReadWriteStream;
declare function fileinclude(opts: fileinclude.Options): NodeJS.ReadWriteStream;
declare namespace fileinclude {
    export interface Options {
        /** default: "@@" */
        prefix?: string | undefined;
        /** default: "" */
        suffix?: string | undefined;
        /**
         * Can be "@file" or "@root" or some base path.
         * default: "@file"
         */
        basepath?: "@file" | "@root" | string | undefined;
        /**
         * Filters basically look like functions that get passed into '@@include'.
         * When one of these functions is called, something of that name is looked
         * up in this object and called to get the contents of that include.
         */
        filters?: { [filter: string]: (arg: any) => string } | undefined;
        /**
         * Effectively a context for variables used in 'if' statements.
         */
        context?: { [contextVarName: string]: any } | undefined;
        /**
         * default: false
         */
        indent?: boolean | undefined;
    }
}

export = fileinclude;
