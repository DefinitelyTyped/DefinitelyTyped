/// <reference types="node" />
import { ChildProcess, ExecException } from "child_process";

export interface RunSyncReturn {
    data: string;
    err: null;
    stderr: null;
}

export interface RunSyncError {
    data: null;
    err: string;
    stderr: string;
}

export function run(
    command: string,
    callback?: (
        error: ExecException | null,
        stdout: string,
        stderr: string,
    ) => void,
): ChildProcess;

export function runSync(command: string): RunSyncReturn | RunSyncError;
