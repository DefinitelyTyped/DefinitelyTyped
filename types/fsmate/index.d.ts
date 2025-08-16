
declare module "fsmate" {
  import { Readable } from "stream";

  export interface ScandirOptions {
    withDeepScan?: boolean;
    withFileTypes?: boolean;
    withFullPath?: boolean;
  }

  export interface RmOptions {
    recursive?: boolean;
    force?: boolean;
  }

  export function tmpName(prefix: string): string;
  export function tempNam(prefix: string, suffix: string): string;

  export function isFile(path: string): Promise<boolean>;
  export function isFileSync(path: string): boolean;

  export function isDir(path: string): Promise<boolean>;
  export function isDirSync(path: string): boolean;

  export function isLink(path: string): Promise<boolean>;
  export function isLinkSync(path: string): boolean;

  export function isReadable(path: string): Promise<boolean>;
  export function isReadableSync(path: string): boolean;

  export function isWritable(path: string): Promise<boolean>;
  export function isWritableSync(path: string): boolean;

  export function isExecutable(path: string): Promise<boolean>;
  export function isExecutableSync(path: string): boolean;

  export function mkdir(paths: string | string[], mode?: number): Promise<boolean>;
  export function mkdirSync(paths: string | string[], mode?: number): void;

  export function mkfile(paths: string | string[], overwrite?: boolean): Promise<void>;
  export function mkfileSync(paths: string | string[], overwrite?: boolean): void;

  export function touch(files: string | string[], mtime?: number, atime?: number): Promise<void>;
  export function touchSync(files: string | string[], mtime?: number, atime?: number): void;

  export function rename(oldPath: string, newPath: string, overwrite?: boolean): Promise<void>;
  export function renameSync(oldPath: string, newPath: string, overwrite?: boolean): boolean;

  export function scandir(dir: string, options?: ScandirOptions): Promise<any[]>;
  export function scandirSync(dir: string, options?: ScandirOptions): any[];

  export function remove(files: string | string[], recursive?: boolean): Promise<void>;
  export function removeSync(files: string | string[], recursive?: boolean): void;

  export function rm(files: string | string[], options?: RmOptions): Promise<void>;
  export function rmSync(files: string | string[], options?: RmOptions): void;

  export function mirror(originDir: string, targetDir: string, overwrite?: boolean): Promise<void>;
  export function mirrorSync(originDir: string, targetDir: string, overwrite?: boolean): void;

  export function copy(originFile: string, targetFile: string, overwrite?: boolean): Promise<void>;
  export function copySync(originFile: string, targetFile: string, overwrite?: boolean): void;

  export function empty(paths: string | string[]): Promise<void>;
  export function emptySync(paths: string | string[]): void;

  export function createInputStream(data: any): Readable;
  export function multiStream(streams: Iterable<Readable>): Readable;

  export function stringify(data: any): string;

  export function readFile(filePath: string, options?: object | boolean, parsed?: boolean): Promise<string | any>;
  export function readFileSync(filePath: string, parsed?: boolean): string | any;

  export function readLine(filePath: string, start?: boolean | number, end?: boolean | number): Promise<string[]>;
  export function readLineSync(filePath: string, start?: boolean | number, end?: boolean | number): string[];

  export function writeFile(filePath: string, data: any, options?: object): Promise<void>;
  export function writeFileSync(filePath: string, data: any): void;

  export function appendFile(filePath: string, data: any, options?: object): Promise<void>;
  export function appendFileSync(filePath: string, data: any): void;

  export function prependFile(filePath: string, data: any, options?: object): Promise<void>;
  export function prependFileSync(filePath: string, data: any): void;

  export function dumpFile(filePath: string, content: any): Promise<void>;
  export function dumpFileSync(filePath: string, content: any): void;
}
