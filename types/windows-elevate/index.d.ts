// Type definitions for windows-elevate 1.0
// Project: https://github.com/ChristopherHaws/node-windows-elevate/
// Definitions by: Zlatko Andonovski <https://github.com/Goldsmith42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { ChildProcess, ExecFileException } from 'child_process';

export function exec(cmd: string, options?: string | ReadonlyArray<string> | null, callback?: (error: ExecFileException, stdout: string, stderr: string) => void): ChildProcess;
