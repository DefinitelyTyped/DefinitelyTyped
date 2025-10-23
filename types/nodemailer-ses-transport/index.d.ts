import AWS = require("aws-sdk2-types");
import nodemailer = require("nodemailer");

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
