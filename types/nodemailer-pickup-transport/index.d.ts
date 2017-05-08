// Type definitions for nodemailer-pickup-transport v0.1.1
// Project: https://www.npmjs.com/package/nodemailer-pickup-transport
// Definitions by: Peter Snider <https://github.com/psnider/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import nodemailer = require('nodemailer');

declare namespace PickupTransport {
    export interface Options {
        directory: string;
    }
}

declare function PickupTransport(options: PickupTransport.Options): nodemailer.Transport;
export = PickupTransport;
