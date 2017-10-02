// Type definitions for valdr.js (valdr-message) 1.1
// Project: https://github.com/netceteragroup/valdr
// Definitions by: Kai Ilbertz <https://github.com/ilbertz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace valdr.message {

    interface ValdrMessage {
        /*
         * Default message template URL.
         */
        templateUrl: string;

        /**
         * A boolean that shows if Angular-translate is available.
         */
        translateAvailable: boolean;

        /**
         * A boolean that allows to show messages for the AngularJS built-in validators like 'required' or 'number'.
         */
        angularMessagesEnabled: boolean;

        /**
         * Sets the default message template.
         * @param template the default message template (eg "<div class="valdr-message">{{ violation.message }}</div>").
         */
        setTemplate(template: string): void;

        /**
         * Adds messages for AngularJS build-in validators (eg "required" and "number") or for specific fields (eg "Person.lastName.required").
         * @param messages the list of key/value pairs.
         */
        addMessages(messages: {[key:string]: string}): void;

        /**
         * Gets the validator message.
         * @param typeName the name of the type.
         * @param fieldName the name of the field.
         * @param validatorName the name of the validator.
         * @returns {string} the message.
         */
        getMessage(typeName: string, fieldName: string, validatorName: string): string;
    }

    interface ValdrMessageProvider {
        /**
         * Sets the default message template.
         * @param template the default message template (eg "<div class="valdr-message">{{ violation.message }}</div>").
         */
        setTemplate(template: string): void;

        /**
         * Sets the URL for the default message template (eg "/partials/valdrMessageTemplate.html").
         * @param url the URL of the default message template.
         */
        setTemplateUrl(url: string): void;

        /**
         * Adds messages for AngularJS build-in validators (eg "required" and "number") or for specific fields (eg "Person.lastName.required").
         * @param messages the list of key/value pairs.
         */
        addMessages(messages: {[key:string]: string}): void;

        /**
         * Gets the validator message.
         * @param typeName the name of the type.
         * @param fieldName the name of the field.
         * @param validatorName the name of the validator.
         * @returns {string} the message.
         */
        getMessage(typeName: string, fieldName: string, validatorName: string): string;
    }
}
