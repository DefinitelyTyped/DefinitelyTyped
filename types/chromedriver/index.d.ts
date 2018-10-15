// Type definitions for chromedriver 2.38
// Project: https://github.com/giggio/node-chromedriver
// Definitions by: Peter Safranek <https://github.com/pe8ter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { ChildProcess } from 'child_process';

export const path: string;
export const version: string;
export function start(args?: ReadonlyArray<string>): ChildProcess;
export function stop(): void;
export let defaultInstance: ChildProcess | undefined;
