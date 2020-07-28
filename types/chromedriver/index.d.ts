// Type definitions for chromedriver 81.0
// Project: https://github.com/giggio/node-chromedriver
// Definitions by: Peter Safranek <https://github.com/pe8ter>
//                 Armin Jazi <https://github.com/tetrohed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { ChildProcess } from 'child_process';

export const path: string;
export const version: string;

export function start(args: ReadonlyArray<string> | null | undefined, returnPromise: true): Promise<ChildProcess>;
export function start(args?: ReadonlyArray<string>, returnPromise?: false): ChildProcess;

export function stop(): void;

export const defaultInstance: ChildProcess | undefined;
