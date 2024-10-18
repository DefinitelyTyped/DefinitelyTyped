import * as nodemailer from "nodemailer";

declare namespace directTransport {
    export interface AuthOptions {
        user?: string | undefined;
        pass?: string | undefined;
        xoauth2?: any;
    }

    export interface DirectOptions {
        /**
         * optional hostname of the client, used for identifying to the server
         */
        name?: string | undefined;
        /**
         * if true, the connection emits all traffic between client and server as 'log' events
         */
        debug?: boolean | undefined;
    }
}

declare function directTransport(options: directTransport.DirectOptions): nodemailer.Transport;

export = directTransport;
