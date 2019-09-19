// Type definitions for jsonfile 5.0
// Project: https://github.com/jprichardson/node-jsonfile#readme
// Definitions by: Daniel Bowring <https://github.com/dbowring>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node"/>

import { Url } from 'url';
import {
    PathLike,
    readFile as fsReadFile,
    readFileSync as fsReadFileSync,
    writeFile as fsWriteFile,
    writeFileSync as fsWriteFileSync,
} from 'fs';

export type Path = PathLike | Url;

export interface FS {
    readFile: typeof fsReadFile;
    readFileSync: typeof fsReadFileSync;
    writeFile: typeof fsWriteFile;
    writeFileSync: typeof fsWriteFileSync;
}

export type JFReadOptions =
    | {
          encoding?: string | null;
          flag?: string;
          throws?: boolean;
          fs?: FS;
          reviver?: (key: any, value: any) => any;
      }
    | string
    | null
    | undefined;

export type JFWriteOptions =
    | {
          encoding?: string | null;
          mode?: string | number;
          flag?: string;
          fs?: FS;
          EOL?: string;
          spaces?: string | number;
          replacer?: (key: string, value: any) => any;
      }
    | string
    | null;

export type ReadCallback = (err: NodeJS.ErrnoException | null, data: any) => void;
export type WriteCallback = (err: NodeJS.ErrnoException) => void;

export function readFile(file: Path, options: JFReadOptions, callback: ReadCallback): void;
export function readFile(file: Path, callback: ReadCallback): void;
export function readFile(file: Path, options?: JFReadOptions): Promise<any>;

export function readFileSync(file: Path, options?: JFReadOptions): any;

export function writeFile(
    file: Path,
    obj: any,
    options: JFWriteOptions,
    callback: WriteCallback
): void;
export function writeFile(file: Path, obj: any, callback: WriteCallback): void;
export function writeFile(file: Path, obj: any, options?: JFWriteOptions): Promise<void>;

export function writeFileSync(file: Path, obj: any, options?: JFWriteOptions): void;
