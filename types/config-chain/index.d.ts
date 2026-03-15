/// <reference types="node" />

import { EventEmitter } from "events";

/**
 * Chain configuration from multiple sources.
 */
declare function cc(...args: Array<string | object>): cc.ConfigChain;

declare namespace cc {
    /**
     * Search for a file starting from the current directory and moving up.
     */
    function find(start?: string, rel?: string): string | undefined;

    /**
     * Parse configuration content as JSON or INI.
     */
    function parse(content: string, file?: string, type?: string): object;

    /**
     * Read and parse a JSON file.
     */
    function json(...args: string[]): object;

    /**
     * Extract environment variables matching a prefix.
     */
    function env(prefix: string, env?: { [key: string]: string | undefined }): object;

    class ConfigChain extends EventEmitter {
        /** Get a configuration value */
        get(key: string, where?: string): any;
        /** Set a configuration value */
        set(key: string, value: any, where?: string): this;
        /** Delete a configuration key */
        del(key: string, where?: string): this;
        /** Add a configuration file */
        addFile(file: string, type?: string, name?: string): this;
        /** Add environment variables */
        addEnv(prefix?: string, env?: object, name?: string): this;
        /** Add configuration from a URL */
        addUrl(url: string, type?: string, name?: string): this;
        /** Add a configuration object */
        add(obj: object, name?: string): this;
        /** Save configuration to file */
        save(where: string, type?: string, cb?: (err: Error | null) => void): this;
        /** Snapshot of all configuration */
        readonly snapshot: { [key: string]: any };
        /** Array of configuration source names */
        readonly list: object[];
        /** Array of configuration source objects */
        readonly sources: { [name: string]: { data: object; path?: string; type?: string } };
    }
}

export = cc;
