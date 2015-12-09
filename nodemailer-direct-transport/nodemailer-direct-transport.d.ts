// Type definitions for nodemailer-direct-transport 1.0.2
// Project: https://github.com/andris9/nodemailer-direct-transport
// Definitions by: Rogier Schouten <https://github.com/rogierschouten/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../nodemailer/nodemailer-types.d.ts" />

declare module "nodemailer-direct-transport" {

	module directTransport {

		export interface AuthOptions {
			user?: string;
			pass?: string;
			xoauth2?: any;
		}

		export interface DirectOptions {
			/**
			 * optional hostname of the client, used for identifying to the server
			 */
			name?: string;
			/**
			 * if true, the connection emits all traffic between client and server as 'log' events
			 */
			debug?: boolean;
		}
	}

	function directTransport(options: directTransport.DirectOptions): nodemailer.Transport;

	export = directTransport;

}
