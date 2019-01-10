// Type definitions for git-add-remote 1.0
// Project: https://github.com/jonschlinkert/git-add-remote
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { ExecException } from 'child_process';

export = prepare;

declare function prepare(cwd?: string): prepare.AddRemote;

declare namespace prepare {
    interface AddRemote {
        (
            name: string,
            url: string,
            callback: (error: ExecException | null, stdout: string, stderr: string) => void
        ): void;

        sync(name: string, url: string): void;
    }
}
