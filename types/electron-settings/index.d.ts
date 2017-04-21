// Type definitions for electron-settings 3.0
// Project: https://github.com/nathanbuchar/electron-settings#readme
// Definitions by: Ian Copp <https://github.com/icopp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import * as fs from "fs";

type SettingsHandler = (newValue: any, oldValue: any) => any;

interface JsonObject {
    [x: string]: JsonValue;
}

interface JsonArray extends Array<JsonValue> {} // tslint:disable-line no-empty-interface

type JsonValue = string | number | boolean | null | JsonArray | JsonObject;

interface SettingsOptions {
    /**
     * Prettify the JSON output. Defaults to `false`.
     */
    prettify?: boolean;
}

declare class Settings extends NodeJS.EventEmitter {
    /**
     * The absolute path to the settings file on the disk.
     */
    private _settingsFilePath: string;

    /**
     * The FSWatcher instance. This will watch if the settings file and
     * notify key path observers.
     */
    private _fsWatcher: fs.FSWatcher;

    private _handleSettingsFileChange: () => any;

    /**
     * ElectronSettings event names.
     */
    readonly FSWatcherEvents: {
        CHANGE: 'change'
        RENAME: 'rename'
    };

    /**
     * Settings event names.
     */
    readonly Events: {
        CHANGE: 'change'
    };

    constructor();

    /**
     * Watches the settings file for changes using the native `FSWatcher`
     * class in case the settings file is changed outside of ElectronSettings'
     * jursidiction.
     */
    private _watchSettings(): void;

    /**
     * Unwatches the settings file by closing the FSWatcher and nullifying its
     * references. If the `reset` parameter is true, attempt to watch the
     * settings file again.
     */
    private _unwatchSettings(reset?: boolean): void;

    /**
     * Ensures that the settings file exists, then initializes the FSWatcher.
     * @throws Error
     */
    private _ensureSettings(): void;

    /**
     * Writes the settings to the disk.
     * @throws Error
     */
    private _writeSettings(obj: JsonValue, opts: SettingsOptions): void;

    /**
     * Returns the parsed contents of the settings file.
     */
    private _readSettings(): JsonValue;

    /**
     * Called when the settings file has been changed or renamed
     * (moved/deleted).
     */
    private _onSettingsFileChange(eventType: string): void;

    /**
     * Broadcasts the internal "change" event.
     * @emits ElectronSettings#change
     */
    private _emitChangeEvent(): void;

    /**
     * Returns a boolean indicating whether the settings object contains
     * the given key path.
     */
    private _checkKeyPathExists(keyPath: string): boolean;

    /**
     * Sets the value at the given key path, or the entire settings object if
     * an empty key path is given.
     */
    private _setValueAtKeyPath(keyPath: string, value: JsonValue, opts: SettingsOptions): void;

    /**
     * Returns the value at the given key path, or sets the value at that key
     * path to the default value, if provided, if the key does not exist. If an
     * empty key path is given, the entire settings object will be returned.
     */
    private _getValueAtKeyPath(keyPath: string, defaultValue: any): JsonValue;

    /**
     * Deletes the key and value at the given key path, or clears the entire
     * settings object if an empty key path is given.
     */
    private _deleteValueAtKeyPath(keyPath: string, opts: SettingsOptions): void;

    /**
     * Watches the given key path for changes and calls the given handler if the
     * value changes. To unsubscribe from changes, call `dispose()` on the
     * Observer instance that is returned.
     */
    private _watchValueAtKeyPath(keyPath: string, handler: SettingsHandler): SettingsObserver;

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
    get(keyPath: string, defaultValue?: any): JsonValue;

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
}

declare class SettingsObserver {
    /**
     * A reference to the Settings instance.
     */
    private _settings: Settings;

    /**
     * The key path that this observer instance is watching for changes.
     */
    private _keyPath: string;

    /**
     * The handler function to be called when the value at the observed key path
     * is changed.
     */
    private _handler: SettingsHandler;

    /**
     * The current value of the setting at the given key path.
     */
    private _currentValue: JsonValue;

    constructor(settings: Settings, keyPath: string, handler: SettingsHandler, currentValue: JsonValue);

    /**
     * Initializes this instance.
     */
    private _init(): void;

    /**
     * Called when the settings file is changed.
     */
    private _onChange(): void;

    /**
     * Disposes of this Observer instance.
     */
    dispose(): void;
}

export = new Settings();
