// Type definitions for preview-email 2.0
// Project: https://github.com/niftylettuce/preview-email
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import { Options as NodeMailerOptions } from 'nodemailer/lib/mailer';

/**
 * Automatically opens your browser to preview Node.js email messages sent with Nodemailer. Made for Lad!
 *
 * The function `previewEmail` returns a `Promise` which resolves with a URL.
 * We automatically open the browser to this URL unless you specify options.open as false
 */
declare function previewEmail(message: NodeMailerOptions, options?: previewEmail.Options): Promise<string>;

declare namespace previewEmail {
    interface Options {
        /**
         * a unique ID for the file name created for the preview in dir (defaults to `uuid.v4()` from `uuid`)
         */
        id?: string;
        /**
         *  a path to a directory for saving the generated email previews (defaults to `os.tmpdir()`)
         */
        dir?: string;
        /**
         * an options object that is passed to open (defaults to `{ wait: false }`).
         * If set to `false` then it will not open the email automatically in the browser using open,
         * and if set to true then it will default to `{ wait: false }`
         * @default { wait: false }
         */
        open?: OpenOptions | boolean;
        /**
         *  file path to a pug template file (defaults to preview-email's `template.pug` by default)
         * - this is where you can pass a custom template for rendering email previews, e.g. your own stylesheet
         */
        template?: string;
        /**
         * a function to build preview url from file path
         * - this is where you can customize the opened path to handle WSL to Windows transformation or build a http url if dir is served.
         * @default (path) => 'file://[file path]'
         */
        urlTransform?: UrlTransform;
    }

    interface OpenOptions {
        /** @default false */
        wait?: boolean;
    }

    /**
     * a function to build preview url from file path
     */
    interface UrlTransform {
        (path: string): string;
    }
}

export = previewEmail;
