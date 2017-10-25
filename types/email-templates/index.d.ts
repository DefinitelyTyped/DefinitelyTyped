// Type definitions for node-email-templates 2.6
// Project: https://github.com/niftylettuce/node-email-templates
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
//                 Matus Gura <https://github.com/gurisko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface EmailTemplateResults {
    html: string;
    text: string;
    subject: string;
}

export type EmailTemplateCallback = (err: any, results: EmailTemplateResults) => void;

export interface EmailTemplateOptions {
    disableJuice?: boolean;
    juiceOptions?: any;
    sassOptions?: any;
}

export class EmailTemplate {
    /**
     * @param templateDir The template directory.
     */
    constructor(templateDir: string, options?: EmailTemplateOptions);

    /**
     * Render a single template.
     * @param locals The template variables.
     * @param locale The language code.
     */
    render(locals: any, locale?: string): Promise<EmailTemplateResults>;

    /**
     * Render a single template.
     */
    render(callback: EmailTemplateCallback): void;

    /**
     * Render a single template.
     * @param locals The template variables.
     */
    render(locals: any, callback: EmailTemplateCallback): void;

    /**
     * Render a single template.
     * @param locals The template variables.
     * @param locale The language code.
     */
    render(locals: any, locale: string, callback: EmailTemplateCallback): void;

    /**
     * Render text
     * @param locals The template variables.
     * @param locale The language code.
     */
    renderText(locals: any, locale?: string): Promise<string>;

    /**
     * Render text
     * @param locals The template variables.
     * @param callback The language code.
     */
    renderText(locals: any, callback: EmailTemplateCallback): void;

    /**
     * Render text
     * @param locals The template variables.
     * @param locale The language code.
     * @param callback The language code.
     */
    renderText(locals: any, locale: string, callback: EmailTemplateCallback): void;

    /**
     * Render subject
     * @param locals The template variables.
     * @param locale The language code.
     */
    renderSubject(locals: any, locale?: string): Promise<string>;

    /**
     * Render subject
     * @param locals The template variables.
     */
    renderSubject(locals: any, callback: EmailTemplateCallback): void;

    /**
     * Render subject
     * @param locals The template variables.
     * @param locale The language code.
     */
    renderSubject(locals: any, locale: string, callback: EmailTemplateCallback): void;

    /**
     * Render HTML
     * @param locals The template variables.
     * @param locale The language code.
     */
    renderHtml(locals: any, locale?: string): Promise<string>;

    /**
     * Render HTML
     * @param locals The template variables.
     */
    renderHtml(locals: any, callback: EmailTemplateCallback): void;

    /**
     * Render HTML
     * @param locals The template variables.
     * @param locale The language code.
     */
    renderHtml(locals: any, locale: string, callback: EmailTemplateCallback): void;
}
