// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface DefaultTo {
        /**
         * Checks `value` to determine whether a default value should be returned in
         * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
         * or `undefined`.
         *
         * @param value The value to check.
         * @param defaultValue The default value.
         * @returns Returns the resolved value.
         */
        (): DefaultTo;
        /**
         * Checks `value` to determine whether a default value should be returned in
         * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
         * or `undefined`.
         *
         * @param value The value to check.
         * @param defaultValue The default value.
         * @returns Returns the resolved value.
         */
        <T>(defaultValue: T): DefaultTo1x1<T>;
        /**
         * Checks `value` to determine whether a default value should be returned in
         * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
         * or `undefined`.
         *
         * @param value The value to check.
         * @param defaultValue The default value.
         * @returns Returns the resolved value.
         */
        <T>(defaultValue: T, value: T | null | undefined): T;
        /**
         * Checks `value` to determine whether a default value should be returned in
         * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
         * or `undefined`.
         *
         * @param value The value to check.
         * @param defaultValue The default value.
         * @returns Returns the resolved value.
         */
        <TDefault>(defaultValue: TDefault): DefaultTo2x1<TDefault>;
        /**
         * Checks `value` to determine whether a default value should be returned in
         * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
         * or `undefined`.
         *
         * @param value The value to check.
         * @param defaultValue The default value.
         * @returns Returns the resolved value.
         */
        <T, TDefault>(defaultValue: TDefault, value: T | null | undefined): T | TDefault;
    }
    interface DefaultTo1x1<T> {
        /**
         * Checks `value` to determine whether a default value should be returned in
         * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
         * or `undefined`.
         *
         * @param value The value to check.
         * @param defaultValue The default value.
         * @returns Returns the resolved value.
         */
        (): DefaultTo1x1<T>;
        /**
         * Checks `value` to determine whether a default value should be returned in
         * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
         * or `undefined`.
         *
         * @param value The value to check.
         * @param defaultValue The default value.
         * @returns Returns the resolved value.
         */
        (value: T | null | undefined): T;
    }
    interface DefaultTo2x1<TDefault> {
        /**
         * Checks `value` to determine whether a default value should be returned in
         * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
         * or `undefined`.
         *
         * @param value The value to check.
         * @param defaultValue The default value.
         * @returns Returns the resolved value.
         */
        (): DefaultTo2x1<TDefault>;
        /**
         * Checks `value` to determine whether a default value should be returned in
         * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
         * or `undefined`.
         *
         * @param value The value to check.
         * @param defaultValue The default value.
         * @returns Returns the resolved value.
         */
        <T>(value: T | null | undefined): T | TDefault;
    }
}

declare const defaultTo: Lodash.DefaultTo;
export = defaultTo;
