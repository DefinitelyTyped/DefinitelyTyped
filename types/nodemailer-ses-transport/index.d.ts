import * as AWS from "aws-sdk2-types";
import * as nodemailer from "nodemailer";

declare namespace sesTransport {
    interface SesOptions {
        SES: AWS.SES;
        component?: string | undefined;
        maxConnections?: number | undefined;
        sendingRate?: number | undefined;
    }
}

declare function sesTransport(options: sesTransport.SesOptions): nodemailer.Transport;

export = sesTransport;
