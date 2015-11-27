// Type definitions for empty-dir v0.1.0
// Project: https://www.npmjs.com/package/empty-dir
// Definitions by: Peter Juras <https://github.com/peterjuras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "empty-dir" {
  interface EmptyDir {
    (dir: string, callback : (err: any, result: boolean) => void) : void;

    sync(dir: string) : boolean;
  }

  const emptyDir : EmptyDir;
  export = emptyDir;
}
