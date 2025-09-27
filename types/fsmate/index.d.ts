/// <reference types="node" />

import { Readable } from "stream";

declare module "fsmate" {
  function tmpName(prefix: string): string;
  function tempNam(prefix: string, suffix: string): string;

  function isFile(path: string): Promise<boolean>;
  function isFileSync(path: string): boolean;

  function isDir(path: string): Promise<boolean>;
  function isDirSync(path: string): boolean;

  function isLink(path: string): Promise<boolean>;
  function isLinkSync(path: string): boolean;

  function isReadable(path: string): Promise<boolean>;
  function isReadableSync(path: string): boolean;

  function isWritable(path: string): Promise<boolean>;
  function isWritableSync(path: string): boolean;

  function isExecutable(path: string): Promise<boolean>;
  function isExecutableSync(path: string): boolean;

  function filesize(filename: string): Promise<number>;
  function filesizeSync(filename: string): number;

  function mkdir(paths: string | string[], mode?: number): Promise<boolean>;
  function mkdirSync(paths: string | string[], mode?: number): void;

  function mkfile(paths: string | string[], overwrite?: boolean): Promise<void>;
  function mkfileSync(paths: string | string[], overwrite?: boolean): void;

  function touch(files: string | string[], mtime?: number, atime?: number): Promise<void>;
  function touchSync(files: string | string[], mtime?: number, atime?: number): void;

  function rename(oldPath: string, newPath: string, overwrite?: boolean): Promise<void>;
  function renameSync(oldPath: string, newPath: string, overwrite?: boolean): boolean;

  function move(oldPath: string, newPath: string, overwrite?: boolean): Promise<void>;
  function moveSync(oldPath: string, newPath: string, overwrite?: boolean): boolean;

  function scandir(
    dir: string,
    options?: { withDeepScan?: boolean; withFileTypes?: boolean; withFullPath?: boolean }
  ): Promise<unknown[]>;
  function scandirSync(
    dir: string,
    options?: { withDeepScan?: boolean; withFileTypes?: boolean; withFullPath?: boolean }
  ): unknown[];

  function remove(files: string | string[], recursive?: boolean): Promise<void>;
  function removeSync(files: string | string[], recursive?: boolean): void;

  function rm(files: string | string[], options?: { recursive?: boolean; force?: boolean }): Promise<void>;
  function rmSync(files: string | string[], options?: { recursive?: boolean; force?: boolean }): void;

  function mirror(originDir: string, targetDir: string, overwrite?: boolean): Promise<void>;
  function mirrorSync(originDir: string, targetDir: string, overwrite?: boolean): void;

  function copy(originFile: string, targetFile: string, overwrite?: boolean): Promise<void>;
  function copySync(originFile: string, targetFile: string, overwrite?: boolean): void;

  function truncate(path: string): Promise<void>;
  function truncateSync(path: string): void;

  function empty(paths: string | string[]): Promise<void>;
  function emptySync(paths: string | string[]): void;

  function createInputStream(data: unknown): Readable;
  function stringify(data: unknown): string;

  function readFile(filePath: string, options?: object | boolean, parsed?: boolean): Promise<string | object>;
  function readFileSync(filePath: string, parsed?: boolean): string | object;

  function readLine(filePath: string, start?: number | boolean, end?: number | boolean): Promise<string[]>;
  function readLineSync(filePath: string, start?: number | boolean, end?: number | boolean): string[];

  function writeFile(filePath: string, data: unknown, options?: object): Promise<void>;
  function writeFileSync(filePath: string, data: unknown): void;

  function appendFile(filePath: string, data: unknown, options?: object): Promise<void>;
  function appendFileSync(filePath: string, data: unknown): void;

  function prependFile(filePath: string, data: unknown, options?: object): Promise<void>;
  function prependFileSync(filePath: string, data: unknown): void;

  function dumpFile(filePath: string, content: unknown): Promise<void>;
  function dumpFileSync(filePath: string, content: unknown): void;

  function multiStream(streams: Iterable<Readable>): Readable;

  function fseek(filePath: string, position: number): Promise<void>;
  function fseekSync(filePath: string, position: number): void;

  function ftell(filePath: string): Promise<number>;
  function ftellSync(filePath: string): number;

  function fgets(filePath: string): Promise<string>;
  function fgetsSync(filePath: string): string;

  function fpassthru(filePath: string): Promise<string>;
  function fpassthruSync(filePath: string): string;

  function rewind(filePath: string): Promise<void>;
  function rewindSync(filePath: string): void;

  function fwrite(filePath: string, content: string): Promise<void>;
  function fwriteSync(filePath: string, content: string): void;

  function fread(filePath: string, length: number): Promise<string>;
  function freadSync(filePath: string, length: number): string;

  export = fsMate;
      }
