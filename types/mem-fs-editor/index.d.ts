// Type definitions for mem-fs-editor 7.0
// Project: https://github.com/SBoudrias/mem-fs-editor#readme
// Definitions by: My Food Bag <https://github.com/MyFoodBag>
//                 Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

import { Options as TemplateOptions, Data as TemplateData } from 'ejs';
import { IOptions as GlobOptions } from 'glob';
import { JSONSchema7Type } from "json-schema";
import { Store } from 'mem-fs';
import { Transform } from 'stream';
import * as File from 'vinyl';

export function create(store: Store): Editor;

//#region Editor
export interface Editor {
    read(filepath: string, options?: ReadStringOptions): string;
    read(filepath: string, options: ReadRawOptions): ReadRawContents;

    readJSON(filepath: string): JSONSchema7Type | undefined;
    readJSON(filepath: string, defaults: JSONSchema7Type): JSONSchema7Type;

    write(filepath: string, contents: WriteContents): string;

    writeJSON(filepath: string, contents: any, replacer?: WriteJsonReplacer, space?: WriteJsonSpace): string;

    append(filepath: string, contents: WriteContents, options?: AppendOptions): string;

    extendJSON(filepath: string, contents: any, replacer?: WriteJsonReplacer, space?: WriteJsonSpace): void;

    delete(filepath: FilePaths, options?: WithGlobOptions): void;

    copy(from: FilePaths, to: string, options?: CopyOptions, context?: TemplateData, templateOptions?: TemplateOptions): void;

    copyTpl(from: FilePaths, to: string, context?: TemplateData, templateOptions?: TemplateOptions, copyOptions?: CopyOptions): void;

    move(from: FilePaths, to: string, options?: WithGlobOptions): void;

    exists(filepath: string): boolean;

    commit(callback: CommitCallback): void;
    commit(filters: ReadonlyArray<Transform>, callback: CommitCallback): void;
}

export interface WithGlobOptions {
    globOptions?: GlobOptions;
}

type FilePaths = string | string[];

//#region Editor#read
export interface ReadStringOptions {
    raw?: false;
    defaults?: string;
}

export interface ReadRawOptions {
    raw: true;
    defaults?: ReadRawContents;
}

type ReadRawContents = Exclude<File["contents"], null>;
//#endregion

//#region Editor#write
type WriteContents = string | Buffer;
//#endregion

//#region Editor#writeJSON
type WriteJsonReplacer = ((key: string, value: any) => any) | Array<string | number>;

type WriteJsonSpace = number | string;
//#endregion

//#region Editor#append
export interface AppendOptions {
    trimEnd?: boolean;
    separator?: string;
}
//#endregion

//#region Editor#copy
export interface CopyOptions extends WithGlobOptions {
    ignoreNoMatch?: boolean;
    process?: ProcessingFunction;
    processDestinationPath?: (path: string) => string;
}

export type ProcessingFunction = (contents: Buffer, path: string) => WriteContents;
//#endregion

//#region Editor#commit
type CommitCallback = (err: any) => void;
//#endregion
//#endregion

export {};
