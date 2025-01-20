/// <reference types="node" />

declare function babel(options?: {
    filename?: string | undefined;
    filenameRelative?: string | undefined;
    presets?: string[] | undefined;
    plugins?: string[] | undefined;
    highlightCode?: boolean | undefined;
    only?: string | string[] | undefined;
    ignore?: string | string[] | undefined;
    auxiliaryCommentBefore?: any;
    auxiliaryCommentAfter?: any;
    sourceMaps?: any;
    inputSourceMap?: any;
    sourceMapTarget?: any;
    sourceFileName?: any;
    sourceRoot?: any;
    moduleRoot?: any;
    moduleIds?: any;
    moduleId?: any;
    getModuleId?: any;
    resolveModuleSource?: any;
    keepModuleIdExtesions?: boolean | undefined;
    code?: boolean | undefined;
    ast?: boolean | undefined;
    compact?: any;
    comments?: boolean | undefined;
    shouldPrintComment?: any;
    env?: any;
    retainLines?: boolean | undefined;
}): NodeJS.ReadWriteStream;

declare namespace babel {}

export = babel;
