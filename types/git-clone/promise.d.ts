import { Options } from '.';

/**
 * Clone `repo` to `targetPath` asynchronously.
 */
declare function clone(repo: string, targetPath: string, opts?: Options): Promise<void>;
declare function clone(repo: string, opts?: Options): Promise<void>;

export = clone;
