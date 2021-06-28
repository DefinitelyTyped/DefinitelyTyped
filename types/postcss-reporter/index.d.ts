// Type definitions for postcss-reporter 7.0
// Project: https://github.com/postcss/postcss-reporter#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

import { PluginCreator, Message } from 'postcss';

declare namespace postcssReporter {
    /**
     * Additional options
     */
    interface Options extends DefaultOptions {
        /**
         * If true, the plugin will clear the result's messages after it logs them.
         * This prevents other plugins, or the whatever runner you use, from logging the same information again and causing confusion.
         * @default false
         */
        clearReportedMessages?: boolean;
        /**
         * By default, this reporter will format the messages for human legibility in the console.
         * To use another formatter, pass a function that
         * - accepts an object containing a messages array and a source string
         * - returns the string to report
         */
        formatter?: (input: { messages: Message[]; source: string }) => string;
        /**
         * If plugins is empty (as it is by default),
         * the reporter will log messages from every PostCSS plugin.
         * @default []
         */
        plugins?: string[];
        /**
         * Provide a filter function. It receives the message object and returns a truthy or falsy value,
         * indicating whether that particular message should be reported or not.
         */
        filter?: (message: Message) => boolean;
        /**
         * If true, not pass any messages into other plugins, or the whatever runner you use, for logging.
         * @default false
         */
        clearAllMessages?: boolean;
        /**
         * If true, after the plugin logs your messages it will throw an error if it found any warnings.
         * @default false
         */
        throwError?: boolean;
    }

    /**
     * Default plugin options
     */
    interface DefaultOptions {
        /**
         * If false, messages will not be sorted by line/column position.
         * @default true
         */
        sortByPosition?: boolean;
        /**
         * If true, no exclamatory triangle icons will be printed next to warnings.
         * @default false
         */
        noIcon?: boolean;
        /**
         * If true, plugin names will not be printed in brackets after messages.
         * @default false
         */
        noPlugin?: boolean;
        /**
         * By default, messages without line/column positions will be grouped at the beginning of the output.
         * To put them at the end, instead, use "last". To not bother sorting these, use "any".
         * @default 'first'
         */
        positionless?: 'first' | 'last' | 'any';
    }

    type PostCSSReporter = PluginCreator<Options>;
}

declare const postcssReporter: postcssReporter.PostCSSReporter;

export = postcssReporter;
