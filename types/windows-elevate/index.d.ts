/// <reference types="node" />

import { ChildProcess, ExecFileException } from "child_process";

export function exec(
    cmd: string,
    options?: string | readonly string[] | null,
    callback?: (error: ExecFileException, stdout: string, stderr: string) => void,
): ChildProcess;
