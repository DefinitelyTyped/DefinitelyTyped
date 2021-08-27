// Type definitions for @wordpress/date 3.3
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/date/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { Moment, MomentInput } from 'moment';

export interface DateSettings {
    formats: {
        date: string;
        datetime: string;
        datetimeAbbreviated: string;
        time: string;
    };
    l10n: {
        locale: string;
        meridiem: {
            AM: string;
            PM: string;
            am: string;
            pm: string;
        };
        months: string[];
        monthsShort: string[];
        relative: {
            future: string;
            past: string;
        }
        weekdays: string[];
        weekdaysShort: string[];
    };
    timezone: {
        offset: string;
        string: string;
    };
}

/**
 * Formats a date (like `date()` in PHP), in the site's timezone.
 *
 * @param dateFormat - PHP-style formatting string. See {@link https://php.net/date }.
 * @param [dateValue] - Date object or string, parsable by moment.js.
 * @param [timezone] - Timezone to output result in or a
 *                     UTC offset. Defaults to timezone from
 *                     site. Notice: `boolean` is effectively
 *                     deprecated, but still supported for
 *                     backward compatibility reasons
 *
 * @returns - Formatted date.
 */
export function date(dateFormat: string, dateValue?: MomentInput, timezone?: string|boolean): string;

/**
 * Formats a date (like `date_i18n()` in PHP).
 *
 * @param dateFormat - PHP-style formatting string. See {@link https://php.net/date }.
 * @param [dateValue] - Date object or string, parsable by moment.js.
 * @param [timezone] - Timezone to output result in or a
 *                     UTC offset. Defaults to timezone from
 *                     site. Notice: `boolean` is effectively
 *                     deprecated, but still supported for
 *                     backward compatibility reasons
 *
 * @returns - Formatted date.
 */
export function dateI18n(dateFormat: string, dateValue?: MomentInput, timezone?: string|boolean): string;

/**
 * Formats a date. Does not alter the date's timezone.
 *
 * @param dateFormat - PHP-style formatting string. See {@link https://php.net/date }.
 * @param [dateValue] - Date object or string, parsable by moment.js.
 *
 * @return - Formatted date.
 */
export function format(dateFormat: string, dateValue?: MomentInput): string;

/**
 * Create and return a JavaScript Date Object from a date string in the WP timezone.
 *
 * @param [dateValue] - Date formatted in the WP timezone.
 */
export function getDate(dateValue?: MomentInput): Date;

/**
 * Formats a date (like `date()` in PHP), in the UTC timezone.
 *
 * @param dateFormat - PHP-style formatting string. See {@link https://php.net/date }.
 * @param [dateValue] - Date object or string, parsable by moment.js.
 *
 * @return - Formatted date.
 */
export function gmdate(dateFormat: string, dateValue?: MomentInput): string;

/**
 * Check whether a date is considered in the future according to the WordPress settings.
 *
 * @param dateValue - Value parsable by moment.js in the Defined WP Timezone.
 */
export function isInTheFuture(dateValue: MomentInput): boolean;

/**
 * Adds a locale to moment, using the format supplied by `wp_localize_script()`.
 *
 * @param dateSettings - Settings, including locale data.
 */
export function setSettings(dateSettings: DateSettings): void;
