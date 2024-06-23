declare namespace Translator {
    interface BazingaTranslator {
        /**
         * The current locale.
         */
        locale: string;

        /**
         * Fallback locale.
         */
        fallback: string;

        /**
         * Placeholder prefix.
         */
        placeHolderPrefix: string;

        /**
         * Placeholder suffix.
         */
        placeHolderSuffix: string;

        /**
         * Default domain.
         */
        defaultDomain: string;

        /**
         * Plural separator.
         */
        pluralSeparator: string;

        /**
         * Adds a translation entry.
         *
         * @param id         The message id
         * @param message    The message to register for the given id
         * @param domain   The domain for the message or null to use the default
         * @param locale   The locale or null to use the default
         */
        add(id: string, message: string, domain?: string, locale?: string): BazingaTranslator;

        /**
         * Translates the given message.
         *
         * @param id               The message id
         * @param parameters     An array of parameters for the message
         * @param domain         The domain for the message or null to guess it
         * @param locale         The locale or null to use the default
         */
        trans(id: string, parameters?: any, domain?: string, locale?: string): string;

        /**
         * Translates the given choice message by choosing a translation according to a number.
         *
         * @param id               The message id
         * @param number           The number to use to find the indice of the message
         * @param parameters     An array of parameters for the message
         * @param domain         The domain for the message or null to guess it
         * @param locale         The locale or null to use the default
         */
        transChoice(id: string, number: number, parameters?: any, domain?: string, locale?: string): string;

        /**
         * Loads translations from JSON.
         *
         * @param data     A JSON string or object literal
         */
        fromJSON(data: string): BazingaTranslator;

        reset(): void;
    }
}

declare const Translator: Translator.BazingaTranslator;

export as namespace Translator;

export = Translator;
