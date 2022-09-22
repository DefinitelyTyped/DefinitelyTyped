// Type definitions for node-email-templates 10.0
// Project: https://github.com/forwardemail/email-templates
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
//                 Matus Gura <https://github.com/gurisko>
//                 Jacob Copeland <https://github.com/blankstar85>
//                 Vesa Poikajärvi <https://github.com/vesse>
//                 Philipp Katz <https://github.com/qqilihq>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 ksewo <https://github.com/ksewo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="nodemailer"/>

import { HtmlToTextOptions } from 'html-to-text';
import JSONTransport = require('nodemailer/lib/json-transport');
import Mail = require('nodemailer/lib/mailer');
import SendmailTransport = require('nodemailer/lib/sendmail-transport');
import SESTransport = require('nodemailer/lib/ses-transport');
import SMTPPool = require('nodemailer/lib/smtp-pool');
import SMTPTransport = require('nodemailer/lib/smtp-transport');
import StreamTransport = require('nodemailer/lib/stream-transport');
import juice = require('juice');

declare namespace Email {
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
        dir?: string | undefined;

        /**
         * https://github.com/sindresorhus/open
         */
        open?: any;

        /**
         * a unique ID for the file name created for the preview in dir (defaults to uuid.v4() from uuid)
         */
        id?: string | undefined;

        /**
         * a file path to a pug template file (defaults to preview-email's template.pug by default)
         */
        template?: string | undefined;

        /**
         * Whether or not to open the iOS Simulator with the preview url file path.
         * Defaults to true via process.env.NODE_ENV !== 'test' and will only run if macOS detected and not in a CI environment.
         */
        openSimulator?: boolean | undefined;

        /**
         * A function to build preview url from file path.
         * Defaults to (path) => 'file://[file path]'.
         * This is where you can customize the opened path to handle WSL to Windows transformation or build a http url if dir is served.
         */
        urlTransform?: ((path: string) => string) | undefined;
    }

     interface ViewOptions {
        /**
         *  View extension. defaults to 'pug', and is the default file extension for templates
         */
        extension?: string | undefined;

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
        root?: string | undefined;

        options?: ViewOptions | undefined;

        /**
         * Default locals to pass to templates for rendering
         */
        locals?: {
            /**
             * Whether or not to cache templates.
             * Defaults to false for development and test environments, and true for all others (via process.env.NODE_ENV)
             */
            cache?: boolean | undefined;
            /**
             * @deprecated
             * Adds whitespace to the resulting HTML to make it easier for a human to read using '  ' as indentation.
             * Defaults to true, but is automatically set to false for subject templates and text-based emails
             */
            pretty?: boolean | undefined;
            [key: string]: any;
        } | undefined;
    }

     interface EmailConfig<T = any> {
         /**
          * The message <Nodemailer.com/message/>
          */
         message?: Mail.Options | undefined;
         /**
          * The nodemailer Transport created via nodemailer.createTransport
          */
         transport?: NodeMailerTransportOptions | undefined;
         /**
          * The email template directory and engine information
          */
         views?: View | undefined;
         /**
          * Do you really want to send, false for test or development
          */
         send?: boolean | undefined;
         /**
          * Preview the email
          */
         preview?: boolean | PreviewEmailOpts | undefined;
         /**
          * Set to object to configure and Enable <https://github.com/ladjs/il8n>
          */
         i18n?: any;
         /**
          * defaults to false, unless you pass your own render function,
          * and in that case it will be automatically set to true.
          * @default false
          */
         customRender?: boolean | undefined;
         /**
          * Pass a custom render function if necessary
          */
         render?: ((view: string, locals?: T) => Promise<any>) | undefined;
         /**
          * force text-only rendering of template (disregards template folder)
          */
         textOnly?: boolean | undefined;
         /**
          * <Https://github.com/werk85/node-html-to-text>
          *
          * configuration object for html-to-text
          */
         htmlToText?: HtmlToTextOptions | false | undefined;
         /**
          * You can pass an option to prefix subject lines with a string
          * env === 'production' ? false : `[${env.toUpperCase()}] `; // <--- HERE
          */
         subjectPrefix?: string | false | undefined;
         /**
          * <https://github.com/Automattic/juice>
          */
         juice?: boolean | undefined;
         juiceSettings?: JuiceGlobalConfig | undefined;
         /**
          * <https://github.com/Automattic/juice>
          */
         juiceResources?: juice.Options | undefined;
         /**
          * a function that returns the path to a template file
          * @default (path: string, template: string) => string
          */
         getPath?: ((path: string, template: string, locals: any) => string) | undefined;
     }

     type JuiceGlobalConfig = Partial<{
        codeBlocks: typeof juice.codeBlocks;
        excludedProperties: typeof juice.excludedProperties;
        heightElements: string[];
        ignoredPseudos: typeof juice.ignoredPseudos;
        nonVisualElements: typeof juice.nonVisualElements;
        styleToAttribute: typeof juice.styleToAttribute;
        tableElements: string[];
        widthElements: string[];
     }>;

     interface EmailOptions<T = any> {
        /**
         * The template name
         */
        template?: string | undefined;
        /**
         * Nodemailer Message <Nodemailer.com/message/>
         *
         * Overrides what is given for constructor
         */
        message?: Mail.Options | undefined;
        /**
         * The Template Variables
         */
        locals?: T | undefined;
    }

     interface EmailMessage {
        subject: string;
        html: string;
        text: string;
    }
}

declare class Email<T = any> {
    constructor(config?: Email.EmailConfig);

    /**
     *   shorthand use of `juiceResources` with the config
     *   mainly for custom renders like from a database).
     */
    juiceResources(html: string, options?: juice.Options): Promise<string>;

    /**
     * @async
     * @param view The Html pug to render
     * @param locals The template Variables
     */
    render(view: string, locals?: T): Promise<string>;

    /**
     * Render all available template files for a given email
     * template (e.g. `html.pug`, `text.pug`, and `subject.pug`)
     *
     * @async
     * @param view Name of the template
     * @param locals The template variables
     */
    renderAll(view: string, locals?: T): Promise<Partial<Email.EmailMessage>>;

    /**
     * Send the Email
     * @async
     */
    send(options?: Email.EmailOptions<T>): Promise<any>;
}

export = Email;
