// Type definitions for signale 1.4
// Project: https://github.com/klaussinani/signale
// Definitions by: Resi Respati <https://github.com/resir014>
//                 Joydip Roy <https://github.com/rjoydip>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="node" />

declare namespace signale {
    type DefaultMethods =
        | 'await'
        | 'complete'
        | 'error'
        | 'debug'
        | 'fatal'
        | 'fav'
        | 'info'
        | 'note'
        | 'pause'
        | 'pending'
        | 'star'
        | 'start'
        | 'success'
        | 'warn'
        | 'watch'
        | 'log';

    interface CommandType {
        /** The icon corresponding to the logger. */
        badge: string;
        /**
         * The color of the label, can be any of the foreground colors supported by
         * [chalk](https://github.com/chalk/chalk#colors).
         */
        color: string;
        /** The label used to identify the type of the logger. */
        label: string;
        logLevel?: string | undefined;
        stream?: NodeJS.WriteStream | NodeJS.WriteStream[] | undefined;
    }

    interface SignaleConfig {
        /** Display the scope name of the logger. */
        displayScope?: boolean | undefined;
        /** Display the badge of the logger. */
        displayBadge?: boolean | undefined;
        /** Display the current local date in `YYYY-MM-DD` format. */
        displayDate?: boolean | undefined;
        /** Display the name of the file that the logger is reporting from. */
        displayFilename?: boolean | undefined;
        /** Display the label of the logger. */
        displayLabel?: boolean | undefined;
        /** Display the current local time in `HH:MM:SS` format. */
        displayTimestamp?: boolean | undefined;
        /** Underline the logger label. */
        underlineLabel?: boolean | undefined;
        /** Underline the logger message. */
        underlineMessage?: boolean | undefined;
        underlinePrefix?: boolean | undefined;
        underlineSuffix?: boolean | undefined;
        uppercaseLabel?: boolean | undefined;
    }

    interface SignaleOptions<TTypes extends string = DefaultMethods> {
        /** Sets the configuration of an instance overriding any existing global or local configuration. */
        config?: SignaleConfig | undefined;
        disabled?: boolean | undefined;
        /**
         * Name of the scope.
         */
        scope?: string | undefined;
        /**
         * Holds the configuration of the custom and default loggers.
         */
        types?: Partial<Record<TTypes, CommandType>> | undefined;
        interactive?: boolean | undefined;
        logLevel?: string | undefined;
        timers?: Map<string, Date> | undefined;
        /**
         * Destination to which the data is written, can be any valid
         * [Writable stream](https://nodejs.org/api/stream.html#stream_writable_streams).
         */
        stream?: NodeJS.WriteStream | NodeJS.WriteStream[] | undefined;
        secrets?: Array<string | number> | undefined;
    }

    interface SignaleConstructor {
        new <TTypes extends string = DefaultMethods>(options?: SignaleOptions<TTypes>): Signale<TTypes>;
    }

    interface SignaleBase<TTypes extends string = DefaultMethods> {
        /**
         * Sets the configuration of an instance overriding any existing global or local configuration.
         *
         * @param configObj Can hold any of the documented options.
         */
        config(configObj: SignaleConfig): Signale<TTypes>;
        /**
         * Defines the scope name of the logger.
         *
         * @param name Can be one or more comma delimited strings.
         */
        scope(...name: string[]): Signale<TTypes>;
        /** Clears the scope name of the logger. */
        unscope(): void;
        /**
         * Sets a timers and accepts an optional label. If none provided the timer will receive a unique label automatically.
         *
         * @param label Label corresponding to the timer. Each timer must have its own unique label.
         * @returns a string corresponding to the timer label.
         */
        time(label?: string): string;
        /**
         * Deactivates the timer to which the given label corresponds. If no label
         * is provided the most recent timer, that was created without providing a
         * label, will be deactivated.
         *
         * @param label Label corresponding to the timer, each timer has its own unique label.
         * @param span Total running time.
         */
        timeEnd(label?: string, span?: number): { label: string; span?: number | undefined };
        /**
         * Disables the logging functionality of all loggers belonging to a specific instance.
         */
        disable(): void;
        /**
         * Enables the logging functionality of all loggers belonging to a specific instance.
         */
        enable(): void;
        /**
         * Checks whether the logging functionality of a specific instance is enabled.
         *
         * @returns a boolean that describes whether or not the logger is enabled.
         */
        isEnabled(): boolean;
        /**
         * Adds new secrets/sensitive-information to the targeted Signale instance.
         *
         * @param secrets Array holding the secrets/sensitive-information to be filtered out.
         */
        addSecrets(secrets: string[] | number[]): void;
        /**
         * Removes all secrets/sensitive-information from the targeted Signale instance.
         */
        clearSecrets(): void;
    }

    type LoggerFunc = (message?: any, ...optionalArgs: any[]) => void;
    type Signale<TTypes extends string = DefaultMethods> = SignaleBase<TTypes> &
        Record<TTypes, LoggerFunc> &
        Record<DefaultMethods, LoggerFunc>;
}

declare const signale: signale.Signale<signale.DefaultMethods> & {
    Signale: signale.SignaleConstructor;
    SignaleConfig: signale.SignaleConfig;
    SignaleOptions: signale.SignaleOptions;
    DefaultMethods: signale.DefaultMethods;
};

export = signale;
