/// <reference types="node" />

import { ExecException, ExecSyncOptions } from "child_process";

export = listGitRemotes;

declare function listGitRemotes(callback: listGitRemotes.Callback): void;
declare function listGitRemotes(cwd: string, callback: listGitRemotes.Callback): void;

declare namespace listGitRemotes {
    function sync(cwd?: string, options?: ExecSyncOptions): Remotes;
    function sync(options: ExecSyncOptions): Remotes;

    type Callback = (err: ExecException | null, remotes: Remotes, stderr?: string) => void;

    interface Remotes {
        [key: string]: string;
    }
}
