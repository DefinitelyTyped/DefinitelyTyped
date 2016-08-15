// Type definitions for nodemailer-pickup-transport v0.1.1
// Project: https://www.npmjs.com/package/nodemailer-pickup-transport
// Definitions by: Peter Snider <https://github.com/psnider/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../nodemailer/nodemailer.d.ts" />

declare module "nodemailer-pickup-transport" {

    namespace PickupTransport {
        export interface Options {
            directory: string;
        }
    }

    function PickupTransport(options: PickupTransport.Options): nodemailer.Transport;
    export = PickupTransport;
}

