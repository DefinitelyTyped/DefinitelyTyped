// Type definitions for node-7z v0.4.1
// Project: https://github.com/quentinrossetti/node-7z
// Definitions by: Erik Rothoff Andersson <https://github.com/erkie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/

declare module "node-7z" {
  // node-7z uses `when` promises which have a progress method, however they are deprecated
  // internally node-7z uses the progress events to emit files that are extracted,
  // (also the progress event emits an array of strings, which doesn't correlate with any promise<T>)
  // so instead of patching `when` promises I'm extending the generic Promise for use internally
  interface PromiseWithProgress<T> extends Promise<T> {
    progress(progress: (files: Array<string>) => void): this;
  }

  // Options are mapped to the 7z program so there is no idea to define all possible types here
  interface CommandLineSwitches {
    raw?: Array<string>;
    [key: string]: any
  }

  interface FileSpec {
    path: string;
    type: string;
    method: string;
    physicalSize: number;
  }

  class Zip {
    add(archive: string, files: string | Array<string>, options: CommandLineSwitches): PromiseWithProgress<{}>;
    delete(archive: string, files: string | Array<string>, options: CommandLineSwitches): PromiseWithProgress<{}>;
    extract(archive: string, dest: string, options: CommandLineSwitches): PromiseWithProgress<{}>;
    extractFull(archive: string, dest: string, options: CommandLineSwitches): PromiseWithProgress<{}>;
    list(archive: string, options: CommandLineSwitches): PromiseWithProgress<FileSpec>;
    test(archive: string, options: CommandLineSwitches): PromiseWithProgress<{}>;
    update(archive: string, files: string | Array<string>, options: CommandLineSwitches): PromiseWithProgress<{}>;
  }

  export = Zip;
}
