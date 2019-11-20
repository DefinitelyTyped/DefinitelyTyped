// Type definitions for cloud-config-client 1.4
// Project: https://github.com/victorherraiz/cloud-config-client#readme
// Definitions by: Jeroen Claassens <https://github.com/favna>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import http = require('http');
import https = require('https');

export function load(options: Options, callback?: LoadCallback): Promise<Config>;

export abstract class Config {
    constructor(data: ConfigData, context: { [key: string]: any });

    properties(): { [key: string]: any };
    raw(): { [key: string]: any };
    get(keyParts: string): any;
    forEach(callback: (property: string, value: string) => void, includeOverridden?: boolean): void;
    toObject(): { [key: string]: any };
    toString(spaces: number): string;
}

export interface ConfigFile {
    name: string;
    source: ConfigSource;
}

export interface ConfigSource {
    [key: string]: any;
}

export interface ConfigData {
    name: string;
    profiles: string[];
    label: string;
    version: string;
    propertySources: ConfigFile[];
}

export interface Auth {
    user: string;
    pass: string;
}

export interface Options {
    endpoint?: string;
    rejectUnauthorized?: boolean;

    /** @deprecated use name */
    application?: string;
    name: string;
    profiles?: string | string[];
    label?: string;
    auth?: Auth;
    agent?: http.Agent | https.Agent;
    context?: {
        [key: string]: any
    };
}

export interface LoadCallback {
    (error: Error, config?: Config): void;
}
