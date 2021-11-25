// Type definitions for liftoff 4.0
// Project: https://github.com/js-cli/js-liftoff#readme
// Definitions by: BendingBender <https://github.com/BendingBender>,
//                 Corbin Crutchley <https://github.com/crutchcorn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { PathSpec } from 'fined';
import { EventEmitter } from 'events';

export = Liftoff;

declare class Liftoff extends EventEmitter {
    /**
     * Create an instance of Liftoff to invoke your application.
     */
    constructor(options?: Liftoff.Options);

    prepare(options: Liftoff.PrepareOptions, callback: (env: Liftoff.LiftoffEnv) => void): void;
    execute(env: Liftoff.LiftoffEnv, callback: (this: Liftoff, env: Liftoff.LiftoffEnv, argv: string[]) => void): void;
    execute(env: Liftoff.LiftoffEnv, forcedFlags: string | string[], callback: (this: Liftoff, env: Liftoff.LiftoffEnv, argv: string[]) => void): void;

    addListener(
        event: 'loader:success' | 'preload:success',
        listener: (name: string, module: unknown) => void
    ): this;
    addListener(event: 'loader:failure' | 'preload:failure', listener: (name: string, err: Error) => void): this;
    addListener(event: 'preload:before', listener: (name: string) => void): this;
    addListener(event: 'respawn', listener: (flags: string[], child: NodeJS.Process) => void): this;
    on(event: 'loader:success' | 'preload:success', listener: (name: string, module: unknown) => void): this;
    on(event: 'loader:failure' | 'preload:failure', listener: (name: string, err: Error) => void): this;
    on(event: 'preload:before', listener: (name: string) => void): this;
    on(event: 'respawn', listener: (flags: string[], child: NodeJS.Process) => void): this;
    once(event: 'loader:success' | 'preload:success', listener: (name: string, module: unknown) => void): this;
    once(event: 'loader:failure' | 'preload:failure', listener: (name: string, err: Error) => void): this;
    once(event: 'preload:before', listener: (name: string) => void): this;
    once(event: 'respawn', listener: (flags: string[], child: NodeJS.Process) => void): this;
    prependListener(
        event: 'loader:success' | 'preload:success',
        listener: (name: string, module: unknown) => void
    ): this;
    prependListener(event: 'loader:failure' | 'preload:failure' | 'preload:before', listener: (name: string, err: Error) => void): this;
    prependListener(
        event: 'respawn',
        listener: (flags: string[], child: NodeJS.Process) => void
    ): this;
    prependOnceListener(
        event: 'loader:success' | 'preload:success',
        listener: (name: string, module: unknown) => void
    ): this;
    prependOnceListener(event: 'loader:failure' | 'preload:failure' | 'preload:before', listener: (name: string, err: Error) => void): this;
    prependOnceListener(
        event: 'respawn',
        listener: (flags: string[], child: NodeJS.Process) => void
    ): this;
    removeListener(
        event: 'loader:success' | 'preload:success',
        listener: (name: string, module: unknown) => void
    ): this;
    removeListener(event: 'loader:failure' | 'preload:failure' | 'preload:before', listener: (name: string, err: Error) => void): this;
    removeListener(
        event: 'respawn',
        listener: (flags: string[], child: NodeJS.Process) => void
    ): this;
    off(event: 'loader:success' | 'preload:success', listener: (name: string, module: unknown) => void): this;
    off(event: 'loader:failure' | 'preload:failure' | 'preload:before', listener: (name: string, err: Error) => void): this;
    off(event: 'respawn', listener: (flags: string[], child: NodeJS.Process) => void): this;
    removeAllListeners(event?: 'preload:success' | 'preload:failure' | 'preload:before' | 'respawn'): this;
    listeners(event: 'preload:success' | 'preload:failure' | 'preload:before' | 'respawn'): Function[]; // tslint:disable-line:ban-types
    rawListeners(event: 'preload:success' | 'preload:failure' | 'preload:before' | 'respawn'): Function[]; // tslint:disable-line:ban-types
    emit(event: 'preload:success', name: string, module: unknown): boolean;
    emit(event: 'preload:failure' | 'preload:before', name: string, err: Error): boolean;
    emit(event: 'respawn', flags: string[], child: NodeJS.Process): boolean;
    eventNames(): Array<'preload:success' | 'preload:failure' | 'preload:before' | 'respawn'>;
    listenerCount(type: 'preload:success' | 'preload:failure' | 'preload:before' | 'respawn'): number;
}

declare namespace Liftoff {
    interface Options {
        /**
         * Sugar for setting processTitle, moduleName, configName automatically.
         * @default null
         */
        name?: string | undefined;
        /**
         * Sets which module your application expects to find locally when being run.
         * @default null
         */
        moduleName?: string | undefined;
        /**
         * Sets the name of the configuration file Liftoff will attempt to find. Case-insensitive.
         * @default null
         */
        configName?: string | undefined;
        /**
         * Set extensions to include when searching for a configuration file.
         * If an external module is needed to load a given extension (e.g. .coffee),
         * the module name should be specified as the value for the key.
         * @default {".js":null,".json":null}
         */
        extensions?: PathSpec['extensions'] | undefined;
        /**
         * Any flag specified here will be applied to node, not your program.
         * Useful for supporting invocations like myapp --harmony command,
         * where --harmony should be passed to node, not your program.
         * This functionality is implemented using flagged-respawn.
         * To support all v8flags, see `v8flags`.
         * @default null
         */
        v8flags?: string[] | ((cb: (err: any, flags: string[]) => void) => void) | undefined;
        /**
         * Sets what the process title will be.
         * @default null
         */
        processTitle?: string | undefined;
        /**
         * A method to handle bash/zsh/whatever completions.
         * @default null
         */
        completions?: ((completion: string) => any) | undefined;
        /**
         * An object of configuration files to find. Each property is keyed by the
         * default basename of the file being found, and the value is an object
         * of path arguments keyed by unique names.
         * @default null
         */
        configFiles?: {
            [extension: string]: { [locationName: string]: string | PathSpec };
        } | undefined;
    }

    interface PrepareOptions {
        /**
         * Change the current working directory for this launch. Relative paths are calculated against `process.cwd()`.
         * @default process.cwd()
         */
        cwd?: string | undefined;

        /**
         * Don't search for a config, use the one provided.
         * **Note**: Liftoff will assume the current working directory is the directory containing the config file
         * unless an alternate location is explicitly specified using `cwd`.
         * @default null
         */
        configPath?: string | undefined;

        /**
         * A string or array of modules to attempt requiring from the local
         * working directory before invoking the launch callback.
         * @default null
         */
        preload?: string | any[] | undefined;

        completion?: string | undefined;
    }

    interface LiftoffEnv {
        /**
         * the current working directory
         */
        cwd: string;
        /**
         * an array of modules that liftoff tried to pre-load
         */
        preload: string[];
        /**
         * the config files searched for
         */
        configNameSearch: string[];
        /**
         * the full path to your configuration file (if found)
         */
        configPath: string | undefined;
        /**
         * the base directory of your configuration file (if found)
         */
        configBase: string | undefined;
        /**
         * the full path to the local module your project relies on (if found)
         */
        modulePath: string | undefined;
        /**
         * the contents of the local module's package.json (if found)
         */
        modulePackage: { [key: string]: any } | undefined;
        /**
         * an object of filepaths for each found config file (filepath values will be null if not found)
         */
        configFiles: { [extensions: string]: { [path: string]: string | null } } | undefined;
    }
}
