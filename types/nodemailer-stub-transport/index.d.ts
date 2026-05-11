import * as nodemailer from "nodemailer";

declare namespace StubTransportStatic {
    /**
     * Options.
     * @interface
     */
    export interface Options {
        /**
         * Specifies a custom error.
         */
        error?: any;

        /**
         * Value that indicates if the BCC addresses must be included in generated message.
         */
        keepBcc?: boolean | undefined;
    }
}

/**
 * Creates a stub transport.
 * @param {Options} [options] Options.
 * @return {Transport} The stub transport.
 */
declare function stubTransport(options?: StubTransportStatic.Options): nodemailer.Transport;
export = stubTransport;
