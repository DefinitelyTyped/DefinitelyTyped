// Type definitions for git-init 1.0
// Project: https://github.com/yoshuawuyts/git-init#readme
// Definitions by: Santi <https://github.com/santi100a>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { type ExecException, exec } from "node:child_process";

export type Callback = (error: ExecException | null, stdout: string, stderr: string) => void;

/**
 * Initializes a git repo in the current working directory asynchronously.
 *
 * @param cb An {@link exec} compatible callback.
 */
export default function init(cb: Callback): void;
/**
 * Initializes a git repo asynchronously.
 * @param path A path to the directory to initialize.
 * @param cb An {@link exec} compatible callback.
 */
export default function init(path: string, cb: Callback): void;
