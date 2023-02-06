// Type definitions for git-init
import { type ExecException, exec } from "node:child_process";

declare type Callback = (error: ExecException | null, stdout: string, stderr: string) => void;

/**
 * Initializes a git repo in the current working directory asynchronously.
 * 
 * @param cb An {@link exec} compatible callback.
 */
declare function init(cb: Callback): void;
/**
 * Initializes a git repo asynchronously.
 * @param path A path to the directory to initialize.
 * @param cb An {@link exec} compatible callback.
 */
declare function init(path: string, cb: Callback): void;
