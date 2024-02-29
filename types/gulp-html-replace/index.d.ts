/// <reference types="node" />

interface AdvancedTask {
    src: string | string[];
    tpl: string;
}

interface Tasks {
    [taskId: string]: string | string[] | AdvancedTask;
}

interface Options {
    keepUnassigned?: boolean | undefined;
    keepBlockTags?: boolean | undefined;
    resolvePaths?: boolean | undefined;
}

interface HtmlReplace {
    (tasks: Tasks, options?: Options): NodeJS.ReadWriteStream;
}

declare const htmlReplace: HtmlReplace;
export = htmlReplace;
