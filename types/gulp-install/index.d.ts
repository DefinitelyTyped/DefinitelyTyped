/// <reference types="node" />

interface Options {
    production?: boolean | undefined;
    ignoreScripts?: boolean | undefined;
    noOptional?: boolean | undefined;
    allowRoot?: boolean | undefined;
    args?: string | string[] | undefined;
}

interface Install {
    (options?: Options): NodeJS.ReadWriteStream;
}

declare const install: Install;
export = install;
