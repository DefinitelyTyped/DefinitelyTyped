// Type definitions for jsonfile 6.0
// Project: https://github.com/jprichardson/node-jsonfile#readme
// Definitions by: Daniel Bowring <https://github.com/dbowring>
//                 BendingBender <https://github.com/BendingBender>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

/**
 * @see {@link https://github.com/jprichardson/node-jsonfile#readfilefilename-options-callback}
 */
export function readFile(file: Path, options: JFReadOptions, callback: ReadCallback): void;
export function readFile(file: Path, callback: ReadCallback): void;
export function readFile(file: Path, options?: JFReadOptions): Promise<any>;

/**
 * @see {@link https://github.com/jprichardson/node-jsonfile#readfilesyncfilename-options}
 */
export function readFileSync(file: Path, options?: JFReadOptions): any;

/**
 * @see {@link https://github.com/jprichardson/node-jsonfile#writefilefilename-obj-options-callback}
 */
export function writeFile(file: Path, obj: any, options: JFWriteOptions, callback: WriteCallback): void;
export function writeFile(file: Path, obj: any, callback: WriteCallback): void;
export function writeFile(file: Path, obj: any, options?: JFWriteOptions): Promise<void>;

/**
 * @see {@link https://github.com/jprichardson/node-jsonfile#writefilesyncfilename-obj-options}
 */
export function writeFileSync(file: Path, obj: any, options?: JFWriteOptions): void;
