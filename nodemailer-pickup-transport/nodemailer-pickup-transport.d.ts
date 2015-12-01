// Type definitions for nodemailer-pickup-transport v0.1.1
// Project: https://www.npmjs.com/package/nodemailer-pickup-transport
// Definitions by: Peter Snider <https://github.com/psnider/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../nodemailer/nodemailer-types.d.ts" />

declare module "nodemailer-pickup-transport" {

    module PickupTransport {
        export interface Options {
            directory: string;
        }
    }

    function PickupTransport(options: PickupTransport.Options): nodemailer.Transport;
    export = PickupTransport;
}

