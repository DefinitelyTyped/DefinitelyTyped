// Type definitions for jsonfile 4.0
// Project: https://github.com/jprichardson/node-jsonfile#readme
// Definitions by: Daniel Bowring <https://github.com/dbowring>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import { Url } from 'url';

export type FSReadOptions = {
    encoding?: null | undefined;
    flag?: string | undefined;
    } | null | undefined;
export type FSWriteOptions = string | {
    encoding?: string | null | undefined;
    mode?: string | number | undefined;
    flag?: string | undefined;
    } | null | undefined;

export type ReadCallback = (err: NodeJS.ErrnoException | null, data: Buffer) => void;
export type WriteCallback = (err: NodeJS.ErrnoException) => void;
export type Path = string | number | Buffer | Url;

export interface FS {
    readFile(path: Path, options: FSReadOptions, callback: ReadCallback): void;
    readFileSync(path: Path, options?: FSReadOptions): Buffer;
    writeFile(path: Path, data: any, options: FSWriteOptions, callback: WriteCallback): void;
    writeFileSync(path: Path, data: any, options?: FSWriteOptions): void;
}

export type JFReadOptions = {
    encoding?: null | undefined;
    flag?: string | undefined;
    throws?: boolean | undefined;
    fs?: FS | undefined;
    reviver?: ((key: any, value: any) => any) | undefined;
    } | null | undefined;

export type JFWriteOptions = string | {
    encoding?: string | null | undefined;
    mode?: string | number | undefined;
    flag?: string | undefined;
    throws?: boolean | undefined;
    fs?: FS | undefined;
    EOL?: string | undefined;
    spaces?: string | number | undefined;
    replacer?: ((key: string, value: any) => any) | undefined;
    } | null;

export type JFReadCallback = (err: NodeJS.ErrnoException | null, data: any) => void;

export function readFile(file: Path, options?: JFReadOptions, callback?: JFReadCallback): void;
export function readFile(file: Path, callback: JFReadCallback): void;

export function readFileSync(file: Path, options?: JFReadOptions): any;

export function writeFile(file: Path, obj: any, options?: JFWriteOptions, callback?: WriteCallback): void;
export function writeFile(file: Path, obj: any, callback: WriteCallback): void;

export function writeFileSync(file: Path, obj: any, options?: JFWriteOptions): void;
