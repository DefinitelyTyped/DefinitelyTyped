// Type definitions for recluster 0.4
// Project: https://github.com/doxout/recluster
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { ChildProcess } from "child_process";

export interface LogOptions {
  respawns?: boolean;
}

export interface Logger {
  log(message?: any, ...optionalParams: any[]): void;
}

export interface BalancerOptions {
  /** number of active workers */
  workers?: number;
  /** kill timeout for old workers after reload (sec) */
  timeout?: number;
  /** min time between respawns when workers die */
  respawn?: number;
  /** max time between respawns when workers die */
  backoff?: number;
  /** when does the worker become ready? 'listening' or 'started' */
  readyWhen?: string;
  /** arguments to pass to the worker (default: []) */
  args?: string[];
  /** what to log to stdout (default: {respawns: true}) */
  log?: LogOptions;
  /** logger to use, needs `log` method (default: console) */
  logger?: Logger;
}

export class Balancer {
  constructor(file: string, options: BalancerOptions);
  run(): void;
  reload(cb?: () => void): void;
  stop(): void;
  workers(): ChildProcess[];
  activeWorkers(): ChildProcess[];
}

export default function recluster(file: string, options?: BalancerOptions): Balancer;
