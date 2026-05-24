/// <reference types="node" />

import { ChildProcess, ExecException } from "child_process";

export function exec(
    cmd: string,
    options?: string | readonly string[] | null,
    callback?: (error: ExecException, stdout: string, stderr: string) => void,
): ChildProcess;
