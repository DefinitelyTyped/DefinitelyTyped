// Type definitions for jquery.bbq 1.2
// Project: http://benalman.com/projects/jquery-bbq-plugin/
// Definitions by: Ryan Cavanaugh <https://github.com/RyanCavanaugh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import $ = require('jquery');

declare global {
    namespace JQueryBbq {

        interface JQuery {
            /**
             * Adds a 'state' into the browser history at the current position, setting
             * location.hash and triggering any bound <hashchange event> callbacks
             * (provided the new state is different than the previous state).
             *
             * @name params A serialized params string or a hash string beginning with # to merge into location.hash.
             * @name merge_mode Merge behavior defaults to 0 if merge_mode is not specified (unless a hash string beginning with # is specified, in which case merge behavior defaults to 2)
             */
            pushState(params?: string, merge_mode?: number): void;

            pushState(params?: any, merge_mode?: number): void;

            /**
             * Retrieves the current 'state' from the browser history, parsing
             * location.hash for a specific key or returning an object containing the
             * entire state, optionally coercing numbers, booleans, null and undefined
             * values.
             *
             * @name key An optional state key for which to return a value.
             * @name coerce If true, coerces any numbers or true, false, null, and undefined to their actual value. Defaults to false
             */
            getState(key?: string, coerce?: boolean): any;

            getState(coerce?: boolean): any;

            /**
             * Remove one or more keys from the current browser history 'state', creating
             * a new state, setting location.hash and triggering any bound
             * <hashchange event> callbacks (provided the new state is different than
             * the previous state).
             *
             * @name key One or more key values to remove from the current state.
             */
            removeState(...key: any[]): void;
        }

        interface ParamFragment {
            (url?: string): string;

            (url: string, params: any, merge_mode?: number): string;

            /**
             * Specify characters that will be left unescaped when fragments are created
             * or merged using <jQuery.param.fragment>, or when the fragment is modified
             * using <jQuery.bbq.pushState>. This option only applies to serialized data
             * object fragments, and not set-as-string fragments. Does not affect the
             * query string. Defaults to ",/" (comma, forward slash).
             *
             * @name chars The characters to not escape in the fragment. If unspecified, defaults to empty string (escape all characters).
             */
            noEscape: (chars?: string) => void;

            /**
             * TODO: DESCRIBE
             *
             * @name state TODO: DESCRIBE
             */
            ajaxCrawlable(state?: boolean): boolean;
        }

        interface JQueryDeparam {
            /**
             * Deserialize a params string into an object, optionally coercing numbers,
             * booleans, null and undefined values; this method is the counterpart to the
             * internal jQuery.param method.
             *
             * @name params A params string to be parsed.
             * @name coerce If true, coerces any numbers or true, false, null, and undefined to their actual value. Defaults to false if omitted.
             */
            (params: string, coerce?: boolean): any;


            /**
             * Parse the query string from a URL or the current window.location.href,
             * deserializing it into an object, optionally coercing numbers, booleans,
             * null and undefined values.
             *
             * @name url An optional params string or URL containing query string params to be parsed. If url is omitted, the current window.location.href is used.
             * @name coerce If true, coerces any numbers or true, false, null, and undefined to their actual value. Defaults to false if omitted.
             */
            querystring(url?: string, coerce?: boolean): any;

            /**
             * Parse the fragment (hash) from a URL or the current window.location.href,
             * deserializing it into an object, optionally coercing numbers, booleans,
             * null and undefined values.
             *
             * @name url An optional params string or URL containing fragment (hash) params to be parsed. If url is omitted, the current window.location.href is used.
             * @name coerce If true, coerces any numbers or true, false, null, and undefined to their actual value. Defaults to false if omitted.
             */
            fragment(url?: string, coerce?: boolean): any;
        }

        interface EventObject extends JQueryEventObject {
            fragment: string;

            getState(key?: string, coerce?: boolean);
        }
    }

    interface JQueryParam {
        /**
         * Parse the query string from a URL or the current window.location.href,
         * deserializing it into an object, optionally coercing numbers, booleans,
         * null and undefined values.
         *
         * @name url An optional params string or URL containing query string params to be parsed. If url is omitted, the current window.location.href is used.
         * @name coerce (Boolean) If true, coerces any numbers or true, false, null, and undefined to their actual value. Defaults to false if omitted.
         * @name merge_mode An object representing the deserialized params string.
         */
        querystring(url?: string, coerce?: boolean, merge_mode?: number): string;

        querystring(url?: string, coerce?: any, merge_mode?: number): string;

        fragment: JQueryBbq.ParamFragment;

        /**
         * Returns a params string equivalent to that returned by the internal
         * jQuery.param method, but sorted, which makes it suitable for use as a
         * cache key.
         *
         * @name obj An object to be serialized.
         * @name traditional Params deep/shallow serialization mode. See the documentation at http://api.jquery.com/jQuery.param/ for more detail.
         */
        sorted(obj: any, traditional?: boolean): string;
    }

    interface JQueryStatic {
        bbq: JQueryBbq.JQuery;

        deparam: JQueryBbq.JQueryDeparam;

        /**
         * Get the internal "Default URL attribute per tag" list, or augment the list
         * with additional tag-attribute pairs, in case the defaults are insufficient.
         *
         * @name tag_attr An object containing a list of tag names and their associated default attribute names in the format { tag: 'attr', ... } to be merged into the internal tag-attribute list.
         */
        elemUrlAttr(tag_attr?: any): any;
    }

    interface JQuery {
        querystring(attr?: any, params?: any, merge_mode?: number): JQuery;

        fragment(attr?: any, params?: any, merge_mode?: number): JQuery;

        hashchange(eventData?: any, handler?: (eventObject: JQueryBbq.EventObject) => any): JQuery;

        hashchange(handler: (eventObject: JQueryBbq.EventObject) => any): JQuery;
    }
}
