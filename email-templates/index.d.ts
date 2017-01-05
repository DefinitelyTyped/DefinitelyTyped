// Type definitions for node-email-templates
// Project: https://github.com/niftylettuce/node-email-templates
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @summary Interface for result of email template.
 * @interface
 */
interface EmailTemplateResults {
    /**
     * @summary HTML result.
     * @type {string}
     */
    html: string;

    /**
     * @summary Text result.
     * @type {string}
     */
    text: string;

    /**
     * @summary Subject result.
     * @type {string}
     */
    subject: string;
}

/**
 * @summary Interface for callback of email callback.
 * @interface
 */
interface EmailTemplateCallback {
    /**
     * @summary Callback signature.
     */
    (err: Object, results: EmailTemplateResults): void;
}

/**
 * @summary Interface for email-template options
 * @interface
 */
interface EmailTemplateOptions {
    sassOptions?: any;
    juiceOptions?: any;
}

declare module "email-templates" {
    /**
     * @summary Email template class.
     * @class
     */
    export class EmailTemplate {
        /**
         * @summary Constructor.
         * @param {string} templateDir The template directory.
         */
        constructor(templateDir: string, options?: EmailTemplateOptions);

        /**
         * @summary Render a single template.
         * @param {EmailTemplateCallback|Object} locals The variables or callback function.
         * @param {EmailTemplateCallback} callback The callback function.
         */
        render(locals: EmailTemplateCallback|Object, callback?: EmailTemplateCallback): void;
    }
}
