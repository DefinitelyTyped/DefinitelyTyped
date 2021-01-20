import { Color, Modifiers } from "chalk";
import { EventEmitter } from "events";
import { WriteStream } from "tty";
import table = require("text-table");
import { format } from "util";

declare namespace createLogger {
    /**
     * Provides a set of colors.
     */
    type ColorMap<TKeys extends string | number | symbol> = {
        /**
         * Gets the color for the specified method-name.
         */
        [P in TKeys]: typeof Color | typeof Modifiers;
    };

    /**
     * Provides default color-categories.
     */
    type DefaultCategories =
        "skip" |
        "force" |
        "create" |
        "invoke" |
        "conflict" |
        "identical" |
        "info";

    /**
     * Provides options for creating a logger.
     */
    interface LoggerOptions<TCategories extends string | number | symbol = DefaultCategories> {
        /**
         * A set of categories and assigned `chalk`-formats.
         */
        colors?: ColorMap<TCategories>;

        /**
         * The console to write log-messages to.
         */
        console?: Console;

        /**
         * The stream to write other messages to.
         */
        stderr?: WriteStream;

        /**
         * The stream to write other messages to.
         */
        stdout?: WriteStream;
    }

    /**
     * Provides the functionality to log messages.
     */
    type Logger<TCategories extends string | number | symbol = DefaultCategories> = EventEmitter & {
        /**
         * Logs a message of the specified category.
         */
        [P in TCategories]: (...args: Parameters<typeof format>) => Logger<TCategories>;
    } & {
        /**
         * Writes a log-message.
         *
         * @param format
         * The format of the log-messages.
         * See <https://github.com/mikeal/logref> for more info.
         *
         * @param params
         * The parameters to replace variables with.
         */
        (format?: string, params?: Record<string, any>): Logger<TCategories>;

        /**
         * Writes a log-message.
         */
        (...args: Parameters<Console["error"]>): Logger<TCategories>;

        /**
         * Writes a log-message.
         */
        write(...args: Parameters<typeof format>): Logger<TCategories>;

        /**
         * Writes a log-message with an appended newline character.
         */
        writeln(...args: Parameters<typeof format>): Logger<TCategories>;

        /**
         * Writes a success status with a check mark `✔`.
         */
        ok(...args: Parameters<typeof format>): Logger<TCategories>;

        /**
         * Writes an error-message with a prepended cross mark.
         */
        error(...args: Parameters<typeof format>): Logger<TCategories>;

        /**
         * Writes a table to the console.
         */
        table: typeof table;
    };
}

/**
 * Creates a new `Logger` instance with the specified `options`.
 *
 * @param options
 * The options for creating the new logger.
 */
declare function createLogger<TCategories extends string | number | symbol = createLogger.DefaultCategories>(
    options: createLogger.LoggerOptions<TCategories>): createLogger.Logger<TCategories>;

/**
 * Creates a logger with the specified `options`.
 */
export = createLogger;
