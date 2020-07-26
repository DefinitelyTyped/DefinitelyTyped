import { Color, Modifiers } from "chalk";
import { EventEmitter } from "events";
import { WriteStream } from "tty";
import table = require("text-table");
import { format } from "util";

declare namespace createLogger {
    /**
     * Provides a set of colors.
     */
    type ColorMap<TObject> = {
        /**
         * Gets the color for the specified method-name.
         */
        [P in keyof TObject]?: typeof Color | typeof Modifiers | undefined;
    }

    /**
     * Provides a default color-set.
     */
    interface DefaultColorMap extends ColorMap<DefaultColorMap> {
        skip: "yellow",
        force: "yellow",
        create: "green",
        invoke: "bold",
        conflict: "red",
        identical: "cyan",
        info: "gray"
    }

    /**
     * Provides options for creating a logger.
     */
    interface LoggerOptions<TColors extends ColorMap<TColors> = DefaultColorMap> {
        /**
         * A set of categories and assigned `chalk`-formats.
         */
        colors?: TColors;

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
    type Logger<TColors extends ColorMap<TColors> = DefaultColorMap> = EventEmitter & {
        /**
         * Logs a message of the specified category.
         */
        [P in keyof TColors]: (...args: Parameters<typeof format>) => Logger<TColors>;
    } & {
        /**
         * Writes a log-message.
         *
         * @param format
         * The format of the log-messages.
         *
         * @param params
         * The parameters to replace variables with.
         */
        (format: string, params?: Record<string, any>): Logger<TColors>;

        /**
         * Writes a log-message.
         */
        write(...args: Parameters<typeof format>): Logger<TColors>;

        /**
         * Writes a log-message with an appended newline character.
         */
        writeln(...args: Parameters<typeof format>): Logger<TColors>;

        /**
         * Writes a success status with a check mark `✔`.
         */
        ok(...args: Parameters<typeof format>): Logger<TColors>;

        /**
         * Writes an error-message with a prepended cross mark.
         */
        error(...args: Parameters<typeof format>): Logger<TColors>;

        /**
         * Writes a table to the console.
         */
        table: typeof table;
    };
}

declare function createLogger<TColors extends createLogger.ColorMap<TColors> = createLogger.DefaultColorMap>(
    options: createLogger.LoggerOptions<TColors>): createLogger.Logger<TColors>;

/**
 * Creates a logger with the specified `options`.
 */
export = createLogger;
