/// <reference types="node" />
import type { ExecException } from "node:child_process";

type ExecCallback = (error: ExecException | null, stdout: string, stderr: string) => void;
/**
 * Initializes a new Git repo in `path` asynchronously.
 *
 * @param path The path of the folder to be initialized as a Git repo.
 * @param cb An `exec`-compatible callback defined in {@link ExecCallback}.
 */
declare function init(path: string, cb: ExecCallback): void;
/**
 * Initializes a new Git repo in the current directory asynchronously.
 *
 * @param cb An `exec`-compatible callback defined in {@link ExecCallback}.
 */
declare function init(cb: ExecCallback): void;
export = init;
