/// <reference types="node" />

import type { SimpleParserOptions } from "mailparser";
import type { Options as NodeMailerOptions } from "nodemailer/lib/mailer";

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
        id?: string | undefined;
        /**
         *  a path to a directory for saving the generated email previews (defaults to `os.tmpdir()`)
         */
        dir?: string | undefined;
        /**
         * an options object that is passed to open (defaults to `{ wait: false }`).
         * If set to `false` then it will not open the email automatically in the browser using open,
         * and if set to true then it will default to `{ wait: false }`
         * @default { wait: false }
         */
        open?: OpenOptions | boolean | undefined;
        /**
         *  file path to a pug template file (defaults to preview-email's `template.pug` by default)
         * - this is where you can pass a custom template for rendering email previews, e.g. your own stylesheet
         */
        template?: string | undefined;
        /**
         * a function to build preview url from file path
         * - this is where you can customize the opened path to handle WSL to Windows transformation or build a http url if dir is served.
         * @default (path) => 'file://[file path]'
         */
        urlTransform?: UrlTransform | undefined;
        /**
         * whether or not to open the iOS Simulator with the preview url file path
         * (defaults to true via process.env.NODE_ENV !== 'test' and will only run if macOS detected and not in a CI environment)
         * @default true
         */
        openSimulator?: boolean | undefined;
        /**
         * an options Object to pass to `mailparser`'s `simpleParser` method
         * (see [mailparser docs](https://nodemailer.com/extras/mailparser/#options) for available options
         * – note that `Iconv` option is always overridden for safeguard)
         */
        simpleParser?: Omit<SimpleParserOptions, "Iconv"> | undefined;
        /**
         * whether or not to return HTML only – and subsequently not write nor open the file preview file
         * @default false
         */
        returnHtml?: boolean | undefined;
    }

    interface OpenOptions {
        /** @default false */
        wait?: boolean | undefined;
    }

    /**
     * a function to build preview url from file path
     */
    interface UrlTransform {
        (path: string): string;
    }
}

export = previewEmail;
