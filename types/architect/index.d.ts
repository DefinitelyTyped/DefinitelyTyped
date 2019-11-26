// Type definitions for architect 0.1
// Project: https://github.com/c9/architect#readme
// Definitions by: Ivan Lopez <https://github.com/greuze>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from "events";

export type Config = any;
export type Service = any;
export type Plugin = any;

export function loadConfig(configPath: string, callback?: (err: Error, config: Config) => void): void;
export function createApp(config: Config, callback?: (err: Error, app: Architect) => void): Architect;

export interface Architect extends EventEmitter {
    on(event: "service", listener: (name: string, service: Service, plugin: Plugin) => void): this;
    on(event: "plugin", listener: (plugin: Plugin) => void): this;
    on(event: "ready", listener: (app: Architect) => void): this;
    on(event: "error", listener: (error: Error) => void): this;
    getService(name: string): any;
}
