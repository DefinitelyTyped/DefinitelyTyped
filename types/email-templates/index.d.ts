// Type definitions for node-email-templates 7.1
// Project: https://github.com/forwardemail/email-templates
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
//                 Matus Gura <https://github.com/gurisko>
//                 Jacob Copeland <https://github.com/blankstar85>
//                 Vesa Poikajärvi <https://github.com/vesse>
//                 Philipp Katz <https://github.com/qqilihq>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 ksewo <https://github.com/ksewo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

/// <reference types="nodemailer"/>

import { HtmlToTextOptions } from 'html-to-text';
import JSONTransport = require('nodemailer/lib/json-transport');
import Mail = require('nodemailer/lib/mailer');
import SendmailTransport = require('nodemailer/lib/sendmail-transport');
import SESTransport = require('nodemailer/lib/ses-transport');
import SMTPPool = require('nodemailer/lib/smtp-pool');
import SMTPTransport = require('nodemailer/lib/smtp-transport');
import StreamTransport = require('nodemailer/lib/stream-transport');

declare namespace EmailTemplate {
    // email-templates accepts nodemailer.createTransport options directly
    // too and calls createTransport if given a non-function, thus a lot
    // of different types accepted for transport
    type NodeMailerTransportOptions =
        | Mail
        | SMTPPool
        | SMTPPool.Options
        | SendmailTransport
        | SendmailTransport.Options
        | StreamTransport
        | StreamTransport.Options
        | JSONTransport
        | JSONTransport.Options
        | SESTransport
        | SESTransport.Options
        | SMTPTransport
        | SMTPTransport.Options
        | string;

    // No typedef for https://github.com/forwardemail/preview-email
    interface PreviewEmailOpts {
        /**
         * a path to a directory for saving the generated email previews (defaults to os.tmpdir()
         */
        dir?: string;

        /**
         * https://github.com/sindresorhus/open
         */
        open?: any;

        /**
         * a unique ID for the file name created for the preview in dir (defaults to uuid.v4() from uuid)
         */
        id?: string;

        /**
         * a file path to a pug template file (defaults to preview-email's template.pug by default)
         */
        template?: string;
    }

     interface ViewOptions {
        /**
         *  View extansion. defaults to 'pug', and is the default file extension for templates
         */
        extension?: string;

        /**
         * a template file extension mapping, defaults to { hbs: 'handlebars', njk: 'nunjucks' }
         * (this is useful if you use different file extension naming conventions)
         */
        map?: any;

        /**
         *  the default template engine source, defaults to consolidate
         */
        engineSource?: any;
    }

     interface View {
        /**
         * View root. Defaults to the current working directory's "emails" folder via path.resolve('emails')
         */
        root?: string;

        options?: ViewOptions;
    }

     interface EmailConfig<T = any> {
        /**
         * The message <Nodemailer.com/message/>
         */
        message: Mail.Options;
        /**
         * The nodemailer Transport created via nodemailer.createTransport
         */
        transport?: NodeMailerTransportOptions;
        /**
         * The email template directory and engine information
         */
        views?: View;
        /**
         * Do you really want to send, false for test or development
         */
        send?: boolean;
        /**
         * Preview the email
         */
        preview?: boolean | PreviewEmailOpts;
        /**
         * Set to object to configure and Enable <https://github.com/ladjs/il8n>
         */
        i18n?: any;
        /**
         * defaults to false, unless you pass your own render function,
         * and in that case it will be automatically set to true.
         * @default false
         */
        customRender?: boolean;
        /**
         * Pass a custom render function if necessary
         */
        render?: (view: string, locals?: T) => Promise<any>;
        /**
         * force text-only rendering of template (disregards template folder)
         */
        textOnly?: boolean;
        /**
         * <Https://github.com/werk85/node-html-to-text>
         *
         * configuration object for html-to-text
         */
        htmlToText?: HtmlToTextOptions | false;
        /**
         * You can pass an option to prefix subject lines with a string
         * env === 'production' ? false : `[${env.toUpperCase()}] `; // <--- HERE
         */
        subjectPrefix?: string | false;
        /**
         * <https://github.com/Automattic/juice>
         */
        juice?: boolean;
        /**
         * <https://github.com/Automattic/juice>
         */
        juiceResources?: any;
        /**
         * a function that returns the path to a template file
         * @default (path: string, template: string) => string
         */
        getPath?: (path: string, template: string, locals: any) => string;
    }

     interface EmailOptions<T = any> {
        /**
         * The template name
         */
        template: string;
        /**
         * Nodemailer Message <Nodemailer.com/message/>
         *
         * Overrides what is given for constructor
         */
        message: Mail.Options;
        /**
         * The Template Variables
         */
        locals?: T;
    }

     interface EmailMessage {
        subject: string;
        html: string;
        text: string;
    }
}

declare class EmailTemplate<T = any> {
    constructor(config: EmailTemplate.EmailConfig);
    /**
     *   shorthand use of `juiceResources` with the config
     *   mainly for custom renders like from a database).
     */
    juiceResources(html: string): Promise<string>;
    /**
     *
     * @param view The Html pug to render
     * @param locals The template Variables
     */
    render(view: string, locals?: T): Promise<string>;
    /**
     * Render all available template files for a given email
     * template (e.g. `html.pug`, `text.pug`, and `subject.pug`)
     *
     * @param view Name of the template
     * @param locals The template variables
     */
    renderAll(view: string, locals?: T): Promise<Partial<EmailTemplate.EmailMessage>>;
    /**
     * Send the Email
     */
    send(options: EmailTemplate.EmailOptions<T>): Promise<any>;
}

export = EmailTemplate;
