// Type definitions for electron-settings 2.2
// Project: https://github.com/nathanbuchar/electron-settings
// Definitions by: Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import { EventEmitter } from 'events';

declare const SettingsInstance: Settings;
export = SettingsInstance;

/**
 * The Settings class.
 */
declare class Settings extends EventEmitter {
    /**
     * Globally configures default options.
     *
     * @throws if options is not an object.
     */
    configure(options: ElectronSettings.Options.Param): void;

    /**
     * Globally configures default settings.
     *
     * If the settings file has not been created yet, these defaults will be applied,
     * but only if settings.defaults is called before making any other calls that
     * interact with the file system, such as has(), get(), or set().
     *
     * @param defaults The defaults object.
     * @throws if defaults is not an object.
     */
    defaults(defaults: any): void;

    /**
     * Returns a promise whose first argument is a boolean indicating if the key path exists within the settings object.
     * For synchronous operation, use hasSync().
     *
     * @param keyPath The path to the key that we wish to check exists within the settings object.
     * @throws if key path is not a string.
     * @see hasSync
     */
    has(keyPath: string): Promise<boolean>;

    /**
     * The synchronous version of has().
     *
     * @see has
     */
    hasSync(keyPath: string): boolean;

    /**
     * Returns a promise whose first argument is the value at the chosen key path.
     * If no key path is chosen, the entire settings object will be returned instead.
     * For synchronous operation, use getSync().
     *
     * @param keyPath The path to the key that we wish to get the value of.
     * @see getSync
     */
    get(keyPath?: string): Promise<any>;

    /**
     * The synchronous version of get().
     *
     * @see get
     */
    getSync(keyPath?: string): any;

    /**
     * Sets the value of the key at the chosen key path.
     * For synchronous operation, use setSync().
     *
     * @param keyPath The path to the key whose value we wish to set. This key need not already exist.
     * @param value The value to set the key at the chosen key path to. This must be a data type supported by JSON: object, array, string, number, boolean, or null.
     * @param options
     * @throws if key path is not a string.
     * @throws if options is not an object.
     * @see setSync
     */
    set(keyPath: string, value: any, options?: ElectronSettings.Options.Param): Promise<void>;

    /**
     * The synchronous version of set().
     *
     * @see set
     */
    setSync(keyPath: string, value: any, options?: ElectronSettings.Options.Param): void;

    /**
     * Deletes the key and value at the chosen key path.
     *
     * @param keyPath The path to the key we wish to unset.
     * @param options
     * @throws if keyPath is not a string.
     * @throws if options is not an object.
     * @see deleteSync
     */
    delete(keyPath: string, options?: ElectronSettings.Options.Param): Promise<void>;

    /**
     * The synchronous version of delete().
     *
     * @see delete
     */
    deleteSync(keyPath: string, options?: ElectronSettings.Options.Param): void;

    /**
     * Clears the entire settings object.
     * For synchronous operation, use clearSync().
     *
     * @throws if options is not an object.
     * @see clearSync
     */
    clear(options?: ElectronSettings.Options.Param): Promise<void>;

    /**
     * The synchronous version of clear().
     *
     * @see clear
     */
    clearSync(options?: ElectronSettings.Options.Param): void;

    /**
     * Applies defaults to the current settings object (deep).
     * Settings that already exist will not be overwritten, but keys that exist within the defaults
     * that don't exist within the setting object will be added.
     * To configure defaults, use defaults().
     * For synchronous operation, use applyDefaultsSync().
     *
     * @throws if options is not an object.
     * @see defaults
     * @see applyDefaultsSync
     */
    applyDefaults(options?: ElectronSettings.ApplyDefaultsOptions.Param): Promise<void>;

    /**
     * The synchronous version of applyDefaults().
     *
     * @see applyDefaults
     */
    applyDefaultsSync(options?: ElectronSettings.ApplyDefaultsOptions.Param): void;

    /**
     * Resets all settings to defaults.
     * To configure defaults, use defaults().
     * For synchronous operation, use resetToDefaultsSync().
     *
     * @throws if options is not an object.
     * @see defaults
     * @see resetToDefaultsSync
     */
    resetToDefaults(options?: ElectronSettings.Options.Param): Promise<void>;

    /**
     * The synchronous version of resetToDefaults().
     *
     * @see resetToDefaults
     */
    resetToDefaultsSync(options?: ElectronSettings.Options.Param): void;

    /**
     * Observes the chosen key path for changes and calls the handler if the value changes.
     * Returns an Observer instance which has a dispose method.
     * To unsubscribe, simply call dispose() on the returned key path observer.
     *
     * @param keyPath The path to the key that we wish to observe.
     * @param handler The callback that will be invoked if the value at the chosen key path changes.
     * @throws if key path is not a string.
     * @throws if handler is not a function.
     */
    observe(keyPath: string, handler: (evt: ElectronSettings.ChangeEvent) => void): ElectronSettings.Observer;

    /**
     * Returns the path to the config file. Typically found in your application's user data directory:
     * ~/Library/Application Support/YourApp on MacOS.
     * %APPDATA%/YourApp on Windows.
     * $XDG_CONFIG_HOME/YourApp or ~/.config/YourApp on Linux.
     */
    getSettingsFilePath(): string;

    /**
     * Emitted when the settings file has been created.
     */
    on(event: 'create', listener: (pathToSettings: string) => void): this;
    /**
     * Emitted when the settings have been written to disk.
     */
    on(event: 'write', listener: () => void): this;
}

declare namespace SettingsInstance {
    type Observer = ElectronSettings.Observer;
    type Options = ElectronSettings.Options;
    type ApplyDefaultsOptions = ElectronSettings.ApplyDefaultsOptions;
    type ChangeEvent = ElectronSettings.ChangeEvent;
}

declare namespace ElectronSettings {
    /**
     * The Observer class.
     */
    class Observer {
        /**
         * Disposes of the key path observer by unbinding the event listener and
         * nullifying all internal references.
         */
        dispose(): void;
    }

    interface Options extends Pick<Options._Impl, keyof Options._Impl> { }

    namespace Options {
        type Param = Options | object;

        interface _Impl {
            /**
             * Whether electron-settings should create a tmp file during save to ensure data-write consistency.
             *
             * @default true
             */
            atomicSaving: boolean;
            /**
             * Prettify the JSON output.
             *
             * @default false
             */
            prettify: boolean;
        }
    }

    interface ApplyDefaultsOptions extends Pick<ApplyDefaultsOptions._Impl, keyof ApplyDefaultsOptions._Impl> { }

    namespace ApplyDefaultsOptions {
        type Param = ApplyDefaultsOptions | object;

        interface _Impl extends Options._Impl {
            /**
             * Overwrite pre-existing settings with their respective default values.
             *
             * @default false
             */
            overwrite: boolean;
        }
    }

    interface ChangeEvent {
        oldValue: any;
        newValue: any;
    }
}
