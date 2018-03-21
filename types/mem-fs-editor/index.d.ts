// Type definitions for mem-fs-editor 4.0
// Project: https://github.com/SBoudrias/mem-fs-editor#readme
// Definitions by: My Food Bag <https://github.com/MyFoodBag>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import Buffer = require('buffer');
import stream = require('stream');

// TODO: type of store comes from mem-fs
export function create(store: any): memFsEditor.Editor;

export namespace memFsEditor {
    type Contents = string|Buffer;

    type ReplacerFunc = (key: string, value: any) => string|null|undefined;

    type Space = string|number;

    type GlobOptions = any;

    type ProcessFunc = (contents: Buffer) => Contents;

    interface CopyOptions {
        process: ProcessFunc;
        globOptions: GlobOptions;
    }

    interface Editor {
        read: (filepath: string, options?: { raw: boolean, defaults: string }) => string;
        readJSON: (filepath: string, defaults?: string) => string;
        write: (filepath: string, contents: Contents) => void;
        writeJSON: (filepath: string, contents: Contents, replacer?: ReplacerFunc, space?: Space) => void;
        append: (filepath: string, contents: Contents, options?: { trimEnd: boolean, separator: string }) => void;
        extendJSON: (filepath: string, contents: Contents, replacer?: ReplacerFunc, space?: Space) => void;
        // TODO: see if there are typings for node-glob
        delete: (filepath: string, options?: { globOptions: GlobOptions }) => void;
        copy: (from: string, to: string, options?: CopyOptions) => void;
        // TODO: create type for TemplateOptions
        copyTpl: (from: string, to: string, context: any, templateOptions?: any, copyOptions?: CopyOptions) => void;
        move: (from: string, to: string, options?: { globOptions: GlobOptions }) => void;
        exists: (filepath: string) => boolean;
        commit: (filters: stream.Transform[], callback: () => void) => void;
    }

    const prototype: {
    };
}
