// Type definitions for list-git-remotes 1.0
// Project: https://github.com/jonschlinkert/list-git-remotes
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { ExecException, ExecSyncOptions } from 'child_process';

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
