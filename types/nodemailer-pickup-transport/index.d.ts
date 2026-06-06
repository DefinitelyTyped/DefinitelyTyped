import nodemailer = require("nodemailer");

declare namespace PickupTransport {
    export interface Options {
        directory: string;
    }
}

declare function PickupTransport(options: PickupTransport.Options): nodemailer.Transport;
export = PickupTransport;
