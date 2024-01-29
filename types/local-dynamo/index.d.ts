/// <reference types="node"/>

import { ChildProcess } from "child_process";

export interface Options {
    port: number;
    dir?: string | undefined;
    heap?: string | undefined;
    detached?: boolean | undefined;
    stdio?: string | undefined;
    cors?: string | string[] | undefined;
    sharedDb?: boolean | undefined;
}

export function launch(options?: Options | string, port?: number): ChildProcess;
