// Type definitions for Winreg v0.0.16
// Project: https://github.com/fresc81/node-winreg/
// Definitions by: RX14 <https://github.com/RX14>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var Winreg: WinregStatic;

interface WinregStatic {
    /**
     * Create a new Winreg instance with the given options.
     * @param options options object
     */
    new (options: Winreg.Options): Winreg;

    /**
     * HKEY_LOCAL_MACHINE registry hive.
     */
    HKLM: string;

    /**
     * HKEY_CURRENT_USER registry hive.
     */
    HKCU: string;

    /**
     * HKEY_CLASSES_ROOT registry hive.
     */
    HKCR: string;

    /**
     * HKEY_USERS registry hive.
     */
    HKU: string;

    /**
     * HKEY_CURRENT_CONFIG registry hive.
     */
    HKCC: string;

    /**
     * Array of available registry hives.
     */
    HIVES: Array<string>;

    /**
     * Registry value type STRING.
     *
     * Values of this type contain a string.
     */
    REG_SZ: string;

    /**
     * Registry value type MULTILINE_STRING.
     *
     * Values of this type contain a multiline string.
     */
    REG_MULTI_SZ: string;

    /**
     * Registry value type EXPANDABLE_STRING.
     *
     * Values of this type contain an expandable string.
     */
    REG_EXPAND_SZ: string;

    /**
     * Registry value type DOUBLE_WORD.
     *
     * Values of this type contain a double word (32 bit integer).
     */
    REG_DWORD: string;

    /**
     * Registry value type QUAD_WORD.
     *
     * Values of this type contain a quad word (64 bit integer).
     */
    REG_QWORD: string;

    /**
     * Registry value type BINARY.
     *
     * Values of this type contain a binary value.
     */
    REG_BINARY: string;

    /**
     * Registry value type UNKNOWN.
     *
     * Values of this type contain a value of an unknown type.
     */
    REG_NONE: string;

    /**
     * Array of available registry value types.
     */
    REG_TYPES: Array<string>;
}

interface Winreg {
    /**
     * Hostname, if set in options.
     * @readonly
     */
    host: string;

    /**
     * Hive ID.
     * @readonly
     */
    hive: string;

    /**
     * The registry key.
     * @readonly
     */
    key: string;

    /**
     * The path of the registry key, including hostname (if set) and hive.
     * @readonly
     */
    path: string;

    /**
     * Architecture this key belongs to.
     * @readonly
     */
    arch: string;

    /**
     * A new Winreg instance of the parent key.
     * @readonly
     */
    parent: Winreg;

    /**
     * Retrieves all values from this registry key.
     *
     * @param cb Callback with an array of RegistryItem objects, one for each value.
     */
    values(cb: (err: Error, result: Array<Winreg.RegistryItem>) => void): void;

    /**
     * Retrieves all subkeys of this registry key.
     *
     * @param cb Callback with an array of Winreg objects, one for each subkey.
     */
    keys(cb: (err: Error, result: Array<Winreg>) => void): void;

    /**
     * Retrieves a named value from this registry key.
     *
     * @param name Name of the value to retrieve.
     * @param cb Callback with a RegistryItem object for the value.
     */
    get(name: string, cb: (err: Error, result: Winreg.RegistryItem) => void): void;

    /**
     * Sets a named value in this registry key. Overwrites existing value.
     *
     * @param name Name of the value to set.
     * @param type Type of the value to set.
     * @param value Value of value to set.
     * @param cb Callback with any errors.
     */
    set(name: string, type: string, value: string, cb: (err: Error) => void): void;

    /**
     * Remove a named value from this registry key.
     *
     * @param name Name of the value to remove.
     * @param cb Callback with any errors.
     */
    remove(name: string, cb: (err: Error) => void): void;

    /**
     * Create this registry key.
     *
     * @param cb Callback with any errors.
     */
    create(cb: (err: Error) => void): void;

    /**
     * Erase this registry key and its contents.
     *
     * @param cb Callback with any errors.
     */
    erase(cb: (err: Error) => void): void;
}

declare namespace Winreg {
    export interface Options {
        /**
         * Optional hostname, must start with '\\' sequence.
         */
        host?: string;

        /**
         * Optional hive ID, default is HKLM.
         */
        hive?: string;

        /**
         * Optional key, default is the root key.
         */
        key?: string;

        /**
         * Optional architecture of the registry.
         */
        arch?: string;
    }

    /**
     * A single registry value record
     */
    interface RegistryItem {
        /**
         * Hostname, if set in options.
         * @readonly
         */
        host: string;

        /**
         * Hive ID.
         * @readonly
         */
        hive: string;

        /**
         * Key that the registry value belongs to.
         * @readonly
         */
        key: string;

        /**
         * Name of the registry value.
         * @readonly
         */
        name: string;

        /**
         * Type of the registry value.
         * @readonly
         */
        type: string;

        /**
         * Value of the registry value, as a string.
         * @readonly
         */
        value: string;

        /**
         * Architecture this value belongs to.
         * @readonly
         */
        arch: string;
    }
}

declare module "winreg" {
    export = Winreg;
}
