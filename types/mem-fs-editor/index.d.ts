// Type definitions for mem-fs-editor 4.0
// Project: https://github.com/SBoudrias/mem-fs-editor#readme
// Definitions by: My Food Bag <https://github.com/MyFoodBag>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

import * as Buffer from 'buffer';
import { Transform } from 'stream';
import { Store } from 'mem-fs';
import { Options as TemplateOptions } from 'ejs';
import { IOptions as GlobOptions } from 'glob';

export function create(store: Store): memFsEditor.Editor;

export namespace memFsEditor {
    type Contents = string|Buffer;

    type ReplacerFunc = (key: string, value: any) => any;

    type Space = string|number;

    type ProcessFunc = (contents: Buffer) => Contents;

    type Callback = (err: any) => any;

    interface CopyOptions {
        process?: ProcessFunc;
        globOptions?: GlobOptions;
    }

    interface Editor {
        read(filepath: string, options?: { raw: boolean, defaults: string }): string;
        readJSON(filepath: string, defaults?: any): any;
        write(filepath: string, contents: Contents): void;
        writeJSON(filepath: string, contents: any, replacer?: ReplacerFunc, space?: Space): void;
        append(filepath: string, contents: Contents, options?: { trimEnd: boolean, separator: string }): void;
        extendJSON(filepath: string, contents: object, replacer?: ReplacerFunc, space?: Space): void;
        delete(filepath: string, options?: { globOptions: GlobOptions }): void;
        copy(from: string, to: string, options?: CopyOptions): void;
        copyTpl(from: string, to: string, context: object, templateOptions?: TemplateOptions, copyOptions?: CopyOptions): void;
        move(from: string, to: string, options?: { globOptions: GlobOptions }): void;
        exists(filepath: string): boolean;
        commit(callback: Callback): void;
        commit(filters: ReadonlyArray<Transform>, callback: Callback): void;
    }

    const prototype: {
    };
}
