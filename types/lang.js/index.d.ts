// Type definitions for lang.js 1.1
// Project: https://github.com/rmariuzzo/Lang.js#readme
// Definitions by: Krzysztof Gutkowski <https://github.com/LiquidPL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Lang;

export = Lang;

declare class Lang {
    constructor(options: Lang.Options);

    /**
     * Set messages source.
     *
     * @param messages The messages source.
     */
    setMessages(messages: Lang.Messages): void;

    /**
     * Get the current locale.
     *
     * @return The current locale.
     */
    getLocale(): string;

    /**
     * Set the current locale.
     *
     * @return void
     */
    setLocale(locale: string): void;

    /**
     * Get the fallback locale being used.
     *
     * @return The fallback locale.
     */
    getFallback(): string;

    /**
     * Set the fallback locale being used.
     *
     * @param fallback The fallback locale.
     */
    setFallback(fallback: string): void;

    /**
     * Checks whether a given key exists in the messages source.
     *
     * @param key The key of the message.
     * @param locale The locale of the message.
     *
     * @return true if the given key is defined on the messages source, otherwise false.
     */
    has(key: string, locale?: string): boolean;

    /**
     * Gets a translation message.
     *
     * @param key The key of the message.
     * @param replacements The replacements to be done in the message.
     * @param locale The locale to use, if not passed use the default locale.
     *
     * @return The translation message, if not found the given key.
     */
    get(key: string, replacements?: Lang.Replacements, locale?: string): string;

    /**
     * Gets a translation message.
     *
     * This method act as an alias to get() method, just without the locale parameter.
     *
     * @param key The key of the message.
     * @param replacements The replacements to be done in the message.
     *
     * @return The translation message, if not found the given key.
     */

    trans(key: string, replacements?: Lang.Replacements): string;

    /**
     * Gets the plural or singular form of the message specified based on an integer value.
     *
     * @param key The key of the message.
     * @param count The number of elements.
     * @param replacements The replacements to be done in the message.
     * @param locale The locale to use, if not passed use the default locale.
     *
     * @return The translation message according to an integer value.
     */
    choice(key: string, count: number, replacements?: Lang.Replacements, locale?: string): string;

    /**
     * Gets the plural or singular form of the message specified based on an integer value.
     *
     * This method act as an alias to choice() method, just without the locale parameter.
     *
     * @param key The key of the message.
     * @param count The number of elements.
     * @param replacements The replacements to be done in the message.
     *
     * @return The translation message according to an integer value.
     */
    transChoice(key: string, count: number, replacements?: Lang.Replacements): string;
}

declare namespace Lang {
    interface Messages {
        [index: string]: {
            [key: string]: string;
        };
    }

    interface Replacements {
        [key: string]: string;
    }

    interface Options {
        locale: string;
        fallback: string;
        messages: Messages;
    }
}
