// Type definitions for node-email-templates
// Project: https://github.com/niftylettuce/node-email-templates
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>, Matus Gura <https://github.com/gurisko>
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
    disableJuice?: boolean;
    juiceOptions?: any;
    sassOptions?: any;
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
         * @param {Object} locals The template variables.
         * @param {string} locale The language code.
         * @returns {Promise<EmailTemplateResults>}
         */
        render(locals: Object, locale?: string): Promise<EmailTemplateResults>;

        /**
         * @summary Render a single template.
         * @param {EmailTemplateCallback} callback The callback function.
         */
        render(callback: EmailTemplateCallback): void;

        /**
         * @summary Render a single template.
         * @param {Object} locals The template variables.
         * @param {EmailTemplateCallback} callback The callback function.
         */
        render(locals: Object, callback: EmailTemplateCallback): void;

        /**
         * @summary Render a single template.
         * @param {Object} locals The template variables.
         * @param {string} locale The language code.
         * @param {EmailTemplateCallback} callback The callback function.
         */
        render(locals: Object, locale: string, callback: EmailTemplateCallback): void;

        /**
         * @summary Render text
         * @param {Object} locals The template variables.
         * @param {string} locale The language code.
         * @returns {Promise<string>}
         */
        renderText(locals: Object, locale?: string): Promise<string>;

        /**
         * @summary Render text
         * @param {Object} locals The template variables.
         * @param {EmailTemplateCallback} callback The language code.
         */
        renderText(locals: Object, callback: EmailTemplateCallback): void;

        /**
         * @summary Render text
         * @param {Object} locals The template variables.
         * @param {string} locale The language code.
         * @param {EmailTemplateCallback} callback The language code.
         */
        renderText(locals: Object, locale: string, callback: EmailTemplateCallback): void;

        /**
         * @summary Render subject
         * @param {Object} locals The template variables.
         * @param {string} locale The language code.
         * @returns {Promise<string>}
         */
        renderSubject(locals: Object, locale?: string): Promise<string>;

        /**
         * @summary Render subject
         * @param {Object} locals The template variables.
         * @param {EmailTemplateCallback} callback The language code.
         */
        renderSubject(locals: Object, callback: EmailTemplateCallback): void;

        /**
         * @summary Render subject
         * @param {Object} locals The template variables.
         * @param {string} locale The language code.
         * @param {EmailTemplateCallback} callback The language code.
         */
        renderSubject(locals: Object, locale: string, callback: EmailTemplateCallback): void;

        /**
         * @summary Render HTML
         * @param {Object} locals The template variables.
         * @param {string} locale The language code.
         * @returns {Promise<string>}
         */
        renderHtml(locals: Object, locale?: string): Promise<string>;

        /**
         * @summary Render HTML
         * @param {Object} locals The template variables.
         * @param {EmailTemplateCallback} callback The language code.
         */
        renderHtml(locals: Object, callback: EmailTemplateCallback): void;

        /**
         * @summary Render HTML
         * @param {Object} locals The template variables.
         * @param {string} locale The language code.
         * @param {EmailTemplateCallback} callback The language code.
         */
        renderHtml(locals: Object, locale: string, callback: EmailTemplateCallback): void;
    }
}
