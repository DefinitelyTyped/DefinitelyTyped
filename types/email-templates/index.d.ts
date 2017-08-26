// Type definitions for node-email-templates 2.6
// Project: https://github.com/niftylettuce/node-email-templates
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
//                 Matus Gura <https://github.com/gurisko>
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
 * @summary Callback signature.
 */
type EmailTemplateCallback = (err: any, results: EmailTemplateResults) => void;

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
    class EmailTemplate {
        /**
         * @summary Constructor.
         * @param {string} templateDir The template directory.
         */
        constructor(templateDir: string, options?: EmailTemplateOptions);

        /**
         * @summary Render a single template.
         * @param locals The template variables.
         * @param locale The language code.
         */
        render(locals: any, locale?: string): Promise<EmailTemplateResults>;

        /**
         * @summary Render a single template.
         * @param callback The callback function.
         */
        render(callback: EmailTemplateCallback): void;

        /**
         * @summary Render a single template.
         * @param locals The template variables.
         * @param callback The callback function.
         */
        render(locals: any, callback: EmailTemplateCallback): void;

        /**
         * @summary Render a single template.
         * @param locals The template variables.
         * @param locale The language code.
         * @param callback The callback function.
         */
        render(locals: any, locale: string, callback: EmailTemplateCallback): void;

        /**
         * @summary Render text
         * @param locals The template variables.
         * @param locale The language code.
         */
        renderText(locals: any, locale?: string): Promise<string>;

        /**
         * @summary Render text
         * @param locals The template variables.
         * @param callback The language code.
         */
        renderText(locals: any, callback: EmailTemplateCallback): void;

        /**
         * @summary Render text
         * @param locals The template variables.
         * @param locale The language code.
         * @param callback The language code.
         */
        renderText(locals: any, locale: string, callback: EmailTemplateCallback): void;

        /**
         * @summary Render subject
         * @param locals The template variables.
         * @param locale The language code.
         */
        renderSubject(locals: any, locale?: string): Promise<string>;

        /**
         * @summary Render subject
         * @param locals The template variables.
         * @param callback The language code.
         */
        renderSubject(locals: any, callback: EmailTemplateCallback): void;

        /**
         * @summary Render subject
         * @param locals The template variables.
         * @param locale The language code.
         * @param callback The language code.
         */
        renderSubject(locals: any, locale: string, callback: EmailTemplateCallback): void;

        /**
         * @summary Render HTML
         * @param locals The template variables.
         * @param locale The language code.
         */
        renderHtml(locals: any, locale?: string): Promise<string>;

        /**
         * @summary Render HTML
         * @param locals The template variables.
         * @param callback The language code.
         */
        renderHtml(locals: any, callback: EmailTemplateCallback): void;

        /**
         * @summary Render HTML
         * @param locals The template variables.
         * @param locale The language code.
         * @param callback The language code.
         */
        renderHtml(locals: any, locale: string, callback: EmailTemplateCallback): void;
    }
}
