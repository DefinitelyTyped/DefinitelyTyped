/// <reference types="node" />

import { ExecException } from "child_process";

export = prepare;

declare function prepare(cwd?: string): prepare.AddRemote;

declare namespace prepare {
    interface AddRemote {
        (
            name: string,
            url: string,
            callback: (error: ExecException | null, stdout: string, stderr: string) => void,
        ): void;

        sync(name: string, url: string): void;
    }
}
