// Type definitions for liftoff 2.5
// Project: https://github.com/js-cli/js-liftoff#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Extensions, Extension, ExtensionDescriptor } from 'interpret';
import { PathSpec } from 'fined';
import { EventEmitter } from 'events';

export = Liftoff;

declare class Liftoff extends EventEmitter {
    /**
     * Create an instance of Liftoff to invoke your application.
     */
    constructor(options?: Liftoff.Options);

    /**
     * Launches your application with provided options, builds an environment,
     * and invokes your callback, passing the calculated environment as the first argument.
     */
    launch(
        opts: Liftoff.LaunchOptions,
        callback: (this: this, env: Liftoff.LiftoffEnv) => void
    ): void;

    addListener(
        event: 'require',
        listener: (name: string, module: ExtensionDescriptor) => void
    ): this;
    addListener(event: 'requireFail', listener: (name: string, err: any) => void): this;
    addListener(event: 'respawn', listener: (flags: string[], child: NodeJS.Process) => void): this;
    on(event: 'require', listener: (name: string, module: ExtensionDescriptor) => void): this;
    on(event: 'requireFail', listener: (name: string, err: any) => void): this;
    on(event: 'respawn', listener: (flags: string[], child: NodeJS.Process) => void): this;
    once(event: 'require', listener: (name: string, module: ExtensionDescriptor) => void): this;
    once(event: 'requireFail', listener: (name: string, err: any) => void): this;
    once(event: 'respawn', listener: (flags: string[], child: NodeJS.Process) => void): this;
    prependListener(
        event: 'require',
        listener: (name: string, module: ExtensionDescriptor) => void
    ): this;
    prependListener(event: 'requireFail', listener: (name: string, err: any) => void): this;
    prependListener(
        event: 'respawn',
        listener: (flags: string[], child: NodeJS.Process) => void
    ): this;
    prependOnceListener(
        event: 'require',
        listener: (name: string, module: ExtensionDescriptor) => void
    ): this;
    prependOnceListener(event: 'requireFail', listener: (name: string, err: any) => void): this;
    prependOnceListener(
        event: 'respawn',
        listener: (flags: string[], child: NodeJS.Process) => void
    ): this;
    removeListener(
        event: 'require',
        listener: (name: string, module: ExtensionDescriptor) => void
    ): this;
    removeListener(event: 'requireFail', listener: (name: string, err: any) => void): this;
    removeListener(
        event: 'respawn',
        listener: (flags: string[], child: NodeJS.Process) => void
    ): this;
    off(event: 'require', listener: (name: string, module: ExtensionDescriptor) => void): this;
    off(event: 'requireFail', listener: (name: string, err: any) => void): this;
    off(event: 'respawn', listener: (flags: string[], child: NodeJS.Process) => void): this;
    removeAllListeners(event?: 'require' | 'requireFail' | 'respawn'): this;
    listeners(event: 'require' | 'requireFail' | 'respawn'): Function[]; // tslint:disable-line:ban-types
    rawListeners(event: 'require' | 'requireFail' | 'respawn'): Function[]; // tslint:disable-line:ban-types
    emit(event: 'require', name: string, module: ExtensionDescriptor): boolean;
    emit(event: 'requireFail', name: string, err: any): boolean;
    emit(event: 'respawn', flags: string[], child: NodeJS.Process): boolean;
    eventNames(): Array<'require' | 'requireFail' | 'respawn'>;
    listenerCount(type: 'require' | 'requireFail' | 'respawn'): number;
}

declare namespace Liftoff {
    interface Options {
        /**
         * Sugar for setting processTitle, moduleName, configName automatically.
         * @default null
         */
        name?: string;
        /**
         * Sets which module your application expects to find locally when being run.
         * @default null
         */
        moduleName?: string;
        /**
         * Sets the name of the configuration file Liftoff will attempt to find. Case-insensitive.
         * @default null
         */
        configName?: string;
        /**
         * Set extensions to include when searching for a configuration file.
         * If an external module is needed to load a given extension (e.g. .coffee),
         * the module name should be specified as the value for the key.
         * @default {".js":null,".json":null}
         */
        extensions?: Extensions;
        /**
         * Any flag specified here will be applied to node, not your program.
         * Useful for supporting invocations like myapp --harmony command,
         * where --harmony should be passed to node, not your program.
         * This functionality is implemented using flagged-respawn.
         * To support all v8flags, see `v8flags`.
         * @default null
         */
        v8flags?: string[] | ((cb: (err: any, flags: string[]) => void) => void);
        /**
         * Sets what the process title will be.
         * @default null
         */
        processTitle?: string;
        /**
         * A method to handle bash/zsh/whatever completions.
         * @default null
         */
        completions?: (completion: string) => any;
        /**
         * An object of configuration files to find. Each property is keyed by the
         * default basename of the file being found, and the value is an object
         * of path arguments keyed by unique names.
         * @default null
         */
        configFiles?: {
            [extension: string]: { [locationName: string]: string | PathSpec };
        };
    }

    interface LaunchOptions {
        /**
         * Change the current working directory for this launch. Relative paths are calculated against `process.cwd()`.
         * @default process.cwd()
         */
        cwd?: string;

        /**
         * Don't search for a config, use the one provided.
         * **Note**: Liftoff will assume the current working directory is the directory containing the config file
         * unless an alternate location is explicitly specified using `cwd`.
         * @default null
         */
        configPath?: string;

        /**
         * A string or array of modules to attempt requiring from the local
         * working directory before invoking the launch callback.
         * @default null
         */
        require?: string | any[];

        /**
         * Allows you to force node or V8 flags during the launch.
         * This is useful if you need to make sure certain flags will always be enabled
         * or if you need to enable flags that don't show up in `opts.v8flags`
         * (as these flags aren't validated against opts.v8flags).
         * @default null
         */
        forcedFlags?: string | string[] | ((env: LiftoffEnv) => string | string[]);

        completion?: string;
    }

    interface LiftoffEnv {
        /**
         * the current working directory
         */
        cwd: string;
        /**
         * an array of modules that liftoff tried to pre-load
         */
        require: string[];
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
