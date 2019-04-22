// Type definitions for node-email-templates 3.5
// Project: https://github.com/niftylettuce/email-templates
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
//                 Matus Gura <https://github.com/gurisko>
//                 Jacob Copeland <https://github.com/blankstar85>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface EmailConfig {
    /**
     * The message <Nodemailer.com/message/>
     */
    message: any;
    /**
     * The nodemailer Transport created via nodemailer.createTransport
     */
    transport?: any;
    /**
     * The email template directory and engine information
     */
    views?: any;
    /**
     *     Do you really want to send, false for test or development
     */
    send?: boolean;
    /**
     * Preview the email
     */
    preview?: boolean;
    /**
     * Set to object to configure and Enable <https://github.com/ladjs/il8n>
     */
    i18n?: any;
    /**
     * Pass a custom render function if necessary
     */
    render?: { view: string, locals: any };
    /**
     * force text-only rendering of template (disregards template folder)
     */
    textOnly?: boolean;
    /**
     * <Https://github.com/werk85/node-html-to-text>
     */
    htmlToText?: any;
    /**
     * You can pass an option to prefix subject lines with a string
     * env === 'production' ? false : `[${env.toUpperCase()}] `; // <--- HERE
     */
    subjectPrefix?: any;
    /**
     * <https://github.com/Automattic/juice>
     */
    juice?: boolean;
    /**
     * <https://github.com/Automattic/juice>
     */
    juiceResources?: any;
}

interface EmailOptions {
    /**
     * The template name
     */
    template: string;
    /**
     * Nodemailer Message <Nodemailer.com/message/>
     */
    message: any;
    /**
     * The Template Variables
     */
    locals: any;
}

declare class EmailTemplate {
    constructor(config: EmailConfig);
    /**
     *   shorthand use of `juiceResources` with the config
     *   mainly for custom renders like from a database).
     */
    juiceResources(html: string): Promise<string> ;
    /**
     *
     * @param view The Html pug to render
     * @param locals The template Variables
     */
    render(view: string, locals: any): Promise<string>;
    /**
     * Send the Email
     */
    send(options: EmailOptions): any;
}

declare namespace EmailTemplate {
        /**
         *   shorthand use of `juiceResources` with the config
         *   mainly for custom renders like from a database).
         */
        function juiceResources(html: string): Promise<string> ;

        /**
         *
         * @param view The Html pug to render
         * @param locals The template Variables
         */
        function render(view: string, locals: any): Promise<string>;

        /**
         * Send the Email
         */
        function send(options: EmailOptions): any;
}
export = EmailTemplate;
