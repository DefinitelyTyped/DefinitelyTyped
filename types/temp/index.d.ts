// Type definitions for temp 0.8
// Project: https://github.com/bruce/node-temp
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as fs from "fs";

declare namespace temp {
  interface OpenFile {
    path: string;
    fd: number;
  }

  interface Stats {
    files: number;
    dirs: number;
  }

  interface AffixOptions {
    prefix?: string;
    suffix?: string;
    dir?: string;
  }

  let dir: string;

  function track(value?: boolean): typeof temp;

  function mkdir(affixes?: string | AffixOptions, callback?: (err: any, dirPath: string) => void): void;

  function mkdirSync(affixes?: string | AffixOptions): string;

  function open(affixes?: string | AffixOptions, callback?: (err: any, result: OpenFile) => void): void;

  function openSync(affixes?: string | AffixOptions): OpenFile;

  function path(affixes?: string | AffixOptions, defaultPrefix?: string): string;

  function cleanup(callback?: (err: any, result: Stats) => void): void;

  function cleanupSync(): boolean | Stats;

  function createWriteStream(affixes?: string | AffixOptions): fs.WriteStream;
}

export = temp;
