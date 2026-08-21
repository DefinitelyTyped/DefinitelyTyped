import { Transport } from "nodemailer";

declare namespace nodemailerSendgrid {
    interface SendgridOptions {
        apiKey: string;
    }
}

declare function nodemailerSendgrid(options: nodemailerSendgrid.SendgridOptions): Transport;

export = nodemailerSendgrid;
