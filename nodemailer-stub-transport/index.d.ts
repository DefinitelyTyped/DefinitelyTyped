// Type definitions for nodemailer-stub-transport v1.1.0
// Project: https://github.com/andris9/nodemailer-stub-transport
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../nodemailer/nodemailer.d.ts"/>

declare module "nodemailer-stub-transport" {
    import * as nodemailer from "nodemailer";

    namespace StubTransportStatic {
        /**
         * Options.
         * @interface
         */
        export interface Options {
            /**
             * Specifies a custom error.
             * @type {any}
             */
            error?: any;

            /**
             * Value that indicates if the BCC addresses must be included in generated message.
             * @type {boolean}
             */
            keepBcc?: boolean;
        }
    }

    /**
     * Creates a stub transport.
     * @param {Options} [options] Options.
     * @return {Transport} The stub transport.
     */
    function stubTransport(options?: StubTransportStatic.Options): nodemailer.Transport;
    export = stubTransport;
}
