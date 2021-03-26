// Type definitions for electron-settings 3.1
// Project: https://github.com/nathanbuchar/electron-settings#readme
// Definitions by: Ian Copp <https://github.com/icopp>,
//                 nrlquaker <https://github.com/nrlquaker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import * as fs from "fs";

type SettingsHandler = (newValue: any, oldValue: any) => any;

interface JsonObject {
    [x: string]: JsonValue;
}

interface JsonArray extends Array<JsonValue> {}

type JsonValue = string | number | boolean | null | JsonArray | JsonObject;

interface SettingsOptions {
    /**
     * Prettify the JSON output. Defaults to `false`.
     */
    prettify?: boolean;
}

interface Settings extends NodeJS.EventEmitter {
    /**
     * Returns a boolean indicating whether the settings object contains the
     * given key path.
     */
    has(keyPath: string): boolean;

    /**
     * Sets the value at the given key path and returns the Settings instance.
     * Chainable.
     * @param keyPath The path to the key whose value we wish to set. This key
     *                need not already exist.
     * @param value   The value to set the key at the chosen key path to. This
     *                must be a data type supported by JSON.
     * @see #setAll
     */
    set(keyPath: string, value: JsonValue, options?: SettingsOptions): Settings;

    /**
     * Sets all settings and returns the Settings instance. Chainable.
     * @param obj The new settings object.
     * @see #set
     */
    setAll(obj: JsonValue, options?: SettingsOptions): Settings;

    /**
     * Returns the value at the given key path, or sets the value at that key
     * path to the default value, if provided, if the key does not exist.
     * @param defaultValue The value to apply if the setting does not already
     *                     exist.
     * @see #getAll
     */
    get(keyPath: string, defaultValue?: any, options?: SettingsOptions): JsonValue;

    /**
     * Returns all settings.
     * @see #get
     */
    getAll(): JsonValue;

    /**
     * Deletes the key and value at the given key path and returns the Settings
     * instance. Chainable.
     * @see #deleteAll
     */
    delete(keyPath: string, options?: SettingsOptions): Settings;

    /**
     * Deletes all settings and returns the Settings instance. Chainable.
     * @see #delete
     */
    deleteAll(options?: SettingsOptions): Settings;

    /**
     * Returns an Observer instance which watches the given key path for changes
     * and calls the given handler if the value changes. To unsubscribe from
     * changes, call observer.dispose().
     * @param keyPath The path to the key that we wish to watch for changes.
     * @param handler The callback that will be invoked if the value at the
     *                chosen key path changes. The context of this callback is
     *                that of the observer instance.
     */
    watch(keyPath: string, handler: SettingsHandler): SettingsObserver;

    /**
     * Returns the absolute path to where the settings file is or will be
     * stored.
     *
     * In general, the settings file is stored in your app's user data directory
     * in a file called Settings. The default user data directory for your
     * system can be found below.
     *
     * * MacOS: If you're running macOS, your app's default user data directory
     *   is `~/Library/Application\ Support/<Your App>`.
     * * Windows: If you're running Windows, your app's default user data
     *   directory is `%APPDATA%/<Your App>`.
     * * Linux: If you're running Linux, your app's default user data directory
     *   is either `$XDG_CONFIG_HOME/<Your App>` or `~/.config/<Your App>`.
     *
     * If you wish, you may change your app's default user data directory by
     * calling Electron's `app.setPath()` method before the ready event of the
     * app module is emitted, but this is not recommended, as it will likely
     * cause unintended consequences.
     */
    file(): string;

    /**
     * Sets a custom settings file path. By default, the settings file is
     * stored in your app's user data directory in a file called Settings,
     * but this method allows you to change this.
     *
     * Note: This method should be used cautiously, as it may have unintended
     * consequences. In general, this method should only be used for
     * debug purposes, and not in production apps.
     * @param filePath An absolute path to the settings file where the
     *                 user data will be saved.
     */
    setPath(filePath: string): Settings;

    /**
     * Clears the custom settings file path, if it exists.
     * @see #setPath
     */
    clearPath(): Settings;
}

interface SettingsObserver {
    /**
     * Disposes of this Observer instance.
     */
    dispose(): void;
}

declare var settings: Settings;
export = settings;
